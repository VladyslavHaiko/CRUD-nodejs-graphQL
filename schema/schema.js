const {GraphQLObjectType, GraphQLSchema} = require("graphql");
const {UserMutations, PostMutations} = require("../mutation");
const {userQuery} = require('../query');


const Query = new GraphQLObjectType({
    name: `Query`,
    fields: {
        getUserList: userQuery.getAllUser,
        getUserById: userQuery.getUserById,
    }
})


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: UserMutations.addUser,
        deleteUser: UserMutations.deleteUser,
        updateUser: UserMutations.updateUserWithParams,

        createPost: PostMutations.addPost,
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})
