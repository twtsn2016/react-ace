import React from 'react'
import Search from '../layouts/Search';
class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className="breadcrumbs" id="breadcrumbs">
                <ul className="breadcrumb">
                    <li>
                        <i className="icon-home home-icon"></i>
                        <a href="#">首页</a>
                    </li>
                    <li className="active">控制台</li>
                </ul>
                <Search></Search>
            </div>
        );
    }
}
export default Breadcrumbs;


