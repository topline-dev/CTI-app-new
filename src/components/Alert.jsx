import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert1 = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});


//<Alert data={alert} handleAlert={handleAlert}/>

// const [alert, setAlert] = useState({open:false, type:"success", message:"Success"});
//   const handleAlert = () => {
//     setAlert(!alert);
//   }

// type: { success, error, warning, info}


export default function Alert(props) {
  const data = props.data;

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={data.open} autoHideDuration={1500} onClose={props.handleAlert}>
        <Alert1 severity={data.type} sx={{ width: '100%' }}>
          {data.message}
        </Alert1>
      </Snackbar>
    </Stack>
  );
}