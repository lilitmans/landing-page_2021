import React, { Component } from 'react';
import './IntroductionBlock.scss';
import VideoBlock from '../videosBlock/VideosBlock';
import ScrollToTop from '../scrollToTop/ScrollToTop';

class IntroductionBlock extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="_intro-block" className="gradiant-bg">
            <div className="wide-wrapper">
              <div className="narrow-wrapper">
                <p id="_intro-text" className="text">
                Elevate the learning process of your students with an interactive educational video. Use our online
                educational video maker to craft instructional videos, send teacher messages, engage students with
                video assignments, or promote your school. Even if this is your first video creation experience,
                the combination of customizable video templates and intuitive editing tools allow you to have an
                engaging animation ready in no time.
                </p>
              </div>
              <div className="medium-wrapper">
                <h4 id="_customizable-templates-heading" className="sub-title">
                  Educational video maker with customizable templates</h4>
                  <VideoBlock />
                  <ScrollToTop/>
              </div>
            </div>
        </section>
        );
    }
}
 
export default IntroductionBlock;