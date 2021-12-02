import "./footer.scss";
import React from "react";
import { Icon,} from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content item1">
        <h3>Thông Tin Liên Hệ</h3>
        <ul>
          <li>
            {/* <Icon name="home" /> */}
            <a href="">36 Nguyễn Tất Thành-Đông Anh-Hà Nội</a>
          </li>
          <li>
            {/* <Icon name="mail" /> */}
            <a href="">phantanphu1505@gmail.com</a>
          </li>
          <li>
            {/* <Icon name="phone" /> */}
            <a href="">0835129813</a>
          </li>
          <li>
            {/* <Icon name="time" /> */}
            <a href="">Thời gian làm viêc 8:00-16:30</a>
          </li>
        </ul>
      </div>
      <div className="footer-content tem2">
        <h3>Dịch Vụ</h3>
        <ul>
          <li>
            <a href="">Ẩm Thực Nhà Hàng</a>
          </li>
          <li>
            <a href="">Khách Sạn Nghỉ Dưỡng</a>
          </li>
          <li>
            <a href="">Thuê Xe Tự Lái</a>
          </li>
          <li>
            <a href="">Máy Bay Nội Địa</a>
          </li>
        </ul>
      </div>
      <div className="footer-content item3">
        <h3>Chính Sách</h3>
        <ul>
          <li>
            <a href="">Hóa Đơn Thanh Toán</a>
          </li>
          <li>
            <a href="">Hóa Đơn Tour</a>
          </li>
        </ul>
      </div>
      <div className="footer-content item4">
        <h3>Tour Hót Hiện Nay</h3>
        <ul>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour Nha Trang</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour Đà Lạt</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour SaPa</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour Đà Nẵng</a>{" "}
          </li>
        </ul>
      </div>
      <div className="footer-content item6">
        <h3>Chính Sách</h3>
        <ul>
          <li>
            <a href="">Hóa Đơn Thanh Toán</a>
          </li>
          <li>
            <a href="">Hóa Đơn Tour</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
