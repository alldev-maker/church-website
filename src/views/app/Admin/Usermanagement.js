import React, { useState, Fragment } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
  CardSubtitle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import MaterialTable from 'material-table'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core';
import Breadcrumb from 'containers/navs/Breadcrumb';


const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', church: "City Church", },
  { id: 2, name: "Raj", email: 'raj@gmail.com', church: "City Church", },
  { id: 3, name: "David", email: 'david342@gmail.com', church: "City Church", },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', church: "City Church", },
]

export const UserManagement = ({ match }) => {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Church", field: 'church', },
  ]

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="User Management" match={match} />
          <div className="text-zero top-right-button-container">
            <div className="user d-inline-block">
              <h3>Total Users: {data.length} out of 100</h3>
            </div></div>

          <MaterialTable
            style={{ borderRadius: "30px" }}
            title="All Users"
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newRow) => new Promise((resolve, reject) => {
                const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
                setTimeout(() => {
                  setData(updatedRows)
                  resolve()
                }, 2000)
              }),
              onRowDelete: selectedRow => new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                const updatedRows = [...data]
                updatedRows.splice(index, 1)
                setTimeout(() => {
                  setData(updatedRows)
                  resolve()
                }, 2000)
              }),
              onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data]
                updatedRows[index] = updatedRow
                setTimeout(() => {
                  setData(updatedRows)
                  resolve()
                }, 2000)
              }),
              onBulkUpdate: selectedRows => new Promise((resolve, reject) => {
                const rows = Object.values(selectedRows)
                const updatedRows = [...data]
                let index;
                rows.map(emp => {
                  index = emp.oldData.tableData.id
                  updatedRows[index] = emp.newData
                })
                setTimeout(() => {
                  setData(updatedRows)
                  resolve()
                }, 2000)

              })

            }}
            options={{
              actionsColumnIndex: -1, addRowPosition: "first"
            }}
          />


        </Colxx>
      </Row>
    </>
  );
};
export default UserManagement;