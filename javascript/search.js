const index = 
[   { title: "All Museums",image: "https://i.pinimg.com/564x/52/26/fb/5226fb81560b1145afc4bea0e8919bff.jpg" ,id: "Museums", href: "index.html#museums" },
    { title: "Map",image: "earth.png" ,id: "Map", href: "index.html#map" },
    { title: "Highlights",image: "https://th.bing.com/th/id/OIP.2YbisYPm5DJpg9Zf21iIYgHaFP?rs=1&pid=ImgDetMain.jpg" ,id: "highlights", href: "index.html#highlights" },
    { title: "The Egyptian Museum in Cairo", id: "egyptian museum", image: "https://i.pinimg.com/564x/52/26/fb/5226fb81560b1145afc4bea0e8919bff.jpg", href: "EgyptianMuseumInCairo.html" },
    { title: "The Coptic Museum", id: "coptic-museum", image: "https://i.pinimg.com/564x/b7/f7/0f/b7f70fe84c747c2a8d451e8e07db6caf.jpg", href: "TheCopticMuseum.html" },
    { title: "Museum of Islamic Art in Cairo", id: "islamic art museum", image: "https://images.museumwnf.org/full/museums/eg/1/2.jpg", href: "MuseumofIslamicArtinCairo.html" },
    { title: "British Museum", id: "british museum", image: "https://cdn.londonandpartners.com/asset/british-museum_museum-frontage-image-courtesy-of-the-british-museum_f0b0a5a3c53f8fc1564868c561bd167c.jpg", href: "BritishMuseum.html" },
    { title: "Luxor Museum", id: "luxor museum", image: "https://www.sis.gov.eg/Content/Upload/Editor/Image1_1120233172710.png", href: "LuxorMuseum.html" },
    { title: "Alexandria National Museum", id: "alexandria museum", image: "https://i.pinimg.com/564x/42/89/fa/4289fa5c99f2bf1c0e99c67ae742ed5e.jpg", href: "AlexandriaNationalMuseum.html" },
    { title: "Smithsonian Museum", id: "smithsonian museum", image: "https://www.abpan.com/wp-content/uploads/2013/05/natural-history-elephant-1024x682.jpg", href: "SmithsonianMuseum.html" },
    { title: "Karnak Temple", id: "karnak temple", image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/karnak-temple.jpg", href: "KarnakTemple.html" },
    { title: "Greco-Roman Museum Of Alexandria", content: "Content of Greco-Roman Museum Of Alexandria.", id: "greco roman museum", image: "https://i.pinimg.com/564x/01/9b/a3/019ba3b1dd0e6a58c87d37074c259bc6.jpg", href: "Greco-RomanMuseumOfAlexandria.html" },

];

const monuments = [
    
// smithsonian monuments
{ 
name: "Ruby Slippers",
location: "National Museum of American History",
image: "https://i.pinimg.com/564x/82/63/0b/82630be28616070f815a18e7169fe4d2.jpg",
found: "SmithsonianMuseum"

},
{
name: "Dinosaur fossils",
location: "National Museum of Natural History",
image: "https://i.redd.it/eqsblervbkt41.jpg",
found: "SmithsonianMuseum"
},
{
name: "Neil Armstrong's spacesuit",
location: "National Air and Space Museum",
image: "https://i.pinimg.com/564x/5a/e2/86/5ae286808be687a5f0b2e2f9d088884f.jpg",
found: "SmithsonianMuseum"
},
{
 name: "First Ladies' inaugural gowns",
 location: "National Museum of American History",
 image: "https://www.virginexperiencegifts.com/media/image/a/m/american-history11.jpg",
 found: "SmithsonianMuseum"
},
{
 name: "Portrait of George Washington",
  location: "National Portrait Gallery",
 image: "https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FOnoosXPnmz-RPbAj7b66yQ%2Fnormalized.jpg&width=543" },  { name: "St. Barbara", location: "Nikomedia", image: "http://www.coptic-cairo.com/museum/selection/icons/icons/files/page44-1000-full.jpg",
 found: "SmithsonianMuseum"
},
//    coptic monuments
{
 name: "St. Barbara", 
location: "Nikomedia", 
image: "http://www.coptic-cairo.com/museum/selection/icons/icons/files/page44-1000-full.jpg",
description: "St. Barbara is among the most popular Christian saints in the East and West. She was locked in a tower by her pagan father, the rich Dioscuros from Nikomedia While he was travelling, Barbara converted to Christianity and eventually was beheaded by her own father.",
found: "TheCopticMuseum"
},
{ 
name: "Coptic gravestones", 
location: "Unknown", 
image: "ankh cross.png",
description: "Coptic gravestones often depict the deceased with their hands raised in prayer. This example was made for a woman who is dressed in a long garment. A traditional Roman mantle covers her head and shoulders and hangs down over her elbows.",
found: "TheCopticMuseum"
},
{ 
name: "Tunic", 
location: "Unknown", 
image: "garmnet.png",
description: "This tunic was a garment commonly worn by males in Greco-Roman civilizations. At the top of this tunic, an arcade encloses figures of dancers and warriors. Below, two vertical panels with warriors and dancers alternate with roundels amid human busts.",
found: "TheCopticMuseum"
},
{ 
name: "Bible casket", 
location: "Unknown", 
image: "silver casket.png",
description: "This precious Bible casket of wood is covered with embossed silver sheets attached by nails. A rombic and floral pattern runs along all four sides. In the centre Virgin Mary with Jesus sitting on her lap are placed in between two Arabic lines.",
found: "TheCopticMuseum"
},
{ 
name: "Monastery of St. Jeremiah", 
location: "Saqqara", 
image: "http://www.coptic-cairo.com/museum/selection/fresco/files/page27_7.jpg",
description: "Excavations at the Monastery of St. Jeremiah in Saqqara have yielded several niches that were pierced into the eastern walls of monks’ cells and served the monks for prayer and contemplation. These niches bear christological scenes showing the enthroned Jesus or Jesus Pantocrator. Two niches are decorated with the Virgin Mary nursing the infant Jesus.",
found: "TheCopticMuseum"
},
// museum of islamic art
{ 
name: "Hexagonal Prism Table", 
location: "Unknown", 
image: "https://www.miaegypt.org/Upload_Product_Entity_Db_Product_MainImage_7fc45dba83f250dac475499b89f9f27c.JPG",
description: "This kind of table was commonly called a dinner chair by some scholars of Islamic Art, whereas it was most probably used as a Quran holder in the mosques or for carrying the candlesticks during prayer time on both sides of the Miḥrāb. It could have also been used for holding personal accessories. The table takes the shape of a hexagonal prism decorated with vegetal, geometric, animal, and epigraphic motifs quoting Quranic and invocational phrases. A small double-leafed door opens up on one of its sides and is decorated with vegetal elements.",
found: "MuseumofIslamicArtinCairo"
},
{ 
name: "Golden Dinar", 
location: "Unknown", 
image: "https://www.miaegypt.org/en-us/museum/home/gallery-item-details/Upload_Product_Entity_Db_Product_MainImage_8a34cf3823326debe0a4bd52d37979d5.jpg",
description: "The Golden Dinar, featuring Mamluk Sultan Baybars I's name, symbolizes economic prosperity and political power during his reign (1260-1277). These gold coins, circulated widely in the Islamic world, are prized artifacts reflecting the Mamluk era's sophistication and stability.",
found: "MuseumofIslamicArtinCairo"
},
{ 
name: "Prayer Rug", 
location: "Unknown", 
image: "https://www.miaegypt.org/en-us/museum/home/gallery-item-details/Upload_Product_Entity_Db_Product_MainImage_fd64eb232edf3d85acafb8d2811a8c93.jpg",
description: "Prayer rug, wool and cotton with a central mihrab element and floral decoration. The central area of the prayer rug has a decorative element in the form of a mihrab surmounted by a crenelation as usual in the rugs manufactured in Ladik of Turkey. The frames are decorated with various foliate and geometric ornamentations.",
found: "MuseumofIslamicArtinCairo"
},
{ 
name: "Ottoman Ceramic Products", 
location: "Unknown", 
image: "https://www.miaegypt.org/en-us/museum/home/gallery-item-details/Upload_Product_Entity_Db_Product_MainImage_852d8f59de1557241624cb5d31854252.jpg",
description: "Ottoman ceramic products ranged from dishes, bowls, ewers and goblets, to perfume bottles, vases, pilgrimage flasks, and lamp suspension eggs. Ottoman ceramics reached high levels of precision and perfection. They became very popular on the European markets. The group from which this specimen derives is attributed to several Turkish cities such as Iznik, Kütahya, and Gallipoli (Canakkale). The artifacts in this group are decorated with under glaze polychromic motifs on white slip depicting tulips, cloves, and lancelet leaves. The vegetal motifs have played a vital role in the Ottoman Arts, and were frequently utilized on the Ottoman artistic products.",
found: "MuseumofIslamicArtinCairo"
},
{ 
name: "Honored Hilya", 
location: "Unknown", 
image: "https://www.miaegypt.org/en-us/museum/home/gallery-item-details/Upload_Product_Entity_Db_Product_MainImage_5b3e6e86c4fa053c1a0a4919edc2c2aa.jpg",
description: "This honored hilya is giving a description for the prophet Muhammad (PBUH) starting with the Basmalla and a rounded medallion bears the description of the Prophet Muhammad (PBUH) for his features and appearance. The names of the four rightly-guided caliphs are written then a verse from Quran (Surat al-Anbiya’ “We sent thee not, but as a Mercy for all creatures”. The conclusion covers the description of the manners of the prophet Muhammad (PBUH) and carrying the name of the writer and the date “ released and revised by Mahmud known as Galal al-Din…1223AH.",
found: "MuseumofIslamicArtinCairo"
},
// luxor monuments
{ 
name: "The Mummy of Ahmose I", 
location: "Luxor Museum", 
image: "https://i.pinimg.com/564x/52/26/fb/5226fb81560b1145afc4bea0e8919bff.jpg",
description: "The Luxor Museum proudly houses the mummy of Ahmose I, the revered pharaoh of the early New Kingdom. Displayed with regal dignity, Ahmose's mummy offers a tangible connection to Egypt's illustrious past, embodying the splendor of ancient royalty for visitors to behold.",
found: "LuxorMuseum"
},
{ 
name: "Tutankhamun's Hunting Chariot", 
location: "Luxor Museum", 
image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2018/05/05/1178196-1318541902.jpg?itok=DuxRtIIC",
description: "Tutankhamun's hunting chariot, an emblem of royal prestige, is showcased in the Luxor Museum. Crafted with exquisite detail, this artifact offers a glimpse into the opulent lifestyle of ancient Egyptian pharaohs, reflecting their passion for the hunt and their mastery of craftsmanship.",
found: "LuxorMuseum"
},
{ 
name: "Wooden Head of Cow Goddess Mehit-Weret", 
location: "Luxor Museum", 
image: "https://i.pinimg.com/474x/8a/02/79/8a02792689937a86e1a5b9f843df6659.jpg",
description: "The Luxor Museum displays a remarkable black-and-gold wooden head of the cow goddess Mehit-Weret, found in Tutankhamun's tomb. This artifact exemplifies the ancient reverence for Hathor, showcasing exquisite craftsmanship and religious symbolism.",
found: "LuxorMuseum"
},
{ 
name: "Mummy of Ramesses I", 
location: "Luxor Museum", 
image: "https://i0.wp.com/egypt-museum.com/wp-content/uploads/2023/09/Ramses_I_Mummy.jpg?ssl=1",
description: "Ramesses I's mummy is among Luxor Museum's treasures, offering a poignant glimpse into ancient Egyptian royalty. Displayed with reverence, it reflects the intricate funerary practices and cultural significance of the time.",
found: "LuxorMuseum"
},
{ 
name: "Statue of Thutmose III", 
location: "Karnak Temple", 
image: "https://i.pinimg.com/564x/b2/61/98/b261981b682f5af409b7727d6121241e.jpg",
description: "This greywacke statue of Thutmose III was found in the Karnak Cachette in 1904. With the legs below the knees missing, the statue measures at 90cm tall. Thutmose III created the largest empire Egypt had ever seen; no fewer than 17 campaigns were conducted and he conquered lands from the Niya Kingdom in northern Syria to the Fourth Cataract of the Nile in Nubia.",
found: "LuxorMuseum"
},
// karnak temple
{ 
name: "Temple of Amun Reliefs", 
location: "Unknown", 
image: "https://i.pinimg.com/564x/3c/91/46/3c9146395b0989e74c3529a91d883931.jpg",
description: "To the west of the reliefs, on the south end of the Second Pylon, is the Triumphal Inscription of Sheshonq I, the Shishak of the Old Testament. It celebrates the pharaoh's victory over Rehoboam of Judah, the son of Solomon. To the left is a large figure of Amun holding the curved sword of victory in his right hand, and in his left, cords binding five rows of captured cities, each represented by a circuit of walls bearing its name and the upper part of the body of a fettered prisoner.",
found: "KarnakTemple"
},
{ 
name: "Great Hypostyle Hall", 
location: "Unknown", 
image: "https://images.squarespace-cdn.com/content/v1/5918854fcd0f68c07c377c68/45fc5841-be1e-4692-a48f-f852403bc135/F0B61787-F33F-4624-8949-10A4DA510BD8.jpg",
description: "The Great Hypostyle Hall, justifiably regarded as one of the wonders of the world. This huge hall still exerts an overwhelming effect on everyone who enters. Measuring 103 meters by 52 meters, it covers an area of more than 5,000 square meters.",
found: "KarnakTemple"
},
{ 
name: "Colossal Statue of Ramesses II and Goddess Amaunet", 
location: "Unknown", 
image: "https://live.staticflickr.com/4708/39787731051_f9f19df144_b.jpg",
description: "You can see the magnificent colossal statue of Ramesses II and the goddess Amaunet, of reddish sandstone, dedicated by Tutankhamun, whose name was later chiseled out and replaced by that of his successor Horemheb.",
found: "KarnakTemple"
},
{ 
name: "Avenue of Sphinxes", 
location: "Karnak Temple", 
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Karnak_Temple%2C_Ram_Road.JPG/800px-Karnak_Temple%2C_Ram_Road.JPG",
description: "The Avenue of Sphinxes at Karnak Temple is a majestic path lined with sphinx statues, symbolizing the link between the Luxor Temple and Karnak. It served as a ceremonial route for processions during ancient Egyptian festivals and rituals.",
found: "KarnakTemple"
},
// greco 
{
name: "Statue of Hermanubis",
location: "Unknown",
image: "https://egymonuments.gov.eg/media/8232/8_a_dsc2594.jpg",
description: "The Statue of the god Hermanubis, a fusion deity combining the attributes of Hermes and Anubis, represents the cultural syncretism of Greco-Egyptian religion during the Ptolemaic period. This marble sculpture, dating back to the 2nd century AD, reflects the blending of Greek and Egyptian religious beliefs in ancient Alexandria, symbolizing the diverse cultural landscape of the city.",
found: "Greco-RomanMuseumOfAlexandria"
},
{
name: "Statue of Serapis",
location: "Unknown",
image: "https://egymonuments.gov.eg/media/8234/17_a_dsc2520.jpg",
description: "The Statue of the god Serapis, crafted during the Ptolemaic period in Egypt, embodies the fusion of Greek and Egyptian religious traditions. Serapis, a deity created by Ptolemy I, symbolizes the synthesis of Egyptian Osiris and Greek Zeus. This monumental statue reflects the cultural exchange and religious syncretism characteristic of Hellenistic Alexandria.",
found: "Greco-RomanMuseumOfAlexandria"
},
{
name: "Statue of Mars",
location: "Unknown",
image: "https://live.staticflickr.com/65535/51935948687_430c28f122_c.jpg",
description: "The Statue of the god Mars, an embodiment of strength and warfare in Roman mythology, stands as a testament to the military prowess and imperial aspirations of the Roman Empire. Crafted with exquisite detail, this statue symbolizes Roman military might and the valor of its soldiers.",
found: "Greco-RomanMuseumOfAlexandria"
},
{
name: "Statue of Emperor Diocletian",
location: "Unknown",
image: "https://pbs.twimg.com/media/F8LYQhIXIAAlOv4.jpg",
description: "The Statue of Emperor Diocletian, a formidable ruler of the Roman Empire known for his administrative reforms and efforts to stabilize the empire, depicts him in regal attire, embodying power and authority. Erected during his reign, it serves as a lasting tribute to his legacy and influence.",
found: "Greco-RomanMuseumOfAlexandria"
},
{
name: "Statue of Apis Bull",
location: "Unknown",
image: "https://preview.redd.it/i21grdx6bhm71.jpg?width=640&crop=smart&auto=webp&s=01f50cb18e0c2f8405036465f22f7f52c3781ef7",
description: "The Statue of Apis Bull, revered in ancient Egyptian culture as a symbol of fertility and strength, represents the deity worshipped in Memphis. Adorned with sacred insignia, this monumental statue honors the divine creature and its role in religious ceremonies, reflecting the spiritual beliefs of the ancient Egyptians.",
found: "Greco-RomanMuseumOfAlexandria"
},
// egyptian museum
{
name: "Golden Mask of Tutankhamun",
location: "Egyptian Museum, Cairo",
image: "http://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/Tutankhamon-funerary-mask.jpg",
description: "The Golden Mask of Tutankhamun is a priceless artifact from ancient Egypt, crafted from solid gold and intricately adorned with precious gemstones. It is one of the most iconic symbols of ancient Egyptian art and is revered for its beauty and historical significance.",
found: "EgyptianMuseumInCairo"
},
{
name: "Narmer Palette",
location: "Egyptian Museum, Cairo",
image: "https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/narmer2.jpg",
description: "The Narmer Palette is an ancient Egyptian artifact dating back to the Early Dynastic Period, around 3100 BCE. It is a ceremonial palette carved from a single piece of siltstone, depicting the pharaoh Narmer wearing the crowns of Upper and Lower Egypt, and is believed to commemorate his unification of the two lands.",
found: "EgyptianMuseumInCairo"
},
{
name: "Statue of Ramses II",
location: "Egyptian Museum, Cairo",
image: "http://egyptianmuseumcairo.eg/wp-content/uploads/2021/11/97.jpg",
description: "The Statue of Ramses II, known for his military prowess. This statue, often carved from granite, exemplifies the grandeur and power of the New Kingdom era, standing as a testament to Ramses II's reign as one of Egypt's greatest rulers.",
found: "EgyptianMuseumInCairo"
},
{
name: "Statue of Khafre",
location: "Egyptian Museum, Cairo",
image: "https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/90.jpg",
description: "The Statue of Khafre is a magnificent ancient Egyptian sculpture depicting the pharaoh Khafre, renowned for commissioning the Great Sphinx and the second-largest pyramid at Giza. This statue, carved from diorite, stands as a testament to Khafre's reign during the Old Kingdom period, reflecting his authority and divine status.",
found: "EgyptianMuseumInCairo"
},
{
name: "Bust of Nefertiti",
location: "Egyptian Museum, Cairo",
image: "http://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/51-1.jpg",
description: "The exquisite bust of Nefertiti is a renowned ancient Egyptian sculpture, believed to depict Queen Nefertiti, wife of Pharaoh Akhenaten. Carved from limestone, this masterpiece epitomizes the elegance and beauty of the Amarna period, showcasing Nefertiti's iconic features and royal stature.",
found: "EgyptianMuseumInCairo"
},
// british
{
name: "Rosetta Stone",
location: "British Museum",
image: "https://arce.org/wp-content/uploads/2023/01/rosettastone.jpg",
description: "The Rosetta Stone, discovered in 1799, is a key artifact in understanding ancient Egyptian hieroglyphs. Inscribed with the same decree in three scripts—hieroglyphic, demotic, and Greek—it provided the key to deciphering Egyptian hieroglyphs. Housed in the British Museum, it remains a symbol of linguistic breakthrough and cultural exchange.",
found: "BritishMuseum"
},
{
name: "Brass head of an Ooni (king) of Ife",
location: "British Museum",
image: "https://www.britishmuseum.org/sites/default/files/styles/bm_gallery_medium_700h/public/2019-10/Brass%20head%20with%20a%20beaded%20crown%20and%20plume%2C%20Ife%2C%20Nigeria.jpg?itok=oFhmm2R9",
description: "This crowned head was discovered by accident in 1939 during digging close to the royal palace in Ife. Between 1100 and 1400 Ife was one of the great city-states in West Africa and flourished as a commercial centre within regional and long-distance trade networks.",
found: "BritishMuseum"
},
{
name: "Bronze statue of the goddess Tara",
location: "Sri Lanka",
image: "https://i.pinimg.com/564x/4e/c0/f1/4ec0f12c9e2207cfd3f2ada0610b5434.jpg",
description: "This bronze statue of Buddhist goddess Tara was found on the east coast of Sri Lanka. The goddess Tara, found between Trincomalee and Batticaloa, Sri Lanka, made AD 700-750.",
found: "BritishMuseum"
},
{
name: "Gayer-Anderson cat",
location: "British Museum",
image: "https://www.britishmuseum.org/sites/default/files/styles/uncropped_medium/public/2020-03/gayer-anderson-cat_0.jpg?itok=slgukM1r",
description: "The Gayer-Anderson cat is a bronze figure depicting one form of the goddess Bastet. The goddess was usually shown as a cat-headed woman, or in the form of a cat. Her principal cult centre was Bubastis in the Nile Delta. Bastet was a mother goddess and benign counterpart to the more aggressive lion goddess Sekhmet.",
found: "BritishMuseum"
},
{
name: "Ancient Greek black-figured amphora",
location: "British Museum",
image: "https://www.britishmuseum.org/sites/default/files/styles/uncropped_huge/public/2019-09/Achilles%20defeating%20Penthesilea%2C%20the%20Amazon%20Queen.%20Black-figured%20amphora%20%28wine-jar%29%20signed%20by%20Exekias.%20Athens%2C%20Attica%2C%20Greece.%20c.540-530%20BC.jpg",
description: "Signed by Exekias as potter and Attributed to him as painter. The scene on this vase shows Achilles looming above Amazon warrior Penthesilea as she sinks to the ground.",
found: "BritishMuseum"
},
// alex
{
name: "Cleopatra VII Statue",
location: "Various locations",
image: "https://i.pinimg.com/564x/53/22/39/532239114dbc0d9ba7573fae6babbd2e.jpg",
description: "A regal depiction of the iconic queen, showcasing her beauty and power as the last ruler of the Ptolemaic Kingdom of Egypt.",
found: "AlexandriaNationalMuseum"
},
{
name: "Serapis Statue",
location: "Various locations",
image: "https://live.staticflickr.com/1965/44610813004_5492bdaf2e_b.jpg",
description: "Serapis was a Greco-Egyptian deity who was worshipped as a god of healing, fertility, and the afterlife. The statue is an important artifact reflecting the cultural fusion of the Hellenistic and Egyptian traditions during the Ptolemaic period.",
found: "AlexandriaNationalMuseum"
},
{
name: "Medusa Mosaic",
location: "Various locations",
image: "https://i.pinimg.com/564x/64/2c/51/642c519aed75edaa8ec6a97620cdfa74.jpg",
description: "The Medusa Mosaic is a captivating piece depicting the mythical figure of Medusa, known for her hair of snakes and petrifying gaze. This mosaic, intricately crafted with colorful tesserae, reflects the rich artistic heritage of the ancient Mediterranean world, showcasing both beauty and terror.",
found: "AlexandriaNationalMuseum"
},
{
name: "Egyptian Sarcophagi",
location: "Alexandria National Museum",
image: "https://i.pinimg.com/564x/25/ef/ef/25efef146d698e53855e39ba09a992d9.jpg",
description: "The Alexandria National Museum houses a collection of Egyptian sarcophagi, which were used to encase and preserve the bodies of the deceased in ancient Egypt. These elaborately decorated coffins often depict scenes from Egyptian mythology and religious beliefs, offering valuable insights into ancient Egyptian culture, burial practices, and beliefs about the afterlife. The sarcophagi serve as important artifacts for studying the funerary customs and religious beliefs of ancient Egypt.",
found: "AlexandriaNationalMuseum"
},
{
name: "Greek Pottery",
location: "Various locations",
image: "https://st.depositphotos.com/8272416/55833/i/450/depositphotos_558332744-stock-photo-alexandria-egypt-november-2021-ancient.jpg",
description: "Fine examples of Greek pottery adorned with intricate designs and mythological motifs, illustrating the artistic achievements of ancient Greek civilization.",
found: "AlexandriaNationalMuseum"
}
];
const civilizations = [
{
href: "islamic.html",
image:"https://preview.redd.it/some-islamic-civilization-ai-art-i-made-v0-s4dd866uwmdb1.png?width=640&crop=smart&auto=webp&s=955c32677640a21ec9dd1302b65456567f9a1df5",
name: "Islamic Civilization",
description: "Rich cultural and scientific contributions from the Islamic world."
},
{
href: "pharaonic.html",
image:"https://www.cleopatraegypttours.com/wp-content/uploads/2020/01/Tuthmosis-the-Third.jpg",
name: "Pharaonic Civilization",
description: "Ancient Egyptian with iconic pyramids and pharaohs."
},
{
href: "coptic.html",
image:"https://egyptopia.com/shared/images/c/big/coptic_church_16853.jpg",
name: "Coptic Civilization",
description: "Ancient Christian civilization in Egypt."
}
];


function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const searchResults = document.getElementById("search-results-container");
    searchResults.innerHTML = "";

    if (query.trim() === "") {
        
        return;
    }

    const museumResults = index.filter(page => {
        return page.title.toLowerCase().includes(query) || page.id.toLowerCase().includes(query);
    });

    const monumentResults = monuments.filter(monument => {
        return monument.name.toLowerCase().includes(query) || monument.location.toLowerCase().includes(query);
    });

    const civilizationResults = civilizations.filter(civilization => {
        return civilization.name.toLowerCase().includes(query) || civilization.description.toLowerCase().includes(query);
    });

    if (museumResults.length === 0 && monumentResults.length === 0 && civilizationResults.length === 0) {
        searchResults.innerHTML = "<li>No results found</li>";
        return;
    }

    museumResults.forEach(page => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = page.href;
        anchor.style.textDecoration = "none";
        anchor.innerHTML = `
            <div style="display: flex; align-items: center; width: 50%; height: 200px; background-color: black; border-radius:8px">
                <img src="${page.image}" alt="${page.title}" style="width: 30%; height: 150px; margin-left:10px">
                <div style="margin-left: 10px; color: white;">
                    <h2 class="museum-name">${page.title}</h2>
                    <p>${page.description}</p>
                </div>
            </div>
            <br>
        `;
        listItem.appendChild(anchor);
        searchResults.appendChild(listItem);
    });

    monumentResults.forEach(monument => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div style="display: flex; align-items: center; width: 50%; height: 200px; background-color: black; border-radius:8px">
                <img src="${monument.image}" alt="${monument.name}" style="width: 30%; height: 150px; margin-right: 10px; margin-left:10px" >
                <div style="color: white;">
                    <p>${monument.name} - ${monument.location}</p>
                    <p>${monument.description}</p>
                    <p><a href="${monument.found}.html#details" style="color: white; text-decoration-color: white;">${monument.found}</a></p>
                </div>
            </div>
            <br>
        `;
        
        const anchor = document.createElement("a");
        anchor.href = monument.found + ".html#details";
        anchor.innerHTML = `<p><a href="${anchor.href}">${monument.found}</a></p>`;
        // listItem.appendChild(anchor);
        searchResults.appendChild(listItem);
    });

    civilizationResults.forEach(civilization => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = civilization.href;
        anchor.style.textDecoration = "none";
        anchor.innerHTML = `
            <div style="display: flex; align-items: center; width: 50%; height: 200px; background-color: black; border-radius:8px">
                <img src="${civilization.image}" alt="${civilization.title}" style="width: width: 30%; height: 150px; margin-right: 10px; margin-left:10px">
                <div style="color: white;">
                    <p class="civilization-name" >${civilization.name}</p>
                    <p>${civilization.description}</p>
                </div>
            </div>
        `;
        listItem.appendChild(anchor);
        searchResults.appendChild(listItem);
    });
}

document.getElementById("search-button").addEventListener("click", function() {
    search();
});