import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
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
      <Button
        onClick={() => {
          console.log("fsdfasdf");
        }}
      >
        Clickster
      </Button>
    </div>
  );
}

export default App;
