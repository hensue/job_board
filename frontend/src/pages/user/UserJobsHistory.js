import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardElement from '../../components/CardElement'
import { userProfileAction } from '../../redux/actions/userAction'

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "black" }}> Jobs History</Typography>
                <Box>
                    {
                        
                        user !== null ?
                            user.jobsHistory !== undefined ?
                            user.jobsHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                            /> 
                        )) : null : null
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory