define('bird',[],function() {
  var Bird = Backbone.View.extend({
    events: {
    },
    template: _.template('<span class="name"><%= name %></span><img class="photo" src="<%= photo %>"></img>'),
    render: function() {
      $(this.el).html(this.template(this.model.attributes))
      return this
    },
    tagName: 'div',
    className: 'bird',
    initialize: function() {
    }
  })
  return Bird
})
