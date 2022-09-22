type BoxProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};
/*
    Style inspired by Chakra-UI, where css is passed as props,
    making it a lot easier to use and share across components.

    Also helps scope css without worrying about overlap.
    Also provides type safety.
*/
export const Box = ({ children, ...props }: BoxProps) => {
  return <div style={{ ...props }}>{children}</div>;
};
