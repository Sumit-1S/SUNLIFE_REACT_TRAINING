import React, { createContext, useContext, useState } from 'react';

const empContext = createContext("")

function ContextApp(props) {
    const [employee] = useState({id:101,empname:"Sumit",city:"GGN",salary:123456})
    return (
        <div>
            <empContext.Provider value={employee}>
                <Employee/>
            </empContext.Provider>
        </div>
    );
}

function Employee(props) {
    const empCon = useContext(empContext)
    return (
        <div>
            Username: {empCon.empname}
            <Salary/>
        </div>
    );
}

function Salary(props) {
    const empCon = useContext(empContext)
    return (
        <div>
            Salary: {empCon.salary}
        </div>
    );
}

export default ContextApp;