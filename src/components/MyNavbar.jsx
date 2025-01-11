import { Component } from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { Search, Bell } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand='lg'
        data-bs-theme='dark'
        style={{ backgroundColor: '#221f1f' }}
      >
        <div className='container-fluid'>
          <Navbar.Brand href='#'>
            <img
              src='../../public/assets/media/logo.png'
              style={{ width: '100px', height: '55px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active fw-bolder' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-normal' href='#'>
                  TV Shows
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-normal' href='#'>
                  Movies
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-normal' href='#'>
                  Recently Added
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link fw-normal' href='#'>
                  My List
                </a>
              </li>
            </ul>
            <div className='d-flex align-items-center'>
              <Search className='icons'></Search>
              <div id='kids' className='fw-normal'>
                KIDS
              </div>
              <Bell className='icons'></Bell>
              <NavbarBrand href='#'><img
              src='../../public/assets/media/avatar.png'
              style={{ width: '28px' }}
            /></NavbarBrand>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavbar;
