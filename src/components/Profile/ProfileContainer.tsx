import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    getUserProfile,
} as mapDispatchToPropsType)(withRouter(ProfileContainer))