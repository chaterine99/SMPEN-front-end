import React from "react";
import { Spinner } from "reactstrap";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getInventoryList: state.inventorys.getInventoryList,
    errorInventoryList: state.inventorys.errorInventoryList,
    HitungInventory: state.inventorys.getInventoryList.length,
    HitungLogging: state.inventorys.getLoggingList.length,
  };
};

const AnalitikComponent = (props) => {
  let x = [];
  let y = [];
  let z = [];
  let a = [];
  let b = [];
  let c = [];
  for (let i = 0; i < props.HitungInventory; i++) {
    x[i] = props.getInventoryList[i].qty;
    y[i] = props.getInventoryList[i].name;
  }

  for (let i = 0; i < y.length; i++) {
    if (x[i] < 50) {
      a[i] = x[i];
      z[i] = y[i];
    }
  }

  for (let i = 0; i < y.length; i++) {
    if (x[i] > 50) {
      b[i] = x[i];
      c[i] = y[i];
    }
  }

  return (
    <Container>
      {props.getInventoryList ? (
        <div align="center">
          <Row>
         <Col>
            <br></br><br></br><br></br>
            <Card style={{width: "25rem" }}>
                  <div class="card text-white bg-danger mb-3">
                  <Card.Body className="text-center">
                    <Card.Header>JUMLAH LOGGING</Card.Header>
                    <Card.Title><h5>{props.HitungLogging}</h5></Card.Title>
                  </Card.Body>
                  </div>
              </Card>
              
              <br></br><br></br><br></br>
             <Card style={{width: "25rem" }}>
                  <div class="card text-white bg-danger mb-4">
                  <Card.Body className="text-center">
                    <Card.Header>JUMLAH BARANG YANG DIBAWAH 50</Card.Header>
                    <Card.Title><h5>{z} : {a}</h5></Card.Title>
                  </Card.Body>
                  </div>
              </Card>
            
            
            <br></br><br></br>
            <Card style={{width: "25rem" }}>
                  <div class="card text-white bg-danger mb-4">
                  <Card.Body className="text-center">
                    <Card.Header>JUMLAH BARANG YANG DIATAS 50</Card.Header>
                    <Card.Title><h5>{c} : {b}</h5></Card.Title>
                  </Card.Body>
                  </div>
              </Card>
              </Col>
            
          </Row>
        </div>
      ) : (
        <div className="text-center">
          {props.errorInventoryList ? (
            <h4>{props.errorInventoryList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(AnalitikComponent);
