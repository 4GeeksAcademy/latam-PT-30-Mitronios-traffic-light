import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lightOn, setLightOn] = useState("");

	return (
		<React.Fragment>
			<div className="traffic-pole"></div>
			<div className="traffic-light">
				<div onClick={() => setLightOn(prev => {
					return prev === "red" ? "" : "red"
				})}
					className={"light red" + (lightOn === "red" ? " glow" : "")
					}></div>
				<div onClick={() => setLightOn(prev => {
					return prev === "yellow" ? "" : "yellow"
				})}
					className={"light yellow" + (lightOn === "yellow" ? " glow" : "")
					}></div>
				<div onClick={() => setLightOn(prev => {
					return prev === "green" ? "" : "green"
				})}
					className={"light green" + (lightOn === "green" ? " glow" : "")
					}></div>
			</div>
		</React.Fragment>
	);
}

export default Home;
