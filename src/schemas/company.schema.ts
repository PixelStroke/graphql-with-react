import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import httpService from '../services/http.service';
import UserType from './user.schema';
import ProductType from './product.schema';

const CompanyType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: async (parentValue) => {
        const res = await httpService.get(`/companies/${parentValue.id}/users`);
        return res.data;
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: async (parentValue) => {
        const res = await httpService.get(
          `/companies/${parentValue.id}/products`
        );
        return res.data;
      },
    },
  }),
});

export default CompanyType;
