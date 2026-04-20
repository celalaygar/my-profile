'use client';

import { useI18n } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const { t } = useI18n();

  const faqItems = [
    {
      key: 'q1',
      question: t('faq.questions.q1'),
      answer: t('faq.questions.a1'),
    },
    {
      key: 'q2',
      question: t('faq.questions.q2'),
      answer: t('faq.questions.a2'),
    },
    {
      key: 'q3',
      question: t('faq.questions.q3'),
      answer: t('faq.questions.a3'),
    },
    {
      key: 'q4',
      question: t('faq.questions.q4'),
      answer: t('faq.questions.a4'),
    },
    {
      key: 'q5',
      question: t('faq.questions.q5'),
      answer: t('faq.questions.a5'),
    },
    {
      key: 'q6',
      question: t('faq.questions.q6'),
      answer: t('faq.questions.a6'),
    },
    {
      key: 'q7',
      question: t('faq.questions.q7'),
      answer: t('faq.questions.a7'),
    },
    {
      key: 'q8',
      question: t('faq.questions.q8'),
      answer: t('faq.questions.a8'),
    },
  ];

  return (
    <section className="py-20 sm:py-32 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-[#7cff92]" />
            <span className="text-sm font-medium text-[#7cff92]">{t('faq.subtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 hover:border-[#7cff92]/30 transition-colors">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.key}
                value={item.key}
                className="border-b border-border/30 last:border-0 py-4 last:py-0 first:pt-0"
              >
                <AccordionTrigger className="hover:text-[#7cff92] transition-colors text-left font-semibold text-foreground">
                  <div className="flex items-start gap-3 text-left">
                    <span className="text-[#7cff92] font-bold text-lg min-w-fit">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-base sm:text-lg">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-11">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#7cff92]/10 to-transparent border border-[#7cff92]/30 rounded-xl text-center">
          <p className="text-muted-foreground mb-4">
            {t('faq.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all"
          >
            {t('services.contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
