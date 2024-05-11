const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-2 p-2">This is Contact Us Page</h1>
      <label className="ml-4 ">Enter EmailId : </label>
      <input className="border m-2 p-2 bg-gray-200" />
      <label>Enter Message : </label>
      <input className="border m-2 p-2 bg-gray-200" />
      <button className="m-4 px-4 py-2 bg-blue-200 rounded-md">submit</button>
    </div>
  );
};

export default Contact;
