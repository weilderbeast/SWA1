import { Box } from "ui";
import "./get.css";
import { Result } from "./components/result";
import { useAppContext } from "../../packages/context/context";

export const Get = () => {
  const { city } = useAppContext();
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundImage={`url("./${city}.jpg")`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      transition="background .2s ease-in-out"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="rgba(0,0,0, 0.5)"
        width="100%"
        height="100%"
        padding="65px"
        gap="15%"
      >
        <Result />
      </Box>
    </Box>
  );
};
