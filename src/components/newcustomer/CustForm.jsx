import React,{useState} from 'react';
import { Card, Grid, Typography,Button,CardContent,TextField,Stack,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicSelect from './inputs/BasicSelect';

function CustForm() {
    const [customerTelephone,setUserTel]=useState([{num:""}]);
    const [customerEmail,setUserEmail]=useState([{email:""}]);
    const userTemplate={
        customerFirstName:"",customerLastName:"",customerFirstRuby:"",customerLastRuby:"",birthday:"",
        customerAddress1:"",customerZipCode:"",customerAddress2:"",customerAddress3:"",customerAddress4:"",
        profession:"",author:"",lastupdate:"",customerMemo1:"",customerMemo2:""
    };
    const [userInput,setUserInput]=useState([userTemplate]);
    const [customerSex,setSex]=useState({list:['male','female','other'],val:""});
    const [firstpersonincharge,setFPC]=useState({list:['user 1','user 2','user 3'],val:""});
    const [secondpersonincharge,setSPC]=useState({list:['user A','user B','user C'],val:""});
    const [customerGroupId,setCustomerGroup]=useState({list:['custgrp 1','custgrp 2','custgrp 3'],val:""});
    const [customerProjectGroup,setProjectGroup]=useState({list:['prgrp 1','prgrp 2','prgrp 3'],val:""});

    function addStack(){
        setUserTel([...customerTelephone,{num:""}])
    }
    function addStackEmail(){
        setUserEmail([...customerEmail,{email:""}])
    }
   function deleteTel(event,index){
       console.log(index);
       let arr=[...customerTelephone];
       arr.splice(index,1);
       setUserTel(arr);
   }
   function handleChangeTel(event,index){
       console.log(event.target.name,index);
       let items=[...customerTelephone];
        let item={...items[index]};
        item.num=event.target.value;
        items[index]=item;
        setUserTel(items);
   }
   function deleteEmail(event,index){
    console.log(index);
    let arr=[...customerEmail];
    arr.splice(index,1);
    setUserEmail(arr);
}
function handleChangeEmail(event,index){
    console.log(event.target.name,index);
    let items=[...customerEmail];
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
const handleSubmit =(e) =>{
  e.preventDefault();
  console.log("formm submitted");
};

    return(
        <>
          <form onSubmit={handleSubmit}>
            <Card sx={{ minWidth: 275 }} elevation={4} >
              <CardContent >
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customer Information
                </Typography>
                <Grid container columnSpacing={1} rowSpacing={1}>
                  <Grid item xs={4}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerLastName' 
                        value={userInput.customerLastName}
                        label="Last Name" 
                        variant="outlined" 
                        onChange={e=>handleChangeUserInput(e,"customerLastName")}
                        fullWidth 
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerFirstName' 
                        label="First Name" 
                        variant="outlined" 
                        value={userInput.customerFirstName}
                        onChange={e=>handleChangeUserInput(e,"customerFirstName")}
                        fullWidth 
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <BasicSelect data={customerSex} label='CustomerSex' name='customerSex' onChange={e => setSex({...customerSex,val:e.target.value})}/>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerLastRuby' 
                        label="Kana last name" 
                        variant="outlined"
                        value={userInput.customerLastRuby} 
                        onChange={e=>handleChangeUserInput(e,"kanalastanme")}
                        fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerFirstRuby' 
                        label="Kana first name" 
                        variant="outlined" 
                        value={userInput.customerFirstRuby}
                        onChange={e=>handleChangeUserInput(e,"customerFirstRuby")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue=""
                        fullWidth
                        value={userInput.birthday}
                        onChange={e=>handleChangeUserInput(e,"birthday")}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                      <Stack direction="row" spacing={1}>
                            {customerTelephone.map((user,index)=>(
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
                        <Button onClick={addStack} variant="contained">ADD</Button>
                      </Stack>
                  </Grid>
                  <Grid item xs={12}>
                  <Stack direction="row" spacing={1}>
                            {customerEmail.map((user,index) => (
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
                        <Button onClick={addStackEmail} variant="contained" >ADD</Button>
                      </Stack>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerAddress1' 
                        label="Address 1" 
                        variant="outlined"
                        onChange={e=>handleChangeUserInput(e,"customerAddress1")} 
                        fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField 
                        id="outlined-basic" 
                        name='customerZipCode' 
                        label="Postal code" 
                        variant="outlined" 
                        onChange={e=>handleChangeUserInput(e,"customerZipCode")}
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
                        onChange={e=>handleChangeUserInput(e,"customerAddress2")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Address 3" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"customerAddress3")}
                    />                  
                  </Grid>
                  <Grid item xs={7}>
                    <TextField 
                        id="outlined-basic" 
                        label="Address 4" 
                        variant="outlined" 
                        fullWidth
                        onChange={e=>handleChangeUserInput(e,"customerAddress4")}
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
                    <BasicSelect data={firstpersonincharge}  label='First Person in charge' name='fpc' onChange={e => setFPC({...firstpersonincharge,val:e.target.value})}/>
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelect data={secondpersonincharge} label='Second Person in charge' name='spc' onChange={e => setSPC({...secondpersonincharge,val:e.target.value})}/>
                  </Grid>
                  <Grid item xs={6}>
                  <BasicSelect data={customerGroupId} label='Customer Group' name='customergrp' onChange={e => setCustomerGroup({...customerGroupId,val:e.target.value})}/>
                  </Grid>
                  <Grid item xs={6}>
                    <BasicSelect data={customerProjectGroup} label='Project Group' name='projectgrp' onChange={e => setProjectGroup({...customerProjectGroup,val:e.target.value})}/>
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
                        onChange={e=>handleChangeUserInput(e,"customerMemo1")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        label="Note 2" 
                        variant="outlined" 
                        fullWidth
                        multiline rows={3}
                        onChange={e=>handleChangeUserInput(e,"customerMemo2")}
                    />
                  </Grid>
                </Grid>
                <Button type='submit'> submit</Button>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
          </Card>
          </form>
        </>
    ); 
}
export default CustForm;