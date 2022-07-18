import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId?: string
}

type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType = {
    getUserProfile: (userId?: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ContainerPropsType
type ContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
    } as mapDispatchToPropsType),
    withRouter,
    withAuthRedirect
)(ProfileContainer)