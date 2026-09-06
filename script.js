// إعداد روابط واتساب لكل زر "اطلب" أو "عرض" بحيث تفتح محادثة مع رسالة مبدئية.
// رقم الواتساب (اضمن كود البلد 20 لمصر): 201014989206
const waNumber = "201014989206";

// استمع للنقرات على أزرار القوالب
document.addEventListener("click", function(e){
  const btn = e.target.closest("a[data-template]");
  if(!btn) return;
  e.preventDefault();
  const templateName = btn.getAttribute("data-template") || "قالب من Hatrek";
  const action = btn.textContent.trim();
  // نص مبدئي باللغة العربية
  const message = `مرحبًا ياسر، أرغب في ${action} - ${templateName} من Hatrek. الرجاء التواصل معي.`;
  const url = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});

// وضع السنة الحالية في الفوتر
document.getElementById("year").textContent = new Date().getFullYear();
