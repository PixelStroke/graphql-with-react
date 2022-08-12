import { GraphQLInt, GraphQLObjectType, GraphQLSchema } from 'graphql';
import httpService from '../services/http.service';
import UserType from './user.schema';
import ProductType from './product.schema';
import CompanyType from './company.schema';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: async (parentValue, args) => {
        const res = await httpService.get(`/users/${args.id}`);
        return res.data;
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLInt } },
      resolve: async (parentValue, args) => {
        const res = await httpService.get(`/companies/${args.id}`);
        return res.data;
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLInt } },
      resolve: async (parentValue, args) => {
        const res = await httpService.get(`/products/${args.id}`);
        return res.data;
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
