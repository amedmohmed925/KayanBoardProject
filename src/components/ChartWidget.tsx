import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps
} from 'recharts';
import { TrendingUp, TrendingDown, Minus, Info, Users, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DashboardWidget, cn } from '@/lib/index';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ChartWidgetProps {
  widget: DashboardWidget;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-xl">
        <p className="text-xs font-semibold text-slate-500 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm font-bold" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const WidgetHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between mb-1">
    <h4 className="text-slate-800 font-bold text-lg">{title}</h4>
    <div className="p-1.5 bg-slate-50 rounded-lg">
      <Info className="w-3.5 h-3.5 text-slate-400" />
    </div>
  </div>
);

export function ChartWidget({ widget }: ChartWidgetProps) {
  if (!widget) {
    return (
      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center justify-center h-[180px]">
        <p className="text-slate-400 text-sm">خطأ في تحميل الرسم البياني</p>
      </div>
    );
  }

  const renderKPI = () => {
    const isUp = widget.trend === 'up';
    const isDown = widget.trend === 'down';

    return (
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-slate-50 rounded-lg">
            <Info className="w-4 h-4 text-slate-400" />
          </div>
          {widget.change && (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                isUp ? "text-emerald-600 bg-emerald-50" : isDown ? "text-rose-600 bg-rose-50" : "text-slate-600 bg-slate-50"
              )}
            >
              {isUp ? <TrendingUp className="w-3 h-3" /> : isDown ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              <span dir="ltr">{widget.change}</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <h4 className="text-slate-500 text-sm font-medium">{widget.title}</h4>
          <p className="text-3xl font-bold mt-1 text-slate-900">{widget.value}</p>
          {widget.description && <p className="text-xs text-slate-400 mt-2">{widget.description}</p>}
        </div>
      </div>
    );
  };

  const renderLineChart = () => (
    <div className="flex-1 w-full mt-4 min-h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={widget.data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d946ef" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#colorValue)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const renderBarChart = () => (
    <div className="flex-1 w-full mt-4 min-h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={widget.data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
          <Bar
            dataKey="value"
            fill="#d946ef"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          >
            {widget.data?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? '#d946ef' : '#06b6d4'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderPieChart = () => {
    const COLORS = ['#d946ef', '#06b6d4', '#8b5cf6', '#3b82f6'];
    return (
      <div className="flex-1 w-full mt-4 min-h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={widget.data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationDuration={1500}
            >
              {widget.data?.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const renderActivity = () => (
    <div className="mt-4 space-y-4">
      {widget.data?.map((item: any, index: number) => (
        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d946ef] to-[#06b6d4] flex items-center justify-center text-white text-xs font-bold">
              {item.name?.charAt(0) || 'A'}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.name}</p>
              <p className="text-xs text-slate-500">{item.time}</p>
            </div>
          </div>
          <div className="text-xs font-bold text-slate-700">{item.value}</div>
        </div>
      ))}
    </div>
  );

  const renderTable = () => (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow>
            {widget.config?.headers?.map((header: string, i: number) => (
              <TableHead key={i} className="text-right font-bold text-slate-700">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {widget.data?.map((row: any, i: number) => (
            <TableRow key={i}>
              {Object.values(row).map((val: any, j: number) => (
                <TableCell key={j} className="text-right text-slate-600">{val}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderProgress = () => (
    <div className="mt-6 space-y-6">
      {widget.data?.map((item: any, index: number) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-sm font-semibold text-slate-700">{item.name}</span>
            <span className="text-xs font-bold text-primary">{item.value}%</span>
          </div>
          <Progress value={item.value} className="h-2" />
        </div>
      ))}
    </div>
  );

  const renderUsers = () => (
    <div className="mt-4 grid grid-cols-1 gap-4">
      {widget.data?.map((user: any, index: number) => (
        <div key={index} className="flex items-center justify-between p-3 border border-slate-50 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-500">{user.role}</p>
            </div>
          </div>
          <div className={cn(
            "w-2 h-2 rounded-full",
            user.status === 'online' ? "bg-emerald-500" : "bg-slate-300"
          )} />
        </div>
      ))}
    </div>
  );

  const contentMap: Record<string, () => React.ReactNode> = {
    kpi: renderKPI,
    line: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        {renderLineChart()}
      </div>
    ),
    bar: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        {renderBarChart()}
      </div>
    ),
    pie: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        {renderPieChart()}
      </div>
    ),
    activity: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        <div className="flex-1 overflow-y-auto pr-1">
          {renderActivity()}
        </div>
      </div>
    ),
    table: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        <div className="flex-1 overflow-hidden">
          {renderTable()}
        </div>
      </div>
    ),
    progress: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        <div className="flex-1 overflow-y-auto">
          {renderProgress()}
        </div>
      </div>
    ),
    users: () => (
      <div className="h-full flex flex-col">
        <WidgetHeader title={widget.title} />
        <div className="flex-1 overflow-y-auto">
          {renderUsers()}
        </div>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col",
        widget.type === 'kpi' ? "h-[180px]" : "h-[420px]"
      )}
    >
      {contentMap[widget.type] ? contentMap[widget.type]() : null}
    </motion.div>
  );
}
