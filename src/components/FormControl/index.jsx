import { useState } from "react";

export default function FormControl(props) {
  const [data, setData] = useState(Object.assign({}, props.data));

  const handleChange = (value, key) => {
    const _data = Object.assign({}, data);
    _data.value = value;
    setData(_data);
    props.onHandleChange(value, key);
  };

  const validationComponent = (key) => {
    return (
      <div className="validations">
        {props.data.errors.map((error) => (
          <p
            key={data.key}
            className="validation-item"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        ))}
      </div>
    );
  };

  const inputComponent = () => {
    if (data.inputType !== "file") {
      return (
        <input
          type={data.inputType}
          id={data.key}
          className="control"
          autoComplete="off"
          onChange={(e) => handleChange(e.target.value, data.key)}
          value={data.value}
        />
      );
    } else {
      return (
        <label className="file-selector-wrapper">
          <span className="selector" htmlFor={data.key}>
            Select
          </span>
          <span className="file-name">{data.value.name}</span>
          <input
            type={data.inputType}
            id={data.key}
            className="control"
            autoComplete="off"
            accept={data.accept}
            onChange={(e) => handleChange(e.target.files[0], data.key)}
          />
        </label>
      );
    }
  };

  return (
    <div
      className={`form-control ${
        (data.errors.length > 0 ? "has-error" : "",
        data.inputType === "file" ? "file" : "")
      }`}
      key={data.key}
    >
      {validationComponent(data.key)}
      {inputComponent()}
      <label htmlFor={data.key} className="control-title">
        {props.title}
      </label>
    </div>
  );
}
