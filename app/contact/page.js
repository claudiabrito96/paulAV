export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <form className="flex flex-col gap-4 mt-6">
        <input placeholder="Name" className="border p-2" />
        <input placeholder="Email" className="border p-2" />
        <textarea placeholder="Project Details" className="border p-2"/>

        <button className="bg-black text-white p-3 rounded">
          Send Message
        </button>
      </form>
    </main>
  )
}