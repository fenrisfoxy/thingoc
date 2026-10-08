export type LanguageCode = 'ORIGIN' | 'EN' | 'VI' | 'CN';

export const SUPPORTED_LANGUAGES: Record<LanguageCode, { label: string; name: string }> = {
  VI: { label: 'Tiếng Việt', name: 'Vietnamese' },
  EN: { label: 'English', name: 'English' },
  CN: { label: '中文 (Chinese)', name: 'Chinese' },
  ORIGIN: { label: 'Ngôn ngữ gốc', name: 'Original language' },
};

export type ActionType = 'summarize' | 'proofread' | 'explain' | 'quizz';

export const ACTION_CONFIG: Record<ActionType, { title: string; desc: string; icon: string }> = {
  summarize: {
    title: 'Tóm tắt nội dung',
    desc: 'Tóm lược văn bản súc tích, dạng gạch đầu dòng dễ quét ý',
    icon: '📝',
  },
  proofread: {
    title: 'Sửa lỗi & Trau chuốt',
    desc: 'Bắt lỗi chính tả, ngữ pháp, đề xuất cách diễn đạt mượt mà',
    icon: '✨',
  },
  explain: {
    title: 'Giải thích chi tiết',
    desc: 'Diễn giải cặn kẽ ý nghĩa, ngữ cảnh bằng từ ngữ dễ hiểu',
    icon: '💡',
  },
  quizz: {
    title: 'Tạo câu hỏi trắc nghiệm',
    desc: 'Sinh các câu đố kiểm tra mức độ nắm bắt bài viết',
    icon: '🎯',
  },
};

const ACTION_PROMPTS: Record<ActionType, string> = {
  summarize:
    'Please summarize the selection using precise and concise language. Use headers and bulleted lists in the summary, to make it scannable. Maintain the meaning and factual accuracy.',
  proofread:
    'Act as a proofreading expert tasked with correcting grammatical errors in a given text above. Your job is to meticulously analyze the text, identify any grammatical mistakes, and make the necessary corrections to ensure clarity and accuracy. This includes checking for proper sentence structure, punctuation, verb tense consistency, and correct usage of words. Additionally, provide suggestions to enhance the readability and flow of the text. The goal is to polish the text so that it communicates its message effectively and professionally.',
  explain:
    'Please explain the selection using precise and concise language with intuitive analogies where helpful.',
  quizz:
    'Please give me some questions to quiz me about the selected text using precise and concise language, including answer options and correct answers explained.',
};

export function buildPrompt(
  action: ActionType,
  language: LanguageCode = 'VI',
  selectedText: string,
  pageUrl?: string
): string {
  const parts: string[] = [];

  if (pageUrl) {
    parts.push(`Reference Source URL: [\`${pageUrl}\`].`);
  }

  parts.push(`The selected text is:\n"""\n${selectedText}\n"""\n`);
  parts.push(ACTION_PROMPTS[action] || ACTION_PROMPTS.summarize);

  const targetLang = SUPPORTED_LANGUAGES[language]?.name || 'Vietnamese';
  parts.push(`\nPlease respond in ${targetLang}.`);

  return parts.join('\n');
}
