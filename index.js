/**
 * Return a country
 * @param {string} code - ISO2 code
 */
function getCountry(code) {
  return countries[code.toLowerCase()];
}

/**
 * Return all countries
 */
function getCountries() {
  return iso2Codes.map(code => getCountry(code));
}

const countries = {
  af: {
    name: 'Afghanistan (‫افغانستان‬‎)',
    iso2: 'af',
    dial: '93',
    format: '+..-..-...-....',
  },
  al: {
    name: 'Albania (Shqipëri)',
    iso2: 'al',
    dial: '355',
    format: '+...(...)...-...',
  },
  dz: {
    name: 'Algeria (‫الجزائر‬‎)',
    iso2: 'dz',
    dial: '213',
    format: '+...-..-...-....',
  },
  as: {
    name: 'American Samoa',
    iso2: 'as',
    dial: '1684',
    format: '+.(...)...-....',
  },
  ad: {
    name: 'Andorra',
    iso2: 'ad',
    dial: '376',
    format: '+...-...-...',
  },
  ao: {
    name: 'Angola',
    iso2: 'ao',
    dial: '244',
    format: '+...(...)...-...',
  },
  ai: {
    name: 'Anguilla',
    iso2: 'ai',
    dial: '1264',
    format: '+.(...)...-....',
  },
  ag: {
    name: 'Antigua and Barbuda',
    iso2: 'ag',
    dial: '1268',
    format: '+.(...)...-....',
  },
  ar: {
    name: 'Argentina',
    iso2: 'ar',
    dial: '54',
    format: '+..(...)...-....',
  },
  am: {
    name: 'Armenia (Հայաստան)',
    iso2: 'am',
    dial: '374',
    format: '+...-..-...-...',
  },
  aw: {
    name: 'Aruba',
    iso2: 'aw',
    dial: '297',
    format: '+...-...-....',
  },
  au: {
    name: 'Australia',
    iso2: 'au',
    dial: '61',
    format: '+.. ... ... ...',
  },
  at: {
    name: 'Austria (Österreich)',
    iso2: 'at',
    dial: '43',
    format: '+..(...)...-....',
  },
  az: {
    name: 'Azerbaijan (Azərbaycan)',
    iso2: 'az',
    dial: '994',
    format: '+...-..-...-..-..',
  },
  bs: {
    name: 'Bahamas',
    iso2: 'bs',
    dial: '1242',
    format: '+.(...)...-....',
  },
  bh: {
    name: 'Bahrain (‫البحرين‬‎)',
    iso2: 'bh',
    dial: '973',
    format: '+...-....-....',
  },
  bd: {
    name: 'Bangladesh (বাংলাদেশ)',
    iso2: 'bd',
    dial: '880',
    format: '+...-..-...-...',
  },
  bb: {
    name: 'Barbados',
    iso2: 'bb',
    dial: '1246',
    format: '+.(...)...-....',
  },
  by: {
    name: 'Belarus (Беларусь)',
    iso2: 'by',
    dial: '375',
    format: '+...(..)...-..-..',
  },
  be: {
    name: 'Belgium (België)',
    iso2: 'be',
    dial: '32',
    format: '+.. ... .. .. ..',
  },
  bz: {
    name: 'Belize',
    iso2: 'bz',
    dial: '501',
    format: '+...-...-....',
  },
  bj: {
    name: 'Benin (Bénin)',
    iso2: 'bj',
    dial: '229',
    format: '+...-..-..-....',
  },
  bm: {
    name: 'Bermuda',
    iso2: 'bm',
    dial: '1441',
    format: '+.(...)...-....',
  },
  bt: {
    name: 'Bhutan (འབྲུག)',
    iso2: 'bt',
    dial: '975',
    format: '+...-.-...-...',
  },
  bo: {
    name: 'Bolivia',
    iso2: 'bo',
    dial: '591',
    format: '+...-.-...-....',
  },
  ba: {
    name: 'Bosnia and Herzegovina (Босна и Херцеговина)',
    iso2: 'ba',
    dial: '387',
    format: '+...-..-....',
  },
  bw: {
    name: 'Botswana',
    iso2: 'bw',
    dial: '267',
    format: '+...-..-...-...',
  },
  br: {
    name: 'Brazil (Brasil)',
    iso2: 'br',
    dial: '55',
    format: '+..-..-....-....',
  },
  io: {
    name: 'British Indian Ocean Territory',
    iso2: 'io',
    dial: '246',
    format: '+...-...-....',
  },
  vg: {
    name: 'British Virgin Islands',
    iso2: 'vg',
    dial: '1284',
    format: '+.(...)...-....',
  },
  bn: {
    name: 'Brunei',
    iso2: 'bn',
    dial: '673',
    format: '+...-...-....',
  },
  bg: {
    name: 'Bulgaria (България)',
    iso2: 'bg',
    dial: '359',
    format: '+...(...)...-...',
  },
  bf: {
    name: 'Burkina Faso',
    iso2: 'bf',
    dial: '226',
    format: '+...-..-..-....',
  },
  bi: {
    name: 'Burundi (Uburundi)',
    iso2: 'bi',
    dial: '257',
    format: '+...-..-..-....',
  },
  kh: {
    name: 'Cambodia (កម្ពុជា)',
    iso2: 'kh',
    dial: '855',
    format: '+...-..-...-...',
  },
  cm: {
    name: 'Cameroon (Cameroun)',
    iso2: 'cm',
    dial: '237',
    format: '+...-....-....',
  },
  ca: {
    name: 'Canada',
    iso2: 'ca',
    dial: '1',
    format: '+. (...) ...-....',
  },
  cv: {
    name: 'Cape Verde (Kabu Verdi)',
    iso2: 'cv',
    dial: '238',
    format: '+...(...)..-..',
  },
  bq: {
    name: 'Caribbean Netherlands',
    iso2: 'bq',
    dial: '599',
    format: '+...-...-....',
  },
  ky: {
    name: 'Cayman Islands',
    iso2: 'ky',
    dial: '1345',
    format: '+.(...)...-....',
  },
  cf: {
    name: 'Central African Republic (République centrafricaine)',
    iso2: 'cf',
    dial: '236',
    format: '+...-..-..-....',
  },
  td: {
    name: 'Chad (Tchad)',
    iso2: 'td',
    dial: '235',
    format: '+...-..-..-..-..',
  },
  cl: {
    name: 'Chile',
    iso2: 'cl',
    dial: '56',
    format: '+..-.-....-....',
  },
  cn: {
    name: 'China (中国)',
    iso2: 'cn',
    dial: '86',
    format: '+.. ..-........',
  },
  co: {
    name: 'Colombia',
    iso2: 'co',
    dial: '57',
    format: '+..(...)...-....',
  },
  km: {
    name: 'Comoros (‫جزر القمر‬‎)',
    iso2: 'km',
    dial: '269',
    format: '+...-..-.....',
  },
  cd: {
    name: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
    iso2: 'cd',
    dial: '243',
    format: '+...(...)...-...',
  },
  cg: {
    name: 'Congo (Republic) (Congo-Brazzaville)',
    iso2: 'cg',
    dial: '242',
    format: '+...-..-...-....',
  },
  ck: {
    name: 'Cook Islands',
    iso2: 'ck',
    dial: '682',
    format: '+...-..-...',
  },
  cr: {
    name: 'Costa Rica',
    iso2: 'cr',
    dial: '506',
    format: '+... ....-....',
  },
  ci: {
    name: 'Côte d’Ivoire',
    iso2: 'ci',
    dial: '225',
    format: '+...-..-...-...',
  },
  hr: {
    name: 'Croatia (Hrvatska)',
    iso2: 'hr',
    dial: '385',
    format: '+...-..-...-...',
  },
  cu: {
    name: 'Cuba',
    iso2: 'cu',
    dial: '53',
    format: '+..-.-...-....',
  },
  cw: {
    name: 'Curaçao',
    iso2: 'cw',
    dial: '599',
    format: '+...-...-....',
  },
  cy: {
    name: 'Cyprus (Κύπρος)',
    iso2: 'cy',
    dial: '357',
    format: '+...-..-...-...',
  },
  cz: {
    name: 'Czech Republic (Česká republika)',
    iso2: 'cz',
    dial: '420',
    format: '+...(...)...-...',
  },
  dk: {
    name: 'Denmark (Danmark)',
    iso2: 'dk',
    dial: '45',
    format: '+.. .. .. .. ..',
  },
  dj: {
    name: 'Djibouti',
    iso2: 'dj',
    dial: '253',
    format: '+...-..-..-..-..',
  },
  dm: {
    name: 'Dominica',
    iso2: 'dm',
    dial: '1767',
    format: '+.(...)...-....',
  },
  do: {
    name: 'Dominican Republic (República Dominicana)',
    iso2: 'do',
    dial: '1',
    format: '+.(...)...-....',
  },
  ec: {
    name: 'Ecuador',
    iso2: 'ec',
    dial: '593',
    format: '+...-.-...-....',
  },
  eg: {
    name: 'Egypt (‫مصر‬‎)',
    iso2: 'eg',
    dial: '20',
    format: '+..(...)...-....',
  },
  sv: {
    name: 'El Salvador',
    iso2: 'sv',
    dial: '503',
    format: '+... ....-....',
  },
  gq: {
    name: 'Equatorial Guinea (Guinea Ecuatorial)',
    iso2: 'gq',
    dial: '240',
    format: '+...-..-...-....',
  },
  er: {
    name: 'Eritrea',
    iso2: 'er',
    dial: '291',
    format: '+...-.-...-...',
  },
  ee: {
    name: 'Estonia (Eesti)',
    iso2: 'ee',
    dial: '372',
    format: '+...-...-....',
  },
  et: {
    name: 'Ethiopia',
    iso2: 'et',
    dial: '251',
    format: '+...-..-...-....',
  },
  fk: {
    name: 'Falkland Islands (Islas Malvinas)',
    iso2: 'fk',
    dial: '500',
    format: '+...-.....',
  },
  fo: {
    name: 'Faroe Islands (Føroyar)',
    iso2: 'fo',
    dial: '298',
    format: '+...-...-...',
  },
  fj: {
    name: 'Fiji',
    iso2: 'fj',
    dial: '679',
    format: '+...-..-.....',
  },
  fi: {
    name: 'Finland (Suomi)',
    iso2: 'fi',
    dial: '358',
    format: '+... .. ... .. ..',
  },
  fr: {
    name: 'France',
    iso2: 'fr',
    dial: '33',
    format: '+.. . .. .. .. ..',
  },
  gf: {
    name: 'French Guiana (Guyane française)',
    iso2: 'gf',
    dial: '594',
    format: '+...-.....-....',
  },
  pf: {
    name: 'French Polynesia (Polynésie française)',
    iso2: 'pf',
    dial: '689',
    format: '+...-..-..-..',
  },
  ga: {
    name: 'Gabon',
    iso2: 'ga',
    dial: '241',
    format: '+...-.-..-..-..',
  },
  gm: {
    name: 'Gambia',
    iso2: 'gm',
    dial: '220',
    format: '+...(...)..-..',
  },
  ge: {
    name: 'Georgia (საქართველო)',
    iso2: 'ge',
    dial: '995',
    format: '+...(...)...-...',
  },
  de: {
    name: 'Germany (Deutschland)',
    iso2: 'de',
    dial: '49',
    format: '+.. ... .......',
  },
  gh: {
    name: 'Ghana (Gaana)',
    iso2: 'gh',
    dial: '233',
    format: '+...(...)...-...',
  },
  gi: {
    name: 'Gibraltar',
    iso2: 'gi',
    dial: '350',
    format: '+...-...-.....',
  },
  gr: {
    name: 'Greece (Ελλάδα)',
    iso2: 'gr',
    dial: '30',
    format: '+..(...)...-....',
  },
  gl: {
    name: 'Greenland (Kalaallit Nunaat)',
    iso2: 'gl',
    dial: '299',
    format: '+...-..-..-..',
  },
  gd: {
    name: 'Grenada',
    iso2: 'gd',
    dial: '1473',
    format: '+.(...)...-....',
  },
  gp: {
    name: 'Guadeloupe',
    iso2: 'gp',
    dial: '590',
    format: '',
  },
  gu: {
    name: 'Guam',
    iso2: 'gu',
    dial: '1671',
    format: '+.(...)...-....',
  },
  gt: {
    name: 'Guatemala',
    iso2: 'gt',
    dial: '502',
    format: '+... ....-....',
  },
  gn: {
    name: 'Guinea (Guinée)',
    iso2: 'gn',
    dial: '224',
    format: '+...-..-...-...',
  },
  gw: {
    name: 'Guinea-Bissau (Guiné Bissau)',
    iso2: 'gw',
    dial: '245',
    format: '+...-.-......',
  },
  gy: {
    name: 'Guyana',
    iso2: 'gy',
    dial: '592',
    format: '+...-...-....',
  },
  ht: {
    name: 'Haiti',
    iso2: 'ht',
    dial: '509',
    format: '+... ....-....',
  },
  hn: {
    name: 'Honduras',
    iso2: 'hn',
    dial: '504',
    format: '+...-....-....',
  },
  hk: {
    name: 'Hong Kong (香港)',
    iso2: 'hk',
    dial: '852',
    format: '+... .... ....',
  },
  hu: {
    name: 'Hungary (Magyarország)',
    iso2: 'hu',
    dial: '36',
    format: '+..(...)...-...',
  },
  is: {
    name: 'Iceland (Ísland)',
    iso2: 'is',
    dial: '354',
    format: '+... ... ....',
  },
  in: {
    name: 'India (भारत)',
    iso2: 'in',
    dial: '91',
    format: '+.. .....-.....',
  },
  id: {
    name: 'Indonesia',
    iso2: 'id',
    dial: '62',
    format: '+..-..-...-..',
  },
  ir: {
    name: 'Iran (‫ایران‬‎)',
    iso2: 'ir',
    dial: '98',
    format: '+..(...)...-....',
  },
  iq: {
    name: 'Iraq (‫العراق‬‎)',
    iso2: 'iq',
    dial: '964',
    format: '+...(...)...-....',
  },
  ie: {
    name: 'Ireland',
    iso2: 'ie',
    dial: '353',
    format: '+... .. .......',
  },
  il: {
    name: 'Israel (‫ישראל‬‎)',
    iso2: 'il',
    dial: '972',
    format: '+...-.-...-....',
  },
  it: {
    name: 'Italy (Italia)',
    iso2: 'it',
    dial: '39',
    format: '+.. ... ......',
  },
  jm: {
    name: 'Jamaica',
    iso2: 'jm',
    dial: '1876',
    format: '+.(...)...-....',
  },
  jp: {
    name: 'Japan (日本)',
    iso2: 'jp',
    dial: '81',
    format: '+.. ... .. ....',
  },
  jo: {
    name: 'Jordan (‫الأردن‬‎)',
    iso2: 'jo',
    dial: '962',
    format: '+...-.-....-....',
  },
  kz: {
    name: 'Kazakhstan (Казахстан)',
    iso2: 'kz',
    dial: '7',
    format: '+. ... ...-..-..',
  },
  ke: {
    name: 'Kenya',
    iso2: 'ke',
    dial: '254',
    format: '+...-...-......',
  },
  ki: {
    name: 'Kiribati',
    iso2: 'ki',
    dial: '686',
    format: '+...-..-...',
  },
  kw: {
    name: 'Kuwait (‫الكويت‬‎)',
    iso2: 'kw',
    dial: '965',
    format: '+...-....-....',
  },
  kg: {
    name: 'Kyrgyzstan (Кыргызстан)',
    iso2: 'kg',
    dial: '996',
    format: '+...(...)...-...',
  },
  la: {
    name: 'Laos (ລາວ)',
    iso2: 'la',
    dial: '856',
    format: '+...-..-...-...',
  },
  lv: {
    name: 'Latvia (Latvija)',
    iso2: 'lv',
    dial: '371',
    format: '+...-..-...-...',
  },
  lb: {
    name: 'Lebanon (‫لبنان‬‎)',
    iso2: 'lb',
    dial: '961',
    format: '+...-.-...-...',
  },
  ls: {
    name: 'Lesotho',
    iso2: 'ls',
    dial: '266',
    format: '+...-.-...-....',
  },
  lr: {
    name: 'Liberia',
    iso2: 'lr',
    dial: '231',
    format: '+...-..-...-...',
  },
  ly: {
    name: 'Libya (‫ليبيا‬‎)',
    iso2: 'ly',
    dial: '218',
    format: '+...-..-...-...',
  },
  li: {
    name: 'Liechtenstein',
    iso2: 'li',
    dial: '423',
    format: '+...(...)...-....',
  },
  lt: {
    name: 'Lithuania (Lietuva)',
    iso2: 'lt',
    dial: '370',
    format: '+...(...)..-...',
  },
  lu: {
    name: 'Luxembourg',
    iso2: 'lu',
    dial: '352',
    format: '+...(...)...-...',
  },
  mo: {
    name: 'Macau (澳門)',
    iso2: 'mo',
    dial: '853',
    format: '+...-....-....',
  },
  mk: {
    name: 'Macedonia (FYROM) (Македонија)',
    iso2: 'mk',
    dial: '389',
    format: '+...-..-...-...',
  },
  mg: {
    name: 'Madagascar (Madagasikara)',
    iso2: 'mg',
    dial: '261',
    format: '+...-..-..-.....',
  },
  mw: {
    name: 'Malawi',
    iso2: 'mw',
    dial: '265',
    format: '+...-.-....-....',
  },
  my: {
    name: 'Malaysia',
    iso2: 'my',
    dial: '60',
    format: '+.. ..-....-....',
  },
  mv: {
    name: 'Maldives',
    iso2: 'mv',
    dial: '960',
    format: '+...-...-....',
  },
  ml: {
    name: 'Mali',
    iso2: 'ml',
    dial: '223',
    format: '+...-..-..-....',
  },
  mt: {
    name: 'Malta',
    iso2: 'mt',
    dial: '356',
    format: '+...-....-....',
  },
  mh: {
    name: 'Marshall Islands',
    iso2: 'mh',
    dial: '692',
    format: '+...-...-....',
  },
  mq: {
    name: 'Martinique',
    iso2: 'mq',
    dial: '596',
    format: '+...(...)..-..-..',
  },
  mr: {
    name: 'Mauritania (‫موريتانيا‬‎)',
    iso2: 'mr',
    dial: '222',
    format: '+...-..-..-....',
  },
  mu: {
    name: 'Mauritius (Moris)',
    iso2: 'mu',
    dial: '230',
    format: '+...-...-....',
  },
  mx: {
    name: 'Mexico (México)',
    iso2: 'mx',
    dial: '52',
    format: '+..-..-..-....',
  },
  fm: {
    name: 'Micronesia',
    iso2: 'fm',
    dial: '691',
    format: '+...-...-....',
  },
  md: {
    name: 'Moldova (Republica Moldova)',
    iso2: 'md',
    dial: '373',
    format: '+...-....-....',
  },
  mc: {
    name: 'Monaco',
    iso2: 'mc',
    dial: '377',
    format: '+...-..-...-...',
  },
  mn: {
    name: 'Mongolia (Монгол)',
    iso2: 'mn',
    dial: '976',
    format: '+...-..-..-....',
  },
  me: {
    name: 'Montenegro (Crna Gora)',
    iso2: 'me',
    dial: '382',
    format: '+...-..-...-...',
  },
  ms: {
    name: 'Montserrat',
    iso2: 'ms',
    dial: '1664',
    format: '+.(...)...-....',
  },
  ma: {
    name: 'Morocco (‫المغرب‬‎)',
    iso2: 'ma',
    dial: '212',
    format: '+...-..-....-...',
  },
  mz: {
    name: 'Mozambique (Moçambique)',
    iso2: 'mz',
    dial: '258',
    format: '+...-..-...-...',
  },
  mm: {
    name: 'Myanmar (Burma) (မြန်မာ)',
    iso2: 'mm',
    dial: '95',
    format: '+..-...-...',
  },
  na: {
    name: 'Namibia (Namibië)',
    iso2: 'na',
    dial: '264',
    format: '+...-..-...-....',
  },
  nr: {
    name: 'Nauru',
    iso2: 'nr',
    dial: '674',
    format: '+...-...-....',
  },
  np: {
    name: 'Nepal (नेपाल)',
    iso2: 'np',
    dial: '977',
    format: '+...-..-...-...',
  },
  nl: {
    name: 'Netherlands (Nederland)',
    iso2: 'nl',
    dial: '31',
    format: '+.. .. ........',
  },
  nc: {
    name: 'New Caledonia (Nouvelle-Calédonie)',
    iso2: 'nc',
    dial: '687',
    format: '+...-..-....',
  },
  nz: {
    name: 'New Zealand',
    iso2: 'nz',
    dial: '64',
    format: '+.. ...-...-....',
  },
  ni: {
    name: 'Nicaragua',
    iso2: 'ni',
    dial: '505',
    format: '+...-....-....',
  },
  ne: {
    name: 'Niger (Nijar)',
    iso2: 'ne',
    dial: '227',
    format: '+...-..-..-....',
  },
  ng: {
    name: 'Nigeria',
    iso2: 'ng',
    dial: '234',
    format: '+...-..-...-..',
  },
  nu: {
    name: 'Niue',
    iso2: 'nu',
    dial: '683',
    format: '+...-....',
  },
  nf: {
    name: 'Norfolk Island',
    iso2: 'nf',
    dial: '672',
    format: '+...-...-...',
  },
  kp: {
    name: 'North Korea (조선 민주주의 인민 공화국)',
    iso2: 'kp',
    dial: '850',
    format: '+...-...-...',
  },
  mp: {
    name: 'Northern Mariana Islands',
    iso2: 'mp',
    dial: '1670',
    format: '+.(...)...-....',
  },
  no: {
    name: 'Norway (Norge)',
    iso2: 'no',
    dial: '47',
    format: '+.. ... .. ...',
  },
  om: {
    name: 'Oman (‫عُمان‬‎)',
    iso2: 'om',
    dial: '968',
    format: '+...-..-...-...',
  },
  pk: {
    name: 'Pakistan (‫پاکستان‬‎)',
    iso2: 'pk',
    dial: '92',
    format: '+.. ...-.......',
  },
  pw: {
    name: 'Palau',
    iso2: 'pw',
    dial: '680',
    format: '+...-...-....',
  },
  ps: {
    name: 'Palestine (‫فلسطين‬‎)',
    iso2: 'ps',
    dial: '970',
    format: '+...-..-...-....',
  },
  pa: {
    name: 'Panama (Panamá)',
    iso2: 'pa',
    dial: '507',
    format: '+...-...-....',
  },
  pg: {
    name: 'Papua New Guinea',
    iso2: 'pg',
    dial: '675',
    format: '+...(...)..-...',
  },
  py: {
    name: 'Paraguay',
    iso2: 'py',
    dial: '595',
    format: '+...(...)...-...',
  },
  pe: {
    name: 'Peru (Perú)',
    iso2: 'pe',
    dial: '51',
    format: '+..(...)...-...',
  },
  ph: {
    name: 'Philippines',
    iso2: 'ph',
    dial: '63',
    format: '+.. ... ....',
  },
  pl: {
    name: 'Poland (Polska)',
    iso2: 'pl',
    dial: '48',
    format: '+.. ...-...-...',
  },
  pt: {
    name: 'Portugal',
    iso2: 'pt',
    dial: '351',
    format: '+...-..-...-....',
  },
  pr: {
    name: 'Puerto Rico',
    iso2: 'pr',
    dial: '1',
    format: '',
  },
  qa: {
    name: 'Qatar (‫قطر‬‎)',
    iso2: 'qa',
    dial: '974',
    format: '+...-....-....',
  },
  re: {
    name: 'Réunion (La Réunion)',
    iso2: 're',
    dial: '262',
    format: '+...-.....-....',
  },
  ro: {
    name: 'Romania (România)',
    iso2: 'ro',
    dial: '40',
    format: '+..-..-...-....',
  },
  ru: {
    name: 'Russia (Россия)',
    iso2: 'ru',
    dial: '7',
    format: '+. ... ...-..-..',
  },
  rw: {
    name: 'Rwanda',
    iso2: 'rw',
    dial: '250',
    format: '+...(...)...-...',
  },
  bl: {
    name: 'Saint Barthélemy (Saint-Barthélemy)',
    iso2: 'bl',
    dial: '590',
    format: '',
  },
  sh: {
    name: 'Saint Helena',
    iso2: 'sh',
    dial: '290',
    format: '',
  },
  kn: {
    name: 'Saint Kitts and Nevis',
    iso2: 'kn',
    dial: '1869',
    format: '+.(...)...-....',
  },
  lc: {
    name: 'Saint Lucia',
    iso2: 'lc',
    dial: '1758',
    format: '+.(...)...-....',
  },
  mf: {
    name: 'Saint Martin (Saint-Martin (partie française))',
    iso2: 'mf',
    dial: '590',
    format: '',
  },
  pm: {
    name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    iso2: 'pm',
    dial: '508',
    format: '',
  },
  vc: {
    name: 'Saint Vincent and the Grenadines',
    iso2: 'vc',
    dial: '1784',
    format: '+.(...)...-....',
  },
  ws: {
    name: 'Samoa',
    iso2: 'ws',
    dial: '685',
    format: '+...-..-....',
  },
  sm: {
    name: 'San Marino',
    iso2: 'sm',
    dial: '378',
    format: '+...-....-......',
  },
  st: {
    name: 'São Tomé and Príncipe (São Tomé e Príncipe)',
    iso2: 'st',
    dial: '239',
    format: '+...-..-.....',
  },
  sa: {
    name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    iso2: 'sa',
    dial: '966',
    format: '+...-.-...-....',
  },
  sn: {
    name: 'Senegal (Sénégal)',
    iso2: 'sn',
    dial: '221',
    format: '+...-..-...-....',
  },
  rs: {
    name: 'Serbia (Србија)',
    iso2: 'rs',
    dial: '381',
    format: '+...-..-...-....',
  },
  sc: {
    name: 'Seychelles',
    iso2: 'sc',
    dial: '248',
    format: '+...-.-...-...',
  },
  sl: {
    name: 'Sierra Leone',
    iso2: 'sl',
    dial: '232',
    format: '+...-..-......',
  },
  sg: {
    name: 'Singapore',
    iso2: 'sg',
    dial: '65',
    format: '+.. ....-....',
  },
  sx: {
    name: 'Sint Maarten',
    iso2: 'sx',
    dial: '1721',
    format: '+.(...)...-....',
  },
  sk: {
    name: 'Slovakia (Slovensko)',
    iso2: 'sk',
    dial: '421',
    format: '+...(...)...-...',
  },
  si: {
    name: 'Slovenia (Slovenija)',
    iso2: 'si',
    dial: '386',
    format: '+...-..-...-...',
  },
  sb: {
    name: 'Solomon Islands',
    iso2: 'sb',
    dial: '677',
    format: '+...-.....',
  },
  so: {
    name: 'Somalia (Soomaaliya)',
    iso2: 'so',
    dial: '252',
    format: '+...-.-...-...',
  },
  za: {
    name: 'South Africa',
    iso2: 'za',
    dial: '27',
    format: '+..-..-...-....',
  },
  kr: {
    name: 'South Korea (대한민국)',
    iso2: 'kr',
    dial: '82',
    format: '+..-..-...-....',
  },
  ss: {
    name: 'South Sudan (‫جنوب السودان‬‎)',
    iso2: 'ss',
    dial: '211',
    format: '+...-..-...-....',
  },
  es: {
    name: 'Spain (España)',
    iso2: 'es',
    dial: '34',
    format: '+.. ... ... ...',
  },
  lk: {
    name: 'Sri Lanka (ශ්‍රී ලංකාව)',
    iso2: 'lk',
    dial: '94',
    format: '+..-..-...-....',
  },
  sd: {
    name: 'Sudan (‫السودان‬‎)',
    iso2: 'sd',
    dial: '249',
    format: '+...-..-...-....',
  },
  sr: {
    name: 'Suriname',
    iso2: 'sr',
    dial: '597',
    format: '+...-...-...',
  },
  sz: {
    name: 'Swaziland',
    iso2: 'sz',
    dial: '268',
    format: '+...-..-..-....',
  },
  se: {
    name: 'Sweden (Sverige)',
    iso2: 'se',
    dial: '46',
    format: '+.. .. ... .. ..',
  },
  ch: {
    name: 'Switzerland (Schweiz)',
    iso2: 'ch',
    dial: '41',
    format: '+.. .. ... .. ..',
  },
  sy: {
    name: 'Syria (‫سوريا‬‎)',
    iso2: 'sy',
    dial: '963',
    format: '+...-..-....-...',
  },
  tw: {
    name: 'Taiwan (台灣)',
    iso2: 'tw',
    dial: '886',
    format: '+...-....-....',
  },
  tj: {
    name: 'Tajikistan',
    iso2: 'tj',
    dial: '992',
    format: '+...-..-...-....',
  },
  tz: {
    name: 'Tanzania',
    iso2: 'tz',
    dial: '255',
    format: '+...-..-...-....',
  },
  th: {
    name: 'Thailand (ไทย)',
    iso2: 'th',
    dial: '66',
    format: '+..-..-...-...',
  },
  tl: {
    name: 'Timor-Leste',
    iso2: 'tl',
    dial: '670',
    format: '+...-...-....',
  },
  tg: {
    name: 'Togo',
    iso2: 'tg',
    dial: '228',
    format: '+...-..-...-...',
  },
  tk: {
    name: 'Tokelau',
    iso2: 'tk',
    dial: '690',
    format: '+...-....',
  },
  to: {
    name: 'Tonga',
    iso2: 'to',
    dial: '676',
    format: '+...-.....',
  },
  tt: {
    name: 'Trinidad and Tobago',
    iso2: 'tt',
    dial: '1868',
    format: '+.(...)...-....',
  },
  tn: {
    name: 'Tunisia (‫تونس‬‎)',
    iso2: 'tn',
    dial: '216',
    format: '+...-..-...-...',
  },
  tr: {
    name: 'Turkey (Türkiye)',
    iso2: 'tr',
    dial: '90',
    format: '+.. ... ... .. ..',
  },
  tm: {
    name: 'Turkmenistan',
    iso2: 'tm',
    dial: '993',
    format: '+...-.-...-....',
  },
  tc: {
    name: 'Turks and Caicos Islands',
    iso2: 'tc',
    dial: '1649',
    format: '+.(...)...-....',
  },
  tv: {
    name: 'Tuvalu',
    iso2: 'tv',
    dial: '688',
    format: '+...-.....',
  },
  vi: {
    name: 'U.S. Virgin Islands',
    iso2: 'vi',
    dial: '1340',
    format: '+.(...)...-....',
  },
  ug: {
    name: 'Uganda',
    iso2: 'ug',
    dial: '256',
    format: '+...(...)...-...',
  },
  ua: {
    name: 'Ukraine (Україна)',
    iso2: 'ua',
    dial: '380',
    format: '+...(..)...-..-..',
  },
  ae: {
    name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    iso2: 'ae',
    dial: '971',
    format: '+...-.-...-....',
  },
  gb: {
    name: 'United Kingdom',
    iso2: 'gb',
    dial: '44',
    format: '+.. .... ......',
  },
  us: {
    name: 'United States',
    iso2: 'us',
    dial: '1',
    format: '+. (...) ...-....',
  },
  uy: {
    name: 'Uruguay',
    iso2: 'uy',
    dial: '598',
    format: '+...-.-...-..-..',
  },
  uz: {
    name: 'Uzbekistan (Oʻzbekiston)',
    iso2: 'uz',
    dial: '998',
    format: '+...-..-...-....',
  },
  vu: {
    name: 'Vanuatu',
    iso2: 'vu',
    dial: '678',
    format: '+...-.....',
  },
  va: {
    name: 'Vatican City (Città del Vaticano)',
    iso2: 'va',
    dial: '39',
    format: '+.. .. .... ....',
  },
  ve: {
    name: 'Venezuela',
    iso2: 've',
    dial: '58',
    format: '+..(...)...-....',
  },
  vn: {
    name: 'Vietnam (Việt Nam)',
    iso2: 'vn',
    dial: '84',
    format: '+..-..-....-...',
  },
  wf: {
    name: 'Wallis and Futuna',
    iso2: 'wf',
    dial: '681',
    format: '+...-..-....',
  },
  ye: {
    name: 'Yemen (‫اليمن‬‎)',
    iso2: 'ye',
    dial: '967',
    format: '+...-.-...-...',
  },
  zm: {
    name: 'Zambia',
    iso2: 'zm',
    dial: '260',
    format: '+...-..-...-....',
  },
  zw: {
    name: 'Zimbabwe',
    iso2: 'zw',
    dial: '263',
    format: '+...-.-......',
  },
};

