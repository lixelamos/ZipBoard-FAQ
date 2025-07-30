# 📚 FAQ Accordion Component

This project is a responsive, accessible FAQ (Frequently Asked Questions) accordion built with **React**, **Tailwind CSS**, and **Heroicons**. Each FAQ item toggles open/closed with a smooth transition and displays either a plus (`+`) or minus (`–`) icon accordingly.

## ✨ Features

- ✅ Toggleable accordion behavior for each FAQ
- 🎨 Styled using Tailwind CSS for light/dark mode support
- 🔁 Reusable component structure
- 📱 Responsive design (mobile-friendly)
- ♿ Accessible markup (semantic HTML and keyboard-friendly)
- 💡 Icons from [Heroicons](https://heroicons.com/)

---

## 🚀 Tech Stack

- **React**
- **Tailwind CSS**
- **Heroicons**

---

## 🧩 Component Usage

```jsx
import FAQItem from './components/FAQItem';

const faqData = [
  {
    question: 'Q1. Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Sit amet natoque ullamcorper adipiscing...',
  },
  {
    question: 'Q2. Lorem ipsum dolor sit amet consectetur?',
    answer: 'Porttitor lectus ut sit ac sit sed sit gravida donec...',
  },
  // Add more FAQs as needed
];

export default function FAQSection() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {faqData.map((item, idx) => (
        <FAQItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

## 🛠️ Setup & Installation

```bash
git clone https://github.com/your-username/faq-accordion.git
cd faq-accordion
npm install
npm run dev   # Run the development server
npm run build # Build for production
