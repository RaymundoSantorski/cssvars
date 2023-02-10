let inputs = document.querySelectorAll('.input');
function handleChange(){
    console.log(this.value);
}

inputs.forEach(input => {
    input.addEventListener('change', handleChange);
    input.addEventListener('mousemove', handleChange);
});