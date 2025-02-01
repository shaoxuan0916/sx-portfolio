"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormState);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Write your submit logic here
  //   console.log(formData);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (
      formData.name.value === "" ||
      formData.email.value === "" ||
      formData.message.value === ""
    ) {
      alert("Please fill in all fields!");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_1tx3x6f",
        "template1",
        {
          from_name: formData.name.value,
          to_name: "Wong Shao Xuan",
          from_email: formData.email.value,
          to_email: "shaoxuanhinhua@gmail.com",
          message: formData.message.value,
        },
        "t5fcMu8kU-yJ3rCGM"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setFormData(defaultFormState);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
