const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        _id: {type: GraphQLID},
        date: {type: GraphQLString},
        text: {type: GraphQLNonNull(GraphQLString)},
        user_id: {type: GraphQLNonNull(GraphQLString)},
    })
});
