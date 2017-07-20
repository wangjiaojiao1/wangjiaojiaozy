/**
 * Created by Administrator on 2017/7/18.
 */
import React, {Component} from 'react';
import './index.css';
import './reset.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="h_container">
                        {/*logo*/}
                        <p className="logo"></p>
                        {/*nav*/}
                        <ul className="menus">
                            <li className="cur">
                                <a href="#" className="cur_a">首页</a>
                            </li>
                            <li className="me11">
                                <a href="#" className="menus_a">我们的学员</a>
                            </li>
                            <li className="me19">
                                <a href="#" className="menus_a">我们的教师</a>
                            </li>
                            <li className="me42">
                                <a href="#" className="menus_a">意大利院校</a>
                            </li>
                            <li className="me7">
                                <a href="#" className="menus_a">新闻动态</a>
                            </li>
                            <li className="me41">
                                <a href="#" className="menus_a">国际交流</a>
                            </li>
                            <li className="me22">
                                <a href="#" className="menus_a">学习资料</a>
                            </li>
                            <li className="me6">
                                <a href="/list-37-1.html" className="menus_a">走进EBSNO
                                    <span className="sanjiao"></span>
                                </a>
                                {/*下拉菜单*/}
                                <div className="sub">
                                    <a href="">关于EBSON</a>
                                    <a href="http://www.ebsno.com/list-50-1.html" className="white">我们的团队</a>
                                    <a href="http://www.ebsno.com/list-52-1.html" className="white">艺术工作室</a>
                                    <a href="http://www.ebsno.com/list-25-1.html" className="white">联系我们</a>
                                  
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;