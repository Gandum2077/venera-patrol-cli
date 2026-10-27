# Venera 巡检报告

运行：d600ca41-b7f9-449a-8c00-6dca0f65599c

源：29；通过：2；失败：9；未完整检查：15；手动跳过：3

通过仅表示本次样本和参数通过，不代表所有漫画、设置组合或所有分页均正常。

## baihehui — failed

能力检查：5/10；源版本：1.1.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 200 |  |
| source.load | passed |  | 56 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | skipped | missing_input | 0 | Provide inputs.keyword |
| explore[0].load | passed |  | 692 |  |
| categoryComics.load | passed |  | 390 |  |
| categoryComics.load.page[2] | passed |  | 449 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 923 |  |
| comic.loadEp | failed | auth_required | 569 | Login expired |
| comic.loadComments | passed |  | 735 |  |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 16 |  |
| thumbnail.decode | passed |  | 46 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
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
| category.parts[0].itemType | string |
| category.parts[0].categoryParams | array |
| category.parts[0].categoryParams[0] | string |
| category.parts[0].categoryParams[1] | string |
| category.parts[0].categoryParams[2] | string |
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
| category.parts[2].itemType | string |
| category.parts[2].categoryParams | array |
| category.parts[2].categoryParams[0] | string |
| category.parts[2].categoryParams[1] | string |
| category.parts[2].categoryParams[2] | string |
| category.parts[2].categoryParams[3] | string |
| category.enableRankingPage | boolean |
| categoryComics | object |
| categoryComics.load | function |
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
| search | object |
| search.load | function |
| search.optionList | array |
| search.enableTagsSuggestions | boolean |
| comic | object |
| comic.loadInfo | function |
| comic.loadComments | function |
| comic.loadEp | function |
| comic.enableTagsTranslate | boolean |
| settings | object |
| settings.domains | object |
| settings.domains.title | string |
| settings.domains.type | string |
| settings.domains.options | array |
| settings.domains.options[0] | object |
| settings.domains.options[0].value | string |
| settings.domains.default | string |

</details>

## copy_manga — partial

能力检查：11/18；源版本：1.4.4

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 216 |  |
| source.load | passed |  | 91 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 1088 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 1 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 939 |  |
| search.load.page[2] | passed |  | 936 |  |
| explore[0].load | passed |  | 927 |  |
| categoryComics.load | passed |  | 932 |  |
| categoryComics.load.page[2] | passed |  | 371 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1800 |  |
| comic.loadEp | passed |  | 372 |  |
| comic.loadComments | passed |  | 352 |  |
| comic.loadChapterComments | passed |  | 1140 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 123 |  |
| image.decode | passed |  | 83 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 88 |  |
| image.decode | passed |  | 42 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 216 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendChapterComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.clear_device_info.callback | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |

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
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.loadComments | function |
| comic.sendComment | function |
| comic.loadChapterComments | function |
| comic.sendChapterComment | function |
| comic.onClickTag | function |
| settings | object |
| settings.api_mode | object |
| settings.api_mode.title | string |
| settings.api_mode.type | string |
| settings.api_mode.options | array |
| settings.api_mode.options[0] | object |
| settings.api_mode.options[0].value | string |
| settings.api_mode.options[0].text | string |
| settings.api_mode.options[1] | object |
| settings.api_mode.options[1].value | string |
| settings.api_mode.options[1].text | string |
| settings.api_mode.default | string |
| settings.web_url | object |
| settings.web_url.title | string |
| settings.web_url.type | string |
| settings.web_url.options | array |
| settings.web_url.options[0] | object |
| settings.web_url.options[0].value | string |
| settings.web_url.options[0].text | string |
| settings.web_url.options[1] | object |
| settings.web_url.options[1].value | string |
| settings.web_url.options[1].text | string |
| settings.web_url.default | string |
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

## Komiic — partial

