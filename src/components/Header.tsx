import { Navigation } from "./Navigation";
import wellnessLogo from "@/assets/wellness-logo.png";

export function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 bg-card rounded-lg shadow-card-soft">
      <div className="flex items-center mb-4 md:mb-0">
        <img 
          src={wellnessLogo} 
          alt="Mindful student meditating peacefully" 
          className="h-12 w-12 mr-3 rounded-lg object-cover"
        />
        <h1 className="text-2xl font-bold text-wellness-primary">Student Wellness Portal</h1>
      </div>
      <Navigation />
    </header>
  );
}