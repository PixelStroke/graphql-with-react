import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} from "graphql";
import find from "lodash/find";

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    age: 30,
    email: "jsmith@mail.io",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 31,
    email: "jdoe@mail.io",
  },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    email: {
      type: GraphQLString,
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return find(users, { id: args.id });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
