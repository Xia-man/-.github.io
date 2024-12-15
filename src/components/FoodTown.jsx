import React from 'react';
import './FoodTown.css';

function FoodTown() {
  const carouselImages = [
    {
      id: 1,
      src: '/images/town/scene1.jpg',
      alt: '快乐农场'
    },
    {
      id: 2,
      src: '/images/town/scene2.jpg',
      alt: '热闹市场'
    },
    {
      id: 3,
      src: '/images/town/scene3.jpg',
      alt: '美食餐厅'
    },
    {
      id: 4,
      src: '/images/town/scene4.jpg',
      alt: '开心果园'
    }
  ];

  return (
    <div className="food-town">
      <div className="town-header">
        <h1 className="welcome-title">欢迎来到食语小镇</h1>
        <div className="image-carousel">
          <div className="carousel-container">
            {carouselImages.map((image) => (
              <div key={image.id} className="carousel-item">
                <img src={image.src} alt={image.alt} />
                <p className="image-caption">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="town-map">
        {/* 这里可以添加互动地图，让小朋友探索不同的食物来源 */}
        <div className="location farm">农场</div>
        <div className="location market">市场</div>
        <div className="location restaurant">餐厅</div>
      </div>
    </div>
  );
}

export default FoodTown; 