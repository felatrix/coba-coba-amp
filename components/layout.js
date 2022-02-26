import Head from 'next/head';
import Link from 'next/link';

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Head>
        <title>{props.title ? `${props.title} | Next.js AMP Example` : 'Next.js AMP Example'}</title>
      </Head>

      <div className="header-wrapper">
        <div className="logo">
          <Link href="/">
            <a>Next.js AMP Example</a>
          </Link>
        </div>
        <button on="tap:sidebar.toggle" className="sidebar-trigger">
          ☰
        </button>
      </div>

      <div className="content-wrapper">{props.children}</div>

      <div className="footer-wrapper">
        <div className="info">
          <p>
            Note: This is a demo website.{' '}
            <a href="https://reacttricks.com/building-an-amp-website-with-react-and-next">Learn how to build it</a>.
          </p>
          <p>
            Data source: <a href="https://uinames.com">uinames.com</a>, <a href="https://unsplash.com">unsplash.com</a>{' '}
            &amp; <a href="https://jsonplaceholder.typicode.com">jsonplaceholder.typicode.com</a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 10px;
        }
        *,
        *::after,
        *::before {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 2rem;
          font-weight: 400;
          line-height: 1.8;
          background: #fff;
          color: #7a7a7a;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
        }
        h1,
        h2 {
          color: #333;
          margin: 50px 0 25px;
          line-height: 1.3;
        }
        h1 {
          font-weight: 700;
          margin: 0 0 30px;
          font-size: 3.2rem;
        }
        h2 {
          font-size: 2.8rem;
        }
        a {
          color: #ee2e30;
          text-decoration: none;
          background-color: transparent;
        }
        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
        .sidebar {
          background-color: #fff;
          color: #333;
          min-width: 250px;
          width: 250px;
        }
        .menu {
          list-style: none;
        }
        .menu a {
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 15px;
        }
        .menu a:hover {
          color: #333;
        }
        .content-wrapper {
          position: relative;
          min-height: 1px;
          padding: 20px;
          max-width: 600px;
          margin: 40px auto;
        }
        .header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background-image: url(/static/featured.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center 60px;
          height: 400px;
          min-width: 330px;
        }
        .logo {
          padding: 10px 20px;
        }
        .logo a {
          font-weight: 900;
          color: #111;
        }
        .logo a:hover {
          font-weight: 900;
          border-bottom: 2px solid #111;
        }
        .footer-wrapper {
          text-align: center;
          margin: 200px 0 100px;
          padding: 20px;
        }
        .info {
          color: #777;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
