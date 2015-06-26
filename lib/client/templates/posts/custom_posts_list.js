Template.posts_list.events({
  'click .post a': function(e) {
    // keeps links from triggering .post handler below
    e.stopPropagation();
  },
  'click .post': function(e) {
    // click anywhere on a post to view it
    var post = this;
    Router.go("/posts/"+post._id);
  }
});