import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";

export const DataTable = ({data}) => {
    return <Table selectable={false}>
        <TableHead>
            <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Humidity</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Data</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                data.map((item, index) =>
                    <TableRow key={index}>
                        <TableCell>{item.key}</TableCell>
                        <TableCell>{item.temperatura}</TableCell>
                        <TableCell>{item.umidade}</TableCell>
                        <TableCell>{item.cliente}</TableCell>
                        <TableCell>{item.data}</TableCell>
                    </TableRow>
                )
            }
        </TableBody>
    </Table>
};