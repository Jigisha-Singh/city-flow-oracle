
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Play, Pause, Maximize, Settings, AlertTriangle } from 'lucide-react';

const CameraGrid = () => {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  const cameras = [
    {
      id: 1,
      name: 'Highway 101 - Mile 23',
      location: 'North Bound',
      status: 'active',
      quality: 'HD',
      lastUpdate: '30s ago',
      incidents: 1,
      vehicleCount: 45,
      avgSpeed: 35
    },
    {
      id: 2,
      name: 'Downtown Intersection',
      location: 'Main St & 1st Ave',
      status: 'active',
      quality: '4K',
      lastUpdate: '15s ago',
      incidents: 0,
      vehicleCount: 28,
      avgSpeed: 15
    },
    {
      id: 3,
      name: 'Bridge District',
      location: 'Golden Gate Access',
      status: 'maintenance',
      quality: 'HD',
      lastUpdate: '2m ago',
      incidents: 0,
      vehicleCount: 0,
      avgSpeed: 0
    },
    {
      id: 4,
      name: 'Airport Connector',
      location: 'Terminal 1 Exit',
      status: 'active',
      quality: 'HD',
      lastUpdate: '45s ago',
      incidents: 0,
      vehicleCount: 67,
      avgSpeed: 42
    },
    {
      id: 5,
      name: 'Tech Park Entrance',
      location: 'Innovation Blvd',
      status: 'active',
      quality: '4K',
      lastUpdate: '20s ago',
      incidents: 2,
      vehicleCount: 33,
      avgSpeed: 25
    },
    {
      id: 6,
      name: 'Residential District',
      location: 'Oak St Corridor',
      status: 'active',
      quality: 'HD',
      lastUpdate: '1m ago',
      incidents: 0,
      vehicleCount: 12,
      avgSpeed: 30
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'maintenance': return 'text-yellow-400 bg-yellow-400/20';
      case 'offline': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCongestionLevel = (speed: number) => {
    if (speed > 40) return { level: 'Light', color: 'text-green-400' };
    if (speed > 20) return { level: 'Moderate', color: 'text-yellow-400' };
    if (speed > 0) return { level: 'Heavy', color: 'text-red-400' };
    return { level: 'Stopped', color: 'text-red-600' };
  };

  return (
    <div className="space-y-6">
      {/* Camera Control Panel */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Camera className="text-blue-400" size={24} />
            Traffic Camera Network
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
              <Play size={16} className="mr-2" />
              Start All
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
              <Pause size={16} className="mr-2" />
              Pause All
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
              <Settings size={16} className="mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
              <Maximize size={16} className="mr-2" />
              Full Screen
            </Button>
          </div>

          {/* Camera Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameras.map((camera) => {
              const congestion = getCongestionLevel(camera.avgSpeed);
              return (
                <div
                  key={camera.id}
                  className={`bg-slate-700/50 rounded-lg p-4 border cursor-pointer transition-all hover:bg-slate-700/70 ${
                    selectedCamera === camera.id ? 'border-blue-400' : 'border-slate-600'
                  }`}
                  onClick={() => setSelectedCamera(camera.id)}
                >
                  {/* Camera Preview */}
                  <div className="relative bg-slate-900 rounded-lg mb-3 h-32 flex items-center justify-center overflow-hidden">
                    {camera.status === 'active' ? (
                      <div className="relative w-full h-full">
                        {/* Simulated traffic feed */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-slate-400 text-xs">Live Feed</div>
                        </div>
                        {/* Moving vehicles simulation */}
                        <div className="absolute bottom-2 left-2 w-2 h-1 bg-red-400 rounded animate-pulse"></div>
                        <div className="absolute bottom-4 right-3 w-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                        <div className="absolute top-3 left-1/2 w-2 h-1 bg-green-400 rounded animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="text-slate-500">
                        <Camera size={32} />
                        <div className="text-xs mt-2">Offline</div>
                      </div>
                    )}
                    
                    {/* Status indicators */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <Badge className={getStatusColor(camera.status)} variant="outline">
                        {camera.status}
                      </Badge>
                      {camera.incidents > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          <AlertTriangle size={10} className="mr-1" />
                          {camera.incidents}
                        </Badge>
                      )}
                    </div>

                    {/* Quality indicator */}
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {camera.quality}
                      </Badge>
                    </div>
                  </div>

                  {/* Camera Info */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{camera.name}</h4>
                      <p className="text-slate-400 text-xs">{camera.location}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400">Vehicles:</span>
                        <span className="text-white ml-1">{camera.vehicleCount}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Speed:</span>
                        <span className="text-white ml-1">{camera.avgSpeed} mph</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${congestion.color}`}>
                        {congestion.level}
                      </span>
                      <span className="text-slate-400 text-xs">{camera.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Analysis */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <AlertTriangle className="text-orange-400" size={24} />
            AI-Powered Camera Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Vehicle Detection</h4>
              <div className="text-2xl font-bold text-blue-400 mb-1">185</div>
              <div className="text-slate-400 text-sm">Active vehicles tracked</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Incident Detection</h4>
              <div className="text-2xl font-bold text-red-400 mb-1">3</div>
              <div className="text-slate-400 text-sm">Potential incidents identified</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Pattern Recognition</h4>
              <div className="text-2xl font-bold text-green-400 mb-1">94%</div>
              <div className="text-slate-400 text-sm">Accuracy rate</div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-white font-semibold">Recent AI Alerts</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-700/50 rounded p-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Stopped vehicle detected - Highway 101</span>
                </div>
                <span className="text-slate-400 text-sm">2 min ago</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/50 rounded p-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-slate-300">Unusual congestion pattern - Tech Park</span>
                </div>
                <span className="text-slate-400 text-sm">5 min ago</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/50 rounded p-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Traffic flow normalized - Downtown</span>
                </div>
                <span className="text-slate-400 text-sm">8 min ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CameraGrid;
