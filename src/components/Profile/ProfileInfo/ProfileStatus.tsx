import React, { ChangeEvent } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        statusValue: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.statusValue)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusValue: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                statusValue: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input value={this.state.statusValue}
                             onChange={this.onChangeStatus}
                             autoFocus
                             onBlur={this.deactivateEditMode}
                    />
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status || 'установить статус'}</span>
                }
            </>
        );
    }
}
