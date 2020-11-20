import { Range, getTrackBackground } from "react-range";
import "./range-picker.css";

function RangePicker({ day, dayEvent, setRangeInput, updateHours }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "25%",
        position: "absolute",
        top: "2.1rem",
        right: 0,
        zIndex: "1",
        background: "#fff",
        padding: "0.4rem 0.75rem",
      }}
    >
      <Range
        step={0.5}
        min={0.5}
        max={24}
        values={[dayEvent.hours]}
        onFinalChange={(values) => {
          setRangeInput(false);
          updateHours(day.id, dayEvent, day.events, values[0], true);
        }}
        onChange={(values) =>
          updateHours(day.id, dayEvent, day.events, values[0])
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
                backgroundColor: isDragged ? "#817187" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

export default RangePicker;
