import { GalleryItem, DifferentialItem, StepItem, ExpertPhoto } from './types';

export const EXPERT_INFO = {
  name: 'Dra. Lais Simas',
  profession: 'Cirurgiã-Dentista',
  cro: 'CRO-RJ',
  tagline: 'Cuidando do seu sorriso de forma leve e acolhedora. Beleza, saúde e naturalidade em cada detalhe.',
  city: 'Recreio dos Bandeirantes, Rio de Janeiro - RJ',
  address: 'Recreio dos Bandeirantes, Rio de Janeiro - RJ',
  // Direct Instagram profile and Instagram Direct chat link
  instagramHandle: '@dralaissimas',
  instagramUrl: 'https://www.instagram.com/dralaissimas/',
  instagramDirectUrl: 'https://ig.me/m/dralaissimas',
  heroPhoto: 'https://i.imgur.com/XU2MkhV.jpeg',
  secondaryPhoto: 'https://i.imgur.com/EdrYtnr.jpeg',
};

// Fotos de autoridade e bastidores do consultório
export const EXPERT_PHOTOS: ExpertPhoto[] = [
  {
    url: 'https://i.imgur.com/XU2MkhV.jpeg',
    caption: 'Atendimento personalizado, calmo e acolhedor',
    tag: 'Consultório no Recreio',
  },
  {
    url: 'https://i.imgur.com/EdrYtnr.jpeg',
    caption: 'Cuidado individual com cada paciente',
    tag: 'Dra. Lais Simas',
  },
];

// Galeria de provas sociais, antes & depois e resultados reais
// Você pode adicionar mais links de imagens nesta lista a qualquer momento!
export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'res-1',
    url: 'https://i.imgur.com/MRyQ4di.jpeg',
    title: 'Transformação do Sorriso',
    category: 'Estética & Alinhamento',
    description: 'Devolução da harmonia e brilho natural aos dentes.',
  },
  {
    id: 'res-2',
    url: 'https://i.imgur.com/SiKkAlQ.jpeg',
    title: 'Harmonia & Proporção',
    category: 'Reabilitação Estética',
    description: 'Ajuste delicado preservando a anatomia do sorriso.',
  },
  {
    id: 'res-3',
    url: 'https://i.imgur.com/xYMqJV0.jpeg',
    title: 'Clareamento & Acabamento',
    category: 'Estética Dental',
    description: 'Sorriso rejuvenescido com luminosidade e naturalidade.',
  },
  {
    id: 'res-4',
    url: 'https://i.imgur.com/kJajQWM.jpeg',
    title: 'Correção e Delicadeza',
    category: 'Alinhamento',
    description: 'Procedimento conservador focado no conforto do paciente.',
  },
  {
    id: 'res-5',
    url: 'https://i.imgur.com/zWU4VWE.jpeg',
    title: 'Evolução do Tratamento',
    category: 'Saúde & Beleza',
    description: 'Resultado que devolveu a autoconfiança para sorrir.',
  },
  {
    id: 'res-6',
    url: 'https://i.imgur.com/JOlOAqt.jpeg',
    title: 'Naturalidade em Cada Detalhe',
    category: 'Fechamento Estético',
    description: 'Contorno gengival e dental em perfeita sincronia.',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'diff-1',
    title: 'Atendimento Comigo do Início ao Fim',
    description: 'Aqui você não é passado de mão em mão. Eu pessoalmente avalio, planejo e executo todo o seu tratamento.',
    icon: 'UserCheck',
  },
  {
    id: 'diff-2',
    title: 'Sem Julgamentos ou Medo de Dentista',
    description: 'Sei que muitas pessoas têm trauma ou ansiedade. Meu atendimento é leve, com pausas, anestesia indolor e respeito ao seu tempo.',
    icon: 'HeartHandshake',
  },
  {
    id: 'diff-3',
    title: 'Avaliação Honesta e Transparente',
    description: 'Mostro tudo com clareza na tela. Nunca indico procedimentos desnecessários, apenas o que realmente faz bem para sua saúde e estética.',
    icon: 'ShieldCheck',
  },
  {
    id: 'diff-4',
    title: 'Estética com Naturalidade Real',
    description: 'Nada daquele aspecto artificial ou dentes exagerados. O objetivo é valorizar a beleza única e a anatomia do seu rosto.',
    icon: 'Sparkles',
  },
  {
    id: 'diff-5',
    title: 'Consultório Calmo no Recreio',
    description: 'Um espaço pensado para você relaxar, sem correria de clínica lotada, em localização nobre no Recreio dos Bandeirantes.',
    icon: 'MapPin',
  },
  {
    id: 'diff-6',
    title: '1ª Consulta Gratuita e Sem Pressão',
    description: 'Um encontro acolhedor para conversarmos, tirarmos suas dúvidas e você conhecer meu trabalho sem qualquer custo ou obrigação.',
    icon: 'Gift',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Envie uma Mensagem no Instagram',
    description: 'Clique no botão da página para abrir o Direct comigo. Sem formulários longos ou burocracias.',
    highlight: 'Rápido e direto',
  },
  {
    number: '02',
    title: 'Agendamento no Seu Melhor Dia',
    description: 'Combinamos o melhor dia e horário na sua rotina para vir com tranquilidade ao meu consultório no Recreio.',
    highlight: 'Horários flexíveis',
  },
  {
    number: '03',
    title: 'Avaliação Completa & Acolhedora',
    description: 'Sentamos com calma para ouvir seus desejos, analisar seu sorriso detalhadamente e propor as melhores soluções.',
    highlight: '100% Gratuita e sem compromisso',
  },
];
