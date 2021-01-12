import React, { Component } from 'react';
import './EducationalBenefitsBlock.scss';
import FunctionIcon from '../../assets/icons/function.svg';
import VennDiagram from '../../assets/icons/venn-diagram.svg';
import MathIcon from '../../assets/icons/math.svg';
import AtomicEnergy from '../../assets/icons/atomic-energy.svg';
import Availability from '../../assets/images/availability.svg';
import VideoTemplates from '../../assets/images/video-templates.svg';
import CreationProcess from '../../assets/images/creation-process.svg';

class EducationalBenefitsBlock extends Component {
    state = { 
        benefitsBlock: [
            {
              id: 1,
              image: CreationProcess,
              title: 'Effortless creation process',
              text: 'You don’t have to be a video editing pro to create five-star videos for your school or educational project. Renderforest educational video maker simplifies the process of creating educational animations down to several clicks. Make the best of the flexible cloud-based editing tools to have an attractive video ready in no time.'
            },
            {
              id: 2,
              image: VideoTemplates,
              title: 'All-purpose video templates',
              text: 'A large selection of editable templates allows you to create different types of videos while maintaining the same visual style, or adapt it to your needs. From whiteboard educational videos to 3D explainers and beyond, you can use an animated educational video maker to create captivating instructional videos for any purpose in one place.'
            },
            {
              id: 3,
              image: Availability,
              title: 'Availability and security',
              text: 'Access your video projects anytime and from any device. Create, edit, and export videos on your desktop computer, laptop, tablet, or smartphone — all you need is an internet connection. Choose the audience of your video by setting it to private, or share the video via a custom link, to prevent unauthorized users from accessing your video.'
            }
          ]
     }
    render() { 
        const {  benefitsBlock } = this.state;
        return ( 
        <section id="_educational-benefits-block">
            <span className="floating-icons"id="_atomic-energy-icon">
              <img src={AtomicEnergy} alt="Atomic Energy" />
            </span>
            <span className="floating-icons" id="_venn-diagram-icon">
              <img src={VennDiagram} alt="Venn Diagram" />
            </span>
            <span className="floating-icons" id="_function-icon">
              <img src={FunctionIcon} alt="Function" />
            </span>
            <span className="floating-icons" id="_math-icon">
              <img src={MathIcon} alt="Mathematic" />
            </span>
            <div className="narrow-wrapper educational-benefits-wrapper">
              <h3 id="_educational-benefits-title" className="main-title">How can an online educational video maker benefit you?</h3>
            </div>
            <div className="wide-wrapper">
              <div className="benefits-blocks">
                  {
                    benefitsBlock.map(benefit => 
                      <div className="benefits-block" key={benefit.id}>
                        <img className="benefit-img" src={benefit.image} />
                        <h4 className="sub-title benefit-title">{benefit.title}</h4>
                        <p className="text benefit-txt">{benefit.text}</p>
                      </div>
                    )
                  }
              </div>
            </div>
          </section>
         );
    }
}
 
export default EducationalBenefitsBlock;