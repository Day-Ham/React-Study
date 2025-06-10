import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import LikeButton from "./components/LikeButton/LikeButton";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [likeIndicator, setLike] = useState(false);

  let items = [
    "Busan",
    "Daegu",
    "Ansan",
    "Damyang",
    "Seoul",
    "Daejeon",
    "Incheon",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <LikeButton />
      <div>
        <ListGroup
          items={items}
          title="Citites"
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>
    </>
  );
}

export default App;
