const farsiOptionsMapping = {
  all: 'همه موارد',
  none: 'بدون فیلتر',
  man: 'پسر/مرد',
  woman: 'دختر/زن',
  user: 'کاربر',
  staff: 'پرسنل',
  admin: 'مدیر سامانه',
  expired: 'منقضی شده',
  notExpired: 'زمان دار',
  dentistry: 'دندانپزشکی',
  cardiology: 'تخصص قلب',
  pediatrics: 'تخصص اطفال',
  dermatology: 'تخصص پوست',
  cosmetology: 'تخصص زیبایی',
  orthopedics: 'تخصص ارتوپد',
  anesthesiology: 'تخصص بیهوشی',
  dietetics: 'تخصص تغذیه',
  ophthalmology: 'تخصص چشم',
  respiratorySpecialty: 'تخصص تنفسی',
  'a-z': 'به ترتیب الفبا',
  'z-a': 'به ترتیب الفبا (برعکس)',
  latest: 'از قدیم به جدید',
  oldest: 'از جدید به قدیم',
  saturday: 'شنبه',
  sunday: 'یکشنبه',
  monday: 'دوشنبه',
  tuesday: 'سه شنبه',
  wednesday: 'چهارشنبه',
  thursday: 'پنج شنبه',
  friday: 'جمعه',
};

export default function translate(word) {
  if (!Object.hasOwn(farsiOptionsMapping, word)) {
    return word;
  }
  return farsiOptionsMapping[word];
}
