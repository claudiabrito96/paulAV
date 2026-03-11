 export default function Portfolio() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Previous Projects</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <img src="/project1.jpg" />
        <img src="/project2.jpg" />
        <img src="/project3.jpg" />
      </div>
    </main>
  )
}