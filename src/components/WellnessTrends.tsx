import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { day: "Mon", mood: 3.2 },
  { day: "Tue", mood: 4.1 },
  { day: "Wed", mood: 3.8 },
  { day: "Thu", mood: 4.5 },
  { day: "Fri", mood: 4.2 },
  { day: "Sat", mood: 4.7 },
  { day: "Sun", mood: 4.0 },
];

export function WellnessTrends() {
  return (
    <Card className="shadow-card-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Wellness Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                domain={[1, 5]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--wellness-primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--wellness-primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}