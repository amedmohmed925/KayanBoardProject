export const ROUTE_PATHS = {
  HOME: '/',
  PRICING: '/pricing',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  MY_BOARDS: '/my-boards',
  TEMPLATES: '/templates',
  TEAM: '/team',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  OTP: '/otp',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  ADMIN_DASHBOARD: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_BOARDS: '/admin/boards',
  ADMIN_SETTINGS: '/admin/settings',
  ADMIN_AUDIT: '/admin/audit',
  ADMIN_FINANCIALS: '/admin/financials',
  ADMIN_AI: '/admin/ai',
  ADMIN_SUPPORT: '/admin/support',
  ADMIN_CONTENT: '/admin/content',
  ADMIN_SYSTEM: '/admin/system',
} as const;

export type WidgetType = 'kpi' | 'line' | 'bar' | 'pie' | 'activity' | 'table' | 'progress' | 'users';

export interface DashboardWidget {
  id: string;
  type: WidgetType;
  title: string;
  value?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  change?: string;
  data?: any[];
  description?: string;
  config?: {
    colors?: string[];
    showGrid?: boolean;
    dataKeys?: string[];
    headers?: string[];
  };
}

export interface DashboardTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
  widgets: DashboardWidget[];
  color: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  company: string;
  joinDate: string;
  plan: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
  buttonText: string;
}

