import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faClock,
  faShield,
  faChartLine,
  faPlus,
  faTrash,
  faServer,
  faMobile,
  faNetworkWired,
  faGear,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { IoTDevice, TrainingSession, TrainingRound, DashboardStats } from '@/types';

const Dashboard: React.FC = () => {
  const [devices, setDevices] = useState<IoTDevice[]>([
    {
      id: 'dev-001',
      name: 'Factory Sensor 01',
      type: 'sensor',
      status: 'training',
      lastSeen: new Date(Date.now() - 1000 * 30),
      modelVersion: 12,
      privacyBudgetUsed: 4.5,
    },
    {
      id: 'dev-002',
      name: 'Edge Gateway NYC',
      type: 'edge_device',
      status: 'online',
      lastSeen: new Date(Date.now() - 1000 * 60),
      modelVersion: 12,
      privacyBudgetUsed: 3.2,
    },
    {
      id: 'dev-003',
      name: 'Mobile Device iOS',
      type: 'mobile',
      status: 'online',
      lastSeen: new Date(Date.now() - 1000 * 120),
      modelVersion: 11,
      privacyBudgetUsed: 2.1,
    },
    {
      id: 'dev-004',
      name: 'Field Device 04',
      type: 'sensor',
      status: 'offline',
      lastSeen: new Date(Date.now() - 1000 * 3600),
      modelVersion: 10,
      privacyBudgetUsed: 1.8,
    },
    {
      id: 'dev-005',
      name: 'Edge Gateway LA',
      type: 'gateway',
      status: 'training',
      lastSeen: new Date(Date.now() - 1000 * 45),
      modelVersion: 12,
      privacyBudgetUsed: 5.0,
    },
    {
      id: 'dev-006',
      name: 'Smart Meter 06',
      type: 'sensor',
      status: 'online',
      lastSeen: new Date(Date.now() - 1000 * 90),
      modelVersion: 12,
      privacyBudgetUsed: 2.7,
    },
  ]);

  const trainingSession: TrainingSession = {
    id: 'train-001',
    name: 'Energy Consumption Model',
    currentRound: 7,
    totalRounds: 10,
    startDate: new Date(Date.now() - 1000 * 60 * 60 * 3),
    status: 'active',
    accuracy: 0.8742,
  };

  const trainingHistory: TrainingRound[] = [
    { round: 1, accuracy: 0.6200, privacyLoss: 0.2 },
    { round: 2, accuracy: 0.6850, privacyLoss: 0.4 },
    { round: 3, accuracy: 0.7150, privacyLoss: 0.65 },
    { round: 4, accuracy: 0.7520, privacyLoss: 0.92 },
    { round: 5, accuracy: 0.7920, privacyLoss: 1.25 },
    { round: 6, accuracy: 0.8320, privacyLoss: 1.58 },
    { round: 7, accuracy: 0.8742, privacyLoss: 1.92 },
  ];

  const stats: DashboardStats = {
    activeDevices: devices.filter(d => d.status === 'online' || d.status === 'training').length,
    totalDevices: devices.length,
    currentRound: trainingSession.currentRound,
    totalRounds: trainingSession.totalRounds,
    privacyBudgetRemaining: 8.08,
    privacyBudgetLimit: 10.0,
  };

  const privacyPercent = (stats.privacyBudgetLimit - stats.privacyBudgetRemaining) / stats.privacyBudgetLimit * 100;
  const roundPercent = (trainingSession.currentRound / trainingSession.totalRounds) * 100;

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'sensor':
        return faSensor;
      case 'mobile':
        return faMobile;
      case 'gateway':
        return faNetworkWired;
      case 'edge_device':
        return faServer;
      default:
        return faServer;
    }
  };

  const faSensor = faChartLine;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-600 dark:text-green-400';
      case 'offline':
        return 'text-red-600 dark:text-red-400';
      case 'training':
        return 'text-blue-600 dark:text-blue-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    if (diffSecs < 60) return 'Just now';
    const diffMins = Math.floor(diffSecs / 60);
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  const deleteDevice = (id: string) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your federated learning deployment and manage your device fleet
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Active Devices</p>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stats.activeDevices}/{stats.totalDevices}
            </div>
            <p className="text-green-600 dark:text-green-400 text-sm">
              <FontAwesomeIcon icon={faCircle} className="w-2 h-2 mr-1" />
              {Math.round(stats.activeDevices / stats.totalDevices * 100)}% online
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Training Round</p>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {trainingSession.currentRound}/{trainingSession.totalRounds}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-br h-2 rounded-full transition-all"
                style={{ width: `${roundPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Model Accuracy</p>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {(trainingSession.accuracy * 100).toFixed(2)}%
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">Round {trainingSession.currentRound}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Privacy Budget (ε)</p>
              <FontAwesomeIcon icon={faShield} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {stats.privacyBudgetRemaining.toFixed(2)}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  privacyPercent > 80 ? 'bg-red-600 dark:bg-red-500' :
                  privacyPercent > 50 ? 'bg-yellow-600 dark:bg-yellow-500' :
                  'bg-green-600 dark:bg-green-500'
                }`}
                style={{ width: `${privacyPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Model Performance Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Model Performance Over Training
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="round" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#4f46e5"
                  dot={{ fill: '#4f46e5', r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                  name="Accuracy"
                />
                <Line
                  type="monotone"
                  dataKey="privacyLoss"
                  stroke="#f59e0b"
                  dot={{ fill: '#f59e0b', r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                  name="Privacy Loss (ε)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Device Status Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Device Status
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Online', value: devices.filter(d => d.status === 'online').length },
                    { name: 'Training', value: devices.filter(d => d.status === 'training').length },
                    { name: 'Offline', value: devices.filter(d => d.status === 'offline').length },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#3b82f6" />
                  <Cell fill="#ef4444" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Online: {devices.filter(d => d.status === 'online').length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Training: {devices.filter(d => d.status === 'training').length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Offline: {devices.filter(d => d.status === 'offline').length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Device Fleet */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Device Fleet ({devices.length})
            </h2>
            <button className="px-4 py-2 rounded-lg bg-gradient-br text-white hover:opacity-90 font-medium text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faPlus} />
              Add Device
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {devices.map((device) => (
              <div
                key={device.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:shadow-lg/20 transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <FontAwesomeIcon icon={getDeviceIcon(device.type)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white truncate">
                        {device.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {device.type.replace('_', ' ')}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteDevice(device.id)}
                    className="p-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <FontAwesomeIcon icon={faTrash} size="sm" />
                  </button>
                </div>

                <div className="space-y-2 text-sm mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Status</span>
                    <span className={`flex items-center gap-1 font-medium capitalize ${getStatusColor(device.status)}`}>
                      <FontAwesomeIcon icon={faCircle} size="xs" />
                      {device.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Model v{device.modelVersion}</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      <FontAwesomeIcon icon={faClock} className="mr-1" size="sm" />
                      {formatTime(device.lastSeen)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Privacy Budget</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      ε {device.privacyBudgetUsed.toFixed(2)}/10
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                  <div
                    className="bg-gradient-br h-2 rounded-full"
                    style={{ width: `${(device.privacyBudgetUsed / 10) * 100}%` }}
                  ></div>
                </div>

                <button className="w-full py-2 rounded-lg border border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-sm font-medium">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
