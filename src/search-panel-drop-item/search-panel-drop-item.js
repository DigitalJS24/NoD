import React from "react";

function SearchPanelDropItem (item)  {
    const {label}=item;
    return (
        <>
            <option value={label}>{label}</option>
        </>
    );
}

export default SearchPanelDropItem;