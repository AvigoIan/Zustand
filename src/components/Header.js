import { useMemo } from "react";
import useStore from "../store";

export const Header = () => {
  const { all } = useStore();
  const count = useMemo(() => {
    if (!all.length) {
      return false;
    }
    return all.length > 1 ? `${all.length} items` : `${all.length} item`;
  }, [all]);

  return (
    <div className="p-4">
      <h1>Todos</h1>
      <p>{count}</p>
    </div>
  );
};
