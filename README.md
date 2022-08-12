# GraphQL with React

## Explorer the GraphQL API
@ `localhost:4020/graphql`

#### Getting Started
Install dependencies with `yarn`

Run the setup script with `yarn setup`

Run the server in development mode with `yarn dev`
OR
Run the server in production with `yarn start`

#### Queries to get started:

Query for 2 companies by their id:
```graphql
{
  c1: company(id: 1) {
    ...companyFields
  }

  c2: company(id: 2) {
    ...companyFields
  }
}

fragment companyFields on Company {
    id
    name
    description
}
```
