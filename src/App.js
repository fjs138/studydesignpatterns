import "./App.css";
import FlashcardTable from "./components/FlashcardTable";
import { useState } from "react";
import { creationalFlashcardArray } from "./flashcard-datasets/creational";
import { structuralFlashcardArray } from "./flashcard-datasets/structural";
import { behavioralFlashcardArray } from "./flashcard-datasets/behavioral";
import Footer from './components/Footer';

export default function App() {
  const [flashcardArray, setFlashcardArray] = useState(
    creationalFlashcardArray
  );

  let designPatternCategories = ["Creational", "Structural", "Behavioral"];

  const [designPatternCategorySelection, setDesignPatternCategorySelection] =
    useState("Creational");

  function handler(e) {
    if (e.target.value === "Creational") {
      setFlashcardArray(creationalFlashcardArray);
    }
    if (e.target.value === "Structural") {
      setFlashcardArray(structuralFlashcardArray);
    }
    if (e.target.value === "Behavioral") {
      setFlashcardArray(behavioralFlashcardArray);
    }
    setDesignPatternCategorySelection(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="montserrat">Study Design Patterns</h1>
        {/*<p>Thank you, GoF!</p>*/}
      </header>


      <select className="minimal" value={designPatternCategorySelection} onChange={handler}>
        {designPatternCategories.map((e) => (
          <option key={e.valueOf()}>{e}</option>
        ))}
      </select>
      <FlashcardTable flashcardArray={flashcardArray} />
      <Footer/>
    </div>
  );
}
