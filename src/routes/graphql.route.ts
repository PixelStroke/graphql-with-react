import { graphqlHTTP } from 'express-graphql';
import schema from '../schemas/index';

export default graphqlHTTP({
  schema,
  graphiql: true,
});
