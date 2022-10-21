import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'
import Icon from 'components/atoms/Icon'
import { ToggleMenu } from './style'

const MenuPleasures = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment key="MenuPleasures">
            <ToggleMenu
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <Icon
                    name="IconMenuPoints"
                    fill="white"
                    width="20px"
                    height="20px"
                />
            </ToggleMenu>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleClose()
                        navigate('/', { replace: true })
                    }}
                >
                    My Profile
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose()
                        navigate('/music', { replace: true })
                    }}
                >
                    My music
                </MenuItem>
                <MenuItem>My literature</MenuItem>
                <MenuItem>My food</MenuItem>
                <MenuItem>My Content</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default MenuPleasures
