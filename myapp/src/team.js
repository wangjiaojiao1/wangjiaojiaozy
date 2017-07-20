
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
                    <div className="wjj_centent">
                        <img src="./imgs/banner1.png"/>
                        <p className="p1">李老师/ARIANA</p>
                        <p className="p2">专业从事意大利签证工作,非常熟悉意大利学习流程与材料办理.</p>
                        <img src="./imgs/banner2.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner3.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner4.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner5.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner6.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner7.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <img src="./imgs/banner8.png"/>
                        <p className="p1"></p>
                        <p className="p2"></p>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default Team;