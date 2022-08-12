import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import httpService from '../services/http.service';
import CompanyType from './user.schema';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    inStock: { type: GraphQLBoolean },
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

export default ProductType;
