import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
 // Storage	Hard Disk	USB	Graphic Card	Weight	Power	Processor
const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 70 
  },
  { 
    field: 'storage', 
    headerName: 'Storage', 
    sortable: true,
    width: 90 
  },
  { 
    field: 'hard_disk', 
    headerName: 'Hard Disk',
    sortable: true, 
    width: 130 
  },
  {
    field: 'usb',
    headerName: 'USB',
    sortable: true,
    width: 120,
  },
  {
    field: 'graphic_card',
    headerName: 'Graphic Card',
    sortable: true,
    width: 160,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    sortable: true,
    width: 90,
  },
  {
    field: 'power',
    headerName: 'Power',
    sortable: true,
    width: 100,
  },
  {
    field: 'processor',
    headerName: 'Processor',
    sortable: true,
    width: 100,
  },
];

export default function Orders() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}