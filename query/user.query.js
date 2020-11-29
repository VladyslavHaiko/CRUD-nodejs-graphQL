const {GraphQLID, GraphQLList} = require("graphql");
const {UserModel} = require('../models');
const {UserType} = require("../types");

module.exports = {

    getUserById: {
        type: UserType,
        args: {id: {type: GraphQLID}},
        resolve:(parent, args) => UserModel.findOne({_id: args.id})
    },

    getAllUser: {
        type: GraphQLList(UserType),
        resolve: () => UserModel.find({})
    }
}
