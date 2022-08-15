import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import httpService from '../services/http.service';
import UserType from '../schemas/user.schema';

type UserResult = {
  status: string;
  data: {
    id?: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    email?: string;
    username?: string;
    password?: string;
    gender?: string;
    jobPosition?: string;
    companyId?: number;
    isActive?: boolean;
  };
};

export default new GraphQLObjectType({
  name: 'UserMutation',
  fields: () => ({
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (_parentValue, id) => {
        const res: UserResult = await httpService.delete(`/users/${id}`);
        return res.data;
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        gender: { type: GraphQLString },
        jobPosition: { type: GraphQLString },
        companyId: { type: GraphQLInt },
        isActive: { type: GraphQLBoolean },
      },
      resolve: async (_parentValue, args) => {
        const res: UserResult = await httpService.patch(
          `/users/${args.id}`,
          args
        );
        return res.data;
      },
    },
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: new GraphQLNonNull(GraphQLString) },
        jobPosition: { type: GraphQLString },
        companyId: { type: GraphQLInt },
      },
      resolve: async (
        _parentValue,
        {
          firstName,
          lastName,
          age,
          email,
          username,
          password,
          gender,
          jobPosition,
          companyId,
        }
      ) => {
        const now = Date.now();
        const createdOn = new Date(now).toISOString();
        const isActive = true;

        const res: UserResult = await httpService.post('/users', {
          firstName,
          lastName,
          email,
          username,
          age,
          password,
          gender,
          createdOn,
          isActive,
          jobPosition,
          companyId,
        });

        return res.data;
      },
    },
  }),
});
