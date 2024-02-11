import React from 'react'

export default function NavBar(props) {
  return (
    <div>
      <nav  className={`navbar navbar-expand-lg bg-${props.nav}`}>
  <div  className="container-fluid">
    <a style={{color: props.nav==="light"?"black":"white"}} className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{color: props.nav==="light"?"black":"white"}} className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button onClick={()=>{props.setTheme("white","primary","black","light"); props.showAlert("Light Mode has been enabled")}} style={{marginRight: "20px"}} class="btn btn-outline-primary" type="button">Primary</button>
        <button onClick={()=>{props.setTheme("gray","dark","white","dark"); props.showAlert("Dark Mode has been enabled")}} style={{marginRight: "20px"}} class="btn btn-outline-dark" type="button">Dark</button>
        <button onClick={()=>{props.setTheme("#C8E6C9","success","#2E7D32","success"); props.showAlert("Green Mode has been enabled")}} style={{marginRight: "20px"}} class="btn btn-outline-success" type="button">Green</button>
        <button onClick={()=>{props.setTheme("#EF9A9A","danger","#C62828","danger"); props.showAlert("Red Mode has been enabled")}} style={{marginRight: "20px"}} class="btn btn-outline-danger" type="button">Red</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
