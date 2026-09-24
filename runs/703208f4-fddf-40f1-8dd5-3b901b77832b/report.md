# Venera 巡检报告

运行：703208f4-fddf-40f1-8dd5-3b901b77832b

源：33；通过：2；失败：23；未完整检查：8；手动跳过：0

通过仅表示本次样本和参数通过，不代表所有漫画、设置组合或所有分页均正常。

## copy_manga — failed

能力检查：6/16；源版本：1.4.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 257 |  |
| source.load | passed |  | 89 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 139 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.login | skipped | credentials_missing | 3 | Provide credentials.username and password |
| category | passed |  | 1 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1034 |  |
| search.load.page[2] | failed | dns_error | 274 | Network request failed: fetch failed |
| explore[0].load | failed | dns_error | 511 | Network request failed: fetch failed |
| categoryComics.load | failed | dns_error | 508 | Network request failed: fetch failed |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | failed | dns_error | 749 | Network request failed: fetch failed |
| comic.loadEp | skipped | missing_input | 1 | Provide inputs.epId or successful comic.loadInfo |
| comic.loadComments | failed | dns_error | 747 | Network request failed: fetch failed |
| comic.loadChapterComments | skipped | missing_input | 0 | Provide inputs.epId or successful comic.loadInfo |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 321 |  |
| thumbnail.decode | passed |  | 41 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendChapterComment | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| settings.clear_device_info.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].itemType | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].categories[42] | string |
| category.parts[1].categories[43] | string |
| category.parts[1].categories[44] | string |
| category.parts[1].categories[45] | string |
| category.parts[1].categories[46] | string |
| category.parts[1].categories[47] | string |
| category.parts[1].categories[48] | string |
| category.parts[1].categories[49] | string |
| category.parts[1].categories[50] | string |
| category.parts[1].categories[51] | string |
| category.parts[1].categories[52] | string |
| category.parts[1].categories[53] | string |
| category.parts[1].categories[54] | string |
| category.parts[1].categories[55] | string |
| category.parts[1].categories[56] | string |
| category.parts[1].categories[57] | string |
| category.parts[1].categories[58] | string |
| category.parts[1].categories[59] | string |
| category.parts[1].categories[60] | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.parts[1].categoryParams[30] | string |
| category.parts[1].categoryParams[31] | string |
| category.parts[1].categoryParams[32] | string |
| category.parts[1].categoryParams[33] | string |
| category.parts[1].categoryParams[34] | string |
| category.parts[1].categoryParams[35] | string |
| category.parts[1].categoryParams[36] | string |
| category.parts[1].categoryParams[37] | string |
| category.parts[1].categoryParams[38] | string |
| category.parts[1].categoryParams[39] | string |
| category.parts[1].categoryParams[40] | string |
| category.parts[1].categoryParams[41] | string |
| category.parts[1].categoryParams[42] | string |
| category.parts[1].categoryParams[43] | string |
| category.parts[1].categoryParams[44] | string |
| category.parts[1].categoryParams[45] | string |
| category.parts[1].categoryParams[46] | string |
| category.parts[1].categoryParams[47] | string |
| category.parts[1].categoryParams[48] | string |
| category.parts[1].categoryParams[49] | string |
| category.parts[1].categoryParams[50] | string |
| category.parts[1].categoryParams[51] | string |
| category.parts[1].categoryParams[52] | string |
| category.parts[1].categoryParams[53] | string |
| category.parts[1].categoryParams[54] | string |
| category.parts[1].categoryParams[55] | string |
| category.parts[1].categoryParams[56] | string |
| category.parts[1].categoryParams[57] | string |
| category.parts[1].categoryParams[58] | string |
| category.parts[1].categoryParams[59] | string |
| category.parts[1].categoryParams[60] | string |
| category.parts[1].itemType | string |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].showWhen | array |
| categoryComics.optionList[0].showWhen[0] | string |
| categoryComics.optionList[0].showWhen[1] | string |
| categoryComics.optionList[0].showWhen[2] | string |
| categoryComics.optionList[0].showWhen[3] | string |
| categoryComics.optionList[0].showWhen[4] | string |
| categoryComics.optionList[0].showWhen[5] | string |
| categoryComics.optionList[0].showWhen[6] | string |
| categoryComics.optionList[0].showWhen[7] | string |
| categoryComics.optionList[0].showWhen[8] | string |
| categoryComics.optionList[0].showWhen[9] | string |
| categoryComics.optionList[0].showWhen[10] | string |
| categoryComics.optionList[0].showWhen[11] | string |
| categoryComics.optionList[0].showWhen[12] | string |
| categoryComics.optionList[0].showWhen[13] | string |
| categoryComics.optionList[0].showWhen[14] | string |
| categoryComics.optionList[0].showWhen[15] | string |
| categoryComics.optionList[0].showWhen[16] | string |
| categoryComics.optionList[0].showWhen[17] | string |
| categoryComics.optionList[0].showWhen[18] | string |
| categoryComics.optionList[0].showWhen[19] | string |
| categoryComics.optionList[0].showWhen[20] | string |
| categoryComics.optionList[0].showWhen[21] | string |
| categoryComics.optionList[0].showWhen[22] | string |
| categoryComics.optionList[0].showWhen[23] | string |
| categoryComics.optionList[0].showWhen[24] | string |
| categoryComics.optionList[0].showWhen[25] | string |
| categoryComics.optionList[0].showWhen[26] | string |
| categoryComics.optionList[0].showWhen[27] | string |
| categoryComics.optionList[0].showWhen[28] | string |
| categoryComics.optionList[0].showWhen[29] | string |
| categoryComics.optionList[0].showWhen[30] | string |
| categoryComics.optionList[0].showWhen[31] | string |
| categoryComics.optionList[0].showWhen[32] | string |
| categoryComics.optionList[0].showWhen[33] | string |
| categoryComics.optionList[0].showWhen[34] | string |
| categoryComics.optionList[0].showWhen[35] | string |
| categoryComics.optionList[0].showWhen[36] | string |
| categoryComics.optionList[0].showWhen[37] | string |
| categoryComics.optionList[0].showWhen[38] | string |
| categoryComics.optionList[0].showWhen[39] | string |
| categoryComics.optionList[0].showWhen[40] | string |
| categoryComics.optionList[0].showWhen[41] | string |
| categoryComics.optionList[0].showWhen[42] | string |
| categoryComics.optionList[0].showWhen[43] | string |
| categoryComics.optionList[0].showWhen[44] | string |
| categoryComics.optionList[0].showWhen[45] | string |
| categoryComics.optionList[0].showWhen[46] | string |
| categoryComics.optionList[0].showWhen[47] | string |
| categoryComics.optionList[0].showWhen[48] | string |
| categoryComics.optionList[0].showWhen[49] | string |
| categoryComics.optionList[0].showWhen[50] | string |
| categoryComics.optionList[0].showWhen[51] | string |
| categoryComics.optionList[0].showWhen[52] | string |
| categoryComics.optionList[0].showWhen[53] | string |
| categoryComics.optionList[0].showWhen[54] | string |
| categoryComics.optionList[0].showWhen[55] | string |
| categoryComics.optionList[0].showWhen[56] | string |
| categoryComics.optionList[0].showWhen[57] | string |
| categoryComics.optionList[0].showWhen[58] | string |
| categoryComics.optionList[0].showWhen[59] | string |
| categoryComics.optionList[0].showWhen[60] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].showWhen | array |
| categoryComics.optionList[1].showWhen[0] | string |
| categoryComics.optionList[1].showWhen[1] | string |
| categoryComics.optionList[1].showWhen[2] | string |
| categoryComics.optionList[1].showWhen[3] | string |
| categoryComics.optionList[1].showWhen[4] | string |
| categoryComics.optionList[1].showWhen[5] | string |
| categoryComics.optionList[1].showWhen[6] | string |
| categoryComics.optionList[1].showWhen[7] | string |
| categoryComics.optionList[1].showWhen[8] | string |
| categoryComics.optionList[1].showWhen[9] | string |
| categoryComics.optionList[1].showWhen[10] | string |
| categoryComics.optionList[1].showWhen[11] | string |
| categoryComics.optionList[1].showWhen[12] | string |
| categoryComics.optionList[1].showWhen[13] | string |
| categoryComics.optionList[1].showWhen[14] | string |
| categoryComics.optionList[1].showWhen[15] | string |
| categoryComics.optionList[1].showWhen[16] | string |
| categoryComics.optionList[1].showWhen[17] | string |
| categoryComics.optionList[1].showWhen[18] | string |
| categoryComics.optionList[1].showWhen[19] | string |
| categoryComics.optionList[1].showWhen[20] | string |
| categoryComics.optionList[1].showWhen[21] | string |
| categoryComics.optionList[1].showWhen[22] | string |
| categoryComics.optionList[1].showWhen[23] | string |
| categoryComics.optionList[1].showWhen[24] | string |
| categoryComics.optionList[1].showWhen[25] | string |
| categoryComics.optionList[1].showWhen[26] | string |
| categoryComics.optionList[1].showWhen[27] | string |
| categoryComics.optionList[1].showWhen[28] | string |
| categoryComics.optionList[1].showWhen[29] | string |
| categoryComics.optionList[1].showWhen[30] | string |
| categoryComics.optionList[1].showWhen[31] | string |
| categoryComics.optionList[1].showWhen[32] | string |
| categoryComics.optionList[1].showWhen[33] | string |
| categoryComics.optionList[1].showWhen[34] | string |
| categoryComics.optionList[1].showWhen[35] | string |
| categoryComics.optionList[1].showWhen[36] | string |
| categoryComics.optionList[1].showWhen[37] | string |
| categoryComics.optionList[1].showWhen[38] | string |
| categoryComics.optionList[1].showWhen[39] | string |
| categoryComics.optionList[1].showWhen[40] | string |
| categoryComics.optionList[1].showWhen[41] | string |
| categoryComics.optionList[1].showWhen[42] | string |
| categoryComics.optionList[1].showWhen[43] | string |
| categoryComics.optionList[1].showWhen[44] | string |
| categoryComics.optionList[1].showWhen[45] | string |
| categoryComics.optionList[1].showWhen[46] | string |
| categoryComics.optionList[1].showWhen[47] | string |
| categoryComics.optionList[1].showWhen[48] | string |
| categoryComics.optionList[1].showWhen[49] | string |
| categoryComics.optionList[1].showWhen[50] | string |
| categoryComics.optionList[1].showWhen[51] | string |
| categoryComics.optionList[1].showWhen[52] | string |
| categoryComics.optionList[1].showWhen[53] | string |
| categoryComics.optionList[1].showWhen[54] | string |
| categoryComics.optionList[1].showWhen[55] | string |
| categoryComics.optionList[1].showWhen[56] | string |
| categoryComics.optionList[1].showWhen[57] | string |
| categoryComics.optionList[1].showWhen[58] | string |
| categoryComics.optionList[1].showWhen[59] | string |
| categoryComics.optionList[1].showWhen[60] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].showWhen | array |
| categoryComics.optionList[2].showWhen[0] | string |
| categoryComics.optionList[3] | object |
| categoryComics.optionList[3].options | array |
| categoryComics.optionList[3].options[0] | string |
| categoryComics.optionList[3].options[1] | string |
| categoryComics.optionList[3].options[2] | string |
| categoryComics.optionList[3].options[3] | string |
| categoryComics.optionList[3].showWhen | array |
| categoryComics.optionList[3].showWhen[0] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.loadChapterComments | function |
| comic.sendChapterComment | function |
| comic.onClickTag | function |
| settings | object |
| settings.favorites_ordering | object |
| settings.favorites_ordering.title | string |
| settings.favorites_ordering.type | string |
| settings.favorites_ordering.options | array |
| settings.favorites_ordering.options[0] | object |
| settings.favorites_ordering.options[0].value | string |
| settings.favorites_ordering.options[0].text | string |
| settings.favorites_ordering.options[1] | object |
| settings.favorites_ordering.options[1].value | string |
| settings.favorites_ordering.options[1].text | string |
| settings.favorites_ordering.options[2] | object |
| settings.favorites_ordering.options[2].value | string |
| settings.favorites_ordering.options[2].text | string |
| settings.favorites_ordering.default | string |
| settings.region | object |
| settings.region.title | string |
| settings.region.type | string |
| settings.region.options | array |
| settings.region.options[0] | object |
| settings.region.options[0].value | string |
| settings.region.options[0].text | string |
| settings.region.options[1] | object |
| settings.region.options[1].value | string |
| settings.region.options[1].text | string |
| settings.region.default | string |
| settings.image_quality | object |
| settings.image_quality.title | string |
| settings.image_quality.type | string |
| settings.image_quality.options | array |
| settings.image_quality.options[0] | object |
| settings.image_quality.options[0].value | string |
| settings.image_quality.options[0].text | string |
| settings.image_quality.options[1] | object |
| settings.image_quality.options[1].value | string |
| settings.image_quality.options[1].text | string |
| settings.image_quality.options[2] | object |
| settings.image_quality.options[2].value | string |
| settings.image_quality.options[2].text | string |
| settings.image_quality.default | string |
| settings.search_api | object |
| settings.search_api.title | string |
| settings.search_api.type | string |
| settings.search_api.options | array |
| settings.search_api.options[0] | object |
| settings.search_api.options[0].value | string |
| settings.search_api.options[0].text | string |
| settings.search_api.options[1] | object |
| settings.search_api.options[1].value | string |
| settings.search_api.options[1].text | string |
| settings.search_api.default | string |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.validator | string |
| settings.base_url.default | string |
| settings.clear_device_info | object |
| settings.clear_device_info.title | string |
| settings.clear_device_info.type | string |
| settings.clear_device_info.buttonText | string |
| settings.clear_device_info.callback | function |

</details>

## copy_manga_multi_accounts — partial

能力检查：8/20；源版本：1.4.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 244 |  |
| source.load | passed |  | 115 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 125 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | skipped | missing_input | 1 | Provide inputs.keyword |
| explore[0].load | passed |  | 11308 |  |
| categoryComics.load | passed |  | 217 |  |
| categoryComics.load.page[2] | passed |  | 259 |  |
| favorites.loadFolders | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 723 |  |
| comic.loadEp | passed |  | 255 |  |
| comic.loadComments | passed |  | 262 |  |
| comic.loadChapterComments | passed |  | 287 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 50 |  |
| image.decode | passed |  | 98 |  |
| image.download | passed |  | 116 |  |
| image.decode | passed |  | 42 |  |
| thumbnail.download | passed |  | 200 |  |
| thumbnail.decode | passed |  | 7 |  |
| account.logout | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| comic.sendChapterComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.help.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.clear_device_info.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.login_sub_accounts.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.clear_sub_accounts.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].itemType | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].categories[42] | string |
| category.parts[1].categories[43] | string |
| category.parts[1].categories[44] | string |
| category.parts[1].categories[45] | string |
| category.parts[1].categories[46] | string |
| category.parts[1].categories[47] | string |
| category.parts[1].categories[48] | string |
| category.parts[1].categories[49] | string |
| category.parts[1].categories[50] | string |
| category.parts[1].categories[51] | string |
| category.parts[1].categories[52] | string |
| category.parts[1].categories[53] | string |
| category.parts[1].categories[54] | string |
| category.parts[1].categories[55] | string |
| category.parts[1].categories[56] | string |
| category.parts[1].categories[57] | string |
| category.parts[1].categories[58] | string |
| category.parts[1].categories[59] | string |
| category.parts[1].categories[60] | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.parts[1].categoryParams[30] | string |
| category.parts[1].categoryParams[31] | string |
| category.parts[1].categoryParams[32] | string |
| category.parts[1].categoryParams[33] | string |
| category.parts[1].categoryParams[34] | string |
| category.parts[1].categoryParams[35] | string |
| category.parts[1].categoryParams[36] | string |
| category.parts[1].categoryParams[37] | string |
| category.parts[1].categoryParams[38] | string |
| category.parts[1].categoryParams[39] | string |
| category.parts[1].categoryParams[40] | string |
| category.parts[1].categoryParams[41] | string |
| category.parts[1].categoryParams[42] | string |
| category.parts[1].categoryParams[43] | string |
| category.parts[1].categoryParams[44] | string |
| category.parts[1].categoryParams[45] | string |
| category.parts[1].categoryParams[46] | string |
| category.parts[1].categoryParams[47] | string |
| category.parts[1].categoryParams[48] | string |
| category.parts[1].categoryParams[49] | string |
| category.parts[1].categoryParams[50] | string |
| category.parts[1].categoryParams[51] | string |
| category.parts[1].categoryParams[52] | string |
| category.parts[1].categoryParams[53] | string |
| category.parts[1].categoryParams[54] | string |
| category.parts[1].categoryParams[55] | string |
| category.parts[1].categoryParams[56] | string |
| category.parts[1].categoryParams[57] | string |
| category.parts[1].categoryParams[58] | string |
| category.parts[1].categoryParams[59] | string |
| category.parts[1].categoryParams[60] | string |
| category.parts[1].itemType | string |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].showWhen | array |
| categoryComics.optionList[0].showWhen[0] | string |
| categoryComics.optionList[0].showWhen[1] | string |
| categoryComics.optionList[0].showWhen[2] | string |
| categoryComics.optionList[0].showWhen[3] | string |
| categoryComics.optionList[0].showWhen[4] | string |
| categoryComics.optionList[0].showWhen[5] | string |
| categoryComics.optionList[0].showWhen[6] | string |
| categoryComics.optionList[0].showWhen[7] | string |
| categoryComics.optionList[0].showWhen[8] | string |
| categoryComics.optionList[0].showWhen[9] | string |
| categoryComics.optionList[0].showWhen[10] | string |
| categoryComics.optionList[0].showWhen[11] | string |
| categoryComics.optionList[0].showWhen[12] | string |
| categoryComics.optionList[0].showWhen[13] | string |
| categoryComics.optionList[0].showWhen[14] | string |
| categoryComics.optionList[0].showWhen[15] | string |
| categoryComics.optionList[0].showWhen[16] | string |
| categoryComics.optionList[0].showWhen[17] | string |
| categoryComics.optionList[0].showWhen[18] | string |
| categoryComics.optionList[0].showWhen[19] | string |
| categoryComics.optionList[0].showWhen[20] | string |
| categoryComics.optionList[0].showWhen[21] | string |
| categoryComics.optionList[0].showWhen[22] | string |
| categoryComics.optionList[0].showWhen[23] | string |
| categoryComics.optionList[0].showWhen[24] | string |
| categoryComics.optionList[0].showWhen[25] | string |
| categoryComics.optionList[0].showWhen[26] | string |
| categoryComics.optionList[0].showWhen[27] | string |
| categoryComics.optionList[0].showWhen[28] | string |
| categoryComics.optionList[0].showWhen[29] | string |
| categoryComics.optionList[0].showWhen[30] | string |
| categoryComics.optionList[0].showWhen[31] | string |
| categoryComics.optionList[0].showWhen[32] | string |
| categoryComics.optionList[0].showWhen[33] | string |
| categoryComics.optionList[0].showWhen[34] | string |
| categoryComics.optionList[0].showWhen[35] | string |
| categoryComics.optionList[0].showWhen[36] | string |
| categoryComics.optionList[0].showWhen[37] | string |
| categoryComics.optionList[0].showWhen[38] | string |
| categoryComics.optionList[0].showWhen[39] | string |
| categoryComics.optionList[0].showWhen[40] | string |
| categoryComics.optionList[0].showWhen[41] | string |
| categoryComics.optionList[0].showWhen[42] | string |
| categoryComics.optionList[0].showWhen[43] | string |
| categoryComics.optionList[0].showWhen[44] | string |
| categoryComics.optionList[0].showWhen[45] | string |
| categoryComics.optionList[0].showWhen[46] | string |
| categoryComics.optionList[0].showWhen[47] | string |
| categoryComics.optionList[0].showWhen[48] | string |
| categoryComics.optionList[0].showWhen[49] | string |
| categoryComics.optionList[0].showWhen[50] | string |
| categoryComics.optionList[0].showWhen[51] | string |
| categoryComics.optionList[0].showWhen[52] | string |
| categoryComics.optionList[0].showWhen[53] | string |
| categoryComics.optionList[0].showWhen[54] | string |
| categoryComics.optionList[0].showWhen[55] | string |
| categoryComics.optionList[0].showWhen[56] | string |
| categoryComics.optionList[0].showWhen[57] | string |
| categoryComics.optionList[0].showWhen[58] | string |
| categoryComics.optionList[0].showWhen[59] | string |
| categoryComics.optionList[0].showWhen[60] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].showWhen | array |
| categoryComics.optionList[1].showWhen[0] | string |
| categoryComics.optionList[1].showWhen[1] | string |
| categoryComics.optionList[1].showWhen[2] | string |
| categoryComics.optionList[1].showWhen[3] | string |
| categoryComics.optionList[1].showWhen[4] | string |
| categoryComics.optionList[1].showWhen[5] | string |
| categoryComics.optionList[1].showWhen[6] | string |
| categoryComics.optionList[1].showWhen[7] | string |
| categoryComics.optionList[1].showWhen[8] | string |
| categoryComics.optionList[1].showWhen[9] | string |
| categoryComics.optionList[1].showWhen[10] | string |
| categoryComics.optionList[1].showWhen[11] | string |
| categoryComics.optionList[1].showWhen[12] | string |
| categoryComics.optionList[1].showWhen[13] | string |
| categoryComics.optionList[1].showWhen[14] | string |
| categoryComics.optionList[1].showWhen[15] | string |
| categoryComics.optionList[1].showWhen[16] | string |
| categoryComics.optionList[1].showWhen[17] | string |
| categoryComics.optionList[1].showWhen[18] | string |
| categoryComics.optionList[1].showWhen[19] | string |
| categoryComics.optionList[1].showWhen[20] | string |
| categoryComics.optionList[1].showWhen[21] | string |
| categoryComics.optionList[1].showWhen[22] | string |
| categoryComics.optionList[1].showWhen[23] | string |
| categoryComics.optionList[1].showWhen[24] | string |
| categoryComics.optionList[1].showWhen[25] | string |
| categoryComics.optionList[1].showWhen[26] | string |
| categoryComics.optionList[1].showWhen[27] | string |
| categoryComics.optionList[1].showWhen[28] | string |
| categoryComics.optionList[1].showWhen[29] | string |
| categoryComics.optionList[1].showWhen[30] | string |
| categoryComics.optionList[1].showWhen[31] | string |
| categoryComics.optionList[1].showWhen[32] | string |
| categoryComics.optionList[1].showWhen[33] | string |
| categoryComics.optionList[1].showWhen[34] | string |
| categoryComics.optionList[1].showWhen[35] | string |
| categoryComics.optionList[1].showWhen[36] | string |
| categoryComics.optionList[1].showWhen[37] | string |
| categoryComics.optionList[1].showWhen[38] | string |
| categoryComics.optionList[1].showWhen[39] | string |
| categoryComics.optionList[1].showWhen[40] | string |
| categoryComics.optionList[1].showWhen[41] | string |
| categoryComics.optionList[1].showWhen[42] | string |
| categoryComics.optionList[1].showWhen[43] | string |
| categoryComics.optionList[1].showWhen[44] | string |
| categoryComics.optionList[1].showWhen[45] | string |
| categoryComics.optionList[1].showWhen[46] | string |
| categoryComics.optionList[1].showWhen[47] | string |
| categoryComics.optionList[1].showWhen[48] | string |
| categoryComics.optionList[1].showWhen[49] | string |
| categoryComics.optionList[1].showWhen[50] | string |
| categoryComics.optionList[1].showWhen[51] | string |
| categoryComics.optionList[1].showWhen[52] | string |
| categoryComics.optionList[1].showWhen[53] | string |
| categoryComics.optionList[1].showWhen[54] | string |
| categoryComics.optionList[1].showWhen[55] | string |
| categoryComics.optionList[1].showWhen[56] | string |
| categoryComics.optionList[1].showWhen[57] | string |
| categoryComics.optionList[1].showWhen[58] | string |
| categoryComics.optionList[1].showWhen[59] | string |
| categoryComics.optionList[1].showWhen[60] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].showWhen | array |
| categoryComics.optionList[2].showWhen[0] | string |
| categoryComics.optionList[3] | object |
| categoryComics.optionList[3].options | array |
| categoryComics.optionList[3].options[0] | string |
| categoryComics.optionList[3].options[1] | string |
| categoryComics.optionList[3].options[2] | string |
| categoryComics.optionList[3].options[3] | string |
| categoryComics.optionList[3].showWhen | array |
| categoryComics.optionList[3].showWhen[0] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.singleFolderForSingleComic | boolean |
| favorites.loadFolders | function |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.loadChapterComments | function |
| comic.sendChapterComment | function |
| comic.onClickTag | function |
| settings | object |
| settings.help | object |
| settings.help.title | string |
| settings.help.type | string |
| settings.help.buttonText | string |
| settings.help.callback | function |
| settings.favorites_ordering | object |
| settings.favorites_ordering.title | string |
| settings.favorites_ordering.type | string |
| settings.favorites_ordering.options | array |
| settings.favorites_ordering.options[0] | object |
| settings.favorites_ordering.options[0].value | string |
| settings.favorites_ordering.options[0].text | string |
| settings.favorites_ordering.options[1] | object |
| settings.favorites_ordering.options[1].value | string |
| settings.favorites_ordering.options[1].text | string |
| settings.favorites_ordering.options[2] | object |
| settings.favorites_ordering.options[2].value | string |
| settings.favorites_ordering.options[2].text | string |
| settings.favorites_ordering.default | string |
| settings.region | object |
| settings.region.title | string |
| settings.region.type | string |
| settings.region.options | array |
| settings.region.options[0] | object |
| settings.region.options[0].value | string |
| settings.region.options[0].text | string |
| settings.region.options[1] | object |
| settings.region.options[1].value | string |
| settings.region.options[1].text | string |
| settings.region.default | string |
| settings.image_quality | object |
| settings.image_quality.title | string |
| settings.image_quality.type | string |
| settings.image_quality.options | array |
| settings.image_quality.options[0] | object |
| settings.image_quality.options[0].value | string |
| settings.image_quality.options[0].text | string |
| settings.image_quality.options[1] | object |
| settings.image_quality.options[1].value | string |
| settings.image_quality.options[1].text | string |
| settings.image_quality.options[2] | object |
| settings.image_quality.options[2].value | string |
| settings.image_quality.options[2].text | string |
| settings.image_quality.default | string |
| settings.search_api | object |
| settings.search_api.title | string |
| settings.search_api.type | string |
| settings.search_api.options | array |
| settings.search_api.options[0] | object |
| settings.search_api.options[0].value | string |
| settings.search_api.options[0].text | string |
| settings.search_api.options[1] | object |
| settings.search_api.options[1].value | string |
| settings.search_api.options[1].text | string |
| settings.search_api.default | string |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.validator | string |
| settings.base_url.default | string |
| settings.clear_device_info | object |
| settings.clear_device_info.title | string |
| settings.clear_device_info.type | string |
| settings.clear_device_info.buttonText | string |
| settings.clear_device_info.callback | function |
| settings.sub_accounts | object |
| settings.sub_accounts.title | string |
| settings.sub_accounts.type | string |
| settings.sub_accounts.default | string |
| settings.sub_accounts.description | string |
| settings.login_sub_accounts | object |
| settings.login_sub_accounts.title | string |
| settings.login_sub_accounts.type | string |
| settings.login_sub_accounts.buttonText | string |
| settings.login_sub_accounts.callback | function |
| settings.clear_sub_accounts | object |
| settings.clear_sub_accounts.title | string |
| settings.clear_sub_accounts.type | string |
| settings.clear_sub_accounts.buttonText | string |
| settings.clear_sub_accounts.callback | function |

