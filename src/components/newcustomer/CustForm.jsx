import React,{useState,useEffect} from 'react';
import { Card, Grid, Typography,Button,CardContent,TextField,Stack,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicSelect from './inputs/BasicSelect';

function CustForm(props) {
    const [customerTelephone,setUserTel]=useState([{num:""}]);
    const [customerEmail,setUserEmail]=useState([{email:""}]);
    const userTemplate={
        customerFirstName:"",customerLastName:"",customerFirstRuby:"",customerLastRuby:"",birthday:"",customerEmail:"",
        customerAddress1:"",customerZipCode:"",customerAddress2:"",customerAddress3:"",customerAddress4:"",
        profession:"",author:"",lastupdate:"",customerMemo1:"",customerMemo2:"", customerSex:"", firstPersonInCharge:"",
        secondPersonInCharge:"",customerGroupId:"",customerProjectGroup:"",
    };

    const [userInput,setUserInput]=useState([userTemplate]);
    const sexList=['male', 'female', 'other'];
    const firstPersonList=['aaa', 'bbb', 'ccc'];
    const secondPersonList=['111', '222', '333'];
    const customerGroupList=['grp1', 'grp2', 'grp3'];
    const customerProjectList=['prj1', 'prj2', 'prj3'];
    

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
       //console.log(event.target.name,index);
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

useEffect(()=>{
    console.log('use-effect!!!');
    console.log(props.isSubmit);
    console.log();
},[])

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
                    required
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
                    required
                />
              </Grid>
              <Grid item xs={4}>
                <BasicSelect 
                  value={userInput[0].customerSex} 
                  list={sexList} 
                  label='Sex' 
                  name='customerSex' 
                  onChange={e=>handleChangeUserInput(e,"customerSex")}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField 
                    id="outlined-basic" 
                    name='customerLastRuby' 
                    label="Kana last name" 
                    variant="outlined"
                    value={userInput.customerLastRuby} 
                    onChange={e=>handleChangeUserInput(e,"customerFirstRuby")}
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
                                      <Button 
                                        variant='contained' 
                                        size='small' 
                                        onClick={e=>deleteTel(e,index)} 
                                        style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}
                                        >
                                        <DeleteIcon fontSize="small" />
                                      </Button>
                                  </Grid>
                                }  
                            </Grid>    
                            )
                        )}
                    <Button onClick={addStack} variant="contained">ADD</Button>
                  </Stack>
              </Grid>
              <Grid item xs={12}>
              <TextField 
                    id="outlined-basic" 
                    name='customerLastRuby' 
                    label="Email" 
                    variant="outlined"
                    value={userInput.customerEmail} 
                    onChange={e=>handleChangeUserInput(e,"customerEmail")}
                    fullWidth
                />
                {/* <Stack direction="row" spacing={1}>
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
                              <Button 
                                variant='contained' 
                                size='small' 
                                onClick={e=>deleteEmail(e,index)} 
                                style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}>
                                  <DeleteIcon fontSize="small" />
                              </Button>
                          </Grid>
                        }    
                    </Grid>
                    )
                  )}
                  <Button onClick={addStackEmail} variant="contained" >ADD</Button>
                </Stack> */}
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
                <BasicSelect 
                  value={userInput[0].firstPersonInCharge} 
                  list={firstPersonList}  
                  label='First Person in charge' 
                  name='fpc' 
                  onChange={e=>handleChangeUserInput(e,"firstPersonInCharge")}
                />
              </Grid>
              <Grid item xs={6}>
                <BasicSelect 
                  value={userInput[0].secondPersonInCharge}  
                  list={secondPersonList} label='Second Person in charge' 
                  name='spc' 
                  onChange={e=>handleChangeUserInput(e,"secondPersonInCharge")}
                />
              </Grid>
              <Grid item xs={6}>
              <BasicSelect 
                value={userInput[0].customerGroupId}  
                list={customerGroupList} 
                label='Customer Group' 
                name='customergrp' 
                onChange={e=>handleChangeUserInput(e,"customerGroupId")}
                />
              </Grid>
              <Grid item xs={6}>
                <BasicSelect 
                  value={userInput[0].customerProjectGroup}  
                  list={customerProjectList} 
                  label='Project Group' 
                  name='projectgrp' 
                  onChange={e=>handleChangeUserInput(e,"customerProjectGroup")}
                />
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