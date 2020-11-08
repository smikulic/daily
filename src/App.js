import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  const activity = JSON.parse(localStorage.getItem("daily__activity"));
  console.log(activity);

  return (
    <div className="App">
      <Sidebar />
      <div className="activity">
        {activity &&
          activity.map((day, activityKey) => {
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
                  {day.events.map((event, eventKey) => {
                    return (
                      <div className="day-event" key={eventKey}>
                        <div className="day-event--description">
                          {event.description}
                        </div>
                        <div className="day-event--category">
                          <div className="day-event--project">
                            <span className="tag">{event.project.name}</span>
                          </div>
                          <div className="day-event--client">
                            <span className="tag">{event.project.client}</span>
                          </div>
                        </div>
                        <div className="day-event--details">
                          <div className="day-event--billable">
                            {event.project.rate * event.hours}{" "}
                            <span className="currency">
                              {event.project.currency}
                            </span>
                          </div>
                          <div className="day-event--hours">
                            {event.hours} <span className="time-format">h</span>
                          </div>
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
