import React, { Component } from 'react';
import './VideosBlock.scss';
import { Link } from 'react-router-dom';
import Play from '../../assets/icons/play.svg';
import Image1 from '../../assets/images/Group-14900.png';
import Image2 from '../../assets/images/Group-14901.png';
import Image3 from '../../assets/images/Group-14902.png';
import Image4 from '../../assets/images/Group-14903.png';
import Image5 from '../../assets/images/Group-14904.png';
import Image6 from '../../assets/images/Group-14905.png';
import Image7 from '../../assets/images/Group-14906.png';
import Image8 from '../../assets/images/Group-14907.png';
import Image9 from '../../assets/images/Group-1306.png';

import Image1L from '../../assets/images/Group-14900@2x.png';
import Image2L from '../../assets/images/Group-14901@2x.png';
import Image3L from '../../assets/images/Group-14902@2x.png';
import Image4L from '../../assets/images/Group-14903@2x.png';
import Image5L from '../../assets/images/Group-14904@2x.png';
import Image6L from '../../assets/images/Group-14905@2x.png';
import Image7L from '../../assets/images/Group-14906@2x.png';
import Image8L from '../../assets/images/Group-14907@2x.png';
import Image9L from '../../assets/images/Group-1306@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class VideosBlock extends Component {
    state = { 
        videos: [
            {
                id: 1,
                image: Image1,
                largeImage: Image1L,
                title: '3D Explainer Video Toolkit',
                link: ''
            },
            {
                id: 2,
                image: Image2,
                largeImage: Image2L,
                title: 'Explainer Video Toolkit',
                link: ''
            },
            {
                id: 3,
                image: Image3,
                largeImage: Image3L,
                title: 'Educational Video Toolkit',
                link: ''
            },
            {
                id: 4,
                image: Image4,
                largeImage: Image4L,
                title: 'Teacher’s Video Message',
                link: ''
            },
            {
                id: 5,
                image: Image5,
                largeImage: Image5L,
                title: 'Online Education Promotion',
                link: ''
            },
            {
                id: 6,
                image: Image6,
                largeImage: Image6L,
                title: 'Advanced Online Educational Platform',
                link: ''
            },
            {
                id: 7,
                image: Image7,
                largeImage: Image7L,
                title: 'Online Educational Website Promotion',
                link: ''
            },
            {
                id: 8,
                image: Image8,
                largeImage: Image8L,
                title: 'Educational Platform Introduction',
                link: ''
            },
            {
                id: 9,
                image: Image9,
                largeImage: Image9L,
                title: 'E-Learning Platform Promotion',
                link: ''
            }
        ]
     }
    render() {
        const { videos } = this.state;

        return ( 
            <div className="videos-container">{
                videos.map(video =>
                <div className="video-block" key={video.id}>
                    <div className="video-img-wrapper">
                        <img srcSet={`${video.image} 1x, ${video.largeImage} 2x`} src={video.image} alt={video.title}/>
                        <div className="play-video-icon-box">
                            <img src={Play} alt="Play Button" onClick={() => alert("You are played the video!")}/>
                        </div>
                    </div>
                    <p className="video-title">{video.title}</p>
                    <div className="play-video-btn-box">
                        <Link key={`${video.id}_btn`} to={video.link} className="button dark-btn video-btn">
                            <span>Create</span>
                            <span className="btn-icon-box">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </Link>
                    </div>
                </div>
                )
            }</div>
         );
    }
}
 
export default VideosBlock;