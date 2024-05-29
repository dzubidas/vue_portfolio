<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav>
      <div class="header__logo">MK</div>
      <div class="header__navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <a class="btn-primary" href="#">Contact</a>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer__wrapper">
      <div class="footer__item">@2024 Michal Kaszas</div>
      <div class="footer__item footer__item--social">
        <ul>
          <li class="social__item">GitHub</li>
          <li class="social__item">Linkedin</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
    //margin-bottom: 2rem;
    background-color: black;
    height: 100px;
    border: 1px solid black;
  }
  
  /*nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 0;
    background-color: #ffcfca;
    color: #fff;
    display: flex;
    padding-right: 15px;
    padding-left: 15px;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    height: 55px;
    z-index: 50;
  }*/
  nav {
    background-color: #fff;
    height: 100%;
    border-radius: 20px;
  }
  
  nav a {
    color: #000;
    font-size: 1rem;
    text-transform: uppercase;
  }
  
  nav a:hover {
    background-color: transparent;
  }
  
  nav a {
    display: inline-block;
    padding: 0 1rem;
  
  }
  
  nav a:first-of-type {
    border: 0;
  }

  .header__logo {
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }
  
  footer {
    display: block;
    //position: fixed;
    //bottom: 0;
    width: 100%;
    height: 100px;
    background-color: black;
  }
  .footer__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 100%;
    border-radius: 20px;
    border: 1px solid black;
  }
  
  .footer__item--social ul {
    display: flex;
    flex-wrap: nowrap;
  }

  .footer__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    text-align: center;
  }

  .header__navigation .btn-primary {
    display: none;
  }

  @media (min-width: 810px) {
    nav {
      display: flex;
      align-items: center;
      padding: 1rem;
    }

    .header__logo {
      width: 50%;
    }
    
    .header__navigation {
      width: 50%;
    }
    
    .header__navigation .btn-primary {
      background: linear-gradient(to right, pink, orange);
      display: inline-block;
    }
    
    .footer__wrapper {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      border-radius: 20px;
      background-color: #fff;
    }

    .footer__item {
      display: flex;
      height: 100%;
      width: 50%;
      align-items: center;
      justify-content: center;
    }
    
  }
  
  /*@media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  
    header {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      
      a {
        font-size: 1.4rem;
        line-height: 1.5rem;
        font-weight: 100;
      }
    }
  }*/
</style>