</details>

## Komiic — failed

能力检查：8/16；源版本：1.0.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 169 |  |
| source.load | passed |  | 37 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| search.load | passed |  | 676 |  |
| explore[0].load | failed | contract_violation | 384 | maxPage must be a nonnegative integer |
| categoryComics.load | failed | contract_violation | 2103 | maxPage must be a nonnegative integer |
| categoryComics.ranking.load | failed | contract_violation | 412 | maxPage must be a nonnegative integer |
| favorites.loadFolders | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1073 |  |
| comic.loadEp | passed |  | 375 |  |
| comic.loadComments | passed |  | 237 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 719 |  |
| image.decode | passed |  | 57 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 673 |  |
| image.decode | passed |  | 12 |  |
| thumbnail.download | passed |  | 238 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.deleteFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.enableRankingPage | boolean |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadFolders | function |
| favorites.addFolder | function |
| favorites.deleteFolder | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.loadComments | function |
| comic.sendComment | function |

</details>

## baozi — failed

能力检查：5/9；源版本：1.1.6

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 176 |  |
| source.load | passed |  | 39 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 1 |  |
| search.load | passed |  | 1709 |  |
| explore[0].load | failed | contract_violation | 658 | Comic requires valid id, title and cover |
| categoryComics.load | failed | contract_violation | 375 | maxPage must be a nonnegative integer |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 435 |  |
| comic.loadEp | failed | anti_bot | 111 | Invalid status code: 403 |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 450 |  |
| thumbnail.decode | passed |  | 39 |  |
| account.logout | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| settings | object |
| settings.language | object |
| settings.language.title | string |
| settings.language.type | string |
| settings.language.options | array |
| settings.language.options[0] | object |
| settings.language.options[0].value | string |
| settings.language.options[0].text | string |
| settings.language.options[1] | object |
| settings.language.options[1].value | string |
| settings.language.options[1].text | string |
| settings.language.default | string |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.options | array |
| settings.domains.options[0] | object |
| settings.domains.options[0].value | string |
| settings.domains.options[1] | object |
| settings.domains.options[1].value | string |
| settings.domains.options[2] | object |
| settings.domains.options[2].value | string |
| settings.domains.options[3] | object |
| settings.domains.options[3].value | string |
| settings.domains.options[4] | object |
| settings.domains.options[4].value | string |
| settings.domains.options[5] | object |
| settings.domains.options[5].value | string |
| settings.domains.default | string |
| settings.cdn_domains | object |
| settings.cdn_domains.title | string |
| settings.cdn_domains.type | string |
| settings.cdn_domains.options | array |
| settings.cdn_domains.options[0] | object |
| settings.cdn_domains.options[0].value | string |
| settings.cdn_domains.options[1] | object |
| settings.cdn_domains.options[1].value | string |
| settings.cdn_domains.options[2] | object |
| settings.cdn_domains.options[2].value | string |
| settings.cdn_domains.options[3] | object |
| settings.cdn_domains.options[3].value | string |
| settings.cdn_domains.options[4] | object |
| settings.cdn_domains.options[4].value | string |
| settings.cdn_domains.options[5] | object |
| settings.cdn_domains.options[5].value | string |
| settings.cdn_domains.options[5].text | string |
| settings.cdn_domains.default | string |
| settings.image_quality | object |
| settings.image_quality.title | string |
| settings.image_quality.type | string |
| settings.image_quality.options | array |
| settings.image_quality.options[0] | object |
| settings.image_quality.options[0].value | string |
| settings.image_quality.options[0].text | string |
| settings.image_quality.options[1] | object |
| settings.image_quality.options[1].value | string |
| settings.image_quality.options[1].text | string |
| settings.image_quality.default | string |

</details>

## picacg — failed

能力检查：8/22；源版本：1.0.6

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 197 |  |
| source.load | passed |  | 51 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for picacg; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | auth_required | 347 | Not logged in |
| explore[0].load | failed | config_error | 0 | Not logged in |
| explore[1].load | failed | config_error | 1 | Not logged in |
| explore[2].load | failed | config_error | 0 | Not logged in |
| explore[3].load | failed | config_error | 1 | Not logged in |
| explore[4].load | failed | config_error | 0 | Not logged in |
| categoryComics.load | failed | auth_required | 583 | Not logged in |
| categoryComics.ranking.load | failed | auth_required | 255 | Not logged in |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadComments | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| account.reLogin | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.likeComic | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.onImageLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.likeComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.reLogin | function |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| explore[1] | object |
| explore[1].title | string |
| explore[1].type | string |
| explore[1].load | function |
| explore[2] | object |
| explore[2].title | string |
| explore[2].type | string |
| explore[2].load | function |
| explore[3] | object |
| explore[3].title | string |
| explore[3].type | string |
| explore[3].load | function |
| explore[4] | object |
| explore[4].title | string |
| explore[4].type | string |
| explore[4].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categories[39] | string |
| category.parts[0].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.likeComic | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.likeComment | function |
| comic.onClickTag | function |
| settings | object |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.default | string |
| settings.imageQuality | object |
| settings.imageQuality.type | string |
| settings.imageQuality.title | string |
| settings.imageQuality.options | array |
| settings.imageQuality.options[0] | object |
| settings.imageQuality.options[0].value | string |
| settings.imageQuality.options[1] | object |
| settings.imageQuality.options[1].value | string |
| settings.imageQuality.options[2] | object |
| settings.imageQuality.options[2].value | string |
| settings.imageQuality.default | string |
| settings.appChannel | object |
| settings.appChannel.type | string |
| settings.appChannel.title | string |
| settings.appChannel.options | array |
| settings.appChannel.options[0] | object |
| settings.appChannel.options[0].value | string |
| settings.appChannel.options[1] | object |
| settings.appChannel.options[1].value | string |
| settings.appChannel.options[2] | object |
| settings.appChannel.options[2].value | string |
| settings.appChannel.default | string |
| settings.favoriteSort | object |
| settings.favoriteSort.type | string |
| settings.favoriteSort.title | string |
| settings.favoriteSort.options | array |
| settings.favoriteSort.options[0] | object |
| settings.favoriteSort.options[0].value | string |
| settings.favoriteSort.options[0].text | string |
| settings.favoriteSort.options[1] | object |
| settings.favoriteSort.options[1].value | string |
| settings.favoriteSort.options[1].text | string |
| settings.favoriteSort.default | string |

</details>

## nhentai — partial

能力检查：11/17；源版本：1.1.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 192 |  |
| source.load | passed |  | 71 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 1 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 368 |  |
| search.load.page[2] | passed |  | 238 |  |
| explore[0].load | passed |  | 458 |  |
| explore[0].load.page[2] | passed |  | 245 |  |
| categoryComics.load | passed |  | 240 |  |
| categoryComics.load.page[2] | passed |  | 249 |  |
| categoryComics.ranking.load | passed |  | 307 |  |
| categoryComics.ranking.load.page[2] | passed |  | 253 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 200 |  |
| comic.loadEp | passed |  | 239 |  |
| comic.loadComments | passed |  | 256 |  |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.idMatch | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 1072 |  |
| image.decode | passed |  | 85 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 168 |  |
| image.decode | passed |  | 55 |  |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | passed |  | 676 |  |
| thumbnail.decode | passed |  | 17 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].itemType | string |
| category.parts[0].groupParam | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].randomNumber | number |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].categories[42] | string |
| category.parts[1].categories[43] | string |
| category.parts[1].categories[44] | string |
| category.parts[1].categories[45] | string |
| category.parts[1].categories[46] | string |
| category.parts[1].categories[47] | string |
| category.parts[1].categories[48] | string |
| category.parts[1].categories[49] | string |
| category.parts[1].categories[50] | string |
| category.parts[1].categories[51] | string |
| category.parts[1].categories[52] | string |
| category.parts[1].categories[53] | string |
| category.parts[1].categories[54] | string |
| category.parts[1].categories[55] | string |
| category.parts[1].categories[56] | string |
| category.parts[1].categories[57] | string |
| category.parts[1].categories[58] | string |
| category.parts[1].categories[59] | string |
| category.parts[1].categories[60] | string |
| category.parts[1].categories[61] | string |
| category.parts[1].categories[62] | string |
| category.parts[1].categories[63] | string |
| category.parts[1].categories[64] | string |
| category.parts[1].categories[65] | string |
| category.parts[1].categories[66] | string |
| category.parts[1].categories[67] | string |
| category.parts[1].categories[68] | string |
| category.parts[1].categories[69] | string |
| category.parts[1].categories[70] | string |
| category.parts[1].categories[71] | string |
| category.parts[1].categories[72] | string |
| category.parts[1].categories[73] | string |
| category.parts[1].categories[74] | string |
| category.parts[1].categories[75] | string |
| category.parts[1].categories[76] | string |
| category.parts[1].categories[77] | string |
| category.parts[1].categories[78] | string |
| category.parts[1].categories[79] | string |
| category.parts[1].categories[80] | string |
| category.parts[1].categories[81] | string |
| category.parts[1].categories[82] | string |
| category.parts[1].categories[83] | string |
| category.parts[1].categories[84] | string |
| category.parts[1].categories[85] | string |
| category.parts[1].categories[86] | string |
| category.parts[1].categories[87] | string |
| category.parts[1].categories[88] | string |
| category.parts[1].categories[89] | string |
| category.parts[1].categories[90] | string |
| category.parts[1].categories[91] | string |
| category.parts[1].categories[92] | string |
| category.parts[1].categories[93] | string |
| category.parts[1].categories[94] | string |
| category.parts[1].categories[95] | string |
| category.parts[1].categories[96] | string |
| category.parts[1].categories[97] | string |
| category.parts[1].categories[98] | string |
| category.parts[1].categories[99] | string |
| category.parts[1].categories[100] | string |
| category.parts[1].categories[101] | string |
| category.parts[1].categories[102] | string |
| category.parts[1].categories[103] | string |
| category.parts[1].categories[104] | string |
| category.parts[1].categories[105] | string |
| category.parts[1].categories[106] | string |
| category.parts[1].categories[107] | string |
| category.parts[1].categories[108] | string |
| category.parts[1].categories[109] | string |
| category.parts[1].categories[110] | string |
| category.parts[1].categories[111] | string |
| category.parts[1].categories[112] | string |
| category.parts[1].categories[113] | string |
| category.parts[1].categories[114] | string |
| category.parts[1].categories[115] | string |
| category.parts[1].categories[116] | string |
| category.parts[1].categories[117] | string |
| category.parts[1].categories[118] | string |
| category.parts[1].categories[119] | string |
| category.parts[1].categories[120] | string |
| category.parts[1].categories[121] | string |
| category.parts[1].categories[122] | string |
| category.parts[1].categories[123] | string |
| category.parts[1].categories[124] | string |
| category.parts[1].categories[125] | string |
| category.parts[1].categories[126] | string |
| category.parts[1].categories[127] | string |
| category.parts[1].categories[128] | string |
| category.parts[1].categories[129] | string |
| category.parts[1].categories[130] | string |
| category.parts[1].categories[131] | string |
| category.parts[1].categories[132] | string |
| category.parts[1].categories[133] | string |
| category.parts[1].categories[134] | string |
| category.parts[1].categories[135] | string |
| category.parts[1].categories[136] | string |
| category.parts[1].categories[137] | string |
| category.parts[1].categories[138] | string |
| category.parts[1].categories[139] | string |
| category.parts[1].categories[140] | string |
| category.parts[1].categories[141] | string |
| category.parts[1].categories[142] | string |
| category.parts[1].categories[143] | string |
| category.parts[1].categories[144] | string |
| category.parts[1].categories[145] | string |
| category.parts[1].categories[146] | string |
| category.parts[1].categories[147] | string |
| category.parts[1].categories[148] | string |
| category.parts[1].categories[149] | string |
| category.parts[1].categories[150] | string |
| category.parts[1].categories[151] | string |
| category.parts[1].categories[152] | string |
| category.parts[1].categories[153] | string |
| category.parts[1].categories[154] | string |
| category.parts[1].categories[155] | string |
| category.parts[1].categories[156] | string |
| category.parts[1].categories[157] | string |
| category.parts[1].categories[158] | string |
| category.parts[1].categories[159] | string |
| category.parts[1].categories[160] | string |
| category.parts[1].categories[161] | string |
| category.parts[1].categories[162] | string |
| category.parts[1].categories[163] | string |
| category.parts[1].categories[164] | string |
| category.parts[1].categories[165] | string |
| category.parts[1].categories[166] | string |
| category.parts[1].categories[167] | string |
| category.parts[1].categories[168] | string |
| category.parts[1].categories[169] | string |
| category.parts[1].categories[170] | string |
| category.parts[1].categories[171] | string |
| category.parts[1].categories[172] | string |
| category.parts[1].categories[173] | string |
| category.parts[1].categories[174] | string |
| category.parts[1].categories[175] | string |
| category.parts[1].categories[176] | string |
| category.parts[1].categories[177] | string |
| category.parts[1].categories[178] | string |
| category.parts[1].categories[179] | string |
| category.parts[1].categories[180] | string |
| category.parts[1].categories[181] | string |
| category.parts[1].categories[182] | string |
| category.parts[1].categories[183] | string |
| category.parts[1].categories[184] | string |
| category.parts[1].categories[185] | string |
| category.parts[1].categories[186] | string |
| category.parts[1].categories[187] | string |
| category.parts[1].categories[188] | string |
| category.parts[1].categories[189] | string |
| category.parts[1].categories[190] | string |
| category.parts[1].categories[191] | string |
| category.parts[1].categories[192] | string |
| category.parts[1].categories[193] | string |
| category.parts[1].categories[194] | string |
| category.parts[1].categories[195] | string |
| category.parts[1].categories[196] | string |
| category.parts[1].categories[197] | string |
| category.parts[1].categories[198] | string |
| category.parts[1].categories[199] | string |
| category.parts[1].categories[200] | string |
| category.parts[1].categories[201] | string |
| category.parts[1].categories[202] | string |
| category.parts[1].categories[203] | string |
| category.parts[1].categories[204] | string |
| category.parts[1].categories[205] | string |
| category.parts[1].categories[206] | string |
| category.parts[1].categories[207] | string |
| category.parts[1].categories[208] | string |
| category.parts[1].categories[209] | string |
| category.parts[1].categories[210] | string |
| category.parts[1].categories[211] | string |
| category.parts[1].categories[212] | string |
| category.parts[1].categories[213] | string |
| category.parts[1].categories[214] | string |
| category.parts[1].categories[215] | string |
| category.parts[1].categories[216] | string |
| category.parts[1].categories[217] | string |
| category.parts[1].categories[218] | string |
| category.parts[1].categories[219] | string |
| category.parts[1].categories[220] | string |
| category.parts[1].categories[221] | string |
| category.parts[1].categories[222] | string |
| category.parts[1].categories[223] | string |
| category.parts[1].categories[224] | string |
| category.parts[1].categories[225] | string |
| category.parts[1].categories[226] | string |
| category.parts[1].categories[227] | string |
| category.parts[1].categories[228] | string |
| category.parts[1].categories[229] | string |
| category.parts[1].categories[230] | string |
| category.parts[1].categories[231] | string |
| category.parts[1].categories[232] | string |
| category.parts[1].categories[233] | string |
| category.parts[1].categories[234] | string |
| category.parts[1].categories[235] | string |
| category.parts[1].categories[236] | string |
| category.parts[1].categories[237] | string |
| category.parts[1].categories[238] | string |
| category.parts[1].categories[239] | string |
| category.parts[1].categories[240] | string |
| category.parts[1].categories[241] | string |
| category.parts[1].categories[242] | string |
| category.parts[1].categories[243] | string |
| category.parts[1].categories[244] | string |
| category.parts[1].categories[245] | string |
| category.parts[1].categories[246] | string |
| category.parts[1].categories[247] | string |
| category.parts[1].categories[248] | string |
| category.parts[1].categories[249] | string |
| category.parts[1].categories[250] | string |
| category.parts[1].categories[251] | string |
| category.parts[1].categories[252] | string |
| category.parts[1].categories[253] | string |
| category.parts[1].categories[254] | string |
| category.parts[1].categories[255] | string |
| category.parts[1].categories[256] | string |
| category.parts[1].categories[257] | string |
| category.parts[1].categories[258] | string |
| category.parts[1].categories[259] | string |
| category.parts[1].categories[260] | string |
| category.parts[1].categories[261] | string |
| category.parts[1].categories[262] | string |
| category.parts[1].categories[263] | string |
| category.parts[1].categories[264] | string |
| category.parts[1].categories[265] | string |
| category.parts[1].categories[266] | string |
| category.parts[1].categories[267] | string |
| category.parts[1].categories[268] | string |
| category.parts[1].categories[269] | string |
| category.parts[1].categories[270] | string |
| category.parts[1].categories[271] | string |
| category.parts[1].categories[272] | string |
| category.parts[1].categories[273] | string |
| category.parts[1].categories[274] | string |
| category.parts[1].categories[275] | string |
| category.parts[1].categories[276] | string |
| category.parts[1].categories[277] | string |
| category.parts[1].categories[278] | string |
| category.parts[1].categories[279] | string |
| category.parts[1].categories[280] | string |
| category.parts[1].categories[281] | string |
| category.parts[1].categories[282] | string |
| category.parts[1].categories[283] | string |
| category.parts[1].categories[284] | string |
| category.parts[1].categories[285] | string |
| category.parts[1].categories[286] | string |
| category.parts[1].categories[287] | string |
| category.parts[1].categories[288] | string |
| category.parts[1].categories[289] | string |
| category.parts[1].categories[290] | string |
| category.parts[1].categories[291] | string |
| category.parts[1].categories[292] | string |
| category.parts[1].categories[293] | string |
| category.parts[1].categories[294] | string |
| category.parts[1].categories[295] | string |
| category.parts[1].categories[296] | string |
| category.parts[1].categories[297] | string |
| category.parts[1].categories[298] | string |
| category.parts[1].categories[299] | string |
| category.parts[1].categories[300] | string |
| category.parts[1].categories[301] | string |
| category.parts[1].categories[302] | string |
| category.parts[1].categories[303] | string |
| category.parts[1].categories[304] | string |
| category.parts[1].categories[305] | string |
| category.parts[1].categories[306] | string |
| category.parts[1].categories[307] | string |
| category.parts[1].categories[308] | string |
| category.parts[1].categories[309] | string |
| category.parts[1].categories[310] | string |
| category.parts[1].categories[311] | string |
| category.parts[1].categories[312] | string |
| category.parts[1].categories[313] | string |
| category.parts[1].categories[314] | string |
| category.parts[1].categories[315] | string |
| category.parts[1].categories[316] | string |
| category.parts[1].categories[317] | string |
| category.parts[1].categories[318] | string |
| category.parts[1].categories[319] | string |
| category.parts[1].categories[320] | string |
| category.parts[1].categories[321] | string |
| category.parts[1].categories[322] | string |
| category.parts[1].categories[323] | string |
| category.parts[1].categories[324] | string |
| category.parts[1].categories[325] | string |
| category.parts[1].categories[326] | string |
| category.parts[1].categories[327] | string |
| category.parts[1].categories[328] | string |
| category.parts[1].categories[329] | string |
| category.parts[1].categories[330] | string |
| category.parts[1].categories[331] | string |
| category.parts[1].categories[332] | string |
| category.parts[1].categories[333] | string |
| category.parts[1].categories[334] | string |
| category.parts[1].categories[335] | string |
| category.parts[1].categories[336] | string |
| category.parts[1].categories[337] | string |
| category.parts[1].categories[338] | string |
| category.parts[1].categories[339] | string |
| category.parts[1].categories[340] | string |
| category.parts[1].categories[341] | string |
| category.parts[1].categories[342] | string |
| category.parts[1].categories[343] | string |
| category.parts[1].categories[344] | string |
| category.parts[1].categories[345] | string |
| category.parts[1].categories[346] | string |
| category.parts[1].categories[347] | string |
| category.parts[1].categories[348] | string |
| category.parts[1].categories[349] | string |
| category.parts[1].categories[350] | string |
| category.parts[1].categories[351] | string |
| category.parts[1].categories[352] | string |
| category.parts[1].categories[353] | string |
| category.parts[1].categories[354] | string |
| category.parts[1].categories[355] | string |
| category.parts[1].categories[356] | string |
| category.parts[1].categories[357] | string |
| category.parts[1].categories[358] | string |
| category.parts[1].categories[359] | string |
| category.parts[1].categories[360] | string |
| category.parts[1].categories[361] | string |
| category.parts[1].categories[362] | string |
| category.parts[1].categories[363] | string |
| category.parts[1].categories[364] | string |
| category.parts[1].categories[365] | string |
| category.parts[1].categories[366] | string |
| category.parts[1].categories[367] | string |
| category.parts[1].categories[368] | string |
| category.parts[1].categories[369] | string |
| category.parts[1].categories[370] | string |
| category.parts[1].categories[371] | string |
| category.parts[1].categories[372] | string |
| category.parts[1].categories[373] | string |
| category.parts[1].categories[374] | string |
| category.parts[1].categories[375] | string |
| category.parts[1].categories[376] | string |
| category.parts[1].categories[377] | string |
| category.parts[1].categories[378] | string |
| category.parts[1].categories[379] | string |
| category.parts[1].categories[380] | string |
| category.parts[1].categories[381] | string |
| category.parts[1].categories[382] | string |
| category.parts[1].categories[383] | string |
| category.parts[1].categories[384] | string |
| category.parts[1].categories[385] | string |
| category.parts[1].categories[386] | string |
| category.parts[1].categories[387] | string |
| category.parts[1].categories[388] | string |
| category.parts[1].categories[389] | string |
| category.parts[1].categories[390] | string |
| category.parts[1].categories[391] | string |
| category.parts[1].categories[392] | string |
| category.parts[1].categories[393] | string |
| category.parts[1].categories[394] | string |
| category.parts[1].categories[395] | string |
| category.parts[1].categories[396] | string |
| category.parts[1].categories[397] | string |
| category.parts[1].categories[398] | string |
| category.parts[1].categories[399] | string |
| category.parts[1].categories[400] | string |
| category.parts[1].categories[401] | string |
| category.parts[1].categories[402] | string |
| category.parts[1].categories[403] | string |
| category.parts[1].categories[404] | string |
| category.parts[1].categories[405] | string |
| category.parts[1].categories[406] | string |
| category.parts[1].categories[407] | string |
| category.parts[1].categories[408] | string |
| category.parts[1].categories[409] | string |
| category.parts[1].categories[410] | string |
| category.parts[1].categories[411] | string |
| category.parts[1].categories[412] | string |
| category.parts[1].categories[413] | string |
| category.parts[1].categories[414] | string |
| category.parts[1].categories[415] | string |
| category.parts[1].categories[416] | string |
| category.parts[1].categories[417] | string |
| category.parts[1].categories[418] | string |
| category.parts[1].categories[419] | string |
| category.parts[1].categories[420] | string |
| category.parts[1].categories[421] | string |
| category.parts[1].categories[422] | string |
| category.parts[1].categories[423] | string |
| category.parts[1].categories[424] | string |
| category.parts[1].categories[425] | string |
| category.parts[1].categories[426] | string |
| category.parts[1].categories[427] | string |
| category.parts[1].categories[428] | string |
| category.parts[1].categories[429] | string |
| category.parts[1].categories[430] | string |
| category.parts[1].categories[431] | string |
| category.parts[1].categories[432] | string |
| category.parts[1].categories[433] | string |
| category.parts[1].categories[434] | string |
| category.parts[1].categories[435] | string |
| category.parts[1].categories[436] | string |
| category.parts[1].categories[437] | string |
| category.parts[1].categories[438] | string |
| category.parts[1].categories[439] | string |
| category.parts[1].categories[440] | string |
| category.parts[1].categories[441] | string |
| category.parts[1].categories[442] | string |
| category.parts[1].categories[443] | string |
| category.parts[1].categories[444] | string |
| category.parts[1].categories[445] | string |
| category.parts[1].categories[446] | string |
| category.parts[1].categories[447] | string |
| category.parts[1].categories[448] | string |
| category.parts[1].categories[449] | string |
| category.parts[1].categories[450] | string |
| category.parts[1].categories[451] | string |
| category.parts[1].categories[452] | string |
| category.parts[1].categories[453] | string |
| category.parts[1].categories[454] | string |
| category.parts[1].categories[455] | string |
| category.parts[1].categories[456] | string |
| category.parts[1].categories[457] | string |
| category.parts[1].categories[458] | string |
| category.parts[1].categories[459] | string |
| category.parts[1].categories[460] | string |
| category.parts[1].categories[461] | string |
| category.parts[1].categories[462] | string |
| category.parts[1].categories[463] | string |
| category.parts[1].categories[464] | string |
| category.parts[1].categories[465] | string |
| category.parts[1].categories[466] | string |
| category.parts[1].categories[467] | string |
| category.parts[1].categories[468] | string |
| category.parts[1].categories[469] | string |
| category.parts[1].categories[470] | string |
| category.parts[1].categories[471] | string |
| category.parts[1].categories[472] | string |
| category.parts[1].categories[473] | string |
| category.parts[1].categories[474] | string |
| category.parts[1].categories[475] | string |
| category.parts[1].categories[476] | string |
| category.parts[1].categories[477] | string |
| category.parts[1].categories[478] | string |
| category.parts[1].categories[479] | string |
| category.parts[1].categories[480] | string |
| category.parts[1].categories[481] | string |
| category.parts[1].categories[482] | string |
| category.parts[1].categories[483] | string |
| category.parts[1].categories[484] | string |
| category.parts[1].categories[485] | string |
| category.parts[1].categories[486] | string |
| category.parts[1].categories[487] | string |
| category.parts[1].categories[488] | string |
| category.parts[1].categories[489] | string |
| category.parts[1].categories[490] | string |
| category.parts[1].categories[491] | string |
| category.parts[1].categories[492] | string |
| category.parts[1].categories[493] | string |
| category.parts[1].categories[494] | string |
| category.parts[1].categories[495] | string |
| category.parts[1].categories[496] | string |
| category.parts[1].categories[497] | string |
| category.parts[1].categories[498] | string |
| category.parts[1].categories[499] | string |
| category.parts[1].categories[500] | string |
| category.parts[1].categories[501] | string |
| category.parts[1].categories[502] | string |
| category.parts[1].categories[503] | string |
| category.parts[1].categories[504] | string |
| category.parts[1].categories[505] | string |
| category.parts[1].categories[506] | string |
| category.parts[1].categories[507] | string |
| category.parts[1].categories[508] | string |
| category.parts[1].categories[509] | string |
| category.parts[1].categories[510] | string |
| category.parts[1].categories[511] | string |
| category.parts[1].categories[512] | string |
| category.parts[1].categories[513] | string |
| category.parts[1].categories[514] | string |
| category.parts[1].categories[515] | string |
| category.parts[1].categories[516] | string |
| category.parts[1].categories[517] | string |
| category.parts[1].categories[518] | string |
| category.parts[1].categories[519] | string |
| category.parts[1].categories[520] | string |
| category.parts[1].categories[521] | string |
| category.parts[1].categories[522] | string |
| category.parts[1].categories[523] | string |
| category.parts[1].categories[524] | string |
| category.parts[1].categories[525] | string |
| category.parts[1].categories[526] | string |
| category.parts[1].categories[527] | string |
| category.parts[1].categories[528] | string |
| category.parts[1].categories[529] | string |
| category.parts[1].categories[530] | string |
| category.parts[1].categories[531] | string |
| category.parts[1].categories[532] | string |
| category.parts[1].categories[533] | string |
| category.parts[1].categories[534] | string |
| category.parts[1].categories[535] | string |
| category.parts[1].categories[536] | string |
| category.parts[1].categories[537] | string |
| category.parts[1].categories[538] | string |
| category.parts[1].categories[539] | string |
| category.parts[1].categories[540] | string |
| category.parts[1].categories[541] | string |
| category.parts[1].categories[542] | string |
| category.parts[1].categories[543] | string |
| category.parts[1].categories[544] | string |
| category.parts[1].categories[545] | string |
| category.parts[1].categories[546] | string |
| category.parts[1].categories[547] | string |
| category.parts[1].categories[548] | string |
| category.parts[1].categories[549] | string |
| category.parts[1].categories[550] | string |
| category.parts[1].categories[551] | string |
| category.parts[1].categories[552] | string |
| category.parts[1].categories[553] | string |
| category.parts[1].categories[554] | string |
| category.parts[1].categories[555] | string |
| category.parts[1].categories[556] | string |
| category.parts[1].categories[557] | string |
| category.parts[1].categories[558] | string |
| category.parts[1].categories[559] | string |
| category.parts[1].categories[560] | string |
| category.parts[1].categories[561] | string |
| category.parts[1].categories[562] | string |
| category.parts[1].categories[563] | string |
| category.parts[1].categories[564] | string |
| category.parts[1].categories[565] | string |
| category.parts[1].categories[566] | string |
| category.parts[1].categories[567] | string |
| category.parts[1].categories[568] | string |
| category.parts[1].categories[569] | string |
| category.parts[1].categories[570] | string |
| category.parts[1].categories[571] | string |
| category.parts[1].categories[572] | string |
| category.parts[1].categories[573] | string |
| category.parts[1].categories[574] | string |
| category.parts[1].categories[575] | string |
| category.parts[1].categories[576] | string |
| category.parts[1].categories[577] | string |
| category.parts[1].categories[578] | string |
| category.parts[1].categories[579] | string |
| category.parts[1].categories[580] | string |
| category.parts[1].categories[581] | string |
| category.parts[1].categories[582] | string |
| category.parts[1].categories[583] | string |
| category.parts[1].categories[584] | string |
| category.parts[1].categories[585] | string |
| category.parts[1].categories[586] | string |
| category.parts[1].categories[587] | string |
| category.parts[1].categories[588] | string |
| category.parts[1].categories[589] | string |
| category.parts[1].categories[590] | string |
| category.parts[1].categories[591] | string |
| category.parts[1].categories[592] | string |
| category.parts[1].categories[593] | string |
| category.parts[1].categories[594] | string |
| category.parts[1].categories[595] | string |
| category.parts[1].categories[596] | string |
| category.parts[1].categories[597] | string |
| category.parts[1].categories[598] | string |
| category.parts[1].categories[599] | string |
| category.parts[1].categories[600] | string |
| category.parts[1].categories[601] | string |
| category.parts[1].categories[602] | string |
| category.parts[1].categories[603] | string |
| category.parts[1].categories[604] | string |
| category.parts[1].categories[605] | string |
| category.parts[1].categories[606] | string |
| category.parts[1].categories[607] | string |
| category.parts[1].categories[608] | string |
| category.parts[1].categories[609] | string |
| category.parts[1].categories[610] | string |
| category.parts[1].categories[611] | string |
| category.parts[1].categories[612] | string |
| category.parts[1].categories[613] | string |
| category.parts[1].categories[614] | string |
| category.parts[1].categories[615] | string |
| category.parts[1].categories[616] | string |
| category.parts[1].categories[617] | string |
| category.parts[1].categories[618] | string |
| category.parts[1].categories[619] | string |
| category.parts[1].categories[620] | string |
| category.parts[1].categories[621] | string |
| category.parts[1].categories[622] | string |
| category.parts[1].categories[623] | string |
| category.parts[1].categories[624] | string |
| category.parts[1].categories[625] | string |
| category.parts[1].categories[626] | string |
| category.parts[1].categories[627] | string |
| category.parts[1].categories[628] | string |
| category.parts[1].categories[629] | string |
| category.parts[1].categories[630] | string |
| category.parts[1].categories[631] | string |
| category.parts[1].categories[632] | string |
| category.parts[1].categories[633] | string |
| category.parts[1].categories[634] | string |
| category.parts[1].categories[635] | string |
| category.parts[1].categories[636] | string |
| category.parts[1].categories[637] | string |
| category.parts[1].categories[638] | string |
| category.parts[1].categories[639] | string |
| category.parts[1].categories[640] | string |
| category.parts[1].categories[641] | string |
| category.parts[1].categories[642] | string |
| category.parts[1].categories[643] | string |
| category.parts[1].categories[644] | string |
| category.parts[1].categories[645] | string |
| category.parts[1].categories[646] | string |
| category.parts[1].categories[647] | string |
| category.parts[1].categories[648] | string |
| category.parts[1].categories[649] | string |
| category.parts[1].categories[650] | string |
| category.parts[1].categories[651] | string |
| category.parts[1].categories[652] | string |
| category.parts[1].categories[653] | string |
| category.parts[1].categories[654] | string |
| category.parts[1].categories[655] | string |
| category.parts[1].categories[656] | string |
| category.parts[1].categories[657] | string |
| category.parts[1].categories[658] | string |
| category.parts[1].categories[659] | string |
| category.parts[1].categories[660] | string |
| category.parts[1].categories[661] | string |
| category.parts[1].categories[662] | string |
| category.parts[1].categories[663] | string |
| category.parts[1].categories[664] | string |
| category.parts[1].categories[665] | string |
| category.parts[1].categories[666] | string |
| category.parts[1].categories[667] | string |
| category.parts[1].categories[668] | string |
| category.parts[1].categories[669] | string |
| category.parts[1].categories[670] | string |
| category.parts[1].categories[671] | string |
| category.parts[1].categories[672] | string |
| category.parts[1].categories[673] | string |
| category.parts[1].categories[674] | string |
| category.parts[1].categories[675] | string |
| category.parts[1].categories[676] | string |
| category.parts[1].categories[677] | string |
| category.parts[1].categories[678] | string |
| category.parts[1].categories[679] | string |
| category.parts[1].categories[680] | string |
| category.parts[1].categories[681] | string |
| category.parts[1].categories[682] | string |
| category.parts[1].categories[683] | string |
| category.parts[1].categories[684] | string |
| category.parts[1].categories[685] | string |
| category.parts[1].categories[686] | string |
| category.parts[1].categories[687] | string |
| category.parts[1].categories[688] | string |
| category.parts[1].categories[689] | string |
| category.parts[1].categories[690] | string |
| category.parts[1].categories[691] | string |
| category.parts[1].categories[692] | string |
| category.parts[1].categories[693] | string |
| category.parts[1].categories[694] | string |
| category.parts[1].categories[695] | string |
| category.parts[1].categories[696] | string |
| category.parts[1].categories[697] | string |
| category.parts[1].categories[698] | string |
| category.parts[1].categories[699] | string |
| category.parts[1].categories[700] | string |
| category.parts[1].categories[701] | string |
| category.parts[1].categories[702] | string |
| category.parts[1].categories[703] | string |
| category.parts[1].categories[704] | string |
| category.parts[1].categories[705] | string |
| category.parts[1].categories[706] | string |
| category.parts[1].categories[707] | string |
| category.parts[1].categories[708] | string |
| category.parts[1].categories[709] | string |
| category.parts[1].categories[710] | string |
| category.parts[1].categories[711] | string |
| category.parts[1].categories[712] | string |
| category.parts[1].categories[713] | string |
| category.parts[1].categories[714] | string |
| category.parts[1].categories[715] | string |
| category.parts[1].categories[716] | string |
| category.parts[1].categories[717] | string |
| category.parts[1].categories[718] | string |
| category.parts[1].categories[719] | string |
| category.parts[1].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.options[4] | string |
| categoryComics.ranking.load | function |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].options[4] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.onThumbnailLoad | function |
| comic.onImageLoad | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.idMatch | string |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.apiKey | object |
| settings.apiKey.title | string |
| settings.apiKey.type | string |
| settings.apiKey.default | string |

