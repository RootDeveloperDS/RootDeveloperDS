import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisarShowcase from "@/components/VisarShowcase";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <>
      {/* Particle canvas — VISAR mode only */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main content - Added pt-24 to push it below the fixed Navbar */}
      <main className="relative z-10 w-full overflow-x-hidden min-h-screen pt-24 pb-12">
        
        <HeroSection />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 mt-24">
          

          <AboutSection /> 
          <VisarShowcase />
          <ProjectGrid />
          <ExperienceTimeline />
          <TechStack />
          <ContactSection />
          
        </div>
      </main>

      <Footer />
    </>
  );
}


// import TechStack from "@/components/TechStack";

// export default function Home() {
//   return (
//     <>
//       {/* 🚨 WE ARE KILLING THE GHOST WRAPPERS 🚨 */}
//       {/* <ParticleCanvas /> */}
//       {/* <Navigation /> */}

//       {/* Forceful Inline Styles to override everything */}
//       <main 
//         style={{ 
//           padding: '60px', 
//           border: '10px solid #00f7ff', 
//           maxWidth: '1200px', 
//           margin: '0 auto' 
//         }} 
//         className="relative z-10 w-full min-h-screen flex flex-col"
//       >
//         <h1 style={{ color: 'white', marginBottom: '40px' }}>
//           IF YOU SEE THIS WITH A BLUE BORDER, WE FOUND THE BUG!
//         </h1>
        
//         <TechStack />
//       </main>

//       {/* <Footer /> */}
//     </>
//   );
// }

