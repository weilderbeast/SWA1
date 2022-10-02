import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormattedData } from "../../utils/types";
import { useFetch } from "../fetch/fetch";

type Props = {
  children?: React.ReactNode;
};

type ContextType = {
  getDataForCity: (city: string) => FormattedData[];
  latestMeasurementForCity: (city: string) => FormattedData | undefined;
  setCity: (city: string) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

type SelectionMap<T> = {
  [city: string]: T[];
};

const AppContext = createContext<ContextType>({} as ContextType);

export const useAppContext = (): ContextType =>
  useContext(AppContext) as ContextType;

export const Context: React.FC<Props> = ({ children }: Props) => {
  const { getDataForCity } = useFetch();
  const [data, setData] = useState<SelectionMap<FormattedData>>({});
  const [enabled, setEnabled] = useState(true);
  const [city, setCity] = useState("Aarhus");

  useEffect(() => {
    const func = async () => {
      await getDataForCity(city)
        .then((value) => {
          setData((prev) => {
            if (!prev[city]) {
              return {
                ...prev,
                [city]: [...value],
              };
            }
            return {
              ...prev,
              [city]: [...prev[city], ...value],
            };
          });
        })
        .then(() => {
          console.log(data);
        });
    };

    func();
  }, []);

  const getMeasurementDataForCity = useCallback(
    (city: string) => data[city] ?? [],
    [data]
  );
  const latestMeasurementForCity = useCallback(
    (city: string) => (data[city] ?? []).at(-1),
    [data]
  );

  return (
    <AppContext.Provider
      value={{
        getDataForCity: getMeasurementDataForCity,
        latestMeasurementForCity,
        setCity,
        enabled,
        setEnabled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