</details>

## wnacg — partial

能力检查：9/17；源版本：1.0.5

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 221 |  |
| source.load | passed |  | 43 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 599 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 412 |  |
| search.load.page[2] | passed |  | 255 |  |
| explore[0].load | passed |  | 269 |  |
| categoryComics.load | passed |  | 243 |  |
| categoryComics.load.page[2] | passed |  | 246 |  |
| categoryComics.ranking.load | passed |  | 268 |  |
| categoryComics.ranking.load.page[2] | passed |  | 246 |  |
| favorites.loadFolders | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 236 |  |
| comic.loadEp | passed |  | 306 |  |
| comic.loadThumbnails | passed |  | 235 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 80 |  |
| image.decode | passed |  | 168 |  |
| image.download | passed |  | 30 |  |
| image.decode | passed |  | 49 |  |
| thumbnail.download | passed |  | 313 |  |
| thumbnail.decode | passed |  | 15 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.deleteFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.refreshDomains.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].categories | array |
| category.parts[2].categories[0] | string |
| category.parts[2].categories[1] | string |
| category.parts[2].categories[2] | string |
| category.parts[2].categories[3] | string |
| category.parts[2].itemType | string |
| category.parts[2].categoryParams | array |
| category.parts[2].categoryParams[0] | string |
| category.parts[2].categoryParams[1] | string |
| category.parts[2].categoryParams[2] | string |
| category.parts[2].categoryParams[3] | string |
| category.parts[3] | object |
| category.parts[3].name | string |
| category.parts[3].type | string |
| category.parts[3].categories | array |
| category.parts[3].categories[0] | string |
| category.parts[3].categories[1] | string |
| category.parts[3].categories[2] | string |
| category.parts[3].categories[3] | string |
| category.parts[3].itemType | string |
| category.parts[3].categoryParams | array |
| category.parts[3].categoryParams[0] | string |
| category.parts[3].categoryParams[1] | string |
| category.parts[3].categoryParams[2] | string |
| category.parts[3].categoryParams[3] | string |
| category.parts[4] | object |
| category.parts[4].name | string |
| category.parts[4].type | string |
| category.parts[4].categories | array |
| category.parts[4].categories[0] | string |
| category.parts[4].categories[1] | string |
| category.parts[4].categories[2] | string |
| category.parts[4].itemType | string |
| category.parts[4].categoryParams | array |
| category.parts[4].categoryParams[0] | string |
| category.parts[4].categoryParams[1] | string |
| category.parts[4].categoryParams[2] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.isOldToNewSort | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadFolders | function |
| favorites.addFolder | function |
| favorites.deleteFolder | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadThumbnails | function |
| comic.loadEp | function |
| comic.onClickTag | function |
| settings | object |
| settings.refreshDomains | object |
| settings.refreshDomains.title | string |
| settings.refreshDomains.type | string |
| settings.refreshDomains.buttonText | string |
| settings.refreshDomains.callback | function |
| settings.refreshDomainsOnStart | object |
| settings.refreshDomainsOnStart.title | string |
| settings.refreshDomainsOnStart.type | string |
| settings.refreshDomainsOnStart.default | boolean |
| settings.domainSelection | object |
| settings.domainSelection.title | string |
| settings.domainSelection.type | string |
| settings.domainSelection.options | array |
| settings.domainSelection.options[0] | object |
| settings.domainSelection.options[0].value | string |
| settings.domainSelection.options[0].text | string |
| settings.domainSelection.options[1] | object |
| settings.domainSelection.options[1].value | string |
| settings.domainSelection.options[1].text | string |
| settings.domainSelection.options[2] | object |
| settings.domainSelection.options[2].value | string |
| settings.domainSelection.options[2].text | string |
| settings.domainSelection.options[3] | object |
| settings.domainSelection.options[3].value | string |
| settings.domainSelection.options[3].text | string |
| settings.domainSelection.options[4] | object |
| settings.domainSelection.options[4].value | string |
| settings.domainSelection.options[4].text | string |
| settings.domainSelection.default | string |
| settings.domain0 | object |
| settings.domain0.title | string |
| settings.domain0.type | string |
| settings.domain0.validator | string |
| settings.domain0.default | string |

</details>

## ehentai — failed

能力检查：14/28；源版本：1.2.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 183 |  |
| source.load | passed |  | 79 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 1 | No PATROL_AUTH entry for ehentai; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 0 | Provide credentials.cookieValues |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.loadNext | passed |  | 507 |  |
| search.loadNext.page[2] | passed |  | 236 |  |
| explore[0].loadNext | passed |  | 239 |  |
| explore[0].loadNext.page[2] | passed |  | 233 |  |
| explore[1].loadNext | passed |  | 272 |  |
| explore[2].loadNext | failed | contract_violation | 1 | Comic list is empty; provide a representative keyword or case |
| categoryComics.ranking.load | passed |  | 246 |  |
| categoryComics.ranking.load.page[2] | passed |  | 238 |  |
| favorites.loadFolders | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| favorites.loadNext | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 221 |  |
| comic.loadEp | passed |  | 249 |  |
| comic.loadThumbnails | passed |  | 247 |  |
| comic.loadComments | passed |  | 249 |  |
| comic.archive.getArchives | failed | auth_required | 687 | Cannot read properties of undefined (reading 'match') |
| comic.archive.getDownloadUrl | skipped | missing_input | 0 | Provide inputs.archiveId or a nonempty archive list |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 962 |  |
| image.download | passed |  | 539 |  |
| image.decode | passed |  | 92 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 653 |  |
| image.download | passed |  | 586 |  |
| image.decode | passed |  | 40 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | failed | http_error | 573 | Image HTTP 404 |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.starRating | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.getKey | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.parseComments | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.voteComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
| account.loginWithCookies | object |
| account.loginWithCookies.fields | array |
| account.loginWithCookies.fields[0] | string |
| account.loginWithCookies.fields[1] | string |
| account.loginWithCookies.fields[2] | string |
| account.loginWithCookies.fields[3] | string |
| account.loginWithCookies.validate | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].loadNext | function |
| explore[1] | object |
| explore[1].title | string |
| explore[1].type | string |
| explore[1].loadNext | function |
| explore[2] | object |
| explore[2].title | string |
| explore[2].type | string |
| explore[2].loadNext | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.singleFolderForSingleComic | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadFolders | function |
| favorites.loadNext | function |
| search | object |
| search.loadNext | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].options[4] | string |
| search.optionList[0].options[5] | string |
| search.optionList[0].options[6] | string |
| search.optionList[0].options[7] | string |
| search.optionList[0].options[8] | string |
| search.optionList[0].options[9] | string |
| search.optionList[0].label | string |
| search.optionList[0].default | array |
| search.optionList[0].default[0] | string |
| search.optionList[0].default[1] | string |
| search.optionList[0].default[2] | string |
| search.optionList[0].default[3] | string |
| search.optionList[0].default[4] | string |
| search.optionList[0].default[5] | string |
| search.optionList[0].default[6] | string |
| search.optionList[0].default[7] | string |
| search.optionList[0].default[8] | string |
| search.optionList[0].default[9] | string |
| search.optionList[1] | object |
| search.optionList[1].type | string |
| search.optionList[1].options | array |
| search.optionList[1].options[0] | string |
| search.optionList[1].options[1] | string |
| search.optionList[1].options[2] | string |
| search.optionList[1].options[3] | string |
| search.optionList[1].options[4] | string |
| search.optionList[1].options[5] | string |
| search.optionList[1].options[6] | string |
| search.optionList[1].label | string |
| search.optionList[2] | object |
| search.optionList[2].type | string |
| search.optionList[2].options | array |
| search.optionList[2].options[0] | string |
| search.optionList[2].options[1] | string |
| search.optionList[2].options[2] | string |
| search.optionList[2].options[3] | string |
| search.optionList[2].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadThumbnails | function |
| comic.starRating | function |
| comic.getKey | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.parseComments | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.voteComment | function |
| comic.archive | object |
| comic.archive.getArchives | function |
| comic.archive.getDownloadUrl | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.domains[1] | string |
| comic.link.linkToId | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domain | object |
| settings.domain.title | string |
| settings.domain.type | string |
| settings.domain.options | array |
| settings.domain.options[0] | object |
| settings.domain.options[0].value | string |
| settings.domain.options[1] | object |
| settings.domain.options[1].value | string |
| settings.domain.default | string |
| settings.ehevent | object |
| settings.ehevent.title | string |
| settings.ehevent.type | string |
| settings.ehevent.default | boolean |
| settings.hvevent | object |
| settings.hvevent.title | string |
| settings.hvevent.type | string |
| settings.hvevent.default | boolean |
| comic.onImageLoad.onLoadFailed | function |

</details>

## jm — partial

能力检查：12/23；源版本：1.4.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 176 |  |
| source.load | passed |  | 55 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 786 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 487 |  |
| search.load.page[2] | passed |  | 212 |  |
| explore[0].load | passed |  | 214 |  |
| categoryComics.optionLoader | passed |  | 180 |  |
| categoryComics.load | passed |  | 247 |  |
| categoryComics.ranking.load | passed |  | 267 |  |
| categoryComics.ranking.load.page[2] | passed |  | 254 |  |
| favorites.loadFolders | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 220 |  |
| comic.loadEp | passed |  | 258 |  |
| comic.loadComments | passed |  | 248 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.idMatch | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 229 |  |
| comic.onImageLoad.modifyImage | passed |  | 139 |  |
| image.decode | passed |  | 24 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 26 |  |
| comic.onImageLoad.modifyImage | passed |  | 85 |  |
| image.decode | passed |  | 20 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 140 |  |
| thumbnail.decode | passed |  | 4 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.deleteFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.likeComic | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.refreshDomains.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.dailyCheckIn.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].itemType | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].categories | array |
| category.parts[2].categories[0] | string |
| category.parts[2].categories[1] | string |
| category.parts[2].categories[2] | string |
| category.parts[2].categories[3] | string |
| category.parts[2].categories[4] | string |
| category.parts[2].categories[5] | string |
| category.parts[2].categories[6] | string |
| category.parts[2].categories[7] | string |
| category.parts[2].categories[8] | string |
| category.parts[2].categories[9] | string |
| category.parts[2].categories[10] | string |
| category.parts[2].categories[11] | string |
| category.parts[2].categories[12] | string |
| category.parts[2].categories[13] | string |
| category.parts[2].categories[14] | string |
| category.parts[2].categories[15] | string |
| category.parts[2].categories[16] | string |
| category.parts[2].categories[17] | string |
| category.parts[2].itemType | string |
| category.parts[3] | object |
| category.parts[3].name | string |
| category.parts[3].type | string |
| category.parts[3].categories | array |
| category.parts[3].categories[0] | string |
| category.parts[3].categories[1] | string |
| category.parts[3].categories[2] | string |
| category.parts[3].categories[3] | string |
| category.parts[3].categories[4] | string |
| category.parts[3].categories[5] | string |
| category.parts[3].categories[6] | string |
| category.parts[3].categories[7] | string |
| category.parts[3].categories[8] | string |
| category.parts[3].categories[9] | string |
| category.parts[3].categories[10] | string |
| category.parts[3].categories[11] | string |
| category.parts[3].categories[12] | string |
| category.parts[3].itemType | string |
| category.parts[4] | object |
| category.parts[4].name | string |
| category.parts[4].type | string |
| category.parts[4].categories | array |
| category.parts[4].categories[0] | string |
| category.parts[4].categories[1] | string |
| category.parts[4].categories[2] | string |
| category.parts[4].categories[3] | string |
| category.parts[4].categories[4] | string |
| category.parts[4].categories[5] | string |
| category.parts[4].categories[6] | string |
| category.parts[4].categories[7] | string |
| category.parts[4].categories[8] | string |
| category.parts[4].categories[9] | string |
| category.parts[4].categories[10] | string |
| category.parts[4].categories[11] | string |
| category.parts[4].categories[12] | string |
| category.parts[4].categories[13] | string |
| category.parts[4].categories[14] | string |
| category.parts[4].categories[15] | string |
| category.parts[4].categories[16] | string |
| category.parts[4].categories[17] | string |
| category.parts[4].itemType | string |
| category.parts[5] | object |
| category.parts[5].name | string |
| category.parts[5].type | string |
| category.parts[5].categories | array |
| category.parts[5].categories[0] | string |
| category.parts[5].categories[1] | string |
| category.parts[5].categories[2] | string |
| category.parts[5].categories[3] | string |
| category.parts[5].categories[4] | string |
| category.parts[5].categories[5] | string |
| category.parts[5].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionLoader | function |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadFolders | function |
| favorites.addFolder | function |
| favorites.deleteFolder | function |
| favorites.loadComics | function |
| favorites.singleFolderForSingleComic | boolean |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].options[4] | string |
| search.optionList[0].options[5] | string |
| search.optionList[0].options[6] | string |
| search.optionList[0].label | string |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.likeComic | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.idMatch | string |
| comic.onClickTag | function |
| settings | object |
| settings.refreshDomains | object |
| settings.refreshDomains.title | string |
| settings.refreshDomains.type | string |
| settings.refreshDomains.buttonText | string |
| settings.refreshDomains.callback | function |
| settings.refreshDomainsOnStart | object |
| settings.refreshDomainsOnStart.title | string |
| settings.refreshDomainsOnStart.type | string |
| settings.refreshDomainsOnStart.default | boolean |
| settings.apiDomain | object |
| settings.apiDomain.title | string |
| settings.apiDomain.type | string |
| settings.apiDomain.options | array |
| settings.apiDomain.options[0] | object |
| settings.apiDomain.options[0].value | string |
| settings.apiDomain.options[1] | object |
| settings.apiDomain.options[1].value | string |
| settings.apiDomain.options[2] | object |
| settings.apiDomain.options[2].value | string |
| settings.apiDomain.options[3] | object |
| settings.apiDomain.options[3].value | string |
| settings.apiDomain.default | string |
| settings.imageStream | object |
| settings.imageStream.title | string |
| settings.imageStream.type | string |
| settings.imageStream.options | array |
| settings.imageStream.options[0] | object |
| settings.imageStream.options[0].value | string |
| settings.imageStream.options[1] | object |
| settings.imageStream.options[1].value | string |
| settings.imageStream.options[2] | object |
| settings.imageStream.options[2].value | string |
| settings.imageStream.options[3] | object |
| settings.imageStream.options[3].value | string |
| settings.imageStream.default | string |
| settings.favoriteOrder | object |
| settings.favoriteOrder.title | string |
| settings.favoriteOrder.type | string |
| settings.favoriteOrder.options | array |
| settings.favoriteOrder.options[0] | object |
| settings.favoriteOrder.options[0].value | string |
| settings.favoriteOrder.options[0].text | string |
| settings.favoriteOrder.options[1] | object |
| settings.favoriteOrder.options[1].value | string |
| settings.favoriteOrder.options[1].text | string |
| settings.favoriteOrder.default | string |
| settings.dailyCheckInTask | object |
| settings.dailyCheckInTask.title | string |
| settings.dailyCheckInTask.type | string |
| settings.dailyCheckInTask.default | boolean |
| settings.dailyCheckIn | object |
| settings.dailyCheckIn.title | string |
| settings.dailyCheckIn.type | string |
| settings.dailyCheckIn.buttonText | string |
| settings.dailyCheckIn.callback | function |
| comic.onImageLoad.modifyImage | string |

</details>

## manga_dex — partial

