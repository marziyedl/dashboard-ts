import { ErrorMessage, Field } from "formik";
import { InputType } from "reactstrap/types/lib/Input";

interface IFieldInput {
  type: InputType;
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const FieldInput = ({
  name,
  placeholder,
  type,
  className = "",
  disabled = false,
}: IFieldInput) => {
  return (
    <div className={`${className} d-flex flex-row flex-nowrap mb-3 `}>
      <div className="ms-3 w-100">
        <p className="position-relative d-flex align-items-center mb-2">
          <ErrorMessage name={name}>
            {(msg) => (
              <span className="position-absolute top-0 end-0 invalid-tooltip position-relative d-inline-block ms-auto me-3">
                {msg}
              </span>
            )}
          </ErrorMessage>
        </p>

        <Field
          disabled={disabled}
          className="p-1 w-100"
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default FieldInput;
