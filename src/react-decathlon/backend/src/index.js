const { MeiliSearch } = require('meilisearch')

;(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    }

    const meili = new MeiliSearch(config)

    await meili.isHealthy()
    const indexCreation = await meili.createIndex('decathlon')

    meili.waitForTask(indexCreation.taskUid)

    const decathlon = require('../decathlon.json')
    const index = await meili.index('decathlon')

    const newSettings = {
      rankingRules: [
        'words',
        'typo',
        'proximity',
        'attribute',
        'sort',
        'exactness',
        'desc(creation_date)'
      ]
    }

    await index.updateSettings(newSettings)
    console.dir(await index.getSettings())

    await index.addDocuments(decathlon)
  } catch (e) {
    console.error(e)
    console.log('Meili error: ', e.message)
  }
})()
