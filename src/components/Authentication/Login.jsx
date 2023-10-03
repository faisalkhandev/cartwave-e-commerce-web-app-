import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./Login.css";
import { useState } from "react";
import { getUser, loginUser } from "../Services/userServices";
import { Navigate, useLocation } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Please Enter The Valid Message" }).min(6),
  password: z.string().min(8, { message: "Please Enter 8 Characters" }),
});

const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const [formError, setFormError] = useState("");

  // console.log(register);
  async function onSubmit(formData) {
    try {
      const { data: Data } = await loginUser(formData);
      localStorage.setItem("token", Data.token);

      window.location = "/";
    } catch (error) {
      setFormError(error.response.data.message);
    }
  }

  if (getUser()) {
    return <Navigate to="/" />;
  }

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form </h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Enter your email"
              {...register("email")}
            />
            {formState.errors.email && (
              <em className="form_error">{formState.errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          {formError && <em className="form_error email_error">{formError}</em>}
          <button type="submit" className="search_button submit_form">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
