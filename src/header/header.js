import React from "react";
import SearchPanel from "../search-panel";
import Content from "../content";

const Header = () => {
    return (
        <>
            <h1>Nation of Darkness</h1>
            <SearchPanel key='searchPanel'/>
            <Content key='content'/>
            
        </>
    )
}

export default Header;