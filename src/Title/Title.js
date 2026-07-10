import React from "react";
import "./Title.css";

const Title = () => {
	return (
		<main className="hero" role="main" aria-label="Welcome">
			<div className="hero__inner">
				<h1 className="hero__title">welcome to vrionides.com</h1>
				<svg
					className="connectors"
					viewBox="0 0 100 120"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<path
						className="connector"
						d="M10 0 C42 28, 0 50, 40 125"
					/>
					<path
						className="connector"
						d="M40 0 C50 34, 40 50, 50 125"
					/>
					<path
						className="connector"
						d="M100 0 C58 28, 100 50, 60 125"
					/>
				</svg>

				<nav className="projects" aria-label="Projects">
					<a
						className="project-link"
						href="https://leaderboards.vrionides.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						leaderboards.vrionides.com
					</a>
				</nav>
			</div>
		</main>
	);
};

export default Title;
