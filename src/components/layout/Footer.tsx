const Footer = () => {
  return (
    <footer className="w-full py-10 text-center border-t border-text-secondary/10 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Praneet Kaur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
