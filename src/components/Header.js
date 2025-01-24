import { useMemo } from "react";
import useStore from "../store";

export const Header = ({ title }) => {
  const { all } = useStore();
  const count = useMemo(() => {
    if (!all.length) {
      return false;
    }
    return all.length > 1 ? `${all.length} items` : `${all.length} item`;
  }, [all]);

  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
};
