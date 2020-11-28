const {UserModel} = require("../models/user.model");
const {
    GraphQLObjectType, GraphQLSchema,
    GraphQLString, GraphQLID,
    GraphQLList, GraphQLNonNull
} = require(`graphql`)


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
    })
});

const Query = new GraphQLObjectType({
    name: `Query`,
    fields: {
        getUserById: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return UserModel.findOne({_id: args.id});
            }
        },
        getAllUser: {
            type: GraphQLList(UserType),
            resolve: (parent, args) => {
                return UserModel.find({});
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLNonNull(GraphQLString)},
                password: {type: GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                const newUser = new UserModel({
                    name: args.name,
                    age: args.age,
                    email: args.email,
                    password: args.password,
                })
                return newUser.save();
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID}
            },
            async resolve(parent, args) {
                return UserModel.deleteOne({_id: args.id});
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                email: {type: GraphQLString},
                age: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                console.log(args);
                return UserModel.update({_id: args.id}, args);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})