const iso2Codes = [
  'af',
  'al',
  'dz',
  'as',
  'ad',
  'ao',
  'ai',
  'ag',
  'ar',
  'am',
  'aw',
  'au',
  'at',
  'az',
  'bs',
  'bh',
  'bd',
  'bb',
  'by',
  'be',
  'bz',
  'bj',
  'bm',
  'bt',
  'bo',
  'ba',
  'bw',
  'br',
  'io',
  'vg',
  'bn',
  'bg',
  'bf',
  'bi',
  'kh',
  'cm',
  'ca',
  'cv',
  'bq',
  'ky',
  'cf',
  'td',
  'cl',
  'cn',
  'co',
  'km',
  'cd',
  'cg',
  'ck',
  'cr',
  'ci',
  'hr',
  'cu',
  'cw',
  'cy',
  'cz',
  'dk',
  'dj',
  'dm',
  'do',
  'ec',
  'eg',
  'sv',
  'gq',
  'er',
  'ee',
  'et',
  'fk',
  'fo',
  'fj',
  'fi',
  'fr',
  'gf',
  'pf',
  'ga',
  'gm',
  'ge',
  'de',
  'gh',
  'gi',
  'gr',
  'gl',
  'gd',
  'gp',
  'gu',
  'gt',
  'gn',
  'gw',
  'gy',
  'ht',
  'hn',
  'hk',
  'hu',
  'is',
  'in',
  'id',
  'ir',
  'iq',
  'ie',
  'il',
  'it',
  'jm',
  'jp',
  'jo',
  'kz',
  'ke',
  'ki',
  'kw',
  'kg',
  'la',
  'lv',
  'lb',
  'ls',
  'lr',
  'ly',
  'li',
  'lt',
  'lu',
  'mo',
  'mk',
  'mg',
  'mw',
  'my',
  'mv',
  'ml',
  'mt',
  'mh',
  'mq',
  'mr',
  'mu',
  'mx',
  'fm',
  'md',
  'mc',
  'mn',
  'me',
  'ms',
  'ma',
  'mz',
  'mm',
  'na',
  'nr',
  'np',
  'nl',
  'nc',
  'nz',
  'ni',
  'ne',
  'ng',
  'nu',
  'nf',
  'kp',
  'mp',
  'no',
  'om',
  'pk',
  'pw',
  'ps',
  'pa',
  'pg',
  'py',
  'pe',
  'ph',
  'pl',
  'pt',
  'pr',
  'qa',
  're',
  'ro',
  'ru',
  'rw',
  'bl',
  'sh',
  'kn',
  'lc',
  'mf',
  'pm',
  'vc',
  'ws',
  'sm',
  'st',
  'sa',
  'sn',
  'rs',
  'sc',
  'sl',
  'sg',
  'sx',
  'sk',
  'si',
  'sb',
  'so',
  'za',
  'kr',
  'ss',
  'es',
  'lk',
  'sd',
  'sr',
  'sz',
  'se',
  'ch',
  'sy',
  'tw',
  'tj',
  'tz',
  'th',
  'tl',
  'tg',
  'tk',
  'to',
  'tt',
  'tn',
  'tr',
  'tm',
  'tc',
  'tv',
  'vi',
  'ug',
  'ua',
  'ae',
  'gb',
  'us',
  'uy',
  'uz',
  'vu',
  'va',
  've',
  'vn',
  'wf',
  'ye',
  'zm',
  'zw',
];

module.exports = {
  getCountries,
  getCountry,
  countries,
  iso2Codes,
};
