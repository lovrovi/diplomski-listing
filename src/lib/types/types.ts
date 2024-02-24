import { AdTypeEnum } from "../enums/enums";

type AdTypeData = {
  id: AdTypeEnum;
  name: string;
};

type Advertisement = {
  id: string;
  title: string;
  content: string;
  views: number;
  createdAt: Date;
  adType: AdTypeEnum;
  createdBy: string;
};

export type { AdTypeData, Advertisement };
