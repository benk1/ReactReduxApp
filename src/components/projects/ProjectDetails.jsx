import React from 'react';

function ProjectDetails({ match }) {
	const id = match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque
						quo culpa beatae quibusdam, aut corrupti reprehenderit distinctio,
						fuga, porro blanditiis adipisci consequatur. Harum tempore voluptas
						praesentium et modi libero.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Ben K</div>
					<div>10th October, 16:00</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
