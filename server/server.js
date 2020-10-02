const { response } = require("./src/app")
const app = require("./src/app")

const PORT = 3001

//FUNÇÃO
app.listen(PORT, function() {
    console.log("App rodando na porta " + PORT)
    
})






//EXEMPLO ----------------------------------------------------------------------
/*

  //console.log(musicas);

  //para modificar a lista 
  let listaNovaMusica = []  

  //percorrer a lista
  for (let i = 0; i < musicas.length; i++) {
    let musica = musicas[i]

    //console.log(musicas[i]);
    //console.log(musicas[i].id);

    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    console.log(novaMusica)

    listaNovaMusica.push(musica)//para acrescentar na lista

   // console.log(musicas[i].name); //pegando a propriedade
    //const element = array[i];
      
  }

  //map - criar o novo array 
  const lista = musicas.map(musica =>{
  const novaMusica = {
    id: musica.id,
    nome: musica.name,
    amostra: musica.preview_url,
    nome_album: musica.album.name,
    imagem: musica.album.url,
    artista: musica.artists.name
}
    return novaMusica
})

*/