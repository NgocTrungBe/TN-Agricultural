import React from 'react';

function Section(props) {
    return (
        <div className="section">
            
        </div>
    );
}

function SectionTitle(props){
    return(
        <div className="section__title">
             {props.children}
        </div>
    )
}

function SectionBody(props){
    return(
        <div className="section__body">
             {props.children}
        </div>
    )
}
export default Section;