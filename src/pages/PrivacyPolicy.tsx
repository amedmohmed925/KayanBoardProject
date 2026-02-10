import { motion } from "framer-motion";
import { Eye, ShieldCheck, Database, FileText, Bell, ChevronRight, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "جمع المعلومات",
      icon: <Database className="w-6 h-6 text-secondary" />,
      content: "نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حسابك، مثل اسمك وبريدك الإلكتروني ومعلومات شركتك، بالإضافة إلى البيانات التقنية المتعلقة باستخدامك للمنصة."
    },
    {
      title: "كيفية استخدام البيانات",
      icon: <Eye className="w-6 h-6 text-secondary" />,
      content: "نستخدم بياناتك لتشغيل وتحسين خدماتنا، وتخصيص تجربتك، والتواصل معك بشأن التحديثات، وضمان أمن حسابك والمنصة بشكل عام."
    },
    {
      title: "حماية المعلومات",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      content: "نطبق معايير أمنية صارمة وتقنيات تشفير متقدمة لحماية بياناتك من الوصول غير المصرح به أو الكشف عنها أو تغييرها."
    },
    {
      title: "مشاركة البيانات",
      icon: <UserCheck className="w-6 h-6 text-secondary" />,
      content: "نحن لا نبيع بياناتك الشخصية لأطراف ثالثة. نقوم فقط بمشاركة المعلومات الضرورية مع خدمات معالجة المدفوعات أو إذا تطلب القانون ذلك."
    },
    {
      title: "حقوقك واختياراتك",
      icon: <FileText className="w-6 h-6 text-secondary" />,
      content: "لك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها في أي وقت عبر إعدادات حسابك أو بالتواصل معنا مباشرة."
    },
    {
      title: "التغييرات في السياسة",
      icon: <Bell className="w-6 h-6 text-secondary" />,
      content: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة وإعلامك بها إذا كانت التغييرات جوهرية."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 px-4">
        {/* Background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
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
                سياسة الخصوصية
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                خصوصيتك تهمنا بقدر ما تهمك. نحن ملتزمون بحماية بياناتك الشخصية واستخدامها بمسؤولية وشفافية.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full hover:border-secondary/30 transition-all border-l-4 border-l-secondary/20">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed text-sm">
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
            className="mt-16 bg-secondary/5 rounded-3xl p-8 border border-secondary/10 text-center"
          >
            <h3 className="text-xl font-bold mb-4">مركز مساعدة الخصوصية</h3>
            <p className="text-muted-foreground mb-6">
              إذا كنت تريد ممارسة حقوقك المتعلقة ببياناتك أو لديك أي استفسار حول كيفية حمايتنا لخصوصيتك.
            </p>
            <a 
              href="mailto:privacy@kayanboard.com" 
              className="text-secondary font-bold hover:underline"
            >
              privacy@kayanboard.com
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

export default PrivacyPolicy;
