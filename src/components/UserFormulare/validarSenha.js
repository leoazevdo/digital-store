import Joi from 'joi';

const firstNameRegex = /^[a-zA-ZáàäâãåÁÀÄÂÃÅéèëêÉÈËÊíìïîÍÌÏÎóòöôõÓÒÖÔÕúùüûÚÙÜÛñÑ' -]+$/;
const surNameRegex = /^[A-Za-zÀ-ÿа-яА-ЯґєіїЇЄа-яёЁ]+(?: [A-Za-zÀ-ÿа-яА-ЯґєіїЇЄа-яёЁ]+)*$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,30}$/;

// Schema de validação para o usuário
const userSchema = Joi.object({
  firstname: Joi.string()
    .min(1)
    .max(20)
    .required()
    .pattern(firstNameRegex)
    .messages({
      'string.pattern.base': 'O primeiro nome deve conter apenas letras e acentos válidos.',
      'any.required': 'O primeiro nome é obrigatório.',
      'string.max': 'O primeiro nome deve ter no máximo 20 caracteres.',
      'string.min': 'O primeiro nome deve ter pelo menos 1 caractere.',
    }),

  surname: Joi.string()
    .min(1)
    .max(20)
    .required()
    .pattern(surNameRegex)
    .messages({
      'string.pattern.base': 'O sobrenome deve conter apenas letras e acentos válidos.',
      'any.required': 'O sobrenome é obrigatório.',
      'string.max': 'O sobrenome deve ter no máximo 20 caracteres.',
      'string.min': 'O sobrenome deve ter pelo menos 1 caractere.',
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'O email fornecido não é válido.',
      'any.required': 'O email é obrigatório.',
    }),

  password: Joi.string()
    .min(6) 
    .max(30)
    .required()
    .pattern(passwordRegex)
    .messages({
      'string.pattern.base': 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.',
      'any.required': 'A senha é obrigatória.',
      'string.min': 'A senha deve ter pelo menos 6 caracteres.',
      'string.max': 'A senha deve ter no máximo 30 caracteres.',
    }),

  confirmpassword: Joi.string()
    .valid(Joi.ref('password')) 
    .required()
    .messages({
      'any.only': 'A confirmação de senha não coincide com a senha.',
      'any.required': 'A confirmação de senha é obrigatória.',
    }),
})
  .with('password', 'confirmpassword'); 

export default userSchema;