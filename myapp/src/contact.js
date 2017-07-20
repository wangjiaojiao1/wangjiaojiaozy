
import React, {Component} from 'react';
import './index.css';
import './reset.css'
//import './aboutEBSNO.css'
//import './team.css'
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="wjj_box">
                <div className="wjj_left">
                   <ul>
                      <li>我们的教师</li>
                      <li>我们的学员</li>
                      <li>关于EBSNO</li>
                      <li>我们的团队</li>
                      <li>艺术工作室</li>
                      <li><span></span>联系我们</li>
                   </ul>
                </div>
                <div className="wjj_right">
                    <div className="about">
                        <p>联系我们</p>
                    </div>  
                    <div className="tell">
                        <p>北京意博思诺教育科技有限公司</p>
                        <h1>1.意博思诺北京校区(总校区)</h1>
                        <p>位于北京市朝阳区望京广顺北大街31号院3号2层</p>
                        <p>电话:010-50830128</p>
                        <h1>2.意博思诺重庆校区</h1>
                        <p>位于重庆市渝中区解放碑时代广场C座28-2</p>
                        <p>电话:023-63871006</p>
                        <p>咨询电话:010-5734 6896</p>
                        <p>传真:010-6475 0511</p>
                        <img src="./imgs/banner14.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;