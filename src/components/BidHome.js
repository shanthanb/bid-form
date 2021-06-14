import {useState} from 'react';
import Bid from './Bid';
import PlaceBid from './PlaceBid';
import Otp from './Otp';
import Review from './Review';
import { useFormik } from 'formik';
import Banner from './Banner.js';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = [yup.object({
  source: yup
    .string('Enter Source')
    .required('Source is required'),
  destination: yup
    .string('Enter Destination')
    .required('Destination is required'),
  type: yup
    .string('Choose Car Type')
    .required('Car Type is required'),
  traveller: yup
    .number('Not a valid number')
    .required('Traveller Required')
    .when('type', {
      is: 'SUV',
      then: yup.number().max(6, 'Max 6 travellers are allowed'),
      otherwise: yup.number().max(4, 'Max 4 travellers are allowed')
    }),
}),
yup.object({
  amount: yup
    .number('Not a valid amount')
    .required('Amount Required'),
  mobile: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "Phone number is not valid")
    .max(10, "Phone number is not valid"),
  name: yup
    .string('Enter your name')
    .required('Name is Required'),
}),
];

const renderStepContent = (step, handleSubmit, handleBack, formik) => {
  switch (step) {
    case 0:
      return <Bid handleSubmit={handleSubmit} handleBack={handleBack} formik={formik}/>;
    case 1:
      return <PlaceBid handleSubmit={handleSubmit} handleBack={handleBack} formik={formik}/>;
    case 2:
      return <Otp handleSubmit={handleSubmit} handleBack={handleBack} formik={formik}/>;
    case 3:
      return <Review handleSubmit={handleSubmit} handleBack={handleBack} formik={formik}/>;
    default:
      return <div>Not Found</div>;
  }
};

const BidHome = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === 3;
  const message = ['Place your Bid(1/4 Step)', 'Place your Bid(2/4 Step)', 'Verify OTP(3/4 Step)', 'Summary & Submit Bid(4/4 Step)'];

  const formik = useFormik({
    initialValues: {
      source: '',
      destination: '',
      type: '',
      traveller: '',
      amount: '',
      negotiable: false,
      mobile: '',
      name: '',
      remark: '',
    },
    validationSchema: validationSchema[activeStep],
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (isLastStep) {
      alert(JSON.stringify(values, null, 2));
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  const handleBack = (value) => {
    setActiveStep(value);
  }

  return (
    <div>
      <Banner message={message[activeStep]}/>
      <div className="App-content">
        <form onSubmit={formik.handleSubmit}>
          {renderStepContent(activeStep, handleSubmit, handleBack, formik)}
        </form>
      </div>
    </div>
  );
}

export default BidHome;
