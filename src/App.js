/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header >
        <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="/">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="/">Link</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="/">Action</a></li>
            <li><a classNameName="dropdown-item" href="/">Another action</a></li>
            <li><hr classNameName="dropdown-divider"/></li>
            <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="/">Action</a></li>
            <li><a classNameName="dropdown-item" href="/">Another action</a></li>
            {/* <li><hr classNameName="dropdown-divider"> </hr></li> */}
            <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

  <div classNameName="btn-group">
    <button type="button" classNameName="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Action
    </button>
    <ul classNameName="dropdown-menu">
      <li><a classNameName="dropdown-item" href="/">Action</a></li>
      <li><a classNameName="dropdown-item" href="/">Another action</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Action</a></li>
      <li><a classNameName="dropdown-item" href="/">Another action</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><hr classNameName="dropdown-divider"/></li>
      <li><a classNameName="dropdown-item" href="/">Separated link</a></li>
    </ul>
  </div>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div classNameName="dropdown">
    <button classNameName="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul classNameName="dropdown-menu dropdown-menu-dark">
      <li><a classNameName="dropdown-item active" href="/">Action</a></li>
      <li><a classNameName="dropdown-item" href="/">Another action</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
      <li><hr classNameName="dropdown-divider"/></li>
      <li><a classNameName="dropdown-item" href="/">Separated link</a></li>
    </ul>
  </div>
    </div>
  </div>
</nav>
      </header>
      <div className="list-group">
  <a href="/" className="list-group-item list-group-item-action">A simple default list group item</a>

  <a href="/" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
  <a href="/" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>
<div className="modal-body">
  <h2 className="fs-5">Popover in a modal</h2>
  <p>This <button className="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
  <hr/>
  <h2 className="fs-5">Tooltips in a modal</h2>
  <p><a href="/" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="/" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
<ul className="nav nav-underline">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

    </div>
  );
}

export default App;
