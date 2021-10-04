import React from "react";

// ESTILOS
import { Container, MenuButton, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

function Header({ title }) {

    const navigation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()}>
                <Icon name='menu' size={35} color='#FFF' />
            </MenuButton>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default Header;