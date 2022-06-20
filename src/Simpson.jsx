export default function Simpson({ simpsonsQuotes }) {
  return (
    <div className="Simpson">
      <h1>Simpson Quotes</h1>
      <ul>
        <li>
          <img src={simpsonsQuotes.image} alt={simpsonsQuotes.character} />
          <h2>{simpsonsQuotes.character}</h2>
          <p>{simpsonsQuotes.quote}</p>
        </li>
      </ul>
    </div>
  );
}
