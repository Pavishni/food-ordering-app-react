const Contact = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl m-4 p-4">Contact US!</h1>
      <form className="m-4 p-2">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-black p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-black p-2 m-2"
        ></input>
        <button className="border-2 bg-gray-700 text-white p-2 m-2 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
