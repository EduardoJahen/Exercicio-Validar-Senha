function validarSenha() {
if (senhaComprimento < 8){
return false;
}
if(!/[A-Z]/.test(senha)){
return false;
}
if(!/[a-z]/.test(senha)){
    return false;
}
if(!/\d/.test(senha)){
    return false;
}

return true
}