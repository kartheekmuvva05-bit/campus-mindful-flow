import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    value: "4.2",
    label: "Average Mood",
    color: "bg-wellness-secondary/10 text-wellness-secondary",
  },
  {
    value: "6",
    label: "Check-ins",
    color: "bg-wellness-accent/10 text-wellness-accent",
  },
  {
    value: "78%",
    label: "Sleep Quality",
    color: "bg-wellness-warning/10 text-wellness-warning",
  },
  {
    value: "5.5h",
    label: "Study Balance",
    color: "bg-wellness-primary/10 text-wellness-primary",
  },
];

export function WeeklySummary() {
  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Weekly Wellness Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className={`${metric.color} p-4 rounded-lg text-center transition-smooth hover:scale-105`}>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}