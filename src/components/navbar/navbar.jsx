import "./navbar.scss";
import React from "react";
import { Icon,Input} from 'semantic-ui-react'
function Navbar() {
  return (
    <div className="navbar">
     <a href="#"className="logo">Travel Around The World</a>
     <div className="menu">
         <ul>
             <li><Icon name='home'/><a href="">TRANG CHỦ</a></li>
             <li><Icon name='globe'/><a href="">GIỚI THIỆU</a></li>
             <li><Icon name='cart arrow down'/><a href="">SẢN PHẨM</a></li>
             <li><Icon name='phone'/><a href="">LIÊN HỆ</a></li>
         </ul>
     </div>
     <div className="search">
     <Input
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
              />
            }
            placeholder="Search..."
          />
         
     </div>
    </div>
  );
}
export default Navbar;
