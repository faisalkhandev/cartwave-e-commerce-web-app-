import "./Login.css";

const Login = () => {
  return (
    <section className="align_center form_page">
      <form className="authentication_form">
        <h2>Login Form </h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              className="form_text_input"
              placeholder="Enter your phone number"
            />
          </div>
          <button type="submit" className="search_button submit_form">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
