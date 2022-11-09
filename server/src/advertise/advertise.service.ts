import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AdvertiseServiceBase } from "./base/advertise.service.base";

@Injectable()
export class AdvertiseService extends AdvertiseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
