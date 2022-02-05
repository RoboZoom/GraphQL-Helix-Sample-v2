

# GraphQL Node JS Sample Implementation

This is a trivial implementation of NodeJS/Express Server to demo GraphQL in a Node environment, and to setup a simple programming task.

## Project Setup

In the project directory, run:

`npm install`

`npx nx serve api`

Task: Implement the following query and mutations through the graphQL end point:
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

Resources:
- https://www.graphql-tools.com/docs/introduction - use this library to build the schema/resolvers
- https://graphql.org/
