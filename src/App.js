import { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheckCircle,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/sidebar";
import RangePicker from "./components/range-picker";
import "./App.css";

function App() {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("daily__activity")) || []
  );
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
        <div className="new-activity">
          <input
            className="new-activity--description"
            type="text"
            placeholder="What have you done?"
          />
          <div className="new-activity--actions">
            <div className="new-activity--category">
              <FontAwesomeIcon icon={faFolder} size="sm" />
            </div>
            <div className="new-activity--submit">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            </div>
          </div>
        </div>
        {activities.length &&
          activities.map((day, activityKey) => {
            let totalHours = 0;
            day.events.forEach((dayEvent) => (totalHours += dayEvent.hours));
            let dayDate = new Date(0);
            dayDate.setSeconds(totalHours * 60 * 60); // 60 minutes * 60 seconds
            const formattedTotalHours = dayDate.toISOString().substr(11, 5);

            return (
              <div className="day" key={activityKey}>
                <div className="day-summary">
                  <div className="day-summary--date">{day.time}</div>
                  <div className="day-summary--details">
                    <div className="day-summary--hours">
                      {formattedTotalHours}{" "}
                      <span className="time-format">h</span>
                    </div>
                    <div className="day-summary--actions"></div>
                  </div>
                </div>
                <div className="day-events">
                  {day.events.length &&
                    day.events.map((dayEvent, eventKey) => {
                      let eventDate = new Date(0);
                      eventDate.setSeconds(dayEvent.hours * 60 * 60); // 60 minutes * 60 seconds
                      const formattedHours = eventDate
                        .toISOString()
                        .substr(11, 5);

                      return (
                        <div className="day-event" key={eventKey}>
                          <div className="day-event--description">
                            <ContentEditable
                              className="day-event--description__editable"
                              html={dayEvent.description}
                              onBlur={(e) => {
                                if (descriptionText.current) {
                                  updateDescription(
                                    day.id,
                                    dayEvent,
                                    day.events
                                  );
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
                            <span className="day-event---project-client-wrapper">
                              <div className="day-event--project">
                                <span
                                  className="tag"
                                  style={{
                                    color:
                                      dayEvent.project.themeColor || "#b32323",
                                  }}
                                >
                                  {dayEvent.project.name}
                                </span>
                              </div>
                              <div className="day-event--client">
                                <span className="tag">
                                  {dayEvent.project.client}
                                </span>
                              </div>
                            </span>
                          </div>
                          <div className="day-event--details">
                            <div className="day-event--billable">
                              {dayEvent.project.rate ? (
                                <>
                                  {dayEvent.project.rate * dayEvent.hours}{" "}
                                  <span className="currency">
                                    {dayEvent.project.currency}
                                  </span>
                                </>
                              ) : (
                                "\u2013"
                              )}
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
                            <div className="day-event--edit">Clear</div>
                          </div>
                          {showRangeInput === dayEvent.id && (
                            <RangePicker
                              day={day}
                              dayEvent={dayEvent}
                              setRangeInput={setRangeInput}
                              updateHours={updateHours}
                              onChange={(values) =>
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  values[0]
                                )
                              }
                              onFinalChange={(values) => {
                                setRangeInput(false);
                                updateHours(day.id, dayEvent, day.events, values[0], true);
                              }}
                            />
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
