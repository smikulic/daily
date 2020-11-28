import { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFolder } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "lodash/isEmpty";
import Sidebar from "./components/sidebar";
import RangePicker from "./components/range-picker";
import EventCategory from "./components/event-category/event-category";
import { formatHours } from "./utils/formatHours";
import "./App.css";

const projectSelectStyles = {
  container: (provided) => ({
    ...provided,
    position: "absolute",
    top: "1.8rem",
    left: "-13rem",
    width: "14rem",
  }),
};

function App() {
  const [projects] = useState(
    JSON.parse(localStorage.getItem("daily__projects")) || []
  );
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("daily__activity")) || []
  );
  const [showRangeInput, setRangeInput] = useState(false);
  const [showNewEventRange, toggleNewEventRange] = useState(false);
  const [showProjectSelect, toggleProjectSelect] = useState(false);
  const [newEventSelectedProject, selectNewEventProject] = useState({});
  const [newEvent, setNewEvent] = useState({ hours: 0 });
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

  const isNewEventProjectSelected = () =>
    !isEmpty(newEventSelectedProject) &&
    newEventSelectedProject.name !== "No project";

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
          {isNewEventProjectSelected() && (
            <EventCategory
              enableHover
              name={newEventSelectedProject.name}
              client={newEventSelectedProject.client}
              themeColor={newEventSelectedProject.themeColor}
              onClick={() => toggleProjectSelect(!showProjectSelect)}
            />
          )}
          <div className="new-activity--actions">
            <div className="new-activity--category">
              {!isNewEventProjectSelected() && (
                <FontAwesomeIcon
                  icon={faFolder}
                  size="sm"
                  onClick={() => toggleProjectSelect(!showProjectSelect)}
                />
              )}
              {showProjectSelect && (
                <Select
                  placeholder={
                    <span style={{ fontSize: "0.8rem" }}>
                      Search by project
                    </span>
                  }
                  menuIsOpen={true}
                  styles={projectSelectStyles}
                  defaultValue={projects[0].name}
                  isClearable
                  isSearchable
                  name="project"
                  formatOptionLabel={EventCategory}
                  options={[{ name: "No project" }, ...projects]}
                  filterOption={(project, input) => {
                    if (input) {
                      return project.data.name.toLowerCase().includes(input);
                    }
                    return true;
                  }}
                  onChange={(selectedProject) => {
                    toggleProjectSelect(false);
                    selectNewEventProject(selectedProject);
                  }}
                />
              )}
            </div>
            <div
              className="day-event--hours"
              onClick={() => toggleNewEventRange(true)}
            >
              <span className={showNewEventRange ? "hour editable" : "hour"}>
                {formatHours(newEvent.hours)}
              </span>
            </div>
            <div className="new-activity--submit">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            </div>
          </div>
          {showNewEventRange && (
            <RangePicker
              rangeValues={newEvent.hours}
              onChange={(rangeValues) =>
                setNewEvent({ ...newEvent, hours: rangeValues })
              }
              onFinalChange={() => toggleNewEventRange(false)}
            />
          )}
        </div>
        {activities.length &&
          activities.map((day, activityKey) => {
            let totalHours = 0;
            day.events.forEach((dayEvent) => (totalHours += dayEvent.hours));

            return (
              <div className="day" key={activityKey}>
                <div className="day-summary">
                  <div className="day-summary--date">{day.time}</div>
                  <div className="day-summary--details">
                    <div className="day-summary--hours">
                      {formatHours(totalHours)}{" "}
                      <span className="time-format">h</span>
                    </div>
                    <div className="day-summary--actions"></div>
                  </div>
                </div>
                <div className="day-events">
                  {day.events.length &&
                    day.events.map((dayEvent, eventKey) => {
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
                          <EventCategory
                            enableHover
                            name={dayEvent.project.name}
                            client={dayEvent.project.client}
                            themeColor={dayEvent.project.themeColor}
                          />
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
                                {formatHours(dayEvent.hours)}
                              </span>
                            </div>
                            <div className="day-event--edit">Clear</div>
                          </div>
                          {showRangeInput === dayEvent.id && (
                            <RangePicker
                              rangeValues={dayEvent.hours}
                              onChange={(rangeValues) =>
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  rangeValues[0]
                                )
                              }
                              onFinalChange={(rangeValues) => {
                                setRangeInput(false);
                                updateHours(
                                  day.id,
                                  dayEvent,
                                  day.events,
                                  rangeValues[0],
                                  true
                                );
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
