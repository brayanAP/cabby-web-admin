/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import Button from 'components/atoms/Button'
import ScreenMenuPleasures from 'components/molecules/ScreenMenuPleasures'
import usePaginationPasajeros from 'hooks/usePaginationPasajeros'
import CssBaseline from '@mui/material/CssBaseline'
import MaUTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTable, Column } from 'react-table'
import { Pasajero } from 'types'
import { Frame } from './style'

export default () => {
    const {
        numPasajeros,
        gettingPasajeros,
        arrPasajeros,
        getPasajeros,
    } = usePaginationPasajeros()

    const columns: Column<Pasajero>[] = useMemo(() => ([
        { Header: 'Nombre', accessor: 'nombreCompleto' },
        { Header: 'E-mail', accessor: 'email' },
        { Header: 'Telefono', accessor: 'telefono' },
    ]), [])

    const {
        getTableProps, headerGroups, rows, prepareRow,
    } = useTable({
        columns,
        data: arrPasajeros,
    })

    return (
        <ScreenMenuPleasures>
            <Frame>
                <Button
                    variant="outlined"
                    disabled={
                        gettingPasajeros
                        || numPasajeros === 0
                        || (arrPasajeros.length >= numPasajeros)
                    }
                    onClick={getPasajeros}
                >
                    Get conductores
                </Button>
                <CssBaseline />
                <MaUTable {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <TableCell {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </MaUTable>
            </Frame>
        </ScreenMenuPleasures>
    )
}
