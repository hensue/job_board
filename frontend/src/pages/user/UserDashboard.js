import { Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import StatComponent from '../../components/StartComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux'
import moment from 'moment'

const UserDashboard = () => {
    const { user } = useSelector(state => {
        console.log(state);
        return state.userProfile;
    });
    return (
        <>
            <Box >

                <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value={user && moment(user.createdAt).format('YYYY / MM / DD')}
                        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Member since"
                        money=''
                    />
                    {
                        user !== null ?
                            <StatComponent
                                value={user.jobsHistory === undefined ? 0 : user.jobsHistory}
                                icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                                description="Number of jobs submitted"
                                money=''
                            />
                            : null
                    }
                    


                </Stack>
            </Box>

        </>
    )
}

export default UserDashboard