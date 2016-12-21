var express = require('express')
var router = express.Router()
var api = require('./api-handler')

router.get('/giantbomb/search/:game', function(req, res) {
  var game = req.params.game
  // var name = '"' + game + '"' // might need this for multi-word names
  console.log('routed correctly, making request for', game)
  api.searchGiantBomb({query: game, resources: 'game'})
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config);
    })
})
module.exports = router;