能力检查：8/17；源版本：1.0.4

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 182 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| search.load | passed |  | 1364 |  |
| explore[0].load | passed |  | 253 |  |
| explore[0].load.page[2] | passed |  | 253 |  |
| categoryComics.load | passed |  | 253 |  |
| categoryComics.load.page[2] | passed |  | 388 |  |
| categoryComics.ranking.load | passed |  | 254 |  |
| categoryComics.ranking.load.page[2] | passed |  | 250 |  |
| favorites.loadFolders | skipped | credentials_missing | 15 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1209 |  |
| comic.loadEp | passed |  | 471 |  |
| comic.loadComments | passed |  | 265 |  |
| comic.onImageLoad | passed |  | 233 |  |
| image.download | passed |  | 144 |  |
| image.decode | passed |  | 59 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 297 |  |
| image.download | passed |  | 52 |  |
| image.decode | passed |  | 31 |  |
| thumbnail.download | passed |  | 479 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
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
| comic.onImageLoad.onLoadFailed | function |

</details>

## baozi — partial

能力检查：5/9；源版本：1.1.10

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 210 |  |
| source.load | passed |  | 51 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 1 | Provide observed browser URL/title and exported cookies or token |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1589 |  |
| explore[0].load | passed |  | 710 |  |
| categoryComics.load | passed |  | 351 |  |
| categoryComics.load.page[2] | passed |  | 345 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 406 |  |
| comic.loadEp | passed |  | 420 |  |
| image.download | passed |  | 76 |  |
| image.decode | passed |  | 46 |  |
| image.download | passed |  | 145 |  |
| image.decode | passed |  | 20 |  |
| thumbnail.download | passed |  | 3124 |  |
| thumbnail.decode | passed |  | 5 |  |
| account.logout | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.logout | function |
| account.registerWebsite | string |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
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
| settings.cdn_domains.options[6] | object |
| settings.cdn_domains.options[6].value | string |
| settings.cdn_domains.options[6].text | string |
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

能力检查：8/22；源版本：1.0.7

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 176 |  |
| source.load | passed |  | 48 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for picacg; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | auth_required | 384 | Not logged in |
| explore[0].load | failed | config_error | 0 | Not logged in |
| explore[1].load | failed | config_error | 0 | Not logged in |
| explore[2].load | failed | config_error | 0 | Not logged in |
| explore[3].load | failed | config_error | 0 | Not logged in |
| explore[4].load | failed | config_error | 0 | Not logged in |
| categoryComics.load | failed | auth_required | 333 | Not logged in |
| categoryComics.ranking.load | failed | auth_required | 257 | Not logged in |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | skipped | missing_input | 1 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadComments | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.onClickTag | skipped | missing_input | 0 | Provide inputs.tag or details tags |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| account.reLogin | skipped | missing_input | 1 | No automatic adapter; provide cases[path].args and expect |
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

能力检查：12/17；源版本：1.1.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 179 |  |
| source.load | passed |  | 41 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 247 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 1 | Provide credentials.cookieValues |
| category | passed |  | 0 |  |
| search.load | passed |  | 303 |  |
| search.load.page[2] | passed |  | 174 |  |
| explore[0].load | passed |  | 467 |  |
| explore[0].load.page[2] | passed |  | 321 |  |
| categoryComics.load | passed |  | 434 |  |
| categoryComics.load.page[2] | passed |  | 487 |  |
| categoryComics.ranking.load | passed |  | 317 |  |
| categoryComics.ranking.load.page[2] | passed |  | 245 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 193 |  |
| comic.loadEp | passed |  | 246 |  |
| comic.loadComments | passed |  | 255 |  |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.idMatch | passed |  | 1 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 689 |  |
| image.decode | passed |  | 72 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 181 |  |
| image.decode | passed |  | 38 |  |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | passed |  | 508 |  |
| thumbnail.decode | passed |  | 17 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.sendComment | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

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

</details>

## wnacg — partial

