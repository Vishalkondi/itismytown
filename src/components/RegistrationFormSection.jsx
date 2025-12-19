import React, { useState } from "react";

const RegistrationFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    town: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.agree) {
      alert("Please agree to Terms & Conditions");
      return;
    }

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl"
    >
      <h2 className="text-xl font-semibold text-center mb-6">
        Create a Shopper Account
      </h2>

      {/* FORM FIELDS */}
      <div className="grid grid-cols-2 gap-4">
        <input
          className="input"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email ID*"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="input col-span-2"
          name="address"
          placeholder="Address*"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="town"
          placeholder="Town*"
          value={formData.town}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="city"
          placeholder="City*"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <select
          className="input"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">State*</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Telangana">Telangana</option>
        </select>

        <select
          className="input"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Country*</option>
          <option value="India">India</option>
        </select>

        <input
          className="input"
          name="postalCode"
          placeholder="Postal Code*"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />

        {/* MOBILE WITH INDIA FLAG */}
        <div className="flex gap-2">
          <div className="flex items-center px-3 border rounded-lg bg-gray-50">
            🇮🇳 +91
          </div>
          <input
            className="input flex-1"
            name="mobile"
            placeholder="Mobile No*"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password* (min 8 characters)"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          className="input"
          name="confirmPassword"
          placeholder="Confirm Password*"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* TERMS & CONDITIONS */}
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm">
          I agree to the{" "}
          <span className="text-blue-700 underline cursor-pointer">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="text-blue-700 underline cursor-pointer">
            Privacy Policy
          </span>
        </span>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          type="reset"
          className="px-8 py-2 border rounded-lg"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-8 py-2 bg-blue-900 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationFormSection;
