
import emailjs from '@emailjs/browser';
import Revealonscroll from "../Revealonscroll";
export const Contact =() =>{

const handlesubmit=(e)=>{
  e.preventDefault();
  emailjs.sendForm();
}



  return (
    <section id="contact"
    className="min-h-screen flex items-center justify-center py-20">
      <Revealonscroll/>
<div className="px-4 w-150">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{""}
    Get In Touch
  </h2>
  <form className="space-y-6">
  <div className="relative">
    <input type="text" id="name" required 
    className="w-full px-5 py-5 md:py-6 rounded-lg bg-white/10 border border-white/15 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
    placeholder="Name..."
    ></input>
  </div>
   <div className="relative">
    <input type="email" id="email" required className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="example@gmail.com"
    ></input>
  </div>
  <div className="relative">
    <textarea type="message" id="message" required 
    rows={5}
   className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="your message..."
    />
  </div>
<button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-md hover:from-blue-600 hover:to-cyan-500 transition shadow-lg"> Send Message </button>
<br/>
<br/>
<a 
  href="https://www.linkedin.com/in/gaurav-singh-panwar-073b06257/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full bg-blue-500 text-white py-3 px-7 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-slate-500"
>
  Connect on Linkedin 
</a>
  </form>

</div>
    </section>
  )
}