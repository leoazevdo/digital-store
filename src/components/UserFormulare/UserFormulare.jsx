import '@globalStyles/ColorsVariables.css';
import '../../globalStyles/reset.css';
import './UserFormulare.css';
import { useUserForm } from './useUserForm';
import { calculatePasswordStrength } from './useUserForm';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

export function UserFormulare() {
    const { formData, errors, touched, handleInputChange, handleBlur, handleSubmit } = useUserForm();
    const passwordStrength = calculatePasswordStrength(formData.password);

    const renderFormGroup = (label, name, type = "text", placeholder = "", required = false) => (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                required={required}
            />
            {touched[name] && errors[name] && <div className="error">{errors[name]}</div>}
        </Form.Group>
    );

    return (
        <div className="div_form">
            <h1>Criar Conta</h1>
            <Form onSubmit={handleSubmit}>
                {/* Informações Pessoais */}
                <div className="inf_pes">
                    <p>Informações Pessoais</p><hr />
                    {renderFormGroup('Nome *', 'firstname', 'text', 'Insira seu primeiro nome.', true)}
                    {renderFormGroup('Sobrenome *', 'surname', 'text', 'Insira seu sobrenome.', true)}
                    {renderFormGroup('E-mail *', 'email', 'email', 'Insira seu e-mail.', true)}
                    {renderFormGroup('Senha *', 'password', 'password', 'Insira sua senha.', true)}
                    {/* Exibir a força da senha */}
                        <ProgressBar 
                            striped 
                            variant={
                                passwordStrength.level === 'strong' ? 'success' :
                                passwordStrength.level === 'medium' ? 'warning' :
                                passwordStrength.level === 'weak' ? 'danger' :
                                'light'
                            }
                            now={passwordStrength.percentage}
                        />
                    {renderFormGroup('Confirmar Senha *', 'confirmpassword', 'password', 'Insira sua senha novamente.', true)}
                </div>

                {/* Informações de Entrega */}
                <div className="inf_ent">
                    <p>Informações de Entrega</p><hr />
                    {renderFormGroup('Endereço', 'address', 'text', 'Insira seu endereço')}
                    {renderFormGroup('Bairro', 'neighborhood', 'text', 'Insira seu bairro')}
                    {renderFormGroup('Cidade', 'city', 'text', 'Insira sua cidade')}
                    {renderFormGroup('CEP', 'zip', 'text', 'Insira seu CEP')}
                    {renderFormGroup('Complemento', 'complement', 'text', 'Insira complemento')}
                </div>

                {/* Confirmação e Botão */}
                <div className='confirm'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Quero receber ofertas e novidades por email. A frequência de envios pode variar de acordo com a interação do cliente."
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Criar Conta</Button>
                </div>
            </Form>
        </div>
    );
}

export default UserFormulare;