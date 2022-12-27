import React from 'react';
import Nav from './Nav';
import Introduction from "./Introduction";
import Footer from './Footer';

function Home() {
    return (
        <div className="w-full min-h-screen">
            <Nav />
            <Introduction />
            <Footer />
        </div>
    );
}

export default Home;