import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./Login.css";

const schema = z.object({
  email: z.string().email({ message: "Please Enter The Valid Message" }).min(6),
  password: z.string().min(8, { message: "Please Enter 8 Characters" }),
});

const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  // console.log(register);

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form"
        onSubmit={handleSubmit((formData) => console.log(formData))}
      >
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
            {formState.errors.password && (
              <em className="form_error">
                {formState.errors.password.message}
              </em>
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
