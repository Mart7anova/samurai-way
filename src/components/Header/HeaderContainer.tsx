import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import {authType, setAuthUserData} from '../../redux/auth-reducer';

type mapStateToPropsType = {
    data: authType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserData: (email: string,
                  id: number,
                  login: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
                    this.props.setAuthUserData(email, id, login)
                }
            })
    }

    render() {
        console.log(this.props.data)
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {
    setAuthUserData,
} as mapDispatchToPropsType)(HeaderContainer)