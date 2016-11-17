var express = require('express')
var router = express.Router()
var api = require('./api-handler')

router.get('giantbomb/search/:game', function(req, res) {
  api.searchGiantBomb({query: `"{$game}"`, resources: 'game'}).then((response) => res.send(response))
})

module.exports = router;