能力检查：10/20；源版本：1.2.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 196 |  |
| source.load | passed |  | 46 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| category | passed |  | 0 |  |
| category.parts[0].loader | passed |  | 1 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1085 |  |
| search.load.page[2] | passed |  | 502 |  |
| explore[0].load | passed |  | 917 |  |
| categoryComics.load | skipped | missing_input | 0 | Provide inputs.category and optional categoryParam |
| comic.loadInfo | passed |  | 606 |  |
| comic.loadEp | passed |  | 522 |  |
| comic.loadComments | passed |  | 3322 |  |
| comic.loadChapterComments | passed |  | 1225 |  |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 205 |  |
| image.decode | passed |  | 104 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 3 |  |
| image.download | passed |  | 215 |  |
| image.decode | passed |  | 79 |  |
| thumbnail.download | passed |  | 271 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.getComic | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.getChapters | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.languageLabel | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.getStats | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendChapterComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].loader | function |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[2].options[3] | string |
| categoryComics.optionList[2].options[4] | string |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].label | string |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].options[4] | string |
| search.optionList[0].options[5] | string |
| search.optionList[1] | object |
| search.optionList[1].label | string |
| search.optionList[1].type | string |
| search.optionList[1].options | array |
| search.optionList[1].options[0] | string |
| search.optionList[1].options[1] | string |
| search.optionList[1].options[2] | string |
| search.optionList[1].options[3] | string |
| search.optionList[2] | object |
| search.optionList[2].label | string |
| search.optionList[2].type | string |
| search.optionList[2].options | array |
| search.optionList[2].options[0] | string |
| search.optionList[2].options[1] | string |
| search.optionList[2].options[2] | string |
| search.optionList[2].options[3] | string |
| search.optionList[2].options[4] | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.getComic | function |
| comic.getChapters | function |
| comic.languageLabel | function |
| comic.getStats | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.loadChapterComments | function |
| comic.sendChapterComment | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |
| settings | object |
| settings.image_quality | object |
| settings.image_quality.title | string |
| settings.image_quality.type | string |
| settings.image_quality.options | array |
| settings.image_quality.options[0] | object |
| settings.image_quality.options[0].value | string |
| settings.image_quality.options[0].text | string |
| settings.image_quality.options[1] | object |
| settings.image_quality.options[1].value | string |
| settings.image_quality.options[1].text | string |
| settings.image_quality.default | string |
| comic.onImageLoad.onLoadFailed | function |

</details>

## ikmmh — failed

能力检查：4/16；源版本：1.0.6

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 186 |  |
| source.load | passed |  | 43 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 25 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | auth_required | 1773 | Comic list is empty; provide a representative keyword or case |
| explore[0].load | failed | auth_required | 1591 | 探索页面加载失败：加载探索页面失败，状态码：403 |
| categoryComics.load | failed | auth_required | 1167 | 分类加载失败：分类请求失败，状态码：403 |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| explore[0].onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| categoryComics.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| search.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.onImageLoad | skipped | missing_input | 1 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| explore[0].onThumbnailLoad | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.onThumbnailLoad | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].notShowWhen | array |
| categoryComics.optionList[0].notShowWhen[0] | string |
| categoryComics.optionList[0].notShowWhen[1] | string |
| categoryComics.optionList[0].notShowWhen[2] | string |
| categoryComics.optionList[0].notShowWhen[3] | string |
| categoryComics.optionList[0].notShowWhen[4] | string |
| categoryComics.optionList[0].notShowWhen[5] | string |
| categoryComics.optionList[0].notShowWhen[6] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[1].options[5] | string |
| categoryComics.optionList[1].options[6] | string |
| categoryComics.optionList[1].notShowWhen | array |
| categoryComics.optionList[1].notShowWhen[0] | string |
| categoryComics.optionList[1].notShowWhen[1] | string |
| categoryComics.optionList[1].notShowWhen[2] | string |
| categoryComics.optionList[1].notShowWhen[3] | string |
| categoryComics.optionList[1].notShowWhen[4] | string |
| categoryComics.optionList[1].notShowWhen[5] | string |
| categoryComics.optionList[1].notShowWhen[6] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| favorites.onThumbnailLoad | function |
| search | object |
| search.load | function |
| search.onThumbnailLoad | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.onThumbnailLoad | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| settings | object |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.validator | string |
| settings.base_url.default | string |

</details>

## shonen_jump_plus — failed

能力检查：3/7；源版本：1.1.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 171 |  |
| source.load | passed |  | 30 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 885 |  |
| configuration.capabilities | passed |  | 0 |  |
| search.load | failed | auth_required | 221 | Unexpected token '<', "<html>  <h"... is not valid JSON |
| explore[0].load | failed | auth_required | 133 | Unexpected token '<', "<html>  <h"... is not valid JSON |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 1 | comic.loadEp produced no images |
| comic.onImageLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onClickTag | function |

</details>

## hitomi — failed

能力检查：6/11；源版本：1.1.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 173 |  |
| source.load | passed |  | 44 |  |
| configuration.apply | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| search.load | passed |  | 8434 |  |
| search.load.page[2] | passed |  | 6248 |  |
| explore[0].load | passed |  | 6502 |  |
| explore[0].load.page[2] | passed |  | 6498 |  |
| categoryComics.load | passed |  | 6500 |  |
| categoryComics.load.page[2] | passed |  | 6500 |  |
| categoryComics.ranking.load | passed |  | 6499 |  |
| categoryComics.ranking.load.page[2] | failed | network_error | 249 | Network request failed: Request budget exceeded (200) |
| comic.loadInfo | failed | network_error | 0 | Network request failed: Request budget exceeded (200) |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.epId or successful comic.loadInfo |
| comic.link.linkToId | skipped | missing_input | 1 | Provide inputs.comicUrl |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| search.onTagSuggestionSelected | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | failed | network_error | 0 | Network request failed: Request budget exceeded (200) |
| comic.onImageLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[0].options[6] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.load | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].options[4] | string |
| search.optionList[0].options[5] | string |
| search.optionList[0].options[6] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| search.onTagSuggestionSelected | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |
| comic.enableTagsTranslate | boolean |

</details>

## comick — failed

能力检查：9/10；源版本：1.2.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 172 |  |
| source.load | passed |  | 42 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 1 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | contract_violation | 1329 | maxPage must be a nonnegative integer |
| explore[0].load | passed |  | 155 |  |
| categoryComics.load | failed | contract_violation | 1302 | maxPage must be a nonnegative integer |
| comic.loadInfo | passed |  | 1178 |  |
| comic.loadEp | passed |  | 889 |  |
| comic.onClickTag | failed | config_error | 0 | Click Tag Error |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | failed | rate_limited | 1308 | Image HTTP 429 |
| comic.onImageLoad.onLoadFailed | passed |  | 0 |  |
| image.download | failed | auth_required | 104 | Image HTTP 403 |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | failed | rate_limited | 1118 | Image HTTP 429 |
| comic.onImageLoad.onLoadFailed | passed |  | 0 |  |
| image.download | failed | auth_required | 100 | Image HTTP 403 |
| comic.onThumbnailLoad | passed |  | 0 |  |
| comic.onThumbnailLoad.onLoadFailed | skipped | unsupported_thumbnail | 0 | Venera does not apply onLoadFailed to thumbnails |
| thumbnail.download | passed |  | 254 |  |
| thumbnail.decode | passed |  | 38 |  |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categories[39] | string |
| category.parts[0].categories[40] | string |
| category.parts[0].categories[41] | string |
| category.parts[0].categories[42] | string |
| category.parts[0].categories[43] | string |
| category.parts[0].categories[44] | string |
| category.parts[0].categories[45] | string |
| category.parts[0].categories[46] | string |
| category.parts[0].categories[47] | string |
| category.parts[0].categories[48] | string |
| category.parts[0].categories[49] | string |
| category.parts[0].categories[50] | string |
| category.parts[0].categories[51] | string |
| category.parts[0].categories[52] | string |
| category.parts[0].categories[53] | string |
| category.parts[0].categories[54] | string |
| category.parts[0].categories[55] | string |
| category.parts[0].categories[56] | string |
| category.parts[0].categories[57] | string |
| category.parts[0].categories[58] | string |
| category.parts[0].categories[59] | string |
| category.parts[0].categories[60] | string |
| category.parts[0].categories[61] | string |
| category.parts[0].categories[62] | string |
| category.parts[0].categories[63] | string |
| category.parts[0].categories[64] | string |
| category.parts[0].categories[65] | string |
| category.parts[0].categories[66] | string |
| category.parts[0].categories[67] | string |
| category.parts[0].categories[68] | string |
| category.parts[0].categories[69] | string |
| category.parts[0].categories[70] | string |
| category.parts[0].categories[71] | string |
| category.parts[0].categories[72] | string |
| category.parts[0].categories[73] | string |
| category.parts[0].categories[74] | string |
| category.parts[0].categories[75] | string |
| category.parts[0].categories[76] | string |
| category.parts[0].categories[77] | string |
| category.parts[0].categories[78] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[0].categoryParams[38] | string |
| category.parts[0].categoryParams[39] | string |
| category.parts[0].categoryParams[40] | string |
| category.parts[0].categoryParams[41] | string |
| category.parts[0].categoryParams[42] | string |
| category.parts[0].categoryParams[43] | string |
| category.parts[0].categoryParams[44] | string |
| category.parts[0].categoryParams[45] | string |
| category.parts[0].categoryParams[46] | string |
| category.parts[0].categoryParams[47] | string |
| category.parts[0].categoryParams[48] | string |
| category.parts[0].categoryParams[49] | string |
| category.parts[0].categoryParams[50] | string |
| category.parts[0].categoryParams[51] | string |
| category.parts[0].categoryParams[52] | string |
| category.parts[0].categoryParams[53] | string |
| category.parts[0].categoryParams[54] | string |
| category.parts[0].categoryParams[55] | string |
| category.parts[0].categoryParams[56] | string |
| category.parts[0].categoryParams[57] | string |
| category.parts[0].categoryParams[58] | string |
| category.parts[0].categoryParams[59] | string |
| category.parts[0].categoryParams[60] | string |
| category.parts[0].categoryParams[61] | string |
| category.parts[0].categoryParams[62] | string |
| category.parts[0].categoryParams[63] | string |
| category.parts[0].categoryParams[64] | string |
| category.parts[0].categoryParams[65] | string |
| category.parts[0].categoryParams[66] | string |
| category.parts[0].categoryParams[67] | string |
| category.parts[0].categoryParams[68] | string |
| category.parts[0].categoryParams[69] | string |
| category.parts[0].categoryParams[70] | string |
| category.parts[0].categoryParams[71] | string |
| category.parts[0].categoryParams[72] | string |
| category.parts[0].categoryParams[73] | string |
| category.parts[0].categoryParams[74] | string |
| category.parts[0].categoryParams[75] | string |
| category.parts[0].categoryParams[76] | string |
| category.parts[0].categoryParams[77] | string |
| category.parts[0].categoryParams[78] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[2].options[3] | string |
| search | object |
| search.load | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.options | array |
| settings.domains.options[0] | object |
| settings.domains.options[0].value | string |
| settings.domains.default | string |
| comic.onImageLoad.onLoadFailed | function |
| comic.onThumbnailLoad.onLoadFailed | function |

</details>

## ykmh — failed

能力检查：3/6；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 184 |  |
| source.load | passed |  | 55 |  |
| configuration.apply | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 1 |  |
| search.load | failed | anti_bot | 115 | Request Error: 403 |
| explore[0].load | failed | anti_bot | 181 | Invalid status code: 403 |
| categoryComics.load | failed | config_error | 1 | temp is not defined |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categories[39] | string |
| category.parts[0].categories[40] | string |
| category.parts[0].categories[41] | string |
| category.parts[0].categories[42] | string |
| category.parts[0].categories[43] | string |
| category.parts[0].categories[44] | string |
| category.parts[0].categories[45] | string |
| category.parts[0].categories[46] | string |
| category.parts[0].categories[47] | string |
| category.parts[0].categories[48] | string |
| category.parts[0].categories[49] | string |
| category.parts[0].categories[50] | string |
| category.parts[0].categories[51] | string |
| category.parts[0].categories[52] | string |
| category.parts[0].categories[53] | string |
| category.parts[0].categories[54] | string |
| category.parts[0].categories[55] | string |
| category.parts[0].categories[56] | string |
| category.parts[0].categories[57] | string |
| category.parts[0].categories[58] | string |
| category.parts[0].categories[59] | string |
| category.parts[0].categories[60] | string |
| category.parts[0].categories[61] | string |
| category.parts[0].categories[62] | string |
| category.parts[0].categories[63] | string |
| category.parts[0].categories[64] | string |
| category.parts[0].categories[65] | string |
| category.parts[0].categories[66] | string |
| category.parts[0].categories[67] | string |
| category.parts[0].categories[68] | string |
| category.parts[0].categories[69] | string |
| category.parts[0].categories[70] | string |
| category.parts[0].categories[71] | string |
| category.parts[0].categories[72] | string |
| category.parts[0].categories[73] | string |
| category.parts[0].categories[74] | string |
| category.parts[0].categories[75] | string |
| category.parts[0].categories[76] | string |
| category.parts[0].categories[77] | string |
| category.parts[0].categories[78] | string |
| category.parts[0].categories[79] | string |
| category.parts[0].categories[80] | string |
| category.parts[0].categories[81] | string |
| category.parts[0].categories[82] | string |
| category.parts[0].categories[83] | string |
| category.parts[0].categories[84] | string |
| category.parts[0].categories[85] | string |
| category.parts[0].categories[86] | string |
| category.parts[0].categories[87] | string |
| category.parts[0].categories[88] | string |
| category.parts[0].categories[89] | string |
| category.parts[0].categories[90] | string |
| category.parts[0].categories[91] | string |
| category.parts[0].categories[92] | string |
| category.parts[0].categories[93] | string |
| category.parts[0].categories[94] | string |
| category.parts[0].categories[95] | string |
| category.parts[0].categories[96] | string |
| category.parts[0].categories[97] | string |
| category.parts[0].categories[98] | string |
| category.parts[0].categories[99] | string |
| category.parts[0].categories[100] | string |
| category.parts[0].categories[101] | string |
| category.parts[0].categories[102] | string |
| category.parts[0].categories[103] | string |
| category.parts[0].categories[104] | string |
| category.parts[0].categories[105] | string |
| category.parts[0].categories[106] | string |
| category.parts[0].categories[107] | string |
| category.parts[0].categories[108] | string |
| category.parts[0].categories[109] | string |
| category.parts[0].categories[110] | string |
| category.parts[0].categories[111] | string |
| category.parts[0].categories[112] | string |
| category.parts[0].categories[113] | string |
| category.parts[0].categories[114] | string |
| category.parts[0].categories[115] | string |
| category.parts[0].categories[116] | string |
| category.parts[0].categories[117] | string |
| category.parts[0].categories[118] | string |
| category.parts[0].categories[119] | string |
| category.parts[0].categories[120] | string |
| category.parts[0].categories[121] | string |
| category.parts[0].categories[122] | string |
| category.parts[0].categories[123] | string |
| category.parts[0].categories[124] | string |
| category.parts[0].categories[125] | string |
| category.parts[0].categories[126] | string |
| category.parts[0].categories[127] | string |
| category.parts[0].categories[128] | string |
| category.parts[0].categories[129] | string |
| category.parts[0].categories[130] | string |
| category.parts[0].categories[131] | string |
| category.parts[0].categories[132] | string |
| category.parts[0].categories[133] | string |
| category.parts[0].categories[134] | string |
| category.parts[0].categories[135] | string |
| category.parts[0].categories[136] | string |
| category.parts[0].categories[137] | string |
| category.parts[0].categories[138] | string |
| category.parts[0].categories[139] | string |
| category.parts[0].categories[140] | string |
| category.parts[0].categories[141] | string |
| category.parts[0].categories[142] | string |
| category.parts[0].categories[143] | string |
| category.parts[0].categories[144] | string |
| category.parts[0].categories[145] | string |
| category.parts[0].categories[146] | string |
| category.parts[0].categories[147] | string |
| category.parts[0].categories[148] | string |
| category.parts[0].categories[149] | string |
| category.parts[0].categories[150] | string |
| category.parts[0].categories[151] | string |
| category.parts[0].categories[152] | string |
| category.parts[0].categories[153] | string |
| category.parts[0].categories[154] | string |
| category.parts[0].categories[155] | string |
| category.parts[0].categories[156] | string |
| category.parts[0].categories[157] | string |
| category.parts[0].categories[158] | string |
| category.parts[0].categories[159] | string |
| category.parts[0].categories[160] | string |
| category.parts[0].categories[161] | string |
| category.parts[0].categories[162] | string |
| category.parts[0].categories[163] | string |
| category.parts[0].categories[164] | string |
| category.parts[0].categories[165] | string |
| category.parts[0].categories[166] | string |
| category.parts[0].categories[167] | string |
| category.parts[0].categories[168] | string |
| category.parts[0].categories[169] | string |
| category.parts[0].categories[170] | string |
| category.parts[0].categories[171] | string |
| category.parts[0].categories[172] | string |
| category.parts[0].categories[173] | string |
| category.parts[0].categories[174] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[0].categoryParams[38] | string |
| category.parts[0].categoryParams[39] | string |
| category.parts[0].categoryParams[40] | string |
| category.parts[0].categoryParams[41] | string |
| category.parts[0].categoryParams[42] | string |
| category.parts[0].categoryParams[43] | string |
| category.parts[0].categoryParams[44] | string |
| category.parts[0].categoryParams[45] | string |
| category.parts[0].categoryParams[46] | string |
| category.parts[0].categoryParams[47] | string |
| category.parts[0].categoryParams[48] | string |
| category.parts[0].categoryParams[49] | string |
| category.parts[0].categoryParams[50] | string |
| category.parts[0].categoryParams[51] | string |
| category.parts[0].categoryParams[52] | string |
| category.parts[0].categoryParams[53] | string |
| category.parts[0].categoryParams[54] | string |
| category.parts[0].categoryParams[55] | string |
| category.parts[0].categoryParams[56] | string |
| category.parts[0].categoryParams[57] | string |
| category.parts[0].categoryParams[58] | string |
| category.parts[0].categoryParams[59] | string |
| category.parts[0].categoryParams[60] | string |
| category.parts[0].categoryParams[61] | string |
| category.parts[0].categoryParams[62] | string |
| category.parts[0].categoryParams[63] | string |
| category.parts[0].categoryParams[64] | string |
| category.parts[0].categoryParams[65] | string |
| category.parts[0].categoryParams[66] | string |
| category.parts[0].categoryParams[67] | string |
| category.parts[0].categoryParams[68] | string |
| category.parts[0].categoryParams[69] | string |
| category.parts[0].categoryParams[70] | string |
| category.parts[0].categoryParams[71] | string |
| category.parts[0].categoryParams[72] | string |
| category.parts[0].categoryParams[73] | string |
| category.parts[0].categoryParams[74] | string |
| category.parts[0].categoryParams[75] | string |
| category.parts[0].categoryParams[76] | string |
| category.parts[0].categoryParams[77] | string |
| category.parts[0].categoryParams[78] | string |
| category.parts[0].categoryParams[79] | string |
| category.parts[0].categoryParams[80] | string |
| category.parts[0].categoryParams[81] | string |
| category.parts[0].categoryParams[82] | string |
| category.parts[0].categoryParams[83] | string |
| category.parts[0].categoryParams[84] | string |
| category.parts[0].categoryParams[85] | string |
| category.parts[0].categoryParams[86] | string |
| category.parts[0].categoryParams[87] | string |
| category.parts[0].categoryParams[88] | string |
| category.parts[0].categoryParams[89] | string |
| category.parts[0].categoryParams[90] | string |
| category.parts[0].categoryParams[91] | string |
| category.parts[0].categoryParams[92] | string |
| category.parts[0].categoryParams[93] | string |
| category.parts[0].categoryParams[94] | string |
| category.parts[0].categoryParams[95] | string |
| category.parts[0].categoryParams[96] | string |
| category.parts[0].categoryParams[97] | string |
| category.parts[0].categoryParams[98] | string |
| category.parts[0].categoryParams[99] | string |
| category.parts[0].categoryParams[100] | string |
| category.parts[0].categoryParams[101] | string |
| category.parts[0].categoryParams[102] | string |
| category.parts[0].categoryParams[103] | string |
| category.parts[0].categoryParams[104] | string |
| category.parts[0].categoryParams[105] | string |
| category.parts[0].categoryParams[106] | string |
| category.parts[0].categoryParams[107] | string |
| category.parts[0].categoryParams[108] | string |
| category.parts[0].categoryParams[109] | string |
| category.parts[0].categoryParams[110] | string |
| category.parts[0].categoryParams[111] | string |
| category.parts[0].categoryParams[112] | string |
| category.parts[0].categoryParams[113] | string |
| category.parts[0].categoryParams[114] | string |
| category.parts[0].categoryParams[115] | string |
| category.parts[0].categoryParams[116] | string |
| category.parts[0].categoryParams[117] | string |
| category.parts[0].categoryParams[118] | string |
| category.parts[0].categoryParams[119] | string |
| category.parts[0].categoryParams[120] | string |
| category.parts[0].categoryParams[121] | string |
| category.parts[0].categoryParams[122] | string |
| category.parts[0].categoryParams[123] | string |
| category.parts[0].categoryParams[124] | string |
| category.parts[0].categoryParams[125] | string |
| category.parts[0].categoryParams[126] | string |
| category.parts[0].categoryParams[127] | string |
| category.parts[0].categoryParams[128] | string |
| category.parts[0].categoryParams[129] | string |
| category.parts[0].categoryParams[130] | string |
| category.parts[0].categoryParams[131] | string |
| category.parts[0].categoryParams[132] | string |
| category.parts[0].categoryParams[133] | string |
| category.parts[0].categoryParams[134] | string |
| category.parts[0].categoryParams[135] | string |
| category.parts[0].categoryParams[136] | string |
| category.parts[0].categoryParams[137] | string |
| category.parts[0].categoryParams[138] | string |
| category.parts[0].categoryParams[139] | string |
| category.parts[0].categoryParams[140] | string |
| category.parts[0].categoryParams[141] | string |
| category.parts[0].categoryParams[142] | string |
| category.parts[0].categoryParams[143] | string |
| category.parts[0].categoryParams[144] | string |
| category.parts[0].categoryParams[145] | string |
| category.parts[0].categoryParams[146] | string |
| category.parts[0].categoryParams[147] | string |
| category.parts[0].categoryParams[148] | string |
| category.parts[0].categoryParams[149] | string |
| category.parts[0].categoryParams[150] | string |
| category.parts[0].categoryParams[151] | string |
| category.parts[0].categoryParams[152] | string |
| category.parts[0].categoryParams[153] | string |
| category.parts[0].categoryParams[154] | string |
| category.parts[0].categoryParams[155] | string |
| category.parts[0].categoryParams[156] | string |
| category.parts[0].categoryParams[157] | string |
| category.parts[0].categoryParams[158] | string |
| category.parts[0].categoryParams[159] | string |
| category.parts[0].categoryParams[160] | string |
| category.parts[0].categoryParams[161] | string |
| category.parts[0].categoryParams[162] | string |
| category.parts[0].categoryParams[163] | string |
| category.parts[0].categoryParams[164] | string |
| category.parts[0].categoryParams[165] | string |
| category.parts[0].categoryParams[166] | string |
| category.parts[0].categoryParams[167] | string |
| category.parts[0].categoryParams[168] | string |
| category.parts[0].categoryParams[169] | string |
| category.parts[0].categoryParams[170] | string |
| category.parts[0].categoryParams[171] | string |
| category.parts[0].categoryParams[172] | string |
| category.parts[0].categoryParams[173] | string |
| category.parts[0].categoryParams[174] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| search | object |
| search.load | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onClickTag | function |

</details>

## zaimanhua — failed

