import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "../styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default class TeamCards extends Component {
  render() {
    return (
      <>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          className="teamSwiper"
        >
          <SwiperSlide>
            <div className="teamCard">
              <div className="teamCardImageContainer">
                <img
                  src="assets/images/team/calina_nicolescu-veselu.png"
                  alt="team member"
                  className="teamCardImage"
                />
              </div>
              <div className="teamCardInfo">
                <span style={{ marginBottom: 5 }}>
                  <b>Dr. Nicolescu-Veselu Călina</b>
                </span>
                <span>
                  Medicină fizică și de reabilitare - Kinetoterapie, Medicină
                  internă
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamCard">
              <div className="teamCardImageContainer">
                <img
                  src="assets/images/team/radita-tarachiu.png"
                  alt="team member"
                  className="teamCardImage"
                />
              </div>
              <div className="teamCardInfo">
                <span style={{ marginBottom: 5 }}>
                  <b>KT. Tarachiu Rădița</b>
                </span>
                <span>
                  Medicină fizică și de reabilitare - Kinetoterapie, Terapii
                  complementare
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamCard">
              <div className="teamCardImageContainer">
                <img
                  src="assets/images/team/viorel-tarachiu.png"
                  alt="team member"
                  className="teamCardImage"
                />
              </div>
              <div className="teamCardInfo">
                <span style={{ marginBottom: 5 }}>
                  <b>Manager Viorel Tarachiu</b>
                </span>
                <span>Sanatate publică și management</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
