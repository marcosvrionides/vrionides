import React, { useLayoutEffect, useRef, useState } from "react";
import "./Title.css";

// Add a project here and it gets its own link and connector line.
const projects = [
	{ name: "leaderboards", url: "https://leaderboards.vrionides.com" },
	{ name: "marcos", url: "https://marcos.vrionides.com" },
];

const CONNECTOR_HEIGHT = 120;

const Title = () => {
	const innerRef = useRef(null);
	const linkRefs = useRef([]);
	const [layout, setLayout] = useState({ width: 0, ends: [] });

	// Measure each link's centre so every line lands on its own project.
	useLayoutEffect(() => {
		const inner = innerRef.current;
		if (!inner) return undefined;

		const measure = () => {
			const box = inner.getBoundingClientRect();
			const ends = linkRefs.current
				.filter(Boolean)
				.map((link) => {
					const rect = link.getBoundingClientRect();
					return rect.left + rect.width / 2 - box.left;
				});
			setLayout({ width: box.width, ends });
		};

		measure();
		if (typeof ResizeObserver === "undefined") return undefined;
		const observer = new ResizeObserver(measure);
		observer.observe(inner);
		return () => observer.disconnect();
	}, []);

	const start = layout.width / 2;
	const h = CONNECTOR_HEIGHT;

	return (
		<main className="hero" aria-labelledby="hero-title">
			<div className="hero__inner" ref={innerRef}>
				<h1 className="hero__title" id="hero-title">
					welcome to vrionides.com
				</h1>

				<svg
					className="connectors"
					width={layout.width}
					height={h}
					aria-hidden="true"
				>
					{layout.ends.map((end, i) => (
						<path
							key={projects[i].url}
							className="connector"
							pathLength="1"
							d={`M${start} 0 C${start} ${h * 0.5}, ${end} ${h * 0.5}, ${end} ${h}`}
						/>
					))}
				</svg>

				<nav className="projects" aria-label="Projects">
					{projects.map((project, i) => (
						<a
							key={project.url}
							ref={(el) => (linkRefs.current[i] = el)}
							className="project-link"
							href={project.url}
						>
							<span className="project-link__name">{project.name}</span>
							<span className="project-link__url">
								{new URL(project.url).host}
							</span>
						</a>
					))}
				</nav>
			</div>
		</main>
	);
};

export default Title;
