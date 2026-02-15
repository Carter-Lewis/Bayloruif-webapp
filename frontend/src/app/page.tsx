import StatItem from "@/components/StatItem";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <div className="hero h-screen w-screen relative" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center 0%" }}>
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.6) 75%)"
          }}
        />
        <div className="text-left ml-65 my-75 relative z-10">
          <h1 className="text-7xl font-bold text-white">Baylor University <br/> Innovation Fellows</h1>
          <p className="mt-4 text-white font-light text-2xl">Bringing Innovative Ideas to Baylor University</p>
        </div>
      </div>

        <div className="h-screen flex flex-col items-center justify-center pt-8 mx-auto mt-16 bg-white w-full">
            <h2 className={"text-black text-7xl font-extrabold"}>OUR MISSION & IMPACT</h2>
            <p className={"mt-4 mb-8 text-center"}>We are revolutionizing the landscape of Baylor University with innovative <br/>projects and research that seek to shape the future of higher education.</p>
            <div className="flex flex-row justify-center items-center gap-24 w-full px-16 mt-16">
                <div className="flex flex-col gap-4 items-start justify-start">
                    <StatItem number={"7"} label={"Fellows"}/>
                    <StatItem number={"10+"} label={"Industry and University Partners"}/>
                    <StatItem number={"5"} label={"Stakeholder Meetings"}/>
                    <StatItem number={"$25k+"} label={"Raised for cohorts and project investment"}/>
                </div>
                <img src={"Screenshot 2026-02-15 at 4.47.53 PM.png"} className={"h-150"}/>
            </div>
        </div>
    </main>
  );
}