能力检查：6/13；源版本：1.0.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 173 |  |
| source.load | passed |  | 41 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 26 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 897 |  |
| search.load.page[2] | passed |  | 168 |  |
| explore[0].load | passed |  | 259 |  |
| explore[0].load.page[2] | passed |  | 254 |  |
| categoryComics.load | passed |  | 230 |  |
| categoryComics.load.page[2] | passed |  | 247 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | failed | config_error | 498 | 漫画不存在或已被删除 |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.epId or successful comic.loadInfo |
| comic.loadComments | passed |  | 254 |  |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 1894 |  |
| thumbnail.decode | passed |  | 44 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.likeComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].categories[42] | string |
| category.parts[1].categories[43] | string |
| category.parts[1].categories[44] | string |
| category.parts[1].categories[45] | string |
| category.parts[1].categories[46] | string |
| category.parts[1].categories[47] | string |
| category.parts[1].categories[48] | string |
| category.parts[1].categories[49] | string |
| category.parts[1].categories[50] | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.parts[1].categoryParams[30] | string |
| category.parts[1].categoryParams[31] | string |
| category.parts[1].categoryParams[32] | string |
| category.parts[1].categoryParams[33] | string |
| category.parts[1].categoryParams[34] | string |
| category.parts[1].categoryParams[35] | string |
| category.parts[1].categoryParams[36] | string |
| category.parts[1].categoryParams[37] | string |
| category.parts[1].categoryParams[38] | string |
| category.parts[1].categoryParams[39] | string |
| category.parts[1].categoryParams[40] | string |
| category.parts[1].categoryParams[41] | string |
| category.parts[1].categoryParams[42] | string |
| category.parts[1].categoryParams[43] | string |
| category.parts[1].categoryParams[44] | string |
| category.parts[1].categoryParams[45] | string |
| category.parts[1].categoryParams[46] | string |
| category.parts[1].categoryParams[47] | string |
| category.parts[1].categoryParams[48] | string |
| category.parts[1].categoryParams[49] | string |
| category.parts[1].categoryParams[50] | string |
| category.parts[1].itemType | string |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].showWhen | array |
| categoryComics.optionList[0].showWhen[0] | string |
| categoryComics.optionList[0].showWhen[1] | string |
| categoryComics.optionList[0].showWhen[2] | string |
| categoryComics.optionList[0].showWhen[3] | string |
| categoryComics.optionList[0].showWhen[4] | string |
| categoryComics.optionList[0].showWhen[5] | string |
| categoryComics.optionList[0].showWhen[6] | string |
| categoryComics.optionList[0].showWhen[7] | string |
| categoryComics.optionList[0].showWhen[8] | string |
| categoryComics.optionList[0].showWhen[9] | string |
| categoryComics.optionList[0].showWhen[10] | string |
| categoryComics.optionList[0].showWhen[11] | string |
| categoryComics.optionList[0].showWhen[12] | string |
| categoryComics.optionList[0].showWhen[13] | string |
| categoryComics.optionList[0].showWhen[14] | string |
| categoryComics.optionList[0].showWhen[15] | string |
| categoryComics.optionList[0].showWhen[16] | string |
| categoryComics.optionList[0].showWhen[17] | string |
| categoryComics.optionList[0].showWhen[18] | string |
| categoryComics.optionList[0].showWhen[19] | string |
| categoryComics.optionList[0].showWhen[20] | string |
| categoryComics.optionList[0].showWhen[21] | string |
| categoryComics.optionList[0].showWhen[22] | string |
| categoryComics.optionList[0].showWhen[23] | string |
| categoryComics.optionList[0].showWhen[24] | string |
| categoryComics.optionList[0].showWhen[25] | string |
| categoryComics.optionList[0].showWhen[26] | string |
| categoryComics.optionList[0].showWhen[27] | string |
| categoryComics.optionList[0].showWhen[28] | string |
| categoryComics.optionList[0].showWhen[29] | string |
| categoryComics.optionList[0].showWhen[30] | string |
| categoryComics.optionList[0].showWhen[31] | string |
| categoryComics.optionList[0].showWhen[32] | string |
| categoryComics.optionList[0].showWhen[33] | string |
| categoryComics.optionList[0].showWhen[34] | string |
| categoryComics.optionList[0].showWhen[35] | string |
| categoryComics.optionList[0].showWhen[36] | string |
| categoryComics.optionList[0].showWhen[37] | string |
| categoryComics.optionList[0].showWhen[38] | string |
| categoryComics.optionList[0].showWhen[39] | string |
| categoryComics.optionList[0].showWhen[40] | string |
| categoryComics.optionList[0].showWhen[41] | string |
| categoryComics.optionList[0].showWhen[42] | string |
| categoryComics.optionList[0].showWhen[43] | string |
| categoryComics.optionList[0].showWhen[44] | string |
| categoryComics.optionList[0].showWhen[45] | string |
| categoryComics.optionList[0].showWhen[46] | string |
| categoryComics.optionList[0].showWhen[47] | string |
| categoryComics.optionList[0].showWhen[48] | string |
| categoryComics.optionList[0].showWhen[49] | string |
| categoryComics.optionList[0].showWhen[50] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[1].showWhen | array |
| categoryComics.optionList[1].showWhen[0] | string |
| categoryComics.optionList[1].showWhen[1] | string |
| categoryComics.optionList[1].showWhen[2] | string |
| categoryComics.optionList[1].showWhen[3] | string |
| categoryComics.optionList[1].showWhen[4] | string |
| categoryComics.optionList[1].showWhen[5] | string |
| categoryComics.optionList[1].showWhen[6] | string |
| categoryComics.optionList[1].showWhen[7] | string |
| categoryComics.optionList[1].showWhen[8] | string |
| categoryComics.optionList[1].showWhen[9] | string |
| categoryComics.optionList[1].showWhen[10] | string |
| categoryComics.optionList[1].showWhen[11] | string |
| categoryComics.optionList[1].showWhen[12] | string |
| categoryComics.optionList[1].showWhen[13] | string |
| categoryComics.optionList[1].showWhen[14] | string |
| categoryComics.optionList[1].showWhen[15] | string |
| categoryComics.optionList[1].showWhen[16] | string |
| categoryComics.optionList[1].showWhen[17] | string |
| categoryComics.optionList[1].showWhen[18] | string |
| categoryComics.optionList[1].showWhen[19] | string |
| categoryComics.optionList[1].showWhen[20] | string |
| categoryComics.optionList[1].showWhen[21] | string |
| categoryComics.optionList[1].showWhen[22] | string |
| categoryComics.optionList[1].showWhen[23] | string |
| categoryComics.optionList[1].showWhen[24] | string |
| categoryComics.optionList[1].showWhen[25] | string |
| categoryComics.optionList[1].showWhen[26] | string |
| categoryComics.optionList[1].showWhen[27] | string |
| categoryComics.optionList[1].showWhen[28] | string |
| categoryComics.optionList[1].showWhen[29] | string |
| categoryComics.optionList[1].showWhen[30] | string |
| categoryComics.optionList[1].showWhen[31] | string |
| categoryComics.optionList[1].showWhen[32] | string |
| categoryComics.optionList[1].showWhen[33] | string |
| categoryComics.optionList[1].showWhen[34] | string |
| categoryComics.optionList[1].showWhen[35] | string |
| categoryComics.optionList[1].showWhen[36] | string |
| categoryComics.optionList[1].showWhen[37] | string |
| categoryComics.optionList[1].showWhen[38] | string |
| categoryComics.optionList[1].showWhen[39] | string |
| categoryComics.optionList[1].showWhen[40] | string |
| categoryComics.optionList[1].showWhen[41] | string |
| categoryComics.optionList[1].showWhen[42] | string |
| categoryComics.optionList[1].showWhen[43] | string |
| categoryComics.optionList[1].showWhen[44] | string |
| categoryComics.optionList[1].showWhen[45] | string |
| categoryComics.optionList[1].showWhen[46] | string |
| categoryComics.optionList[1].showWhen[47] | string |
| categoryComics.optionList[1].showWhen[48] | string |
| categoryComics.optionList[1].showWhen[49] | string |
| categoryComics.optionList[1].showWhen[50] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[2].options[3] | string |
| categoryComics.optionList[2].showWhen | array |
| categoryComics.optionList[2].showWhen[0] | string |
| categoryComics.optionList[2].showWhen[1] | string |
| categoryComics.optionList[2].showWhen[2] | string |
| categoryComics.optionList[2].showWhen[3] | string |
| categoryComics.optionList[2].showWhen[4] | string |
| categoryComics.optionList[2].showWhen[5] | string |
| categoryComics.optionList[2].showWhen[6] | string |
| categoryComics.optionList[2].showWhen[7] | string |
| categoryComics.optionList[2].showWhen[8] | string |
| categoryComics.optionList[2].showWhen[9] | string |
| categoryComics.optionList[2].showWhen[10] | string |
| categoryComics.optionList[2].showWhen[11] | string |
| categoryComics.optionList[2].showWhen[12] | string |
| categoryComics.optionList[2].showWhen[13] | string |
| categoryComics.optionList[2].showWhen[14] | string |
| categoryComics.optionList[2].showWhen[15] | string |
| categoryComics.optionList[2].showWhen[16] | string |
| categoryComics.optionList[2].showWhen[17] | string |
| categoryComics.optionList[2].showWhen[18] | string |
| categoryComics.optionList[2].showWhen[19] | string |
| categoryComics.optionList[2].showWhen[20] | string |
| categoryComics.optionList[2].showWhen[21] | string |
| categoryComics.optionList[2].showWhen[22] | string |
| categoryComics.optionList[2].showWhen[23] | string |
| categoryComics.optionList[2].showWhen[24] | string |
| categoryComics.optionList[2].showWhen[25] | string |
| categoryComics.optionList[2].showWhen[26] | string |
| categoryComics.optionList[2].showWhen[27] | string |
| categoryComics.optionList[2].showWhen[28] | string |
| categoryComics.optionList[2].showWhen[29] | string |
| categoryComics.optionList[2].showWhen[30] | string |
| categoryComics.optionList[2].showWhen[31] | string |
| categoryComics.optionList[2].showWhen[32] | string |
| categoryComics.optionList[2].showWhen[33] | string |
| categoryComics.optionList[2].showWhen[34] | string |
| categoryComics.optionList[2].showWhen[35] | string |
| categoryComics.optionList[2].showWhen[36] | string |
| categoryComics.optionList[2].showWhen[37] | string |
| categoryComics.optionList[2].showWhen[38] | string |
| categoryComics.optionList[2].showWhen[39] | string |
| categoryComics.optionList[2].showWhen[40] | string |
| categoryComics.optionList[2].showWhen[41] | string |
| categoryComics.optionList[2].showWhen[42] | string |
| categoryComics.optionList[2].showWhen[43] | string |
| categoryComics.optionList[2].showWhen[44] | string |
| categoryComics.optionList[2].showWhen[45] | string |
| categoryComics.optionList[2].showWhen[46] | string |
| categoryComics.optionList[2].showWhen[47] | string |
| categoryComics.optionList[2].showWhen[48] | string |
| categoryComics.optionList[2].showWhen[49] | string |
| categoryComics.optionList[2].showWhen[50] | string |
| categoryComics.optionList[3] | object |
| categoryComics.optionList[3].options | array |
| categoryComics.optionList[3].options[0] | string |
| categoryComics.optionList[3].options[1] | string |
| categoryComics.optionList[3].options[2] | string |
| categoryComics.optionList[3].options[3] | string |
| categoryComics.optionList[3].options[4] | string |
| categoryComics.optionList[3].options[5] | string |
| categoryComics.optionList[3].options[6] | string |
| categoryComics.optionList[3].showWhen | array |
| categoryComics.optionList[3].showWhen[0] | string |
| categoryComics.optionList[3].showWhen[1] | string |
| categoryComics.optionList[3].showWhen[2] | string |
| categoryComics.optionList[3].showWhen[3] | string |
| categoryComics.optionList[3].showWhen[4] | string |
| categoryComics.optionList[3].showWhen[5] | string |
| categoryComics.optionList[3].showWhen[6] | string |
| categoryComics.optionList[3].showWhen[7] | string |
| categoryComics.optionList[3].showWhen[8] | string |
| categoryComics.optionList[3].showWhen[9] | string |
| categoryComics.optionList[3].showWhen[10] | string |
| categoryComics.optionList[3].showWhen[11] | string |
| categoryComics.optionList[3].showWhen[12] | string |
| categoryComics.optionList[3].showWhen[13] | string |
| categoryComics.optionList[3].showWhen[14] | string |
| categoryComics.optionList[3].showWhen[15] | string |
| categoryComics.optionList[3].showWhen[16] | string |
| categoryComics.optionList[3].showWhen[17] | string |
| categoryComics.optionList[3].showWhen[18] | string |
| categoryComics.optionList[3].showWhen[19] | string |
| categoryComics.optionList[3].showWhen[20] | string |
| categoryComics.optionList[3].showWhen[21] | string |
| categoryComics.optionList[3].showWhen[22] | string |
| categoryComics.optionList[3].showWhen[23] | string |
| categoryComics.optionList[3].showWhen[24] | string |
| categoryComics.optionList[3].showWhen[25] | string |
| categoryComics.optionList[3].showWhen[26] | string |
| categoryComics.optionList[3].showWhen[27] | string |
| categoryComics.optionList[3].showWhen[28] | string |
| categoryComics.optionList[3].showWhen[29] | string |
| categoryComics.optionList[3].showWhen[30] | string |
| categoryComics.optionList[3].showWhen[31] | string |
| categoryComics.optionList[3].showWhen[32] | string |
| categoryComics.optionList[3].showWhen[33] | string |
| categoryComics.optionList[3].showWhen[34] | string |
| categoryComics.optionList[3].showWhen[35] | string |
| categoryComics.optionList[3].showWhen[36] | string |
| categoryComics.optionList[3].showWhen[37] | string |
| categoryComics.optionList[3].showWhen[38] | string |
| categoryComics.optionList[3].showWhen[39] | string |
| categoryComics.optionList[3].showWhen[40] | string |
| categoryComics.optionList[3].showWhen[41] | string |
| categoryComics.optionList[3].showWhen[42] | string |
| categoryComics.optionList[3].showWhen[43] | string |
| categoryComics.optionList[3].showWhen[44] | string |
| categoryComics.optionList[3].showWhen[45] | string |
| categoryComics.optionList[3].showWhen[46] | string |
| categoryComics.optionList[3].showWhen[47] | string |
| categoryComics.optionList[3].showWhen[48] | string |
| categoryComics.optionList[3].showWhen[49] | string |
| categoryComics.optionList[3].showWhen[50] | string |
| categoryComics.optionList[4] | object |
| categoryComics.optionList[4].options | array |
| categoryComics.optionList[4].options[0] | string |
| categoryComics.optionList[4].options[1] | string |
| categoryComics.optionList[4].options[2] | string |
| categoryComics.optionList[4].showWhen | array |
| categoryComics.optionList[4].showWhen[0] | string |
| categoryComics.optionList[4].showWhen[1] | string |
| categoryComics.optionList[4].showWhen[2] | string |
| categoryComics.optionList[4].showWhen[3] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.optionList | array |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.likeComment | function |
| settings | object |
| settings.signTask | object |
| settings.signTask.title | string |
| settings.signTask.type | string |
| settings.signTask.default | boolean |

</details>

## ManHuaGui — failed

能力检查：11/16；源版本：1.2.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 178 |  |
| source.load | passed |  | 66 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| search.load | passed |  | 1412 |  |
| search.load.page[2] | passed |  | 761 |  |
| explore[0].load | passed |  | 399 |  |
| categoryComics.load | passed |  | 454 |  |
| categoryComics.load.page[2] | passed |  | 662 |  |
| categoryComics.ranking.load | failed | http_error | 1113 | Invalid status code: 404 |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 697 |  |
| comic.loadEp | passed |  | 488 |  |
| comic.loadComments | passed |  | 485 |  |
| comic.onClickTag | failed | contract_violation | 0 | Tag has no jump target |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 593 |  |
| image.decode | passed |  | 82 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 208 |  |
| image.decode | passed |  | 53 |  |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | passed |  | 440 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].itemType | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[0].categoryParams[38] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[0].options[6] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[1].options[5] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[3] | object |
| categoryComics.optionList[3].options | array |
| categoryComics.optionList[3].options[0] | string |
| categoryComics.optionList[3].options[1] | string |
| categoryComics.optionList[3].options[2] | string |
| categoryComics.optionList[3].options[3] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.onClickTag | function |

</details>

## manwaba — failed

能力检查：6/6；源版本：1.0.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 172 |  |
| source.load | passed |  | 35 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| search.load | passed |  | 371 |  |
| search.load.page[2] | passed |  | 118 |  |
| explore[0].load | passed |  | 244 |  |
| categoryComics.load | failed | http_error | 246 | Invalid status code: 405, body:  |
| comic.loadInfo | passed |  | 781 |  |
| comic.loadEp | passed |  | 471 |  |
| image.download | passed |  | 345 |  |
| image.decode | failed | image_decode_failed | 37 | Input buffer contains unsupported image format |
| image.download | passed |  | 93 |  |
| image.decode | failed | image_decode_failed | 0 | Input buffer contains unsupported image format |
| thumbnail.download | passed |  | 293 |  |
| thumbnail.decode | failed | image_decode_failed | 0 | Input buffer contains unsupported image format |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[1].options[5] | string |
| categoryComics.optionList[1].options[6] | string |
| categoryComics.optionList[1].options[7] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[2].options[3] | string |
| categoryComics.optionList[2].options[4] | string |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |

</details>

## lanraragi — failed

能力检查：9/18；源版本：1.2.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 175 |  |
| source.load | passed |  | 51 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 604 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 0 | Provide credentials.cookieValues |
| category | passed |  | 0 |  |
| category.parts[0].loader | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | http_error | 271 | Invalid status code: 400 |
| search.loadNext | failed | http_error | 305 | Invalid status code: 400 |
| explore[0].load | passed |  | 320 |  |
| explore[0].load.page[2] | passed |  | 283 |  |
| categoryComics.load | passed |  | 240 |  |
| favorites.loadFolders | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | failed | http_error | 296 | Invalid status code: 400 |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.epId or successful comic.loadInfo |
| comic.loadThumbnails | failed | http_error | 229 | Invalid status code: 400 |
| comic.onClickTag | skipped | missing_input | 1 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | failed | http_error | 307 | Image HTTP 400 |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.starRating | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.onImageLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.loginWithCookies | object |
| account.loginWithCookies.fields | array |
| account.loginWithCookies.fields[0] | string |
| account.loginWithCookies.validate | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].loader | function |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.singleFolderForSingleComic | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadFolders | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| search.loadNext | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].label | string |
| search.optionList[0].default | string |
| search.optionList[1] | object |
| search.optionList[1].type | string |
| search.optionList[1].options | array |
| search.optionList[1].options[0] | string |
| search.optionList[1].options[1] | string |
| search.optionList[1].label | string |
| search.optionList[1].default | string |
| search.optionList[2] | object |
| search.optionList[2].type | string |
| search.optionList[2].options | array |
| search.optionList[2].options[0] | string |
| search.optionList[2].options[1] | string |
| search.optionList[2].label | string |
| search.optionList[2].default | string |
| search.optionList[3] | object |
| search.optionList[3].type | string |
| search.optionList[3].options | array |
| search.optionList[3].options[0] | string |
| search.optionList[3].options[1] | string |
| search.optionList[3].label | string |
| search.optionList[3].default | string |
| search.optionList[4] | object |
| search.optionList[4].type | string |
| search.optionList[4].options | array |
| search.optionList[4].options[0] | string |
| search.optionList[4].options[1] | string |
| search.optionList[4].label | string |
| search.optionList[4].default | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadThumbnails | function |
| comic.starRating | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.api | object |
| settings.api.title | string |
| settings.api.type | string |
| settings.api.default | string |
| settings.apiKey | object |
| settings.apiKey.title | string |
| settings.apiKey.type | string |
| settings.apiKey.default | string |

</details>

## komga — failed

能力检查：10/17；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 172 |  |
| source.load | passed |  | 33 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 32 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 1 |  |
| category.parts[0].loader | passed |  | 0 |  |
| category.parts[1].loader | passed |  | 0 |  |
| category.parts[2].loader | passed |  | 0 |  |
| category.parts[3].loader | passed |  | 0 |  |
| category.parts[4].loader | passed |  | 0 |  |
| category.parts[5].loader | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | auth_required | 488 | Login expired |
| explore[0].load | failed | auth_required | 300 | Login expired |
| categoryComics.load | failed | auth_required | 268 | Login expired |
| comic.loadInfo | skipped | missing_input | 1 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.onImageLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].loader | function |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].loader | function |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].loader | function |
| category.parts[3] | object |
| category.parts[3].name | string |
| category.parts[3].type | string |
| category.parts[3].loader | function |
| category.parts[4] | object |
| category.parts[4].name | string |
| category.parts[4].type | string |
| category.parts[4].loader | function |
| category.parts[5] | object |
| category.parts[5].name | string |
| category.parts[5].type | string |
| category.parts[5].loader | function |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.default | string |
| settings.base_url.validator | string |

</details>

## comic_walker — failed

能力检查：1/7；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 174 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 1 |  |
| init | failed | stage_timeout | 30001 | Stage exceeded 30000ms; worker terminated |
| explore[0].load | skipped | dependency_failed | 0 | Worker terminated before this capability |
| search.load | skipped | dependency_failed | 0 | Worker terminated before this capability |
| comic.loadInfo | skipped | dependency_failed | 0 | Worker terminated before this capability |
| comic.loadEp | skipped | dependency_failed | 0 | Worker terminated before this capability |
| comic.onImageLoad | skipped | dependency_failed | 0 | Worker terminated before this capability |
| comic.onClickTag | skipped | dependency_failed | 0 | Worker terminated before this capability |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onClickTag | function |

</details>

## mh1234 — failed

