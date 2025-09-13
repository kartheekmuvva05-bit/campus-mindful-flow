import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Mindfulness Exercises",
    description: "Guided meditation and breathing techniques",
    color: "bg-wellness-calm",
    textColor: "text-wellness-secondary",
  },
  {
    title: "Campus Resources",
    description: "Counseling services and support groups",
    color: "bg-wellness-accent/10",
    textColor: "text-wellness-accent",
  },
  {
    title: "Self-Care Tips",
    description: "Daily practices for mental wellbeing",
    color: "bg-wellness-primary-light",
    textColor: "text-wellness-primary",
  },
  {
    title: "Crisis Support",
    description: "Immediate help when you need it most",
    color: "bg-wellness-warning/10",
    textColor: "text-wellness-warning",
  },
];

export function WellnessResources() {
  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Wellness Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className={`${resource.color} p-4 rounded-lg transition-smooth hover:scale-105`}>
              <h3 className={`font-semibold ${resource.textColor} mb-2`}>{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
              <Button variant="ghost" size="sm" className={`${resource.textColor} hover:bg-white/50 p-0 h-auto font-medium`}>
                Explore →
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}