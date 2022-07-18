import React from 'react';
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapStateToPropsType = {
    dialogPage: DialogsPageType
}

type mapDispatchToPropsType = {
    onMessageChange: (newMessage: string) => void
    sentMessage: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    dialogPage: state.dialogPage,
})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    onMessageChange: (newMessage: string) => {
        dispatch(updateNewMessageTextAC(newMessage))
    },
    sentMessage: () => {
        dispatch(addMessageAC())
    }
})
const withAuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent)