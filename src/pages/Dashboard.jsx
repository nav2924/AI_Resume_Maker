import AddResume from "@/components/AddResume";
import React, { useEffect } from "react";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../services/GlobalApi";
import ResumeItem from "../components/ResumeItem";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setResumeList(resp.data.data);
        console.log(resp.data);
      }
    );
  };
  return (
    <div className="p-10 md:px-20 lg:px-32 pd-12">
      <h2 className="font-bold text-3xl">My Resumes</h2>
      <p>Start Creating AI resume to your next Job Role</p>
      <div className="grid gird-cols-2 md:grip-cols-3 lg:grid-cols-5 mt-10">
        <AddResume />
        {resumeList.length &&
          resumeList.map((resume, index) => (
            <ResumeItem resume={resume} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