能力检查：9/19；源版本：1.0.12

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 191 |  |
| source.load | passed |  | 61 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 41 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 604 |  |
| search.load.page[2] | passed |  | 317 |  |
| explore[0].load | passed |  | 246 |  |
| categoryComics.load | passed |  | 190 |  |
| categoryComics.load.page[2] | passed |  | 273 |  |
| categoryComics.ranking.load | passed |  | 237 |  |
| categoryComics.ranking.load.page[2] | passed |  | 242 |  |
| favorites.loadFolders | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 247 |  |
| comic.loadEp | passed |  | 369 |  |
| comic.loadThumbnails | passed |  | 182 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 253 |  |
| image.decode | passed |  | 47 |  |
| image.download | passed |  | 52 |  |
| image.decode | passed |  | 46 |  |
| thumbnail.download | passed |  | 359 |  |
| thumbnail.decode | passed |  | 13 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.deleteFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.refreshDomains.callback | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
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
| favorites.singleFolderForSingleComic | boolean |
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
| settings.domainSelection.default | string |
| settings.domain0 | object |
| settings.domain0.title | string |
| settings.domain0.type | string |
| settings.domain0.validator | string |
| settings.domain0.default | string |

</details>

## ehentai — failed

能力检查：15/28；源版本：1.2.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 211 |  |
| source.load | passed |  | 77 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for ehentai; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 0 | Provide credentials.cookieValues |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 1 |  |
| search.loadNext | passed |  | 315 |  |
| search.loadNext.page[2] | passed |  | 168 |  |
| explore[0].loadNext | passed |  | 218 |  |
| explore[0].loadNext.page[2] | passed |  | 255 |  |
| explore[1].loadNext | passed |  | 253 |  |
| explore[2].loadNext | passed |  | 1 |  |
| categoryComics.ranking.load | passed |  | 255 |  |
| categoryComics.ranking.load.page[2] | passed |  | 238 |  |
| favorites.loadFolders | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| favorites.loadNext | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 235 |  |
| comic.loadEp | passed |  | 252 |  |
| comic.loadThumbnails | passed |  | 250 |  |
| comic.loadComments | passed |  | 253 |  |
| comic.archive.getArchives | failed | auth_required | 633 | Cannot read properties of undefined (reading 'match') |
| comic.archive.getDownloadUrl | failed | dns_error | 864 | Network request failed: fetch failed |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 977 |  |
| image.download | passed |  | 517 |  |
| image.decode | passed |  | 68 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 641 |  |
| image.download | passed |  | 323 |  |
| image.decode | passed |  | 36 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 817 |  |
| thumbnail.decode | passed |  | 32 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.starRating | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.getKey | skipped | missing_input | 1 | No automatic adapter; provide cases[path].args and expect |
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

能力检查：12/23；源版本：1.4.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 191 |  |
| source.load | passed |  | 44 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 1017 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 331 |  |
| search.load.page[2] | passed |  | 290 |  |
| explore[0].load | passed |  | 187 |  |
| categoryComics.optionLoader | passed |  | 223 |  |
| categoryComics.load | passed |  | 270 |  |
| categoryComics.ranking.load | passed |  | 262 |  |
| categoryComics.ranking.load.page[2] | passed |  | 242 |  |
| favorites.loadFolders | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 230 |  |
| comic.loadEp | passed |  | 267 |  |
| comic.loadComments | passed |  | 257 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.idMatch | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 314 |  |
| comic.onImageLoad.modifyImage | passed |  | 190 |  |
| image.decode | passed |  | 17 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 73 |  |
| comic.onImageLoad.modifyImage | passed |  | 144 |  |
| image.decode | passed |  | 16 |  |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | passed |  | 36 |  |
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
| settings.exactFavoriteFolders | object |
| settings.exactFavoriteFolders.title | string |
| settings.exactFavoriteFolders.type | string |
| settings.exactFavoriteFolders.default | boolean |
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

