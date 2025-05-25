
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TrafficMap from './TrafficMap';
import PredictionCharts from './PredictionCharts';
import SocialMediaFeed from './SocialMediaFeed';
import CameraGrid from './CameraGrid';
import MetricsOverview from './MetricsOverview';
import { Activity, Camera, MessageSquare, MapPin, TrendingUp, AlertTriangle } from 'lucide-react';

const TrafficDashboard = () => {
  const [activeAlerts, setActiveAlerts] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Traffic Intelligence Hub
            </h1>
            <p className="text-slate-400 mt-2">Real-time traffic analysis and predictive insights</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-white">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-slate-400">
              {currentTime.toLocaleDateString()}
            </div>
          </div>
        </div>
        
        {/* Alert Banner */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-orange-400" size={24} />
            <div>
              <h3 className="text-orange-400 font-semibold">Active Traffic Alerts</h3>
              <p className="text-slate-300">
                {activeAlerts} high congestion zones detected. Major delays expected on Highway 101 and Downtown area.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Overview */}
      <MetricsOverview />

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-slate-700">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Activity size={16} />
            Overview
          </TabsTrigger>
          <TabsTrigger value="predictions" className="flex items-center gap-2">
            <TrendingUp size={16} />
            Predictions
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <MessageSquare size={16} />
            Social Feed
          </TabsTrigger>
          <TabsTrigger value="cameras" className="flex items-center gap-2">
            <Camera size={16} />
            Cameras
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <MapPin size={16} />
            Live Map
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrafficMap />
            <PredictionCharts />
          </div>
        </TabsContent>

        <TabsContent value="predictions">
          <PredictionCharts fullSize />
        </TabsContent>

        <TabsContent value="social">
          <SocialMediaFeed />
        </TabsContent>

        <TabsContent value="cameras">
          <CameraGrid />
        </TabsContent>

        <TabsContent value="map">
          <TrafficMap fullSize />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrafficDashboard;
