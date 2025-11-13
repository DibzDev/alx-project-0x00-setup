import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <Button title="Small Rounded" className="rounded-sm text-sm" />
      <Button title="Medium Rounded" className="rounded-md text-base" />
      <Button title="Large Rounded" className="rounded-full text-lg" />
  
    </main>
  );
};

export default Landing;
