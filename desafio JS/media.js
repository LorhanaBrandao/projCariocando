nome = prompt ('Informe seu nome')
n1 = parseFloat(prompt ('Informe a nota 1'))
n2 = parseFloat(prompt ('Informe a nota 2'))
media = ((n1+n2)/2)
if (media>=9){
    alert('Ótimo'+media)
}
else if (media>=7){
    alert('bom'+media)
}
else if(media>=5){
    alert('Regular'+media)
}
else{
    alert('Insuficiente'+media)
}