能力检查：4/6；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 173 |  |
| source.load | passed |  | 43 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | config_error | 318 | Cannot read properties of null (reading 'attributes') |
| explore[0].load | failed | contract_violation | 249 | Comic list is empty; provide a representative keyword or case |
| categoryComics.optionLoader | passed |  | 0 |  |
| categoryComics.load | failed | config_error | 220 | Cannot read properties of null (reading 'attributes') |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 1 | Provide inputs.comicId or a successful comic list |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categories[39] | string |
| category.parts[0].categories[40] | string |
| category.parts[0].categories[41] | string |
| category.parts[0].categories[42] | string |
| category.parts[0].categories[43] | string |
| category.parts[0].categories[44] | string |
| category.parts[0].categories[45] | string |
| category.parts[0].categories[46] | string |
| category.parts[0].categories[47] | string |
| category.parts[0].categories[48] | string |
| category.parts[0].categories[49] | string |
| category.parts[0].categories[50] | string |
| category.parts[0].categories[51] | string |
| category.parts[0].categories[52] | string |
| category.parts[0].categories[53] | string |
| category.parts[0].categories[54] | string |
| category.parts[0].categories[55] | string |
| category.parts[0].categories[56] | string |
| category.parts[0].categories[57] | string |
| category.parts[0].categories[58] | string |
| category.parts[0].categories[59] | string |
| category.parts[0].categories[60] | string |
| category.parts[0].categories[61] | string |
| category.parts[0].categories[62] | string |
| category.parts[0].categories[63] | string |
| category.parts[0].categories[64] | string |
| category.parts[0].categories[65] | string |
| category.parts[0].categories[66] | string |
| category.parts[0].categories[67] | string |
| category.parts[0].categories[68] | string |
| category.parts[0].categories[69] | string |
| category.parts[0].categories[70] | string |
| category.parts[0].categories[71] | string |
| category.parts[0].categories[72] | string |
| category.parts[0].categories[73] | string |
| category.parts[0].categories[74] | string |
| category.parts[0].categories[75] | string |
| category.parts[0].categories[76] | string |
| category.parts[0].categories[77] | string |
| category.parts[0].categories[78] | string |
| category.parts[0].categories[79] | string |
| category.parts[0].categories[80] | string |
| category.parts[0].categories[81] | string |
| category.parts[0].categories[82] | string |
| category.parts[0].categories[83] | string |
| category.parts[0].categories[84] | string |
| category.parts[0].categories[85] | string |
| category.parts[0].categories[86] | string |
| category.parts[0].categories[87] | string |
| category.parts[0].categories[88] | string |
| category.parts[0].categories[89] | string |
| category.parts[0].categories[90] | string |
| category.parts[0].categories[91] | string |
| category.parts[0].categories[92] | string |
| category.parts[0].categories[93] | string |
| category.parts[0].categories[94] | string |
| category.parts[0].categories[95] | string |
| category.parts[0].categories[96] | string |
| category.parts[0].categories[97] | string |
| category.parts[0].categories[98] | string |
| category.parts[0].categories[99] | string |
| category.parts[0].categories[100] | string |
| category.parts[0].categories[101] | string |
| category.parts[0].categories[102] | string |
| category.parts[0].categories[103] | string |
| category.parts[0].categories[104] | string |
| category.parts[0].categories[105] | string |
| category.parts[0].categories[106] | string |
| category.parts[0].categories[107] | string |
| category.parts[0].categories[108] | string |
| category.parts[0].categories[109] | string |
| category.parts[0].categories[110] | string |
| category.parts[0].categories[111] | string |
| category.parts[0].categories[112] | string |
| category.parts[0].categories[113] | string |
| category.parts[0].categories[114] | string |
| category.parts[0].categories[115] | string |
| category.parts[0].categories[116] | string |
| category.parts[0].categories[117] | string |
| category.parts[0].categories[118] | string |
| category.parts[0].categories[119] | string |
| category.parts[0].categories[120] | string |
| category.parts[0].categories[121] | string |
| category.parts[0].categories[122] | string |
| category.parts[0].categories[123] | string |
| category.parts[0].categories[124] | string |
| category.parts[0].categories[125] | string |
| category.parts[0].categories[126] | string |
| category.parts[0].categories[127] | string |
| category.parts[0].categories[128] | string |
| category.parts[0].categories[129] | string |
| category.parts[0].categories[130] | string |
| category.parts[0].categories[131] | string |
| category.parts[0].categories[132] | string |
| category.parts[0].categories[133] | string |
| category.parts[0].categories[134] | string |
| category.parts[0].categories[135] | string |
| category.parts[0].categories[136] | string |
| category.parts[0].categories[137] | string |
| category.parts[0].categories[138] | string |
| category.parts[0].categories[139] | string |
| category.parts[0].categories[140] | string |
| category.parts[0].categories[141] | string |
| category.parts[0].categories[142] | string |
| category.parts[0].categories[143] | string |
| category.parts[0].categories[144] | string |
| category.parts[0].categories[145] | string |
| category.parts[0].categories[146] | string |
| category.parts[0].categories[147] | string |
| category.parts[0].categories[148] | string |
| category.parts[0].categories[149] | string |
| category.parts[0].categories[150] | string |
| category.parts[0].categories[151] | string |
| category.parts[0].categories[152] | string |
| category.parts[0].categories[153] | string |
| category.parts[0].categories[154] | string |
| category.parts[0].categories[155] | string |
| category.parts[0].categories[156] | string |
| category.parts[0].categories[157] | string |
| category.parts[0].categories[158] | string |
| category.parts[0].categories[159] | string |
| category.parts[0].categories[160] | string |
| category.parts[0].categories[161] | string |
| category.parts[0].categories[162] | string |
| category.parts[0].categories[163] | string |
| category.parts[0].categories[164] | string |
| category.parts[0].categories[165] | string |
| category.parts[0].categories[166] | string |
| category.parts[0].categories[167] | string |
| category.parts[0].categories[168] | string |
| category.parts[0].categories[169] | string |
| category.parts[0].categories[170] | string |
| category.parts[0].categories[171] | string |
| category.parts[0].categories[172] | string |
| category.parts[0].categories[173] | string |
| category.parts[0].categories[174] | string |
| category.parts[0].categories[175] | string |
| category.parts[0].categories[176] | string |
| category.parts[0].categories[177] | string |
| category.parts[0].categories[178] | string |
| category.parts[0].categories[179] | string |
| category.parts[0].categories[180] | string |
| category.parts[0].categories[181] | string |
| category.parts[0].categories[182] | string |
| category.parts[0].categories[183] | string |
| category.parts[0].categories[184] | string |
| category.parts[0].categories[185] | string |
| category.parts[0].categories[186] | string |
| category.parts[0].categories[187] | string |
| category.parts[0].categories[188] | string |
| category.parts[0].categories[189] | string |
| category.parts[0].categories[190] | string |
| category.parts[0].categories[191] | string |
| category.parts[0].categories[192] | string |
| category.parts[0].categories[193] | string |
| category.parts[0].categories[194] | string |
| category.parts[0].categories[195] | string |
| category.parts[0].categories[196] | string |
| category.parts[0].categories[197] | string |
| category.parts[0].categories[198] | string |
| category.parts[0].categories[199] | string |
| category.parts[0].categories[200] | string |
| category.parts[0].categories[201] | string |
| category.parts[0].categories[202] | string |
| category.parts[0].categories[203] | string |
| category.parts[0].categories[204] | string |
| category.parts[0].categories[205] | string |
| category.parts[0].categories[206] | string |
| category.parts[0].categories[207] | string |
| category.parts[0].categories[208] | string |
| category.parts[0].categories[209] | string |
| category.parts[0].categories[210] | string |
| category.parts[0].categories[211] | string |
| category.parts[0].categories[212] | string |
| category.parts[0].categories[213] | string |
| category.parts[0].categories[214] | string |
| category.parts[0].categories[215] | string |
| category.parts[0].categories[216] | string |
| category.parts[0].categories[217] | string |
| category.parts[0].categories[218] | string |
| category.parts[0].categories[219] | string |
| category.parts[0].categories[220] | string |
| category.parts[0].categories[221] | string |
| category.parts[0].categories[222] | string |
| category.parts[0].categories[223] | string |
| category.parts[0].categories[224] | string |
| category.parts[0].categories[225] | string |
| category.parts[0].categories[226] | string |
| category.parts[0].categories[227] | string |
| category.parts[0].categories[228] | string |
| category.parts[0].categories[229] | string |
| category.parts[0].categories[230] | string |
| category.parts[0].categories[231] | string |
| category.parts[0].categories[232] | string |
| category.parts[0].categories[233] | string |
| category.parts[0].categories[234] | string |
| category.parts[0].categories[235] | string |
| category.parts[0].categories[236] | string |
| category.parts[0].categories[237] | string |
| category.parts[0].categories[238] | string |
| category.parts[0].categories[239] | string |
| category.parts[0].categories[240] | string |
| category.parts[0].categories[241] | string |
| category.parts[0].categories[242] | string |
| category.parts[0].categories[243] | string |
| category.parts[0].categories[244] | string |
| category.parts[0].categories[245] | string |
| category.parts[0].categories[246] | string |
| category.parts[0].categories[247] | string |
| category.parts[0].categories[248] | string |
| category.parts[0].categories[249] | string |
| category.parts[0].categories[250] | string |
| category.parts[0].categories[251] | string |
| category.parts[0].categories[252] | string |
| category.parts[0].categories[253] | string |
| category.parts[0].categories[254] | string |
| category.parts[0].categories[255] | string |
| category.parts[0].categories[256] | string |
| category.parts[0].categories[257] | string |
| category.parts[0].categories[258] | string |
| category.parts[0].categories[259] | string |
| category.parts[0].categories[260] | string |
| category.parts[0].categories[261] | string |
| category.parts[0].categories[262] | string |
| category.parts[0].categories[263] | string |
| category.parts[0].categories[264] | string |
| category.parts[0].categories[265] | string |
| category.parts[0].categories[266] | string |
| category.parts[0].categories[267] | string |
| category.parts[0].categories[268] | string |
| category.parts[0].categories[269] | string |
| category.parts[0].categories[270] | string |
| category.parts[0].categories[271] | string |
| category.parts[0].categories[272] | string |
| category.parts[0].categories[273] | string |
| category.parts[0].categories[274] | string |
| category.parts[0].categories[275] | string |
| category.parts[0].categories[276] | string |
| category.parts[0].categories[277] | string |
| category.parts[0].categories[278] | string |
| category.parts[0].categories[279] | string |
| category.parts[0].categories[280] | string |
| category.parts[0].categories[281] | string |
| category.parts[0].categories[282] | string |
| category.parts[0].categories[283] | string |
| category.parts[0].categories[284] | string |
| category.parts[0].categories[285] | string |
| category.parts[0].categories[286] | string |
| category.parts[0].categories[287] | string |
| category.parts[0].categories[288] | string |
| category.parts[0].categories[289] | string |
| category.parts[0].categories[290] | string |
| category.parts[0].categories[291] | string |
| category.parts[0].categories[292] | string |
| category.parts[0].categories[293] | string |
| category.parts[0].categories[294] | string |
| category.parts[0].categories[295] | string |
| category.parts[0].categories[296] | string |
| category.parts[0].categories[297] | string |
| category.parts[0].categories[298] | string |
| category.parts[0].categories[299] | string |
| category.parts[0].categories[300] | string |
| category.parts[0].categories[301] | string |
| category.parts[0].categories[302] | string |
| category.parts[0].categories[303] | string |
| category.parts[0].categories[304] | string |
| category.parts[0].categories[305] | string |
| category.parts[0].categories[306] | string |
| category.parts[0].categories[307] | string |
| category.parts[0].categories[308] | string |
| category.parts[0].categories[309] | string |
| category.parts[0].categories[310] | string |
| category.parts[0].categories[311] | string |
| category.parts[0].categories[312] | string |
| category.parts[0].categories[313] | string |
| category.parts[0].categories[314] | string |
| category.parts[0].categories[315] | string |
| category.parts[0].categories[316] | string |
| category.parts[0].categories[317] | string |
| category.parts[0].categories[318] | string |
| category.parts[0].categories[319] | string |
| category.parts[0].categories[320] | string |
| category.parts[0].categories[321] | string |
| category.parts[0].categories[322] | string |
| category.parts[0].categories[323] | string |
| category.parts[0].categories[324] | string |
| category.parts[0].categories[325] | string |
| category.parts[0].categories[326] | string |
| category.parts[0].categories[327] | string |
| category.parts[0].categories[328] | string |
| category.parts[0].categories[329] | string |
| category.parts[0].categories[330] | string |
| category.parts[0].categories[331] | string |
| category.parts[0].categories[332] | string |
| category.parts[0].categories[333] | string |
| category.parts[0].categories[334] | string |
| category.parts[0].categories[335] | string |
| category.parts[0].categories[336] | string |
| category.parts[0].categories[337] | string |
| category.parts[0].categories[338] | string |
| category.parts[0].categories[339] | string |
| category.parts[0].categories[340] | string |
| category.parts[0].categories[341] | string |
| category.parts[0].categories[342] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[0].categoryParams[38] | string |
| category.parts[0].categoryParams[39] | string |
| category.parts[0].categoryParams[40] | string |
| category.parts[0].categoryParams[41] | string |
| category.parts[0].categoryParams[42] | string |
| category.parts[0].categoryParams[43] | string |
| category.parts[0].categoryParams[44] | string |
| category.parts[0].categoryParams[45] | string |
| category.parts[0].categoryParams[46] | string |
| category.parts[0].categoryParams[47] | string |
| category.parts[0].categoryParams[48] | string |
| category.parts[0].categoryParams[49] | string |
| category.parts[0].categoryParams[50] | string |
| category.parts[0].categoryParams[51] | string |
| category.parts[0].categoryParams[52] | string |
| category.parts[0].categoryParams[53] | string |
| category.parts[0].categoryParams[54] | string |
| category.parts[0].categoryParams[55] | string |
| category.parts[0].categoryParams[56] | string |
| category.parts[0].categoryParams[57] | string |
| category.parts[0].categoryParams[58] | string |
| category.parts[0].categoryParams[59] | string |
| category.parts[0].categoryParams[60] | string |
| category.parts[0].categoryParams[61] | string |
| category.parts[0].categoryParams[62] | string |
| category.parts[0].categoryParams[63] | string |
| category.parts[0].categoryParams[64] | string |
| category.parts[0].categoryParams[65] | string |
| category.parts[0].categoryParams[66] | string |
| category.parts[0].categoryParams[67] | string |
| category.parts[0].categoryParams[68] | string |
| category.parts[0].categoryParams[69] | string |
| category.parts[0].categoryParams[70] | string |
| category.parts[0].categoryParams[71] | string |
| category.parts[0].categoryParams[72] | string |
| category.parts[0].categoryParams[73] | string |
| category.parts[0].categoryParams[74] | string |
| category.parts[0].categoryParams[75] | string |
| category.parts[0].categoryParams[76] | string |
| category.parts[0].categoryParams[77] | string |
| category.parts[0].categoryParams[78] | string |
| category.parts[0].categoryParams[79] | string |
| category.parts[0].categoryParams[80] | string |
| category.parts[0].categoryParams[81] | string |
| category.parts[0].categoryParams[82] | string |
| category.parts[0].categoryParams[83] | string |
| category.parts[0].categoryParams[84] | string |
| category.parts[0].categoryParams[85] | string |
| category.parts[0].categoryParams[86] | string |
| category.parts[0].categoryParams[87] | string |
| category.parts[0].categoryParams[88] | string |
| category.parts[0].categoryParams[89] | string |
| category.parts[0].categoryParams[90] | string |
| category.parts[0].categoryParams[91] | string |
| category.parts[0].categoryParams[92] | string |
| category.parts[0].categoryParams[93] | string |
| category.parts[0].categoryParams[94] | string |
| category.parts[0].categoryParams[95] | string |
| category.parts[0].categoryParams[96] | string |
| category.parts[0].categoryParams[97] | string |
| category.parts[0].categoryParams[98] | string |
| category.parts[0].categoryParams[99] | string |
| category.parts[0].categoryParams[100] | string |
| category.parts[0].categoryParams[101] | string |
| category.parts[0].categoryParams[102] | string |
| category.parts[0].categoryParams[103] | string |
| category.parts[0].categoryParams[104] | string |
| category.parts[0].categoryParams[105] | string |
| category.parts[0].categoryParams[106] | string |
| category.parts[0].categoryParams[107] | string |
| category.parts[0].categoryParams[108] | string |
| category.parts[0].categoryParams[109] | string |
| category.parts[0].categoryParams[110] | string |
| category.parts[0].categoryParams[111] | string |
| category.parts[0].categoryParams[112] | string |
| category.parts[0].categoryParams[113] | string |
| category.parts[0].categoryParams[114] | string |
| category.parts[0].categoryParams[115] | string |
| category.parts[0].categoryParams[116] | string |
| category.parts[0].categoryParams[117] | string |
| category.parts[0].categoryParams[118] | string |
| category.parts[0].categoryParams[119] | string |
| category.parts[0].categoryParams[120] | string |
| category.parts[0].categoryParams[121] | string |
| category.parts[0].categoryParams[122] | string |
| category.parts[0].categoryParams[123] | string |
| category.parts[0].categoryParams[124] | string |
| category.parts[0].categoryParams[125] | string |
| category.parts[0].categoryParams[126] | string |
| category.parts[0].categoryParams[127] | string |
| category.parts[0].categoryParams[128] | string |
| category.parts[0].categoryParams[129] | string |
| category.parts[0].categoryParams[130] | string |
| category.parts[0].categoryParams[131] | string |
| category.parts[0].categoryParams[132] | string |
| category.parts[0].categoryParams[133] | string |
| category.parts[0].categoryParams[134] | string |
| category.parts[0].categoryParams[135] | string |
| category.parts[0].categoryParams[136] | string |
| category.parts[0].categoryParams[137] | string |
| category.parts[0].categoryParams[138] | string |
| category.parts[0].categoryParams[139] | string |
| category.parts[0].categoryParams[140] | string |
| category.parts[0].categoryParams[141] | string |
| category.parts[0].categoryParams[142] | string |
| category.parts[0].categoryParams[143] | string |
| category.parts[0].categoryParams[144] | string |
| category.parts[0].categoryParams[145] | string |
| category.parts[0].categoryParams[146] | string |
| category.parts[0].categoryParams[147] | string |
| category.parts[0].categoryParams[148] | string |
| category.parts[0].categoryParams[149] | string |
| category.parts[0].categoryParams[150] | string |
| category.parts[0].categoryParams[151] | string |
| category.parts[0].categoryParams[152] | string |
| category.parts[0].categoryParams[153] | string |
| category.parts[0].categoryParams[154] | string |
| category.parts[0].categoryParams[155] | string |
| category.parts[0].categoryParams[156] | string |
| category.parts[0].categoryParams[157] | string |
| category.parts[0].categoryParams[158] | string |
| category.parts[0].categoryParams[159] | string |
| category.parts[0].categoryParams[160] | string |
| category.parts[0].categoryParams[161] | string |
| category.parts[0].categoryParams[162] | string |
| category.parts[0].categoryParams[163] | string |
| category.parts[0].categoryParams[164] | string |
| category.parts[0].categoryParams[165] | string |
| category.parts[0].categoryParams[166] | string |
| category.parts[0].categoryParams[167] | string |
| category.parts[0].categoryParams[168] | string |
| category.parts[0].categoryParams[169] | string |
| category.parts[0].categoryParams[170] | string |
| category.parts[0].categoryParams[171] | string |
| category.parts[0].categoryParams[172] | string |
| category.parts[0].categoryParams[173] | string |
| category.parts[0].categoryParams[174] | string |
| category.parts[0].categoryParams[175] | string |
| category.parts[0].categoryParams[176] | string |
| category.parts[0].categoryParams[177] | string |
| category.parts[0].categoryParams[178] | string |
| category.parts[0].categoryParams[179] | string |
| category.parts[0].categoryParams[180] | string |
| category.parts[0].categoryParams[181] | string |
| category.parts[0].categoryParams[182] | string |
| category.parts[0].categoryParams[183] | string |
| category.parts[0].categoryParams[184] | string |
| category.parts[0].categoryParams[185] | string |
| category.parts[0].categoryParams[186] | string |
| category.parts[0].categoryParams[187] | string |
| category.parts[0].categoryParams[188] | string |
| category.parts[0].categoryParams[189] | string |
| category.parts[0].categoryParams[190] | string |
| category.parts[0].categoryParams[191] | string |
| category.parts[0].categoryParams[192] | string |
| category.parts[0].categoryParams[193] | string |
| category.parts[0].categoryParams[194] | string |
| category.parts[0].categoryParams[195] | string |
| category.parts[0].categoryParams[196] | string |
| category.parts[0].categoryParams[197] | string |
| category.parts[0].categoryParams[198] | string |
| category.parts[0].categoryParams[199] | string |
| category.parts[0].categoryParams[200] | string |
| category.parts[0].categoryParams[201] | string |
| category.parts[0].categoryParams[202] | string |
| category.parts[0].categoryParams[203] | string |
| category.parts[0].categoryParams[204] | string |
| category.parts[0].categoryParams[205] | string |
| category.parts[0].categoryParams[206] | string |
| category.parts[0].categoryParams[207] | string |
| category.parts[0].categoryParams[208] | string |
| category.parts[0].categoryParams[209] | string |
| category.parts[0].categoryParams[210] | string |
| category.parts[0].categoryParams[211] | string |
| category.parts[0].categoryParams[212] | string |
| category.parts[0].categoryParams[213] | string |
| category.parts[0].categoryParams[214] | string |
| category.parts[0].categoryParams[215] | string |
| category.parts[0].categoryParams[216] | string |
| category.parts[0].categoryParams[217] | string |
| category.parts[0].categoryParams[218] | string |
| category.parts[0].categoryParams[219] | string |
| category.parts[0].categoryParams[220] | string |
| category.parts[0].categoryParams[221] | string |
| category.parts[0].categoryParams[222] | string |
| category.parts[0].categoryParams[223] | string |
| category.parts[0].categoryParams[224] | string |
| category.parts[0].categoryParams[225] | string |
| category.parts[0].categoryParams[226] | string |
| category.parts[0].categoryParams[227] | string |
| category.parts[0].categoryParams[228] | string |
| category.parts[0].categoryParams[229] | string |
| category.parts[0].categoryParams[230] | string |
| category.parts[0].categoryParams[231] | string |
| category.parts[0].categoryParams[232] | string |
| category.parts[0].categoryParams[233] | string |
| category.parts[0].categoryParams[234] | string |
| category.parts[0].categoryParams[235] | string |
| category.parts[0].categoryParams[236] | string |
| category.parts[0].categoryParams[237] | string |
| category.parts[0].categoryParams[238] | string |
| category.parts[0].categoryParams[239] | string |
| category.parts[0].categoryParams[240] | string |
| category.parts[0].categoryParams[241] | string |
| category.parts[0].categoryParams[242] | string |
| category.parts[0].categoryParams[243] | string |
| category.parts[0].categoryParams[244] | string |
| category.parts[0].categoryParams[245] | string |
| category.parts[0].categoryParams[246] | string |
| category.parts[0].categoryParams[247] | string |
| category.parts[0].categoryParams[248] | string |
| category.parts[0].categoryParams[249] | string |
| category.parts[0].categoryParams[250] | string |
| category.parts[0].categoryParams[251] | string |
| category.parts[0].categoryParams[252] | string |
| category.parts[0].categoryParams[253] | string |
| category.parts[0].categoryParams[254] | string |
| category.parts[0].categoryParams[255] | string |
| category.parts[0].categoryParams[256] | string |
| category.parts[0].categoryParams[257] | string |
| category.parts[0].categoryParams[258] | string |
| category.parts[0].categoryParams[259] | string |
| category.parts[0].categoryParams[260] | string |
| category.parts[0].categoryParams[261] | string |
| category.parts[0].categoryParams[262] | string |
| category.parts[0].categoryParams[263] | string |
| category.parts[0].categoryParams[264] | string |
| category.parts[0].categoryParams[265] | string |
| category.parts[0].categoryParams[266] | string |
| category.parts[0].categoryParams[267] | string |
| category.parts[0].categoryParams[268] | string |
| category.parts[0].categoryParams[269] | string |
| category.parts[0].categoryParams[270] | string |
| category.parts[0].categoryParams[271] | string |
| category.parts[0].categoryParams[272] | string |
| category.parts[0].categoryParams[273] | string |
| category.parts[0].categoryParams[274] | string |
| category.parts[0].categoryParams[275] | string |
| category.parts[0].categoryParams[276] | string |
| category.parts[0].categoryParams[277] | string |
| category.parts[0].categoryParams[278] | string |
| category.parts[0].categoryParams[279] | string |
| category.parts[0].categoryParams[280] | string |
| category.parts[0].categoryParams[281] | string |
| category.parts[0].categoryParams[282] | string |
| category.parts[0].categoryParams[283] | string |
| category.parts[0].categoryParams[284] | string |
| category.parts[0].categoryParams[285] | string |
| category.parts[0].categoryParams[286] | string |
| category.parts[0].categoryParams[287] | string |
| category.parts[0].categoryParams[288] | string |
| category.parts[0].categoryParams[289] | string |
| category.parts[0].categoryParams[290] | string |
| category.parts[0].categoryParams[291] | string |
| category.parts[0].categoryParams[292] | string |
| category.parts[0].categoryParams[293] | string |
| category.parts[0].categoryParams[294] | string |
| category.parts[0].categoryParams[295] | string |
| category.parts[0].categoryParams[296] | string |
| category.parts[0].categoryParams[297] | string |
| category.parts[0].categoryParams[298] | string |
| category.parts[0].categoryParams[299] | string |
| category.parts[0].categoryParams[300] | string |
| category.parts[0].categoryParams[301] | string |
| category.parts[0].categoryParams[302] | string |
| category.parts[0].categoryParams[303] | string |
| category.parts[0].categoryParams[304] | string |
| category.parts[0].categoryParams[305] | string |
| category.parts[0].categoryParams[306] | string |
| category.parts[0].categoryParams[307] | string |
| category.parts[0].categoryParams[308] | string |
| category.parts[0].categoryParams[309] | string |
| category.parts[0].categoryParams[310] | string |
| category.parts[0].categoryParams[311] | string |
| category.parts[0].categoryParams[312] | string |
| category.parts[0].categoryParams[313] | string |
| category.parts[0].categoryParams[314] | string |
| category.parts[0].categoryParams[315] | string |
| category.parts[0].categoryParams[316] | string |
| category.parts[0].categoryParams[317] | string |
| category.parts[0].categoryParams[318] | string |
| category.parts[0].categoryParams[319] | string |
| category.parts[0].categoryParams[320] | string |
| category.parts[0].categoryParams[321] | string |
| category.parts[0].categoryParams[322] | string |
| category.parts[0].categoryParams[323] | string |
| category.parts[0].categoryParams[324] | string |
| category.parts[0].categoryParams[325] | string |
| category.parts[0].categoryParams[326] | string |
| category.parts[0].categoryParams[327] | string |
| category.parts[0].categoryParams[328] | string |
| category.parts[0].categoryParams[329] | string |
| category.parts[0].categoryParams[330] | string |
| category.parts[0].categoryParams[331] | string |
| category.parts[0].categoryParams[332] | string |
| category.parts[0].categoryParams[333] | string |
| category.parts[0].categoryParams[334] | string |
| category.parts[0].categoryParams[335] | string |
| category.parts[0].categoryParams[336] | string |
| category.parts[0].categoryParams[337] | string |
| category.parts[0].categoryParams[338] | string |
| category.parts[0].categoryParams[339] | string |
| category.parts[0].categoryParams[340] | string |
| category.parts[0].categoryParams[341] | string |
| category.parts[0].categoryParams[342] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionLoader | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.default | string |

</details>

## ccc — partial

能力检查：9/18；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 177 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 1 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| search.load | passed |  | 524 |  |
| explore[0].load | passed |  | 1267 |  |
| categoryComics.load | passed |  | 235 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 671 |  |
| comic.loadEp | passed |  | 301 |  |
| comic.loadComments | passed |  | 267 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 196 |  |
| image.download | passed |  | 612 |  |
| comic.onImageLoad.onResponse | passed |  | 19 |  |
| image.decode | passed |  | 46 |  |
| comic.onImageLoad | passed |  | 149 |  |
| image.download | passed |  | 398 |  |
| comic.onImageLoad.onResponse | passed |  | 7 |  |
| image.decode | passed |  | 17 |  |
| thumbnail.download | passed |  | 298 |  |
| thumbnail.decode | passed |  | 10 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.freeRead | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.likeComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.login | function |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].label | string |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[0].options[6] | string |
| categoryComics.optionList[0].options[7] | string |
| categoryComics.optionList[0].options[8] | string |
| categoryComics.optionList[0].options[9] | string |
| categoryComics.optionList[0].options[10] | string |
| categoryComics.optionList[0].options[11] | string |
| categoryComics.optionList[0].options[12] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].label | string |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| favorites.singleFolderForSingleComic | boolean |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].options[3] | string |
| search.optionList[0].label | string |
| search.optionList[1] | object |
| search.optionList[1].type | string |
| search.optionList[1].options | array |
| search.optionList[1].options[0] | string |
| search.optionList[1].options[1] | string |
| search.optionList[1].options[2] | string |
| search.optionList[1].options[3] | string |
| search.optionList[1].options[4] | string |
| search.optionList[1].options[5] | string |
| search.optionList[1].options[6] | string |
| search.optionList[1].options[7] | string |
| search.optionList[1].options[8] | string |
| search.optionList[1].options[9] | string |
| search.optionList[1].options[10] | string |
| search.optionList[1].options[11] | string |
| search.optionList[1].options[12] | string |
| search.optionList[1].label | string |
| search.optionList[2] | object |
| search.optionList[2].type | string |
| search.optionList[2].options | array |
| search.optionList[2].options[0] | string |
| search.optionList[2].options[1] | string |
| search.optionList[2].options[2] | string |
| search.optionList[2].label | string |
| search.optionList[3] | object |
| search.optionList[3].type | string |
| search.optionList[3].options | array |
| search.optionList[3].options[0] | string |
| search.optionList[3].options[1] | string |
| search.optionList[3].options[2] | string |
| search.optionList[3].label | string |
| search.optionList[4] | object |
| search.optionList[4].type | string |
| search.optionList[4].options | array |
| search.optionList[4].options[0] | string |
| search.optionList[4].options[1] | string |
| search.optionList[4].options[2] | string |
| search.optionList[4].options[3] | string |
| search.optionList[4].label | string |
| search.optionList[5] | object |
| search.optionList[5].type | string |
| search.optionList[5].options | array |
| search.optionList[5].options[0] | string |
| search.optionList[5].options[1] | string |
| search.optionList[5].options[2] | string |
| search.optionList[5].label | string |
| search.optionList[6] | object |
| search.optionList[6].type | string |
| search.optionList[6].options | array |
| search.optionList[6].options[0] | string |
| search.optionList[6].options[1] | string |
| search.optionList[6].options[2] | string |
| search.optionList[6].options[3] | string |
| search.optionList[6].options[4] | string |
| search.optionList[6].options[5] | string |
| search.optionList[6].options[6] | string |
| search.optionList[6].options[7] | string |
| search.optionList[6].options[8] | string |
| search.optionList[6].options[9] | string |
| search.optionList[6].options[10] | string |
| search.optionList[6].options[11] | string |
| search.optionList[6].options[12] | string |
| search.optionList[6].options[13] | string |
| search.optionList[6].options[14] | string |
| search.optionList[6].options[15] | string |
| search.optionList[6].options[16] | string |
| search.optionList[6].options[17] | string |
| search.optionList[6].options[18] | string |
| search.optionList[6].options[19] | string |
| search.optionList[6].options[20] | string |
| search.optionList[6].options[21] | string |
| search.optionList[6].options[22] | string |
| search.optionList[6].options[23] | string |
| search.optionList[6].options[24] | string |
| search.optionList[6].options[25] | string |
| search.optionList[6].options[26] | string |
| search.optionList[6].options[27] | string |
| search.optionList[6].options[28] | string |
| search.optionList[6].options[29] | string |
| search.optionList[6].options[30] | string |
| search.optionList[6].options[31] | string |
| search.optionList[6].options[32] | string |
| search.optionList[6].options[33] | string |
| search.optionList[6].options[34] | string |
| search.optionList[6].options[35] | string |
| search.optionList[6].options[36] | string |
| search.optionList[6].options[37] | string |
| search.optionList[6].options[38] | string |
| search.optionList[6].options[39] | string |
| search.optionList[6].options[40] | string |
| search.optionList[6].options[41] | string |
| search.optionList[6].options[42] | string |
| search.optionList[6].options[43] | string |
| search.optionList[6].options[44] | string |
| search.optionList[6].options[45] | string |
| search.optionList[6].options[46] | string |
| search.optionList[6].options[47] | string |
| search.optionList[6].options[48] | string |
| search.optionList[6].options[49] | string |
| search.optionList[6].options[50] | string |
| search.optionList[6].options[51] | string |
| search.optionList[6].options[52] | string |
| search.optionList[6].options[53] | string |
| search.optionList[6].options[54] | string |
| search.optionList[6].label | string |
| comic | object |
| comic.freeRead | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.likeComment | function |
| comic.onClickTag | function |
| comic.onImageLoad.onResponse | function |

</details>

## goda — failed

