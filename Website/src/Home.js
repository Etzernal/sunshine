import React from 'react'
import { Jumbotron } from './components/Jumbotron'
import { Cards } from './components/Cards'
import { Newsletter } from './components/Newsletter'
import { Helmet } from 'react-helmet';
export const Home = () => (
    <React.Fragment>
    <Helmet><title>Home</title></Helmet>
        <Jumbotron />
        <Cards />
        <Newsletter />
    </React.Fragment>
)