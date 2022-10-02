import {
  Temperature,
  Precipitation,
  WindSpeed,
  CloudCoverage,
  HistoricalComposite,
  FormattedHistoricalData,
  TemperatureForecast,
  PrecipitationForecast,
  WindForecast,
  CloudCoverageForecast,
  ForecastComposite,
  FormattedForecastData,
} from "./types";

type HistoricalGrouping = {
  temperature: Temperature;
  precipitation: Precipitation;
  wind: WindSpeed;
  cloud: CloudCoverage;
};

export const formatHistoricalData = (data: HistoricalComposite[]) => {
  const arr: HistoricalGrouping[] = [];
  let idx = 0;

  while (idx < data.length - 1) {
    arr.push({
      temperature: data[idx] as Temperature,
      precipitation: data[idx + 1] as Precipitation,
      wind: data[idx + 2] as WindSpeed,
      cloud: data[idx + 3] as CloudCoverage,
    });

    idx += 4;
  }

  const formattedArr = arr.map(
    (item) =>
      ({
        place: item.temperature.place,
        time: item.temperature.time,
        data: {
          temperature: {
            value: item.temperature.value,
            unit: item.temperature.unit,
          },
          precipitation: {
            value: item.precipitation.value,
            unit: item.precipitation.unit,
            type: item.precipitation.type,
          },
          wind: {
            value: item.wind.value,
            unit: item.wind.unit,
            direction: item.wind.direction,
          },
          cloud: {
            value: item.cloud.value,
            unit: item.cloud.unit,
          },
        },
      } as FormattedHistoricalData)
  );

  return formattedArr;
};

type ForecastGrouping = {
  temperature: TemperatureForecast;
  precipitation: PrecipitationForecast;
  wind: WindForecast;
  cloud: CloudCoverageForecast;
};

export const formatForecastData = (data: ForecastComposite[]) => {
  const arr: ForecastGrouping[] = [];
  let idx = 0;

  while (idx < data.length - 1) {
    arr.push({
      temperature: data[idx] as TemperatureForecast,
      precipitation: data[idx + 1] as PrecipitationForecast,
      wind: data[idx + 2] as WindForecast,
      cloud: data[idx + 3] as CloudCoverageForecast,
    });

    idx += 4;
  }

  const formattedArr = arr.map(
    (item) =>
      ({
        place: item.temperature.place,
        time: item.temperature.time,
        data: {
          temperature: {
            value: item.temperature.value,
            unit: item.temperature.unit,
            from: item.temperature.from,
            to: item.temperature.to,
          },
          precipitation: {
            value: item.precipitation.value,
            unit: item.precipitation.unit,
            from: item.precipitation.from,
            to: item.precipitation.to,
            types: item.precipitation.precipitation_types,
          },
          wind: {
            value: item.wind.value,
            unit: item.wind.unit,
            from: item.wind.from,
            to: item.wind.to,
            directions: item.wind.directions,
          },
          cloud: {
            value: item.cloud.value,
            unit: item.cloud.unit,
            from: item.cloud.from,
            to: item.cloud.to,
          },
        },
      } as FormattedForecastData)
  );

  return formattedArr;
};