能力检查：3/6；源版本：1.2.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 178 |  |
| source.load | passed |  | 35 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | anti_bot | 130 | Invalid status code: 403 |
| explore[0].load | failed | anti_bot | 206 | Cannot read properties of null (reading 'querySelectorAll') |
| categoryComics.load | failed | anti_bot | 233 | Invalid status code: 403 |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| search | object |
| search.load | function |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.onThumbnailLoad | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.default | string |
| settings.api | object |
| settings.api.title | string |
| settings.api.type | string |
| settings.api.default | string |
| settings.image | object |
| settings.image.title | string |
| settings.image.type | string |
| settings.image.default | string |

</details>

## mh18 — failed

能力检查：3/6；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 174 |  |
| source.load | passed |  | 33 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | anti_bot | 276 | Invalid status code: 403 |
| explore[0].load | failed | anti_bot | 45 | Cannot read properties of null (reading 'querySelectorAll') |
| categoryComics.load | failed | anti_bot | 238 | Invalid status code: 403 |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 1 | Provide inputs.comicId or a successful comic list |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| search | object |
| search.load | function |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.onThumbnailLoad | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.default | string |

</details>

## mxs — partial

能力检查：8/9；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 177 |  |
| source.load | passed |  | 45 |  |
| configuration.apply | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1174 |  |
| explore[0].load | passed |  | 861 |  |
| categoryComics.optionLoader | passed |  | 1 |  |
| categoryComics.load | passed |  | 630 |  |
| categoryComics.load.page[2] | passed |  | 652 |  |
| comic.loadInfo | passed |  | 739 |  |
| comic.loadEp | passed |  | 586 |  |
| comic.loadComments | passed |  | 676 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 1515 |  |
| image.decode | passed |  | 43 |  |
| image.download | passed |  | 1303 |  |
| image.decode | passed |  | 9 |  |
| thumbnail.download | passed |  | 971 |  |
| thumbnail.decode | passed |  | 4 |  |
| settings.domainCheck.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].itemType | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionLoader | function |
| search | object |
| search.load | function |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.onClickTag | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.options | array |
| settings.domains.options[0] | object |
| settings.domains.options[0].value | string |
| settings.domains.options[0].text | string |
| settings.domains.options[1] | object |
| settings.domains.options[1].value | string |
| settings.domains.options[1].text | string |
| settings.domains.options[2] | object |
| settings.domains.options[2].value | string |
| settings.domains.options[2].text | string |
| settings.domains.options[3] | object |
| settings.domains.options[3].value | string |
| settings.domains.options[3].text | string |
| settings.domains.options[4] | object |
| settings.domains.options[4].value | string |
| settings.domains.options[4].text | string |
| settings.domains.options[5] | object |
| settings.domains.options[5].value | string |
| settings.domains.options[5].text | string |
| settings.domains.options[6] | object |
| settings.domains.options[6].value | string |
| settings.domains.options[6].text | string |
| settings.domains.default | string |
| settings.domainCheck | object |
| settings.domainCheck.title | string |
| settings.domainCheck.type | string |
| settings.domainCheck.buttonText | string |
| settings.domainCheck.callback | function |

</details>

## manhuaren — passed

能力检查：9/9；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 171 |  |
| source.load | passed |  | 55 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| search.load | passed |  | 666 |  |
| search.load.page[2] | passed |  | 130 |  |
| explore[0].load | passed |  | 563 |  |
| categoryComics.load | passed |  | 105 |  |
| categoryComics.load.page[2] | passed |  | 225 |  |
| comic.loadInfo | passed |  | 239 |  |
| comic.loadEp | passed |  | 244 |  |
| comic.loadComments | passed |  | 238 |  |
| comic.loadChapterComments | passed |  | 252 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 556 |  |
| image.decode | passed |  | 38 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 76 |  |
| image.decode | passed |  | 5 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 452 |  |
| thumbnail.decode | passed |  | 2 |  |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].itemType | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].type | string |
| categoryComics.optionList[0].label | string |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].default | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].type | string |
| categoryComics.optionList[1].label | string |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].default | string |
| search | object |
| search.load | function |
| search.optionList | array |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.loadComments | function |
| comic.loadChapterComments | function |

</details>

## hcomic — failed

能力检查：7/8；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 191 |  |
| source.load | passed |  | 45 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| search.load | passed |  | 913 |  |
| search.load.page[2] | passed |  | 883 |  |
| explore[0].load | passed |  | 498 |  |
| categoryComics.load | passed |  | 343 |  |
| categoryComics.load.page[2] | passed |  | 336 |  |
| categoryComics.ranking.load | failed | contract_violation | 1 | Comic list is empty; provide a representative keyword or case |
| comic.loadInfo | passed |  | 169 |  |
| comic.loadEp | passed |  | 1 |  |
| comic.link.linkToId | skipped | missing_input | 0 | Provide inputs.comicUrl |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 249 |  |
| image.decode | passed |  | 83 |  |
| image.download | passed |  | 38 |  |
| image.decode | passed |  | 46 |  |
| thumbnail.download | passed |  | 196 |  |
| thumbnail.decode | passed |  | 42 |  |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | object |
| category.parts[0].categories[0].label | string |
| category.parts[0].categories[0].target | object |
| category.parts[0].categories[0].target.page | string |
| category.parts[0].categories[0].target.attributes | object |
| category.parts[0].categories[0].target.attributes.category | string |
| category.parts[0].categories[1] | object |
| category.parts[0].categories[1].label | string |
| category.parts[0].categories[1].target | object |
| category.parts[0].categories[1].target.page | string |
| category.parts[0].categories[1].target.attributes | object |
| category.parts[0].categories[1].target.attributes.category | string |
| category.parts[0].categories[1].target.attributes.param | string |
| category.parts[0].categories[2] | object |
| category.parts[0].categories[2].label | string |
| category.parts[0].categories[2].target | object |
| category.parts[0].categories[2].target.page | string |
| category.parts[0].categories[2].target.attributes | object |
| category.parts[0].categories[2].target.attributes.category | string |
| category.parts[0].categories[2].target.attributes.param | string |
| category.parts[0].categories[3] | object |
| category.parts[0].categories[3].label | string |
| category.parts[0].categories[3].target | object |
| category.parts[0].categories[3].target.page | string |
| category.parts[0].categories[3].target.attributes | object |
| category.parts[0].categories[3].target.attributes.category | string |
| category.parts[0].categories[3].target.attributes.param | string |
| category.parts[0].categories[4] | object |
| category.parts[0].categories[4].label | string |
| category.parts[0].categories[4].target | object |
| category.parts[0].categories[4].target.page | string |
| category.parts[0].categories[4].target.attributes | object |
| category.parts[0].categories[4].target.attributes.category | string |
| category.parts[0].categories[4].target.attributes.param | string |
| category.parts[0].categories[5] | object |
| category.parts[0].categories[5].label | string |
| category.parts[0].categories[5].target | object |
| category.parts[0].categories[5].target.page | string |
| category.parts[0].categories[5].target.attributes | object |
| category.parts[0].categories[5].target.attributes.category | string |
| category.parts[0].categories[5].target.attributes.param | string |
| category.parts[0].categories[6] | object |
| category.parts[0].categories[6].label | string |
| category.parts[0].categories[6].target | object |
| category.parts[0].categories[6].target.page | string |
| category.parts[0].categories[6].target.attributes | object |
| category.parts[0].categories[6].target.attributes.category | string |
| category.parts[0].categories[6].target.attributes.param | string |
| category.parts[0].categories[7] | object |
| category.parts[0].categories[7].label | string |
| category.parts[0].categories[7].target | object |
| category.parts[0].categories[7].target.page | string |
| category.parts[0].categories[7].target.attributes | object |
| category.parts[0].categories[7].target.attributes.category | string |
| category.parts[0].categories[7].target.attributes.param | string |
| category.parts[0].categories[8] | object |
| category.parts[0].categories[8].label | string |
| category.parts[0].categories[8].target | object |
| category.parts[0].categories[8].target.page | string |
| category.parts[0].categories[8].target.attributes | object |
| category.parts[0].categories[8].target.attributes.category | string |
| category.parts[0].categories[8].target.attributes.param | string |
| category.parts[0].categories[9] | object |
| category.parts[0].categories[9].label | string |
| category.parts[0].categories[9].target | object |
| category.parts[0].categories[9].target.page | string |
| category.parts[0].categories[9].target.attributes | object |
| category.parts[0].categories[9].target.attributes.category | string |
| category.parts[0].categories[9].target.attributes.param | string |
| category.parts[0].categories[10] | object |
| category.parts[0].categories[10].label | string |
| category.parts[0].categories[10].target | object |
| category.parts[0].categories[10].target.page | string |
| category.parts[0].categories[10].target.attributes | object |
| category.parts[0].categories[10].target.attributes.category | string |
| category.parts[0].categories[10].target.attributes.param | string |
| category.parts[0].categories[11] | object |
| category.parts[0].categories[11].label | string |
| category.parts[0].categories[11].target | object |
| category.parts[0].categories[11].target.page | string |
| category.parts[0].categories[11].target.attributes | object |
| category.parts[0].categories[11].target.attributes.category | string |
| category.parts[0].categories[11].target.attributes.param | string |
| category.parts[0].categories[12] | object |
| category.parts[0].categories[12].label | string |
| category.parts[0].categories[12].target | object |
| category.parts[0].categories[12].target.page | string |
| category.parts[0].categories[12].target.attributes | object |
| category.parts[0].categories[12].target.attributes.category | string |
| category.parts[0].categories[12].target.attributes.param | string |
| category.parts[0].categories[13] | object |
| category.parts[0].categories[13].label | string |
| category.parts[0].categories[13].target | object |
| category.parts[0].categories[13].target.page | string |
| category.parts[0].categories[13].target.attributes | object |
| category.parts[0].categories[13].target.attributes.category | string |
| category.parts[0].categories[13].target.attributes.param | string |
| category.parts[0].categories[14] | object |
| category.parts[0].categories[14].label | string |
| category.parts[0].categories[14].target | object |
| category.parts[0].categories[14].target.page | string |
| category.parts[0].categories[14].target.attributes | object |
| category.parts[0].categories[14].target.attributes.category | string |
| category.parts[0].categories[14].target.attributes.param | string |
| category.parts[0].categories[15] | object |
| category.parts[0].categories[15].label | string |
| category.parts[0].categories[15].target | object |
| category.parts[0].categories[15].target.page | string |
| category.parts[0].categories[15].target.attributes | object |
| category.parts[0].categories[15].target.attributes.category | string |
| category.parts[0].categories[15].target.attributes.param | string |
| category.parts[0].categories[16] | object |
| category.parts[0].categories[16].label | string |
| category.parts[0].categories[16].target | object |
| category.parts[0].categories[16].target.page | string |
| category.parts[0].categories[16].target.attributes | object |
| category.parts[0].categories[16].target.attributes.category | string |
| category.parts[0].categories[16].target.attributes.param | string |
| category.parts[0].categories[17] | object |
| category.parts[0].categories[17].label | string |
| category.parts[0].categories[17].target | object |
| category.parts[0].categories[17].target.page | string |
| category.parts[0].categories[17].target.attributes | object |
| category.parts[0].categories[17].target.attributes.category | string |
| category.parts[0].categories[17].target.attributes.param | string |
| category.parts[0].categories[18] | object |
| category.parts[0].categories[18].label | string |
| category.parts[0].categories[18].target | object |
| category.parts[0].categories[18].target.page | string |
| category.parts[0].categories[18].target.attributes | object |
| category.parts[0].categories[18].target.attributes.category | string |
| category.parts[0].categories[18].target.attributes.param | string |
| category.parts[0].categories[19] | object |
| category.parts[0].categories[19].label | string |
| category.parts[0].categories[19].target | object |
| category.parts[0].categories[19].target.page | string |
| category.parts[0].categories[19].target.attributes | object |
| category.parts[0].categories[19].target.attributes.category | string |
| category.parts[0].categories[19].target.attributes.param | string |
| category.parts[0].categories[20] | object |
| category.parts[0].categories[20].label | string |
| category.parts[0].categories[20].target | object |
| category.parts[0].categories[20].target.page | string |
| category.parts[0].categories[20].target.attributes | object |
| category.parts[0].categories[20].target.attributes.category | string |
| category.parts[0].categories[20].target.attributes.param | string |
| category.parts[0].categories[21] | object |
| category.parts[0].categories[21].label | string |
| category.parts[0].categories[21].target | object |
| category.parts[0].categories[21].target.page | string |
| category.parts[0].categories[21].target.attributes | object |
| category.parts[0].categories[21].target.attributes.category | string |
| category.parts[0].categories[21].target.attributes.param | string |
| category.parts[0].categories[22] | object |
| category.parts[0].categories[22].label | string |
| category.parts[0].categories[22].target | object |
| category.parts[0].categories[22].target.page | string |
| category.parts[0].categories[22].target.attributes | object |
| category.parts[0].categories[22].target.attributes.category | string |
| category.parts[0].categories[22].target.attributes.param | string |
| category.parts[0].categories[23] | object |
| category.parts[0].categories[23].label | string |
| category.parts[0].categories[23].target | object |
| category.parts[0].categories[23].target.page | string |
| category.parts[0].categories[23].target.attributes | object |
| category.parts[0].categories[23].target.attributes.category | string |
| category.parts[0].categories[23].target.attributes.param | string |
| category.parts[0].categories[24] | object |
| category.parts[0].categories[24].label | string |
| category.parts[0].categories[24].target | object |
| category.parts[0].categories[24].target.page | string |
| category.parts[0].categories[24].target.attributes | object |
| category.parts[0].categories[24].target.attributes.category | string |
| category.parts[0].categories[24].target.attributes.param | string |
| category.parts[0].categories[25] | object |
| category.parts[0].categories[25].label | string |
| category.parts[0].categories[25].target | object |
| category.parts[0].categories[25].target.page | string |
| category.parts[0].categories[25].target.attributes | object |
| category.parts[0].categories[25].target.attributes.category | string |
| category.parts[0].categories[25].target.attributes.param | string |
| category.parts[0].categories[26] | object |
| category.parts[0].categories[26].label | string |
| category.parts[0].categories[26].target | object |
| category.parts[0].categories[26].target.page | string |
| category.parts[0].categories[26].target.attributes | object |
| category.parts[0].categories[26].target.attributes.category | string |
| category.parts[0].categories[26].target.attributes.param | string |
| category.parts[0].categories[27] | object |
| category.parts[0].categories[27].label | string |
| category.parts[0].categories[27].target | object |
| category.parts[0].categories[27].target.page | string |
| category.parts[0].categories[27].target.attributes | object |
| category.parts[0].categories[27].target.attributes.category | string |
| category.parts[0].categories[27].target.attributes.param | string |
| category.parts[0].categories[28] | object |
| category.parts[0].categories[28].label | string |
| category.parts[0].categories[28].target | object |
| category.parts[0].categories[28].target.page | string |
| category.parts[0].categories[28].target.attributes | object |
| category.parts[0].categories[28].target.attributes.category | string |
| category.parts[0].categories[28].target.attributes.param | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.load | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |
| comic.enableTagsTranslate | boolean |

</details>

## jcomic — passed

能力检查：9/9；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 200 |  |
| source.load | passed |  | 37 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 1 |  |
| category | passed |  | 0 |  |
| search.load | passed |  | 632 |  |
| search.load.page[2] | passed |  | 1320 |  |
| explore[0].load | passed |  | 674 |  |
| explore[0].load.page[2] | passed |  | 685 |  |
| categoryComics.load | passed |  | 708 |  |
| categoryComics.load.page[2] | passed |  | 271 |  |
| comic.loadInfo | passed |  | 5355 |  |
| comic.loadEp | passed |  | 1001 |  |
| comic.link.linkToId | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 379 |  |
| image.decode | passed |  | 41 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 264 |  |
| image.decode | passed |  | 11 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 220 |  |
| thumbnail.decode | passed |  | 12 |  |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |

</details>

## hot_manga — partial

能力检查：7/11；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 173 |  |
| source.load | passed |  | 48 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 2534 |  |
| search.load.page[2] | passed |  | 663 |  |
| explore[0].load | passed |  | 15971 |  |
| categoryComics.load | passed |  | 11061 |  |
| categoryComics.load.page[2] | passed |  | 399 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 2400 |  |
| comic.loadEp | passed |  | 311 |  |
| comic.onClickTag | passed |  | 1 |  |
| image.download | passed |  | 426 |  |
| image.decode | passed |  | 70 |  |
| image.download | passed |  | 119 |  |
| image.decode | passed |  | 41 |  |
| thumbnail.download | passed |  | 106 |  |
| thumbnail.decode | passed |  | 4 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| account.registerWebsite | string |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].itemType | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].categories[6] | string |
| category.parts[1].categories[7] | string |
| category.parts[1].categories[8] | string |
| category.parts[1].categories[9] | string |
| category.parts[1].categories[10] | string |
| category.parts[1].categories[11] | string |
| category.parts[1].categories[12] | string |
| category.parts[1].categories[13] | string |
| category.parts[1].categories[14] | string |
| category.parts[1].categories[15] | string |
| category.parts[1].categories[16] | string |
| category.parts[1].categories[17] | string |
| category.parts[1].categories[18] | string |
| category.parts[1].categories[19] | string |
| category.parts[1].categories[20] | string |
| category.parts[1].categories[21] | string |
| category.parts[1].categories[22] | string |
| category.parts[1].categories[23] | string |
| category.parts[1].categories[24] | string |
| category.parts[1].categories[25] | string |
| category.parts[1].categories[26] | string |
| category.parts[1].categories[27] | string |
| category.parts[1].categories[28] | string |
| category.parts[1].categories[29] | string |
| category.parts[1].categories[30] | string |
| category.parts[1].categories[31] | string |
| category.parts[1].categories[32] | string |
| category.parts[1].categories[33] | string |
| category.parts[1].categories[34] | string |
| category.parts[1].categories[35] | string |
| category.parts[1].categories[36] | string |
| category.parts[1].categories[37] | string |
| category.parts[1].categories[38] | string |
| category.parts[1].categories[39] | string |
| category.parts[1].categories[40] | string |
| category.parts[1].categories[41] | string |
| category.parts[1].categories[42] | string |
| category.parts[1].categories[43] | string |
| category.parts[1].categories[44] | string |
| category.parts[1].categories[45] | string |
| category.parts[1].categories[46] | string |
| category.parts[1].categories[47] | string |
| category.parts[1].categories[48] | string |
| category.parts[1].categories[49] | string |
| category.parts[1].categories[50] | string |
| category.parts[1].categories[51] | string |
| category.parts[1].categories[52] | string |
| category.parts[1].categories[53] | string |
| category.parts[1].categories[54] | string |
| category.parts[1].categories[55] | string |
| category.parts[1].categories[56] | string |
| category.parts[1].categories[57] | string |
| category.parts[1].categories[58] | string |
| category.parts[1].categories[59] | string |
| category.parts[1].categories[60] | string |
| category.parts[1].categories[61] | string |
| category.parts[1].categories[62] | string |
| category.parts[1].categories[63] | string |
| category.parts[1].categories[64] | string |
| category.parts[1].categories[65] | string |
| category.parts[1].categories[66] | string |
| category.parts[1].categories[67] | string |
| category.parts[1].categories[68] | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[1].categoryParams[6] | string |
| category.parts[1].categoryParams[7] | string |
| category.parts[1].categoryParams[8] | string |
| category.parts[1].categoryParams[9] | string |
| category.parts[1].categoryParams[10] | string |
| category.parts[1].categoryParams[11] | string |
| category.parts[1].categoryParams[12] | string |
| category.parts[1].categoryParams[13] | string |
| category.parts[1].categoryParams[14] | string |
| category.parts[1].categoryParams[15] | string |
| category.parts[1].categoryParams[16] | string |
| category.parts[1].categoryParams[17] | string |
| category.parts[1].categoryParams[18] | string |
| category.parts[1].categoryParams[19] | string |
| category.parts[1].categoryParams[20] | string |
| category.parts[1].categoryParams[21] | string |
| category.parts[1].categoryParams[22] | string |
| category.parts[1].categoryParams[23] | string |
| category.parts[1].categoryParams[24] | string |
| category.parts[1].categoryParams[25] | string |
| category.parts[1].categoryParams[26] | string |
| category.parts[1].categoryParams[27] | string |
| category.parts[1].categoryParams[28] | string |
| category.parts[1].categoryParams[29] | string |
| category.parts[1].categoryParams[30] | string |
| category.parts[1].categoryParams[31] | string |
| category.parts[1].categoryParams[32] | string |
| category.parts[1].categoryParams[33] | string |
| category.parts[1].categoryParams[34] | string |
| category.parts[1].categoryParams[35] | string |
| category.parts[1].categoryParams[36] | string |
| category.parts[1].categoryParams[37] | string |
| category.parts[1].categoryParams[38] | string |
| category.parts[1].categoryParams[39] | string |
| category.parts[1].categoryParams[40] | string |
| category.parts[1].categoryParams[41] | string |
| category.parts[1].categoryParams[42] | string |
| category.parts[1].categoryParams[43] | string |
| category.parts[1].categoryParams[44] | string |
| category.parts[1].categoryParams[45] | string |
| category.parts[1].categoryParams[46] | string |
| category.parts[1].categoryParams[47] | string |
| category.parts[1].categoryParams[48] | string |
| category.parts[1].categoryParams[49] | string |
| category.parts[1].categoryParams[50] | string |
| category.parts[1].categoryParams[51] | string |
| category.parts[1].categoryParams[52] | string |
| category.parts[1].categoryParams[53] | string |
| category.parts[1].categoryParams[54] | string |
| category.parts[1].categoryParams[55] | string |
| category.parts[1].categoryParams[56] | string |
| category.parts[1].categoryParams[57] | string |
| category.parts[1].categoryParams[58] | string |
| category.parts[1].categoryParams[59] | string |
| category.parts[1].categoryParams[60] | string |
| category.parts[1].categoryParams[61] | string |
| category.parts[1].categoryParams[62] | string |
| category.parts[1].categoryParams[63] | string |
| category.parts[1].categoryParams[64] | string |
| category.parts[1].categoryParams[65] | string |
| category.parts[1].categoryParams[66] | string |
| category.parts[1].categoryParams[67] | string |
| category.parts[1].categoryParams[68] | string |
| category.parts[1].itemType | string |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].categories | array |
| category.parts[2].categories[0] | string |
| category.parts[2].categories[1] | string |
| category.parts[2].categories[2] | string |
| category.parts[2].categories[3] | string |
| category.parts[2].categories[4] | string |
| category.parts[2].categoryParams | array |
| category.parts[2].categoryParams[0] | string |
| category.parts[2].categoryParams[1] | string |
| category.parts[2].categoryParams[2] | string |
| category.parts[2].categoryParams[3] | string |
| category.parts[2].categoryParams[4] | string |
| category.parts[2].itemType | string |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].showWhen | array |
| categoryComics.optionList[0].showWhen[0] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].showWhen | array |
| categoryComics.optionList[1].showWhen[0] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.optionList[2].options[3] | string |
| categoryComics.optionList[2].showWhen | array |
| categoryComics.optionList[2].showWhen[0] | string |
| categoryComics.optionList[2].showWhen[1] | string |
| categoryComics.optionList[2].showWhen[2] | string |
| categoryComics.optionList[2].showWhen[3] | string |
| categoryComics.optionList[2].showWhen[4] | string |
| categoryComics.optionList[2].showWhen[5] | string |
| categoryComics.optionList[2].showWhen[6] | string |
| categoryComics.optionList[2].showWhen[7] | string |
| categoryComics.optionList[2].showWhen[8] | string |
| categoryComics.optionList[2].showWhen[9] | string |
| categoryComics.optionList[2].showWhen[10] | string |
| categoryComics.optionList[2].showWhen[11] | string |
| categoryComics.optionList[2].showWhen[12] | string |
| categoryComics.optionList[2].showWhen[13] | string |
| categoryComics.optionList[2].showWhen[14] | string |
| categoryComics.optionList[2].showWhen[15] | string |
| categoryComics.optionList[2].showWhen[16] | string |
| categoryComics.optionList[2].showWhen[17] | string |
| categoryComics.optionList[2].showWhen[18] | string |
| categoryComics.optionList[2].showWhen[19] | string |
| categoryComics.optionList[2].showWhen[20] | string |
| categoryComics.optionList[2].showWhen[21] | string |
| categoryComics.optionList[2].showWhen[22] | string |
| categoryComics.optionList[2].showWhen[23] | string |
| categoryComics.optionList[2].showWhen[24] | string |
| categoryComics.optionList[2].showWhen[25] | string |
| categoryComics.optionList[2].showWhen[26] | string |
| categoryComics.optionList[2].showWhen[27] | string |
| categoryComics.optionList[2].showWhen[28] | string |
| categoryComics.optionList[2].showWhen[29] | string |
| categoryComics.optionList[2].showWhen[30] | string |
| categoryComics.optionList[2].showWhen[31] | string |
| categoryComics.optionList[2].showWhen[32] | string |
| categoryComics.optionList[2].showWhen[33] | string |
| categoryComics.optionList[2].showWhen[34] | string |
| categoryComics.optionList[2].showWhen[35] | string |
| categoryComics.optionList[2].showWhen[36] | string |
| categoryComics.optionList[2].showWhen[37] | string |
| categoryComics.optionList[2].showWhen[38] | string |
| categoryComics.optionList[2].showWhen[39] | string |
| categoryComics.optionList[2].showWhen[40] | string |
| categoryComics.optionList[2].showWhen[41] | string |
| categoryComics.optionList[2].showWhen[42] | string |
| categoryComics.optionList[2].showWhen[43] | string |
| categoryComics.optionList[2].showWhen[44] | string |
| categoryComics.optionList[2].showWhen[45] | string |
| categoryComics.optionList[2].showWhen[46] | string |
| categoryComics.optionList[2].showWhen[47] | string |
| categoryComics.optionList[2].showWhen[48] | string |
| categoryComics.optionList[2].showWhen[49] | string |
| categoryComics.optionList[2].showWhen[50] | string |
| categoryComics.optionList[2].showWhen[51] | string |
| categoryComics.optionList[2].showWhen[52] | string |
| categoryComics.optionList[2].showWhen[53] | string |
| categoryComics.optionList[2].showWhen[54] | string |
| categoryComics.optionList[2].showWhen[55] | string |
| categoryComics.optionList[2].showWhen[56] | string |
| categoryComics.optionList[2].showWhen[57] | string |
| categoryComics.optionList[2].showWhen[58] | string |
| categoryComics.optionList[2].showWhen[59] | string |
| categoryComics.optionList[2].showWhen[60] | string |
| categoryComics.optionList[2].showWhen[61] | string |
| categoryComics.optionList[2].showWhen[62] | string |
| categoryComics.optionList[2].showWhen[63] | string |
| categoryComics.optionList[2].showWhen[64] | string |
| categoryComics.optionList[2].showWhen[65] | string |
| categoryComics.optionList[2].showWhen[66] | string |
| categoryComics.optionList[2].showWhen[67] | string |
| categoryComics.optionList[2].showWhen[68] | string |
| categoryComics.optionList[3] | object |
| categoryComics.optionList[3].options | array |
| categoryComics.optionList[3].options[0] | string |
| categoryComics.optionList[3].options[1] | string |
| categoryComics.optionList[3].options[2] | string |
| categoryComics.optionList[3].options[3] | string |
| categoryComics.optionList[3].showWhen | array |
| categoryComics.optionList[3].showWhen[0] | string |
| categoryComics.optionList[3].showWhen[1] | string |
| categoryComics.optionList[3].showWhen[2] | string |
| categoryComics.optionList[3].showWhen[3] | string |
| categoryComics.optionList[3].showWhen[4] | string |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.addOrDelFavorite | function |
| favorites.loadComics | function |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onClickTag | function |
| settings | object |
| settings.favorites_ordering | object |
| settings.favorites_ordering.title | string |
| settings.favorites_ordering.type | string |
| settings.favorites_ordering.options | array |
| settings.favorites_ordering.options[0] | object |
| settings.favorites_ordering.options[0].value | string |
| settings.favorites_ordering.options[0].text | string |
| settings.favorites_ordering.options[1] | object |
| settings.favorites_ordering.options[1].value | string |
| settings.favorites_ordering.options[1].text | string |
| settings.favorites_ordering.options[2] | object |
| settings.favorites_ordering.options[2].value | string |
| settings.favorites_ordering.options[2].text | string |
| settings.favorites_ordering.default | string |
| settings.image_quality | object |
| settings.image_quality.title | string |
| settings.image_quality.type | string |
| settings.image_quality.options | array |
| settings.image_quality.options[0] | object |
| settings.image_quality.options[0].value | string |
| settings.image_quality.options[0].text | string |
| settings.image_quality.options[1] | object |
| settings.image_quality.options[1].value | string |
| settings.image_quality.options[1].text | string |
| settings.image_quality.options[2] | object |
| settings.image_quality.options[2].value | string |
| settings.image_quality.options[2].text | string |
| settings.image_quality.default | string |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.validator | string |
| settings.base_url.default | string |

