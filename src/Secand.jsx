import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./Secand.css";
import Home from "./login/Home";
import Login from "./login/Login";
import Signup from "./login/Signup";
import ProtectedRoute from "./login/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function Secand() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Secand;
