import React from "react";
import SimpleCounter from "./counter.jsx"

//create your first component
const Home = (props) => {
	return (
		<div>
			<SimpleCounter />
			{props.second}
		</div>
	);
};

export default Home;
