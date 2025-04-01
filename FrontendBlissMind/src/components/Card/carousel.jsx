import { Card, Carousel } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import './carousel.css'

const CardCarousel = ({LinkVideos}) => {
    return (
        <Card className='card-carousel' title="Recomendaciones de la semana" extra={<ExportOutlined style={{ fontSize: 16 }} />}>
            <Carousel arrows className='carousel'>
            {LinkVideos.map((Link, index) => (
            <div key={index}>
              <img 
                src={Link} 
                alt={`Miniatura YouTube ${index + 1}`} 
                className='carousel-item'
                onError={(e) => {
                  // Si falla la imagen de mayor calidad, intentar cargar una alternativa
                  if (index === 0) {
                    e.target.src = LinkVideos[1];
                  }
                }}
              />
            </div>
          ))}
            </Carousel>
        </ Card>
    );
};

export default CardCarousel;