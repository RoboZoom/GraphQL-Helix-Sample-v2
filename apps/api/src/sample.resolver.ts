import { Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
export class SampleItem {
  @Field(() => String)
  id: string;
  @Field(() => String)
  value: string;
}

@Resolver(() => SampleItem)
export class SampleItemResolver {
  constructor() {
  }

  @Query(() => [SampleItem])
  async getItems(): Promise<SampleItem[] | undefined> {
    return [{
      id: 'abc',
      value: '123'
    },
      {
        id: '432a',
        value: 'Some Value'
      }];
  }
}
