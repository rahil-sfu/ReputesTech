import './App.css';

export default function App() {
  return (
   <main>        
     <div className="header">
       <nav>
         <img src="public/ReputeTech_Horizontal Logo_Digital_72ppi-01.png" alt="ReputeTech Logo" className="logo" />
         <ul>
           <li><a href="src/about.html">About</a></li>
           <li><a href="src/benefits.html">Why Choose Us</a></li>
           <li><a href="src/contact.html">Contact</a></li>
         </ul>
         {/* <a href="#" className="btn">Login</a> */}
       </nav>

        <video src="video2.mp4" autoPlay loop muted />

       <div className="content">
           <h1>Welcome to Reputes Tech</h1>
           <h2>Building Appetizing Solutions, One Byte at a Time</h2>
           <a href="src/benefits.html" className="btn">Get Started</a>
       </div>
     </div>
   </main>
  )
}