</details>

## kavita — failed

能力检查：8/14；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 174 |  |
| source.load | passed |  | 38 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 32 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| category.parts[0].loader | passed |  | 0 |  |
| category.parts[1].loader | passed |  | 0 |  |
| category.parts[2].loader | passed |  | 0 |  |
| category.parts[3].loader | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | timeout | 10511 | Network request failed: fetch failed |
| explore[0].load | failed | timeout | 10500 | Network request failed: fetch failed |
| categoryComics.load | failed | tls_error | 8173 | Network request failed: fetch failed |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 1 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| search.onTagSuggestionSelected | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| account.logout | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].loader | function |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].loader | function |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].loader | function |
| category.parts[3] | object |
| category.parts[3].name | string |
| category.parts[3].type | string |
| category.parts[3].loader | function |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[0].options[6] | string |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| search.onTagSuggestionSelected | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onClickTag | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.base_url | object |
| settings.base_url.title | string |
| settings.base_url.type | string |
| settings.base_url.default | string |
| settings.base_url.validator | string |

</details>

## happy — failed

能力检查：5/11；源版本：1.0.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 173 |  |
| source.load | passed |  | 33 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 33 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | dns_error | 69 | Network request failed: fetch failed |
| explore[0].load | failed | dns_error | 536 | Network request failed: fetch failed |
| categoryComics.load | failed | dns_error | 551 | Network request failed: fetch failed |
| categoryComics.ranking.load | failed | dns_error | 523 | Network request failed: fetch failed |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadComments | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadChapterComments | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| settings.wipeCache.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].categories[38] | string |
| category.parts[0].categories[39] | string |
| category.parts[0].categories[40] | string |
| category.parts[0].categories[41] | string |
| category.parts[0].categories[42] | string |
| category.parts[0].categories[43] | string |
| category.parts[0].categories[44] | string |
| category.parts[0].categories[45] | string |
| category.parts[0].categories[46] | string |
| category.parts[0].categories[47] | string |
| category.parts[0].categories[48] | string |
| category.parts[0].categories[49] | string |
| category.parts[0].categories[50] | string |
| category.parts[0].categories[51] | string |
| category.parts[0].categories[52] | string |
| category.parts[0].categories[53] | string |
| category.parts[0].categories[54] | string |
| category.parts[0].categories[55] | string |
| category.parts[0].categories[56] | string |
| category.parts[0].categories[57] | string |
| category.parts[0].categories[58] | string |
| category.parts[0].categories[59] | string |
| category.parts[0].categories[60] | string |
| category.parts[0].categories[61] | string |
| category.parts[0].categories[62] | string |
| category.parts[0].categories[63] | string |
| category.parts[0].categories[64] | string |
| category.parts[0].categories[65] | string |
| category.parts[0].categories[66] | string |
| category.parts[0].categories[67] | string |
| category.parts[0].categories[68] | string |
| category.parts[0].categories[69] | string |
| category.parts[0].categories[70] | string |
| category.parts[0].categories[71] | string |
| category.parts[0].categories[72] | string |
| category.parts[0].categories[73] | string |
| category.parts[0].categories[74] | string |
| category.parts[0].categories[75] | string |
| category.parts[0].categories[76] | string |
| category.parts[0].categories[77] | string |
| category.parts[0].categories[78] | string |
| category.parts[0].categories[79] | string |
| category.parts[0].categories[80] | string |
| category.parts[0].categories[81] | string |
| category.parts[0].categories[82] | string |
| category.parts[0].categories[83] | string |
| category.parts[0].categories[84] | string |
| category.parts[0].categories[85] | string |
| category.parts[0].categories[86] | string |
| category.parts[0].categories[87] | string |
| category.parts[0].categories[88] | string |
| category.parts[0].categories[89] | string |
| category.parts[0].categories[90] | string |
| category.parts[0].categories[91] | string |
| category.parts[0].categories[92] | string |
| category.parts[0].categories[93] | string |
| category.parts[0].categories[94] | string |
| category.parts[0].categories[95] | string |
| category.parts[0].categories[96] | string |
| category.parts[0].categories[97] | string |
| category.parts[0].categories[98] | string |
| category.parts[0].categories[99] | string |
| category.parts[0].categories[100] | string |
| category.parts[0].categories[101] | string |
| category.parts[0].categories[102] | string |
| category.parts[0].categories[103] | string |
| category.parts[0].categories[104] | string |
| category.parts[0].categories[105] | string |
| category.parts[0].categories[106] | string |
| category.parts[0].categories[107] | string |
| category.parts[0].categories[108] | string |
| category.parts[0].categories[109] | string |
| category.parts[0].categories[110] | string |
| category.parts[0].categories[111] | string |
| category.parts[0].categories[112] | string |
| category.parts[0].categories[113] | string |
| category.parts[0].categories[114] | string |
| category.parts[0].categories[115] | string |
| category.parts[0].categories[116] | string |
| category.parts[0].categories[117] | string |
| category.parts[0].categories[118] | string |
| category.parts[0].categories[119] | string |
| category.parts[0].categories[120] | string |
| category.parts[0].categories[121] | string |
| category.parts[0].categories[122] | string |
| category.parts[0].categories[123] | string |
| category.parts[0].categories[124] | string |
| category.parts[0].categories[125] | string |
| category.parts[0].categories[126] | string |
| category.parts[0].categories[127] | string |
| category.parts[0].categories[128] | string |
| category.parts[0].categories[129] | string |
| category.parts[0].categories[130] | string |
| category.parts[0].categories[131] | string |
| category.parts[0].categories[132] | string |
| category.parts[0].categories[133] | string |
| category.parts[0].categories[134] | string |
| category.parts[0].categories[135] | string |
| category.parts[0].categories[136] | string |
| category.parts[0].categories[137] | string |
| category.parts[0].categories[138] | string |
| category.parts[0].categories[139] | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[0].categoryParams[38] | string |
| category.parts[0].categoryParams[39] | string |
| category.parts[0].categoryParams[40] | string |
| category.parts[0].categoryParams[41] | string |
| category.parts[0].categoryParams[42] | string |
| category.parts[0].categoryParams[43] | string |
| category.parts[0].categoryParams[44] | string |
| category.parts[0].categoryParams[45] | string |
| category.parts[0].categoryParams[46] | string |
| category.parts[0].categoryParams[47] | string |
| category.parts[0].categoryParams[48] | string |
| category.parts[0].categoryParams[49] | string |
| category.parts[0].categoryParams[50] | string |
| category.parts[0].categoryParams[51] | string |
| category.parts[0].categoryParams[52] | string |
| category.parts[0].categoryParams[53] | string |
| category.parts[0].categoryParams[54] | string |
| category.parts[0].categoryParams[55] | string |
| category.parts[0].categoryParams[56] | string |
| category.parts[0].categoryParams[57] | string |
| category.parts[0].categoryParams[58] | string |
| category.parts[0].categoryParams[59] | string |
| category.parts[0].categoryParams[60] | string |
| category.parts[0].categoryParams[61] | string |
| category.parts[0].categoryParams[62] | string |
| category.parts[0].categoryParams[63] | string |
| category.parts[0].categoryParams[64] | string |
| category.parts[0].categoryParams[65] | string |
| category.parts[0].categoryParams[66] | string |
| category.parts[0].categoryParams[67] | string |
| category.parts[0].categoryParams[68] | string |
| category.parts[0].categoryParams[69] | string |
| category.parts[0].categoryParams[70] | string |
| category.parts[0].categoryParams[71] | string |
| category.parts[0].categoryParams[72] | string |
| category.parts[0].categoryParams[73] | string |
| category.parts[0].categoryParams[74] | string |
| category.parts[0].categoryParams[75] | string |
| category.parts[0].categoryParams[76] | string |
| category.parts[0].categoryParams[77] | string |
| category.parts[0].categoryParams[78] | string |
| category.parts[0].categoryParams[79] | string |
| category.parts[0].categoryParams[80] | string |
| category.parts[0].categoryParams[81] | string |
| category.parts[0].categoryParams[82] | string |
| category.parts[0].categoryParams[83] | string |
| category.parts[0].categoryParams[84] | string |
| category.parts[0].categoryParams[85] | string |
| category.parts[0].categoryParams[86] | string |
| category.parts[0].categoryParams[87] | string |
| category.parts[0].categoryParams[88] | string |
| category.parts[0].categoryParams[89] | string |
| category.parts[0].categoryParams[90] | string |
| category.parts[0].categoryParams[91] | string |
| category.parts[0].categoryParams[92] | string |
| category.parts[0].categoryParams[93] | string |
| category.parts[0].categoryParams[94] | string |
| category.parts[0].categoryParams[95] | string |
| category.parts[0].categoryParams[96] | string |
| category.parts[0].categoryParams[97] | string |
| category.parts[0].categoryParams[98] | string |
| category.parts[0].categoryParams[99] | string |
| category.parts[0].categoryParams[100] | string |
| category.parts[0].categoryParams[101] | string |
| category.parts[0].categoryParams[102] | string |
| category.parts[0].categoryParams[103] | string |
| category.parts[0].categoryParams[104] | string |
| category.parts[0].categoryParams[105] | string |
| category.parts[0].categoryParams[106] | string |
| category.parts[0].categoryParams[107] | string |
| category.parts[0].categoryParams[108] | string |
| category.parts[0].categoryParams[109] | string |
| category.parts[0].categoryParams[110] | string |
| category.parts[0].categoryParams[111] | string |
| category.parts[0].categoryParams[112] | string |
| category.parts[0].categoryParams[113] | string |
| category.parts[0].categoryParams[114] | string |
| category.parts[0].categoryParams[115] | string |
| category.parts[0].categoryParams[116] | string |
| category.parts[0].categoryParams[117] | string |
| category.parts[0].categoryParams[118] | string |
| category.parts[0].categoryParams[119] | string |
| category.parts[0].categoryParams[120] | string |
| category.parts[0].categoryParams[121] | string |
| category.parts[0].categoryParams[122] | string |
| category.parts[0].categoryParams[123] | string |
| category.parts[0].categoryParams[124] | string |
| category.parts[0].categoryParams[125] | string |
| category.parts[0].categoryParams[126] | string |
| category.parts[0].categoryParams[127] | string |
| category.parts[0].categoryParams[128] | string |
| category.parts[0].categoryParams[129] | string |
| category.parts[0].categoryParams[130] | string |
| category.parts[0].categoryParams[131] | string |
| category.parts[0].categoryParams[132] | string |
| category.parts[0].categoryParams[133] | string |
| category.parts[0].categoryParams[134] | string |
| category.parts[0].categoryParams[135] | string |
| category.parts[0].categoryParams[136] | string |
| category.parts[0].categoryParams[137] | string |
| category.parts[0].categoryParams[138] | string |
| category.parts[0].categoryParams[139] | string |
| category.parts[0].itemType | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].label | string |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.optionList[0].options[3] | string |
| categoryComics.optionList[0].options[4] | string |
| categoryComics.optionList[0].options[5] | string |
| categoryComics.optionList[0].options[6] | string |
| categoryComics.optionList[1] | object |
| categoryComics.optionList[1].label | string |
| categoryComics.optionList[1].options | array |
| categoryComics.optionList[1].options[0] | string |
| categoryComics.optionList[1].options[1] | string |
| categoryComics.optionList[1].options[2] | string |
| categoryComics.optionList[1].options[3] | string |
| categoryComics.optionList[1].options[4] | string |
| categoryComics.optionList[1].options[5] | string |
| categoryComics.optionList[2] | object |
| categoryComics.optionList[2].label | string |
| categoryComics.optionList[2].options | array |
| categoryComics.optionList[2].options[0] | string |
| categoryComics.optionList[2].options[1] | string |
| categoryComics.optionList[2].options[2] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.options[3] | string |
| categoryComics.ranking.options[4] | string |
| categoryComics.ranking.options[5] | string |
| categoryComics.ranking.options[6] | string |
| categoryComics.ranking.options[7] | string |
| categoryComics.ranking.load | function |
| search | object |
| search.load | function |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.loadChapterComments | function |
| comic.onClickTag | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.originalImage | object |
| settings.originalImage.title | string |
| settings.originalImage.type | string |
| settings.originalImage.default | boolean |
| settings.commentOrder | object |
| settings.commentOrder.title | string |
| settings.commentOrder.type | string |
| settings.commentOrder.options | array |
| settings.commentOrder.options[0] | object |
| settings.commentOrder.options[0].value | string |
| settings.commentOrder.options[0].text | string |
| settings.commentOrder.options[1] | object |
| settings.commentOrder.options[1].value | string |
| settings.commentOrder.options[1].text | string |
| settings.commentOrder.default | string |
| settings.cacheTTL | object |
| settings.cacheTTL.title | string |
| settings.cacheTTL.type | string |
| settings.cacheTTL.options | array |
| settings.cacheTTL.options[0] | object |
| settings.cacheTTL.options[0].value | number |
| settings.cacheTTL.options[0].text | string |
| settings.cacheTTL.options[1] | object |
| settings.cacheTTL.options[1].value | number |
| settings.cacheTTL.options[1].text | string |
| settings.cacheTTL.options[2] | object |
| settings.cacheTTL.options[2].value | number |
| settings.cacheTTL.options[2].text | string |
| settings.cacheTTL.options[3] | object |
| settings.cacheTTL.options[3].value | number |
| settings.cacheTTL.options[3].text | string |
| settings.cacheTTL.options[4] | object |
| settings.cacheTTL.options[4].value | number |
| settings.cacheTTL.options[4].text | string |
| settings.cacheTTL.options[5] | object |
| settings.cacheTTL.options[5].value | number |
| settings.cacheTTL.options[5].text | string |
| settings.cacheTTL.default | number |
| settings.wipeCache | object |
| settings.wipeCache.title | string |
| settings.wipeCache.type | string |
| settings.wipeCache.buttonText | string |
| settings.wipeCache.callback | function |

</details>

## mycomic — failed

能力检查：12/17；源版本：1.1.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 174 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 11 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 1 | Provide credentials.cookieValues |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| search.load | skipped | missing_input | 0 | Provide inputs.keyword |
| explore[0].load | passed |  | 341 |  |
| explore[0].load.page[2] | passed |  | 218 |  |
| explore[1].load | passed |  | 86 |  |
| explore[1].load.page[2] | passed |  | 265 |  |
| explore[2].load | passed |  | 234 |  |
| explore[2].load.page[2] | passed |  | 379 |  |
| categoryComics.load | passed |  | 387 |  |
| categoryComics.load.page[2] | passed |  | 303 |  |
| categoryComics.ranking.load | failed | contract_violation | 201 | Comic list is empty; provide a representative keyword or case |
| comic.loadInfo | passed |  | 267 |  |
| comic.loadEp | passed |  | 256 |  |
| comic.link.linkToId | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 103 |  |
| image.decode | passed |  | 60 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 197 |  |
| image.decode | passed |  | 24 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 149 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
| account.loginWithCookies | object |
| account.loginWithCookies.fields | array |
| account.loginWithCookies.fields[0] | string |
| account.loginWithCookies.validate | function |
| account.logout | function |
| explore | array |
| explore[0] | object |
| explore[0].title | string |
| explore[0].type | string |
| explore[0].load | function |
| explore[1] | object |
| explore[1].title | string |
| explore[1].type | string |
| explore[1].load | function |
| explore[2] | object |
| explore[2].title | string |
| explore[2].type | string |
| explore[2].load | function |
| category | object |
| category.title | string |
| category.parts | array |
| category.parts[0] | object |
| category.parts[0].name | string |
| category.parts[0].type | string |
| category.parts[0].categories | array |
| category.parts[0].categories[0] | string |
| category.parts[0].categories[1] | string |
| category.parts[0].categories[2] | string |
| category.parts[0].categories[3] | string |
| category.parts[0].categories[4] | string |
| category.parts[0].categories[5] | string |
| category.parts[0].categories[6] | string |
| category.parts[0].categories[7] | string |
| category.parts[0].categories[8] | string |
| category.parts[0].categories[9] | string |
| category.parts[0].categories[10] | string |
| category.parts[0].categories[11] | string |
| category.parts[0].categories[12] | string |
| category.parts[0].categories[13] | string |
| category.parts[0].categories[14] | string |
| category.parts[0].categories[15] | string |
| category.parts[0].categories[16] | string |
| category.parts[0].categories[17] | string |
| category.parts[0].categories[18] | string |
| category.parts[0].categories[19] | string |
| category.parts[0].categories[20] | string |
| category.parts[0].categories[21] | string |
| category.parts[0].categories[22] | string |
| category.parts[0].categories[23] | string |
| category.parts[0].categories[24] | string |
| category.parts[0].categories[25] | string |
| category.parts[0].categories[26] | string |
| category.parts[0].categories[27] | string |
| category.parts[0].categories[28] | string |
| category.parts[0].categories[29] | string |
| category.parts[0].categories[30] | string |
| category.parts[0].categories[31] | string |
| category.parts[0].categories[32] | string |
| category.parts[0].categories[33] | string |
| category.parts[0].categories[34] | string |
| category.parts[0].categories[35] | string |
| category.parts[0].categories[36] | string |
| category.parts[0].categories[37] | string |
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
| category.parts[0].categoryParams[3] | string |
| category.parts[0].categoryParams[4] | string |
| category.parts[0].categoryParams[5] | string |
| category.parts[0].categoryParams[6] | string |
| category.parts[0].categoryParams[7] | string |
| category.parts[0].categoryParams[8] | string |
| category.parts[0].categoryParams[9] | string |
| category.parts[0].categoryParams[10] | string |
| category.parts[0].categoryParams[11] | string |
| category.parts[0].categoryParams[12] | string |
| category.parts[0].categoryParams[13] | string |
| category.parts[0].categoryParams[14] | string |
| category.parts[0].categoryParams[15] | string |
| category.parts[0].categoryParams[16] | string |
| category.parts[0].categoryParams[17] | string |
| category.parts[0].categoryParams[18] | string |
| category.parts[0].categoryParams[19] | string |
| category.parts[0].categoryParams[20] | string |
| category.parts[0].categoryParams[21] | string |
| category.parts[0].categoryParams[22] | string |
| category.parts[0].categoryParams[23] | string |
| category.parts[0].categoryParams[24] | string |
| category.parts[0].categoryParams[25] | string |
| category.parts[0].categoryParams[26] | string |
| category.parts[0].categoryParams[27] | string |
| category.parts[0].categoryParams[28] | string |
| category.parts[0].categoryParams[29] | string |
| category.parts[0].categoryParams[30] | string |
| category.parts[0].categoryParams[31] | string |
| category.parts[0].categoryParams[32] | string |
| category.parts[0].categoryParams[33] | string |
| category.parts[0].categoryParams[34] | string |
| category.parts[0].categoryParams[35] | string |
| category.parts[0].categoryParams[36] | string |
| category.parts[0].categoryParams[37] | string |
| category.parts[1] | object |
| category.parts[1].name | string |
| category.parts[1].type | string |
| category.parts[1].categories | array |
| category.parts[1].categories[0] | string |
| category.parts[1].categories[1] | string |
| category.parts[1].categories[2] | string |
| category.parts[1].categories[3] | string |
| category.parts[1].categories[4] | string |
| category.parts[1].categories[5] | string |
| category.parts[1].itemType | string |
| category.parts[1].categoryParams | array |
| category.parts[1].categoryParams[0] | string |
| category.parts[1].categoryParams[1] | string |
| category.parts[1].categoryParams[2] | string |
| category.parts[1].categoryParams[3] | string |
| category.parts[1].categoryParams[4] | string |
| category.parts[1].categoryParams[5] | string |
| category.parts[2] | object |
| category.parts[2].name | string |
| category.parts[2].type | string |
| category.parts[2].categories | array |
| category.parts[2].categories[0] | string |
| category.parts[2].categories[1] | string |
| category.parts[2].categories[2] | string |
| category.parts[2].categories[3] | string |
| category.parts[2].categories[4] | string |
| category.parts[2].itemType | string |
| category.parts[2].categoryParams | array |
| category.parts[2].categoryParams[0] | string |
| category.parts[2].categoryParams[1] | string |
| category.parts[2].categoryParams[2] | string |
| category.parts[2].categoryParams[3] | string |
| category.parts[2].categoryParams[4] | string |
| category.parts[3] | object |
| category.parts[3].name | string |
| category.parts[3].type | string |
| category.parts[3].categories | array |
| category.parts[3].categories[0] | string |
| category.parts[3].categories[1] | string |
| category.parts[3].categories[2] | string |
| category.parts[3].categories[3] | string |
| category.parts[3].categories[4] | string |
| category.parts[3].categories[5] | string |
| category.parts[3].categories[6] | string |
| category.parts[3].categories[7] | string |
| category.parts[3].categories[8] | string |
| category.parts[3].categories[9] | string |
| category.parts[3].categories[10] | string |
| category.parts[3].categories[11] | string |
| category.parts[3].categories[12] | string |
| category.parts[3].categories[13] | string |
| category.parts[3].categories[14] | string |
| category.parts[3].categories[15] | string |
| category.parts[3].categories[16] | string |
| category.parts[3].categories[17] | string |
| category.parts[3].categories[18] | string |
| category.parts[3].categories[19] | string |
| category.parts[3].categories[20] | string |
| category.parts[3].itemType | string |
| category.parts[3].categoryParams | array |
| category.parts[3].categoryParams[0] | string |
| category.parts[3].categoryParams[1] | string |
| category.parts[3].categoryParams[2] | string |
| category.parts[3].categoryParams[3] | string |
| category.parts[3].categoryParams[4] | string |
| category.parts[3].categoryParams[5] | string |
| category.parts[3].categoryParams[6] | string |
| category.parts[3].categoryParams[7] | string |
| category.parts[3].categoryParams[8] | string |
| category.parts[3].categoryParams[9] | string |
| category.parts[3].categoryParams[10] | string |
| category.parts[3].categoryParams[11] | string |
| category.parts[3].categoryParams[12] | string |
| category.parts[3].categoryParams[13] | string |
| category.parts[3].categoryParams[14] | string |
| category.parts[3].categoryParams[15] | string |
| category.parts[3].categoryParams[16] | string |
| category.parts[3].categoryParams[17] | string |
| category.parts[3].categoryParams[18] | string |
| category.parts[3].categoryParams[19] | string |
| category.parts[3].categoryParams[20] | string |
| category.parts[4] | object |
| category.parts[4].name | string |
| category.parts[4].type | string |
| category.parts[4].categories | array |
| category.parts[4].categories[0] | string |
| category.parts[4].categories[1] | string |
| category.parts[4].itemType | string |
| category.parts[4].categoryParams | array |
| category.parts[4].categoryParams[0] | string |
| category.parts[4].categoryParams[1] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| categoryComics.optionList | array |
| categoryComics.optionList[0] | object |
| categoryComics.optionList[0].options | array |
| categoryComics.optionList[0].options[0] | string |
| categoryComics.optionList[0].options[1] | string |
| categoryComics.optionList[0].options[2] | string |
| categoryComics.ranking | object |
| categoryComics.ranking.options | array |
| categoryComics.ranking.options[0] | string |
| categoryComics.ranking.options[1] | string |
| categoryComics.ranking.options[2] | string |
| categoryComics.ranking.load | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.optionList[0] | object |
| search.optionList[0].type | string |
| search.optionList[0].options | array |
| search.optionList[0].options[0] | string |
| search.optionList[0].options[1] | string |
| search.optionList[0].options[2] | string |
| search.optionList[0].label | string |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.onClickTag | function |
| comic.link | object |
| comic.link.domains | array |
| comic.link.domains[0] | string |
| comic.link.linkToId | function |

</details>
