import { useState } from 'react';
import FaqHeader from './Components/FaqHeader';
import FaqItem from './Components/FaqItem';

const faqs = [
  {
    question: 'Quais serviços você oferece?',
    answer:
      'Trabalho com identidade visual, designs para redes sociais e design gráfico, ajudando marcas a se posicionarem de forma estratégica e profissional.',
  },
  {
    question: 'Para quem é o serviço de identidade visual?',
    answer:
      'Para empresas e profissionais que desejam posicionar sua marca com mais profissionalismo, estratégia e consistência visual.',
  },
  {
    question: 'Quanto tempo leva um projeto de identidade visual?',
    answer:
      'O prazo médio é de 20 a 30 dias úteis, podendo variar conforme a complexidade do projeto e o tempo de retorno nos feedbacks.',
  },
  {
    question: 'Como funciona o processo de criação?',
    answer: 'O processo acontece em algumas etapas:',
    steps: [
      'Reunião de alinhamento e briefing',
      'Desenvolvimento das propostas',
      'Apresentação do projeto',
      'Ajustes finais',
      'Entrega dos arquivos',
    ],
  },
  {
    question: 'Você faz apenas logotipo?',
    answer:
      'Meu foco é desenvolver identidades visuais completas, garantindo que a marca tenha consistência e personalidade em todos os pontos de contato.',
  },
  {
    question: 'Você também cria artes para redes sociais?',
    answer:
      'Sim! Desenvolvo designs estratégicos para posts, como carrosséis, capas, templates e materiais visuais para fortalecer a presença da marca nas redes.',
  },
  {
    question: 'Posso pedir alterações no projeto?',
    answer:
      'Sim. O projeto inclui rodadas de pequenos ajustes, garantindo que o resultado final esteja alinhado com o que você precisa.',
  },
  {
    question: 'Trabalha com parcelamento?',
    answer:
      'Sim! O investimento em pacotes de identidade visual pode ser parcelado no cartão ou dividido entre entrada e pagamento final.',
  },
  {
    question: 'Você atende clientes de qualquer cidade?',
    answer:
      'Sim! Todo o processo pode ser feito online, atendendo clientes de qualquer cidade.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-block px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto">

        <FaqHeader />

        {/* Acordeão */}
        <div style={{ borderTop: '1px solid rgba(150,150,150,0.25)' }}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
