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

#### Mutations to get started

Add a new user:
```graphql
fragment minimalUser on User {
  id
  username
  isActive
}

mutation {
  addUser(
    firstName: "Shon",
    lastName: "Thomas",
  	age: 33,
  	email: "shon@mail.io",
    username: "shon.thomas",
    password: "login123",
    gender: "Male"
  ) {
    ...minimalUser
  }
}
```

Update a user
```graphql
mutation {
  updateUser(id: 303, isActive: true) {
    ...minimalUser
  }
}
```

Delete a user
```graphql
mutation {
  deleteUser(id: 302) {
    ...minimalUser
  }
}
```
