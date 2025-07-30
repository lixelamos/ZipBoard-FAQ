import FAQItem from './FAQItem';

const data = [
  {
    id: 'q1',
    question: 'Q1. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cras tortor nunc, rhoncus ut velit a, interdum sagittis mi. Nulla non ex vel odio scelerisque porta eu. Orci ducimus integer auctor turpis venenatis.',
  },
  {
    id: 'q2',
    question: 'Q2. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a aliquid semper et cursus. Porttitor lectus in eu sit vel consectetur. Orci ducimus integer auctor turpis venenatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Orci ducimus integer auctor turpis venenatis.',
  },
  {
    id: 'q3',
    question: 'Q3. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a aliquid semper et cursus. Porttitor lectus in eu sit vel consectetur. Orci ducimus integer auctor turpis venenatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Orci ducimus integer auctor turpis venenatis.',
  },
  {
    id: 'q4',
    question: 'Q4. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a aliquid semper et cursus. Porttitor lectus in eu sit vel consectetur. Orci ducimus integer auctor turpis venenatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Orci ducimus integer auctor turpis venenatis.',
  },
  {
    id: 'q5',
    question: 'Q5. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a aliquid semper et cursus. Porttitor lectus in eu sit vel consectetur. Orci ducimus integer auctor turpis venenatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Orci ducimus integer auctor turpis venenatis.',
  },
];

export default function FAQList() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-purple-700 dark:text-electricBlue">
  Frequently asked questions
</h2>

      {data.map((item) => (
        <FAQItem key={item.id} {...item} />
      ))}
    </div>
  );
}
