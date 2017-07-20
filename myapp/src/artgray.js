
import React, {Component} from 'react';
import './index.css';
import './reset.css'
//import './aboutEBSNO.css'
//import './team.css'
import './artgray.css'

class Artgray extends Component {
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
                    <div className="wjj_right3">
                        <p>Ebsno艺术工作室是由意博思诺教育创办的主要针对专业艺术设计的培训基地,注重从理论型到实践人才的培养.工作室致力于为艺术留学的学生提供最专业的考前培训,作品集指导,意大利作品解析等.</p>
                        <p>Ebsno艺术工作室的主讲老师均为国内外著名高校教授,设计师,有着丰富的艺术设计经验,他们独到的设计理念以及对意大利知名校院作品的独特讲解都可以轻松被学员所接受,并运用到今后的入学考试及作品集准备中.另外,工作室优雅温馨且极具设计感的学习环境让学生在学习期间得到适当的放松和吸收,大量的设计杂志也为学生提供了更多的资讯及灵感来源.</p>
                        <p>Ebsno从事教育,艺术留学多年,秉承"勿忘初心"的理念,致力于把每一位Ebsno学习的学生成功送出国门,工作室的创办也是希望带动每一位有着艺术梦想的学员加速在艺术大道上奔跑.</p>
                        <p>我们在意大利,我们敢追梦,我们在Ebsno,你呢?</p>
                        <div className="picture">
                           <img src="./imgs/banner9.png"  className="pic1"/>
                           <img src="./imgs/banner10.png" className="pic2"/>
                           <img src="./imgs/banner11.png" className="pic3"/>
                           <img src="./imgs/banner12.png" className="pic4"/>
                           <img src="./imgs/banner13.png" className="pic5"/>
                        </div>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default Artgray;