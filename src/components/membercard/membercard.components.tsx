import "./membercard.styles.scss";

function MemberCard({
  imgUrl,
  title,
  subtitle,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
}) {
  return (
    <article className="member-card">
      <img src={imgUrl} alt="Card" />

      <div className="text">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    </article>
  );
}

export default MemberCard;
