import GiftCard from "./components/GiftCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import HomePage from "./components/HomePage";
import { TEST_GIFTS } from "./TEST_GIFTS";
import RandomPage from "./components/RandomPage";
import { Route, Routes, Link } from "react-router-dom";
import GiftPage from "./components/GiftPage";
import { Navbar, Container, Nav } from 'react-bootstrap'




function App() {

  const [giftsList, setGiftsList] = useState( TEST_GIFTS )


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Wish List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={ <HomePage giftsList={giftsList} /> } />
          <Route path="/random" element={ <RandomPage giftsList={giftsList}/> } />
          <Route path="/gifts/:giftId" element={ <GiftPage giftsList={giftsList}/> } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
