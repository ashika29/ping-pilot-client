import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-items-center flex-wrap items-center justify-center bottom-0 fixed w-full border-grid  z-50 border-b bg-background/5 backdrop-blur supports-[backdrop-filter]:bg-background/6 p-5 ">
      <div>
        Ping Pilot <sup>{new Date().getFullYear()}</sup>
      </div>
      <div>ⓒ All rights reserved.</div>
    </footer>
  );
}

export default Footer;
