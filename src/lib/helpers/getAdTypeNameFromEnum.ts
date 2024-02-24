import { adTypes } from "../constants/constants";

export default function getAdTypeNameFromEnum(adType: number) {
  return adTypes.find((el) => el.id === adType)?.name;
}
