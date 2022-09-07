import React from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export const routesData = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: <DashboardIcon />
    },{ 
        title: 'Employee List',
        url: '/employeeslist',
        icon: <PeopleIcon />
    },{
        title: 'Add Employee',
        url: '/addemploy',
        icon: <PersonAddAlt1Icon />
    },{
        title: 'Manage Schedules',
        url: '/manage-schedules',
        icon: <CalendarMonthIcon />
    },{
        title: 'View Schedules',
        url: '/view-schedules',
        icon: <CalendarMonthIcon />
    },{
        title: 'Daily Attendence',
        url: '/attendence',
        icon: <QrCodeScannerIcon />
    },{
        title: 'Admin Manager',
        url: '/manage-admin',
        icon: <QrCodeScannerIcon />
    },
]