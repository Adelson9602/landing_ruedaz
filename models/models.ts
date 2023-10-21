export interface ResponseServer<T> {
  statusCode: number;
  body: Body<T>;
}

export interface Body<T> {
  message: string;
  data: T;
}

export interface Plan {
  PLAN_TRIALTIMEDAY: number;
  PLAN_FREQUENCY: string;
  PLAN_TIMEMINUTESFREE: number;
  PLAN_DISCOUNT: number;
  PLAN_ISACTIVE: boolean;
  PLAN_TRIALDAYS: number;
  PLAN_TIMEHOURSFREE: number;
  PLAN_PRICE: number;
  PLAN_NAME: string;
  PLAN_DESCRIPTION: string;
  PLAN_ISGLOBAL: boolean;
  SK: string;
  PK: string;
  PLAN_HASINSURANCE: boolean;
  PLAN_APPLYDISCOUNT: boolean;
  PLAN_VEHICLETYPEALLOWED: string[];
}
