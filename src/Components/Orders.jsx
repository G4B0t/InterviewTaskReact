import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, storage, hard_disk, usb, graphic_card, weight, power, processor) {
  return { id, storage, hard_disk, usb, graphic_card, weight, power, processor };
}

const rows = [
  createData(
    0,
    '8 GB',
    '1 TB SSD',
    '2 x USB 3.0, 4 x USB 2.0',
    'NVIDIA GeForce GTX 770',
    '8.1 kg',
    '500 W PSU',
    'Intel Celeron N3050 Processor',
  ),
  createData(
    1,
    '16 GB',
    '2 TB HDD',
    '3 x USB 3.0, 4 x USB 2.0',
    'NVIDIA GeForce GTX 960',
    '12 kg',
    '500 W PSU',
    'AMD FX 4300 Processor',
  ),
  createData(
    2, 
    '8 GB',
    '3 TB HDD',
    '4 x USB 3.0, 4 x USB 2.0',
    'Redeon R7360',
    '16 lb',
    '450 W PSU',
    'AMD Athlon Quad-Core APU Athlon 5150',
  ),
  createData(
    3,
    '16 GB',
    '4 TB HDD',
    '5 x USB 3.0, 4 x USB 2.0',
    'NVIDIA GeForce GTX 1080',
    '13.8 lb',
    '500 w PSU',
    'AMD FX 8-Core Black Edition FX-8350',
  ),
  createData(
    4,
    '32 GB',
    '750 GB SSD',
    '2 x USB 3.0, 4 x USB 2.0, 1 x USB C',
    'Radeon RX 480',
    '7 kg',
    '1000 W PSU',
    'AMD FX 8-Core Black Edition FX-8370',
  ),
  createData(
    5,
    '32 GB',
    '2 TB HDD',
    '2 x USB C, 4 x USB 3.0',
    'Radeon R9 360',
    '6 kg',
    '450 W PSU',
    'Intel Core i7-6700K 4GHz Processor',
  ),
  createData(
    6,
    '8 GB',
    '2 TB HDD',
    '8 x USB 3.0',
    'NVIDIA GeForce GTX 1080',
    '15 lb',
    '1000 W PSU',
    'Intel Core i5-6400 Processor',
  ),
  createData(
    7,
    '16 GB',
    '500 GB SSD',
    '4 x USB 2.0',
    'NVIDIA GeForce GTX 770',
    '8 lb',
    '750 W PSU',
    'Intel Core i5-6400 Processor',
  ),
  createData(
    8,
    '2 GB',
    '2 TB HDD',
    '10 x USB 3.0, 10 x USB 2.0, 10 x USB C',
    'AMD FirePro W4100',
    '9 kg',
    '508 W PSU',
    'Intel Core i7 Extreme Edition 3 GHz Processor',
  ),
  createData(
    9,
    '512 MB',
    '80 GB SSD',
    '19 x USB 3.0, 4 x USB 2.0',
    'Radeon RX 480',
    '22 lb',
    '700 W PSU',
    'Intel Core i5-6400 Processor',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Developer Interview Task</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Storage</TableCell>
            <TableCell>Hard Disk</TableCell>
            <TableCell>USB</TableCell>
            <TableCell>Graphic Card</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Power</TableCell>
            <TableCell>Processor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.storage}</TableCell>
              <TableCell>{row.hard_disk}</TableCell>
              <TableCell>{row.usb}</TableCell>
              <TableCell>{row.graphic_card}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.power}</TableCell>
              <TableCell>{row.processor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/*<Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
        </Link>*/}
    </React.Fragment>
  );
}