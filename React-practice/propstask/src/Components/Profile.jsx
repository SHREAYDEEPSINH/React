import React from 'react'
import GetImageUrl from './GetImageUrl';

function Profile(props) {
   
    return (
        <div >
            <section className="border rounded border-3 border-black p-3" style={{ width: "600px", height: 220 }}>

                <div className='d-flex align-items-center gap-3'>
                    <img
                        className="avatar rounded-5"
                        src={GetImageUrl(`${props.img}`)}
                        alt={props.name}
                        width={70}
                        height={70}
                    />
                    <h2>{props.name}</h2>
                </div>
                <ul className='pt-3'>
                    <li>
                        <b>Profession: </b>
                        {props.profession}
                    </li>
                    <li>
                        <b>Awards: {props.AwardsNo} </b>
                        {props.Awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {props.discovered}
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Profile