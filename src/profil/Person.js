import React from "react";

export class Person extends React.Component{
    render() {
        return (
            <div>
            <p>Nom Complet : {this.props.fullName}</p>
            <p>Bio : {this.props.bio}</p>
            <p>Image du jour : <img src="{this.props.imgSrc}" alt="ImageProfile"/></p>
            <p>profession : {this.props.profession}</p>
        </div>
        )
    }
}