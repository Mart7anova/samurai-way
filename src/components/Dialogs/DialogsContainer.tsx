import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {StoreContext} from '../../storeContext';
import {Dialogs} from './Dialogs';

type PropsType = {
}

export const DialogsContainer = (props: PropsType) => {

    /*const state = props.store.getState()

    const onMessageChange = (newMessage: string) =>{
        props.store.dispatch(updateNewMessageTextAC(newMessage))
    }
    const sentMessage=()=>{
        props.store.dispatch(addMessageAC())
    }*/

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()

                const onMessageChange = (newMessage: string) => {
                    store.dispatch(updateNewMessageTextAC(newMessage))
                }
                const sentMessage = () => {
                    store.dispatch(addMessageAC())
                }
                return <Dialogs dialogPage={state.dialogPage}
                                onMessageChange={onMessageChange}
                                sentMessage={sentMessage}/>
            }}
        </StoreContext.Consumer>
    )
}