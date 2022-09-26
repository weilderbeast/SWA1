type Base = {
  time: string;
  place: string;
  value: number;
  unit: string;
};

export type Temperature = {
  type: "temperature";
} & Base;

export type Precipitation = {
  type: "precipitation";
  precipitation_type: string;
} & Base;

export type WindSpeed = {
  type: "wind speed";
  direction: string;
} & Base;

export type CloudCoverage = {
  type: "cloud coverage";
} & Base;

export type DataGroup = {
  temperature: Temperature;
  precipitation: Precipitation;
  wind: WindSpeed;
  cloud: CloudCoverage;
};
