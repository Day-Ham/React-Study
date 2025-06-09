import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group" style={{ backgroundColor: "red" }}>
        {items.map((item, index) => (
          <ListItem
            active={index == selectedIndex}
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
          </ListItem>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
