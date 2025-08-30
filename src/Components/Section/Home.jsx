import Revealonscroll from '../Revealonscroll';
const Home = () => {
  return (
    <section id="home" className='min-h-screen flex items-center justify-center bg-black relative px-4'>
      <div className="text-center max-w-2xl">
<Revealonscroll/>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
          Hi,I'm Gaurav Singh Panwar
        </h1>
        <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
        I'm a passionate Web Developer focused on building fast, responsive, and user-friendly websites.
I love turning ideas into real-world digital experiences.
Whether it's a sleek landing page or a dynamic web app — I build with purpose and precision.
<br/>
Let's create something amazing together!
 </p>

        <div className='flex-justify-center space-x-4'>
          <a href="#Projects" className='bg-blue-500 text-white py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-slate-500'>
            View Projects
          </a>
          <a href="#contact " className='bg-blue-500 text-white py-3 px-6 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-500 '>
            Contact Me
          </a>

        </div>
      </div>
    



    </section>
  )
}

export default Home
