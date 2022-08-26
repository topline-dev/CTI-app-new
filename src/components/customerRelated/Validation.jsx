import * as Yup from "yup";

const formValidation = Yup.object().shape({
    custData: Yup.object().shape({
        customerFirstName: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Too Long!")
            .required("Required!"),
        customerLastName: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Too Long!")
            .required("Required!"),
        customerEmail: Yup.string().email('Must be a valid email').required('email required')
    }),
});

export default formValidation;