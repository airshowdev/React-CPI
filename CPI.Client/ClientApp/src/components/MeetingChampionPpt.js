import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    './img/MeetingChampionPic0.png',
    './img/MeetingChampionPic1.png',
    './img/MeetingChampionPic2.png',
    './img/MeetingChampionPic3.png',
    './img/MeetingChampionPic4.png',
    './img/MeetingChampionPic5.png',
    './img/MeetingChampionPic6.png',
    './img/MeetingChampionPic7.png'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export class MeetingChampionPpt extends Component {


    constructor() {
        super()
    }

    render() {
        return (

                <Slide {...properties}>
                <div className='each-slide' style={{ height: 400, width: 200, backgroundImage: 'url(' + require('./img/MeetingChampionPic0.png') + ')' }}>
                        <span>Slide 1</span>
                    </div>


                <div className='each-slide' style={{ height: 400, width: 200, backgroundImage: 'url(' + require('./img/MeetingChampionPic1.png') + ')' }}>

                        <span>Slide 2</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 200, backgroundImage: 'url(' + require('./img/MeetingChampionPic2.png') + ')' }}>

                        <span>Slide 3</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 300, backgroundImage: 'url(' + require('./img/MeetingChampionPic3.png') + ')' }}>

                        <span>Slide 4</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 400, backgroundImage: 'url(' + require('./img/MeetingChampionPic4.png') + ')' }}>
                        <span>Slide 5</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 400, backgroundImage: 'url(' + require('./img/MeetingChampionPic5.png') + ')' }}>
                        <span>Slide 6</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 400, backgroundImage: 'url(' + require('./img/MeetingChampionPic6.png') + ')' }}>
                        <span>Slide 7</span>
                    </div>

                <div className='each-slide' style={{ height: 400, width: 400, backgroundImage: 'url(' + require('./img/MeetingChampionPic7.png') + ')' }}>
                        <span>Slide 8</span>
                    </div>
                
                    <div className='each-slide'>

                        <span>Slide 8</span>
                    </div>

                </Slide>
            
            
        ); 
    }
}

