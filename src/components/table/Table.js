import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'Auction #', width: 70, flex: 1, },
    { field: 'city', headerName: 'City', width: 130, flex: 1 },
    { field: 'state', headerName: 'State', width: 130, flex: 1 },
    { field: 'vehicles', headerName: 'Vehicles', width: 130, flex: 1 },
    {
        field: 'time', headerName: 'Time to Start', width: 160, flex: 1,
        cellClassName: (params) => {
            if (params.value === 'In Progress') {
                return 'in-progress';
            }
            else if (params.value === 'Completed') {
                return 'completed';
            }
        },
    }
];

const rows = [
    { id: 778, city: 'Tampa North', state: 'FL', vehicles: 255, time: "In Progress" },
    { id: 516, city: 'Detroit', state: 'MI', vehicles: 689, time: "Completed" },
    { id: 736, city: 'Miami-North', state: 'FL', vehicles: 959, time: "Completed" },
    { id: 725, city: 'Tidewater', state: 'VA', vehicles: 235, time: "Completed" },
    { id: 719, city: 'Baltimore', state: 'MD', vehicles: 440, time: "Completed" },
    { id: 707, city: 'Atlanta East', state: 'GA', vehicles: 485, time: "Completed" },
    { id: 653, city: 'Cincinnati', state: 'OH', vehicles: 456, time: "Completed" },
    { id: 715, city: 'Greensboro', state: 'NC', vehicles: 294, time: "Completed" },
    { id: 645, city: 'Burlington', state: 'VT', vehicles: 134, time: "Completed" },
    { id: 629, city: 'Erie', state: 'PA', vehicles: 113, time: "Completed" },
    { id: 628, city: 'Syracuse', state: 'NY', vehicles: 446, time: "In Progress" },
    { id: 623, city: 'Hartford', state: 'CT', vehicles: 244, time: "Completed" },
    { id: 621, city: 'Port Murray', state: 'NJ', vehicles: 265, time: "In Progress" },
    { id: 652, city: 'Buckhannon', state: 'WV', vehicles: 152, time: "Completed" },
    { id: 428, city: 'Grenada', state: 'MS', vehicles: 186, time: "Completed" },
    { id: 525, city: 'Omaha', state: 'NE', vehicles: 353, time: "Completed" },
    { id: 363, city: 'Fargo', state: 'ND', vehicles: 180, time: "Completed" },
    { id: 416, city: 'Permian Basin', state: 'TX', vehicles: 71, time: "Completed" },
    { id: 419, city: 'Longview', state: 'TX', vehicles: 293, time: "In Progress" },
    { id: 435, city: 'Fayetteville', state: 'AR', vehicles: 167, time: "Completed" },
];

export default function DataTable() {
    return (
        <div>
            <h1 className="uppercase tracking-[0.8rem] py-20 text-center text-4xl lg:text-6xl whitespace-nowrap">
                Auctions
            </h1>
            <div>
                <Box className='h-[631px]'
                    sx={{
                        '& .in-progress': {
                            // backgroundColor: 'rgb(255,0,0)',
                            color: 'rgb(255,0,0)',
                            fontWeight: '600'
                        },
                        '& .completed': {
                            // backgroundColor: 'rgb(0,255,0)',
                            color: 'rgb(0,128,255)',
                            fontWeight: '600'
                        }
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </Box>
            </div>
        </div>
    );
}
