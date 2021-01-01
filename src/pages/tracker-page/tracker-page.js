/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "lodash/isEmpty";
import RangePicker from "../../components/range-picker";
import EventCategory from "../../components/event-category/event-category";
import HeaderWrapper from "../../components/header-wrapper";
import UnitFormatter from "../../components/unit-formatter";
import RemoveAction from "../../components/remove-action";
import LoadSpinner from "../../components/load-spinner";
import {
  formatHours,
  parseDate,
  formatDate,
  DATE_FORMAT,
} from "../../utils/date";
import { cssListWrapper, cssColorActionBackground } from "../../style/patterns";
import "./tracker-page.css";

const cssHour = css`
  padding: 0.1rem 0.3rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${cssColorActionBackground};
  }
`;
const cssHourEditable = css`
  ${cssHour};
  background-color: ${cssColorActionBackground};
`;

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
      <HeaderWrapper
        headerInputPlaceholder="What have you done?"
        headerInputOnChange={(e) =>
          setNewEvent({ ...newEvent, description: e.target.value })
        }
        headerSubmitOnClick={createEvent}
      >
        <div
          css={css`
            position: relative;
            margin-right: 0.3rem;
            color: rgba(44, 19, 56, 0.5);
            cursor: pointer;

            &:hover {
              color: rgba(44, 19, 56, 1);
            }
          `}
        >
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
          css={css`
            margin-right: 0.6rem;
            display: flex;
          `}
          onClick={() => toggleNewEventRange(true)}
        >
          <span css={showNewEventRange ? cssHourEditable : cssHour}>
            {formatHours(newEvent.hours)}
          </span>
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
      </HeaderWrapper>
      {activities.length ? (
        activities.map((day) => {
          let totalHours = 0;
          day.events.forEach((dayEvent) => (totalHours += dayEvent.hours));

          return (
            <div css={cssListWrapper} key={day.key}>
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
        <div css={cssListWrapper}>
          <div className="day-summary">
            <LoadSpinner />
          </div>
        </div>
      )}
    </>
  );
}

export default TrackerPage;
