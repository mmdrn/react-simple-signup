// import "./style.scss";

// export default function FormControl(props) {
//   const data = props.data;

//   const handleInputChange = (event, key) => {
//     const _form = Object.assign({}, form);
//     _form[key].value = event.target.value;
//     updateForm(_form);
//   };

//   const formControlValidationMessages = (key) => {
//     return (
//       <div className="validations">
//         {data.errors.map((error) => (
//           <p
//             key={key}
//             className="validation-item"
//             dangerouslySetInnerHTML={{ __html: error }}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`form-control ${
//         (data.errors.length > 0 ? "has-error" : "",
//         data.inputType === "file" ? "file" : "")
//       }`}
//       key={data.key}
//     >
//       {formControlValidationMessages(data.key)}
//       <input
//         type={data.inputType}
//         id={data.key}
//         className="control"
//         autoComplete="off"
//         onChange={(e) => handleInputChange(e, data.key)}
//         value={data.value}
//       />
//       <label htmlFor={data.key} className="control-title">
//         {t(`signup.form.${data.key}.title`)}
//       </label>
//     </div>
//   );
// }
