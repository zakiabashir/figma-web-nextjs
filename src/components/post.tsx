export default function Post() {
  return (
    <div>
      {/* Post Section */}
      <section id="post" className="my-10 px-5  py-10 bg-red-400 bg-opacity-20">
        <div>
          {/* Heading Section */}
          <div className="flex justify-between px-5 sm:px-10 md:px-20 lg:px-56">
            <h2 className="text-lg font-bold">Recent Posts</h2>
            <h2 className="text-lg font-bold">View All</h2>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 sm:mx-10 md:mx-20 lg:mx-56 mt-8">
            {/* Post 1 */}
            <div className="p-5 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-semibold">Making a design system from scratch</h3>
              <p className="text-sm text-gray-500">12 Feb 2022 - Design, Pattern</p>
              <p className="mt-2">An article about building a design system from scratch with focus on reusability.</p>
            </div>

            {/* Post 2 */}
            <div className="p-5 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-semibold">How to build a strong portfolio</h3>
              <p className="text-sm text-gray-500">14 Feb 2022 - Career, Portfolio</p>
              <p className="mt-2">Learn the key tips to building a strong portfolio that stands out.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
