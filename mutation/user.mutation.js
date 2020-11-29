const {GraphQLID, GraphQLNonNull, GraphQLString} = require("graphql");
const {UsersModel} = require('../models');
const {UserType} = require("../types");


module.exports = {
    addUser: {
        type: UserType,
        args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            email: {type: GraphQLNonNull(GraphQLString)},
            age: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)},
        },
        resolve: (parent, args) => new UsersModel(args).save()
    },

    deleteUser: {
        type: UserType,
        args: {id: {type: GraphQLID}},
        resolve: (parent, args) => UsersModel.deleteOne({_id: args.id})
    },

    updateUserWithParams: {
        type: UserType,
        args: {
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            email: {type: GraphQLString},
            age: {type: GraphQLString},
            password: {type: GraphQLString},
        },
        resolve: (parent, args) => UsersModel.update({_id: args.id}, args)
    }
}
