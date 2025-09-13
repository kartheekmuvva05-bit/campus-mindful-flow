import { Header } from "@/components/Header";
import { MoodCheckIn } from "@/components/MoodCheckIn";
import { WellnessResources } from "@/components/WellnessResources";
import { SentimentAnalysis } from "@/components/SentimentAnalysis";
import { WellnessTrends } from "@/components/WellnessTrends";
import { PersonalizedRecommendations } from "@/components/PersonalizedRecommendations";
import { WeeklySummary } from "@/components/WeeklySummary";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-wellness">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <Card className="shadow-card-soft">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-2">Welcome, Alex!</h2>
                <p className="text-muted-foreground">
                  How are you feeling today? Check in and track your wellness journey.
                </p>
              </CardContent>
            </Card>

            {/* Mood Check-in */}
            <MoodCheckIn />

            {/* Wellness Resources */}
            <WellnessResources />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sentiment Analysis */}
            <SentimentAnalysis />

            {/* Wellness Trends Chart */}
            <WellnessTrends />

            {/* Recommendations */}
            <PersonalizedRecommendations />
          </div>
        </div>

        {/* Weekly Summary */}
        <WeeklySummary />

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm p-4 mt-8">
          <p>Student Wellness Portal © 2024 | Privacy Policy | Terms of Service</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;