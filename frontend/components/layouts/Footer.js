import Link from "next/link";

const Footer = () => {
  return (
    <div className="alignCenter bg-black text-white">
      <ul className="w-[80%]  py-12 text-sm font-thin">
        <li>
          <Link href="">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>My page</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
