import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Box, Input } from "ui";
import { useOnClickOutside } from "usehooks-ts";

type SearchProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ onChange }: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setIsFocused(false);
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      opacity={isFocused ? 1 : 0.5}
      padding="0 20px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={ref}
        onClick={() => setIsFocused(true)}
        width="100%"
        gap="30px"
      >
        <FiSearch style={{ height: "80px", width: "80px" }} />
        <Input
          onChange={onChange}
          height="80px"
          border="none"
          background="transparent"
          width="100%"
          color="white"
          fontSize="45px"
          placeholder="Search for a city..."
        />
      </Box>
    </Box>
  );
};
