type BaseHistoricalData = {
  time: string;
  place: string;
  value: number;
  unit: string;
};

type BaseFormattedData = {
  place: string;
  time: string;
};

type BaseForecast = {
  from: number;
  to: number;
};

export type Temperature = {
  type: "temperature";
} & BaseHistoricalData;

export type TemperatureForecast = Temperature & BaseForecast;

export type Precipitation = {
  type: "precipitation";
  precipitation_type: string;
} & BaseHistoricalData;

export type PrecipitationForecast = {
  type: "precipitation";
  precipitation_types: string[];
} & BaseHistoricalData &
  BaseForecast;

export type WindSpeed = {
  type: "wind speed";
  direction: string;
} & BaseHistoricalData;

export type WindForecast = {
  type: "wind speed";
  directions: string[];
} & BaseHistoricalData &
  BaseForecast;

export type CloudCoverage = {
  type: "cloud coverage";
} & BaseHistoricalData;

export type CloudCoverageForecast = CloudCoverage & BaseForecast;

export type HistoricalComposite =
  | Temperature
  | Precipitation
  | WindSpeed
  | CloudCoverage;

export type ForecastComposite =
  | TemperatureForecast
  | PrecipitationForecast
  | WindForecast
  | CloudCoverageForecast;

export type FormattedHistoricalData = BaseFormattedData & {
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

export type FormattedForecastData = BaseFormattedData & {
  data: {
    temperature: {
      value: number;
      unit: string;
      from: number;
      to: number;
    };
    precipitation: {
      value: number;
      unit: string;
      types: string[];
      from: number;
      to: number;
    };
    wind: {
      value: number;
      unit: string;
      directions: string[];
      from: number;
      to: number;
    };
    cloud: {
      value: number;
      unit: string;
      from: number;
      to: number;
    };
  };
};
