import { PricingPlan, DashboardWidget, ARABIC_CONTENT, DashboardTemplate, UserProfile } from '@/lib/index';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'الباقة الأساسية',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'مثالية للأفراد والمشاريع الناشئة الصغيرة.',
    features: [
      'لوحة تحكم واحدة',
      '5 عناصر واجهة مستخدم',
      'تحديثات يومية للبيانات',
      'دعم عبر البريد الإلكتروني',
      'ذكاء اصطناعي أساسي'
    ],
    buttonText: 'ابدأ مجاناً'
  },
  {
    id: 'professional',
    name: 'الباقة الاحترافية',
    priceMonthly: 99,
    priceYearly: 79,
    description: 'للشركات المتنامية التي تحتاج لتقارير أعمق.',
    features: [
      'لوحات تحكم غير محدودة',
      'عناصر واجهة متقدمة',
      'تحديثات فورية للبيانات',
      'دعم فني ذو أولوية',
      'توليد ذكي متقدم (Gemini 1.5)',
      'تصدير التقارير بصيغ متعددة'
    ],
    isFeatured: true,
    buttonText: 'اشترك الآن'
  },
  {
    id: 'advanced',
    name: 'باقة المؤسسات',
    priceMonthly: 299,
    priceYearly: 239,
    description: 'حلول مخصصة للمؤسسات الكبرى والفرق الضخمة.',
    features: [
      'كل مميزات الباقة الاحترافية',
      'أمان بمستوى البنوك',
      'مدير حساب مخصص',
      'تكامل مخصص عبر API',
      'تدريب مباشر للفريق',
      'سعة تخزين غير محدودة'
    ],
    buttonText: 'تواصل معنا'
  }
];

export const FEATURES_DATA = [
  {
    title: ARABIC_CONTENT.features.items[0].title,
    description: ARABIC_CONTENT.features.items[0].description,
    icon: 'Layout',
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    title: ARABIC_CONTENT.features.items[1].title,
    description: ARABIC_CONTENT.features.items[1].description,
    icon: 'BarChart3',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: ARABIC_CONTENT.features.items[2].title,
    description: ARABIC_CONTENT.features.items[2].description,
    icon: 'Zap',
    color: 'from-amber-400 to-orange-500'
  },
  {
    title: ARABIC_CONTENT.features.items[3].title,
    description: ARABIC_CONTENT.features.items[3].description,
    icon: 'Settings',
    color: 'from-emerald-400 to-teal-500'
  }
];