能力检查：10/23；源版本：1.3.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 184 |  |
| source.load | passed |  | 67 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithCookies.validate | skipped | credentials_missing | 1 | Provide credentials.cookieValues |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| category | passed |  | 0 |  |
| category.parts[0].loader | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1109 |  |
| search.load.page[2] | passed |  | 632 |  |
| explore[0].load | passed |  | 1292 |  |
| categoryComics.load | skipped | missing_input | 0 | Provide inputs.category and optional categoryParam |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 654 |  |
| comic.loadEp | passed |  | 544 |  |
| comic.loadComments | passed |  | 1725 |  |
| comic.loadChapterComments | passed |  | 662 |  |
| comic.link.linkToId | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 194 |  |
| image.decode | passed |  | 48 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 58 |  |
| image.decode | passed |  | 27 |  |
| thumbnail.download | passed |  | 274 |  |
| thumbnail.decode | passed |  | 5 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
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
| account.loginWithCookies | object |
| account.loginWithCookies.fields | array |
| account.loginWithCookies.fields[0] | string |
| account.loginWithCookies.fields[1] | string |
| account.loginWithCookies.fields[2] | string |
| account.loginWithCookies.fields[3] | string |
| account.loginWithCookies.validate | function |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
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

## shonen_jump_plus — failed

能力检查：6/7；源版本：1.1.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 181 |  |
| source.load | passed |  | 35 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 35 |  |
| configuration.capabilities | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1169 |  |
| search.load.page[2] | passed |  | 1 |  |
| explore[0].load | passed |  | 2790 |  |
| comic.loadInfo | passed |  | 461 |  |
| comic.loadEp | failed | anti_bot | 620 | 章节不可用或需要购买，请在官网确认访问权限 |
| comic.onClickTag | passed |  | 1 |  |
| image.download | skipped | dependency_failed | 0 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 230 |  |
| thumbnail.decode | passed |  | 60 |  |
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
| settings | object |
| settings.contentApi | object |
| settings.contentApi.title | string |
| settings.contentApi.type | string |
| settings.contentApi.default | string |
| settings.contentApi.options | array |
| settings.contentApi.options[0] | object |
| settings.contentApi.options[0].value | string |
| settings.contentApi.options[0].text | string |
| settings.contentApi.options[1] | object |
| settings.contentApi.options[1].value | string |
| settings.contentApi.options[1].text | string |
| settings.allowPurchases | object |
| settings.allowPurchases.title | string |
| settings.allowPurchases.type | string |
| settings.allowPurchases.default | boolean |

</details>

## hitomi — failed

能力检查：11/11；源版本：1.1.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 178 |  |
| source.load | passed |  | 36 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| search.load | failed | http_error | 2548 | Cannot read properties of null (reading 'attributes') |
| explore[0].load | passed |  | 12248 |  |
| explore[0].load.page[2] | passed |  | 6500 |  |
| categoryComics.load | passed |  | 6498 |  |
| categoryComics.load.page[2] | passed |  | 6499 |  |
| categoryComics.ranking.load | passed |  | 6503 |  |
| categoryComics.ranking.load.page[2] | passed |  | 6498 |  |
| comic.loadInfo | passed |  | 1502 |  |
| comic.loadEp | passed |  | 253 |  |
| comic.link.linkToId | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| search.onTagSuggestionSelected | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 530 |  |
| image.decode | passed |  | 175 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 346 |  |
| image.decode | passed |  | 122 |  |
| comic.onThumbnailLoad | passed |  | 1 |  |
| thumbnail.download | passed |  | 217 |  |
| thumbnail.decode | passed |  | 22 |  |

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

## comick — partial

能力检查：8/15；源版本：1.2.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 180 |  |
| source.load | passed |  | 38 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 1 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 826 |  |
| search.load.page[2] | passed |  | 749 |  |
| explore[0].load | passed |  | 198 |  |
| categoryComics.load | passed |  | 1005 |  |
| categoryComics.load.page[2] | passed |  | 956 |  |
| favorites.loadComics | skipped | credentials_missing | 14 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1148 |  |
| comic.loadEp | passed |  | 692 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 817 |  |
| image.decode | passed |  | 57 |  |
| comic.onImageLoad.onLoadFailed | skipped | not_triggered | 0 | Image succeeded; failure recovery was not invoked |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 41 |  |
| image.decode | passed |  | 41 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| comic.onThumbnailLoad.onLoadFailed | skipped | unsupported_thumbnail | 0 | Venera does not apply onLoadFailed to thumbnails |
| thumbnail.download | passed |  | 184 |  |
| thumbnail.decode | passed |  | 7 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
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

