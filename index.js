/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomPage from './src/coding11/WelcomePage';
import SearchScreen from './src/TopNav/SearchScreen';
import Logout from './src/Coding/Logout';
import MyNavigation from './src/coding11/MyNavigation';
import {name as appName} from './app.json';
import Drawer from './src/Coding/Draw';
import SubDescription from './src/coding11/SubDescription';
import TopNav from './src/TopNav/TopNav';
import Chemistry from './src/coding11/Chemistry';
import Profile from './src/coding11/BottomTab/Profile';
import Axios from 'axios';
import Redux from './src/Reduxx/Redux';
import InHome from './src/coding11/InHome';
import PointingApp from './src/coding2/PointingApp';







AppRegistry.registerComponent(appName, () =>MyNavigation)
