const faqs = [
  {
    question: "Do you install and deliver?",
    answer: "Yes! We offer delivery and professional setup for balloon décor and event styling throughout the Coachella Valley and surrounding areas. Delivery fees may apply depending on your location."
  },
  {
    question: "How far in advance do I need to book?",
    answer: "We recommend booking 2–4 weeks in advance, especially for weekends and holidays. Last-minute bookings may be available depending on our schedule."
  },
  {
    question: "Do you offer backdrops for rent?",
    answer: "Yes! We offer a variety of backdrops and event décor rentals to help complete your celebration. Contact us for current styles and availability."
  },
  {
    question: "Can you guarantee balloon condition during outdoor events?",
    answer: "While we use high-quality balloons, outdoor weather conditions such as heat, wind, and direct sunlight can affect their appearance and longevity. We'll recommend the best setup and placement to help your balloons look their best throughout your event."
  },
  {
    question: "I'm ready to order. How do I get started?",
    answer: "Simply click the Request a Quote button, complete the contact form with your event details, and we'll get in touch to discuss your vision, pricing, and availability."
  }
];

const faqList = document.querySelector(".faq-list");

if (faqList) {
  faqList.innerHTML = faqs.map(faq => `
    <div class="faq-item">
      <h3>${faq.question}</h3>
      <p>${faq.answer}</p>
    </div>
  `).join("");
}
