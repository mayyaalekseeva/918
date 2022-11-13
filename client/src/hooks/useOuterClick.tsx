import * as React from "react";

interface Props {
  callback: any;
}

const useOuterClick = ({ callback }: Props) => {
  let callbackRef: any = React.useRef(null);
  const innerRef = React.useRef<any>(null);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  React.useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target) {
        if (
          innerRef.current &&
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        ) {
          callbackRef.current(e);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const controller = {
    innerRef,
  };

  return controller;
};

export default useOuterClick;
