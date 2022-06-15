import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {ActionsType, StateType} from '../../redux/store';


const mapStateToProps = (state: StateType) =>{
    return{
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) =>{
    return{
        onMessageChange: (newMessage: string)=> {
            dispatch(updateNewMessageTextAC(newMessage))
        },
        sentMessage: ()=> {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)