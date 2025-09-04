const Projects = () => {
  const projects = [
    {
      title: "Weather Forecasting",
      description:
        "A responsive weather app built with React and Tailwind CSS that fetches real-time data from the OpenWeatherMap API. This project showcases geolocation support, API integration, component-based design, and clean UI/UX principles.",
      tech: ["React.js", "Tailwind CSS"],
      github:"https://github.com/gaurav-1321/React-Weather-App",

    },
    {
      title: "Dictionary App",
      description:
        "A responsive dictionary app built with React and CSS that fetches real-time word definitions from a public dictionary API. It supports search functionality, antonyms, synonyms, and example usage, providing an educational experience.",
      tech: ["React.js", "Tailwind CSS"],
      github:"https://github.com/gaurav-1321/Dictionary-App"
    },
    {
      title: "Random & Searchable GIF Generator",
      description:
        "A web app built with React.js and Tailwind CSS that fetches GIFs from the Giphy API. Users can view random GIFs or search by keywords for an interactive experience.",
      tech: ["React.js", "Tailwind CSS",],
      github:"https://github.com/gaurav-1321/Random-Gif-Generator-",
      
    },{
      title:"Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience. It features responsive design, smooth and reusable components for scalability.",
        tech:["React.js","Tailwind Css"],
        github:"https://github.com/gaurav-1321/Portfolio"

    }
  ];

  return (
    <section id="Projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-1/2 inline-block bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg hover:bg-gray-700 transition"
                >
                  View on GitHub
                </a>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
