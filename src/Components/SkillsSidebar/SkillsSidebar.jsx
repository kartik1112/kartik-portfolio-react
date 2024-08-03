/* eslint-disable no-unused-vars */
import React from 'react'
import './SkillsSidebar.css'

const SkillsSidebar = () => {

    const skillsSet = [
        {
            'name': 'HTML',
            'icon': 'https://img.icons8.com/?size=100&id=46605&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 7
        },
        {
            'name': 'CSS',
            'icon': 'https://img.icons8.com/?size=100&id=107497&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 8
        },
        {
            'name': 'Javascript',
            'icon': 'https://img.icons8.com/?size=100&id=1ZSHk8m9bk4p&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 7
        },
        {
            'name': 'Java',
            'icon': 'https://img.icons8.com/?size=100&id=46630&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 8
        },
        {
            'name': 'Flutter',
            'icon': 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 9
        },
        {
            'name': 'Python',
            'icon': 'https://img.icons8.com/?size=100&id=121464&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 8
        },
        {
            'name': 'Go Lang',
            'icon': 'https://img.icons8.com/?size=100&id=44442&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 5
        },
        {
            'name': 'ML & DL',
            'icon': 'https://img.icons8.com/?size=100&id=66365&format=png&color=000000',
            'color': '#e34c26',
            'skillGrade': 7
        },
    ]
    let value;
    //icon to be added
    return (
        <div className='sidebar-skills'>
            <h2>Skills</h2>
            {
                skillsSet.map((item) => {
                    return (
                        <div className='skill-container' key={item.name}>
                            <div style={{ display: 'flex',width:'55%', flexDirection: 'row', alignItems: 'center', justifyContent:'left' }}>
                                <div className='skill-icon' ><img width={25} src={item.icon} alt="" /></div>
                                <div className='skill-name'>{item.name}</div>
                            </div>
                            <div className='skill-grade' >
                                <div style={{ width: (item.skillGrade*10).toString()+"%", backgroundColor: 'white' }}>
                                    {/* <div style={{ width: '50%', backgroundColor: 'white' }}></div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillsSidebar
