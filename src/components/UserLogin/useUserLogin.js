import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function useUserLogin() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Enviar dados de login para o backend
            const response = await axios.post('http://localhost:3000/users/login', user);
            console.log('Login bem-sucedido:', response.data);

            // Salvar dados do usuário no localStorage ou sessionStorage
            localStorage.setItem("authToken", response.data.token);

            // Certifique-se de que o nome do usuário está correto na resposta
            if (response.data.user && response.data.user.firstname) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
            } else {
                console.error('Nome do usuário não encontrado na resposta da API');
            }

            // Após o login bem-sucedido, redireciona para a home
            // Redireciona para a home
            window.location.reload(navigate('/'));

        } catch (err) {
            console.error('Erro ao fazer login:', err.response ? err.response.data : err.message);
            setError('Erro ao fazer login. Verifique suas credenciais.');
        } finally {
            setLoading(false); // Finalizar o carregamento
        }
    };

    return {
        user,
        error,
        loading,
        handleChange,
        handleSubmit,
    };
}