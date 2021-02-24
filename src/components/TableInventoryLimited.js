import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Spinner } from "reactstrap";
import { Button, Col, Container, Row  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "logical_uid",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getInventoryList: state.inventorys.getInventoryList,
    errorInventoryList: state.inventorys.errorInventoryList,
  };
};

const TableInventoryLimited = (props) => {
  const columns = [
    {
      dataField: "logical_uid",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "15%",
      backgroundColor: '#AB1041' };
      },
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return { 
      backgroundColor: '#AB1041' };
      },
    },
    {
      dataField: "qty",
      text: "Jumlah",
      sort: true,
      headerStyle: () => {
        return { width: "10%" ,
        backgroundColor: '#AB1041'};
      },
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "30%",
        backgroundColor: '#AB1041' };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"DetailInventory/" + row.logical_uid}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getInventoryList ? (
        <ToolkitProvider
          bootstrap4
          keyField="logical_uid"
          data={props.getInventoryList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <div className="float-right"><br></br><br></br>
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorInventorysList ? (
            <h4>{props.errorInventorysList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableInventoryLimited);
