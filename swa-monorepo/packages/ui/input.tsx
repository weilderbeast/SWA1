import { ForwardedRef, forwardRef } from "react";

type InputProps = React.CSSProperties &
  React.HTMLProps<HTMLInputElement> & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
  };

export const Input = forwardRef(
  (
    { onChange, children, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        style={{ ...props }}
        onChange={onChange}
        ref={ref}
        placeholder={props.placeholder}
      >
        {children}
      </input>
    );
  }
);
