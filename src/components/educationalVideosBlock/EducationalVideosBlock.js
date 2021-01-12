import React, { Component } from 'react';
import './EducationalVideosBlock.scss';
import PulsingImage from '../../assets/images/pulsing-image.png';
import PulsingImage2 from '../../assets/images/pulsing-image-2.png';
import PulsingImage3 from '../../assets/images/pulsing-image-3.png';

class EducationalVideosBlock extends Component {
    state = { 
        educationalBlock: [
            {
              id: 1,
              className: 'search-utils-block',
              image: PulsingImage,
              title: 'Pick an educational video template',
              text: 'Start making your animation by going through the template library of our educational video maker and selecting your favorite one. Each template offers hundreds of scenes separated by categories such as classroom environment, different subjects, text animations, and more. Pick and add the scenes manually, or go with the fully customizable video presets,to streamline the creation. The scenes will then be added to the editor for further personalization.'
            },
            {
              id: 2,
              className: 'edit-utils-block',
              image: PulsingImage2,
              title: 'Personalize your animation',
              text: 'Start making your animation by going through the template library of our educational video maker and selecting your favorite one. Each template offers hundreds of scenes separated by categories such as classroom environment, different subjects, text animations, and more. Pick and add the scenes manually, or go with the fully customizable video presets, to streamline the creation. The scenes will then be added to the editor for further personalization.'
            },
            {
              id: 3,
              className: 'download-utils-block',
              image: PulsingImage3,
              title: 'Export and share your video',
              text: 'Go to the “Preview” section to see the final version of your educational video. Ensure that there are no more changes to be made in your animation. Once the video is final, export it in your preferred quality. Then, instantly share the video to digital platforms, or download it to your device.'
            }
          ],
     }
    render() { 
        const { educationalBlock } = this.state;
        return ( 
        <section id="_educational-videos-block">
            <div className="narrow-wrapper">
              <h3 id="_educational-videos-heading" className="main-title">How to make animated educational videos online?</h3>
            </div>
            <div className="medium-wrapper">
              {
                educationalBlock.map(block => 
                  <div className={`${block.className} flexbox-2`} key={block.id}>
                    <div className="flex-item">
                      <p className="step">STEP {block.id}</p>
                      <h3 className="main-title">{block.title}</h3>
                      <p className="education-videos-description">{block.text}</p>
                    </div>
                    <div className="flex-item">
                      <div className="educational-videos-img-wrapper">
                        <img src={block.image} alt="Educational Videos"/>
                      </div>
                  </div>
                </div>
                )
              }
            </div>
          </section>
         );
    }
}
 
export default EducationalVideosBlock;