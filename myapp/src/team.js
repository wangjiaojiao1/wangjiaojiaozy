
import React, {Component} from 'react';
import './index.css';
import './reset.css'
//import './aboutEBSNO.css'
import './team.css'

class Team extends Component {
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
                      <li>联系我们</li>
                   </ul>
                </div>
                <div className="wjj_right">
                    <div className="about">
                        <p>关于EBSNO</p>
                    </div>  
                    <div className="wjj_right2">
                        <img src="./imgs/banner1.png"/>
                        <p className="p1">李老师/ARIANA</p>
                        <p className="p2">专业从事意大利签证工作,非常熟悉意大利学习流程与材料办理.</p>
                        <img src="./imgs/banner2.png"/>
                        <p className="p1">张老师/FILIPPO</p>
                        <p className="p2">毕业于意大利米兰理工大学/新加坡莱佛设计学院旅居意大利七年,了解意大利历史文化,风土人情.了解意大利各院校信息及课程设置,特别精通建筑类,设计类专业.</p>
                        <img src="./imgs/banner3.png"/>
                        <p className="p1">夏老师/SOFIA</p>
                        <p className="p2">毕业于马切拉塔公立美术学院</p>
                        <img src="./imgs/banner4.png"/>
                        <p className="p1">刘老师/MATTEO</p>
                        <p className="p2">毕业于米兰IULM大学</p>
                        <p className="p2">特别了解意大利大学的解构及申请流程,特别对马可波罗计划十分了解.</p>
                        <img src="./imgs/banner5.png"/>
                        <p className="p1">伊老师/CECILIA</p>
                        <p className="p2">毕业于意大利威尼斯大学</p>
                        <p className="p2">精通意大利语,精确翻译意大利留学信息,特别精通意大利各大学语言类专业课程设置</p>
                        <img src="./imgs/banner55.png"/>
                        <p className="p1">尚老师/LUIGI</p>
                        <p className="p2">毕业于加拿大温哥华BC理工</p>
                        <p className="p2">奔驰俱乐部会员,精通英语,精通翻译意大利英语授课相关信心,</p>
                        <p className="p2">特别精通汽车,机械,工程类相关专业.</p>
                        <img src="./imgs/banenr6.png"/>
                        <p className="p1">田老师/TINA</p>
                        <p className="p2">专业从事意大利签证工作,非常熟悉意大利学习流程与材料办理</p>
                        <img src="./imgs/banner8.png"/>
                        <p className="p1">郭老师/GIANNA</p>
                        <p className="p2">资深意大利学习专家,精通意大利助学金,奖学金及签证材料办理流程.</p>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default Team;