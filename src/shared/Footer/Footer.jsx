const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around items-center text-center py-10 bg-base-300 ">
        <div className="">
          <h1>Contact us </h1>
          <p>Rajshashi, Bangladesh</p>
          <p>+880 1827 251661 </p>

        </div>
        <div>
          <h1>Follow Us</h1>
          <p>Join us on social media</p>
        </div>
      </div>
      <div className="footer bg-neutral footer-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Boss
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