## zaimanhua — failed

能力检查：7/13；源版本：1.0.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 184 |  |
| source.load | passed |  | 44 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 27 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 1511 |  |
| search.load.page[2] | passed |  | 297 |  |
| explore[0].load | passed |  | 1091 |  |
| explore[0].load.page[2] | passed |  | 310 |  |
| categoryComics.load | passed |  | 291 |  |
| categoryComics.load.page[2] | passed |  | 892 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 2431 |  |
| comic.loadEp | failed | config_error | 344 | 服务端返回 canRead=false，该章节当前不可阅读 |
| comic.loadComments | passed |  | 293 |  |
| image.download | skipped | dependency_failed | 1 | comic.loadEp produced no images |
| thumbnail.download | passed |  | 808 |  |
| thumbnail.decode | passed |  | 36 |  |
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

## ManHuaGui — partial

能力检查：10/15；源版本：1.2.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 179 |  |
| source.load | passed |  | 70 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 1 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for ManHuaGui; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| search.load | passed |  | 1068 |  |
| search.load.page[2] | passed |  | 634 |  |
| explore[0].load | passed |  | 307 |  |
| categoryComics.load | passed |  | 513 |  |
| categoryComics.load.page[2] | passed |  | 665 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1124 |  |
| comic.loadEp | passed |  | 501 |  |
| comic.loadComments | passed |  | 412 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 213 |  |
| image.decode | passed |  | 73 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 63 |  |
| image.decode | passed |  | 36 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 239 |  |
| thumbnail.decode | passed |  | 2 |  |
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

## manwaba — partial

能力检查：10/17；源版本：1.0.5

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 177 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| search.load | passed |  | 203 |  |
| search.load.page[2] | passed |  | 147 |  |
| explore[0].load | passed |  | 246 |  |
| categoryComics.load | passed |  | 250 |  |
| categoryComics.load.page[2] | passed |  | 482 |  |
| favorites.loadFolders | skipped | credentials_missing | 15 | Favorites require authenticated account data |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 588 |  |
| comic.loadEp | passed |  | 244 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 250 |  |
| comic.onImageLoad.onResponse | passed |  | 14 |  |
| image.decode | passed |  | 56 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 119 |  |
| comic.onImageLoad.onResponse | passed |  | 17 |  |
| image.decode | passed |  | 23 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 428 |  |
| comic.onThumbnailLoad.onResponse | passed |  | 6 |  |
| thumbnail.decode | passed |  | 3 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.deleteFolder | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.singleFolderForSingleComic | boolean |
| favorites.loadFolders | function |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
| favorites.addFolder | function |
| favorites.deleteFolder | function |
| search | object |
| search.load | function |
| comic | object |
| comic.onImageLoad | function |
| comic.onThumbnailLoad | function |
| comic.loadInfo | function |
| comic.loadEp | function |
| comic.onImageLoad.onResponse | function |
| comic.onThumbnailLoad.onResponse | function |

</details>

## lanraragi — skipped

能力检查：0/0；源版本：

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| source | skipped | manual_broken | 0 | 需要本地或自建部署的漫画服务，GitHub 巡检跳过 |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|

</details>

## komga — skipped

能力检查：0/0；源版本：

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| source | skipped | manual_broken | 0 | 需要本地或自建部署的漫画服务，GitHub 巡检跳过 |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|

</details>

## comic_walker — passed

