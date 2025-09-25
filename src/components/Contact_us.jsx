import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MAX_CHARS = 1000;

const Contact_us = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    isLibrarian: false,
    reason: "",
    journal: "Social Text",
    comment: "",
    recaptchaChecked: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "comment" && value.length > MAX_CHARS) {
      setForm((s) => ({ ...s, comment: value.slice(0, MAX_CHARS) }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.recaptchaChecked) errs.recaptcha = "Please verify you are not a robot (mock)";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log("Submitting contact form:", form);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Contact Us</h1>
          <p className="text-center text-gray-500 mb-8">
            Have questions or feedback? Fill out the form below.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Librarian Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isLibrarian"
                checked={form.isLibrarian}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">I am a librarian</label>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Reason</label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              >
                <option value="">-- select reason --</option>
                <option value="request">Request</option>
                <option value="report">Report a problem</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Journal */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Journal</label>
              <select
                name="journal"
                value={form.journal}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              >
                <option>Social Text</option>
                <option>Journal of Applied Finance</option>
                <option>Economic Review</option>
                <option>Other</option>
              </select>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comment (max {MAX_CHARS} characters)
              </label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                maxLength={MAX_CHARS}
                rows={5}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              />
              <div className="text-right text-xs text-gray-500">
                {MAX_CHARS - form.comment.length} characters left
              </div>
            </div>

            {/* Recaptcha mock */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="recaptchaChecked"
                  checked={form.recaptchaChecked}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">I'm not a robot</span>
              </label>
              {errors.recaptcha && <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!form.recaptchaChecked}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none disabled:bg-gray-400"
              >
                Submit
              </button>
            </div>

            {submitted && (
              <div className="text-green-600 font-medium text-center">
                ✅ Thanks — your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact_us;