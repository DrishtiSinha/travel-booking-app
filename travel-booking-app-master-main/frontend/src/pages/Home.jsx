import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import img1 from "../assets/images/img01.jpg";
import img2 from "../assets/images/img02.jpg";
import img3 from "../assets/images/img03.jpg"
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========= hero content start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Let's Take the Leap.."} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  {" "}
                  A journey of a thousand miles begins with a single step.{" "}
                  
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  est labore vel pariatur nihil omnis quae reiciendis nostrum
                  necessitatibus ex iste, facere ducimus, dicta placeat
                  cupiditate voluptatibus magnam nam repudiandae?Lore
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={img1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={img2} alt=""/>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={img3} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ========= section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= featured tour section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore_"} />
              <h2 className="featured__tour-title"> Some of our Elites</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========= featured tour section end =================== */}

      {/* ========= experience section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  {" "}
                  Experiencing over a decade with Passionate Travellers {" "}
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Et temporibus blanditiis, omnis esse maiores b.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span> 10k+</span>
                  <h6><b> Successful trip</b></h6>
                </div>
                <div className="counter__box">
                  <span> 2.5k+</span>
                  <h6> <b>Regular Clients</b></h6>
                </div>
                <div className="counter__box">
                  <span> 12</span>
                  <h6><b> Years Experience</b></h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= experience section end =================== */}

      {/* ========= gallery section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= gallery section end =================== */}

      {/* ========= testimonial section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Feedbacks"} />
              <h2 className="testimonial__title">
                {" "}
                What our customers say about us{" "}
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= testimonial section end =================== */}
      <Newsletter />
    </>
  );
};

export default Home;
