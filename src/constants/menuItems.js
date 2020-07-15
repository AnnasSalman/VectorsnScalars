import React from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StorefrontIcon from '@material-ui/icons/Storefront';

const menuItems = {
    products:{
        outdoorProducts : [
            'Awnings',
            'Car Parks',
            'Fixed Structures',
            'Garden Furniture',
            'Retractable Structures',
            'Sail Shades',
        ],
        indoorProducts : [
            'Blinds',
            'UPVC Doors & Windows',
            'Wallpaper & Wallpanels',
            'Wood Plastic Composite',
            'Wooden & Vinyl Flooring'
        ]
    },
    admin: [
        {
            name: 'Dashboard',
            icon: <DashboardIcon/>
        },
        {
            name: 'Notifications',
            icon: <NotificationsNoneIcon/>
        },
        {
            name: 'Projects',
            icon: <StorefrontIcon/>
        },
    ]
}

export default menuItems;
