import React from 'react';
import Nav from './Nav';
import Introduction from "./Introduction";

function Home() {
    return (
        <div className="w-full min-h-screen">
            <Nav />
            <Introduction />
        </div>
    );
}

export default Home;