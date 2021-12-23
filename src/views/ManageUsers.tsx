import { GridColDef } from "@mui/x-data-grid";
import React, { FunctionComponent } from "react";
import DataTable from "../components/DataTable";

interface ManageUsersProps {
    
}
 
const ManageUsers: FunctionComponent<ManageUsersProps> = () => {
    const [rows] = React.useState([]);
    let columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1
        },
        {
            field: 'permission',
            headerName: 'Permission',
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
            <DataTable defaultSortColumn="" columns={columns} rows={rows}></DataTable>
        </div>
     );
}
 
export default ManageUsers;