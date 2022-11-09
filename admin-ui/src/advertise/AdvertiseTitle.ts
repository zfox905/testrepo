import { Advertise as TAdvertise } from "../api/advertise/Advertise";

export const ADVERTISE_TITLE_FIELD = "sadrzaj";

export const AdvertiseTitle = (record: TAdvertise): string => {
  return record.sadrzaj || record.id;
};
