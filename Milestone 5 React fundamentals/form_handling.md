# Handling Forms with Formik

## How does Formik simplify form management compared to handling state manually?

- Without Formik, we have to manage the state for each form field individually using useState. We also need to write custom handlers for onChange, onBlur, and onSubmit events. Tracking things like validation errors, which fields have been touched, and whether the form is valid must all be done manually. This results in a lot of boilerplate code and increases the likelihood of bugs.
- But with Formik, the entire form state is centralized using a single hook or component. It automatically handles common events like onChange and onBlur, as well as form values, errors, touched fields, submission status, and more. We only need to define the initial values, validation logic, and a submit function—Formik takes care of the rest.

## What are the benefits of using Formik’s validation instead of writing validation logic manually?

- Formik’s built-in validation:

  - Supports both custom validate functions and Yup schemas.
  - Automatically runs on blur/change/submit.
  - Populates errors object automatically.
  - Integrates with <ErrorMessage /> for clean UI error display.

- Benefits over manual validation:
  - No need to write repetitive checks (e.g., if (!values.email))
  - Cleaner separation of concerns: Validation logic stays outside your components.
  - Reusable: Yup schemas can be reused across forms.
  - Better error tracking: Formik tracks touched, so errors only show when appropriate.
