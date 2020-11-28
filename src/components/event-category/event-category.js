import "./event-category.css";

function EventCategory({
  name,
  client,
  themeColor,
  enableHover = false,
  onClick,
}) {
  return (
    <div className="day-event--category" onClick={onClick}>
      <span
        className={`day-event---project-client-wrapper ${
          enableHover && "hover"
        }`}
      >
        <div className="day-event--project">
          <span className="tag" style={{ color: themeColor || "#817187" }}>
            {name}
          </span>
        </div>
        {client && (
          <div className="day-event--client">
            <span className="tag">{client}</span>
          </div>
        )}
      </span>
    </div>
  );
}

export default EventCategory;
