import * as Yup from "yup";

const useSchema = () => {
  const addSensorValidation = Yup.object().shape({
    customer: Yup.string().required("This item is required"),
    location: Yup.string().required("This item is required"),
  });
  const editSensorValidation = Yup.object().shape({
    customer: Yup.string().required("This item is required"),
    location: Yup.string().required("This item is required"),
  });
  return {
    addSensorValidation,
    editSensorValidation,
  };
};

export { useSchema };
