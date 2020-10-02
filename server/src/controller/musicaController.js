const musicas = require ("../model/musicas.json")

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id, //acessando a propriedade
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
         
    }    
    return novaMusica
})    

const getMusicas = (request,response) => {
    console.log(request.url)
    response.status(200).send(novaListaMusicas)

}
const getMusicaByID = (request,response) => {
   const id = request.params.id;
   const musica = novaListaMusicas.find(musica => musica.id == id)
   console.log(musica);
   if (musica) {
     response.status(200).send(musica)  
   }else{
    response.status(400).send("Musica não encontrada")  
   }  
    
}
//---------------------ARTISTAS---------------------------------------------------------

//nova lista de artistas
const listaArtistas = musicas.map(musica => {
    const novoArtista = {
            id: musica.artists.id,
            nome: musica.artists.name            
    }    
    return novoArtista
})

const getArtistas = (request,response) => {
    //console.log(request.url)
    const listaSemRepetir = []

    listaArtistas.forEach(artista => { //forEach percorre os itens da listas
        const encontrei = listaSemRepetir.find(item => item.id == artista.id)
         if(!encontrei) {   
             listaSemRepetir.push(artista)
        }
    })
    response.status(200).send(listaSemRepetir)
}

const listaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id, //acessando a propriedade
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name,
        duracao: musica.duration_ms
         
    }    
    return novaMusica
})    

const getArtistasById = (request, response) => {
    const id = request.params.id
    const artista = listaArtistas.find(artista => artista.id == id)
    if (artista) {
        const musicas = listaMusicas.filter(item => item.artista == artista.nome)

        const novoArtista = {
        id: artista.id, 
        nome_do_artista: artista.nome,
        musicas: musicas
    }
        response.status(200).send(novoArtista)  
    }else{
        response.status(400).send("Artista Não encontrada!")     
      
    }
}

//-----------------------------ALBUNS------------------------------
const listaAlbuns = musicas.map(musica => {
    const album = {
        id: musica.album.id,
        nome: musica.album.name,
        data_lancamento:musica.album.release_date,
        total_musicas: musica.album.total_tracks,
        imagem: musica.album.url
    }
    return album
})
const getAlbuns = (request,response) => {

    const listaSemRepetir = []

    listaAlbuns.forEach(album => { //forEach percorre os itens da listas        
         if(!listaSemRepetir.find(item => item.id == album.id)) {   
            listaSemRepetir.push(album)
        }
    })   
    response.status(200).send(listaSemRepetir)
}

const getAlbumPorNome = (request,response) => {
    const nome = request.params.nome;

    const album = listaAlbuns.find(album => 
        album.nome.toLowerCase().split('').join('-') === nome)


    const musicasAlbum = novaListaMusicas.filter(musica =>{
        return musica.album_nome.toLowerCase().split(' ').join('-') === nome

    })

    const novoAlbum = {
        id: album.id,
        nome: album.nome,
        data_lancamento: album.data_lancamento,
        total_musicas: album.total_musicas,
        imagem: album.imagem,
        musicas: musicasAlbum
    }
    
    response.status(200).send(novoAlbum)
   
        /*const minuscula = album.nome.toLowerCase()
        console.log(minuscula);
        const separarPorEspaco = minuscula.split('')
        console.log(separarPorEspaco);
        const juntarPorhifen = separarPorEspaco.join('-')
        console.log(juntarPorhifen);*/
        //separa(split) e junta(join)
        //poderia ser só numa linha : console.log(album.nome.toLowerCase().split('').join('-'))  //separa(split) e junta(join)
}

module.exports = {
    getMusicas,
    getMusicaByID,
    getArtistas,
    getArtistasById,
    getAlbuns,
    getAlbumPorNome
}
