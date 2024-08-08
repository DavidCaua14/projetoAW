function limparValor(inputElement) {
    if (inputElement.value === inputElement.defaultValue) {
        inputElement.value = '';
    }
}