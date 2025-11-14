import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userSchema from './validarSenha';

export const calculatePasswordStrength = (password) => {
    let strength = {
        level: 'very weak', // 'very weak', 'weak', 'medium', 'strong'
        percentage: 3,
    };

    if (password.length < 6) {
        strength.level = 'very weak';
        strength.percentage = 10;
    } else {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let score = 0;

        if (hasUpperCase) score++;
        if (hasLowerCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChars) score++;

       
        if (score === 4) {
            strength.level = 'strong';
            strength.percentage = 100;
        } else if (score === 3) {
            strength.level = 'medium';
            strength.percentage = 60;
        } else if (score === 2) {
            strength.level = 'weak';
            strength.percentage = 30;
        } else {
            strength.level = 'very weak';
            strength.percentage = 10;
        }
    }

    return strength;
};


export function useUserForm() {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        surname: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    
    useEffect(() => {
        const { error } = userSchema.validate(formData, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(errorMessages);
        } else {
            setErrors({}); 
        }
    }, [formData]); 

    const validateField = (name) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'firstname':
                if (!formData.firstname) {
                    newErrors.firstname = 'O nome não pode estar vazio.';
                }
                break;
            case 'surname':
                if (!formData.surname) {
                    newErrors.surname = 'O sobrenome não pode estar vazio.';
                }
                break;
            case 'email':
                if (!formData.email) {
                    newErrors.email = 'O e-mail não pode estar vazio.';
                }
                break;
            case 'password':
                if (!formData.password) {
                    newErrors.password = 'A senha não pode estar vazia.';
                }
                break;
            case 'confirmpassword':
                if (!formData.confirmpassword) {
                    newErrors.confirmpassword = 'A confirmação de senha não pode estar vazia.';
                } else if (formData.confirmpassword !== formData.password) {
                    newErrors.confirmpassword = 'As senhas não coincidem.';
                }
                break;
            
            default:
                break;
        }

        setErrors(newErrors);
    };

  
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        validateField(name); 
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        const { error } = userSchema.validate(formData, { abortEarly: false });

        if (error) {
            
            const errorMessages = error.details.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(errorMessages);
        } else {
          
            const { confirmpassword, ...dataToSend } = formData;  

            try {
                const response = await axios.post('http://localhost:3000/users', dataToSend, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Resposta do servidor:', response);
                navigate('/login');
            } catch (error) {
                if (error.response) {
                    console.error('Erro da resposta:', error.response.data);
                    alert(`Erro: ${error.response.data.message || 'Ocorreu um erro no servidor.'}`);
                } else {
                    console.error('Erro ao enviar dados:', error);
                    alert('Erro ao enviar os dados');
                }
            }
        }
    };


    return {
        formData,
        errors,
        touched,
        handleInputChange,
        handleBlur,
        handleSubmit,
        calculatePasswordStrength,
    };
}