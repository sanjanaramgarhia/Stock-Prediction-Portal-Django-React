import React, { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')
    useEffect(() => {
        const FetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get("/protected-view/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                console.log('Success:', response.data)
            } catch (error) {
                console.log('Error Fetching Data :', error)
            }
        }
        FetchProtectedData();
    }, [])

    return (
        <div className="text-light container"> Dashboard</div>
    )
}

export default Dashboard