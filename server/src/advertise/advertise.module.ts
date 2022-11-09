import { Module } from "@nestjs/common";
import { AdvertiseModuleBase } from "./base/advertise.module.base";
import { AdvertiseService } from "./advertise.service";
import { AdvertiseController } from "./advertise.controller";
import { AdvertiseResolver } from "./advertise.resolver";

@Module({
  imports: [AdvertiseModuleBase],
  controllers: [AdvertiseController],
  providers: [AdvertiseService, AdvertiseResolver],
  exports: [AdvertiseService],
})
export class AdvertiseModule {}
