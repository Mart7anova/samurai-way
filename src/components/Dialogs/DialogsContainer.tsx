import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type mapDispatchToPropsType = {
    onMessageChange: (newMessage: string) => void
    sentMessage: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onMessageChange: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        },
        sentMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)