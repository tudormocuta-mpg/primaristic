export interface Profesor {
  id: string;
  nume: string;
  activ: boolean;
  locatie: string;
  imagine: string;
}

// Demo placeholder images (AI-generated via Google Stitch)
const demoImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAG0G6BgqShN_w6s4UsaHtkFC0a0oOqG7lMboH0NRmxPHZbbEi5CjyKFu2s-hIScVvQS35xOUYdpV_MMc6Rk2ZsN5Jj_C7ZSODoSCA_rceVUz0cn0sF1_7n00KQgJEJGQ410B1WnShM67TEdVNQcTaHPjPDVBfdkKUbMSTttO6xY6nrc9ohdYwN60erBeabmXrbSOqEMEhQ81vNpmkSjCB8rbjeaLnNG_qtQYfSVMk7bT_34GOL9-9bjuHwG3LXI9nbmZ8n361_WA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGrSc3WmGvhbcizP8sg56OSa_GhCqDg4Fm2rzS4bNCE8yMcUHfp72hFKrdgfSvNJADB8RZseR7Ajf0Z99_cY1cNPhj57JOOOm4uOAmiX1vMFZRU0sXCOR_FOpQx2naPiezwjHCYhjEv_yduJOy8vYvFBJA-j4KDFBFOKO_z6H_kyZVXDERrN-qE4FuCdtiytJFx8c3CZ6ngeKP6FBwOkF40HYGoN34nEmv5WqO4ah_XiNIpwaEJKM59tBYwsl3fXsK1xyd5NmgBg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCFffVoAROv0Qhq0y6nKvt7FxGcvQgTvIDWkFtpyUetDThMhRxbs0SqlcFYJywURdKPdw_Vlh2w0KpwXMJV0aQdqdbmWCPhWuqemAmvvxE1PWYu2_aZyAKLQQd4PCCUbq-1WFn2gjF_93DHmUTKlxh5-w1m9uqHPJLN6m-iRRVqn_D8ec_6b7chXopl_ok94-NFUfprJn97yWpT-b2hRDTAAkkj7AZpOx2pAMyppXwqSDspjKqIPkrqUUSOX0mjGIbfiqR56uxw-g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTDTuaAz4_UIllXRPVPsAz09mNNuPjafiX6HRLLNWXji0QRQBY02Sqjs3DrLacNW_GJ6oN4nJcR4F7wo7ihOtBoFKSpi5lO2Sq5whKe_YIOo_dUfK10tn3-OsvcLhQ3axgdBsHH0eaFSy4XSqSkFrjCaNxf2yHpTsVxeZ41sRkkk-S7oCFtJTt4VysJx79ilrCkrZbdf9TKpdAuqKyNoFLzWduWJb63B3ZfLFtyZqRWYVJ0raDhYLuSORV5QMvnll74DVQGpoXZg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZkCGyf9NiAMecBSIoY745c5vjBvvofvZ3zFMwXtTNNXAN_kkEbxgZJOc3KnrzbuWXObtuY1k2BKDW_f5ba7s0eg99P4t_Slgh9UG5NGdrtK5r-Qki6_sGm5HdHVT35rwfBKEG4L61K6oP3Br7VfSysJ9j6SacN7cbOG2DsQG7UAxn-FsP5xdRGGbAOECgnM3O92StkFIJxq7eoAedKmCFPHsNOwg4StniPg6-8udsZi3550PVCPQBlhq7PXY0VoHCHtohP3LNrg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGb4v4ZrwED-QxL3pil_7u3jSdVhD60vRrK7t9zJHHwljLhUXi0CDXgpTsygfz8aeQpGCG1mbL6hHzCeT7gERVrOWE5bp65LdGA5PG0WhDysayEdqjpeeD2YlxfN2905lxkzrNCyIP7BC2NFamKVhyMxTuY5D5001JZVBRdGjr1Kg1twhgMZinlyS07VsI8mSkFLN1Z0Qlt5gv1IudIdumTtnK7ljt6q38FYX60hwAVBZvzK_tyBsiKhDF7poHEH4N9iTRiClfag",
];

export const profesori: Profesor[] = [
  // Profesori în Activitate
  {
    id: "1",
    nume: "Steluța Brebeanu",
    activ: true,
    locatie: "București",
    imagine: demoImages[0],
  },
  {
    id: "2",
    nume: "Alina Dabija",
    activ: true,
    locatie: "București",
    imagine: demoImages[1],
  },
  {
    id: "3",
    nume: "Ruxandra Oana Drăghicescu",
    activ: true,
    locatie: "București",
    imagine: demoImages[2],
  },
  {
    id: "4",
    nume: "Luiza Rodica Dumitrescu",
    activ: true,
    locatie: "București",
    imagine: demoImages[3],
  },
  {
    id: "5",
    nume: "Rodica Lesovici",
    activ: true,
    locatie: "București",
    imagine: demoImages[4],
  },
  {
    id: "6",
    nume: "Cristina Gabriela Petrescu",
    activ: true,
    locatie: "București",
    imagine: demoImages[5],
  },
  {
    id: "7",
    nume: "Dr. Carmen Maria Sturza",
    activ: true,
    locatie: "București",
    imagine: demoImages[0],
  },
  {
    id: "8",
    nume: "Rodica Mariana Țucra",
    activ: true,
    locatie: "București",
    imagine: demoImages[1],
  },
  // Comunitatea de Absolvenți
  {
    id: "9",
    nume: "Dr. Loredana Manuela Cristescu",
    activ: false,
    locatie: "Cluj-Napoca",
    imagine: demoImages[2],
  },
  {
    id: "10",
    nume: "Dr. Iuliana Ștefania Tăbăraș",
    activ: false,
    locatie: "Timișoara",
    imagine: demoImages[3],
  },
  {
    id: "11",
    nume: "Magdalena Floriana Cozorici",
    activ: false,
    locatie: "Iași",
    imagine: demoImages[4],
  },
  {
    id: "12",
    nume: "Felicia Alexandra Georgescu",
    activ: false,
    locatie: "Brașov",
    imagine: demoImages[5],
  },
  {
    id: "13",
    nume: "Ionela Rodica Kokturk",
    activ: false,
    locatie: "București",
    imagine: demoImages[0],
  },
  {
    id: "14",
    nume: "Maria Alina Manta",
    activ: false,
    locatie: "Cluj-Napoca",
    imagine: demoImages[1],
  },
  {
    id: "15",
    nume: "Sînziana Tatiana Perez-Matauschek",
    activ: false,
    locatie: "Timișoara",
    imagine: demoImages[2],
  },
  {
    id: "16",
    nume: "Cristina Daniela Alexandru",
    activ: false,
    locatie: "București",
    imagine: demoImages[3],
  },
  {
    id: "17",
    nume: "Georgeta Kucukarikan",
    activ: false,
    locatie: "Iași",
    imagine: demoImages[4],
  },
  {
    id: "18",
    nume: "Adriana Iovița Mihai",
    activ: false,
    locatie: "Brașov",
    imagine: demoImages[5],
  },
  {
    id: "19",
    nume: "Livia Mihai",
    activ: false,
    locatie: "București",
    imagine: demoImages[0],
  },
];
