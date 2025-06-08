import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

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
    <div>
      <ListGroup
        items={items}
        title="Citites"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
