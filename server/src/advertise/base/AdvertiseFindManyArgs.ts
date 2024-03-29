/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvertiseWhereInput } from "./AdvertiseWhereInput";
import { Type } from "class-transformer";
import { AdvertiseOrderByInput } from "./AdvertiseOrderByInput";

@ArgsType()
class AdvertiseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdvertiseWhereInput,
  })
  @Field(() => AdvertiseWhereInput, { nullable: true })
  @Type(() => AdvertiseWhereInput)
  where?: AdvertiseWhereInput;

  @ApiProperty({
    required: false,
    type: [AdvertiseOrderByInput],
  })
  @Field(() => [AdvertiseOrderByInput], { nullable: true })
  @Type(() => AdvertiseOrderByInput)
  orderBy?: Array<AdvertiseOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdvertiseFindManyArgs };
