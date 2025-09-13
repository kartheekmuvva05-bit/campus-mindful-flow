import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SentimentAnalysis() {
  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-wellness-calm p-4 rounded-lg">
          <p className="text-sm text-muted-foreground mb-3">
            Based on your recent check-ins, you've been feeling:
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <Badge className="bg-wellness-accent text-white">POSITIVE</Badge>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-wellness-accent h-2 rounded-full transition-all duration-1000" 
              style={{ width: "75%" }}
            />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-2">Detected emotional states:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-wellness-secondary/10 text-wellness-secondary border-wellness-secondary/20">
              Calm
            </Badge>
            <Badge variant="secondary" className="bg-wellness-accent/10 text-wellness-accent border-wellness-accent/20">
              Hopeful
            </Badge>
            <Badge variant="secondary" className="bg-wellness-warning/10 text-wellness-warning border-wellness-warning/20">
              Tired
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}