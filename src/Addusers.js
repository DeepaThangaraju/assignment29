
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";
import * as yup from 'yup';
import { useFormik } from "formik";


const formValidationSchema = yup.object(
    {
        name: yup.string().required("Why not fill the name?"),
        designation: yup.string().min(5).required("Why not fill the designation?"),
        EmployeeId: yup.string().required("Why not fill the EmployeeId?"),
        salary: yup.number().required("Why not fill the salary?"),
        pic: yup.string().required("Why not fill the picture?")
    }
);

export function Addusers() {
    const sty = { margin: "1rem", }
    // const [name, setName] = useState("");
    // const [EmployeeId, setEmployeeId] = useState(" ");
    // const [designation, setDesignation] = useState(" ");
    // const [salary, setSalary] = useState(" ");
    // const [pic, setPic] = useState(" ");
    const history = useHistory();
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            EmployeeId: "",
            designation: "",
            salary: "",
            pic: ""
        },
        // validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit: (newuser) => {
            console.log("onsubmit", newuser);
            adduser(newuser)
        },
    });

    const adduser = (newuser) => {
        // console.log(name, EmployeeId, designation, salary, pic);
        // const newuser = {
        //     name,
        //     EmployeeId,
        //     designation,
        //     salary,
        //     pic,
        // };
        // setUserlist([...users, newuser]);
        fetch("https://6166c4e813aa1d00170a6717.mockapi.io/userlist",
            {
                method: "POST",
                body: JSON.stringify(newuser),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/users"));
    };

    return (
        <div >
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



                <Button variant="outlined" type="submit">ADD</Button>
            </form>
        </div>
    );
}


