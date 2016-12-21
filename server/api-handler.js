require('dotenv').config()
var uri = require('urijs')
var axios = require('axios')

// static giantbomb API info
// response will be in the form of response.data Object with results array
  // e.g. response.data.results
var giantBomb = {
  apiKey: process.env.GIANT_BOMB,
  protocol: "http",
  hostname: "www.giantbomb.com",
  searchPath: "/api/search/",
  gamePath: "/api/game/"
}

module.exports = {

  // params: Object with properties:
    // field_list: list of field names to include in response, delimited with ","
    // query: text string to query, wrapped in double quotes
    // resources: type of media to search
  searchGiantBomb(params) {
    // api_key first, then format: json, then query params
    var query = uri.buildQuery(Object.assign({
      api_key: giantBomb.apiKey,
      format: 'json'
    }, params))
    var apiQuery = uri.build({
      protocol: giantBomb.protocol,
      hostname: giantBomb.hostname,
      path: giantBomb.searchPath,
      query: query
    })

    console.log('making api query', apiQuery)

    return axios.get(apiQuery)
  },
  /* params: object with properties:
      title: title of game,
      ...
  */
  getGameFromGiantBomb(params) {

  }
}
// example
// module.exports.searchGiantBomb({query: '"metroid prime"', resources: 'game'})
