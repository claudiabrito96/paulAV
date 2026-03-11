import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Paul AV Logo"
          />

          <span className="font-bold text-xl">
            Paul AV Solutions
          </span>

        </div>

        <div className="hidden md:flex gap-6 text-lg">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}

      <section className="text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Professional Audio Visual Solutions
        </h1>

        <p className="mt-6 text-lg max-w-xl mx-auto">
          We design and install professional AV systems for homes,
          businesses, and live events.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-lg"
        >
          Request a Quote
        </a>

      </section>


      {/* SERVICES */}

      <section
        id="services"
        className="py-20 px-6 bg-gray-50"
      >

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl">
              Home Theater Installation
            </h3>
            <p className="mt-2">
              Custom home theater systems with premium sound
              and immersive viewing experiences.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl">
              Corporate AV Systems
            </h3>
            <p className="mt-2">
              Conference rooms, meeting spaces, and corporate
              presentation systems.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl">
              Event Production
            </h3>
            <p className="mt-2">
              Professional audio, lighting, and video systems
              for events and productions.
            </p>
          </div>

        </div>

      </section>


      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="py-20 px-6"
      >

        <h2 className="text-4xl font-bold text-center">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">

          <Image
            src="/project1.jpg"
            width={400}
            height={300}
            alt="AV installation project"
            className="rounded-lg"
          />

          <Image
            src="/project2.jpg"
            width={400}
            height={300}
            alt="Conference room AV setup"
            className="rounded-lg"
          />

          <Image
            src="/project3.jpg"
            width={400}
            height={300}
            alt="Event AV system"
            className="rounded-lg"
          />

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="py-20 px-6 bg-gray-50"
      >

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <form className="max-w-xl mx-auto mt-10 flex flex-col gap-4">

          <input
            placeholder="Name"
            className="border p-3 rounded"
          />

          <input
            placeholder="Email"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Tell us about your project"
            className="border p-3 rounded"
          />

          <button
            className="bg-black text-white p-4 rounded"
          >
            Send Message
          </button>

        </form>

      </section>


      {/* FOOTER */}

      <footer className="text-center p-6 border-t">
        © {new Date().getFullYear()} Paul AV Solutions
      </footer>

    </main>
  );
}