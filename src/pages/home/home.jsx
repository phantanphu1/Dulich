import "./home.scss";
import React, { useState, useEffect } from "react";
import { Button, Segment } from "semantic-ui-react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Carousel from "react-multi-carousel";
import Card from "../../components/card/card";
import product from "../../assets/data/data";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    await setData(product);
  };

  useEffect(async () => {
    await fetchData();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="home-conten">
        <Carousel responsive={responsive}>
          <div>
            <img
              src="https://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://dulichtoday.vn/wp-content/uploads/2017/04/dao-Phu-Quoc.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://kingtravel.tv/upload/trung-gian/hoi_an_2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1YGnLmB1vcJ-xNjxB7LMcV6sQfSxUCwQrQ&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MdXIL85Pi6QrKfmSFw_XZlYzykH1PLI3fA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_12/Ng%C3%A0y%202/tin_dan/images1475425_anh_4._tac_pham_ve_dep_bien_vien_Pham_Hoai_Nam.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/06_2020/bi-kip-chinh-anh-tone-xanh-nhe-nhang.jpg"
              alt=""
            />
          </div>
        </Carousel>
        ;
      </div>
      <div className="content">
        <div className="content-position">
          <div className="content-img1">
            <h4>THE ART OF LETTING GO</h4>
            <h3>BEACH HOUSE EXPERENCE</h3>
            <Button content>VIEW MORE</Button>
          </div>
          <div className="content-position1">
            <div className="content-img2">
              <h4>MEMORABLE DISHES</h4>
              <h3>ANCH0R AND DEN</h3>
            <Button content>VIEW MORE</Button>
            </div>
          </div>
          <div className="content-position2">
            <div className="content-img3">
              <h4>CONCEPT</h4>
              <h3>ENERGY MEETINGS</h3>
              <Button content>VIEW MORE</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-card">
        <div className="content-center">
          <span>Popular Packages</span>
          <hr style={{ width: "10%" }} />
        </div>
        <Segment className="content-center1">
            {data.map(item => (
              <Card product={item} />
            ))}
        </Segment>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
