const Joi = require('joi');

exports.name = Joi.string().min(3).max(30).messages({'string.base': 'name must be a string', 'any.required': "name is required", 'string.max': 'name is invalid','string.min': 'name is invalid'});
exports.email = Joi.string().email().trim().messages({ 'string.email': 'email must be a valid email', 'any.required': "email is required" ,'string.trim': 'Email may not contain any spaces at the beginning or end'});
exports.password = Joi.string().min(6).max(16).messages({'string.base': 'password must be a string', 'any.required': "password is required", 'string.max': 'password is invalid','string.min': 'password is invalid'});
exports.projectName = Joi.string().trim().replace(/\s /g,"").regex(/^[a-zA-Z0-9 ._-]+$/).min(3).max(12).messages({'string.base': 'project name must be a string', 'any.required': "project name is required", 'string.max': 'project name is invalid','string.min': 'project name is invalid',"string.pattern.base": "Invalid project name"})
exports.description = Joi.string().messages({ 'string.base': 'description must be a string', 'any.required': "description is required" })
exports.skip = Joi.number().default(0);
exports.limit = Joi.number().default(10);
exports.search = Joi.string().regex(/^[a-zA-Z0-9 ._-]+$/).default('').messages({"string.pattern.base": "Invalid input fields"})
exports.timestamp=Joi.string()
exports.tagName=Joi.string().trim().replace(/\s/g,"").min(3).max(12).messages({ 'string.base': 'Tag name must be a string', 'any.required':'Tag name is required' })
exports.textTag=Joi.string()
exports.id=Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({'any.required':'id is required',"string.pattern.base": "Invalid id"})
exports.projectId = Joi.string().messages({ 'string.base': 'projectId must be a string', 'any.required': "projectId is required" });
exports.messages=Joi.string().messages({ 'string.base': 'messages must be a string', 'any.required':'messages is required' });
exports.level=Joi.string().messages({ 'string.base': 'level must be a string', 'any.required':'level is required' });
exports.label=Joi.string().messages({ 'string.base': 'label must be a string','any.required':'label is required' });
exports.status=Joi.string().messages({ 'string.base': 'status must be a string', 'any.required':'status is required' })
exports.userId=Joi.string().messages({ 'string.base': 'userId must be a string', 'any.required': "userId is required" });