能力检查：8/8；源版本：1.0.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 179 |  |
| source.load | passed |  | 35 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 29 |  |
| configuration.capabilities | passed |  | 1 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 490 |  |
| search.load.page[2] | passed |  | 338 |  |
| explore[0].load | passed |  | 999 |  |
| comic.loadInfo | passed |  | 271 |  |
| comic.loadEp | passed |  | 226 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 1196 |  |
| comic.onImageLoad.onResponse | passed |  | 3 |  |
| image.decode | passed |  | 99 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 950 |  |
| comic.onImageLoad.onResponse | passed |  | 3 |  |
| image.decode | passed |  | 49 |  |
| thumbnail.download | passed |  | 510 |  |
| thumbnail.decode | passed |  | 18 |  |

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
| settings | object |
| settings.contentApi | object |
| settings.contentApi.title | string |
| settings.contentApi.type | string |
| settings.contentApi.default | string |
| settings.contentApi.options | array |
| settings.contentApi.options[0] | object |
| settings.contentApi.options[0].value | string |
| settings.contentApi.options[0].text | string |
| settings.contentApi.options[1] | object |
| settings.contentApi.options[1].value | string |
| settings.contentApi.options[1].text | string |
| comic.onImageLoad.onResponse | function |

</details>

## ccc — partial

能力检查：9/18；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 175 |  |
| source.load | passed |  | 40 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for ccc; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 1 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| search.load | passed |  | 536 |  |
| explore[0].load | passed |  | 1638 |  |
| categoryComics.load | passed |  | 352 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 785 |  |
| comic.loadEp | passed |  | 285 |  |
| comic.loadComments | passed |  | 241 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 243 |  |
| image.download | passed |  | 1552 |  |
| comic.onImageLoad.onResponse | passed |  | 18 |  |
| image.decode | passed |  | 46 |  |
| comic.onImageLoad | passed |  | 227 |  |
| image.download | passed |  | 1369 |  |
| comic.onImageLoad.onResponse | passed |  | 40 |  |
| image.decode | passed |  | 25 |  |
| thumbnail.download | passed |  | 505 |  |
| thumbnail.decode | passed |  | 25 |  |
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

能力检查：3/11；源版本：1.3.3

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 182 |  |
| source.load | passed |  | 35 |  |
| configuration.apply | passed |  | 0 |  |
| authentication | skipped | credentials_missing | 1 | No PATROL_AUTH entry for goda; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | anti_bot | 160 | Invalid status code: 403 |
| explore[0].load | failed | anti_bot | 176 | Cannot read properties of null (reading 'querySelectorAll') |
| categoryComics.load | failed | anti_bot | 229 | Invalid status code: 403 |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| comic.loadEp | skipped | missing_input | 0 | Provide inputs.comicId or a successful comic list |
| image.download | skipped | dependency_failed | 1 | comic.loadEp produced no images |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| comic.onThumbnailLoad | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| account | object |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
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
| runtime.load | passed |  | 175 |  |
| source.load | passed |  | 33 |  |
| configuration.apply | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | failed | anti_bot | 132 | Invalid status code: 403 |
| explore[0].load | failed | anti_bot | 221 | Cannot read properties of null (reading 'querySelectorAll') |
| categoryComics.load | failed | anti_bot | 227 | Invalid status code: 403 |
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

能力检查：8/15；源版本：1.1.2

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 182 |  |
| source.load | passed |  | 42 |  |
| configuration.apply | passed |  | 1 |  |
| authentication | skipped | credentials_missing | 0 | No PATROL_AUTH entry for mxs; public capabilities will still be checked |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 0 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 859 |  |
| explore[0].load | passed |  | 860 |  |
| categoryComics.optionLoader | passed |  | 1 |  |
| categoryComics.load | passed |  | 588 |  |
| categoryComics.load.page[2] | passed |  | 587 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 680 |  |
| comic.loadEp | passed |  | 575 |  |
| comic.loadComments | passed |  | 672 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 764 |  |
| image.decode | passed |  | 44 |  |
| image.download | passed |  | 841 |  |
| image.decode | passed |  | 10 |  |
| thumbnail.download | passed |  | 303 |  |
| thumbnail.decode | passed |  | 2 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| settings.domainCheck.callback | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
| favorites.singleFolderForSingleComic | boolean |
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

