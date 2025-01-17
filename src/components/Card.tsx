export const Card = () => {
  const cardData = [
    {
      id: 1,
      image: '/src/assets/images/alex-knight-j4uuKnN43_M-unsplash.jpg',
      title: 'HEHE',
      description: 'HOHO',
    },
    {
      id: 2,
      image: '/src/assets/images/alex-knight-j4uuKnN43_M-unsplash.jpg',
      title: 'AD',
      description: 'ADS',
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {/* Card */}
        {cardData.map((card) => (
          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src={card.image} alt="" />
              </div>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
