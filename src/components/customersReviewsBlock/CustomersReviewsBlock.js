import React, { Component } from 'react';
import './CustomersReviewsBlock.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Quotes from '../../assets/icons/quotes.svg';
import QualityBadge from '../../assets/images/quality-badge.svg';
import CompanyBadge from '../../assets/images/company-badge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class CustomersReviewsBlock extends Component {
    state = { 
        customersReviews: [
            {
                id: 1,
                author: 'Gracy Y',
                profession: 'Book Author',
                text: 'I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!',
                rate: 5
            },
            {
                id: 2,
                author: 'Gracy Y',
                profession: 'Book Author',
                text: 'I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!',
                rate: 4
            },
            {
                id: 3,
                author: 'Gracy Y',
                profession: 'Book Author',
                text: 'I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!',
                rate: 3
            },
        ],

        stars: [1, 2, 3, 4, 5]
     }
    render() { 
        let settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const { customersReviews, stars } = this.state;
        let customerRate;

        return ( 
            <section id="_customers-reviews-block">
                <div id="_reviewers-img-main-block" className="wide-wrapper">
                    <div  id="_reviewers-img-block" className="narrow-wrapper">
                        <div className="img-wrapper">
                            <img src={QualityBadge} alt="Quality Badge" />
                        </div>
                        <div className="img-wrapper">
                            <img src={CompanyBadge} alt="Company Badge" />
                        </div>
                    </div>
                </div>
                <div id="_customers-reviews-main-title-wrapper" className="narrow-wrapper">
                    <h3 id="_customers-reviews-main-title" className="main-title">What our customers say about us</h3>
                    <img src={Quotes} alt="Quotes"/>
                </div>
                <div className="narrow-wrapper">
                    <Slider {...settings}>
                        {
                            customersReviews.map(review =>
                                <div key={review.id} className="customer-review-block">
                                    <p className="text review-text">{review.text}</p>
                                    <div className="review-rate">
                                        {
                                            customerRate = review.rate,
                                            stars.map((item, index) => 
                                                <span className="star" key={index}>
                                                    <FontAwesomeIcon className={customerRate <= item -1 ?  "" : "active-star"}  icon={faStar} />
                                                </span>
                                            )
                                        }
                                    </div>
                                    <p className="text reviewer-author">{review.author}</p>
                                    <p className="text reviewer-profession">{review.profession}</p>
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </section>
         );
    }
}
 
export default CustomersReviewsBlock;