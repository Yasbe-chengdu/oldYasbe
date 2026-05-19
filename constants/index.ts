export const languageOptions = [
  { icon: 'https://flagcdn.com/w320/gb.png', label: 'English', value: 'en' },
  { icon: 'https://flagcdn.com/w320/cn.png', label: 'China', value: 'cn' },
  { icon: 'https://flagcdn.com/w320/hk.png', label: 'Hong Kong', value: 'hk' },
];


export const languages = languageOptions.map(lang => lang.value);

export const languageLook: any = {
  en: 'English',
  hk: 'Hong Kong',
  cn: 'China',
};

export const optionLessons = [
  { label: 'Beginner', value: 'A1' },
  { label: 'Elementary', value: 'A2' },
  { label: 'Intermediate', value: 'B1' },
  { label: 'Upper – Intermediate', value: 'B2' },
];

export const optionPurpose = [
  { label: 'Exam (Goethe, Telc u.s.w.)', value: 'EXAM' },
  { label: 'Work', value: 'WORK' },
  { label: 'Professional Meeting', value: 'MEETING' },
  { label: 'Speaking ', value: 'SPEAKING' },
];
