import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      Sepette henuz herhangi bir urun bulunmuyor
      <Link to="/" className="border p-2 shadow rounded hover:bg-gray-100">
        Restoranlara Gozat
      </Link>
    </div>
  );
};

export default Warning;
