import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} from "graphql";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.API_BASE_URL || "http://localhost:4040/";
const accessToken = `Bearer ${process.env.ACCESS_TOKEN}`;

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common.Authorization = accessToken;

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
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    gender: {
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
        return axios.get(`/users/${args.id}`).then((res) => res.data);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
