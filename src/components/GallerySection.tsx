const GallerySection = () => {
  const galleryImages = [
    'photo-1461749280684-dccba630e2f6',
    'photo-1487058792275-0ad4aaf24ca7',
    'photo-1605810230434-7631ac76ec81',
    'photo-1519389950473-47ba0277781c',
    'photo-1498050108023-c5249f4df085'
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Gallery</h2>
        <p className="text-slate-300">Highlights from last year's Jet Potential event</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((imageId, index) => (
          <div key={index} className="group overflow-hidden rounded-lg bg-slate-800">
            <img
              src={`https://images.unsplash.com/${imageId}?w=500&h=300&fit=crop`}
              alt={`Jet Potential event ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;