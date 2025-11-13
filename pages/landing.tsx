import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
    </main>
  );
};

export default Landing;
