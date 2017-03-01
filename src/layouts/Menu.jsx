import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuData:[
                {id:1,iconClassName:'icon-dashboard',text:'控制台',className:'active',subMenu:[],url:'/'},
                {id:2,iconClassName:'icon-desktop',text:'UI 组件',className:'',subMenu:[
                    {id:3,iconClassName:'icon-double-angle-right',text:' 组件01',className:'',subMenu:[],url:'/user/add'},
                    {id:4,iconClassName:'icon-double-angle-right',text:' 组件02',className:'',subMenu:[],url:'/user/list'},
                ]}
            ]  
        };
   }
   getLinkMenu(item){
        return(
            <Link to={item.url}>
                    <i className={item.iconClassName}></i>
                    <span className="menu-text">{item.text}</span>
                    {
                        item.subMenu.length?<b className="arrow icon-angle-down"></b>:''
                    }
            </Link>
       )
   }
   getParentMenu(item){
       return(
            <a href='javascript:void(0)' className="dropdown-toggle">
                <i className={item.iconClassName}></i>
                <span className="menu-text">{item.text}</span>
                {
                    item.subMenu.length?<b className="arrow icon-angle-down"></b>:''
                }
            </a>
       )
   }
   setActiveMenu(item){
      var menuData = this.state.menuData;
      menuData.map((obj)=>{
          obj.id == item.id?obj.className="active":obj.className='';
          obj.subMenu.map((obj1)=>{
              obj1.id == item.id?obj1.className="active":obj1.className='';
          });
      });
   }
   initMenu(){
        let self = this;
        let menuData = self.state.menuData;
        let getLinkMenu = self.getLinkMenu;
        let setActiveMenu = self.setActiveMenu;
        return menuData.map((item,index)=>{
            let meunId = item.id;
            return(
                 <li className={item.className}  key={item.id}  onClick={(event) => {item.subMenu.length == 0?setActiveMenu.call(self,item):null;}}>
                    {item.subMenu.length == 0?this.getLinkMenu(item):this.getParentMenu(item)}
                    <ul className="submenu">
                        {
                            item.subMenu.map(function (subItem,subIndex) {
                                return (
                                    <li key={subItem.id} className={subItem.className}   onClick={(event) => {setActiveMenu.call(self,subItem);}}>
                                        {getLinkMenu(subItem,subItem.id)}
                                    </li>
                                )
                            })
                        }
                     </ul>
                </li>
            )
        })
   }
   render() {
        return (
            <div>
                <a className="menu-toggler" id="menu-toggler" href="#">
                    <span className="menu-text"></span>
                </a>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                        <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                            <button className="btn btn-success">
                                <i className="icon-signal"></i>
                            </button>

                            <button className="btn btn-info">
                                <i className="icon-pencil"></i>
                            </button>

                            <button className="btn btn-warning">
                                <i className="icon-group"></i>
                            </button>

                            <button className="btn btn-danger">
                                <i className="icon-cogs"></i>
                            </button>
                        </div>
                    </div>
                    <ul className="nav nav-list">
                        {
                            this.initMenu()
                        }
                    </ul>

                    <div className="sidebar-collapse" id="sidebar-collapse">
                        <i className="icon-double-angle-left"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;