## manhuaren — partial

能力检查：9/13；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 178 |  |
| source.load | passed |  | 62 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 1 |  |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| category | passed |  | 0 |  |
| search.load | passed |  | 914 |  |
| search.load.page[2] | passed |  | 161 |  |
| explore[0].load | passed |  | 664 |  |
| categoryComics.load | passed |  | 112 |  |
| categoryComics.load.page[2] | passed |  | 246 |  |
| favorites.loadComics | skipped | credentials_missing | 14 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 235 |  |
| comic.loadEp | passed |  | 241 |  |
| comic.loadComments | passed |  | 241 |  |
| comic.loadChapterComments | passed |  | 235 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 788 |  |
| image.decode | passed |  | 36 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 132 |  |
| image.decode | passed |  | 6 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 746 |  |
| thumbnail.decode | passed |  | 2 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
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

## hcomic — partial

能力检查：7/18；源版本：1.4.0

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 190 |  |
| source.load | passed |  | 46 |  |
| configuration.apply | passed |  | 1 |  |
| init | passed |  | 30 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| account.loginWithCookies.validate | skipped | credentials_missing | 0 | Provide credentials.cookieValues |
| account.loginWithWebview.checkStatus | skipped | interactive_required | 0 | Provide observed browser URL/title and exported cookies or token |
| account.loginWithWebview.onLoginSuccess | skipped | dependency_failed | 1 | Webview checkStatus did not pass |
| category | passed |  | 0 |  |
| search.load | passed |  | 1205 |  |
| search.load.page[2] | passed |  | 1131 |  |
| explore[0].load | passed |  | 688 |  |
| categoryComics.load | passed |  | 463 |  |
| categoryComics.load.page[2] | passed |  | 474 |  |
| favorites.loadComics | skipped | credentials_missing | 0 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 233 |  |
| comic.loadEp | passed |  | 1 |  |
| comic.link.linkToId | skipped | missing_input | 0 | Provide inputs.comicUrl |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 136 |  |
| image.decode | passed |  | 71 |  |
| image.download | passed |  | 123 |  |
| image.decode | passed |  | 44 |  |
| thumbnail.download | passed |  | 209 |  |
| thumbnail.decode | passed |  | 47 |  |
| account.onLoginCancel | skipped | mutation_disabled | 1 | Requires allowMutations:true and an explicit case |
| account.loginWithWebview.onAuthCode | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| account.loginWithWebview.onAuthCancel | skipped | missing_input | 0 | No automatic adapter; provide cases[path].args and expect |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.storeCredentials | boolean |
| account.loginWithCookies | object |
| account.loginWithCookies.validate | function |
| account.onLoginCancel | function |
| account.loginWithWebview | object |
| account.loginWithWebview.url | string |
| account.loginWithWebview.oauth | object |
| account.loginWithWebview.oauth.authorizationEndpoint | string |
| account.loginWithWebview.oauth.clientId | string |
| account.loginWithWebview.oauth.redirectUri | string |
| account.loginWithWebview.oauth.scope | string |
| account.loginWithWebview.oauth.parameters | object |
| account.loginWithWebview.oauth.parameters.audience | string |
| account.loginWithWebview.onAuthCode | function |
| account.loginWithWebview.onAuthCancel | function |
| account.loginWithWebview.checkStatus | function |
| account.loginWithWebview.onLoginSuccess | function |
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
| favorites | object |
| favorites.multiFolder | boolean |
| favorites.loadComics | function |
| favorites.addOrDelFavorite | function |
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

