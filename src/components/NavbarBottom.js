import React from "react"

export function NavBarBottom({gotoNextPage, gotoPreviousPage}){
    return (
        <div>
            <button onClick={gotoPreviousPage}>Previous</button>
            <button onClick={gotoNextPage}>Next</button>
        </div>

    )
}