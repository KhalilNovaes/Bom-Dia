const url_moeda = 'https://economia.awesomeapi.com.br/all'
const api_noticias = 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc'
const url_negocios = 'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc';
const url_entretenimento = 'https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc' ;
const url_ciencia = 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc';
const url_tecnologia = 'https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc';
const url_esporte = 'https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc' ;
const url_saude = 'https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=9d2d68abf1ca43e2bb0d55ab51b810cc';

async function getAPI(){

    const resposta = await fetch(url_moeda);
    const dadosApi = await resposta.json();
    const {USD} = dadosApi;
    
    document.getElementById('dolar').textContent = USD.bid;
    document.getElementById('euro').textContent = dadosApi.EUR.bid;
    document.getElementById('libra').textContent = dadosApi.GBP.bid;
    document.getElementById('yuam').textContent = dadosApi.CNY.bid;
    document.getElementById('bitcoin').textContent = dadosApi.BTC.bid;

    console.log(dadosApi);
}
getAPI();

async function noticias(){
    const resposta = await fetch(api_noticias);
    const dadosNoticia = await resposta.json();

    const {articles} = dadosNoticia;

    console.log(dadosNoticia);

    document.getElementById('g1').textContent = articles[0].title; 
    document.getElementById('g2').textContent = articles[1].title; 
    document.getElementById('g3').textContent = articles[2].title; 
    document.getElementById('g4').textContent = articles[3].title; 
    document.getElementById('g5').textContent = articles[4].title; 
    document.getElementById('g6').textContent = articles[5].title; 
    document.getElementById('g7').textContent = articles[6].title; 
    
    
     
}
noticias();

async function negocios(){

    const resposta = await fetch(url_negocios);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('n1').textContent = articles[0].title
    document.getElementById('n2').textContent = articles[1].title
    document.getElementById('n3').textContent = articles[2].title
    document.getElementById('n4').textContent = articles[3].title
    document.getElementById('n5').textContent = articles[4].title

    //console.log(dadosApi);
}  
negocios();

async function entretenimento(){

    const resposta = await fetch(url_entretenimento);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('e1').textContent = articles[0].title
    document.getElementById('e2').textContent = articles[1].title
    document.getElementById('e3').textContent = articles[2].title
    document.getElementById('e4').textContent = articles[3].title
    document.getElementById('e5').textContent = articles[4].title

}
entretenimento();

async function ciencia(){

    const resposta = await fetch(url_ciencia);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('c1').textContent = articles[0].title
    document.getElementById('c2').textContent = articles[1].title
    document.getElementById('c3').textContent = articles[2].title
    document.getElementById('c4').textContent = articles[3].title
    document.getElementById('c5').textContent = articles[4].title

}
ciencia();

async function tecnologia(){

    const resposta = await fetch(url_tecnologia);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('t1').textContent = articles[0].title
    document.getElementById('t2').textContent = articles[1].title
    document.getElementById('t3').textContent = articles[2].title
    document.getElementById('t4').textContent = articles[3].title
    document.getElementById('t5').textContent = articles[4].title
}
tecnologia();

async function esporte(){

    const resposta = await fetch(url_esporte);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('es1').textContent = articles[0].title
    document.getElementById('es2').textContent = articles[1].title
    document.getElementById('es3').textContent = articles[2].title
    document.getElementById('es4').textContent = articles[3].title
    document.getElementById('es5').textContent = articles[4].title

}
esporte();

async function saude(){

    const resposta = await fetch(url_saude);
    const dadosApi = await resposta.json();

    const {articles} = dadosApi;

    document.getElementById('s1').textContent = articles[0].title
    document.getElementById('s2').textContent = articles[1].title
    document.getElementById('s3').textContent = articles[2].title
    document.getElementById('s4').textContent = articles[3].title
    document.getElementById('s5').textContent = articles[4].title

} 
saude();
