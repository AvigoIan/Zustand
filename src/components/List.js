import { useMemo } from "react";
import useStore from "../store";

const styles = {
  item_done: {
    textDecoration: "line-through",
    color: "gray",
    fontStyle: "italic",
  },
};

export const List = () => {
  const { check, all, filter } = useStore();
  const allItems = useMemo(() => {
    if (filter === "completed") {
      return all.filter((item) => item.done);
    }
    if (filter === "active") {
      return all.filter((item) => !item.done);
    }
    return all;
  }, [filter, all]);

  return (
    <ul className="px-5">
      {allItems.map((item) => (
        <li
          style={item.done ? styles.item_done : {}}
          onClick={() => check(item.id)}
        >
          {item.task}
        </li>
      ))}
    </ul>
  );
};
