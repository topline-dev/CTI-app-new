import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonAppBar from '../customerRelated/Appbar';
import CallGroup from './callGroup/CallGroup';
import CallFlag from './callFlag/CallFlag';
import Phase from './Phase';
import Title from './Title';
import Caller from './Caller';
import FunctionKey from './functionKey/FunctionKey';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CallLogIndex() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <ButtonAppBar title="Call Log Settings"/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
                        <Tab label="Call Group" {...a11yProps(0)} />
                        <Tab label="Call Flag" {...a11yProps(1)} />
                        <Tab label="Title" {...a11yProps(2)} />
                        <Tab label="Phase" {...a11yProps(3)} />
                        <Tab label="Caller" {...a11yProps(4)} />
                        <Tab label="Function Keys" {...a11yProps(5)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <CallGroup/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CallFlag/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Title/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Phase/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Caller/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <FunctionKey/>
                </TabPanel>
            </Box>
        </div>

    );
}
