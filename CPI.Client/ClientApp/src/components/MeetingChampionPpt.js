import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import image0 from './img/MeetingChampionPic0.png';
import image1 from './img/MeetingChampionPic1.png';
import image2 from './img/MeetingChampionPic2.png';
import image3 from './img/MeetingChampionPic3.png';
import image4 from './img/MeetingChampionPic4.png';
import image5 from './img/MeetingChampionPic5.png';
import image6 from './img/MeetingChampionPic6.png';
import image7 from './img/MeetingChampionPic7.png';

const slideImages = {
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
}

const properties = {
    duration: 9999,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export class MeetingChampionPpt extends Component {

    render() {
        return (
            this.Slideshow = () => {
                <Slide {...this.properties}>
                    <div className="each-slide">
                        <div style={{ backgroundImage: `url(${this.slideImages[0]})` }}>
                            <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[1]})` }}>
                            <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[2]})` }}>
                            <span>Slide 3</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[3]})` }}>
                            <span>Slide 4</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[4]})` }}>
                            <span>Slide 5</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[5]})` }}>
                            <span>Slide 6</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[6]})` }}>
                            <span>Slide 7</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${this.slideImages[7]})` }}>
                            <span>Slide 8</span>
                        </div>
                    </div>
                </Slide>


            }
        );
    }
}