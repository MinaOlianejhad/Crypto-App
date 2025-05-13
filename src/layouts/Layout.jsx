import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          React.js | API: <a href="https://www.coingecko.com/">CoinGecko</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mina with love💙</p>
      </footer>
    </>
  );
}

export default Layout;
