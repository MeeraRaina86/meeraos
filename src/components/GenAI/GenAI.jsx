import React from "react";
import PromptCoach from "./PromptCoach";
import PersonalChef from "./PersonalChef";
import VoiceAgent from "./VoiceAgent";
import MBTITest from "./MBTITest";

const GenAI = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4">
      <PromptCoach />
      <PersonalChef />
      <VoiceAgent />
      <MBTITest />
    </div>
  );
};

export default GenAI;
