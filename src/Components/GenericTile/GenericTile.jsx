import React from "react";
import { Link } from "react-router-dom";


const GenericTile = (url,imgAddress, title, justifyDir='left', flexDir = "column") => {

    

    // console.log(url,imgAddress, title, justifyDir, flexDir )
    return (
        <a href={url} style={{ display: 'flex', justifyContent: justifyDir, textDecoration: 'none' }}>
            <div className='project-element' style={{ flexDirection: flexDir }}>
                {/* {console.log(imageAddress.urls.raw, "oass")} */}
                <div className='project-img'>
                    <img width='100%' height='100%' style={{ objectFit: 'cover' }} src={imgAddress} alt="error" />
                </div>
                <div className='tile-details'>
                    <p>
                        {/* {capitalize(title.toString().replaceAll("-", " ").slice(0, 30))} */}
                    </p>
                    <Link to={url}><img style={{
                    }} width='45px' src="assets/git-logo.svg" alt="" /></Link>
                </div>
                {/* <img src={imageAddress[index].urls.raw} alt="dfgf" /> */}
            </div>
        </a>
    )
}

export default GenericTile;