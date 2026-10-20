import { randomBytes } from "node:crypto";
import { PatrolError, classify } from "./errors.js";

/** Venera APIs newer than the pinned runtime, without changing that dependency. */
export function installRuntimeCompatibility(globals, observer) {
  globals.secureRandomBytes = (length) => {
    if (!Number.isInteger(length) || length < 1 || length > 4096)
      throw new RangeError("secureRandomBytes length must be an integer from 1 to 4096");
    return new Uint8Array(randomBytes(length));
  };
  const network = globals.Network;
  globals.Network = { ...network };
  for (const method of ["sendRequest", "fetchBytes"]) {
    globals.Network[method] = (verb, url, headers, data, extra) => {
      // http_client selects a host transport; it is not an HTTP header.
      const transportHeaders = headers && Object.fromEntries(
        Object.entries(headers).filter(([key]) => key.toLowerCase() !== "http_client"),
      );
      return observer.withNetworkOptions(extra, async () => {
        try {
          return await network[method](verb, url, transportHeaders, data, extra);
        } catch (error) {
          if (extra?.maskDataInLog === true || extra?.maskResponseInLog === true || extra?.maskQueryInLog === true)
            throw new PatrolError(classify(error), "Network request failed (details masked)");
          throw error;
        }
      });
    };
  }
}
