export default function Post(){
  return(
    <div>
      {/* // post section */}
      <section id="post" className="my-10 px-5 py-10 bg-red-400 bg-opacity-20  ">
        <div>
          <div className='flex justify-between ml-56 mr-56' >
  <h2 className="text-1xl font-bold text-center   mb-4">Recent Posts</h2>
  <h2 className="text-1xl font-bold text-center   mb-4">view all</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-56 mb-8">
    <div className="p-5 bg-gray-100 rounded shadow ">
      <h3 className="text-lg font-semibold">Making a design system from scratch</h3>
      <p className="text-sm text-gray-500">12 Feb 2022 - Design, Pattern</p>
      <p className="mt-2">An article about building a design system from scratch with focus on reusability.</p>
    </div>
    <div className="p-5 bg-gray-100 rounded shadow ">
      <h3 className="text-lg font-semibold">How to build a strong portfolio</h3>
      <p className="text-sm text-gray-500">14 Feb 2022 - Career, Portfolio</p>
      <p className="mt-2">Learn the key tips to building a strong portfolio that stands out.</p>
    </div>
  </div>
  </div>
</section>
    </div>
  )
}