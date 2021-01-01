import { useState, useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFolder } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "lodash/isEmpty";
import RangePicker from "../../components/range-picker";
import EventCategory from "../../components/event-category/event-category";
import RemoveAction from "../../components/remove-action";
import UnitFormatter from "../../components/unit-formatter";
import LoadSpinner from "../../components/load-spinner";
import { formatHours } from "../../utils/formatHours";
import "./tracker-page.css";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const DATE_FORMAT = "dd MMM";

const projectSelectStyles = {
  container: (provided) => ({
    ...provided,
    zIndex: "1",
    position: "absolute",
    top: "1.8rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "14rem",
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  control: (provided) => ({
    ...provided,
    marginBottom: "0.25rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    border: 0,
  }),
  menu: (provided) => ({
    ...provided,
    margin: "0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    border: 0,
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

function TrackerPage({ activitiesData }) {
  const [projects] = useState(
    JSON.parse(localStorage.getItem("daily__projects")) || []
  );
  const [activities, setActivities] = useState(activitiesData);
  const [showRangeInput, setRangeInput] = useState(false);
  const [showNewEventRange, toggleNewEventRange] = useState(false);
  const [showProjectSelect, toggleProjectSelect] = useState(false);
  const [newEvent, setNewEvent] = useState({
    hours: 0,
    project: {},
    day: new Date(),
    description: "",
  });
  const descriptionText = useRef("");

  useEffect(() => {
    // action on update of activities data
    setActivities(activitiesData);
  }, [activitiesData]);

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
    !isEmpty(newEvent.project) && newEvent.project.name !== "No project";

  const createEvent = () => {
    console.log(newEvent);
  };

  return (
    <>
      <div className="new-activity">
        <input
          className="new-activity--description"
          placeholder="What have you done?"
          type="text"
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <div className="new-activity--actions">
          <div className="new-activity--category">
            {isNewEventProjectSelected() ? (
              <EventCategory
                enableHover
                name={newEvent.project.name}
                client={newEvent.project.client}
                themeColor={newEvent.project.themeColor}
                onClick={() => toggleProjectSelect(!showProjectSelect)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faFolder}
                size="sm"
                onClick={() => toggleProjectSelect(!showProjectSelect)}
              />
            )}
            {showProjectSelect && (
              <Select
                autoFocus
                menuIsOpen
                isClearable
                isSearchable
                name="project"
                placeholder={
                  <span style={{ fontSize: "0.8rem" }}>Search by project</span>
                }
                styles={projectSelectStyles}
                defaultValue={projects[0].name}
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
                  setNewEvent({ ...newEvent, project: selectedProject });
                }}
              />
            )}
          </div>
          <DayPickerInput
            formatDate={formatDate}
            format={DATE_FORMAT}
            parseDate={parseDate}
            placeholder={`${dateFnsFormat(new Date(), DATE_FORMAT)}`}
            onDayChange={(selectedDay) =>
              setNewEvent({ ...newEvent, day: selectedDay })
            }
          />
          <div
            className="day-event--hours"
            onClick={() => toggleNewEventRange(true)}
          >
            <span className={showNewEventRange ? "hour editable" : "hour"}>
              {formatHours(newEvent.hours)}
            </span>
          </div>
          <div className="new-activity--submit" onClick={createEvent}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
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
      </div>
      {activities.length ? (
        activities.map((day) => {
          let totalHours = 0;
          day.events.forEach((dayEvent) => (totalHours += dayEvent.hours));

          return (
            <div className="day" key={day.key}>
              <div className="day-summary">
                <div className="day-summary--date">
                  {dateFnsFormat(new Date(day.date), "E, dd MMM")}
                </div>
                <div className="day-summary--details">
                  <div className="day-summary--hours">
                    {formatHours(totalHours)} <UnitFormatter>h</UnitFormatter>
                  </div>
                  <div className="day-summary--actions"></div>
                </div>
              </div>
              <div className="day-events">
                {day.events.length &&
                  day.events.map((dayEvent) => {
                    return (
                      <div className="day-event" key={dayEvent.id}>
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
                          <EventCategory
                            enableHover
                            name={dayEvent.client.name}
                            // client={dayEvent.project.client}
                            themeColor={dayEvent.client.themeColor}
                          />
                        </div>
                        <div className="day-event--details">
                          <div className="day-event--billable">
                            {dayEvent.client.rate ? (
                              <>
                                {dayEvent.client.rate * dayEvent.hours}{" "}
                                <UnitFormatter>
                                  {dayEvent.client.currency}
                                </UnitFormatter>
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
                          <div className="day-event--edit">
                            <RemoveAction />
                          </div>
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
        })
      ) : (
        <div className="day">
          <div className="day-summary">
            <LoadSpinner />
          </div>
        </div>
      )}
    </>
  );
}

export default TrackerPage;
