import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup'

// import { array, boolean, number, object, string, ValidationError } from 'yup';


const emptyVal = { dummyInitial: '', recievedBal: 0 };

const PracticeCompFormik = () => {
    return (
        <>
            <Formik
                initialValues={
                    {
                        Date: '',
                        Field1: "",
                        Field2: "",
                        Field3: 0,
                        donations: [emptyVal],

                    }
                }
                validationSchema={
                    yup.object({
                        Date: yup.string()
                            .required("Name Required"),

                        Field1: yup.string()
                            .required("Field1 Required"),
                        Field2: yup.string()
                            .required("Field2 Required"),
                        Field3: yup.number()
                            .required("Field2 Required"),
                        donations: yup.array(
                            yup.object({
                                dummyInitial: yup.string()
                                    .required('dummyInitial name needed')
                                    .min(3, 'dummyInitial name needs to be at least 3 characters')
                                    .max(
                                        10,
                                        'dummyInitial name needs to be at most 10 characters'
                                    ),
                                recievedBal: yup.number()
                                    .required('recievedBal needed')
                                    .min(1, 'recievedBal needs to be at least 1%')
                                    .max(100, 'recievedBal can be at most 100%'),
                            })

                        )
                            .min(1, 'You need to provide at least 1 dummyInitial')
                            .max(3, 'You can only provide 3 dummyInitial')
                            .test((donations) => {
                                const sum = donations?.reduce(
                                    (acc, curr) => acc + (curr.recievedBal || 0),
                                    0
                                );
                                console.log(sum, "here is sum")

                                // if (sum !== 100) {
                                //     return new yup.ValidationError(
                                //         `recievedBal should be 100%, but you have ${sum}%`,
                                //         undefined,
                                //         'donations'
                                //     );
                                // }

                                return true;
                            }),


                    })
                }

                onSubmit={async (values) => {
                    console.log('my values', values);
                    alert(JSON.stringify(values));
                    return new Promise((res) => setTimeout(res, 2500));
                }}
            >
                {
                    ({ values, errors, isSubmitting, isValid }) => (
                        <>
                            <div className="container">
                                <h2>Register User</h2>
                                <Form autoComplete="off">
                                    <dl>
                                        <dt>Date</dt>
                                        <dd>
                                            <Field type="text" name="Date"></Field>
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Date"></ErrorMessage>
                                        </dd>
                                        <dt>Field1</dt>
                                        <dd>
                                            <Field type="text" name="Field1"></Field>
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Field1"></ErrorMessage>
                                        </dd>
                                        <dt>Field2</dt>
                                        <dd>
                                            <Field type="text" name="Field2"></Field>
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Field2"></ErrorMessage>
                                        </dd>
                                        <dt>Field3 Num</dt>
                                        <dd>
                                            <Field type="number" name="Field3"></Field>
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Field3"></ErrorMessage>
                                        </dd>

                                        {/* it is for field Array */}
                                        <div>
                                            <FieldArray name="donations">
                                                {({ push, remove }) => (
                                                    <React.Fragment>
                                                        <p>        All your donations</p>
                                                        {values.donations.map((_, index) => (
                                                            <div key={index}>
                                                                <div>
                                                                    {/* for classnamee */}
                                                                    <Field

                                                                        name={`donations.${index}.dummyInitial`}
                                                                        //component={TextField}
                                                                        label="dummyInitial"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {/* for classnamee */}
                                                                    <Field

                                                                        name={`donations[${index}].recievedBal`}
                                                                        //component={TextField}
                                                                        type="number"
                                                                        label="recievedBal (%)"
                                                                    />
                                                                </div>

                                                                <div>
                                                                    {/* for buttons */}
                                                                    <button disabled={isSubmitting}
                                                                        onClick={() => remove(index)}>
                                                                        Delete

                                                                    </button>
                                                                </div>

                                                            </div>
                                                        )

                                                        )}



                                                        <div >
                                                            {typeof errors.donations === 'string' ? (
                                                                <p color="error">
                                                                    {errors.donations}
                                                                </p>
                                                            ) : null}
                                                        </div>


                                                        <div >
                                                            <button
                                                                disabled={isSubmitting}
                                                                //variant="contained"
                                                                onClick={() => push(emptyVal)}
                                                            >
                                                                Add Donation
                                                            </button>
                                                        </div>


                                                    </React.Fragment>
                                                )}
                                            </FieldArray>
                                        </div>
                                    </dl>
                                    <button >{isSubmitting ? 'Submitting' : 'Submit'}</button>
                                    <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                                </Form>
                            </div>
                        </>
                    )
                }
            </Formik>

        </>
    )
}

export default PracticeCompFormik;