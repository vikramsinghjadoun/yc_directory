import Image from "next/image";
import SearchBar from "../../components/SearchBar";

interface StartupCardType {
  _createdAt: string;
  views: number;
  author: { _id: number };
  _id: string;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query || "";
  const posts = [
    {
      _createdAt: "yesterday",
      views: 100,
      author: {_id:1},
      _id: "1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      category: "Tech",
      title: "Startup 1"
    }
  ]

  console.log("server/client");
  return (
    <>
    <div className="min-h-screen border-4 bg-pink-200 p-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 transform hover:-translate-y-1 transition-transform duration-200">
          <h1 className="text-6xl font-black mb-6 text-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            Pitch Your Startup
            <br />
            Connect with Entrepreneurs
          </h1>
          <p className="text-xl text-gray-700 mb-8 font-mono">
            Join our vibrant community of innovators and visionaries. Share your ideas,
            get valuable feedback, and connect with potential co-founders and investors
            who can help turn your startup dreams into reality.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-4 bg-pink-500 text-white font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Share Your Pitch
            </button>
            <button className="px-8 py-4 bg-blue-500 text-white font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Browse Startups
            </button>
          </div>
          <SearchBar query={query} />
        </div>
      </div>
    </div>
    <section className="max-w-4xl mx-auto mt-12 p-8">
      <h2 className="text-4xl font-bold mb-8 font-mono">
        {query ? `Search results for: ${query}` : 'All Startups'}
      </h2>
      {/* Startup cards grid will go here */}
      <div className="mt-7 card-grid">
    {posts?.length > 0 ? (
      posts.map((post: StartupCardType, index: number) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="text-gray-600">{post.description}</p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">{post.category}</span>
            <span className="text-sm text-gray-500 ml-4">{post.views} views</span>
          </div>
        </div>
      ))
    ) : (
      <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <p className="text-2xl font-mono font-bold">No Startups Found</p>
        <p className="mt-2 text-gray-600 font-mono">Try adjusting your search or browse all startups</p>
      </div>
    )}
      </div>
    </section>
    </>
  );
}
// /auth/[...nextauth]/route.ts