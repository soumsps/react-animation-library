import React from "react";

const FadeIn = ({ children, duration = 5000}) => {
  const [opacity, setOpacity] = React.useState(0.0);
// to differentiate between first and the rest.
  let startTime = -1.0;
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      if (startTime < 0) {
        startTime = new Date().getTime();
        setOpacity(0.0 / duration);
      } else if (time <= duration) {
        setOpacity(time / duration); 
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // to make sure request animation only runs once at first
  return <span style={{ opacity: opacity }}>{children}</span>;
};
export { FadeIn };
