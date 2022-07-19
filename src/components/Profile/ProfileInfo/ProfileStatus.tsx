import React, {ComponentType} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserProfileStatus} from '../../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId?: string
}

type mapStateToPropsType = {
    profileStatus: string
}

type mapDispatchToPropsType ={
    getUserProfileStatus: (userId?: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ContainerPropsType
type ContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileStatus extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        const userId = this.props.match.params.userId
        this.props.getUserProfileStatus(userId)
    }

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
                    ? <input value={this.props.profileStatus} autoFocus onBlur={this.deactivateEditMode}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.profileStatus || 'установить статус' }</span>
                }
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileStatus: state.profilePage.profileStatus,
})

export const ProfileStatusContainer = compose<ComponentType>(
    connect(mapStateToProps,{getUserProfileStatus}as mapDispatchToPropsType),
    withRouter,
)(ProfileStatus)