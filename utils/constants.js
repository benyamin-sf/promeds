export const SPECIALTIES = {
  DENTISTRY: 'dentistry',
  CARDIOLOGY: 'cardiology',
  PEDIATRICS: 'pediatrics',
  DERMATOLOGY: 'dermatology',
  COSMETOLOGY: 'cosmetology',
  ORTHOPEDICS: 'orthopedics',
  ANESTHESIOLOGY: 'anesthesiology',
  DIETETICS: 'dietetics',
  OPHTHALMOLOGY: 'ophthalmology',
  RESPIRATORY_SPECIALTY: 'respiratorySpecialty',
};

export const VISIT_TIME = {
  dentistry: 45,
  cardiology: 20,
  pediatrics: 20,
  dermatology: 15,
  cosmetology: 30,
  orthopedics: 15,
  anesthesiology: 60,
  dietetics: 10,
  ophthalmology: 15,
  respiratorySpecialty: 30,
};

export const GENDER = {
  MAN: 'man',
  WOMAN: 'woman',
};

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  STAFF: 'staff',
};

export const SORT_BY = {
  'A-Z': 'a-z',
  'Z-A': 'z-a',
  LATEST: 'latest',
  OLDEST: 'oldest',
};

export const WEEK_INDEX = [
  'saturday',
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

export const getVisitTime = (specialty) => {
  if (!Object.hasOwn(VISIT_TIME, specialty)) return null;

  return VISIT_TIME[specialty];
};
