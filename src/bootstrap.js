/* global app, $on */
(function(window) {
  'use strict'
  log('haiii')
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
