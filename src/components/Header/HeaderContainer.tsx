import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {authType, getAuthMe} from '../../redux/auth-reducer';

type mapStateToPropsType = {
    data: authType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getAuthMe: () => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
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
    getAuthMe,
} as mapDispatchToPropsType)(HeaderContainer)