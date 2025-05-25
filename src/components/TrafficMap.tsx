
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';

interface TrafficMapProps {
  fullSize?: boolean;
}

const TrafficMap: React.FC<TrafficMapProps> = ({ fullSize = false }) => {
  const trafficPoints = [
    { id: 1, name: 'Highway 101 North', status: 'heavy', delay: '15 min', x: 25, y: 30 },
    { id: 2, name: 'Downtown Core', status: 'moderate', delay: '8 min', x: 45, y: 55 },
    { id: 3, name: 'Airport Connector', status: 'light', delay: '3 min', x: 70, y: 75 },
    { id: 4, name: 'Bridge District', status: 'heavy', delay: '22 min', x: 60, y: 40 },
    { id: 5, name: 'Tech Park', status: 'moderate', delay: '12 min', x: 80, y: 20 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'heavy': return 'bg-red-500';
      case 'moderate': return 'bg-yellow-500';
      case 'light': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className={`bg-slate-800/50 border-slate-700 ${fullSize ? 'col-span-full' : ''}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <MapPin className="text-blue-400" size={24} />
          Live Traffic Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg p-6 h-96 overflow-hidden">
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-10 grid-rows-10 h-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border border-slate-600"></div>
              ))}
            </div>
          </div>

          {/* Roads */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M50 50 Q200 100 350 50"
              stroke="rgb(71, 85, 105)"
              strokeWidth="4"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M100 20 L100 350"
              stroke="rgb(71, 85, 105)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M20 200 L350 200"
              stroke="rgb(71, 85, 105)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
          </svg>

          {/* Traffic Points */}
          {trafficPoints.map((point) => (
            <div
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <div className={`w-4 h-4 rounded-full ${getStatusColor(point.status)} shadow-lg animate-pulse`}></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white p-2 rounded-lg text-xs whitespace-nowrap z-10 border border-slate-600">
                <div className="font-semibold">{point.name}</div>
                <div className="text-slate-300">Delay: {point.delay}</div>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur rounded-lg p-3">
            <h4 className="text-white text-sm font-semibold mb-2">Traffic Status</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-300">Light</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-slate-300">Moderate</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-slate-300">Heavy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Incidents */}
        <div className="mt-4 space-y-2">
          <h4 className="text-white font-semibold flex items-center gap-2">
            <AlertCircle className="text-orange-400" size={16} />
            Active Incidents
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-700/50 rounded p-2">
              <span className="text-slate-300 text-sm">Vehicle breakdown - Highway 101</span>
              <Badge variant="destructive" className="text-xs">High Impact</Badge>
            </div>
            <div className="flex items-center justify-between bg-slate-700/50 rounded p-2">
              <span className="text-slate-300 text-sm">Construction work - Main St</span>
              <Badge variant="secondary" className="text-xs">Low Impact</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficMap;
