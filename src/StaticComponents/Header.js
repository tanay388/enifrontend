import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoEni from '../Assets/Logo/logo_eni.png';
import { LinearProgress } from '@mui/material';


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isloading, setIsLoading] = React.useState(false)

  const handleLoading = () => {
    setIsLoading(true)
  }

  const handleCloseLoading = () => {
    setIsLoading(false)
  }

  const handleVisibility = () => {
    return window.location.pathname.includes("/login") || window.location.pathname.includes("/dashboard") || window.location.pathname.includes("/employeeslist") || window.location.pathname.includes("/addemploy") || window.location.pathname.includes("/manage-schedules") || window.location.pathname.includes("/view-schedules") || window.location.pathname.includes("/attendence");
  }

  return (
    <AppBar className={ handleVisibility() ? "visible": "invisible"} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href='http://enisolution.com/'><img src={LogoEni} alt="ENI Logo" style={{width: "80px"}}/></a>
          
          <Typography
          style={{minWidth: '120px'}}
            variant="h6"
            noWrap
            // component="aasssssss"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
            //   letterSpacing: '.3rem',
              color: 'inherit',
            //   textDecoration: 'none',
            }}
          >
            <a href="http://enisolution.com/dashboard" className='white-link'>Dashboard</a>
          </Typography>

        
{/*           

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 1 }} style={{width: "100%", display: 'flex', justifyContent: 'end'}}>
  
              {/* <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
};

export default Header;
