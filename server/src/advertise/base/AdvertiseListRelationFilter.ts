/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvertiseWhereInput } from "./AdvertiseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdvertiseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdvertiseWhereInput,
  })
  @ValidateNested()
  @Type(() => AdvertiseWhereInput)
  @IsOptional()
  @Field(() => AdvertiseWhereInput, {
    nullable: true,
  })
  every?: AdvertiseWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdvertiseWhereInput,
  })
  @ValidateNested()
  @Type(() => AdvertiseWhereInput)
  @IsOptional()
  @Field(() => AdvertiseWhereInput, {
    nullable: true,
  })
  some?: AdvertiseWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdvertiseWhereInput,
  })
  @ValidateNested()
  @Type(() => AdvertiseWhereInput)
  @IsOptional()
  @Field(() => AdvertiseWhereInput, {
    nullable: true,
  })
  none?: AdvertiseWhereInput;
}
export { AdvertiseListRelationFilter };
