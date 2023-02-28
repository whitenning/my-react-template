import { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <main>
  <nav>
  <div className="nav-wrapper container">
    {/* <!-- HEADER SECTION --> */}
    <header>
      <a href="/">Shoes.kz</a>
      <div className="controls">
        <div className="control search"><img src="assets/icons/search.svg" alt="" /><input type="text" placeholder="Поиск товаров..." /></div>
        <div className="control store"><img src="assets/icons/location.svg" alt="" />Наш адрес</div>
        <div className="control account"><img src="assets/icons/account.svg" alt="" />Аккаунт</div>
        <div className="control bag"><img src="assets/icons/bag.svg" alt="" />Сумка</div>
  
      </div>
    </header>
    {/* <!-- HEADER SECTION END-->

        <!-- MENU SECTION --> */}
          {/* <ul className="menu-container">
              <li className="menu" (mouseover)="selectedMenu='Новинки'" (mouseleave)="selectedMenu=''">Новинки<app-submenu className="sub-menu" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Мужской'" (mouseleave)="selectedMenu=''">Мужской<app-submenu className="sub-menu"*ngIf="selectedMenu === 'Мужской'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Женский'" (mouseleave)="selectedMenu=''">Женский<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Женский'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Подросковый'" (mouseleave)="selectedMenu=''">Подросковый<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Подросковый'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Для девочек'" (mouseleave)="selectedMenu=''">Для девочек<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Для девочек'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Акссесуары'" (mouseleave)="selectedMenu=''">Акссесуары<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Акссесуары'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Скидки'" (mouseleave)="selectedMenu=''">Скидки<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Скидки'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Брендовые'" (mouseleave)="selectedMenu=''">Брендовые<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Брендовые'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Ходовые'" (mouseleave)="selectedMenu=''">Ходовые<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Ходовые'" [selectedMenu]="selectedMenu"></app-submenu></li>
              <li className="menu" (mouseover)="selectedMenu='Релизы'" (mouseleave)="selectedMenu=''">Релизы<app-submenu className="sub-menu" *ngIf="selectedMenu === 'Релизы'" [selectedMenu]="selectedMenu"></app-submenu></li>
          </ul> */}
        {/* // <!-- MENU SECTION --> */}

       
  </div>
  {/* //  <!-- MOTION SECTION --> */}

 


<div className="motion">
  <div className="container">
    {/* <swiper [config]="config" #customSwiper>
      <ng-template swiperSlide *ngFor="let motion of motions">
       <div className="content">
        <strong>{{motion.header}}<br>{{motion.description}}</strong>
        <a href="{{motion.link}}">{{motion.linkText}}</a>
       </div>
      </ng-template>  
    
    </swiper> */}
    </div>
  </div>

  

    {/* <!-- MOTION SECTION --> */}
  </nav>
  
</main>
   </>
  )
}

export default App
