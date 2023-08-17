import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          {/* need the name attribute for the action function to work! */}
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submisison = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submisison);

  // send post request to server
  if (submisison.message.length < 10) {
    return {error: "Message must be over 10 characters long."}
  }

  // redirect the user
  return redirect("/");
};
