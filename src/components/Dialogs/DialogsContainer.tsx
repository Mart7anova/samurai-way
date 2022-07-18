import React, {ComponentType} from 'react';
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
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
export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)