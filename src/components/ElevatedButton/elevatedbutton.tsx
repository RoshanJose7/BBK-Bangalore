import "./elevatedbutton.styles.scss";

function ElevatedButton({ text }: { text: string }) {
  return (
    <button className="elevated-button">
      {text}
      <hr />
    </button>
  );
}

export default ElevatedButton;
