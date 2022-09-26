import { Box } from "ui";
import { DataGroup } from "../../../utils/types";
import { TimelineCard } from "./timeline-card";

type TimelineProps = {
  data: DataGroup[];
};

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-end"
      gap="25px"
    >
      <TimelineCard data={data[0]} index={1} />
      <TimelineCard data={data[0]} index={2} />
      <TimelineCard data={data[0]} index={3} />
    </Box>
  );
};
