import React, { useState } from 'react';

function App() {
  // Стейт для модалка с изображением
  const [modalImg, setModalImg] = useState(null);

  // Данные туров
  const tours = [
    {
      title: "Экспедиция в Гималаи",
      description: "Пешие походы и восхождения в высокие горы.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Круиз по Карибам",
      description: "Отдых на яхте в теплом море с красивыми пляжами.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Сафари в Африке",
      description: "Увидеть диких животных в их естественной среде.",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Культурное путешествие по Италии",
      description: "Исследуйте исторические города, вкусите местную кухню.",
      img: "https://images.unsplash.com/photo-1549924310-590fbded9134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Обработка клика по навигационной ссылке
  const handleNav = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Открытие модалки
  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
  }

  // Закрытие модалки
  const closeModal = () => {
    setModalImg(null);
  }

  return (
    <>
      <header>
        <h1>Путешествия и приключения</h1>
      </header>
      <nav>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>О нас</a>
        <a href="#tours" onClick={(e) => { e.preventDefault(); handleNav('tours'); }}>Туры</a>
        <a href="#contacts" onClick={(e) => { e.preventDefault(); handleNav('contacts'); }}>Контакты</a>
      </nav>

      <section id="about">
        <h2>О нас</h2>
        <p>Мы специализируемся на организации уникальных путешествий по всему миру. Дарим незабываемые впечатления, обеспечивая комфорт и безопасность каждому клиенту. Наши гиды — опытные искатели приключений, готовы показать вам самые красивые уголки планеты.</p>
      </section>

      <section id="tours">
        <h2>Лучшие туры</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          {tours.map((tour, index) => (
            <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', background: '#fff', cursor:'pointer' }}
                onClick={() => openModal(tour.img)}>
              <img src={tour.img} alt={tour.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <h3 style={{ margin: '10px' }}>{tour.title}</h3>
              <p style={{ margin: '0 10px 10px', fontSize:'0.95em' }}>{tour.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacts">
        <h2>Контакты</h2>
        <ul>
          <li>Телефон: +7 123 456 78 90</li>
          <li>Email: info@adventure.travel</li>
          <li>Адрес: г. Москва, ул. Путешественников, д.10</li>
        </ul>
      </section>

      {modalImg && (
        <div onClick={closeModal} style={{
          position:'fixed', top:0, left:0, width:'100%', height:'100%',
          background:'rgba(0,0,0,0.7)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:999
        }}>
          <img src={modalImg} alt="Фотография тура" style={{ maxWidth:'90%', maxHeight:'80%', borderRadius:'8px' }} />
        </div>
      )}

      <footer style={{ background:'#333', color:'#fff', textAlign:'center', padding:'15px 20px', marginTop:'40px' }}>
        &copy; 2025 Путешествия и приключения. Все права защищены.
      </footer>
    </>
  );
}

export default App;