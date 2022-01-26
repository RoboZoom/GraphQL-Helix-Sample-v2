import { NextFunction, Request, Router } from 'express';

import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL } from 'graphql-helix/dist';
import { buildSchema } from 'type-graphql';
import { SampleItemResolver } from "../sample.resolver";

class MasterRouter {
  private _router = Router();


  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private async _configure() {

    const schema = await buildSchema({
                                       resolvers: [SampleItemResolver]
                                     });

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
