import React from "react";
import {
  FaLinkedinIn,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 ">
        <div>
          <h1 className="w-full text-5xl font-bold text-[#00df9a]">
            TenantTrack
          </h1>
          <p className="py-4 text-xl">
            Simplify your rentals, grow your business.
          </p>
          <div className="flex md:w-[75%] my-6 justify-between">
            <FaFacebookSquare size={35} />
            <FaInstagramSquare size={35} />
            <FaTwitterSquare size={35} />
            <FaGithubSquare size={35} />
            <FaLinkedinIn size={35} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between">
          <div>
            <h6 className="font-medium text-gray-600">Solution</h6>
            <ul>
              <li className="py-2 text-sm">Rental Collection</li>
              <li className="py-2 text-sm">Tenent Management</li>
              <li className="py-2 text-sm">Maintenance Requests</li>
              <li className="py-2 text-sm">Financial Report</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-600">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guide</li>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">FQA</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-600">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blogs</li>
              <li className="py-2 text-sm">Opportunity</li>
              <li className="py-2 text-sm">Partner</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-600">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Term</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
