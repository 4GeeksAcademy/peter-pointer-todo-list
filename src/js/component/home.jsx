import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Task } from "./Task";

//create your first component
const Home = () => {
	return (
		<div className="text-center">			
			<h1 className="text-center mt-5"><span className="fa fa-check-circle text-success mx-2"></span>My ToDo list</h1>
			<Task />
		</div>
	);
};

export default Home;
