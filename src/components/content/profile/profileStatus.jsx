import React from "react";
// import s from "./profile.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };
    render(){
  return (
      <>
    {!this.state.aditMode && 
        <div>
        <span>{this.props.status}</span>
        </div>}
    {this.state.aditMode && 
        <div>
            <input value={this.props.status} />
        </div>}
    <div></div>
    </>
  );
}
};

export default ProfileStatus;
