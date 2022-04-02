import "./elevatedbutton.styles.scss";

function ElevatedButton({ text }: { text: string }) {
  return (
    <button className="elevated-button">
      <h4>{text}</h4>
    </button>
  );
}

export default ElevatedButton;
