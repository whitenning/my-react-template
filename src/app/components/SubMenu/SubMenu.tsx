import React from 'react';
import './SubMenu.scss'
interface SubMenuProps {
    selectedMenu:string
}

class SubMenu extends React.Component<SubMenuProps> {

constructor(props:any){
    super(props)
    this.state = {
        selectedMenu: ''
    } 
}

  
render() {
  return (
    <main className='sub-menu'>
    
   {this.props.selectedMenu === 'Новинки' ? 
   <section className="news container">
   <div className="arrival">
      <a href=""><img src="assets/images/mens.png" alt=""/></a>
      <a href=""  className="tag">Мужские новинки</a>
   </div>
   <div className="arrival">
       <a href=""><img src="assets/images/womens.png" alt=""/></a>
       <a href="" className="tag">Женские новинки</a>
    </div>
    <div className="arrival">
       <a href=""><img src="assets/images/boys.png" alt=""/></a>
       <a href=""  className="tag">Подросковые новинки</a>
    </div>
    <div className="arrival">
       <a href=""><img src="assets/images/girls.png" alt=""/></a>
       <a href=""  className="tag">Для девочек новинки</a>
    </div>
</section>
    : ''
    }
 {this.props.selectedMenu === 'Мужской' ?
    <section className="mens container">
    <div className="lists">
        <ul className="list">
            <strong>Shoes</strong>
            <li><a href="/"></a>Basketball </li>
            <li><a href="/">Running</a></li>
            <li><a href="/">Casual</a></li>
            <li><a href="/">Boots</a></li>
            <li><a href="/">Training & Cleats</a></li>
            <li><a href="/">Sandals, Slides & Slippers</a></li>
            <li><a href="/">Sizes 14-20</a></li>
            <li><a href="/">Best Sellers</a></li>
            <li><a href="/">Styles Under $100</a></li>
            <li><a href="/">All Shoes</a></li>
        </ul>
        
        <ul className="list">
            <strong>Clothing</strong>
            <li><a href="/">Hoodies & Sweatshirts</a></li>
            <li><a href="/">Sweatpants & Joggers</a></li>
            <li><a href="/">Jackets, Coats & Vests</a></li>
            <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
            <li><a href="/">Shorts & Swimwear</a></li>
            <li><a href="/">Matching Sets</a></li>
            <li><a href="/">Buy One Get One 50% Off Tees</a></li>
            <li><a href="/">Fan Gear & Jerseys</a></li>
            <li><a href="/">Socks & Underwear</a></li>
            <li><a href="/">Denim & Jeans</a></li>
            <li><a href="/">Styles Under $50</a></li>
            <li><a href="/">All Clothing</a></li>
        </ul>
        
        <ul className="list">
            <strong>Brands</strong>
            <li><a href="/">Nike</a></li>
            <li><a href="/">Jordan</a></li>
            <li><a href="/">Adidas</a></li>
            <li><a href="/">On</a></li>
            <li><a href="/">Timberland</a></li>
            <li><a href="/">The North Face</a></li>
            <li><a href="/">Converse</a></li>
            <li><a href="/">Brooks</a></li>
            <li><a href="/">Puma</a></li>
            <li><a href="/">Crocs</a></li>
            <li><a href="/">Birkenstock</a></li>
            <li><a href="/">Sorel</a></li>
            <li><a href="/">Goorin Bros</a></li>
        </ul>

        <ul className="list">
            <strong>Trending Now</strong>
            <li><a href="/">Trending Styles</a></li>
            <li><a href="/">Recent Releases</a></li>
            <li><a href="/">All White Styles</a></li>
            <li><a href="/">Pink Styles</a></li>
        </ul>
    </div>

    <div className="random-mens">
        <div className="arrival">
            <a href="/"><img src="assets/images/nike.png" alt=""/></a>
            <a href="/" className="tag">Nike Air Max</a>
         </div>
    </div>
    </section>
    : ''}

{this.props.selectedMenu === 'Женский' ?
    <section className="mens container">
        <div className="lists">
            <ul className="list">
                <strong>Shoes</strong>
                <li><a href="/"></a>Basketball </li>
                <li><a href="/">Running</a></li>
                <li><a href="/">Casual</a></li>
                <li><a href="/">Boots</a></li>
                <li><a href="/">Training & Cleats</a></li>
                <li><a href="/">Sandals, Slides & Slippers</a></li>
                <li><a href="/">Sizes 14-20</a></li>
                <li><a href="/">Best Sellers</a></li>
                <li><a href="/">Styles Under $100</a></li>
                <li><a href="/">All Shoes</a></li>
            </ul>
            
            <ul className="list">
                <strong>Clothing</strong>
                <li><a href="/">Hoodies & Sweatshirts</a></li>
                <li><a href="/">Sweatpants & Joggers</a></li>
                <li><a href="/">Jackets, Coats & Vests</a></li>
                <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                <li><a href="/">Shorts & Swimwear</a></li>
                <li><a href="/">Matching Sets</a></li>
                <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                <li><a href="/">Fan Gear & Jerseys</a></li>
                <li><a href="/">Socks & Underwear</a></li>
                <li><a href="/">Denim & Jeans</a></li>
                <li><a href="/">Styles Under $50</a></li>
                <li><a href="/">All Clothing</a></li>
            </ul>
            
            <ul className="list">
                <strong>Brands</strong>
                <li><a href="/">Nike</a></li>
                <li><a href="/">Jordan</a></li>
                <li><a href="/">Adidas</a></li>
                <li><a href="/">On</a></li>
                <li><a href="/">Timberland</a></li>
                <li><a href="/">The North Face</a></li>
                <li><a href="/">Converse</a></li>
                <li><a href="/">Brooks</a></li>
                <li><a href="/">Puma</a></li>
                <li><a href="/">Crocs</a></li>
                <li><a href="/">Birkenstock</a></li>
                <li><a href="/">Sorel</a></li>
                <li><a href="/">Goorin Bros</a></li>
            </ul>
    
            <ul className="list">
                <strong>Trending Now</strong>
                <li><a href="/">Trending Styles</a></li>
                <li><a href="/">Recent Releases</a></li>
                <li><a href="/">All White Styles</a></li>
                <li><a href="/">Pink Styles</a></li>
            </ul>
        </div>
    
        <div className="random-mens">
            <div className="arrival">
                <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                <a href="/" className="tag">Nike Air Max</a>
             </div>
        </div>
        </section>
    : ''}
    {this.props.selectedMenu === 'Подросковый' ?
        <section className="mens container" >
            <div className="lists">
                <ul className="list">
                    <strong>Shoes</strong>
                    <li><a href="/"></a>Basketball </li>
                    <li><a href="/">Running</a></li>
                    <li><a href="/">Casual</a></li>
                    <li><a href="/">Boots</a></li>
                    <li><a href="/">Training & Cleats</a></li>
                    <li><a href="/">Sandals, Slides & Slippers</a></li>
                    <li><a href="/">Sizes 14-20</a></li>
                    <li><a href="/">Best Sellers</a></li>
                    <li><a href="/">Styles Under $100</a></li>
                    <li><a href="/">All Shoes</a></li>
                </ul>
                
                <ul className="list">
                    <strong>Clothing</strong>
                    <li><a href="/">Hoodies & Sweatshirts</a></li>
                    <li><a href="/">Sweatpants & Joggers</a></li>
                    <li><a href="/">Jackets, Coats & Vests</a></li>
                    <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                    <li><a href="/">Shorts & Swimwear</a></li>
                    <li><a href="/">Matching Sets</a></li>
                    <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                    <li><a href="/">Fan Gear & Jerseys</a></li>
                    <li><a href="/">Socks & Underwear</a></li>
                    <li><a href="/">Denim & Jeans</a></li>
                    <li><a href="/">Styles Under $50</a></li>
                    <li><a href="/">All Clothing</a></li>
                </ul>
                
                <ul className="list">
                    <strong>Brands</strong>
                    <li><a href="/">Nike</a></li>
                    <li><a href="/">Jordan</a></li>
                    <li><a href="/">Adidas</a></li>
                    <li><a href="/">On</a></li>
                    <li><a href="/">Timberland</a></li>
                    <li><a href="/">The North Face</a></li>
                    <li><a href="/">Converse</a></li>
                    <li><a href="/">Brooks</a></li>
                    <li><a href="/">Puma</a></li>
                    <li><a href="/">Crocs</a></li>
                    <li><a href="/">Birkenstock</a></li>
                    <li><a href="/">Sorel</a></li>
                    <li><a href="/">Goorin Bros</a></li>
                </ul>
        
                <ul className="list">
                    <strong>Trending Now</strong>
                    <li><a href="/">Trending Styles</a></li>
                    <li><a href="/">Recent Releases</a></li>
                    <li><a href="/">All White Styles</a></li>
                    <li><a href="/">Pink Styles</a></li>
                </ul>
            </div>
        
            <div className="random-mens">
                <div className="arrival">
                    <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                    <a href="/" className="tag">Nike Air Max</a>
                 </div>
            </div>
            </section>
            : ''}

            {this.props.selectedMenu === 'Для девочек' ? 
            <section className="mens container">
                <div className="lists">
                    <ul className="list">
                        <strong>Shoes</strong>
                        <li><a href="/"></a>Basketball </li>
                        <li><a href="/">Running</a></li>
                        <li><a href="/">Casual</a></li>
                        <li><a href="/">Boots</a></li>
                        <li><a href="/">Training & Cleats</a></li>
                        <li><a href="/">Sandals, Slides & Slippers</a></li>
                        <li><a href="/">Sizes 14-20</a></li>
                        <li><a href="/">Best Sellers</a></li>
                        <li><a href="/">Styles Under $100</a></li>
                        <li><a href="/">All Shoes</a></li>
                    </ul>
                    
                    <ul className="list">
                        <strong>Clothing</strong>
                        <li><a href="/">Hoodies & Sweatshirts</a></li>
                        <li><a href="/">Sweatpants & Joggers</a></li>
                        <li><a href="/">Jackets, Coats & Vests</a></li>
                        <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                        <li><a href="/">Shorts & Swimwear</a></li>
                        <li><a href="/">Matching Sets</a></li>
                        <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                        <li><a href="/">Fan Gear & Jerseys</a></li>
                        <li><a href="/">Socks & Underwear</a></li>
                        <li><a href="/">Denim & Jeans</a></li>
                        <li><a href="/">Styles Under $50</a></li>
                        <li><a href="/">All Clothing</a></li>
                    </ul>
                    
                    <ul className="list">
                        <strong>Brands</strong>
                        <li><a href="/">Nike</a></li>
                        <li><a href="/">Jordan</a></li>
                        <li><a href="/">Adidas</a></li>
                        <li><a href="/">On</a></li>
                        <li><a href="/">Timberland</a></li>
                        <li><a href="/">The North Face</a></li>
                        <li><a href="/">Converse</a></li>
                        <li><a href="/">Brooks</a></li>
                        <li><a href="/">Puma</a></li>
                        <li><a href="/">Crocs</a></li>
                        <li><a href="/">Birkenstock</a></li>
                        <li><a href="/">Sorel</a></li>
                        <li><a href="/">Goorin Bros</a></li>
                    </ul>
            
                    <ul className="list">
                        <strong>Trending Now</strong>
                        <li><a href="/">Trending Styles</a></li>
                        <li><a href="/">Recent Releases</a></li>
                        <li><a href="/">All White Styles</a></li>
                        <li><a href="/">Pink Styles</a></li>
                    </ul>
                </div>
            
                <div className="random-mens">
                    <div className="arrival">
                        <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                        <a href="/" className="tag">Nike Air Max</a>
                     </div>
                </div>
                </section>
                : ''}

                {this.props.selectedMenu === 'Акссесуары' ?
                <section className="mens container">
                    <div className="lists">
                        <ul className="list">
                            <strong>Shoes</strong>
                            <li><a href="/"></a>Basketball </li>
                            <li><a href="/">Running</a></li>
                            <li><a href="/">Casual</a></li>
                            <li><a href="/">Boots</a></li>
                            <li><a href="/">Training & Cleats</a></li>
                            <li><a href="/">Sandals, Slides & Slippers</a></li>
                            <li><a href="/">Sizes 14-20</a></li>
                            <li><a href="/">Best Sellers</a></li>
                            <li><a href="/">Styles Under $100</a></li>
                            <li><a href="/">All Shoes</a></li>
                        </ul>
                        
                        <ul className="list">
                            <strong>Clothing</strong>
                            <li><a href="/">Hoodies & Sweatshirts</a></li>
                            <li><a href="/">Sweatpants & Joggers</a></li>
                            <li><a href="/">Jackets, Coats & Vests</a></li>
                            <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                            <li><a href="/">Shorts & Swimwear</a></li>
                            <li><a href="/">Matching Sets</a></li>
                            <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                            <li><a href="/">Fan Gear & Jerseys</a></li>
                            <li><a href="/">Socks & Underwear</a></li>
                            <li><a href="/">Denim & Jeans</a></li>
                            <li><a href="/">Styles Under $50</a></li>
                            <li><a href="/">All Clothing</a></li>
                        </ul>
                        
                        <ul className="list">
                            <strong>Brands</strong>
                            <li><a href="/">Nike</a></li>
                            <li><a href="/">Jordan</a></li>
                            <li><a href="/">Adidas</a></li>
                            <li><a href="/">On</a></li>
                            <li><a href="/">Timberland</a></li>
                            <li><a href="/">The North Face</a></li>
                            <li><a href="/">Converse</a></li>
                            <li><a href="/">Brooks</a></li>
                            <li><a href="/">Puma</a></li>
                            <li><a href="/">Crocs</a></li>
                            <li><a href="/">Birkenstock</a></li>
                            <li><a href="/">Sorel</a></li>
                            <li><a href="/">Goorin Bros</a></li>
                        </ul>
                
                        <ul className="list">
                            <strong>Trending Now</strong>
                            <li><a href="/">Trending Styles</a></li>
                            <li><a href="/">Recent Releases</a></li>
                            <li><a href="/">All White Styles</a></li>
                            <li><a href="/">Pink Styles</a></li>
                        </ul>
                    </div>
                
                    <div className="random-mens">
                        <div className="arrival">
                            <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                            <a href="/" className="tag">Nike Air Max</a>
                         </div>
                    </div>
                    </section>
                    : ''}
                    

                    {this.props.selectedMenu === 'Скидки' ?
                    <section className="mens container" >
                        <div className="lists">
                            <ul className="list">
                                <strong>Shoes</strong>
                                <li><a href="/"></a>Basketball </li>
                                <li><a href="/">Running</a></li>
                                <li><a href="/">Casual</a></li>
                                <li><a href="/">Boots</a></li>
                                <li><a href="/">Training & Cleats</a></li>
                                <li><a href="/">Sandals, Slides & Slippers</a></li>
                                <li><a href="/">Sizes 14-20</a></li>
                                <li><a href="/">Best Sellers</a></li>
                                <li><a href="/">Styles Under $100</a></li>
                                <li><a href="/">All Shoes</a></li>
                            </ul>
                            
                            <ul className="list">
                                <strong>Clothing</strong>
                                <li><a href="/">Hoodies & Sweatshirts</a></li>
                                <li><a href="/">Sweatpants & Joggers</a></li>
                                <li><a href="/">Jackets, Coats & Vests</a></li>
                                <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                                <li><a href="/">Shorts & Swimwear</a></li>
                                <li><a href="/">Matching Sets</a></li>
                                <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                                <li><a href="/">Fan Gear & Jerseys</a></li>
                                <li><a href="/">Socks & Underwear</a></li>
                                <li><a href="/">Denim & Jeans</a></li>
                                <li><a href="/">Styles Under $50</a></li>
                                <li><a href="/">All Clothing</a></li>
                            </ul>
                            
                            <ul className="list">
                                <strong>Brands</strong>
                                <li><a href="/">Nike</a></li>
                                <li><a href="/">Jordan</a></li>
                                <li><a href="/">Adidas</a></li>
                                <li><a href="/">On</a></li>
                                <li><a href="/">Timberland</a></li>
                                <li><a href="/">The North Face</a></li>
                                <li><a href="/">Converse</a></li>
                                <li><a href="/">Brooks</a></li>
                                <li><a href="/">Puma</a></li>
                                <li><a href="/">Crocs</a></li>
                                <li><a href="/">Birkenstock</a></li>
                                <li><a href="/">Sorel</a></li>
                                <li><a href="/">Goorin Bros</a></li>
                            </ul>
                    
                            <ul className="list">
                                <strong>Trending Now</strong>
                                <li><a href="/">Trending Styles</a></li>
                                <li><a href="/">Recent Releases</a></li>
                                <li><a href="/">All White Styles</a></li>
                                <li><a href="/">Pink Styles</a></li>
                            </ul>
                        </div>
                    
                        <div className="random-mens">
                            <div className="arrival">
                                <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                                <a href="/" className="tag">Nike Air Max</a>
                             </div>
                        </div>
                        </section>
                        : ''}
                        
                        {this.props.selectedMenu === 'Брендовые' ?
                            <section className="mens container">
                                <div className="lists">
                                    <ul className="list">
                                        <strong>Shoes</strong>
                                        <li><a href="/"></a>Basketball </li>
                                        <li><a href="/">Running</a></li>
                                        <li><a href="/">Casual</a></li>
                                        <li><a href="/">Boots</a></li>
                                        <li><a href="/">Training & Cleats</a></li>
                                        <li><a href="/">Sandals, Slides & Slippers</a></li>
                                        <li><a href="/">Sizes 14-20</a></li>
                                        <li><a href="/">Best Sellers</a></li>
                                        <li><a href="/">Styles Under $100</a></li>
                                        <li><a href="/">All Shoes</a></li>
                                    </ul>
                                    
                                    <ul className="list">
                                        <strong>Clothing</strong>
                                        <li><a href="/">Hoodies & Sweatshirts</a></li>
                                        <li><a href="/">Sweatpants & Joggers</a></li>
                                        <li><a href="/">Jackets, Coats & Vests</a></li>
                                        <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                                        <li><a href="/">Shorts & Swimwear</a></li>
                                        <li><a href="/">Matching Sets</a></li>
                                        <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                                        <li><a href="/">Fan Gear & Jerseys</a></li>
                                        <li><a href="/">Socks & Underwear</a></li>
                                        <li><a href="/">Denim & Jeans</a></li>
                                        <li><a href="/">Styles Under $50</a></li>
                                        <li><a href="/">All Clothing</a></li>
                                    </ul>
                                    
                                    <ul className="list">
                                        <strong>Brands</strong>
                                        <li><a href="/">Nike</a></li>
                                        <li><a href="/">Jordan</a></li>
                                        <li><a href="/">Adidas</a></li>
                                        <li><a href="/">On</a></li>
                                        <li><a href="/">Timberland</a></li>
                                        <li><a href="/">The North Face</a></li>
                                        <li><a href="/">Converse</a></li>
                                        <li><a href="/">Brooks</a></li>
                                        <li><a href="/">Puma</a></li>
                                        <li><a href="/">Crocs</a></li>
                                        <li><a href="/">Birkenstock</a></li>
                                        <li><a href="/">Sorel</a></li>
                                        <li><a href="/">Goorin Bros</a></li>
                                    </ul>
                            
                                    <ul className="list">
                                        <strong>Trending Now</strong>
                                        <li><a href="/">Trending Styles</a></li>
                                        <li><a href="/">Recent Releases</a></li>
                                        <li><a href="/">All White Styles</a></li>
                                        <li><a href="/">Pink Styles</a></li>
                                    </ul>
                                </div>
                            
                                <div className="random-mens">
                                    <div className="arrival">
                                        <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                                        <a href="/" className="tag">Nike Air Max</a>
                                     </div>
                                </div>
                                </section>
                                : ''}

                                {this.props.selectedMenu === 'Ходовые' ?
                                <section className="mens container" >
                                    <div className="lists">
                                        <ul className="list">
                                            <strong>Shoes</strong>
                                            <li><a href="/"></a>Basketball </li>
                                            <li><a href="/">Running</a></li>
                                            <li><a href="/">Casual</a></li>
                                            <li><a href="/">Boots</a></li>
                                            <li><a href="/">Training & Cleats</a></li>
                                            <li><a href="/">Sandals, Slides & Slippers</a></li>
                                            <li><a href="/">Sizes 14-20</a></li>
                                            <li><a href="/">Best Sellers</a></li>
                                            <li><a href="/">Styles Under $100</a></li>
                                            <li><a href="/">All Shoes</a></li>
                                        </ul>
                                        
                                        <ul className="list">
                                            <strong>Clothing</strong>
                                            <li><a href="/">Hoodies & Sweatshirts</a></li>
                                            <li><a href="/">Sweatpants & Joggers</a></li>
                                            <li><a href="/">Jackets, Coats & Vests</a></li>
                                            <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                                            <li><a href="/">Shorts & Swimwear</a></li>
                                            <li><a href="/">Matching Sets</a></li>
                                            <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                                            <li><a href="/">Fan Gear & Jerseys</a></li>
                                            <li><a href="/">Socks & Underwear</a></li>
                                            <li><a href="/">Denim & Jeans</a></li>
                                            <li><a href="/">Styles Under $50</a></li>
                                            <li><a href="/">All Clothing</a></li>
                                        </ul>
                                        
                                        <ul className="list">
                                            <strong>Brands</strong>
                                            <li><a href="/">Nike</a></li>
                                            <li><a href="/">Jordan</a></li>
                                            <li><a href="/">Adidas</a></li>
                                            <li><a href="/">On</a></li>
                                            <li><a href="/">Timberland</a></li>
                                            <li><a href="/">The North Face</a></li>
                                            <li><a href="/">Converse</a></li>
                                            <li><a href="/">Brooks</a></li>
                                            <li><a href="/">Puma</a></li>
                                            <li><a href="/">Crocs</a></li>
                                            <li><a href="/">Birkenstock</a></li>
                                            <li><a href="/">Sorel</a></li>
                                            <li><a href="/">Goorin Bros</a></li>
                                        </ul>
                                
                                        <ul className="list">
                                            <strong>Trending Now</strong>
                                            <li><a href="/">Trending Styles</a></li>
                                            <li><a href="/">Recent Releases</a></li>
                                            <li><a href="/">All White Styles</a></li>
                                            <li><a href="/">Pink Styles</a></li>
                                        </ul>
                                    </div>
                                
                                    <div className="random-mens">
                                        <div className="arrival">
                                            <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                                            <a href="/" className="tag">Nike Air Max</a>
                                         </div>
                                    </div>
                                    </section>
                                    : ''}   

                                    {this.props.selectedMenu === 'Релизы' ?
                                    <section className="mens container" >
                                        <div className="lists">
                                            <ul className="list">
                                                <strong>Shoes</strong>
                                                <li><a href="/"></a>Basketball </li>
                                                <li><a href="/">Running</a></li>
                                                <li><a href="/">Casual</a></li>
                                                <li><a href="/">Boots</a></li>
                                                <li><a href="/">Training & Cleats</a></li>
                                                <li><a href="/">Sandals, Slides & Slippers</a></li>
                                                <li><a href="/">Sizes 14-20</a></li>
                                                <li><a href="/">Best Sellers</a></li>
                                                <li><a href="/">Styles Under $100</a></li>
                                                <li><a href="/">All Shoes</a></li>
                                            </ul>
                                            
                                            <ul className="list">
                                                <strong>Clothing</strong>
                                                <li><a href="/">Hoodies & Sweatshirts</a></li>
                                                <li><a href="/">Sweatpants & Joggers</a></li>
                                                <li><a href="/">Jackets, Coats & Vests</a></li>
                                                <li><a href="/">Shirts, Tanks & Graphic Tees</a></li>
                                                <li><a href="/">Shorts & Swimwear</a></li>
                                                <li><a href="/">Matching Sets</a></li>
                                                <li><a href="/">Buy One Get One 50% Off Tees</a></li>
                                                <li><a href="/">Fan Gear & Jerseys</a></li>
                                                <li><a href="/">Socks & Underwear</a></li>
                                                <li><a href="/">Denim & Jeans</a></li>
                                                <li><a href="/">Styles Under $50</a></li>
                                                <li><a href="/">All Clothing</a></li>
                                            </ul>
                                            
                                            <ul className="list">
                                                <strong>Brands</strong>
                                                <li><a href="/">Nike</a></li>
                                                <li><a href="/">Jordan</a></li>
                                                <li><a href="/">Adidas</a></li>
                                                <li><a href="/">On</a></li>
                                                <li><a href="/">Timberland</a></li>
                                                <li><a href="/">The North Face</a></li>
                                                <li><a href="/">Converse</a></li>
                                                <li><a href="/">Brooks</a></li>
                                                <li><a href="/">Puma</a></li>
                                                <li><a href="/">Crocs</a></li>
                                                <li><a href="/">Birkenstock</a></li>
                                                <li><a href="/">Sorel</a></li>
                                                <li><a href="/">Goorin Bros</a></li>
                                            </ul>
                                    
                                            <ul className="list">
                                                <strong>Trending Now</strong>
                                                <li><a href="/">Trending Styles</a></li>
                                                <li><a href="/">Recent Releases</a></li>
                                                <li><a href="/">All White Styles</a></li>
                                                <li><a href="/">Pink Styles</a></li>
                                            </ul>
                                        </div>
                                    
                                        <div className="random-mens">
                                            <div className="arrival">
                                                <a href="/"><img src="assets/images/mens.png" alt=""/></a>
                                                <a href="/" className="tag">Nike Air Max</a>
                                             </div>
                                        </div>
                                        </section>
                                        : ''}
</main>

    );
  }
}

export default SubMenu;