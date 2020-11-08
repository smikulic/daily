import { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
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
                    {/* <div className="day-summary--billable">
                      520 <span className="currency">EUR</span>
                    </div> */}
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
                            onBlur={() =>
                              updateDescription(day.id, dayEvent, day.events)
                            }
                            onChange={(e) =>
                              (descriptionText.current = e.target.value)
                            }
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
                            {formattedHours}
                          </div>
                          {showRangeInput === dayEvent.id && (
                            <input
                              type="range"
                              className="range-input"
                              min="0.5"
                              max="24"
                              step="0.5"
                              value={dayEvent.hours}
                              onChange={(e) =>
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  e.target.value
                                )
                              }
                              onBlur={(e) => {
                                setRangeInput(false);
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  e.target.value,
                                  true
                                );
                              }}
                            />
                          )}
                          <div className="day-event--edit">...</div>
                        </div>
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
