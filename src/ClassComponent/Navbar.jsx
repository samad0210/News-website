import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  postSearch(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:""})
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/" onClick={()=>this.props.changeSearch("")}>Newsapp</NavLink>
          <button className="navbar-toggler outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item"><NavLink className="nav-link text-light" to="/ALL" onClick={()=>this.props.changeSearch("")}>ALL</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Politics" onClick={()=>this.props.changeSearch("")}>Politics</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime" onClick={()=>this.props.changeSearch("")}>Crime</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Science" onClick={()=>this.props.changeSearch("")}>Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Business" onClick={()=>this.props.changeSearch("")}>Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology" onClick={()=>this.props.changeSearch("")}>Technology</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Sports" onClick={()=>this.props.changeSearch("")}>Sports</NavLink></li>
              
              
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/Cricket" onClick={()=>this.props.changeSearch("")}>Cricket</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/IPL" onClick={()=>this.props.changeSearch("")}>IPL</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Economics" onClick={()=>this.props.changeSearch("")}>Economics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/International" onClick={()=>this.props.changeSearch("")}>International</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/India" onClick={()=>this.props.changeSearch("")}>India</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Jokes" onClick={()=>this.props.changeSearch("")}>Jokes</NavLink></li>
                  </ul>
                  </li>

                  
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={()=>this.props.changelanguage("hi")} >Hindi</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changelanguage("en")} >English</button></li>
                  
                  
                  </ul>
              </li>
              
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
              <input className="form-control me-2" name="search" value={this.state.search} onChange={(e) => this.setState({search:e.target.value})} placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
