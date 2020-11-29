const {GraphQLNonNull, GraphQLString} = require("graphql");
const {PostType} = require("../types");
const {PostsModel} = require('../models');

module.exports ={
    addPost: {
        type: PostType,
        args: {
            date: {type: GraphQLString},
            text: {type: GraphQLNonNull(GraphQLString)},
            user_id: {type: GraphQLNonNull(GraphQLString)},
        },
        resolve:(parent, args) => new PostsModel(args).save()
    },
}
