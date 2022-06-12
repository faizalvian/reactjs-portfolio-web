import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="#about">
      <SectionDivider />
      <br />
      <SectionTitle>Tentang</SectionTitle>
      <SectionText style={{ width: "100%", textAlign: "justify" }}>
        {/* Kesibukan saya saat ini adalah sebagai seorang Fullstack Web Developer di salah
        satu perusahaan di Jakarta, dan juga dibeberapa kesempatan aktif
        sebagai seorang freelancer untuk pengembangan aplikasi website. 
        Berbekal pengalaman 3 tahun sebagai seorang web developer, saya mampu bekerja secara profesional dan terus belajar hal baru 
        dengan cepat. */}
        Selamat datang di profil sederhana saya. Perkenalkan saya Faiz, saya
        seorang Front-End Developer. Saya terbiasa membuat project menggunakan
        React Js, saya menggunakan Git sebagai version control dan Github untuk
        menyimpan semua code project saya. Saya sedang mencari kesempatan untuk
        bisa bekerja sebagai Front-End Developer di perusahaan yang kolaboratif.
      </SectionText>
    </Section>
  );
};

export default Timeline;
