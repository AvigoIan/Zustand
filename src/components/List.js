import { useMemo } from "react";
import useStore from "../store";
import styled from "@emotion/styled";

const ListItem = styled.li`
  cursor: pointer;
  padding: 5px;
  ${(props) =>
    props.done &&
    `
    text-decoration: line-through;
    color: gray;
    font-style: italic;
  `}
`;

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
        <ListItem key={item.id} done={item.done} onClick={() => check(item.id)}>
          {item.task}
        </ListItem>
      ))}
    </ul>
  );
};
