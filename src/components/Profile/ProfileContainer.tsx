import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId?: string
}

type mapStateToPropsType = {
    profile: any
    status: string
}

type mapDispatchToPropsType = {
    getProfile: (userId?: string) => void
    getStatus: (userId?: string) => void
    updateStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ContainerPropsType
type ContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24458'
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
    } as mapDispatchToPropsType),
    withRouter,
    withAuthRedirect
)(ProfileContainer)