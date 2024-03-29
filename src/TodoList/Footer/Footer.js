import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="todo-shape2">
        <svg
          width="200"
          height="200"
          viewBox="0 0 512 278"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="411.5"
            cy="411.5"
            r="411.5"
            fill="url(#paint0_linear_3_171)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_171"
              x1="411.5"
              y1="2.98023e-08"
              x2="412"
              y2="412"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#007496" />
              <stop offset="1" stop-color="#00C6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Footer;
