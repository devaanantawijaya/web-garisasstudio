export const CATEGORIES = [
  "ALL",
  "HOUSE",
  "VILLA",
  "INTERIOR",
  "COFFE SHOP",
  "RESTAURANT",
  "COMMERCIAL",
  "1 LANTAI",
  "2 LANTAI",
  "CLASSIC",
  "MODERN",
  "MINIMALIS",
  "TROPIS",
];

import kayana1 from "../assets/kanaya-house/kanaya (1).jpg";
import kayana2 from "../assets/kanaya-house/kanaya (2).jpg";
import kayana3 from "../assets/kanaya-house/kanaya (3).jpg";
import kayana4 from "../assets/kanaya-house/kanaya (4).jpg";
import kayana5 from "../assets/kanaya-house/kanaya (5).jpg";
import hb1 from "../assets/hunian-batubulan/hunian-batubulan (1).jpg";
import hb2 from "../assets/hunian-batubulan/hunian-batubulan (2).jpg";
import hb3 from "../assets/hunian-batubulan/hunian-batubulan (3).jpg";
import hb4 from "../assets/hunian-batubulan/hunian-batubulan (4).jpg";
import hb5 from "../assets/hunian-batubulan/hunian-batubulan (5).jpg";
import cs1 from "../assets/coffe-shop/coffe (1).jpg";
import cs2 from "../assets/coffe-shop/coffe (2).jpg";
import cs3 from "../assets/coffe-shop/coffe (3).jpg";
import cs4 from "../assets/coffe-shop/coffe (4).jpg";
import cs5 from "../assets/coffe-shop/coffe (5).jpg";
import v1 from "../assets/villa-seminyak/villa (1).jpg";
import v2 from "../assets/villa-seminyak/villa (2).jpg";
import v3 from "../assets/villa-seminyak/villa (3).jpg";
import v4 from "../assets/villa-seminyak/villa (4).jpg";
import c1 from "../assets/toko/tokos (1).jpg";
import c2 from "../assets/toko/tokos (2).jpg";
import rc1 from "../assets/rumah-classic/rumah classic (1).jpg";
import rc2 from "../assets/rumah-classic/rumah classic (2).jpg";

