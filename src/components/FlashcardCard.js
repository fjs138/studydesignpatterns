import { useState } from "react";

export default function FlashcardCard({ flashcardCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card disabledSelect" onClick={() => setFlipped(!flipped)}>
      {flipped ? flashcardCard.back : flashcardCard.front}
    </div>
  );
}
