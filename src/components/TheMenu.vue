<template>
  <div class="Container">
    <header>
      <span>Alb</span>
      <strong>Calc</strong>
    </header>
    <main>
      <h2>Minimalist Online Calculators</h2>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/pxtorem">PX to REM converter</router-link>
          </li>
          <li>
            <router-link to="/pxtorem">PX to EM converter</router-link>
          </li>
          <li>
            <router-link to="/pxtorem">PX to percentage converter</router-link>
          </li>
        </ul>
      </nav>
    </main>
    <footer>
      <strong>version: 0.0.0</strong>
      <a href="#">Developed from AndersonVilela</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  min-width: 100vw;
  min-height: 100vh;

  background: #fdfdfd;

  header {
    height: 5vh;
    display: flex;
    padding: 0.5rem 0 0 0.5rem;
    letter-spacing: 0.06em;

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;

      color: #000000;
    }
    strong {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;

      color: #000000;
    }
  }
  main {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 59px;
      align-items: center;

      color: #000000;

      margin: 2rem 0 1.5rem 0;
    }
    .nav {
      width: 22rem;
      display: flex;
      justify-content: center;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: start;
        li {
          width: 100%;
          a {
            font-style: normal;
            font-weight: 300;
            font-size: 1.6rem;
            line-height: 2.2rem;
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }
  }
  footer {
    background: #584747;
    height: 5vh;
    padding: 0.5rem 0 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    color: #a88d8d;
    a {
      text-decoration: none;
      color: #a88d8d;
    }
  }
}

@media (max-width: 540px) {
  .Container {
    main {
      h2 {
        font-size: 2rem;
      }
      .nav {
        width: 18rem;
      }
    }
  }
}

@media (max-width: 280px) {
  .Container {
    main {
      height: 90vh;
      h2 {
        font-size: 1.4rem;
      }
      .nav {
        width: 11.5rem;
        ul {
          li {
            a {
              font-size: 1rem;
            }
          }
        }
      }
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      strong {
        font-size: 0.7rem;
      }
      a {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
