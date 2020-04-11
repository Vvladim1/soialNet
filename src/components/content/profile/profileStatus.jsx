import React from "react";
// import s from "./profile.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        // this.state.editMode = true;
        // this.forceUpdate();
        this.setState ({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState ({
            editMode: false
        })
    }

    render(){
  return (
      <>
    {!this.state.editMode && 
        <div>
        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>}
    {this.state.editMode && 
        <div>
            <input onBlur={this.deactivateEditMode} autoFocus value={this.props.status} />
        </div>}
    </>
  );
}
};

export default ProfileStatus;
