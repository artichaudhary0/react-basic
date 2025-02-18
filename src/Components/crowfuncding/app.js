// App.js
import React from 'react';
import Project from './components/Project';
import './App.css';
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<h1>GeeksForGeeks</h1>
			<div className='project-container'>
				<h1>CrowdFunding</h1>
				<div className="project-list">
					<Project goal={1000} projectNumber={1} />
					<Project goal={500} projectNumber={2} />
					<Project goal={2000} projectNumber={3} />
					<Project goal={1500} projectNumber={4} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
