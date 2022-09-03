import { ErrorMessage, Field } from "formik";

interface IdataOptions {
  name: string;
  value: boolean;
  label?: string;
}

interface IFieldRadioProps {
  dataOption: IdataOptions;
  className?: string;

  disabled?: boolean;
}

const FieldRadio = ({ dataOption, disabled, className }: IFieldRadioProps) => {
  return (
    <>
      <div className={className}>
        <div className="d-flex w-100 mb-1">
          <ErrorMessage name={dataOption.name}>
            {(msg) => (
              <span className="position-absolute end-0 top-0 invalid-tooltip d-inline-block ms-auto me-3">
                {msg}
              </span>
            )}
          </ErrorMessage>
        </div>
        <div className="d-flex flex-wrap flex-row ms-3">
          <div
            key={`${dataOption.value}`}
            className="form-check mb-3 position-relative col-sm-12"
          >
            <Field
              disabled={disabled}
              className="form-check-input"
              type="checkBox"
              value={dataOption.value}
              name={dataOption.name}
              id={`${dataOption.value}${dataOption.name}`}
            />
            <label>{dataOption.label}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldRadio;
