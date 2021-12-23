import { GridColDef } from "@mui/x-data-grid";
import React, { FunctionComponent } from "react";
import DataTable from "../components/DataTable";

interface SponsorshipsProps {
    
}
 
const Sponsorships: FunctionComponent<SponsorshipsProps> = () => {
    const [rows] = React.useState([]);
    let columns: GridColDef[] = [
        {
            field: 'sponsor',
            headerName: 'Sponsor',
            flex: 1
        },
        {
            field: 'school',
            headerName: 'School',
            flex: 1
        },
        {
            field: 'expiry',
            headerName: 'Expiry',
            flex: 1
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1
        },
        {
            field: '',
            headerName: 'Action',
            flex: 1,
            sortable: false
        }
    ];

    return ( 
        <div style={{ width: '100%', marginTop: '10%', padding: '2%' }}>
            <DataTable defaultSortColumn="expiry" columns={columns} rows={rows}></DataTable>
        </div>
     );
}
 
export default Sponsorships;