import React from 'react';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { ClassList } from './classes';
import Icon from '@material-ui/icons/Accessibility';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Dashboard />
    <Resource name="posts" list={ClassList} edit={EditGuesser} icon={Icon} />
    <Resource name="users" list={UserList} edit={EditGuesser} icon={UserIcon} />
  </Admin>
);

export default App;
