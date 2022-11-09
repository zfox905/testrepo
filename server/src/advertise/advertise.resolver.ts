import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AdvertiseResolverBase } from "./base/advertise.resolver.base";
import { Advertise } from "./base/Advertise";
import { AdvertiseService } from "./advertise.service";

@graphql.Resolver(() => Advertise)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AdvertiseResolver extends AdvertiseResolverBase {
  constructor(
    protected readonly service: AdvertiseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
