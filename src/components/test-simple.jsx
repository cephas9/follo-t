export function SimpleTest() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold text-black mb-4">Simple Test Component</h1>
      <div className="bg-blue-100 p-4 rounded">
        <p className="text-blue-800">If you can see this blue box with text, Tailwind is working.</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-red-100 p-4 rounded">
          <p className="text-red-800">Red box</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <p className="text-green-800">Green box</p>
        </div>
      </div>
    </div>
  )
}
