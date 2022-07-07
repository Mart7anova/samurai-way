import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Profile } from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId?: string
}

type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType ={
    setUserProfile: (profile: {})=> void
}

type PropsType = RouteComponentProps<PathParamsType> & ContainerPropsType
type ContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))