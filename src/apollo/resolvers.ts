import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA } from "../data/resume-data-arun";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return RESUME_DATA as any;
  }
}
