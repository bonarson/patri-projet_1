// src/App.tsx
"use client";

import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;
