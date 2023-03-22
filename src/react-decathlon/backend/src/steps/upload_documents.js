const { MeiliSearch } = require('meilisearch')

;(async () => {
  try {
    const config = {
      host: 'http://localhost:7700'
    }

    const meili = new MeiliSearch(config)

    const decathlon = require('../decathlon.json')

    const index = meili.index('decathlon')

    await index.addDocuments(decathlon)
  } catch (e) {
    console.error(e)
    console.log('Meili error: ', e.message)
  }
})()
