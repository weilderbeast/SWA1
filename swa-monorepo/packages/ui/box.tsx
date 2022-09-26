import { ForwardedRef, forwardRef } from "react";

type BoxProps = React.CSSProperties & {
  children?: React.ReactNode | React.ReactNode[] | any;
  onClick?: (e: React.MouseEvent) => void;
};
/*
    Style inspired by Chakra-UI, where css is passed as props,
    making it a lot easier to use and share across components.

    Also helps scope css without worrying about overlap.
    Also provides type safety.
*/

export const Box = forwardRef(
  (
    { children, onClick, ...props }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div style={{ ...props }} onClick={onClick} ref={ref}>
        {children}
      </div>
    );
  }
);
