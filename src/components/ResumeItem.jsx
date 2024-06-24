import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeItem({ resume }) {
  return (
    <Link to={"/dashboard/resume/" + resume.attributes.resumeId + "/edit"}>
      <div>
        <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border border-Ccolor rounded-xl hover:scale-105 transition-all hover:shadow-md shadow-secondary-color">
          <Notebook />
        </div>
        <h2 className="text-center my-1 text-black">
          {resume.attributes.title}
        </h2>
      </div>
    </Link>
  );
}

export default ResumeItem;