export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'أحمد القحطاني',
    role: 'المؤسس التنفيذي',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    name: 'سارة المنصور',
    role: 'رئيسة قسم التصميم',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '3',
    name: 'خالد العمري',
    role: 'كبير مهندسي الذكاء الاصطناعي',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '4',
    name: 'ليلى الحربي',
    role: 'مديرة تطوير الأعمال',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const INITIAL_WIDGETS: DashboardWidget[] = [
  {
    id: 'kpi-1',
    type: 'kpi',
    title: 'إجمالي المبيعات',
    value: 'EGP 124,500',
    trend: 'up',
    change: '+12.5%',
    description: 'مقارنة بالشهر الماضي'
  },
  {
    id: 'kpi-2',
    type: 'kpi',
    title: 'المستخدمون النشطون',
    value: '1,284',
    trend: 'up',
    change: '+5.2%',
    description: 'في آخر 24 ساعة'
  },
  {
    id: 'kpi-3',
    type: 'kpi',
    title: 'معدل الارتداد',
    value: '24.3%',
    trend: 'down',
    change: '-2.1%',
    description: 'تحسن ملحوظ'
  },
  {
    id: 'kpi-4',
    type: 'kpi',
    title: 'متوسط قيمة الطلب',
    value: 'EGP 450',
    trend: 'up',
    change: '+8.4%',
    description: 'زيادة في سلة التسوق'
  },
  {
    id: 'chart-line-1',
    type: 'line',
    title: 'نمو الزيارات الأسبوعي',
    data: [
      { name: 'السبت', value: 400 },
      { name: 'الأحد', value: 300 },
      { name: 'الاثنين', value: 600 },
      { name: 'الثلاثاء', value: 800 },
      { name: 'الأربعاء', value: 500 },
      { name: 'الخميس', value: 900 },
      { name: 'الجمعة', value: 1100 }
    ],
    config: { colors: ['#d946ef'], showGrid: true }
  },
  {
    id: 'table-1',
    type: 'table',
    title: 'آخر العمليات الناجحة',
    data: [
      { id: '#1234', customer: 'عبد الله محمد', amount: 'EGP 1,200', date: 'منذ ساعتين' },
      { id: '#1235', customer: 'نورة السبيعي', amount: 'EGP 850', date: 'منذ 3 ساعات' },
      { id: '#1236', customer: 'فهد المطيري', amount: 'EGP 2,100', date: 'منذ 5 ساعات' },
      { id: '#1237', customer: 'ريم الشهري', amount: 'EGP 450', date: 'منذ 6 ساعات' },
      { id: '#1238', customer: 'سعد الغامدي', amount: 'EGP 3,200', date: 'منذ 8 ساعات' }
    ],
    config: { headers: ['رقم الطلب', 'العميل', 'المبلغ', 'التوقيت'] }
  },
  {
    id: 'chart-bar-1',
    type: 'bar',
    title: 'توزيع المبيعات حسب المنطقة',
    data: [
      { name: 'الرياض', value: 4500 },
      { name: 'جدة', value: 3200 },
      { name: 'الدمام', value: 2800 },
      { name: 'مكة', value: 1500 },
      { name: 'نيوم', value: 900 }
    ],
    config: { colors: ['#06b6d4'], showGrid: false }
  },
  {
    id: 'chart-pie-1',
    type: 'pie',
    title: 'مصادر الزيارات',
    data: [
      { name: 'مباشر', value: 400 },
      { name: 'البحث', value: 300 },
      { name: 'وشبكات التواصل', value: 300 },
      { name: 'الإعلانات', value: 200 }
    ]
  },
  {
    id: 'progress-1',
    type: 'progress',
    title: 'أهداف الربع الحالي',
    data: [
      { name: 'المبيعات المستهدفة', value: 75 },
      { name: 'تحسين تجربة المستخدم', value: 90 },
      { name: 'التوسع في المناطق الجديدة', value: 45 },
      { name: 'نمو قاعدة العملاء', value: 60 }
    ]
  },
  {
    id: 'users-1',
    type: 'users',
    title: 'فريق العمل النشط',
    data: [
      { name: 'أحمد القحطاني', role: 'مدير النظام', status: 'online', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
      { name: 'سارة المنصور', role: 'مصممة فنية', status: 'online', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
      { name: 'خالد العمري', role: 'مهندس بيانات', status: 'offline', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' }
    ]
  },
  {
    id: 'activity-1',
    type: 'activity',
    title: 'النشاطات الأخيرة',
    data: [
      { name: 'تسجيل دخول جديد', time: '10:15 ص', value: 'الرياض' },
      { name: 'تحديث الملف الشخصي', time: '09:30 ص', value: 'سارة' },
      { name: 'طلب استرجاع', time: 'أمس', value: 'جدة' },
      { name: 'تغيير كلمة المرور', time: 'أمس', value: 'فهد' }
    ]
  },
  {
    id: 'kpi-5',
    type: 'kpi',
    title: 'معدل رضا العملاء',
    value: '4.8/5',
    trend: 'up',
    change: '+0.2',
    description: 'بناءً على 500 تقييم'
  },
  {
    id: 'chart-line-2',
    type: 'line',
    title: 'تحليل الإيرادات المتوقعة',
    data: [
      { name: 'يناير', value: 50000 },
      { name: 'فبراير', value: 65000 },
      { name: 'مارس', value: 80000 },
      { name: 'أبريل', value: 95000 }
    ],
    config: { colors: ['#06b6d4'], showGrid: true }
  }
];

export const DASHBOARD_TEMPLATES: DashboardTemplate[] = [
  {
    id: 'sales',
    name: 'لوحة المبيعات',
    description: 'تتبع أداء المبيعات والإيرادات والعملاء',
    category: 'sales',
    preview: 'مؤشرات المبيعات، الإيرادات الشهرية، أفضل المنتجات',
    color: 'from-emerald-500 to-teal-600',
    widgets: [
      {
        id: 's1',
        type: 'kpi',
        title: 'إجمالي المبيعات',
        value: 'EGP 245,800',
        trend: 'up',
        change: '+18.2%',
        description: 'مقارنة بالشهر الماضي'
      },
      {
        id: 's2',
        type: 'kpi',
        title: 'عدد الصفقات',
        value: '156',
        trend: 'up',
        change: '+12%',
        description: 'صفقة جديدة'
      },
      {
        id: 's3',
        type: 'line',
        title: 'نمو المبيعات الشهري',
        data: [
          { name: 'يناير', value: 65000 },
          { name: 'فبراير', value: 78000 },
          { name: 'مارس', value: 92000 },
          { name: 'أبريل', value: 88000 },
          { name: 'مايو', value: 105000 },
          { name: 'يونيو', value: 125000 }
        ],
        config: { colors: ['#10b981'], showGrid: true }
      },
      {
        id: 's4',
        type: 'pie',
        title: 'توزيع المبيعات حسب المنتج',
        data: [
          { name: 'الإلكترونيات', value: 35 },
          { name: 'الملابس', value: 25 },
          { name: 'المنزل والحديقة', value: 20 },
          { name: 'الكتب', value: 20 }
        ],
        config: { colors: ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b'] }
      }
    ]
  },
  {
    id: 'marketing',
    name: 'لوحة التسويق',
    description: 'تحليل الحملات التسويقية ومعدلات التحويل',
    category: 'marketing',
    preview: 'أداء الحملات، معدل التحويل، تكلفة الاكتساب',
    color: 'from-purple-500 to-pink-600',
    widgets: [
      {
        id: 'm1',
        type: 'kpi',
        title: 'معدل التحويل',
        value: '3.8%',
        trend: 'up',
        change: '+0.5%',
        description: 'تحسن ملحوظ'
      },
      {
        id: 'm2',
        type: 'kpi',
        title: 'تكلفة الاكتساب',
        value: 'EGP 45',
        trend: 'down',
        change: '-8%',
        description: 'انخفاض التكلفة'
      },
      {
        id: 'm3',
        type: 'bar',
        title: 'أداء القنوات التسويقية',
        data: [
          { name: 'جوجل', value: 4200 },
          { name: 'فيسبوك', value: 3800 },
          { name: 'تويتر', value: 2100 },
          { name: 'لينكد إن', value: 1900 }
        ],
        config: { colors: ['#8b5cf6'], showGrid: true }
      }
    ]
  },
  {
    id: 'finance',
    name: 'لوحة المالية',
    description: 'مراقبة الإيرادات والمصروفات والأرباح',
    category: 'finance',
    preview: 'الإيرادات، المصروفات، صافي الربح، التدفق النقدي',
    color: 'from-blue-500 to-cyan-600',
    widgets: [
      {
        id: 'f1',
        type: 'kpi',
        title: 'صافي الربح',
        value: 'EGP 89,500',
        trend: 'up',
        change: '+15.3%',
        description: 'نمو ممتاز'
      },
      {
        id: 'f2',
        type: 'kpi',
        title: 'التدفق النقدي',
        value: 'EGP 156,200',
        trend: 'up',
        change: '+7.8%',
        description: 'وضع صحي'
      },
      {
        id: 'f3',
        type: 'line',
        title: 'الإيرادات مقابل المصروفات',
        data: [
          { name: 'يناير', revenue: 120000, expenses: 85000 },
          { name: 'فبراير', revenue: 135000, expenses: 92000 },
          { name: 'مارس', revenue: 148000, expenses: 98000 },
          { name: 'أبريل', revenue: 162000, expenses: 105000 }
        ],
        config: { colors: ['#06b6d4', '#ef4444'], showGrid: true, dataKeys: ['revenue', 'expenses'] }
      }
    ]
  },
  {
    id: 'hr',
    name: 'لوحة الموارد البشرية',
    description: 'إدارة الموظفين والحضور والأداء',
    category: 'hr',
    preview: 'عدد الموظفين، معدل الحضور، تقييم الأداء',
    color: 'from-orange-500 to-red-600',
    widgets: [
      {
        id: 'h1',
        type: 'kpi',
        title: 'إجمالي الموظفين',
        value: '248',
        trend: 'up',
        change: '+12',
        description: 'موظف جديد'
      },
      {
        id: 'h2',
        type: 'kpi',
        title: 'معدل الحضور',
        value: '94.2%',
        trend: 'up',
        change: '+1.8%',
        description: 'تحسن الانضباط'
      },
      {
        id: 'h3',
        type: 'pie',
        title: 'توزيع الموظفين حسب القسم',
        data: [
          { name: 'التطوير', value: 35 },
          { name: 'المبيعات', value: 28 },
          { name: 'التسويق', value: 20 },
          { name: 'الإدارة', value: 17 }
        ],
        config: { colors: ['#f97316', '#ef4444', '#ec4899', '#8b5cf6'] }
      }
    ]
  },
  {
    id: 'operations',
    name: 'لوحة العمليات',
    description: 'مراقبة العمليات التشغيلية والإنتاجية',
    category: 'operations',
    preview: 'الإنتاجية، الجودة، أوقات التسليم، الكفاءة',
    color: 'from-indigo-500 to-purple-600',
    widgets: [
      {
        id: 'o1',
        type: 'kpi',
        title: 'معدل الإنتاجية',
        value: '87.5%',
        trend: 'up',
        change: '+3.2%',
        description: 'تحسن الأداء'
      },
      {
        id: 'o2',
        type: 'kpi',
        title: 'معدل الجودة',
        value: '98.1%',
        trend: 'neutral',
        change: '0%',
        description: 'مستقر'
      },
      {
        id: 'o3',
        type: 'bar',
        title: 'أوقات التسليم حسب المنطقة',
        data: [
          { name: 'الرياض', value: 2.1 },
          { name: 'جدة', value: 2.8 },
          { name: 'الدمام', value: 3.2 },
          { name: 'أبها', value: 4.1 }
        ],
        config: { colors: ['#6366f1'], showGrid: true }
      }
    ]
  }
];

export const USER_PROFILE: UserProfile = {
  id: '1',
  name: 'أحمد محمد العلي',
  email: 'ahmed.ali@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  role: 'مدير المشروع',
  company: 'شركة التقنية المتقدمة',
  joinDate: '2024-01-15',
  plan: 'professional'
};

export const NOTIFICATIONS_DEMO = [
  {
    id: 1,
    type: 'success',
    title: 'تم توليد لوحة التحكم بنجاح',
    description: 'تم إنشاء لوحة تحكم "عيادة طبية" باستخدام الذكاء الاصطناعي بنجاح.',
    time: 'منذ ساعتين',
    isRead: false,
  },
  {
    id: 2,
    type: 'warning',
    title: 'تنبيه الأداء',
    description: 'لوحة تحكم "المبيعات" تواجه بطء في تحميل البيانات من المصدر.',
    time: 'منذ 5 ساعات',
    isRead: false,
  },
  {
    id: 3,
    type: 'info',
    title: 'تحديث جديد للمنصة',
    description: 'قمنا بإضافة 5 قوالب جديدة في فئة التسويق الرقمي.',
    time: 'أمس',
    isRead: true,
  },
  {
    id: 4,
    type: 'success',
    title: 'عضو جديد انضم للفريق',
    description: 'قبل "أحمد محمد" دعوتك للانضمام إلى فريق العمل.',
    time: 'منذ يومين',
    isRead: true,
  },
  {
    id: 5,
    type: 'warning',
    title: 'قرب انتهاء الاشتراك',
    description: 'سينتهي اشتراكك في الباقة الاحترافية خلال 3 أيام. قم بالتجديد لتجنب انقطاع الخدمة.',
    time: 'منذ 3 أيام',
    isRead: true,
  },
  {
    id: 6,
    type: 'info',
    title: 'تقرير الأسبوع جاهز',
    description: 'تم تلخيص بيانات الأسبوع الماضي في تقرير تفاعلي جديد.',
    time: 'منذ 4 أيام',
    isRead: true,
  }
];

export const MY_BOARDS = [
  {
    id: '1',
    name: 'لوحة المبيعات الرئيسية',
    description: 'تتبع أداء المبيعات اليومي',
    lastModified: '2026-02-09',
    views: 1247,
    widgets: 8,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: '2',
    name: 'تحليلات التسويق',
    description: 'مراقبة الحملات التسويقية',
    lastModified: '2026-02-08',
    views: 892,
    widgets: 6,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: '3',
    name: 'لوحة الموارد البشرية',
    description: 'إدارة الموظفين والحضور',
    lastModified: '2026-02-07',
    views: 634,
    widgets: 5,
    color: 'from-orange-500 to-red-600'
  }
];

export const TEAM_MEMBERS_EXTENDED = [
  {
    id: '1',
    name: 'أحمد محمد العلي',
    email: 'ahmed.ali@company.com',
    role: 'مدير المشروع',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    status: 'active',
    joinDate: '2024-01-15',
    permissions: ['admin', 'edit', 'view']
  },
  {
    id: '2',
    name: 'سارة أحمد المنصور',
    email: 'sara.mansour@company.com',
    role: 'مطورة واجهات',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    status: 'active',
    joinDate: '2024-02-20',
    permissions: ['edit', 'view']
  },
  {
    id: '3',
    name: 'خالد عبدالله العمري',
    email: 'khalid.omari@company.com',
    role: 'محلل بيانات',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    status: 'active',
    joinDate: '2024-03-10',
    permissions: ['view']
  },
  {
    id: '4',
    name: 'ليلى محمد الحربي',
    email: 'layla.harbi@company.com',
    role: 'مديرة التسويق',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    status: 'pending',
    joinDate: '2026-02-01',
    permissions: ['edit', 'view']
  }
];
