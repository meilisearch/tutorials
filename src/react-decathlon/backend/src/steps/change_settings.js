const { MeiliSearch } = require('meilisearch')

;(async () => {
  try {
    const config = {
      host: 'http://localhost:7700'
    }

    const meili = new MeiliSearch(config)

    const index = meili.index('decathlon')

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
  } catch (e) {
    console.error(e)
    console.log('Meili error: ', e.message)
  }
})()
