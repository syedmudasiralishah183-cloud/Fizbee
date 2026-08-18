"use client";
import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./FormValidation";
import { initialValues } from "./FormValidation";
import MainContainer from "@/constants/container/MainContainer";
import PrimaryButton from "@/constants/buttons/primaryButton";
import { useTranslations } from "next-intl";

const ContactUsForm = () => {
  const t = useTranslations("contact");

  const contactUsData = {
    heading: t("heading"),
    p: t("p"),
    nameLabel: t("nameLabel"),
    namePlaceholder: t("namePlaceholder"),
    emailLabel: t("emailLabel"),
    emailPlaceholder: t("emailPlaceholder"),
    phoneLabel: t("phoneLabel"),
    phonePlaceholder: t("phonePlaceholder"),
    messageLabel: t("messageLabel"),
    messagePlaceholder: t("messagePlaceholder"),
    submitButtonText: t("submitButtonText"),
    submittingText: t("submittingText"),
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <MainContainer className="flex items-center justify-center py-14">
      <div className={`lg:w-3/4 relative order-1 z-40`}>
        <div className="text-bg_dark  lg:pb-3 pb-3">
          <h1 className="text-3xl max-lg:text-2xl font-semibold">
            {contactUsData.heading}
          </h1>
          <p className="text-base max-lg:text-sm hyphens-auto lg:py-4 py-3 max-md:py-2 max-md:text-xs max-md:text-justify">
            {contactUsData.p}
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 gap-x-6 2xl:gap-y-10 gap-y-7"
        >
          {/* Name Input */}
          <div className="col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 font-myFont text-text_color font-semibold"
            >
              {contactUsData.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={contactUsData.namePlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="p-2 border rounded-sm w-full focus:outline-none focus:ring-2 shadow-sm focus:ring-primary_color"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          {/* Email Input */}
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block mb-2 font-myFont text-text_color font-semibold"
            >
              {contactUsData.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={contactUsData.emailPlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-2 border rounded-sm w-full focus:outline-none focus:ring-2 shadow-sm focus:ring-primary_color"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="col-span-2">
            <label
              htmlFor="number"
              className="block mb-2 font-myFont text-text_color font-semibold"
            >
              {contactUsData.phoneLabel}
            </label>
            <input
              id="number"
              type="number"
              name="number"
              placeholder={contactUsData.phonePlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
              className="p-2 border rounded-sm w-full focus:outline-none focus:ring-2 shadow-sm focus:ring-primary_color"
            />
            {formik.errors.number && formik.touched.number && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.number}
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-myFont text-text_color font-semibold"
            >
              {contactUsData.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={contactUsData.messagePlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="p-2 border rounded-sm w-full focus:outline-none focus:ring-2 shadow-sm focus:ring-primary_color"
            />
            {formik.errors.message && formik.touched.message && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center col-span-2">
            <PrimaryButton className="flex items-center justify-center">
              {contactUsData.submitButtonText}
            </PrimaryButton>
          </div>

          {formik.status && (
            <div
              className={`text-${
                formik.status.success ? "green" : "red"
              }-500 mt-2`}
            >
              {formik.status.message}
            </div>
          )}
        </form>
      </div>
    </MainContainer>
  );
};

export default ContactUsForm;
