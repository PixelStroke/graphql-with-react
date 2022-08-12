import { graphqlHTTP } from "express-graphql";
import userSchema from "../models/user.schema";

export default graphqlHTTP({
  schema: userSchema,
  graphiql: true,
});
