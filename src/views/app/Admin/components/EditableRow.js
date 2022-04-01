import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <input required='required'
                    type='text'
                    class='form-control'
                    name='fullName'
                    placeholder='Enter a name...'
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </TableCell>
            <TableCell align="left"><input
                required='required'
                class='form-control'
                type='email'
                name='email'
                placeholder='Enter an Email Address...'
                value={editFormData.email}
                onChange={handleEditFormChange}
            ></input></TableCell>
            <TableCell align="left">  <input
                required='required'
                class='form-control'
                type='text'
                name='church'
                placeholder='Church Notes'
                value={editFormData.church}
                onChange={handleEditFormChange}
            ></input></TableCell>
            <Stack direction="row" spacing={2}>
                <TableCell align="right">
                    <Button color="primary" startIcon={<SaveIcon />} outline type="submit"></Button>
                    <Button color="primary" startIcon={<CancelIcon />} outline type="button" onClick={handleCancelClick}></Button>
                </TableCell>
            </Stack>
        </TableRow >
    )
}

export default EditableRow