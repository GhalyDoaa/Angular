# 🚀 Angular Modern Application

تطبيق واجهة مستخدم متطور مبني باستخدام إطار العمل **Angular**. يركز المشروع على الأداء العالي (Performance)، تجربة المستخدم (UX)، واتباع أفضل الممارسات في كتابة كود نظيف وقابل للتوسع.

---

## 🌟 المميزات (Key Features)

* **Standalone Components:** الاعتماد على المكونات المستقلة لتقليل حجم الحزم وزيادة الأداء.
* **Angular Signals:** استخدام الـ Signals لإدارة الحالة بشكل تفاعلي وفعال.
* **Lazy Loading:** تحميل الوحدات عند الحاجة فقط لسرعة تشغيل أولية فائقة.
* **Dark/Light Mode:** دعم الوضع الليلي والنهاري بشكل متكامل.
* **Responsive Layout:** تصميم مرن يتناسب مع كافة مقاسات الشاشات.
* **Custom Directives & Pipes:** مجموعة من الأدوات المخصصة لتسهيل التعامل مع البيانات داخل الـ Templates.

## 🛠️ التقنيات (Tech Stack)

* **Angular v17+**: الإطار الأساسي.
* **RxJS**: لإدارة التدفقات البيانية (Data Streams).
* **Tailwind CSS / SCSS**: للتنسيق المتقدم والتصميم العصري.
* **Angular Material / NG-ZORRO**: (اختياري) لمكونات واجهة المستخدم الجاهزة.
* **NgRx / Signal Store**: لإدارة حالة التطبيق المعقدة.
* **Lighthouse Optimized**: كود محسن لنتائج ممتازة في تقييمات جوجل.

## 📂 تنظيم الملفات (Project Structure)

نتبع في هذا المشروع نمط الـ **Core/Shared/Features**:

```text
src/app/
├── core/          # الخدمات الوحيدة (Singletons), Interceptors, Guards
├── shared/        # المكونات، الـ Pipes، والـ Directives المشتركة
├── features/      # الموديلات الوظيفية (مثل: Auth, Dashboard, User-Profile)
├── layouts/       # القوالب الرئيسية للهيكل (Navbar, Footer, Sidebar)
└── store/         # إدارة الحالة المركزية (Global State)
