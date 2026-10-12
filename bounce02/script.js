const languageToggle = document.getElementById("languageToggle");
const currentCode = document.getElementById("currentCode");
let currentLanguage = "en";

const translations = {
  en: {
    label: "INTERNATIONALIZATION",
    direction: "Current direction: Left to right (LTR)",
    preview: "PROFILE PREVIEW", live: "LIVE", role: "INFORMATION & NETWORK SECURITY",
    name: "Hello, I'm Rashed.",
    bio: "I'm learning how networks work and how to keep digital information safer.",
    link: "Explore the full portfolio ↗",
    howTitle: "How it works",
    howText: "The button click selects a translation dictionary, updates textContent, then changes the document's lang and dir attributes. CSS logical properties preserve spacing in both directions.",
    back: "Back to main portfolio →", photoAlt: "Professional portrait of Rashed"
  },
  ar: {
    label: "تعدد اللغات",
    direction: "الاتجاه الحالي: من اليمين إلى اليسار (RTL)",
    preview: "معاينة الملف الشخصي", live: "مباشر", role: "أمن المعلومات والشبكات",
    name: "مرحباً، أنا راشد.",
    bio: "أتعلم كيف تعمل الشبكات وكيف أحافظ على المعلومات الرقمية بصورة أكثر أماناً.",
    link: "استكشف الموقع الكامل ↗",
    howTitle: "كيف يعمل؟",
    howText: "عند الضغط على الزر، يختار JavaScript قاموس الترجمة ويحدّث النصوص باستخدام textContent، ثم يغيّر خصائص lang وdir في المستند. تساعد خصائص CSS المنطقية على الحفاظ على المسافات والمحاذاة في الاتجاهين.",
    back: "العودة إلى الموقع الرئيسي ←", photoAlt: "صورة شخصية رسمية لراشد"
  }
};

function setLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key] !== undefined) element.alt = dictionary[key];
  });
  languageToggle.textContent = language === "en" ? "العربية" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  currentCode.textContent = language === "en" ? "EN / LTR" : "AR / RTL";
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));
