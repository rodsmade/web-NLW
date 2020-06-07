import axios from 'axios';
// essa biblioteca axios faz requisições http à API,
//      é melhor usar ela do que a biblioteca fetch que é nativa do navegador porque com o axios dá pra criar
//      uma baseURL, que é uma URL que vai se repetir em todas as requisições. tipo uma variável global, se mudar o domínio
//      do site, o axios já muda a rota em todos os cantos.


const api = axios.create({
    baseURL: 'http://localhost:3333' // rota da API que vou consumir
})

export default api;