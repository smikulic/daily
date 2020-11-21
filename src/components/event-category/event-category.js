import "./event-category.css";

function EventCategory({ name, client, themeColor, enableHover = false }) {
  return (
    <div className="day-event--category">
      <span className={ `day-event---project-client-wrapper ${enableHover && 'hover'}`}>
        <div className="day-event--project">
          <span className="tag" style={{ color: themeColor || "#b32323" }}>
            {name}
          </span>
        </div>
        <div className="day-event--client">
          <span className="tag">{client}</span>
        </div>
      </span>
    </div>
  );
}

export default EventCategory;
