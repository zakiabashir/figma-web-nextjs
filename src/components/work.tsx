import Image from 'next/image';

export default function Work() {
  const works = [
    {
      id: 1,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/pic1.png', // Example image path, replace with actual image
    },
    {
      id: 2,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/pic2.png',
    },
    {
      id: 3,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/pic3.png',
    },
  ];

  return (
    <section id='work' className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Featured Works</h2>
      <div className="space-y-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Image */}
            <Image
              src={work.image}
              alt={work.title}
              width={150}
              height={150}
              className="rounded-lg"
            />

            {/* Content */}
            <div>
              
              <h3 className="text-xl font-bold">{work.title}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-red-500 text-white my-2 px-2 py-1 rounded text-xs font-bold">
                  {work.year}
                </span>
                <span className="text-gray-500 text-sm">{work.category}</span>
              </div>
              <p className="text-gray-700">{work.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
