
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, Clock, Users } from 'lucide-react';

interface PredictionChartsProps {
  fullSize?: boolean;
}

const PredictionCharts: React.FC<PredictionChartsProps> = ({ fullSize = false }) => {
  const trafficPredictionData = [
    { time: '6:00', current: 45, predicted: 42, historical: 48 },
    { time: '7:00', current: 62, predicted: 68, historical: 65 },
    { time: '8:00', current: 85, predicted: 88, historical: 82 },
    { time: '9:00', current: 78, predicted: 75, historical: 80 },
    { time: '10:00', current: 55, predicted: 58, historical: 52 },
    { time: '11:00', current: 48, predicted: 45, historical: 50 },
    { time: '12:00', current: 65, predicted: 70, historical: 68 },
    { time: '13:00', current: 72, predicted: 75, historical: 70 },
    { time: '14:00', current: 58, predicted: 55, historical: 60 },
    { time: '15:00', current: 45, predicted: 48, historical: 45 },
    { time: '16:00', current: 68, predicted: 72, historical: 70 },
    { time: '17:00', current: 85, predicted: 90, historical: 88 },
    { time: '18:00', current: 92, predicted: 95, historical: 90 },
    { time: '19:00', current: 75, predicted: 78, historical: 75 },
    { time: '20:00', current: 55, predicted: 52, historical: 58 }
  ];

  const socialSentimentData = [
    { hour: '6:00', negative: 12, neutral: 45, positive: 23 },
    { hour: '7:00', negative: 28, neutral: 52, positive: 15 },
    { hour: '8:00', negative: 45, neutral: 38, positive: 12 },
    { hour: '9:00', negative: 35, neutral: 42, positive: 18 },
    { hour: '10:00', negative: 20, neutral: 58, positive: 25 },
    { hour: '11:00', negative: 15, neutral: 62, positive: 28 }
  ];

  const routeAnalysisData = [
    { route: 'Highway 101', efficiency: 65, volume: 1200, incidents: 3 },
    { route: 'I-280', efficiency: 78, volume: 950, incidents: 1 },
    { route: 'Downtown', efficiency: 45, volume: 800, incidents: 5 },
    { route: 'Airport Rd', efficiency: 82, volume: 600, incidents: 1 },
    { route: 'Tech Blvd', efficiency: 70, volume: 1100, incidents: 2 }
  ];

  return (
    <div className={`space-y-6 ${fullSize ? 'col-span-full' : ''}`}>
      {/* Traffic Prediction Chart */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="text-green-400" size={24} />
            Traffic Flow Prediction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficPredictionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Area
                type="monotone"
                dataKey="historical"
                stackId="1"
                stroke="#6B7280"
                fill="#6B7280"
                fillOpacity={0.3}
                name="Historical"
              />
              <Area
                type="monotone"
                dataKey="current"
                stackId="2"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.4}
                name="Current"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                name="Predicted"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className={`grid ${fullSize ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-6`}>
        {/* Social Media Sentiment */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Users className="text-purple-400" size={24} />
              Social Sentiment Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={socialSentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="negative" stackId="a" fill="#EF4444" name="Negative" />
                <Bar dataKey="neutral" stackId="a" fill="#6B7280" name="Neutral" />
                <Bar dataKey="positive" stackId="a" fill="#10B981" name="Positive" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Route Efficiency */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Clock className="text-yellow-400" size={24} />
              Route Efficiency Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {routeAnalysisData.map((route, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{route.route}</span>
                    <span className="text-white font-bold">{route.efficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        route.efficiency >= 70 ? 'bg-green-400' :
                        route.efficiency >= 50 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${route.efficiency}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Volume: {route.volume}</span>
                    <span>Incidents: {route.incidents}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictionCharts;
