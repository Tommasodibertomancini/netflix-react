import { Component } from 'react';
import { Navbar, Dropdown, Image } from 'react-bootstrap';
import { Search, Bell } from 'react-bootstrap-icons';

class MyNavbar extends Component {
  render() {
    const { handleChangePage } = this.props;

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
              alt='Logo'
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
              <Search className='icons' />
              <div id='kids' className='fw-normal'>
                KIDS
              </div>
              <Bell className='icons' />
              <Dropdown>
                <Dropdown.Toggle
                  as='div'
                  className='d-flex align-items-center'
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src='../../public/assets/media/avatar.png'
                    style={{ width: '40px' }}
                    roundedCircle
                    alt='Avatar'
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className='dropdown-menu-lg-end bg-black rounded-0'>
                  <Dropdown.Item
                    href='netflixProfile.html'
                    className='d-flex align-items-center'
                  >
                    <Image
                      src='../../public/assets/media/avatar.png'
                      alt='Avatar'
                      className='me-3'
                      id='avatarSmall'
                      style={{ width: '30px' }}
                    />
                    Epicoder#1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleChangePage(2)}>
                    Manage profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleChangePage(3)}>
                    Account
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>Help Center</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#'>Signout Netflix</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavbar;