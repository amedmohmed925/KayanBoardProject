import { motion } from "framer-motion";
import { Shield, CheckCircle2, ChevronRight, Scale, Clock, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib";
import {Layout} from "@/components/Layout";
import  { GlassCard } from "@/components/GlassCard";

const TermsOfService = () => {
  const sections = [
    {
      title: "قبول الشروط",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      content: "باستخدامك لمنصة كيان بورد (KayanBoard)، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، فيجب عليك عدم استخدام المنصة."
    },
    {
      title: "حساب المستخدم",
      icon: <Lock className="w-6 h-6 text-primary" />,
      content: "أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور، وعن جميع الأنشطة التي تحدث تحت حسابك. يجب أن تكون جميع المعلومات المقدمة عند التسجيل صحيحة ودقيقة."
    },
    {
      title: "الاستخدام المقبول",
      icon: <Scale className="w-6 h-6 text-primary" />,
      content: "يُحظر استخدام المنصة لأي غرض غير قانوني أو ينتهك حقوق الآخرين. لا يجوز لك محاولة الوصول غير المصرح به إلى أنظمة المنصة أو التداخل مع تشغيلها."
    },
    {
      title: "الملكية الفكرية",
      icon: <Shield className="w-6 h-6 text-primary" />,
      content: "جميع المحتويات والبرمجيات والعلامات التجارية الموجودة على المنصة هي ملك لكيان بورد أو مرخصيها. لا يجوز لك نسخ أو تعديل أو توزيع أي جزء منها دون إذن خطي."
    },
    {
      title: "التعديلات والتحديثات",
      icon: <Clock className="w-6 h-6 text-primary" />,
      content: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية من خلال الموقع أو عبر البريد الإلكتروني."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 px-4">
        {/* Background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
                شروط الخدمة
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                يرجى قراءة شروط الخدمة بعناية لضمان تجربة آمنة ومميزة مع منصة كيان بورد.
              </p>
            </motion.div>
          </div>

          {/* Breadcrumb-like back link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to={ROUTE_PATHS.HOME} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </Link>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 hover:border-primary/30 transition-all">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center"
          >
            <h3 className="text-xl font-bold mb-4">هل لديك استفسارات؟</h3>
            <p className="text-muted-foreground mb-6">
              إذا كان لديك أي أسئلة بخصوص شروط الخدمة، يمكنك التواصل معنا في أي وقت.
            </p>
            <a 
              href="mailto:support@kayanboard.com" 
              className="text-primary font-bold hover:underline"
            >
              support@kayanboard.com
            </a>
          </motion.div>

          <footer className="mt-12 text-center text-sm text-muted-foreground">
            آخر تحديث: 10 فبراير 2026
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
