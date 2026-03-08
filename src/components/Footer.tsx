const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-body">
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">Aravind Chandramohan</span>. All rights reserved.
        </p>
        <p className="font-body text-xs">
          Product · Program · Project Leadership
        </p>
      </div>
    </footer>
  );
};

export default Footer;
