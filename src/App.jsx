import "./App.css";
import EmojiList from "./components/Emojis/EmojiList";
import EmojiHeading from "./components/Emojis/EmojiHeading";

function App() {
  return (
    <>
      <div>
        <EmojiHeading />
        <EmojiList />
      </div>
    </>
  );
}

export default App;
