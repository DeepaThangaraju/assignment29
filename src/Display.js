export function Display({ name, EmployeeId, designation, salary, image, deletebutton, editbutton, infobutton }, id) {
    return (
        <div >
            <img className="user_pic" src={image} alt={name} />
            <p>Name:{name}</p>
            <p>EmployeeId:{EmployeeId}</p>
            <p>Designation:{designation}</p>
            <p>Salary:{salary}</p>
            {/* <p>{deletebutton} {editbutton} {infobutton}</p> */}
        </div>

    );
}

export function Display1({ name, EmployeeId, designation, salary, image, deletebutton, editbutton, infobutton }, id) {
    return (
        <div >
            <img className="user_pic" src={image} alt={name} />
            <p>Name:{name}</p>
            <p>EmployeeId:{EmployeeId}</p>
            <p>Designation:{designation}</p>
            <p>Salary:{salary}</p>
            <p>{deletebutton} {editbutton} {infobutton}</p>
        </div>

    );
}




