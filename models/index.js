// import all models
const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote")

/* create the associations */

// user can have posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// post can only belong to one user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// allowing both the User and Post models to query each other's info in the context of a vote
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});



module.exports = { User, Post, Vote };
