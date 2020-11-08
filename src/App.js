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
        ///////
        <div className="day">
          <div className="day-summary">
            <div className="day-summary--date">Fri, 6 Nov</div>
            <div className="day-summary--details">
              <div className="day-summary--billable">
                520 <span className="currency">EUR</span>
              </div>
              <div className="day-summary--hours">
                10 <span className="time-format">h</span>
              </div>
              <div className="day-summary--actions"></div>
            </div>
          </div>
          <div className="day-events">
            <div className="day-event">
              <div className="day-event--description">
                Amount and balance formatter fixes
              </div>
              <div className="day-event--category">
                <div className="day-event--project">
                  <span className="tag">Backoffice</span>
                </div>
                <div className="day-event--client">
                  <span className="tag">solarisBank</span>
                </div>
              </div>
              <div className="day-event--details">
                <div className="day-event--billable">
                  480 <span className="currency">EUR</span>
                </div>
                <div className="day-event--hours">08:00</div>
                <div className="day-event--edit">...</div>
              </div>
            </div>
            <div className="day-event">
              <div className="day-event--description">Initialise app</div>
              <div className="day-event--category">
                <div className="day-event--project">
                  <span className="tag">side app</span>
                </div>
                <div className="day-event--client">
                  <span className="tag">Code Well Studio</span>
                </div>
              </div>
              <div className="day-event--details">
                <div className="day-event--billable">
                  40 <span className="currency">EUR</span>
                </div>
                <div className="day-event--hours">02:00</div>
                <div className="day-event--edit">...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-summary">
            <div className="day-summary--date">Thu, 5 Nov</div>
            <div className="day-summary--details">
              <div className="day-summary--billable">
                480 <span className="currency">EUR</span>
              </div>
              <div className="day-summary--hours">
                8 <span className="time-format">h</span>
              </div>
              <div className="day-summary--actions"></div>
            </div>
          </div>
          <div className="day-events">
            <div className="day-event">
              <div className="day-event--description">
                Amount and balance formatter fixes
              </div>
              <div className="day-event--category">
                <div className="day-event--project">
                  <span className="tag">Backoffice</span>
                </div>
                <div className="day-event--client">
                  <span className="tag">solarisBank</span>
                </div>
              </div>
              <div className="day-event--details">
                <div className="day-event--billable">
                  480 <span className="currency">EUR</span>
                </div>
                <div className="day-event--hours">08:00</div>
                <div className="day-event--edit">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
