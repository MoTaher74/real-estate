import { useState } from "react";
const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "3a576452-ab01-4489-a2ee-840deb71e7e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert('Form Submitted Successfully');
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult('');
    }
  };
  return (
  
      <section className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1 under font-light"> With Us</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto capitalize">Ready to make a move? let's build your together</p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-800 pt-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
            Your Name
            <input type="text" placeholder="Your Name" name="Name" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"/>
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input type="email" placeholder="Your Email" name="Email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"/>
            </div>
          </div>

          <div className="text-left mt-6">
            Message
            <textarea name="Message" placeholder="Message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none "></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-12 mb-10 rounded mt-10">{result ? result :"Send Message"}</button>
        </form>

    </section>
  )
}

export default Contact
