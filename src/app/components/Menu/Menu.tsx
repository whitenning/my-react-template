import React from 'react';
import SubMenu from '../SubMenu/SubMenu';
import './Menu.scss'

interface MenuState {
  selectedMenu: string;
}
class Menu extends React.Component<{}, MenuState> {
  constructor(props:any) {
    super(props);
    this.state = {
      selectedMenu: ''
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver(menu:any) {
    this.setState({ selectedMenu: menu });
  }

  handleMouseLeave() {
    this.setState({ selectedMenu: '' });
  }

  render() {
    return (
      <ul className="menu-container">
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Новинки')}
            onMouseLeave={this.handleMouseLeave}>
          Новинки
          {this.state.selectedMenu === 'Новинки' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Мужской')}
            onMouseLeave={this.handleMouseLeave}>
          Мужской
          {this.state.selectedMenu === 'Мужской' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Женский')}
            onMouseLeave={this.handleMouseLeave}>
          Женский
          {this.state.selectedMenu === 'Женский' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Подросковый')}
            onMouseLeave={this.handleMouseLeave}>
          Подросковый
          {this.state.selectedMenu === 'Подросковый' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Для девочек')}
            onMouseLeave={this.handleMouseLeave}>
          Для девочек
          {this.state.selectedMenu === 'Для девочек' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Акссесуары')}
            onMouseLeave={this.handleMouseLeave}>
          Акссесуары
          {this.state.selectedMenu === 'Акссесуары' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Скидки')}
            onMouseLeave={this.handleMouseLeave}>
          Скидки
          {this.state.selectedMenu === 'Скидки' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Брендовые')}
            onMouseLeave={this.handleMouseLeave}>
          Брендовые
          {this.state.selectedMenu === 'Брендовые' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Ходовые')}
            onMouseLeave={this.handleMouseLeave}>
          Ходовые
          {this.state.selectedMenu === 'Ходовые' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        <li className="menu"
            onMouseOver={() => this.handleMouseOver('Релизы')}
            onMouseLeave={this.handleMouseLeave}>
          Релизы
          {this.state.selectedMenu === 'Релизы' && <SubMenu selectedMenu={this.state.selectedMenu} />}
        </li>
        </ul>
    )}}

    export default Menu