import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Import mood images
import moodVerySad from "@/assets/mood-very-sad.png";
import moodSad from "@/assets/mood-sad.png";
import moodNeutral from "@/assets/mood-neutral.png";
import moodHappy from "@/assets/mood-happy.png";
import moodVeryHappy from "@/assets/mood-very-happy.png";

const moods = [
  { id: 1, label: "Very Sad", variant: "mood-very-sad" as const, image: moodVerySad },
  { id: 2, label: "Sad", variant: "mood-sad" as const, image: moodSad },
  { id: 3, label: "Neutral", variant: "mood-neutral" as const, image: moodNeutral },
  { id: 4, label: "Happy", variant: "mood-happy" as const, image: moodHappy },
  { id: 5, label: "Very Happy", variant: "mood-very-happy" as const, image: moodVeryHappy },
];

export function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodDescription, setMoodDescription] = useState("");
  const [contributing, setContributing] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Check-in submitted!",
      description: "Thank you for sharing your mood today. Your wellness journey is important.",
    });

    // Reset form
    setSelectedMood(null);
    setMoodDescription("");
    setContributing("");
  };

  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Daily Mood Check-in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between">
          {moods.map((mood) => (
            <div key={mood.id} className="text-center">
              <Button
                variant={selectedMood === mood.id ? mood.variant : "ghost"}
                size="icon"
                className={`p-3 rounded-full transition-bounce ${
                  selectedMood === mood.id ? "scale-110" : "hover:scale-105"
                }`}
                onClick={() => setSelectedMood(mood.id)}
              >
                <img 
                  src={mood.image} 
                  alt={`${mood.label} mood expression`}
                  className="h-10 w-10 object-cover"
                />
              </Button>
              <p className="text-sm mt-1 text-muted-foreground">{mood.label}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mood-description">How would you describe your current mood?</Label>
          <Input
            id="mood-description"
            value={moodDescription}
            onChange={(e) => setMoodDescription(e.target.value)}
            placeholder="I'm feeling..."
            className="transition-smooth focus:shadow-wellness"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="contributing">What's contributing to your mood today?</Label>
          <Textarea
            id="contributing"
            value={contributing}
            onChange={(e) => setContributing(e.target.value)}
            rows={3}
            placeholder="Today I..."
            className="transition-smooth focus:shadow-wellness"
          />
        </div>
        
        <Button 
          variant="wellness" 
          onClick={handleSubmit}
          className="w-full"
        >
          Submit Check-in
        </Button>
      </CardContent>
    </Card>
  );
}