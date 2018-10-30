import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic0.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic1.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic2.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic3.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic4.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic5.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic6.png'),
    require('./img/MeetingWithTeamLeadPNGs/MeetingWithTeamLeadPic7.png'),
]

//This is called from inside the class. The height and width are set to match the size of the current 8 pictures. They are all the same size. 
const Slideshow = () => {
    return (
        <div style={{ marginTop: '1em', marginLeft: '5em', width: 'auto', height: 'auto', maxWidth: '100%' }}>
            <Slide {...properties} >
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
    infinite: true,//Boolean; Whether or not to keep looping through slideshow
    indicators: true,//Boolean; Whether dots at bottom of slideshow are visible
    arrows: true,//Boolean; Whether arrows on side of slideshow are visible
}


export class MeetWithTeamLeadPpt extends Component {


    constructor() {
        super()
    }



    render() {
        return Slideshow();
    }
}