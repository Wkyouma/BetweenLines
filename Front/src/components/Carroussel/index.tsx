import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {getLivros} from '../../services/livros'
import CardLivro from "../Card";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SliderItem = styled.div`
  padding: 10px;
  background-color: aliceblue;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 5,
    arrows: true,
  };
  interface TypeLivro {
    nome: string;
    src: string;
    id: number;
    data_publicacao:number;
  }
  const [livros, setLivros] = useState<TypeLivro[]>([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const LivroApi = await getLivros();
      console.log('Livros recebidos do backend:', LivroApi);  
      setLivros(LivroApi);
    };
    fetchLivros();
    }, []);

  return (
    <Container>
      <Slider {...settings}>
        {livros.map((item) => {
            return (
              <SliderItem key={item.id}>
                <CardLivro id={item.id} nome={item.nome} />
              </SliderItem>
            );
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;