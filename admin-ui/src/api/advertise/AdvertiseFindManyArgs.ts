import { AdvertiseWhereInput } from "./AdvertiseWhereInput";
import { AdvertiseOrderByInput } from "./AdvertiseOrderByInput";

export type AdvertiseFindManyArgs = {
  where?: AdvertiseWhereInput;
  orderBy?: Array<AdvertiseOrderByInput>;
  skip?: number;
  take?: number;
};
