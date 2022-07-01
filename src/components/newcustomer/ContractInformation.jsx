import React,{useState} from 'react';
import { Button, Grid,TextField, } from '@mui/material';
import BasicSelect from './inputs/BasicSelect';

export default function ContractInformationForm(){
    const userContractTemplate={
        contractmanagernum:"",contractperiod :"",
        orderdate:"",contractstartdate:"",
        initialcost:"",commission:"",insurancepremium:"",note:"",
        contractInformation:"",insuranceCompany:"",productName:"",
        contractStatus:"",paymentMethod:"",howToPay:"",
    }
    const [userContractInput,setUserContractInput]=useState([userContractTemplate]);
    // const [contractInformation,setContractInformation]=useState({list:['valid','invalid','other'],val:""});
    // const [insuranceCompany,setInsuranceCompany]=useState({list:['one','two','three'],val:""});
    // const [productName,setProductName]=useState({list:['p1','p2','p3','p4'],val:""});
    // const [contractStatus,setContractStatus]=useState({list:['normal','expired','cancel'],val:""});
    // const [paymentMethod,setPaymentMethod]=useState({list:['credit card','account transfer','other'],val:""});
    // const [howToPay,setHowToPay]=useState({list:['anual payment','monthly payment','other'],val:""});
    const contractInformationList=['male', 'female', 'other'];
    const insuranceCompanyList=['aaa', 'bbb', 'ccc'];
    const productNameList=['111', '222', '333'];
    const contractStatusList=['grp1', 'grp2', 'grp3'];
    const paymentMethodList=['prj1', 'prj2', 'prj3'];
    const howToPayList=['prj1', 'prj2', 'prj3'];

    const handleContractTemplate = (e) => {
        let name=e.target.name;
        let arr=[...userContractInput];
        let temp=arr[0];
        temp[name]=e.target.value;
        arr[0]=temp;
        setUserContractInput(arr);
    }

    const handleForm = (e) =>{
        e.preventDefault();
        // let alldata=(
        //     [userContractInput,contractInformation,insuranceCompany,
        //     productName,contractStatus,paymentMethod,howToPay]
        // );
        console.log("submitted contract form");
    }

    return(
    <>
        <form onSubmit={handleForm}>
        <Grid container columnSpacing={1} rowSpacing={1} >
            <Grid item xs={6}>
                <BasicSelect 
                  value={userContractInput[0].contractInformation} 
                  list={contractInformationList} 
                  label='Contract Information' 
                  name='contractInformation' 
                  onChange={e=>handleContractTemplate(e,"contractInformation")}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="Contract manager number" 
                    name='contractmanagernum'
                    variant="outlined" 
                    fullWidth 
                    value={userContractInput.contractmanagernum}
                    onChange={e=>handleContractTemplate(e)}
                />
            </Grid>
            {/* <Grid item xs={6}>
                <BasicSelect data={insuranceCompany} label='Insurance company name' name='InsuranceCompany' onChange={e => setInsuranceCompany({...insuranceCompany,val:e.target.value})}  />
            </Grid>
            <Grid item xs={6}>
                <BasicSelect data={contractStatus} label='Contract status' name='ContractStatus' onChange={e => setContractStatus({...contractStatus,val:e.target.value})}  />
            </Grid>
            <Grid item xs={6}>
                <BasicSelect data={paymentMethod} label='Payment Method' name='PaymentMethod' onChange={e => setPaymentMethod({...paymentMethod,val:e.target.value})}  />                  
            </Grid>
            <Grid item xs={6}>
                <BasicSelect data={productName} label='Product Name' name='productname' onChange={e => setProductName({...productName,val:e.target.value})}  />                  
            </Grid> */}
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Contract Period" 
                    name='contractperiod'
                    variant="outlined" 
                    fullWidth 
                    value={userContractInput.contractperiod}
                    onChange={e=>handleContractTemplate(e)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="date"
                    label="Order date"
                    type="date"
                    defaultValue=""
                    fullWidth
                    value={userContractInput.orderdate}
                    onChange={e=>handleContractTemplate(e)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid> 
            <Grid item xs={6}>
                <TextField
                    id="date"
                    label="Contract Start Date"
                    type="date"
                    defaultValue=""
                    fullWidth
                    value={userContractInput.contractstartdate}
                    onChange={e=>handleContractTemplate(e)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid> 
            <Grid item xs={6}>
                {/* <BasicSelect data={howToPay} label='How To Pay' name='howtopay' onChange={e => setHowToPay({...howToPay ,val:e.target.value})}  />                   */}
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="Initial Cost" 
                    name='initialcost'
                    variant="outlined" 
                    fullWidth 
                    value={userContractInput.initialcost}
                    onChange={e=>handleContractTemplate(e)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="commission" 
                    name='commission'
                    variant="outlined" 
                    fullWidth 
                    value={userContractInput.commission}
                    onChange={e=>handleContractTemplate(e)}
                />           
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="Insurance Premium" 
                    name='insurancepremium'
                    variant="outlined" 
                    fullWidth 
                    value={userContractInput.insurancepremium}
                    onChange={e=>handleContractTemplate(e)}
                />            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Note" 
                    name='note'
                    variant="outlined" 
                    fullWidth 
                    multiline rows={3}
                    value={userContractInput.note}
                    onChange={e=>handleContractTemplate(e)}
                />           
             </Grid>
        </Grid>
        <Button type='submit'>submit</Button>
        </form>
    </>
    )
}