import { Component } from 'react';
import MyNavbar from './MyNavbar';
import MySettings from './MySettings';


class SettingsPage extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <MySettings />
      </>
    );
  }
}

export default SettingsPage;