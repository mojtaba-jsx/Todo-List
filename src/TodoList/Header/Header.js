import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">TODO LIST</h1>

      <div className="todo-shape1">
        <svg
          width="411"
          height="512"
          viewBox="0 0 411 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="-0.5"
            cy="100.5"
            r="411.5"
            fill="url(#paint0_radial_2024_52)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2024_52"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-0.5 100.5) rotate(90) scale(411.5)"
            >
              <stop stop-color="#0AFA6C" />
              <stop offset="1" stop-color="#00B54A" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Header;
