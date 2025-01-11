import { Component } from 'react';
import { Dropdown, Container, Spinner } from 'react-bootstrap';
import { Grid, Grid3x3 } from 'react-bootstrap-icons';
import FilmList from './FilmList';

class MyHome extends Component {
  state = {
    isLoading: true,
  };

  getLoading = async () => {
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 4000);
    }
  };

  render() {
    this.getLoading();
    return (
      <Container fluid className='px-4 flex-grow-1'>
        {this.state.isLoading && (
          <div className='d-flex justify-content-center align-items-center spinnerBox'>
            <Spinner animation='border' variant='danger'></Spinner>
          </div>
        )}

        {!this.state.isLoading && (
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <h2 className='mb-4'>TV Shows</h2>
              <div className='btn-group' role='group'>
                <Dropdown className='ms-4 mt-1'>
                  <Dropdown.Toggle
                    variant='secondary'
                    size='sm'
                    className='rounded-0'
                    id='dropdown-basic'
                    style={{ backgroundColor: '#221f1f' }}
                  >
                    Genres&nbsp;
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>SuperHeroes</Dropdown.Item>
                    <Dropdown.Item href='#'>Romantic</Dropdown.Item>
                    <Dropdown.Item href='#'>Comedy</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <Grid className='icons'></Grid>
              <Grid3x3 className='icons'></Grid3x3>
            </div>
          </div>
        )}

        <FilmList
          title='Trending Now'
          query='Avengers'
          isLoaded={!this.state.isLoading}
        />

        <FilmList
          title='Watch it Again'
          query='Batman'
          isLoaded={!this.state.isLoading}
        />

        <FilmList
          title='New Releases'
          query='Lion King'
          isLoaded={!this.state.isLoading}
        />
      </Container>
    );
  }
}

export default MyHome;