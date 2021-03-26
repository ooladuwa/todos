import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{
            color: "darkcyan",
            fontSize: "20px",
            marginTop: "2px",
          }}
        />
      </button>
    </form>
  );
};

export default InputTodo;

// import React, { Component } from "react";

// class InputTodo extends Component {
//   state = {
//     title: "",
//   };

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.title.trim()) {
//       this.props.addTodoProps(this.state.title);
//       this.setState({
//         title: "",
//       });
//     } else {
//       alert("Please write item");
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add Todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />
//         <button className="input-submit">Submit</button>
//       </form>
//     );
//   }
// }
// export default InputTodo;
