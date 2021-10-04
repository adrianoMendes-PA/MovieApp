import React from "react";

// ESTILOS
import { Container, SearchContainer, Input, SearchButton } from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

function Home() {
    return (
        <Container>
            <Header title='MovieApp' />

            <SearchContainer>
                <Input
                    placeholder="Ex: Liga da Justiça"
                    placeholderTextColor='#ddd'
                />

                <SearchButton>
                    <Icon name='ios-search' size={30} color='#FFF' />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Home;