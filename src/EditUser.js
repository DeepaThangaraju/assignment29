import { useState } from "react";
import { useParams } from "react-router";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import { useHistory } from "react-router";
import * as yup from 'yup';
import { useFormik } from "formik";
const formValidationSchema = yup.object(
    {
        name: yup.string().required("Why not fill the name?"),
        designation: yup.string().min(5).required(),
        EmployeeId: yup.string().required(),
        salary: yup.number().required(),
        pic: yup.string().required()
    }
);

export function EditUser() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/userlist/${id}`,
            { method: "GET" })
            .then((data) => data.json())
            .then((mov) => setEmployee(mov));
    }, [id]);
    return employee ? <Updateuser employee={employee} /> : " ";
}
function Updateuser({ employee }) {
    const sty = { margin: "1rem", };
    // const [name, setName] = useState(employee.name);
    // const [EmployeeId, setEmployeeId] = useState(employee.EmployeeId);
    // const [designation, setDesignation] = useState(employee.designation);
    // const [salary, setSalary] = useState(employee.salary);
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: employee.name,
            EmployeeId: employee.EmployeeId,
            designation: employee.designation,
            salary: employee.salary,
            pic: employee.pic
        },
        // validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit: (updateduser) => {
            console.log("onsubmit", updateduser);
            edituser(updateduser)
        },
    });

    // const [pic, setPic] = useState(employee.pic);
    const history = useHistory();
    const edituser = (updateduser) => {
        // const updateduser = {
        //     name,
        //     EmployeeId,
        //     designation,
        //     salary,
        //     pic
        // };
        // const copy = [...users];
        // copy[id] = updateduser;
        // setUserlist(copy);
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/userlist/${employee.id}`,
            {
                method: "PUT",
                body: JSON.stringify(updateduser),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/users"));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    value={values.name}
                    style={sty}
                    className="add" saz
                    label="User Name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                    placeholder="User name" /><br />

                {/* <input
                // value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="User name" /><br /> */}

                <TextField
                    id="designation"
                    name="designation"
                    value={values.designation}
                    style={sty}

                    className="add"
                    label="Designation"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.designation && touched.designation}
                    helperText={errors.designation}
                    placeholder="Designation" /><br />

                <TextField
                    id="EmployeeId"
                    name="EmployeeId"
                    value={values.EmployeeId}
                    style={sty}
                    className="add"
                    label="EmployeeId"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.EmployeeId && touched.EmployeeId}
                    helperText={errors.EmployeeId}
                    placeholder="EmployeeId" /><br />


                <TextField
                    id="pic"
                    name="pic"
                    style={sty}
                    className="add"
                    value={values.pic}
                    label="Profile pic"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.pic && touched.pic}
                    helperText={errors.pic}
                    placeholder="Pic link" /><br />

                <TextField
                    id="salary"
                    name="salary"
                    style={sty}
                    className="add"
                    value={values.salary}
                    label="Salary"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.salary && touched.salary}
                    helperText={errors.salary}
                    placeholder="Salary" /><br />




                <Button variant="outlined" type="submit">Save</Button>
            </form>


        </div >
    );

}


