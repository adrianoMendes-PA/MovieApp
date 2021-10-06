import React from "react";

import { BackButton, Name } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { WebView } from 'react-native-webview';

function ModalLink({ link, title, closeModal }) {
    return (
        <>
            <BackButton onPress={closeModal}>
                <Icon name="close" size={35} color="#FFF" />
                <Name numberOfLines={1}>{title}</Name>
            </BackButton>

            <WebView
                source={{ uri: link }}
            />
        </>
    )
}

export default ModalLink;