import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import {Card} from "react-bootstrap";


class ProfilContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const roleuser = localStorage.getItem("roleuser");
    const nama = localStorage.getItem("nama");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
      roleuser,
      nama,
    };
  }

  render() {
    return (
      <div align="center"> 
        <NavbarComponent />
        <Container>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Card style={{width: "30rem" }}>
           <div class="card text-white bg-info mb-3">
            <Card.Body className="text-center">
            <Card.Header>Halo, {this.state.nama}</Card.Header>
            </Card.Body>
             </div>
        </Card>
        </Container>
      </div>
    );
  }
}

export default connect()(ProfilContainer);
