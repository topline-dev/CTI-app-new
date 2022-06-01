import * as React from 'react';
import { Card, Grid, Typography,Button,CardActions,CardContent,TextField, List,ListItem,Stack } from '@mui/material';
import BasicSelectSex from './materialui/selectors/BasicSelectSex';
import BasicSelectfpc from './materialui/selectors/FpcSelect';
import BasicSelectspc from './materialui/selectors/SpcSelect';
import BasicSelectCustGroup from './materialui/selectors/CustGroupSelect';
import BasicSelectProjectGroup from   './materialui/selectors/ProjectGroupSelect';
import { Box, Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

function CustForm() {
    const [userTel,setUserTel]=React.useState([{num:""}])
    const [userEmail,setUserEmail]=React.useState([{email:""}])
    const [userFirstName,setUserFirstName]=React.useState([{firstname:""}])
    const userTemplate={
        firstname:"",lastname:"",kanafirstname:"",kanalastname:"",
        address1:"",postalcode:"",address2:"",address3:"",address4:"",
        profession:"",author:"",lastupdate:"",note1:"",note2:""
    }
    const [userInput,setUserInput]=React.useState([userTemplate])

    function addStack(){
        setUserTel([...userTel,{num:""}])
    }
    function addStackEmail(){
        setUserEmail([...userEmail,{email:""}])
    }
   function deleteTel(event,index){
       console.log(index);
       let arr=[...userTel];
       arr.splice(index,1);
       setUserTel(arr);
   }
   function handleChangeTel(event,index){
       console.log(event.target.name,index);
       let items=[...userTel];
        let item={...items[index]};
        item.num=event.target.value;
        items[index]=item;
        setUserTel(items);
   }
   function deleteEmail(event,index){
    console.log(index);
    let arr=[...userEmail];
    arr.splice(index,1);
    setUserEmail(arr);
}
function handleChangeEmail(event,index){
    console.log(event.target.name,index);
    let items=[...userEmail];
     let item={...items[index]};
     item.email=event.target.value;
     items[index]=item;
     setUserEmail(items);
}
function handleChangeUserInput(event,att){
    let arr=[...userInput];
    let temp=arr[0];
    temp[att]=event.target.value;
    arr[0]=temp;
    setUserInput(arr);
}

    return(
        <>
            <Card sx={{ minWidth: 275 }} elevation="4" >
              <CardContent >
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customer Information
                </Typography>
                <Grid container columnSpacing={1} rowSpacing={1}>
                  <Grid item xs={4}>
                    <TextField 
                        id="outlined-basic" 
                        name='lastname' 
                        value={userInput.lastname}
                        label="Last Name" 
                        variant="outlined" 
                        onChange={e=>handleChangeUserInput(e,"lastname")}
                        fullWidth 
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField 
                        id="outlined-basic" 
                        name='firstname' 
                        label="First Name" 
                        variant="outlined" 
                        value={userInput.firstname}
                        onChange={e=>handleChangeUserInput(e,"firstname")}
                        fullWidth 
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <BasicSelectSex/>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField 
                        id="outlined-basic" 
                        name='kanalastname' 
                        label="Kana last name" 
                        variant="outlined"
                        value={userInput.kanalastname} 
                        onChange={e=>handleChangeUserInput(e,"kanalastanme")}
                        fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField 
                        id="outlined-basic" 
                        name='kanafirstname' 
                        label="Kana first name" 
                        variant="outlined" 
                        value={userInput.kanafirstname}
                        onChange={e=>handleChangeUserInput(e,"kanafirstname")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue=""
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                      <Stack direction="row" spacing={1}>
                            {userTel.map((user,index)=>(
                                <Grid container columnSpacing={0} key={index}>
                                    {
                                        index===0 && 
                                        <Grid  item xs={12}>
                                            <TextField
                                                id="telphone-number"
                                                label={"Telephone Number "+(index+1)}
                                                type="number"
                                                name="num"
                                                value={user.num}
                                                onChange={e =>handleChangeTel(e,index)}
                                                fullWidth
                                                placeholder='9348939399'
                                            />
                                        </Grid>
                                    } 
                                     {
                                        index!==0 && 
                                        <Grid  item xs={11}>
                                            <TextField
                                                id="telphone-number"
                                                label={"Telephone Number "+(index+1)}
                                                type="number"
                                                value={user.num}
                                                fullWidth
                                                name="num"
                                                onChange={e =>handleChangeTel(e,index)}
                                                placeholder='9348939399'
                                            />
                                        </Grid>
                                    } 
                                    
                                    {
                                        index!==0 && 
                                        <Grid item xs={1}>
                                            <Button variant='contained' size='small' onClick={e=>deleteTel(e,index)} style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}><DeleteIcon fontSize="small" /></Button>
                                        </Grid>
                                    }  
                                </Grid>    
                                )
                            )}
                        <Button onClick={addStack} variant="contained" style={{backgroundColor:"#07a74a"}}>ADD</Button>
                      </Stack>
                  </Grid>
                  <Grid item xs={12}>
                  <Stack direction="row" spacing={1}>
                            {userEmail.map((user,index) => (
                                <Grid container columnSpacing={0} key={index}>
                                    {
                                        index===0 &&
                                        <Grid  item xs={12}>
                                            <TextField
                                                id="email-id"
                                                label={"Email "+(index+1)}
                                                type="email"
                                                value={user.email}
                                                placeholder='abc@gmail.com'
                                                onChange={e =>handleChangeEmail(e,index)}
                                                fullWidth
                                            />
                                        </Grid>
                                    }
                                    {
                                        index!==0 &&
                                        <Grid  item xs={11}>
                                            <TextField
                                                id="email-id"
                                                label={"Email "+(index+1)}
                                                type="email"
                                                value={user.email}
                                                placeholder='abc@gmail.com'
                                                onChange={e =>handleChangeEmail(e,index)}
                                                fullWidth
                                            />
                                        </Grid>
                                    }
                                    {
                                        index!==0 &&
                                        <Grid  item xs={1}>
                                            <Button variant='contained' size='small' onClick={e=>deleteEmail(e,index)} style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}><DeleteIcon fontSize="small" /></Button>
                                        </Grid>
                                    }
                                     
                                        
                                </Grid>
                                )
                            )}
                        <Button onClick={addStackEmail} variant="contained" style={{backgroundColor:"#07a74a"}}>ADD</Button>
                      </Stack>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField 
                        id="outlined-basic" 
                        name='address1' 
                        label="Address 1" 
                        variant="outlined"
                        onChange={e=>handleChangeUserInput(e,"address1")} 
                        fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField 
                        id="outlined-basic" 
                        name='postalcode' 
                        label="Postal code" 
                        variant="outlined" 
                        onChange={e=>handleChangeUserInput(e,"postalcode")}
                        fullWidth 
                        type="number" 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Address 2" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"address2")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Address 3" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"address3")}
                    />                  
                  </Grid>
                  <Grid item xs={7}>
                    <TextField 
                        id="outlined-basic" 
                        label="Address 4" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"address4")}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField 
                        id="outlined-basic" 
                        label="Profession"
                        variant="outlined"
                        onChange={e=>handleChangeUserInput(e,"profession")} 
                        fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelectfpc/>
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelectspc/>
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelectCustGroup/>
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelectProjectGroup/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Author" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"author")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="last updated" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"lastupdate")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Note 1" 
                        variant="outlined" 
                        fullWidth 
                        multiline rows={3}
                        onChange={e=>handleChangeUserInput(e,"note1")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField i
                        d="outlined-basic" 
                        label="Note 2" 
                        variant="outlined" 
                        fullWidth
                        multiline rows={3}
                        onChange={e=>handleChangeUserInput(e,"note2")}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
          </Card>
        </>
    ); 
}
export default CustForm;