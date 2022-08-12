import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import httpService from '../services/http.service';
import CompanyType from './company.schema';

const UserType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    jobPosition: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve: async (parentValue) => {
        const res = await httpService.get(
          `/companies/${parentValue.companyId}`
        );
        return res.data;
      },
    },
  }),
});

export default UserType;
