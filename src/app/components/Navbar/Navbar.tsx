import React from 'react';
import './Navbar.scss'

// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Components 
import Menu from '../Menu/Menu';

// Define props
interface NavbarProps {

}

class Navbar extends React.Component<NavbarProps> {


  constructor(props:any){
    super(props)
    // Define states here
    this.state = {
      selectedMenu: ''
    };

}



  motions: any = [
    {header: "Найдите то что нужно у нас", description: "Следите по нашим новым релизам, промоутингом, и больше", link: "/", linkText: "Зарегистроваться бесплатно или Войти"},
    {header: "Найдите то что нужно у нас", description: "Следите по нашим новым релизам, промоутингом, и больше", link: "/", linkText: "Зарегистроваться бесплатно или Войти"}
  ]

render() {
  return ( 
    <main className='nav'>
      <nav>
        <div className="nav-wrapper container">
    {/* <!-- HEADER SECTION --> */}
          <header>
            <div className="logo"> <a href="/">Shoes.kz</a></div>
            <div className="controls">
              <div className="control search"><img src="assets/icons/search.svg" alt=""/><input type="text" placeholder="Поиск товаров..."/></div>
              <div className="control store"><img src="assets/icons/location.svg" alt=""/>Наш адрес</div>
              <div className="control account"><img src="assets/icons/account.svg" alt=""/>Аккаунт</div>
              <div className="control bag"><img src="assets/icons/bag.svg" alt=""/>Сумка</div>
            </div>
          </header>
          
    {/* <!-- HEADER SECTION END-->
        <!-- MENU SECTION --> */}
        <Menu />
        {/* // <!-- MENU SECTION --> */}

        </div>
  {/* //  <!-- MOTION SECTION --> */}

<div className="motion">
  <div className="container">

<Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation = {true}
    >
      {this.motions.map((motion:any)=> {
     return <>
            <SwiperSlide> 
              <div className="content">
                <strong>{motion.header}<br/>{motion.description}</strong>
                <a href="/">{motion.linkText}</a>
              </div>
            </SwiperSlide>
        </>
      })}
    
    </Swiper>
     
    </div>
  </div>

  
{/* 
    <!-- MOTION SECTION --> */}
  </nav>

</main>

    )
  }
}

export default Navbar;