export const ARABIC_CONTENT = {
  common: {
    appName: 'كيان بورد',
    getStarted: 'ابدأ الآن',
    learnMore: 'تعرف على المزيد',
    dashboard: 'لوحة التحكم',
    pricing: 'الأسعار',
    about: 'من نحن',
    contact: 'اتصل بنا',
    notifications: 'الإشعارات',
    rights: '© 2026 كيان بورد. جميع الحقوق محفوظة.',
  },
  hero: {
    title: 'بناء لوحات تحكم ذكية.. بسرعة الضوء',
    subtitle: 'حوّل أفكارك إلى لوحات بيانات تفاعلية مدعومة بالذكاء الاصطناعي في ثوانٍ معدودة.',
    cta: 'ابدأ البناء مجاناً',
  },
  features: {
    title: 'لماذا تختار كيان بورد؟',
    subtitle: 'نحن نوفر لك الأدوات اللازمة للنمو والتحليل الذكي.',
    items: [
      {
        title: 'تصميم واجهة عصري',
        description: 'واجهات مستخدم مذهلة تعتمد على مبادئ التصميم الحديثة وتدعم العربية بشكل كامل.',
      },
      {
        title: 'تحليلات ذكية',
        description: 'احصل على رؤى عميقة من بياناتك باستخدام تقنيات الذكاء الاصطناعي المتقدمة.',
      },
      {
        title: 'تكامل سلس',
        description: 'اربط بياناتك من مختلف المصادر بسهولة ويسر في مكان واحد.',
      },
      {
        title: 'تخصيص كامل',
        description: 'تحكم في كل تفاصيل لوحة التحكم الخاصة بك لتناسب هويتك التجارية.',
      },
    ],
  },
  pricing: {
    title: 'خطط تناسب الجميع',
    subtitle: 'اختر الخطة المثالية لاحتياجاتك، سواء كنت فرداً أو مؤسسة.',
    monthly: 'شهرياً',
    yearly: 'سنوياً',
    save: 'وفر 20%',
  },
  about: {
    visionTitle: 'رؤيتنا',
    visionText: 'أن نكون المنصة الرائدة عالمياً في تمكين الشركات من فهم بياناتها من خلال حلول ذكاء اصطناعي بديهية وجميلة.',
    missionTitle: 'رسالتنا',
    missionText: 'تبسيط عملية بناء لوحات التحكم المعقدة وجعل تحليل البيانات متاحاً للجميع دون الحاجة لخبرة برمجية.',
    teamTitle: 'فريقنا المبدع',
  },
  dashboard: {
    aiMagic: '✨ سحر الذكاء الاصطناعي',
    generate: 'توليد لوحة تحكم',
    placeholder: 'صف مشروعك (مثال: لوحة تحكم لعيادة طبية)...',
    generating: 'جاري توليد لوحتك الذكية...',
    myBoards: 'لوحاتي',
    templates: 'القوالب',
    team: 'الفريق',
    settings: 'الإعدادات',
    analytics: 'التحليلات',
    recentActivity: 'النشاط الأخير',
    useTemplate: 'استخدم القالب',
    viewAll: 'عرض الكل',
    createNew: 'إنشاء جديد',
  },
  templates: {
    title: 'قوالب جاهزة',
    subtitle: 'ابدأ بسرعة باستخدام قوالبنا المصممة مسبقاً',
    categories: {
      all: 'الكل',
      sales: 'المبيعات',
      marketing: 'التسويق',
      finance: 'المالية',
      hr: 'الموارد البشرية',
      operations: 'العمليات',
    },
  },
  profile: {
    title: 'الملف الشخصي',
    editProfile: 'تعديل الملف الشخصي',
    personalInfo: 'المعلومات الشخصية',
    accountSettings: 'إعدادات الحساب',
    notifications: 'الإشعارات',
    security: 'الأمان',
    billing: 'الفواتير',
    logout: 'تسجيل الخروج',
  },
  myBoards: {
    title: 'لوحاتي',
    subtitle: 'إدارة جميع لوحات التحكم الخاصة بك',
    createBoard: 'إنشاء لوحة جديدة',
    lastModified: 'آخر تعديل',
    views: 'المشاهدات',
  },
  team: {
    title: 'الفريق',
    subtitle: 'إدارة أعضاء الفريق والصلاحيات',
    inviteMember: 'دعوة عضو جديد',
    members: 'الأعضاء',
    pending: 'في الانتظار',
  },
  analytics: {
    title: 'التحليلات',
    subtitle: 'تحليل شامل لأداء لوحات التحكم',
    overview: 'نظرة عامة',
    performance: 'الأداء',
    usage: 'الاستخدام',
  },
  settings: {
    title: 'الإعدادات',
    subtitle: 'تخصيص تفضيلاتك وإعدادات الحساب',
    general: 'عام',
    appearance: 'المظهر',
    notifications: 'الإشعارات',
    integrations: 'التكاملات',
  },
  admin: {
    title: 'لوحة تحكم المسؤول',
    overview: 'نظرة عامة',
    users: 'إدارة المستخدمين',
    boards: 'إدارة اللوحات',
    settings: 'إعدادات الموقع',
    audit: 'سجل النشاطات',
    financials: 'المالية والاشتراكات',
    aiConfig: 'إعدادات الذكاء الاصطناعي',
    support: 'الدعم الفني',
    content: 'إدارة المحتوى',
    system: 'حالة النظام المتقدمة',
    totalUsers: 'إجمالي المستخدمين',
    totalBoards: 'إجمالي اللوحات',
    activeUsers: 'المستخدمون النشطون',
    revenue: 'الإيرادات',
    userList: 'قائمة المستخدمين',
    boardList: 'قائمة اللوحات',
    actions: 'الإجراءات',
    edit: 'تعديل',
    delete: 'حذف',
    status: 'الحالة',
    role: 'الدور',
    systemHealth: 'صحة النظام',
    serverStatus: 'حالة الخادم',
    apiLatency: 'تأخر API',
    databaseLoad: 'حمل قاعدة البيانات',
    revenueBreakdown: 'تفاصيل الإيرادات',
    mrr: 'الإيرادات الشهرية المتكررة',
    arr: 'الإيرادات السنوية المتكررة',
    subscriptions: 'الاشتراكات',
    userGrowth: 'نمو المستخدمين',
    geographicDistribution: 'التوزيع الجغرافي',
    popularTemplates: 'القوالب الشائعة',
    aiUsage: 'استخدام الذكاء الاصطناعي',
    recentTransactions: 'المعاملات الأخيرة',
    retentionRate: 'معدل الاحتفاظ',
    avgSessionTime: 'متوسط وقت الجلسة',
    newSignups: 'التسجيلات الجديدة',
    activeNow: 'نشط الآن',
  },
  auth: {
    loginTitle: 'تسجيل الدخول',
    loginSubtitle: 'مرحباً بك مجدداً في كيان بورد',
    registerTitle: 'إنشاء حساب جديد',
    registerSubtitle: 'ابدأ رحلتك في تحليل البيانات بذكاء',
    forgotPasswordTitle: 'نسيت كلمة المرور؟',
    forgotPasswordSubtitle: 'سوف نرسل لك رمزاً لاستعادة الوصول',
    otpTitle: 'تأكيد الرمز',
    otpSubtitle: 'أدخل الرمز المكون من 6 أرقام المرسل إليك',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    name: 'الاسم الكامل',
    confirmPassword: 'تأكيد كلمة المرور',
    rememberMe: 'تذكرني',
    loginButton: 'دخول',
    registerButton: 'إنشاء حساب',
    sendResetLink: 'إرسال رابط الاستعادة',
    verify: 'تأكيد',
    noAccount: 'ليس لديك حساب؟',
    haveAccount: 'لديك حساب بالفعل؟',
    backToLogin: 'العودة لتسجيل الدخول',
  },
} as const;

export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 0,
  }).format(amount);
};
