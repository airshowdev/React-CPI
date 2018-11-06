import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
    require('./img/MeetingChampion/MeetingChampionPic0.png'),
    require('./img/MeetingChampion/MeetingChampionPic1.png'),
    require('./img/MeetingChampion/MeetingChampionPic2.png'),
    require('./img/MeetingChampion/MeetingChampionPic3.png'),
    require('./img/MeetingChampion/MeetingChampionPic4.png'),
    require('./img/MeetingChampion/MeetingChampionPic5.png'),
    require('./img/MeetingChampion/MeetingChampionPic6.png'),
    require('./img/MeetingChampion/MeetingChampionPic7.png'),
]

//This is called from inside the class. The height and width are set to match the size of the current 8 pictures. They are all the same size. 
const Slideshow = () => {
    return (
        <div style={{ marginTop: '1em', marginLeft: '5em', width: 'auto', height: 'auto', maxWidth: '100%' }}>
            <Slide   {...properties} >
                {images.map((x) => (
                    <div className='each-slide'>
                        <img src={x} />
                        </div>
                    ))}
            </Slide>
        </div>
    );
}

const properties = {
    duration: 9999,//Int; How long each slide lasts for
    transitionDuration: 500,//Int; Duration of the transition to the next slide
    infinite: true,//Boolean; Wether or not to keep looping throuhg slideshow
    indicators: true,//Boolean; Wether dots at bottom of slideshow are visible
    arrows: true,//Boolean; Wether arrows on side of slideshow are visible
}

export class MeetingChampionPpt extends Component {


    constructor() {
        super()
    }

    

    render() {
        return Slideshow();
    }
}