能力检查：9/9；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 177 |  |
| source.load | passed |  | 37 |  |
| configuration.apply | passed |  | 0 |  |
| configuration.capabilities | passed |  | 0 |  |
| category | passed |  | 1 |  |
| search.load | passed |  | 787 |  |
| search.load.page[2] | passed |  | 742 |  |
| explore[0].load | passed |  | 337 |  |
| explore[0].load.page[2] | passed |  | 306 |  |
| categoryComics.load | passed |  | 338 |  |
| categoryComics.load.page[2] | passed |  | 291 |  |
| comic.loadInfo | passed |  | 273 |  |
| comic.loadEp | passed |  | 961 |  |
| comic.link.linkToId | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 1 |  |
| image.download | passed |  | 218 |  |
| image.decode | passed |  | 45 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 163 |  |
| image.decode | passed |  | 10 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 289 |  |
| thumbnail.decode | passed |  | 11 |  |

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

能力检查：7/11；源版本：1.0.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 180 |  |
| source.load | passed |  | 69 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 1 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 0 | Provide credentials.username and password |
| category | passed |  | 0 |  |
| settings | passed |  | 0 |  |
| search.load | passed |  | 921 |  |
| search.load.page[2] | passed |  | 287 |  |
| explore[0].load | passed |  | 272 |  |
| categoryComics.load | passed |  | 271 |  |
| categoryComics.load.page[2] | passed |  | 277 |  |
| favorites.loadComics | skipped | credentials_missing | 1 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 1331 |  |
| comic.loadEp | passed |  | 278 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| image.download | passed |  | 187 |  |
| image.decode | passed |  | 89 |  |
| image.download | passed |  | 127 |  |
| image.decode | passed |  | 42 |  |
| thumbnail.download | passed |  | 133 |  |
| thumbnail.decode | passed |  | 3 |  |
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

## kavita — skipped

能力检查：0/0；源版本：

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| source | skipped | manual_broken | 0 | 需要本地或自建部署的漫画服务，GitHub 巡检跳过 |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|

</details>

## mycomic — failed

能力检查：12/18；源版本：1.1.1

| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |
|---|---|---|---:|---|
| runtime.load | passed |  | 181 |  |
| source.load | passed |  | 38 |  |
| configuration.apply | passed |  | 0 |  |
| init | passed |  | 11 |  |
| configuration.capabilities | passed |  | 0 |  |
| account.login | skipped | credentials_missing | 1 | Provide credentials.username and password |
| account.loginWithCookies.validate | skipped | credentials_missing | 0 | Provide credentials.cookieValues |
| category | passed |  | 0 |  |
| search.load | skipped | missing_input | 0 | Provide inputs.keyword |
| explore[0].load | passed |  | 283 |  |
| explore[0].load.page[2] | passed |  | 178 |  |
| explore[1].load | passed |  | 236 |  |
| explore[1].load.page[2] | passed |  | 310 |  |
| explore[2].load | passed |  | 184 |  |
| explore[2].load.page[2] | passed |  | 235 |  |
| categoryComics.load | passed |  | 361 |  |
| categoryComics.load.page[2] | passed |  | 266 |  |
| categoryComics.ranking.load | failed | contract_violation | 186 | Comic list is empty; provide a representative keyword or case |
| favorites.loadComics | skipped | credentials_missing | 14 | Favorites require authenticated account data |
| comic.loadInfo | passed |  | 217 |  |
| comic.loadEp | passed |  | 210 |  |
| comic.link.linkToId | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 1 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onClickTag | passed |  | 0 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 230 |  |
| image.decode | passed |  | 48 |  |
| comic.onImageLoad | passed |  | 0 |  |
| image.download | passed |  | 128 |  |
| image.decode | passed |  | 20 |  |
| comic.onThumbnailLoad | passed |  | 0 |  |
| thumbnail.download | passed |  | 221 |  |
| thumbnail.decode | passed |  | 2 |  |
| account.logout | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |
| favorites.addOrDelFavorite | skipped | mutation_disabled | 0 | Requires allowMutations:true and an explicit case |

<details><summary>完整能力清单（包括子级和声明字段）</summary>

| 路径 | 类型 |
|---|---|
| init | function |
| account | object |
| account.login | function |
| account.loginWithCookies | object |
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
