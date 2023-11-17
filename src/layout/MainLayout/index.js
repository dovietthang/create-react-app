// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { useEffect, } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';

// project imports
// import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
// import Sidebar from './Sidebar';
import Extra from './Extra';
import Footer from './Footer';
// import Customization from '../Customization';
// import navigation from 'menu-items';
// import { drawerWidth } from 'store/constant';
// import { SET_MENU } from 'store/actions';

// assets
// import { IconChevronRight } from '@tabler/icons';
import 'assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/style-bda8a3e2a314d486574927ffb77d5bbe.css'; // Import tệp CSS
import 'assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/font-awesome-c28910b13683dd0c7dd202fa7208389d.css'; // Import tệp CSS
// import 'assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/bootstrap-d1881920b8a3112ed740aa678f3b8d6c.css'; // Import tệp CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  // ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  // [theme.breakpoints.up('md')]: {
  //   marginLeft: open ? 0 : -(drawerWidth - 20),
  //   width: `calc(100% - ${drawerWidth}px)`
  // },
  // [theme.breakpoints.down('md')]: {
  //   marginLeft: '20px',
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   padding: '16px'
  // },
  // [theme.breakpoints.down('sm')]: {
  //   marginLeft: '10px',
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   padding: '16px',
  //   marginRight: '10px'
  // }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  console.log(theme.breakpoints);

  // const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  // const leftDrawerOpened = useSelector((state) => state.customization.opened);
  // const dispatch = useDispatch();
  // const handleLeftDrawerToggle = () => {
  //   dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  // };


  return (
    <Box sx={{ display: 'flex' }} className="App">
      <Box className="site" id="page">
        <CssBaseline />
        {/* header */}
        <Header />
        {/* drawer */}
        {/* <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} /> */}
        {/* main content */}
        <Main theme={theme}>
          {/* breadcrumb */}
          {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
          <Outlet />
        </Main>
        <Extra />
        <Footer />
        {/* <Customization /> */}
      </Box>
    </Box>
  );
};

export default MainLayout;
