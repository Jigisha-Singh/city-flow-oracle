
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Clock, Users, MapPin, AlertTriangle } from 'lucide-react';

const MetricsOverview = () => {
  const metrics = [
    {
      title: 'Average Speed',
      value: '42',
      unit: 'mph',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Congestion Level',
      value: '73',
      unit: '%',
      change: '-8.1%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-red-400'
    },
    {
      title: 'Average Delay',
      value: '12',
      unit: 'min',
      change: '+2.3%',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-400'
    },
    {
      title: 'Active Vehicles',
      value: '15.2K',
      unit: '',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Monitored Routes',
      value: '127',
      unit: '',
      change: '0%',
      trend: 'neutral',
      icon: MapPin,
      color: 'text-teal-400'
    },
    {
      title: 'Active Incidents',
      value: '8',
      unit: '',
      change: '-25%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`${metric.color}`} size={20} />
                <Badge 
                  variant={metric.trend === 'up' ? 'default' : metric.trend === 'down' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400">{metric.title}</p>
                <p className="text-2xl font-bold text-white">
                  {metric.value}
                  <span className="text-sm text-slate-400 ml-1">{metric.unit}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsOverview;
