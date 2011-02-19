define('app',['flock','bird','models/player'],function(Flock,Bird,Player) {
  var App = Backbone.Controller.extend({
    routes: {
      '': 'main'
    },
    initialize: function() {
    },
    main: function() {
      var flock = new Backbone.Collection();
      ['Blah Mah','Blah Mah','Blah Mah'].forEach(function(name) {
        flock.add(new Player({
          name: name,
          photo: 'images/example.jpg'
        }))
      })
      var flockView = new Flock({
        collection: flock
      }).render()
      $('body').append(flockView.el)
    }
  })
  return App
})
