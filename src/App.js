import React from "react";
import { Clock } from "./interval/Clock";
import { Person } from "./profil/Person";

 class App extends React.Component{

  constructor(props) 
  {
    super(props);
    this.state = {isShow: true};
    this.showProfile = this.showProfile.bind(this);

  }

  showProfile() 
  {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }
   render() {
     return (
       <div>
         <h2>Profile Utilisateur : </h2>
         <button onClick={this.showProfile} className="btn btn-success">
           {!this.state.isShow 
            ? 
              <Person 
                  fullName="Djibril SOW"
                  bio="je suis impliqué de la conception à la finalisation du produit."
                  imgSrc="logo.svg"
                  profession="Developer FullStack JS"/> 
            : "Afficher le profile"}
         </button>
         <hr/>
         <Clock/>
       </div>
     )
   }
 }

export default App;