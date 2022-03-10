function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')       
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         //mesma coisa de criar TAG img com id foto la no HTML
         img.setAttribute('id', 'foto')

         if (fsex[0].checked) {
             genero = 'Homem'

             if (idade <= 10) {
                 //Crianca   
                 img.setAttribute('src', 'bebe-m.png')              
             } else if(idade < 28) {
                 //Jovem
                 img.setAttribute('src', 'jovem-m.png')   
             } else if(idade < 50) {
                 //Jovem
                 img.setAttribute('src', 'adulto-m.png')                          
             } else {
                 //Idoso
                 img.setAttribute('src', 'idoso-m.png')
             }


         } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade <= 10) {
                //Crianca   
                img.setAttribute('src', 'bebe-f.png')              
            } else if(idade < 28) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')      
            } else if(idade < 50) {
                //Jovem
                img.setAttribute('src', 'adulto-f.png')                      
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img) //adiciona coloca em apendice ao filho div
    }

}