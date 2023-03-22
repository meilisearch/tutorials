const { MeiliSearch } = require('meilisearch')

;(async () => {
  try {
    const config = {
      host: 'http://localhost:7700'
    }

    const meili = new MeiliSearch(config)

    const index = meili.index('decathlon')

    index.delete()
  } catch (e) {
    console.error(e)
    console.log('Meili error: ', e.message)
  }
})()
