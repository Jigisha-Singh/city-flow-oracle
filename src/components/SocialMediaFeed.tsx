import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, Share, AlertCircle, TrendingUp } from 'lucide-react';

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      platform: 'Twitter',
      user: '@citycommuter',
      time: '2 mins ago',
      content: 'Massive jam on Highway 101 northbound. Avoid if possible! #traffic',
      sentiment: 'negative',
      engagement: { likes: 45, shares: 12, comments: 8 },
      verified: true,
      impact: 'high'
    },
    {
      id: 2,
      platform: 'Instagram',
      user: '@dailydriver',
      time: '5 mins ago',
      content: 'Construction on Main St causing delays. Alternative routes flowing well.',
      sentiment: 'neutral',
      engagement: { likes: 23, shares: 5, comments: 3 },
      verified: false,
      impact: 'medium'
    },
    {
      id: 3,
      platform: 'Facebook',
      user: 'Traffic Updates SF',
      time: '8 mins ago',
      content: 'Good news! Bridge district traffic is flowing smoothly this morning.',
      sentiment: 'positive',
      engagement: { likes: 67, shares: 15, comments: 12 },
      verified: true,
      impact: 'low'
    },
    {
      id: 4,
      platform: 'Twitter',
      user: '@rushhouralert',
      time: '12 mins ago',
      content: 'Accident cleared on I-280. Traffic starting to move again.',
      sentiment: 'positive',
      engagement: { likes: 34, shares: 8, comments: 5 },
      verified: true,
      impact: 'medium'
    },
    {
      id: 5,
      platform: 'Reddit',
      user: 'u/trafficwatcher',
      time: '15 mins ago',
      content: 'PSA: Avoid downtown core until 10 AM. Multiple road closures for event setup.',
      sentiment: 'neutral',
      engagement: { likes: 89, shares: 23, comments: 18 },
      verified: false,
      impact: 'high'
    }
  ]);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400 bg-green-400/20';
      case 'negative': return 'text-red-400 bg-red-400/20';
      case 'neutral': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter': return '🐦';
      case 'Instagram': return '📷';
      case 'Facebook': return '👥';
      case 'Reddit': return '🤖';
      default: return '💬';
    }
  };

  const trendingTopics = [
    { topic: '#Highway101', mentions: 234, trend: 'up' },
    { topic: '#TrafficJam', mentions: 189, trend: 'up' },
    { topic: '#CommuterAlert', mentions: 156, trend: 'down' },
    { topic: '#RoadClosure', mentions: 134, trend: 'up' },
    { topic: '#AlternativeRoute', mentions: 98, trend: 'stable' }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="text-purple-400" size={24} />
            Trending Traffic Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-blue-400 font-semibold text-sm">{topic.topic}</span>
                  <span className={`text-xs ${
                    topic.trend === 'up' ? 'text-green-400' : 
                    topic.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {topic.trend === 'up' ? '↗' : topic.trend === 'down' ? '↘' : '→'}
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{topic.mentions} mentions</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media Feed */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <MessageSquare className="text-blue-400" size={24} />
            Live Social Media Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getPlatformIcon(post.platform)}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{post.user}</span>
                        {post.verified && <span className="text-blue-400">✓</span>}
                      </div>
                      <span className="text-slate-400 text-sm">{post.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getSentimentColor(post.sentiment)}>
                      {post.sentiment}
                    </Badge>
                    <Badge className={getImpactColor(post.impact)}>
                      {post.impact}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-3">{post.content}</p>
                
                <div className="flex items-center gap-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={14} />
                    <span>{post.engagement.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share size={14} />
                    <span>{post.engagement.shares}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare size={14} />
                    <span>{post.engagement.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sentiment Analysis Summary */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <AlertCircle className="text-orange-400" size={24} />
            Sentiment Analysis Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">32%</div>
              <div className="text-slate-400">Negative</div>
              <div className="text-xs text-slate-500">Traffic complaints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">45%</div>
              <div className="text-slate-400">Neutral</div>
              <div className="text-xs text-slate-500">General updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">23%</div>
              <div className="text-slate-400">Positive</div>
              <div className="text-xs text-slate-500">Clear roads</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaFeed;
