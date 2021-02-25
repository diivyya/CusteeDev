import React from 'react'
import Tabs from 'react-bootstrap/Tabs' 
  export default function ControlTabs() {
    function ControlledTabs() {
        const [key, setKey] = useState('home');
      
      return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
        </Tab>
        <Tab eventKey="profile" title="Profile">
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        </Tab>
      </Tabs>
      )
  }
}
  