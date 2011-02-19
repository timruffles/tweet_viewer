define('flock',['bird'],function(Bird) {
  var Flock = Backbone.View.extend({
    events: {
    },
    initialize: function() {
    },
    render: function() {
      this.collection.forEach(function(player) {
        console.log('birdy!')
        var bird = new Bird({
          model: player
        })
        this.birds.push(bird)
        $(this.el).append(bird.render().el)
      },this)
      return this
    },
    tagName: 'div',
    className: 'flock',
    birds: []
  })
  return Flock
})