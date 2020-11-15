import { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { Range, getTrackBackground } from "react-range";
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  const activityData = JSON.parse(localStorage.getItem("daily__activity"));
  const [activities, setActivities] = useState(activityData);
  const [showRangeInput, setRangeInput] = useState(false);
  const descriptionText = useRef("");

  const updateActivity = (dayId, updatedEvents, submitFlag = true) => {
    const tempDay = activities.find((day) => day.id === dayId);
    const tempDayIndex = activities.findIndex((day) => day.id === dayId);
    let updatedActivities = [...activities];

    if (tempDayIndex !== -1) {
      updatedActivities[tempDayIndex] = {
        ...tempDay,
        events: updatedEvents,
      };
    }

    setActivities(updatedActivities);
    if (submitFlag) {
      localStorage.setItem(
        "daily__activity",
        JSON.stringify(updatedActivities)
      );
    }
  };

  const updateHours = (
    dayId,
    dayEvent,
    events,
    hoursValue,
    submitFlag = false
  ) => {
    const tempEventIndex = events.findIndex(
      (tempDayEvent) => tempDayEvent.id === dayEvent.id
    );
    let updatedEvents = [...events];

    if (tempEventIndex !== -1) {
      updatedEvents[tempEventIndex] = {
        ...dayEvent,
        hours: hoursValue,
      };
    }
    updateActivity(dayId, updatedEvents, submitFlag);
  };

  const updateDescription = (dayId, dayEvent, events) => {
    const tempEventIndex = events.findIndex(
      (tempDayEvent) => tempDayEvent.id === dayEvent.id
    );
    let updatedEvents = [...events];

    if (tempEventIndex !== -1) {
      updatedEvents[tempEventIndex] = {
        ...dayEvent,
        description: descriptionText.current,
      };
    }

    updateActivity(dayId, updatedEvents);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="activity">
        {activities &&
          activities.map((day, activityKey) => {
            return (
              <div className="day" key={activityKey}>
                <div className="day-summary">
                  <div className="day-summary--date">{day.time}</div>
                  <div className="day-summary--details">
                    <div className="day-summary--hours">
                      {day.totalHours} <span className="time-format">h</span>
                    </div>
                    <div className="day-summary--actions"></div>
                  </div>
                </div>
                <div className="day-events">
                  {day.events.map((dayEvent, eventKey) => {
                    let date = new Date(0);
                    date.setSeconds(dayEvent.hours * 60 * 60); // 60 minutes * 60 seconds
                    const formattedHours = date.toISOString().substr(11, 5);

                    return (
                      <div className="day-event" key={eventKey}>
                        <div className="day-event--description">
                          <ContentEditable
                            className="day-event--description__editable"
                            html={dayEvent.description}
                            onBlur={(e) => {
                              if (descriptionText.current) {
                                updateDescription(day.id, dayEvent, day.events);
                              }
                            }}
                            onChange={(e) => {
                              descriptionText.current = e.target.value;
                            }}
                            onKeyDown={(keyEvent) => {
                              if (
                                keyEvent.key === "Enter" ||
                                keyEvent.key === "Escape"
                              ) {
                                keyEvent.preventDefault();
                                keyEvent.target.blur();
                              }
                            }}
                          />
                        </div>
                        <div className="day-event--category">
                          <div className="day-event--project">
                            <span className="tag">{dayEvent.project.name}</span>
                          </div>
                          <div className="day-event--client">
                            <span className="tag">
                              {dayEvent.project.client}
                            </span>
                          </div>
                        </div>
                        <div className="day-event--details">
                          <div className="day-event--billable">
                            {dayEvent.project.rate * dayEvent.hours}{" "}
                            <span className="currency">
                              {dayEvent.project.currency}
                            </span>
                          </div>
                          <div
                            className="day-event--hours"
                            onClick={() => {
                              if (showRangeInput === dayEvent.id) {
                                setRangeInput(false);
                              } else {
                                setRangeInput(dayEvent.id);
                              }
                            }}
                          >
                            <span
                              className={
                                showRangeInput === dayEvent.id
                                  ? "hour editable"
                                  : "hour"
                              }
                            >
                              {formattedHours}
                            </span>
                          </div>
                          <div className="day-event--edit">...</div>
                        </div>
                        {showRangeInput === dayEvent.id && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexWrap: "wrap",
                              width: "25%",
                              position: "absolute",
                              top: "2.2rem",
                              right: 0,
                              zIndex: "1",
                              background: "#fff",
                              padding: "0.5rem 0.75rem",
                            }}
                          >
                            <Range
                              step={0.5}
                              min={0.5}
                              max={24}
                              onFinalChange={(values) => {
                                setRangeInput(false);
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  values,
                                  true
                                );
                              }}
                              values={[dayEvent.hours]}
                              onChange={(values) =>
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  values
                                )
                              }
                              renderTrack={({ props, children }) => (
                                <div
                                  onMouseDown={props.onMouseDown}
                                  onTouchStart={props.onTouchStart}
                                  style={{
                                    ...props.style,
                                    height: "26px",
                                    display: "flex",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    ref={props.ref}
                                    style={{
                                      height: "8px",
                                      width: "100%",
                                      borderRadius: "8px",
                                      background: getTrackBackground({
                                        values: [dayEvent.hours],
                                        colors: ["#817187", "#ccc"],
                                        min: 0.5,
                                        max: 24,
                                      }),
                                      alignSelf: "center",
                                    }}
                                  >
                                    {children}
                                  </div>
                                </div>
                              )}
                              renderThumb={({ props, isDragged }) => (
                                <div
                                  {...props}
                                  style={{
                                    ...props.style,
                                    height: "21px",
                                    width: "21px",
                                    borderRadius: "2px",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #817187",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "14px",
                                      width: "5px",
                                      backgroundColor: isDragged
                                        ? "#817187"
                                        : "#CCC",
                                    }}
                                  />
                                </div>
                              )}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
