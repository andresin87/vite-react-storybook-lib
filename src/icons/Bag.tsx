import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgBag = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 6.631v-1.17a1.75 1.75 0 0 1 1.49-1.73l1.22-.183a13.75 13.75 0 0 1 4.08 0l1.22.183a1.75 1.75 0 0 1 1.49 1.73v1.17l1.714.138a2.86 2.86 0 0 1 2.593 2.394 27.129 27.129 0 0 1 0 8.674 2.86 2.86 0 0 1-2.593 2.394l-1.872.15a57.078 57.078 0 0 1-9.184 0l-1.872-.15a2.86 2.86 0 0 1-2.593-2.394 27.13 27.13 0 0 1 0-8.674A2.86 2.86 0 0 1 5.536 6.77l1.714-.138Zm2.933-1.6a12.25 12.25 0 0 1 3.634 0l1.22.183a.25.25 0 0 1 .213.247v1.065a57.078 57.078 0 0 0-6.5 0V5.46a.25.25 0 0 1 .213-.247l1.22-.183ZM7.529 8.113c2.976-.24 5.966-.24 8.942 0l1.872.151a1.36 1.36 0 0 1 1.234 1.139c.062.385.116.77.16 1.158a17.517 17.517 0 0 1-15.474 0c.044-.387.098-.773.16-1.158a1.36 1.36 0 0 1 1.234-1.139l1.872-.15Zm-3.4 4.044a19.018 19.018 0 0 0 15.742 0 25.629 25.629 0 0 1-.294 5.44 1.36 1.36 0 0 1-1.234 1.138l-1.872.152c-2.976.24-5.966.24-8.942 0l-1.872-.152a1.36 1.36 0 0 1-1.234-1.138c-.291-1.8-.39-3.624-.294-5.44Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBag;
