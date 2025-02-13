import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import items from '../Pesquisar/Dados.json'
import CardLivro from "../Card";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
  };



  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {items.map((item, index) => {
          if(item.Data > 0){
            return(
          <div key={index} style={{ padding: "10px" }}>
              <CardLivro id={index} nome={item.nome}></CardLivro>
            </div>)}
          return null;})}
      </Slider>
    </div>
  );
};

export default Carousel;



