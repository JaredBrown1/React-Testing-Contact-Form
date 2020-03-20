import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

it("renders Firstname input box", () => {
  const container = render(<ContactForm />);

  container.getByText(/first name/i);
});
