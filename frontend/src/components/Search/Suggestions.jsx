export default function Suggestions({ data, handleClick }) {
    return (
      <ul className="suggestions drop-down">
        {data && data.length
          ? data.map((item, index) => (
              <li key={index} onClick={handleClick}>
                {item.name} - {item.eventPlanner} - {item.vendor}
              </li>
            ))
          : <li>No matching events found</li>}
      </ul>
    );
  }
  