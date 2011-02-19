define('app',['flock','bird','models/player'],function(Flock,Bird,Player) {
  var App = Backbone.Controller.extend({
    routes: {
      '': 'main'
    },
    main: function() {
      alert('on main')
      var flock = new Backbone.Collection()
      ['Blah Mah','Blah Mah','Blah Mah'].forEach(function(name) {
        flock.add(new Player({
          name: name
        }))
      })
    }
  })
  return App
})
