import { NextFunction, Request, Router } from 'express';

import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL } from 'graphql-helix';

import { SampleItemResolver } from "../sample.resolver";
import { makeExecutableSchema } from "@graphql-tools/schema";

class MasterRouter {
  private _router = Router();


  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private async _configure() {

    const typeDefs = /*GraphQL */ `
      type Trivial {
        id: String
      }

      type Query {
        getTrivialById(id: String): Trivial
      }
    `
    const resolvers = {
      Query: {
        getTrivialById: (id: string) => ({id: id})
      }
    }
    const schema = makeExecutableSchema({
                                          typeDefs,
                                          resolvers
                                        });  // Schema Build Logic here

    console.log(`Configuring Master Router`);
    this._router.all('/', async (req: Request, res: Response, next: NextFunction) => {
      console.log('Tick');
      const request = {
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query
      };
      const {query, variables, operationName} = getGraphQLParameters(request);
      const result = await processRequest({
                                            operationName,
                                            query,
                                            request,
                                            schema,
                                            variables
                                          });
    });
  }
}


export = new MasterRouter().router;
