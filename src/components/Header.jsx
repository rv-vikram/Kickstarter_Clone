import "../styles/header.css"

export function Header() {
    

  return (
    <nav id="header">
      <div id="link_wrapper">
        <a href="www.random.com">Discover</a>
        <a href="www.random.com">Start a project</a>
      </div>
      <div id="logo_wrapper">
        <img
          src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
          alt="kickstart-logo"
        />
      </div>
      <div id="login_wrapper">
        <div id="search">
          <span>Search</span>
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <a href="www.random.com">Log in</a>
      </div>
    </nav>
  );
}
