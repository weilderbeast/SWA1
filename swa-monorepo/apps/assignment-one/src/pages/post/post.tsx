import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { Box } from "ui";
import { useAppContext } from "../../packages/context/context";

export const Post = () => {
  const { postData, response, changeRequestType, requestType } =
    useAppContext();
  const exampleString =
    'Data needs to be of type of: \n{"value": -,\n"type": "-",\n"unit": "-",\n"time": "-",\n"place": "-"}';
  const [sendText, setSendText] = useState("");

  return (
    <Box
      background="url(/Post.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <textarea
        placeholder={exampleString}
        style={{
          background: "rgba(1,1,1,0.8)",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "18px",
          border: "none",
          outline: "none",
          padding: "16px",
          marginBottom: "32px",
          height: "400px",
          width: "800px",
          color: "white",
        }}
        onChange={(e) => setSendText(JSON.stringify(e.target.value))}
      ></textarea>
      <button
        style={{
          borderRadius: "8px",
          background: "lightblue",
          border: "none",
          padding: "6px 12px",
          height: "60px",
          width: "120px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={() => postData(sendText)}
      >
        Send data
      </button>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="8px"
        background={requestType === "fetch" ? "lightblue" : "limegreen"}
        padding="6px 14px"
        borderRadius="27px"
        textTransform="capitalize"
        onClick={() => {
          changeRequestType(requestType === "fetch" ? "xhr" : "fetch");
        }}
        cursor="pointer"
        margin="32px 0"
      >
        <ImSpinner11 /> {requestType}
      </Box>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Response: {response}
      </p>
    </Box>
  );
};
