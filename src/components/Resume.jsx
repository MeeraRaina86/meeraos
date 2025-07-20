import React from "react";

const Resume = ({ onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-6 border border-gray-300">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-bold">📄 Resume</h2>
        <button
          className="text-gray-400 hover:text-red-500 text-lg"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <p className="text-gray-700 text-sm">
  Project Manager – Healthcare IT ( Pharmacovigilance, E2E Delivery)
Phone: +91 9718519929 | Email: Meera_011@yahoo.com | Voice Agent (VAPI): +1 (341) 587 9436 (Mira)
PROFESSIONAL SUMMARY Seasoned IT Project Manager with over 16 years of experience delivering
complex, high-impact projects across the US healthcare and pharmacovigilance domains. Proven track
record in leading cross-functional teams through end-to-end project life cycles using Scrum and Agile
methodologies. Adept at release management, stakeholder collaboration, and aligning project delivery with
business goals. Certified PMP and CSM with expertise in prompt engineering for Gen AI tools, scripting in
Python, and building macros for deployment tracking and business requirements progress.
CORE COMPETENCIES • Healthcare & Pharmacovigilance Projects • Project & Release Management • Scrum,
Agile Delivery • E2E Project Lifecycle Execution • Cross-functional Team Leadership • Stakeholder
Management • Prompt Engineering (ChatGPT, Gemini, Claude, Perplexity, CoPilot) • Python Scripting &
Macro Automation • Deployment Tracking & Reporting • Running LLMs offline using LM Studio for data
privacy
PROFESSIONAL EXPERIENCE IQVIA – Delivery Manager / Scrum Master Apr 2019 – Present - Transitioned
across roles from Test Manager to Scrum Master to Release Manager within high-regulation US healthcare
projects, focusing on pharmacovigilance and patient safety systems. - Managed release cycles, crossfunctional
alignment, and Agile ceremonies for critical product launches. - Spearheaded prompt-based
automation initiatives using Gen AI tools to support documentation, testing, and release notes. - Created
Python scripts and macros to automate deployment validation and business requirement tracking, and
working with automation tools like Power Automate, Make, and Langflow. - Received Bronze and Silver
Impact Awards for exceptional contribution.
Accenture – Team Lead Apr 2015 – Apr 2019 - Led distributed Agile teams in healthcare accounts; focused
on quality assurance and continuous improvement. - Improved delivery timelines through process
automation and test optimization. - Honored with the ACE Award for high-impact delivery.
CSC – Senior Test Engineer Feb 2011 – Apr 2015 - Worked on quality assurance across critical projects; key
contributor to Agile transformation. - Developed test automation and defect management practices across
multiple applications.
TCS – Assistant Systems Engineer Nov 2008 – Feb 2011 - Delivered system testing and collaborated closely
with developers to resolve defects early in SDLC. - Supported key client engagements with successful
outcomes.
EDUCATION Bachelor of Engineering (B.E.) – Computer Science Jammu University | 2004 – 2008
AI Generalist Fellowship
Outskill | Apr 2025 – Present
      </p>
    </div>
  );
};

export default Resume;
