// These adapters require a user-hosted library, not a public comic service.
const selfHostedSources = ["lanraragi", "komga", "kavita"];

export function applyCiPolicy(config) {
  const sources = { ...config.sources };
  for (const key of selfHostedSources) {
    sources[key] = {
      ...sources[key],
      broken: "需要本地或自建部署的漫画服务，GitHub 巡检跳过",
    };
  }
  return { ...config, sources };
}
