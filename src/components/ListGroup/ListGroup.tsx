import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <List>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
