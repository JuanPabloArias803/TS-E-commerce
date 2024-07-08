(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))g(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&g(l)}).observe(document,{childList:!0,subtree:!0});function h(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(i){if(i.ep)return;i.ep=!0;const r=h(i);fetch(i.href,r)}})();function w(){const t=document.getElementById("root");t.innerHTML=`
        <h2 class="not-found-message">404 Page Not Found</h2>
    `}const o=`<svg class="coin" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" viewBox="0 0 256 256" width="256" height="256">
	<rect fill="rgba(0,0,0,255)" x="80" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="96" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="112" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="128" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="144" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="160" y="0" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="48" y="16" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="64" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="112" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="128" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="144" y="16" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="160" y="16" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="176" y="16" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="192" y="16" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="32" y="32" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="48" y="32" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="32" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="80" y="32" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="32" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="32" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="32" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="32" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="32" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="176" y="32" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="192" y="32" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="208" y="32" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="16" y="48" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="32" y="48" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="48" y="48" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="64" y="48" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="80" y="48" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="96" y="48" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="112" y="48" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="128" y="48" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="144" y="48" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="48" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="176" y="48" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="48" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="208" y="48" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="224" y="48" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="16" y="64" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="32" y="64" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="48" y="64" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="64" y="64" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="80" y="64" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="64" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="112" y="64" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="128" y="64" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="144" y="64" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="160" y="64" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="176" y="64" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="64" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="208" y="64" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="224" y="64" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="80" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="80" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="32" y="80" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="48" y="80" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="64" y="80" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="80" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="80" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="112" y="80" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="128" y="80" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="80" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="80" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="176" y="80" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="80" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="80" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="80" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="80" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="96" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="32" y="96" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="48" y="96" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="96" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="96" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="176" y="96" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="192" y="96" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="96" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="96" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="96" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="112" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="32" y="112" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="48" y="112" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="112" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="112" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="176" y="112" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="192" y="112" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="112" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="112" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="112" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="128" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="32" y="128" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="48" y="128" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="128" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="128" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="176" y="128" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="192" y="128" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="128" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="128" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="128" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="144" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="32" y="144" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="48" y="144" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="80" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="144" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="176" y="144" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="192" y="144" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="144" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="144" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="144" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="0" y="160" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="16" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="32" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="48" y="160" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="64" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="80" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="160" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="160" y="160" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="176" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="160" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="208" y="160" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="224" y="160" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="240" y="160" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="16" y="176" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="32" y="176" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="48" y="176" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="64" y="176" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="80" y="176" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="176" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="112" y="176" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="128" y="176" width="16" height="16"/>
	<rect fill="rgba(255,255,251,255)" x="144" y="176" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="160" y="176" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="176" y="176" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="176" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="208" y="176" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="224" y="176" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="16" y="192" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="32" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="48" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="64" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="80" y="192" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="192" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="112" y="192" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="128" y="192" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="144" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="176" y="192" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="192" y="192" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="208" y="192" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="224" y="192" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="32" y="208" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="48" y="208" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="64" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="80" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="96" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="112" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="128" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="144" y="208" width="16" height="16"/>
	<rect fill="rgba(255,232,94,255)" x="160" y="208" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="176" y="208" width="16" height="16"/>
	<rect fill="rgba(219,113,3,255)" x="192" y="208" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="208" y="208" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="48" y="224" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="64" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="80" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="96" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="112" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="128" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="144" y="224" width="16" height="16"/>
	<rect fill="rgba(255,176,57,255)" x="160" y="224" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="176" y="224" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="192" y="224" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="80" y="240" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="96" y="240" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="112" y="240" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="128" y="240" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="144" y="240" width="16" height="16"/>
	<rect fill="rgba(0,0,0,255)" x="160" y="240" width="16" height="16"/>
</svg>`;function y(){const t=document.querySelector("#root");t.innerHTML=`
        <div class="home-container">
            <img class="home-logo">
            <div class="home-title">
              <h1>Tienda Riwí</h1>
              ${o}
            </div>
            <button class="home-btn">Bienvenido</button>
        </div>
    `,document.querySelector(".home-btn").addEventListener("click",()=>{c("/products")})}function b(t,e,h,g,i,r){return`
        <article class="card" id="${e}">
            <header>
                <div class="card-img">
                    <img src="${t}" class="card-img">
                </div>
            </header>
            <div class="card-description">
                <h3>${h.substring(0,22)}...</h3>
                <strong>${g} Riwí${o}</strong>
                <p>Calificación: ${i}⭐ (${r} reseñas)</p>
            </div>
        </article>
    `}var a=(t=>(t.Electronics="electronics",t.Jewelery="jewelery",t.MenSClothing="men's clothing",t.WomenSClothing="women's clothing",t))(a||{});function n(){return`
        <div class="filter-container">
            <form>
                <label>Filtrar por:</label>    
                <select class="category-filter">
                    <option value="all">Todos los productos</option>
                    <option value="${a.Electronics}">Electrónica</option>
                    <option value="${a.Jewelery}">Joyería</option>
                    <option value="${a.MenSClothing}">Ropa masculina</option>
                    <option value="${a.WomenSClothing}">Ropa femenina</option>
                </select>
            </form>
        </div>
    `}async function d(t="https://fakestoreapi.com/products"){return await(await fetch(t)).json()}async function x(){let t=await d(),e="";const h=()=>{e="",t.forEach(l=>{e+=`${b(l.image,l.id,l.title,l.price,l.rating.rate,l.rating.count)}`})},g=()=>{document.querySelectorAll(".card").forEach(l=>{l.addEventListener("click",()=>{c(`/products/product-info?id=${l.id}`)})})};h();const i=document.getElementById("root");i.innerHTML=`
        <div class="board-container">
            <img class="home-logo" src="/public/logo.png">
            <p class="board-title">Canjea tus Riwí${o} por premios!</p>
            ${n()}
            <div class="board-products">
                ${e}
            </div>
        </div>
    `,g();const r=document.querySelector(".category-filter");r.addEventListener("change",async()=>{const l=document.querySelector(".board-products");r.value==="all"?t=await d():t=await d(`https://fakestoreapi.com/products/category/${r.value}`),h(),l.innerHTML=`
            ${e}
        `,g()})}async function s(){const e=new URLSearchParams(window.location.search).get("id");try{const h=await d(`https://fakestoreapi.com/products/${e}`),g=document.getElementById("root");g.innerHTML=`
      <div class="product-container">
        <div class="product-img">
          <img src="${h.image}">
        </div>
        <div class="product-info">
          <h2>${h.title}</h2>
          <p>${h.description}</p>
          <strong>${h.price} Riwí${o}</strong>
          <p>${h.rating.rate}⭐ <b>(${h.rating.count} reseñas)</b></p>
          <button class="home-btn">Comprar</button>
        </div>
      </div>
    `,document.querySelector(".home-btn").addEventListener("click",()=>{alert("Gracias por tu compra!"),c("/products")})}catch{c("/not-found")}}const u={public:[{path:"/not-found",page:w},{path:"/home",page:y},{path:"/products",page:x},{path:"/products/product-info",page:s}]};function f(){const t=window.location.pathname;if(t==="/"){c("/home");return}const e=u.public.find(h=>h.path===t);if(e){e.page();return}c("/not-found")}function c(t){window.history.pushState({},"",window.location.origin+t),f()}window.addEventListener("popstate",f);function p(){if(!document.getElementById("root"))throw new Error("Ocurrió un error inesperado");f()}document.addEventListener("DOMContentLoaded",p);