export const PROJECTS = [
  {
    id: "KAYANA-House",
    slug: "KAYANA-House",
    title: "KAYANA House",
    subtitle: "IVAN | HOUSE",
    categoryTag: "RUMAH TINGGAL MODERN TROPIS KAYU",
    categories: ["ALL", "HOUSE", "MODERN", "2 LANTAI"],
    location: "Denpasar, Bali",
    year: "2024",
    type: "Rumah Tinggal Modern",
    buildingArea: "370 m²",
    landArea: "220 m²",
    category: "Modern Wood",
    client: "Ivan Tanjaya",
    heroImage: kayana1,
    gallery: [kayana1, kayana2, kayana3, kayana4, kayana5],
    description:
      "KAYANA-House merupakan perwujudan rumah tinggal modern tropis dengan dominasi material kayu jati solid dan ulin kalimantan. Menggabungkan fasad kisi-kisi kayu vertikal dengan ruang keluarga open-plan berpemandangan kolam dan taman dalam, hunian ini menghadirkan ketenangan termal dan suasana hangat di setiap sudutnya.",
    conceptPoints: [
      "Fasad kisi-kisi kayu ulin vertikal untuk pembiasan sinar matahari & privasi keluarga",
      "Ruang keluarga berpenerangan alami dengan plafon exposed teak wood setinggi 6 meter",
      "Kombinasi material lokal: Batu paras abu Bali, lantai kayu ulin, dan marmer travertin",
      "Sirkulasi ventilasi silang aktif yang menyejukkan seluruh ruang hunian",
    ],
    features: [
      "Private Timber Lagoon Pool",
      "Master Suite dengan Balkon Kayu Jati",
      "Kitchen Island Custom Teak Millwork",
      "Double-height Timber Living Pavilion",
      "Courtyard Zen Garden dengan Deck Kayu",
    ],
    isFeaturedHero: true,
    isChoice: true,
  },
  {
    id: "hunian-batubulan",
    slug: "hunian-batubulan",
    title: "Hunian Batubulan",
    subtitle: "BATUBULAN | HOUSE",
    categoryTag: "RUMAH TINGGAL MINIMALIS",
    categories: ["ALL", "HOUSE", "MINIMALIS", "MODERN", "1 LANTAI"],
    location: "Batubulan, Gianyar, Bali",
    year: "2021",
    type: "Hunian Minimalis Modern",
    buildingArea: "96 m²",
    landArea: "100 m²",
    category: "Modern Batu Alam",
    client: "-",
    heroImage: hb1,
    gallery: [hb1, hb2, hb3, hb4, hb5],
    description:
      "Terletak di kawasan Batubulan, Hunian Batubulan memadukan struktur modern minimalis warna hangat dengan dinding batu alamnya yang menyatu dengan cat putih dan kayu",
    conceptPoints: [
      "Open fasad dengan dinding batu alam andesit berpadu panel kayu vertikal",
      "Plafon kayu warm oak dengan pencahayaan cove light tersembunyi",
      "Dinding batu alam andesit berpadu panel kayu vertikal",
    ],
    features: [
      "carport open dengan alas batu alam andesit",
      "Outdoor Wooden Lounge Pavilion",
      "Open-plan Teak Chef Kitchen",
      "Sunken Living Room dengan Lantai Kayu",
    ],
    isFeaturedHero: true,
    isChoice: true,
  },
  {
    id: "Pandemi-coffee",
    slug: "pandemi-coffee",
    title: "Pandemi Coffee",
    subtitle: "ANDAKASA | COFFE SHOP",
    categoryTag: "COFFE SHOP KAYU ALAMI",
    categories: ["ALL", "COFFE SHOP", "1 LANTAI", "MINIMALIS", "INTERIOR"],
    location: "Andakasa, Bali",
    year: "2021",
    type: "Coffe Shop Minimalis",
    buildingArea: "96 m²",
    landArea: "100 m²",
    category: "Coffe Shop",
    client: "-",
    heroImage: cs1,
    gallery: [cs1, cs2, cs3, cs4, cs5],
    description:
      "Coffee shop dengan karakter hangat dan modern, memadukan material kayu alami, beton ekspos, dan pencahayaan temaram untuk menciptakan suasana nyaman bagi pengunjung untuk menikmati kopi, bekerja, maupun bersantai.",
    conceptPoints: [
      "Fasad dengan kombinasi kayu alami dan material beton yang memberikan karakter modern",
      "Area duduk dirancang nyaman dengan pencahayaan hangat dan suasana yang intim",
      "Penggunaan elemen kayu pada interior untuk menciptakan kesan natural dan welcoming",
    ],
    features: [
      "Warm Wooden Interior",
      "Custom Coffee Bar",
      "Outdoor Seating Area",
      "Ambient Warm Lighting",
    ],
    isFeaturedHero: true,
    isChoice: true,
  },
  {
    id: "villa-seminyak",
    slug: "villa-seminyak",
    title: "Villa Seminyak",
    subtitle: "SEMINYAK | VILLA",
    categoryTag: "Villa Tropis Modern",
    categories: ["ALL", "VILLA", "TROPIS", "MODERN", "2 LANTAI"],
    location: "Seminyak, Bali",
    year: "2021",
    type: "Villa Tropis Modern",
    buildingArea: "210 m²",
    landArea: "210 m²",
    category: "Villa Modern Tropis",
    client: "-",
    heroImage: v1,
    gallery: [v1, v2, v3, v4],
    description:
      "Villa modern tropis yang dirancang menyatu dengan lingkungan melalui bukaan lebar, material alami, dan area outdoor yang mengalir dari ruang dalam. Kolam renang menjadi pusat orientasi ruang, menciptakan suasana tenang, sejuk, dan privat.",

    conceptPoints: [
      "Bukaan kaca lebar untuk memaksimalkan pencahayaan dan sirkulasi udara alami",
      "Perpaduan material kayu, batu alam, dan beton dengan karakter modern tropis",
      "Area kolam dan taman sebagai ruang transisi yang menyatukan area indoor dan outdoor",
    ],

    features: [
      "Private Swimming Pool",
      "Tropical Outdoor Living",
      "Natural Stone & Timber",
      "Floor-to-Ceiling Glass",
    ],
    isFeaturedHero: true,
    isChoice: true,
  },
  {
    id: "ubud-cliff-haven",
    slug: "ubud-cliff-haven",
    title: "Ubud Wood Haven",
    subtitle: "SAYAN, UBUD | FOREST HOME",
    categoryTag: "FOREST RETREAT RESIDENCE",
    categories: ["ALL", "RESIDENSIAL", "VILA", "RESORT"],
    location: "Sayan, Ubud, Bali",
    year: "2025",
    type: "Hillside Timber Estate",
    buildingArea: "920 m²",
    landArea: "2100 m²",
    category: "Forest Residence",
    client: "Sutanto Family Trust",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "Dibangun menjorok ke lembah hutan Ubud, hunian tinggal ini mengadopsi struktur kantilever bertingkat berlapis kayu jati gelap dengan bukaan kaca penuh dari lantai hingga langit-langit.",
    conceptPoints: [
      "Struktur kantilever kayu jati & baja yang menyatu dengan kontur lereng alami",
      "Kaca performa tinggi Low-E berpadu panel kayu akustik interior",
      "Material kayu daur ulang berkarakter kuat untuk meja dan lantai utama",
    ],
    features: [
      "Cantilevered Wooden Balconies",
      "Infinity Valley Deck",
      "Private Timber Library & Studio",
      "Teak Wine & Dining Lounge",
    ],
    isFeaturedHero: true,
    isChoice: true,
  },
  {
    id: "toko-3-lantai",
    slug: "toko-3-lantai",
    title: "Toko 3 Lantai",
    subtitle: "TEGALALANG | COMMERCIAL SPACE",
    categoryTag: "RUMAH TINGGAL KAYU MODERN",
    categories: [
      "ALL",
      "COMMERCIAL",
      "INTERIOR",
      "VILA",
      "MODERN",
      "MINIMALIS",
      "TROPIS",
    ],
    location: "Taro Tegalalang, Gianyar, Bali",
    year: "2021",
    type: "COMMERCIAL Home",
    buildingArea: "175 m²",
    landArea: "175 m²",
    category: "Villa Modern",
    client: "Maya",
    heroImage: c1,
    gallery: [c1, c2],
    description:
      "Konsep toko modern yang mengutamakan tampilan produk dan kenyamanan pengunjung melalui fasad terbuka, ruang display yang tertata, serta pencahayaan yang menonjolkan karakter interior.",

    conceptPoints: [
      "Fasad terbuka dengan bukaan kaca lebar untuk memperkuat visibilitas produk dari area luar",
      "Penataan area display yang terorganisir untuk menciptakan alur sirkulasi pengunjung yang nyaman",
      "Perpaduan material kayu, beton, dan pencahayaan hangat untuk menghadirkan suasana modern dan welcoming",
    ],

    features: [
      "Full Glass Storefront",
      "Custom Product Display",
      "Built-in Wooden Shelving",
      "Ambient Store Lighting",
    ],
    isFeaturedHero: false,
    isChoice: true,
  },
  {
    id: "padma-lounge-interior",
    slug: "padma-lounge-interior",
    title: "Padma Living & Wooden Interior",
    subtitle: "SANUR, BALI | INTERIOR DESIGN",
    categoryTag: "BESPOKE TIMBER INTERIOR CRAFT",
    categories: ["INTERIOR", "INTERIOR", "ALL", "RESIDENSIAL"],
    location: "Sanur, Bali",
    year: "2023",
    type: "Interior & Custom Woodwork",
    buildingArea: "420 m²",
    landArea: "-",
    category: "Interior Design",
    client: "Dr. Hendra Wijaya",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "INTERIOR rumah tinggal mewah yang mengedepankan kehangatan serat kayu jati tua, sofa kustom linen netral, panel dinding kisi kayu akustik, dan kabinet dapur kayu tanpa sambungan baut kasat mata.",
    conceptPoints: [
      "Palet warna earth-tone yang menenangkan (oat, warm teak, stone gray)",
      "Pencahayaan tersembunyi bergradasi temperatur 2700K (warm glow)",
      "Furnitur kustom ergonomis dari kayu jati solid tersertifikasi",
    ],
    features: [
      "Custom Teak Wood Kitchen Island",
      "Artisan Brass Light Fixtures",
      "Acoustic Wooden Wall Paneling",
      "Smart Climate Automation",
    ],
    isFeaturedHero: false,
    isChoice: true,
  },
  {
    id: "rumah-classic",
    slug: "rumah-classic",
    title: "rumah classic",
    subtitle: "MOJOKERTO | HUNIAN",
    categoryTag: "RUMAH TINGGAL 2 LANTAI",
    categories: ["ALL", "2 LANTAI", "MODERN"],
    location: "Mojokerto, Jawa Timur",
    year: "2024",
    type: "House Classic",
    buildingArea: "120 m²",
    landArea: "110 m²",
    category: "Luxury Residence",
    client: "Samudra Group",
    heroImage: rc1,
    gallery: [rc1, rc2],
    description:
      "Hunian bergaya classic yang dirancang dengan proporsi ruang yang elegan, detail arsitektur yang timeless, material natural, dan suasana hangat yang memberikan kesan mewah namun tetap nyaman.",

    conceptPoints: [
      "Proporsi fasad dan bukaan yang simetris untuk memperkuat karakter arsitektur classic",
      "Penggunaan material natural dengan detail molding dan ornamen elegan sebagai elemen utama",
      "Palet warna netral dan pencahayaan hangat untuk menciptakan suasana rumah yang refined dan timeless",
    ],

    features: [
      "Classic Architectural Facade",
      "Custom Classic Interior Details",
      "Natural Stone & Wood Finishes",
      "Warm Ambient Lighting",
    ],
    isFeaturedHero: false,
    isChoice: true,
  },
  {
    id: "bambu-nirwana-boutique-hotel",
    slug: "bambu-nirwana-boutique-hotel",
    title: "Nirwana Timber & Bamboo Retreat",
    subtitle: "TABANAN, BALI | ECO RETREAT",
    categoryTag: "SUSTAINABLE TIMBER ARCHITECTURE",
    categories: ["BOUTIQUE HOTEL", "RESORT", "ALL", "PROYEK SELESAI"],
    location: "Jatiluwih, Tabanan",
    year: "2024",
    type: "Eco Retreat Estate",
    buildingArea: "1850 m²",
    landArea: "5600 m²",
    category: "Eco Living Residence",
    client: "Nirwana Eco Living",
    heroImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "Perpaduan arsitektur ramah lingkungan berbahan kayu jati daur ulang dan rekayasa bambu lengkung modern, berdiri harmonis di tengah terasering sawah Jatiluwih.",
    conceptPoints: [
      "Struktur rangka kayu ulin dan bambu petung tahan cuaca tropis",
      "Sistem pemanenan air hujan terintegrasi dengan dek kayu kolam alami",
      "Ventilasi alamiah 100% dengan atap peneduh kayu sirap tradisional",
    ],
    features: [
      "Timber Pavilion Dining",
      "Natural Spring Decking Bath",
      "Panoramic Terrace Wooden Walkway",
      "Zero Carbon Design",
    ],
    isFeaturedHero: false,
    isChoice: true,
  },
  {
    id: "canggu-modern-loft-apartment",
    slug: "canggu-modern-loft-apartment",
    title: "Canggu Timber Lofts",
    subtitle: "BERAWA, CANGGU | RESIDENCE",
    categoryTag: "URBAN WOODEN LOFT RESIDENCE",
    categories: ["APARTEMEN", "RESIDENSIAL", "PROYEK SELESAI"],
    location: "Pantai Berawa, Canggu",
    year: "2023",
    type: "Loft Residence",
    buildingArea: "1400 m²",
    landArea: "950 m²",
    category: "Loft Residence",
    client: "Berawa Capital Partners",
    heroImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "Unit hunian loft dua lantai dengan mezanin kayu jati dan dinding kaca ganda di Berawa, dirancang untuk kenyamanan tinggal modern yang hangat dan fungsional.",
    conceptPoints: [
      "Tangga gantung kantilever kayu jati solid dengan railing ramping",
      "Dapur kompak dengan kabinet kayu natural dan top table granit hitam",
      "Jendela tinggi berpadu kisi kayu penahan panas matahari barat",
    ],
    features: [
      "Duplex High Ceilings dengan Mezanin Kayu",
      "Rooftop Wooden Lounge",
      "Smart Lock Teak Doors",
      "Courtyard Garden View",
    ],
    isFeaturedHero: false,
    isChoice: false,
  },
  {
    id: "villa-alila-interior-suite",
    slug: "villa-alila-interior-suite",
    title: "Alila Master Suite & Living",
    subtitle: "NUSA DUA | INTERIOR DESIGN",
    categoryTag: "WARM MINIMALIST WOODEN SUITE",
    categories: ["INTERIOR", "INTERIOR", "RESIDENSIAL"],
    location: "Nusa Dua, Bali",
    year: "2024",
    type: "Interior Architecture",
    buildingArea: "360 m²",
    landArea: "-",
    category: "Interior Design",
    client: "Keluarga Danumiharja",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "Penataan interior suite utama rumah tinggal yang menghadirkan ketenangan zen dengan perpaduan lantai microcement hangat, panel dinding kayu jati bermotif vertikal, dan bathtub freestanding dari batu monolit.",
    conceptPoints: [
      "Panel dinding kisi kayu jati bermotif vertikal yang menyembunyikan pintu lemari",
      "Kamar mandi terbuka semi-alfresco berlantai dek kayu ulin",
      "Pencahayaan linier warm white yang tersembunyi di balik kisi kayu plafon",
    ],
    features: [
      "Monolith Stone Bathtub",
      "Walk-in Teak Wardrobe",
      "Acoustic Slatted Headboard",
      "Integrated Ambient Warm Audio",
    ],
    isFeaturedHero: false,
    isChoice: false,
  },
  {
    id: "uluwatu-ridge-villa",
    slug: "uluwatu-ridge-villa",
    title: "Uluwatu Ridge Residence",
    subtitle: "PECATU, BALI | PRIVATE RESIDENCE",
    categoryTag: "CLIFFTOP WOODEN RESIDENCE",
    categories: ["VILA", "RESIDENSIAL", "PROYEK SELESAI"],
    location: "Pecatu, Uluwatu",
    year: "2024",
    type: "Private Clifftop Home",
    buildingArea: "680 m²",
    landArea: "1350 m²",
    category: "Residential",
    client: "Arthur Sterling",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    ],
    description:
      "Rumah tinggal pribadi di tebing bukit Pecatu yang mengalirkan angin sejuk samudera. Dilengkapi teras dek kayu ulin lebar dan kolam renang tanpa batas yang menyatu dengan cakrawala laut.",
    conceptPoints: [
      "Struktur kanopi kayu tebal penahan angin laut berkecepatan tinggi",
      "Pagar kaca tempered transparan penuh tanpa merusak pemandangan cakrawala",
      "Dek kayu ulin tahan garam laut di sekeliling kolam renang",
    ],
    features: [
      "180° Ocean Wooden Deck Pool",
      "Sunset Cocktail Pavilion",
      "BBQ Grill Teak Kitchen",
      "Subterranean Wine Cellar",
    ],
    isFeaturedHero: false,
    isChoice: false,
  },
];
