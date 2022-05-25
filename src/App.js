import Square from "./Square";
import Input from "./Input";
import { useState } from "react"
function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        hexValue={hexValue}
        setHexValue={setHexValue}
        colorValue={colorValue}
        isDarkText ={isDarkText}
        setIsDarkText={setIsDarkText}
        setColorValue={setColorValue} />
    </div>
  );
}

export default App;

