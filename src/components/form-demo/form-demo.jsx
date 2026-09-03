import { useFormik } from "formik"

export function FormDemo() {
    function ValidateUser(user){
        let errors={Username:'',Age:'',Mobile:'',City:'',Gender};

        if(user.Username.length===0){
            errors.Username='Username is Required'
        }else{
            if(user.Username.length<4){
                errors.Username='Name is Too short -min 4 char required';
             }else{
                errors.Username='';
             }
        }

        if(user.Age.length===0){
            errors.Age='Age is required'
        }else{
            if(isNaN(user.Age)){
                errors.Age='Age must be a number'
            }else{
                errors.Age='';
            }
        }
        return errors;
    }

    if(user.City===-1){
        errors.city='Please Select Your City'
    }else{
        errors.City=''
    }
    if(user.Mobile.length===0){
        errors.Mobile='Mobile Required';
    }else{
        if(user.Mobile.match(/\+91\d{10}/)){
            errors.Mobile='';
        }else{
            errors.Mobile='Invalid Mobile'
        }
    }
    const formik=useFormik({
        initialValues:{
            username:'',
            age:0,
            mobile:'',
            city:'',
            Gender:''
        },
        validate:ValidateUser,
        onSubmit:(user)=>{
            console.log(user)
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Username :</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="username" /></dd>
                    <dd className="text-danger">{formik.errors.username}</dd>
                    <dt>Age :</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="age" /></dd>
                    <dt>Mobile :</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="mobile" /></dd>
                    <dt>City :</dt>
                    <dd>
                        <select name="city" onChange={formik.handleChange}>
                            <option value={-1}>Select City</option>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Jalna</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio"  name="Gender" value="Male"/> <label>Male</label>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Female"/> <label>Female</label>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}