jQuery('#formulario').validate({
rules:{
name:"required",
email:{
required:true,
email:true

},


password:{
required:true,
minlength:10
},


},messages:{

name:"Por favor , escriba su nombre",
email:{
required:"Por favor ingresa el correo electronico",
email:"Por favor introduzca un correo electronico valido",
},



password:{
required:"Por favor, introduzca su contraseña",
minlength:"La contraseña debe tener 10 caracteres"
},
},

submitHandler:function(form)

{
form.submit();



}
});