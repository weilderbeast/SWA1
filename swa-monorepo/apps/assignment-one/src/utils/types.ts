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

export type Composite = Temperature | Precipitation | WindSpeed | CloudCoverage;

export type FormattedData = {
  place: string;
  time: string;
  data: {
    temperature: {
      value: number;
      unit: string;
    };
    precipitation: {
      value: number;
      unit: string;
      type: string;
    };
    wind: {
      value: number;
      unit: string;
      direction: string;
    };
    cloud: {
      value: number;
      unit: string;
    };
  };
};
