export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="hero h-screen w-screen relative" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center 0%" }}>
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.6) 100%)" 
          }}
        />
        <div className="text-left ml-75 my-75 relative z-10">
          <h1 className="text-8xl font-bold text-white">Baylor University <br/> Innovation Fellows</h1>
          <p className="mt-4 text-white text-2xl">Bringing Innovative Ideas to Baylor University</p>
        </div>
      </div>
    </main>
  );
}
