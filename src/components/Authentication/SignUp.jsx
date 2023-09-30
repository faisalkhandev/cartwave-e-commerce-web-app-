import "./SignUp.css";
import user from "../../../public/user.png";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { registerUser } from "../Services/userServices";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(5, { message: "Enter at least 5 characters" }),
  email: z.string().email({ message: "Enter the valid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  address: z
    .string()
    .min(15, { message: "Please Enter at least 15 characters " }),
  confirmPassword: z
    .string()
    .min(8)
    .refine((data) => data.password === data.confirmPassword, {
      message: "The confirm password doesn't match",
      path: ["confirmPassword"],
    }),
});

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(formData) {
    try {
      const { data: Data } = await registerUser(formData, profilePic);
      localStorage.setItem("token", Data.token);
      window.location = "/";
    } catch (error) {
      setFormError(error.response.data.message);
    }
  }
  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>SignUp Form</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
            id="file-ip-1"
            className="image_input"
          />
        </div>

        {/* Form Inputs */}
        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
              autoComplete="username"
              {...register("name")}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              className="form_text_input"
              type="password"
              placeholder="Enter confirm password"
              autoComplete="new-password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <em className="form_error">{errors.confirmPassword.message}</em>
            )}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="Enter delivery address"
              {...register("address")}
            />
            {errors.address && (
              <em className="form_error">{errors.address.message}</em>
            )}
          </div>
        </div>

        {formError && <em className="form_error email_error">{formError}</em>}

        <button className="search_button form_submit" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
