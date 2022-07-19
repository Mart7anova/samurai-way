import React from 'react';

type PropsType = {
    value: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input value={this.props.value} autoFocus onBlur={this.deactivateEditMode}/>
                    : <span onClick={this.activateEditMode}>{this.props.value}</span>
                }
            </>
        );
    }
}
