import { useForm } from "react-hook-form";

import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  console.log(formState.errors);
  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit()}>
        <h2>Login Form </h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="form_text_input"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
            />
            {formState.errors.email?.type === "required" && (
              <emp className="form_error">Please Enter your Email</emp>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 3,
              })}
            />
            {formState.errors.password?.type === "minLength" && (
              <emp className="form_error">Password should be 8 characters</emp>
            )}
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
