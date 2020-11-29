const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
    })
});
