import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {contact.fullName}
            </TableCell>
            <TableCell align="left">{contact.email}</TableCell>
            <TableCell align="left">{contact.church}</TableCell>
            <Stack direction="row" spacing={2}>
                <TableCell >
                    <Button type="button" color="primary" startIcon={<EditIcon />} onClick={(event) => handleEditClick(event, contact)}></Button>
                    <Button type="button" color="primary" startIcon={<DeleteIcon />} onClick={() => handleDeleteClick(contact.id)}></Button>
                </TableCell>
            </Stack>
        </TableRow >
    )
}

export default ReadOnlyRow