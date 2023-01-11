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
  display: flex;
  flex-direction: column;

  header {
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
      display: flex;
      justify-content: center;
      ul {
        width: 18%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: start;
        li {
          width: 100%;
          a {
            font-style: normal;
            font-weight: 300;
            font-size: 1.6rem;
            line-height: 47px;
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }
  }
  footer {
    background: #f4f4f4;
    margin-top: 38.58rem;
    border-top: 0.4px solid #c0c0c0;
    height: 2rem;
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
</style>
