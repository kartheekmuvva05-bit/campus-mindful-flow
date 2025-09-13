import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recommendations = [
  {
    icon: "🫁",
    title: "Breathing Exercise",
    description: "Try 4-7-8 breathing to reduce anxiety",
  },
  {
    icon: "🏃‍♀️",
    title: "Outdoor Activity", 
    description: "Your step count has decreased this week",
  },
  {
    icon: "📔",
    title: "Gratitude Journal",
    description: "Write down three things you're thankful for",
  },
];

export function PersonalizedRecommendations() {
  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Personalized Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-wellness-calm transition-smooth cursor-pointer">
              <div className="text-2xl">{rec.icon}</div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{rec.title}</h3>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}