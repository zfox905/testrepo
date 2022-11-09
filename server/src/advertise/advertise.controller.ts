import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdvertiseService } from "./advertise.service";
import { AdvertiseControllerBase } from "./base/advertise.controller.base";

@swagger.ApiTags("advertises")
@common.Controller("advertises")
export class AdvertiseController extends AdvertiseControllerBase {
  constructor(
    protected readonly service: AdvertiseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
