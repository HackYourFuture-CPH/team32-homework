"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SignUpForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleNextFocus = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef && nextRef.current) nextRef.current.focus();
    }
  };
  const validate = (fields) => {
    const newErrors = {};
    if (!fields.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!fields.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!fields.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email";
    if (!fields.phone.match(/^\d{8,}$/))
      newErrors.phone = "Phone must be at least 8 digits";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      router.push("/");
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              ref={firstNameRef}
              type="text"
              style={{
                display: "block",
                width: "100%",
                borderColor: errors.firstName ? "red" : "#ccc",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 4,
                padding: 8,
                marginTop: 4,
              }}
              onKeyDown={(e) => handleNextFocus(e, lastNameRef)}
            />
            {errors.firstName && (
              <Typography color="error" variant="caption">
                {errors.firstName}
              </Typography>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              ref={lastNameRef}
              type="text"
              style={{
                display: "block",
                width: "100%",
                borderColor: errors.lastName ? "red" : "#ccc",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 4,
                padding: 8,
                marginTop: 4,
              }}
              onKeyDown={(e) => handleNextFocus(e, emailRef)}
            />
            {errors.lastName && (
              <Typography color="error" variant="caption">
                {errors.lastName}
              </Typography>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              style={{
                display: "block",
                width: "100%",
                borderColor: errors.email ? "red" : "#ccc",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 4,
                padding: 8,
                marginTop: 4,
              }}
              onKeyDown={(e) => handleNextFocus(e, phoneRef)}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                {errors.email}
              </Typography>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              ref={phoneRef}
              type="tel"
              style={{
                display: "block",
                width: "100%",
                borderColor: errors.phone ? "red" : "#ccc",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 4,
                padding: 8,
                marginTop: 4,
              }}
            />
            {errors.phone && (
              <Typography color="error" variant="caption">
                {errors.phone}
              </Typography>
            )}
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}
