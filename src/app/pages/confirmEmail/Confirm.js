import React, { useEffect } from 'react';
import { Container } from './styles';
import logo from '../../../assets/logo-cut.png';
import { useParams } from 'react-router-dom';
import API from '../../lib/axios';

export const Confirm = () => {
    const { secret, id } = useParams();
    const [ pageData, setPageData ] = React.useState({
        large: '',
        small: ''
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
                await API.get(`/wg/users/register/${secret}/${id}/verify-email`);


                return setPageData({
                    large: 'Email verificado com sucesso',
                    small: 'Você pode agora acessar o winnergram.'
                });
            } catch (e) {
                if (e.response.status === 409) return setPageData({
                    large: 'Usuario já verificado',
                    small: 'Parece que esta conta já foi verificada.'
                });

                if (e.response.status === 400) return setPageData({
                    large: 'Token é invalido',
                    small: 'O Token de confirmação para esta conta é invalido.'
                });

                if (e.response.status === 500) return setPageData({
                    large: 'Erro ao confirmar email',
                    small: 'Parece que houve um erro. Tente novamente mais tarde.'
                });
        }
    }, [id, secret])

    return (
        <Container>
            <img className='logo' src={logo} alt="Brand" />
            <section className='enter'>
                <div className='welcome'>
                    <h1>{pageData.large}</h1>
                    <p>{pageData.small}</p>
                </div>
            </section>
        </Container>
    )
};