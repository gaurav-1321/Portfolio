
const About = () => {
  const frontendskills = [
    'HTML5',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
  ];
  const backendskills = ['Node.Js', 'MongoDB', 'Express.Js','RESTful API'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a dedicated web developer with a strong foundation in front-end
            technologies like React, Tailwind CSS, and JavaScript. I enjoy
            crafting clean, accessible, and engaging web experiences that solve
            real-world problems. When I'm not coding, I'm exploring new
            frameworks, building side projects, or staying up to date with the
            latest tech trends.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/10">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/10">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
          <h3 className='text-xl font-bold mb-4'>Education </h3>
           <ul className='list-disc list-inside text-gray-300 space-y-2'>
            <li> 
              <strong>B.Tech in Computer Science</strong>-Quantum University [2022-2026]
            </li>
            <li>
              <strong> Core Subjects </strong> :Operating System,Computer Network, DBMS, OOPS.
             
            </li>
            <li>
              <strong>Relevant Coursework:</strong>  Data Structure & Algorithms, Web Development </li>
           </ul>
          </div>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
          <h3 className='text-xl font-bold mb-4'>Work Experience </h3>
          <div className='space-y-4 text-gray-300'>
            <div className='space-y-4 text-gray-300'>
            <h4>Web Developer</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Built and maintained responsive web applications using React.js and Tailwind CSS.</li>
        <li>Integrated REST APIs and optimized backend performance with Node.js and MongoDB.</li>
      </ul>
            </div>
          </div>
          </div>
  <a 
  href="https://github.com/gaurav-1321?tab=repositories" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-blue-500 text-white py-3 px-7 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-slate-500"
>
  View Projects On Git
</a>
        </div>
      </div>
    </section>
  );
};

export default About;
