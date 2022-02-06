# GraphQL Node JS Sample Implementation

This is a trivial implementation of NodeJS/Express Server to demo GraphQL in a Node environment, and to setup a simple programming task.

## Project Setup

In the project directory, run:

`npm install`

`npx nx serve api`

## Task 

Implement the following query and mutations through the graphQL end point:
- `getFooByID(id: String): Foo`
- `createFoo(fooInput: FooInput)`  - You will need to define `FooInput`
- `createBar(barInput: BarInput)`  - You will need to define `BarInput`

Where:
```typescript
type Foo = {
   id: string;
   name: string;
   bars: Bar[]
} 

type Bar = {
   id: string;
   name: string;
   description: string;
}
```

Simulate the DB backend with a local array.  The server should be able to generate a schema for the end point, 
and appropriately handle normal cases for these mutations.

Solution should be built in the `graphql` directory.  The directory should have a minimum of the following files:
- `schema.graphql` - GraphQL Schema File for type definitions
- `foo.resolver.ts` - Typescript Resolver definitions
- `mock-db-service.ts` - Simple Typescript class mocking database calls and maintaining state (via simple array)

Resources:
- https://www.graphql-tools.com/docs/introduction - use this library to build the schema/resolvers
- https://graphql.org/
- https://nx.dev/getting-started/intro - This sample uses NX to organize the application.  If you want better knowledge of how interact with the tooling, this resource should get you started
