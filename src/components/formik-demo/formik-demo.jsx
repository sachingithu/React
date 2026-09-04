import { useFormik } from "formik"

export function FormikDemo() {

    function ValidateUser(user){
        let errors={}
        if(user.UserName.length===0){
            errors.UserName='Username required';
        }else{
            if(user.UserName.length<4){
                errors.UserName='Username is too short-min 4 chars'
            }
        }
        if(user.City==='-1'){
            errors.City='Please Select City Name';
        }
        if(!user.Gender){
            errors.Gender='Please Select Gender';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            City: '-1',
            Gender: ''
        },
        validate:ValidateUser,
        onSubmit: (user) => {
            console.log(user)
        }
    })
    return (
        <div className="container-fluid">
            <h3>Register user</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} onBlur={formik.handleBlur} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Your City</dt>
                    <dd>
                        <select value={formik.values.City} onChange={formik.handleChange} name="city">
                            <option value="-1">Select City</option>
                            <option>Pune</option>
                            <option>Hyderabad</option>
                            <option>Jalna</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" checked={formik.values.Gender==='Male'} onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>
                        <input type="radio" checked={formik.values.Gender==='Female'} onChange={formik.handleChange} name="Gender" value="Female" /> <label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}