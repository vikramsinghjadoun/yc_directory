export default function About() {
  return (
    <div className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-4">
        About Us
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our About page. We are a passionate team dedicated to building amazing web experiences using Next.js and modern web technologies.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to create fast, responsive, and user-friendly applications that make a difference.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Our Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Next.js 15</li>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
