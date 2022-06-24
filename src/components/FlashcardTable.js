import FlashcardCard from "./FlashcardCard";

export default function FlashcardTable({ flashcardArray }) {
  return (
    <div className="flashcardTable">
      {flashcardArray.map((flashcardCard) => {
        return (
          <FlashcardCard flashcardCard={flashcardCard} key={flashcardCard.front} />
        );
      })}
    </div>
  );
}
