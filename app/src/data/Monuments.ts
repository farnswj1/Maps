import { Monument } from 'types';

const MONUMENTS: Monument[] = [
  {
    name: 'Admiralty Island',
    location: 'Alaska',
    latitude: 57.64,
    longitude: -134.35,
    agency: 'USFS',
    date_established: 'December 1, 1978',
    area: 1019861.0,
    description: 'Occupying most of Admiralty Island, the 7th largest in the United States, this monument is part of Tongass National Forest in Southeast Alaska. The monument protects the densest known population of brown bear on Earth, along with habitat for the Sitka black-tailed deer. Most of the monument has been designated as the Kootznoowoo Wilderness, restricting future development.'
  },
  {
    name: 'African Burial Ground',
    location: 'New York',
    latitude: 40.7144,
    longitude: -74.0042,
    agency: 'NPS',
    date_established: 'February 27, 2006',
    area: 0.35,
    description: 'Re-discovered in 1991 during excavations for a new federal building, this former burial ground that contains the remains of more than 400 free and enslaved Africans buried during the 17th and 18th centuries was designated a National Historic Landmark memorial in 1993.'
  },
  {
    name: 'Agate Fossil Beds',
    location: 'Nebraska',
    latitude: 42.416,
    longitude: -103.728,
    agency: 'NPS',
    date_established: 'June 14, 1997',
    area: 3057.87,
    description: 'The valley of the Niobrara River is known for its large number of well-preserved Miocene mammal fossils which date from about 20 million years ago.'
  },
  {
    name: 'Agua Fria',
    location: 'Arizona',
    latitude: 34.15,
    longitude: -112.08,
    agency: 'BLM',
    date_established: 'January 11, 2000',
    area: 70980.0,
    description: 'Located around the canyon of the Agua Fria River, it contains more than 450 distinct Native American structures, including large pueblos with more than 100 rooms.'
  },
  {
    name: 'Aleutian Islands World War II',
    location: 'Alaska',
    latitude: 52.87,
    longitude: -173.16,
    agency: 'FWS',
    date_established: 'December 5, 2008',
    area: 4950.0,
    description: 'During World War II Japan briefly occupied Attu Island and Kiska Island in the Aleutian chain. The monument within the Alaska Maritime National Wildlife Refuge includes the site of the 19-day battle to reclaim Attu, artifacts of the occupation at Kiska, and the crash site of a U.S. B-24D Liberator on Atka Island. Originally designated as part of World War II Valor in the Pacific National Monument, which was divided and renamed March 12, 2019.'
  },
  {
    name: 'Alibates Flint Quarries',
    location: 'Texas',
    latitude: 35.57,
    longitude: -101.67,
    agency: 'NPS',
    date_established: 'August 21, 1965',
    area: 1370.97,
    description: 'Alibates was the quarry site for high-quality, rainbow-hued flint that was distributed throughout the Great Plains in pre-Columbian times. It is jointly operated with the Lake Meredith National Recreation Area and includes the ruins of several Plains Village Indian dwellings.'
  },
  {
    name: 'Aniakchak',
    location: 'Alaska',
    latitude: 56.9,
    longitude: -158.15,
    agency: 'NPS',
    date_established: 'December 1, 1978',
    area: 137176.0,
    description: 'Mount Aniakchak, which erupted 3,500 years ago, and the surrounding region make up one of the least visited NPS sites. Surprise Lake, within the volcano\'s 6-mile (9.7 km) wide, 2,500-foot (760 m) deep caldera, is the source of the Aniakchak River.'
  },
  {
    name: 'Avi Kwa Ame',
    location: 'Nevada',
    latitude: 35.4,
    longitude: -115.0,
    agency: 'BLM, NPS',
    date_established: 'March 21, 2023',
    area: 506814.0,
    description: 'Spirit Mountain (Avi Kwa Ame) is the site of creation for the Yuman tribes, who hold the area sacred. Consisting of the Eldorado Valley, Piute Valley, and surrounding mountain ranges of the Mojave Desert, the area is home to expansive Joshua tree forests and provides important habitat for species such as the desert bighorn sheep, desert tortoise and Gila monster.'
  },
  {
    name: 'Aztec Ruins',
    location: 'New Mexico',
    latitude: 36.83,
    longitude: -107.0,
    agency: 'NPS',
    date_established: 'January 24, 1923',
    area: 318.4,
    description: 'The ruins contain Pueblo structures from the 11th to 13th centuries with more than 400 masonry rooms which were misidentified by early American settlers as Aztec. It has been included in the Chaco Culture World Heritage Site, which also includes Chaco Culture National Historical Park.'
  },
  {
    name: 'Baaj Nwaavjo I\'tah Kukveni \u2013 Ancestral Footprints of the Grand Canyon',
    location: 'Arizona',
    latitude: 35.54,
    longitude: -112.0,
    agency: 'BLM, USFS',
    date_established: 'August 8, 2023',
    area: 917618.0,
    description: 'This monument protects land on both sides of Grand Canyon National Park that is significant to several tribal nations. Includes part of Kaibab National Forest'
  },
  {
    name: 'Bandelier',
    location: 'New Mexico',
    latitude: 35.78,
    longitude: -106.27,
    agency: 'NPS',
    date_established: 'February 11, 1916',
    area: 33676.67,
    description: 'Frijoles Canyon contains Ancestral Pueblo homes, kivas, rock paintings and petroglyphs. The Pueblo structures made of volcanic tuff date to 1150 CE, with other artifacts more than 11,000 years old.'
  },
  {
    name: 'Basin and Range',
    location: 'Nevada',
    latitude: 37.9,
    longitude: -115.4,
    agency: 'BLM',
    date_established: 'July 10, 2015',
    area: 703585.0,
    description: 'The remote Mount Irish, Seaman, and Golden Gate Ranges surround the Garden and Coal Valleys and White River Narrows and are home to many desert species and 4,000-year-old rock art.'
  },
  {
    name: 'Bears Ears',
    location: 'Utah',
    latitude: 37.63,
    longitude: -109.86,
    agency: 'BLM, USFS',
    date_established: 'December 28, 2016',
    area: 1360000.0,
    description: 'The Bears Ears are a pair of buttes that rise above sandstone canyons and mesas. Other points of geologic interest include the twin Six Shooter dome-shaped peaks, striated sandstone pinnacles, and natural arches. The wider region has tens of thousands of archaeological sites including rock art, ancient cliff dwellings, and ceremonial kivas. Part is in Manti\u2013La Sal National Forest.'
  },
  {
    name: 'Belmont-Paul Women\'s Equality',
    location: 'District of Columbia',
    latitude: 38.89,
    longitude: -77.0,
    agency: 'NPS',
    date_established: 'April 12, 2016',
    area: 0.34,
    description: 'Home of the National Woman\'s Party since 1929, this Adam Federal style house near the US Capitol was the home where party leader Alice Paul and others lived and worked.'
  },
  {
    name: 'Berryessa Snow Mountain',
    location: 'California',
    latitude: 39.22,
    longitude: -122.77,
    agency: 'USFS, BLM',
    date_established: 'July 10, 2015',
    area: 330780.0,
    description: 'Fewer than 100 miles (160 km) from the San Francisco Bay Area, Berryessa Snow Mountain protects part of the California Coast Range, one of the most biodiverse regions in the state, home to elk, osprey, river otters, half the state\'s dragonfly species, and California\'s second-largest population of wintering bald eagles. Part is in Mendocino National Forest.'
  },
  {
    name: 'Birmingham Civil Rights',
    location: 'Alabama',
    latitude: 33.513,
    longitude: -86.815,
    agency: 'NPS',
    date_established: 'January 12, 2017',
    area: 0.88,
    description: 'This site preserves the A. G. Gaston Motel, which was bombed by the KKK after Martin Luther King Jr. and Birmingham campaign leaders had stayed there, inciting the Birmingham riot of 1963.'
  },
  {
    name: 'Booker T. Washington',
    location: 'Virginia',
    latitude: 37.123,
    longitude: -79.766,
    agency: 'NPS',
    date_established: 'April 2, 1956',
    area: 239.01,
    description: 'This preserves portions of the 207-acre (0.84 km2) tobacco farm on which educator and civil rights leader Booker T. Washington was born into slavery on April 5, 1856. The site contains replicas of the house Washington was born in, a smokehouse, a blacksmith shed, a tobacco barn, and a horse barn.'
  },
  {
    name: 'Browns Canyon',
    location: 'Colorado',
    latitude: 38.615,
    longitude: -106.059,
    agency: 'BLM, USFS',
    date_established: 'February 19, 2015',
    area: 21604.0,
    description: 'Steep granite cliffs and colorful rock outcroppings overlook the Arkansas River, where visitors can go whitewater rafting. Prehistoric campsites and shelters date back 11,000 years, while sites from gold mining remain from the late 1800s. About half is in San Isabel National Forest.'
  },
  {
    name: 'Buck Island Reef',
    location: 'US Virgin Islands',
    latitude: 17.79,
    longitude: -64.62,
    agency: 'NPS',
    date_established: 'December 28, 1961',
    area: 19015.47,
    description: 'Most of this monument is underwater, containing a large elkhorn coral barrier reef that provides cover for a great variety of reef fish, sea turtles and least terns. It is based around Buck Island, an uninhabited 176-acre (0.71 km2) island.'
  },
  {
    name: 'Cabrillo',
    location: 'California',
    latitude: 32.67,
    longitude: -117.24,
    agency: 'NPS',
    date_established: 'October 14, 1913',
    area: 159.94,
    description: 'This monument commemorates the landing of Juan Rodr\u00edguez Cabrillo at San Diego Bay on September 28, 1542, which was the first European expedition to what later became the West Coast of the U.S. The monument includes a statue of Cabrillo, a rocky intertidal zone, and 20th-century coastal artillery batteries built to protect the harbor of San Diego from enemy warships.'
  },
  {
    name: 'California Coastal',
    location: 'California',
    latitude: 36.89,
    longitude: -122.18,
    agency: 'BLM',
    date_established: 'January 11, 2000',
    area: 2628.0,
    description: 'This monument ensures the protection of all of the more than 20,000 islets, reefs and rock outcroppings from the coast of California to a distance of 12 nautical miles (22 km), along the entire 840-mile (1,350 km) long California coastline.'
  },
  {
    name: 'Camp Hale \u2014 Continental Divide',
    location: 'Colorado',
    latitude: 39.44,
    longitude: -106.37,
    agency: 'USFS',
    date_established: 'October 12, 2022',
    area: 53804.0,
    description: 'Soldiers in the US Army\'s 10th Mountain Division used Camp Hale to learn skiing, climbing, and snowshoeing to fight in the Italian Alps during World War II. Part of White River National Forest.'
  },
  {
    name: 'Camp Nelson',
    location: 'Kentucky',
    latitude: 37.78,
    longitude: -84.6,
    agency: 'NPS',
    date_established: 'October 26, 2018',
    area: 373.0,
    description: 'Established in 1863 as a depot for the Union Army during the Civil War, Camp Nelson became a large recruitment center for African American Union soldiers: a key site of emancipation for those soldiers and a refugee camp for their families.'
  },
  {
    name: 'Canyon de Chelly',
    location: 'Arizona',
    latitude: 36.13,
    longitude: -109.47,
    agency: 'NPS',
    date_established: 'April 1, 1931',
    area: 83840.0,
    description: 'Located within the Navajo Nation, it preserves the valleys and rims of Canyon de Chelly, Canyon del Muerto, and Monument Canyon. Several Ancestral Puebloan cliff dwellings are built into the canyon walls.'
  },
  {
    name: 'Canyons of the Ancients',
    location: 'Colorado',
    latitude: 37.37,
    longitude: -109.0,
    agency: 'BLM',
    date_established: 'June 9, 2000',
    area: 176370.0,
    description: 'Surrounding Hovenweep National Monument, it preserves and protects more than 6,000 archeological sites, the largest concentration in the U.S. These include Lowry Pueblo, dating to 1103 CE, and Painted Hand Pueblo built by the Ancestral Puebloans'
  },
  {
    name: 'Cape Krusenstern',
    location: 'Alaska',
    latitude: 67.41,
    longitude: -163.5,
    agency: 'NPS',
    date_established: 'December 1, 1978',
    area: 649096.15,
    description: 'Co-located with the NHLD Cape Krusenstern Archeological District, this coastal plain contains large lagoons and rolling hills of limestone. The bluffs record thousands of years of change in the shorelines of the Chukchi Sea, as well as evidence of some 9,000 years of human habitation.'
  },
  {
    name: 'Capulin Volcano',
    location: 'New Mexico',
    latitude: 36.79,
    longitude: -103.96,
    agency: 'NPS',
    date_established: 'August 9, 1916',
    area: 792.84,
    description: 'Capulin is an extinct cinder cone volcano that is approximately 59,000 years old and part of the Raton-Clayton Volcanic Field. The crater is 400 feet (120 m) deep and its rim is more than 1,500 feet (460 m) in diameter.'
  },
  {
    name: 'Carrizo Plain',
    location: 'California',
    latitude: 35.16,
    longitude: -119.75,
    agency: 'BLM',
    date_established: 'January 12, 2001',
    area: 211045.0,
    description: 'Carrizo Plain is the largest single native grassland remaining in California. It contains part of the San Andreas Fault and is surrounded by the Temblor Range and the Caliente Range. At the center of the plain is Soda Lake, which is near Painted Rock.'
  },
  {
    name: 'Casa Grande Ruins',
    location: 'Arizona',
    latitude: 32.99,
    longitude: -111.54,
    agency: 'NPS',
    date_established: 'August 3, 1918',
    area: 472.5,
    description: 'This monument preserves a group of structures surrounded by a compound wall in the Gila Valley that were built in the early 13th century. They were inhabited by the Hohokam people until they were abandoned in the mid-15th century.'
  },
  {
    name: 'Cascade\u2013Siskiyou',
    location: 'Oregon',
    latitude: 42.08,
    longitude: -122.46,
    agency: 'BLM',
    date_established: 'June 9, 2000',
    area: 114000.0,
    description: 'One of the most diverse ecosystems found in the Cascade Range, it has more than 100 dwelling and root-gathering sites belonging to the Modoc, Klamath, and Shasta tribes.'
  },
  {
    name: 'Castillo de San Marcos',
    location: 'Florida',
    latitude: 29.898,
    longitude: -81.311,
    agency: 'NPS',
    date_established: 'October 15, 1924',
    area: 19.38,
    description: 'This Spanish fort near St. Augustine, called Fort Marion when first protected, served for 205 years under four different flags. Built in 1672, it was involved in sieges with the British while under Spanish command, the American Revolution under Britain, the Civil War under the Confederacy, and the Seminole Wars and the Spanish\u2013American War under the United States.'
  },
  {
    name: 'Castle Clinton',
    location: 'New York',
    latitude: 40.7036,
    longitude: -74.0169,
    agency: 'NPS',
    date_established: 'August 12, 1946',
    area: 1.0,
    description: 'A circular sandstone fort built in 1811 at the southern tip of Manhattan to protect New York City from the British, Castle Clinton is now located in Battery Park. It later became a beer garden, a theater, the first immigration station (predating Ellis Island), a public aquarium, and a ticket office for the Statue of Liberty National Monument.'
  },
  {
    name: 'Castle Mountains',
    location: 'California',
    latitude: 35.25,
    longitude: -115.11,
    agency: 'NPS',
    date_established: 'February 12, 2016',
    area: 21025.5,
    description: 'The Castle Mountains sit in the Mojave Desert between the Nevada state line and Mojave National Preserve. It protects desert grasslands home to Joshua tree forests, wildlife including golden eagles and bighorn sheep, and historic Native American sites.'
  },
  {
    name: 'Castner Range',
    location: 'Texas',
    latitude: 31.9,
    longitude: -106.5,
    agency: 'Army',
    date_established: 'March 21, 2023',
    area: 6672.0,
    description: 'This portion of the Franklin Mountains of west Texas\'s Chihuahuan Desert includes 41 archaeological sites that show evidence of human presence dating to 6,000 BC. The site was used as a weapons testing range for Fort Bliss for 40 years and is still undergoing remediation of munitions. Castner Range is the only land conservation national monument within the Department of Defense.'
  },
  {
    name: 'Cedar Breaks',
    location: 'Utah',
    latitude: 37.63,
    longitude: -112.85,
    agency: 'NPS',
    date_established: 'August 22, 1933',
    area: 6154.6,
    description: 'A natural amphitheater canyon similar to formations at Bryce Canyon National Park, it stretches over 3 miles (4.8 km) and is more than 2,000 feet (610 m) deep.'
  },
  {
    name: 'C\u00e9sar E. Ch\u00e1vez',
    location: 'California',
    latitude: 35.2273,
    longitude: -118.5614,
    agency: 'NPS',
    date_established: 'October 8, 2012',
    area: 116.56,
    description: 'This monument commemorates the life and work of labor leader and civil rights activist Cesar Chavez. Called La Paz, the site was Chavez\'s home for about 20 years, and his gravesite is on the premises. It is also the location of the headquarters of United Farm Workers, which was founded by Chavez.'
  },
  {
    name: 'Charles Young Buffalo Soldiers',
    location: 'Ohio',
    latitude: 39.7072,
    longitude: -83.8903,
    agency: 'NPS',
    date_established: 'March 25, 2013',
    area: 59.66,
    description: 'Charles Young was the first African American to reach the rank of colonel in the US Army. He was also the first national park superintendent, of Sequoia and General Grant National Parks, and a professor at Wilberforce University. His home at Wilberforce is a museum commemorating his life.'
  },
  {
    name: 'Chimney Rock',
    location: 'Colorado',
    latitude: 37.1917,
    longitude: -107.3064,
    agency: 'USFS',
    date_established: 'September 21, 2012',
    area: 4724.0,
    description: 'The jewel of San Juan National Forest, the site was once home to the ancestors of the modern Pueblos. Roughly 1,000 years ago, the Ancestral Pueblo People built more than 200 homes and ceremonial buildings high above the valley floor.'
  },
  {
    name: 'Chiricahua',
    location: 'Arizona',
    latitude: 32.02,
    longitude: -109.35,
    agency: 'NPS',
    date_established: 'April 18, 1924',
    area: 12024.73,
    description: 'These pillars of rhyolite tuff are the eroded remains of an immense volcanic eruption that shook the region some 27 million years ago. It was called the Land of the Standing-Up Rocks by the Apache.'
  },
  {
    name: 'Colorado',
    location: 'Colorado',
    latitude: 39.04,
    longitude: -108.69,
    agency: 'NPS',
    date_established: 'May 24, 1911',
    area: 20536.39,
    description: 'Monument Canyon runs the width of the park and includes rock formations formed by erosion. The monument covers semi-desert land high on the Colorado Plateau and has a wide range of wildlife including pinyon pines, juniper trees, ravens, jays, desert bighorn sheep, and coyotes as well as a range of recreational activities.'
  },
  {
    name: 'Craters of the Moon',
    location: 'Idaho',
    latitude: 43.42,
    longitude: -113.52,
    agency: 'NPS, BLM',
    date_established: 'May 2, 1924',
    area: 343000.0,
    description: 'One of the best preserved flood basalt areas in the continental U.S. contains three lava fields along the Great Rift of Idaho. Among the volcanic cinder cones, lava tubes, and fissures created 15,000 to 2,000 years ago is the world\'s deepest open rift crack. The adjoining National Preserve protects an additional 410,000 acres.'
  },
  {
    name: 'Devils Postpile',
    location: 'California',
    latitude: 37.5,
    longitude: -119.08,
    agency: 'NPS',
    date_established: 'July 6, 1911',
    area: 800.19,
    description: 'Once part of Yosemite National Park, this monument is a dark cliff of columnar basalt created by a lava flow at least 100,000 years ago. It also has the 101-foot (31 m)-high Rainbow Falls.'
  },
  {
    name: 'Devils Tower',
    location: 'Wyoming',
    latitude: 44.59,
    longitude: -104.72,
    agency: 'NPS',
    date_established: 'September 24, 1906',
    area: 1347.21,
    description: 'The tower is a monolithic igneous intrusion of volcanic neck rising dramatically 1,267 feet (386 m) above the surrounding terrain. Proclaimed by Theodore Roosevelt, this was the first national monument.'
  },
  {
    name: 'Dinosaur',
    location: 'Colorado',
    latitude: 40.53,
    longitude: -108.98,
    agency: 'NPS',
    date_established: 'October 4, 1915',
    area: 210281.92,
    description: 'This sandstone and conglomerate bed at the confluence of the Green and Yampa Rivers was formed in the Jurassic Period and contains fossils of dinosaurs including Allosaurus and various long-neck and long-tail sauropods.'
  },
  {
    name: 'Effigy Mounds',
    location: 'Iowa',
    latitude: 43.09,
    longitude: -91.19,
    agency: 'NPS',
    date_established: 'October 25, 1949',
    area: 2526.39,
    description: 'This monument preserves three prehistoric sites with 206 prehistoric mounds, notable for 31 unusual mounds in the shape of mammals, birds, or reptiles.'
  },
  {
    name: 'El Malpais',
    location: 'New Mexico',
    latitude: 34.88,
    longitude: -108.05,
    agency: 'NPS',
    date_established: 'December 31, 1987',
    area: 114347.11,
    description: 'An extremely rough, rugged lava flow covers much of the park, filling a large basin rimmed by higher sandstone that forms large, wind-carved bluffs. It has lava tube caves that stretch over 17 miles (27 km) and the Cebolla Wilderness, a forested rimrock area that features prehistoric rock art and the Zuni-Acoma Trail, an ancient Pueblo trade route.'
  },
  {
    name: 'El Morro',
    location: 'New Mexico',
    latitude: 35.04,
    longitude: -108.35,
    agency: 'NPS',
    date_established: 'December 8, 1906',
    area: 1278.72,
    description: 'On the site of an ancient east\u2013west trail is a great sandstone promontory with a pool of water at its base. There are inscriptions from the 17th century as well as older petroglyphs made by the Ancestral Puebloans.'
  },
  {
    name: 'Emmett Till and Mamie Till-Mobley',
    location: 'Illinois',
    latitude: 33.86,
    longitude: -90.27,
    agency: 'NPS',
    date_established: 'July 25, 2023',
    area: 5.7,
    description: 'Three sites honor the memory of Emmett Till, an African American boy who was abducted, tortured, and lynched in Mississippi in 1955 at the age of 14, after being accused of offending a white woman, Carolyn Bryant, in her family\'s grocery store. The Roberts Temple Church of God in Christ, Bronzeville, Chicago, Illinois was the site of Till\'s memorial service in September 1955, hosted by his mother Mamie Till. Graball Landing on the Tallahatchie River in Mississippi is believed to be where Till\'s body was retrieved from the river and the Tallahatchie County Second District Courthouse in Sumner was where the trial of and acquittal of Roy Bryant and J. W. Milam for Till\'s murder took place.'
  },
  {
    name: 'Florissant Fossil Beds',
    location: 'Colorado',
    latitude: 38.92,
    longitude: -105.27,
    agency: 'NPS',
    date_established: 'August 20, 1969',
    area: 6300.0,
    description: 'Huge petrified redwoods and incredibly detailed fossils of ancient insects and plants reveal a very different landscape in Colorado of almost 35 million years ago in the Eocene age.'
  },
  {
    name: 'Fort Frederica',
    location: 'Georgia',
    latitude: 31.224,
    longitude: -81.393,
    agency: 'NPS',
    date_established: 'May 26, 1936',
    area: 305.0,
    description: 'Built by James Oglethorpe between 1736 and 1748, these remnants of a fort and town protected the southern boundary of the British colony of Georgia from Spanish raids. It was a few miles from the site of the Battle of Bloody Marsh.'
  },
  {
    name: 'Fort Matanzas',
    location: 'Florida',
    latitude: 29.715,
    longitude: -81.239,
    agency: 'NPS',
    date_established: 'October 15, 1924',
    area: 300.11,
    description: 'This 1740 Spanish fort guarded Matanzas Inlet, the southern mouth of the Matanzas River, which allowed access to St. Augustine. The monument is managed in conjunction with Castillo de San Marcos National Monument and also protects 100 acres (0.40 km2) of salt marsh and barrier islands.'
  },
  {
    name: 'Fort McHenry',
    location: 'Maryland',
    latitude: 39.263,
    longitude: -76.579,
    agency: 'NPS',
    date_established: 'March 3, 1925',
    area: 43.26,
    description: 'The only place designated a national monument and historic shrine, Fort McHenry is a star-shaped fort best known for its role in the War of 1812 when it successfully defended Baltimore Harbor from an attack by the British navy. The events inspired Francis Scott Key to write "The Star-Spangled Banner".'
  },
  {
    name: 'Fort Monroe',
    location: 'Virginia',
    latitude: 37.004,
    longitude: -76.308,
    agency: 'NPS',
    date_established: 'November 1, 2011',
    area: 367.12,
    description: 'The six-sided star fort spans the American story from the 17th to the 21st centuries: Captain John Smith\'s journeys, a haven of freedom for the enslaved during the Civil War, and a bastion of defense for the Chesapeake Bay.'
  },
  {
    name: 'Fort Ord',
    location: 'California',
    latitude: 36.639167,
    longitude: -121.735278,
    agency: 'BLM',
    date_established: 'April 20, 2012',
    area: 14658.0,
    description: 'Fort Ord was an Army post from 1917 to 1994. It now has recreational trails and various wildlife in grassland, chaparral, and woodland ecosystems.'
  },
  {
    name: 'Fort Pulaski',
    location: 'Georgia',
    latitude: 32.027,
    longitude: -80.89,
    agency: 'NPS',
    date_established: 'October 15, 1924',
    area: 5623.1,
    description: 'In 1862 during the American Civil War, the Union Army successfully tested a rifled cannon against the defending Confederates, rendering brick fortifications obsolete. Fort Pulaski was also used as a prisoner-of-war camp during the war. The national monument includes most of Cockspur Island (containing the fort) and all of adjacent McQueens Island.'
  },
  {
    name: 'Fort Stanwix',
    location: 'New York',
    latitude: 43.218,
    longitude: -75.459,
    agency: 'NPS',
    date_established: 'August 21, 1935',
    area: 15.52,
    description: 'Fort Stanwix guarded a strategic 18th century portage known as the Oneida Carrying Place. It was built during the French and Indian War (1754\u20131763). The fort successfully resisted the 1777 siege by a British invasion army during the Saratoga campaign of the American Revolutionary War. Erased by the development of Rome, New York, it was rebuilt as a national monument in the late 1970s.'
  },
  {
    name: 'Fort Union',
    location: 'New Mexico',
    latitude: 35.925,
    longitude: -105.009,
    agency: 'NPS',
    date_established: 'April 5, 1956',
    area: 720.6,
    description: 'A frontier military post and supply depot in the late 19th century, it sat at the intersection of the Mountain and Cimarron Branches of the old Santa Fe Trail.'
  },
  {
    name: 'Fossil Butte',
    location: 'Wyoming',
    latitude: 41.86,
    longitude: -110.77,
    agency: 'NPS',
    date_established: 'October 23, 1972',
    area: 8198.0,
    description: 'Fossil Butte preserves the 50-million-year-old Green River lake beds, the best paleontological record of tertiary aquatic communities in North America. Fossils including fish, alligators, bats, turtles, dog-sized horses, insects, and many other species of plants and animals suggest that the region was a low, subtropical, freshwater basin when the sediments accumulated, over about a 2-million-year period.'
  },
  {
    name: 'Freedom Riders',
    location: 'Alabama',
    latitude: 33.658,
    longitude: -85.831,
    agency: 'NPS',
    date_established: 'January 12, 2017',
    area: 5.96,
    description: 'Preserves two sites in and near Anniston, Alabama during the civil rights movement\u2014a former Greyhound bus station in the town where Freedom Riders were attacked by a racist mob and the site outside town where their bus was burned.'
  },
  {
    name: 'George Washington Birthplace',
    location: 'Virginia',
    latitude: 38.1861,
    longitude: -76.9305,
    agency: 'NPS',
    date_established: 'January 23, 1930',
    area: 653.18,
    description: 'Representative of 18th-century Virginia tobacco farms, this site is the birthplace and boyhood environment of George Washington. The entrance includes a Memorial Shaft obelisk of Vermont marble that is a one-tenth scale replica of the Washington Monument in Washington, D.C. Also within the monument are the historic birthplace home area, a kitchen house, and the Washington family burial ground.'
  },
  {
    name: 'George Washington Carver',
    location: 'Missouri',
    latitude: 36.986,
    longitude: -94.354,
    agency: 'NPS',
    date_established: 'July 14, 1943',
    area: 210.0,
    description: 'The site preserves Moses Carver\'s farm, which was the boyhood home of George Washington Carver, a scientist and educator who developed many uses for peanuts. It was the first national monument dedicated to an African American and first to a non-president.'
  },
  {
    name: 'Giant Sequoia',
    location: 'California',
    latitude: 36.04,
    longitude: -118.5,
    agency: 'USFS',
    date_established: 'April 15, 2000',
    area: 352626.0,
    description: 'The monument includes 38 of the 39 giant sequoia groves in the Sequoia National Forest, amounting to about half of the sequoia groves currently in existence. This includes one of the ten largest giant sequoias, the Boole Tree. Its two parts are around Kings Canyon and Sequoia National Parks in Sequoia National Forest.'
  },
  {
    name: 'Gila Cliff Dwellings',
    location: 'New Mexico',
    latitude: 33.24,
    longitude: -108.28,
    agency: 'NPS',
    date_established: 'November 16, 1907',
    area: 533.13,
    description: 'Located within the Gila Wilderness, the people of the Mogollon culture lived in these cliff dwellings 180 feet (55 m) above the canyon floor from the 1280s through the early 14th century. They lived in five caves with 46 rooms.'
  },
  {
    name: 'Gold Butte',
    location: 'Nevada',
    latitude: 36.281,
    longitude: -114.201,
    agency: 'BLM',
    date_established: 'December 28, 2016',
    area: 296937.0,
    description: 'This Mojave Desert landscape of dramatic red sandstone and canyons has forested mountains, ancient rock art, rock shelters, and a mining ghost town. It is an important habitat of the Mojave Desert tortoise.'
  },
  {
    name: 'Governors Island',
    location: 'New York',
    latitude: 40.691,
    longitude: -74.016,
    agency: 'NPS',
    date_established: 'January 19, 2001',
    area: 22.91,
    description: 'From 1783 to 1966, Governors Island in New York Harbor was an Army post, and from 1966 to 1996 it was a Coast Guard installation. Located on Governors Island are Castle Williams and Fort Jay, which served as outposts to protect New York City from sea attack.'
  },
  {
    name: 'Grand Canyon\u2013Parashant',
    location: 'Arizona',
    latitude: 36.4,
    longitude: -113.7,
    agency: 'BLM, NPS',
    date_established: 'January 11, 2000',
    area: 1021030.0,
    description: 'Located on the northern rim of the Grand Canyon on the Shivwits Plateau, this diverse landscape includes geologic resources including millennia of eroded formations forming canyons, cliffs and buttes; abundant fossils of ancient marine invertebrates; and desert volcanic peaks. Archaeological sites preserve artifacts of the Ancestral Puebloans, while abandoned ranches and mills were left behind by early pioneers. A fifth of the monument is also within Lake Mead National Recreation Area; Grand Canyon-Parashant is not considered an official unit of the park system. There are no paved roads or visitor services but offroad vehicles can reach scenic viewpoints.'
  },
  {
    name: 'Grand Portage',
    location: 'Minnesota',
    latitude: 47.96,
    longitude: -89.68,
    agency: 'NPS',
    date_established: 'January 27, 1960',
    area: 709.97,
    description: 'The Grand Portage itself is an 8.5-mile (13.7 km) footpath which bypasses a set of waterfalls on the Pigeon River near Lake Superior. The region was a vital trade route and center of fur trade activity as well as an Anishinaabeg Ojibwe heritage site.'
  },
  {
    name: 'Grand Staircase\u2013Escalante',
    location: 'Utah',
    latitude: 37.4,
    longitude: -111.68,
    agency: 'BLM',
    date_established: 'September 18, 1996',
    area: 1870000.0,
    description: 'The Grand Staircase, the Kaiparowits Plateau, and the Canyons of the Escalante make up the three areas of the monument, home to unique dinosaur fossils, sandstone arches, and the sequence of layers of rock units spanning 400 million years. It is notable for its paleontological finds and geology, and it was the first monument to be maintained by the Bureau of Land Management.'
  },
  {
    name: 'Hagerman Fossil Beds',
    location: 'Idaho',
    latitude: 42.79,
    longitude: -114.95,
    agency: 'NPS',
    date_established: 'November 18, 1988',
    area: 4351.15,
    description: 'This monument contains the largest concentration of Hagerman horse fossils in North America. It protects the world\'s richest known fossil deposits from the late Pliocene epoch, 3.5 million years ago. These plants and animals represent the last glimpse of time that existed before the Ice Age, and the earliest appearances of modern flora and fauna.'
  },
  {
    name: 'Hanford Reach',
    location: 'Washington',
    latitude: 46.48,
    longitude: -119.53,
    agency: 'FWS, DOE',
    date_established: 'June 8, 2000',
    area: 194450.93,
    description: 'Created from what used to be the security buffer surrounding the Hanford Nuclear Reservation, this area has been untouched by development or agriculture since 1943. The area is part of the Columbia River Plateau, formed by basalt lava flows and water erosion, and is named after the Hanford Reach, the last free flowing section of the Columbia River.'
  },
  {
    name: 'Harriet Tubman Underground Railroad',
    location: 'Maryland',
    latitude: 38.4483,
    longitude: -76.1387,
    agency: 'FWS',
    date_established: 'March 25, 2013',
    area: 480.0,
    description: 'Harriet Tubman was a famed conductor on the Underground Railroad, leading dozens of slaves to freedom. This monument includes sites relating to Tubman\'s life, including the slave-built Stewart\'s Canal and the home of Jacob Jackson. The areas within the national monument that are managed by the NPS have been redesignated as a National Historical Park (NHP), and the FWS lands are in Blackwater National Wildlife Refuge.'
  },
  {
    name: 'Hohokam Pima',
    location: 'Arizona',
    latitude: 33.19,
    longitude: -111.91,
    agency: 'NPS',
    date_established: 'October 21, 1972',
    area: 1690.0,
    description: 'Hohokam Pima is part of the Gila River Indian Community and not open to the public. The monument includes the site of the Snaketown settlement, archeological remains of the Hohokam culture, which lived in the area until 1200. Excavations of pit houses, fields, and irrigation canals were refilled in the 1960s, leaving nothing above ground.'
  },
  {
    name: 'Hovenweep',
    location: 'Colorado',
    latitude: 37.38,
    longitude: -109.08,
    agency: 'NPS',
    date_established: 'March 2, 1923',
    area: 784.93,
    description: 'Hovenweep contains six clusters of Native American ruins. Holly Canyon, Hackberry Canyon, Cutthroat Castle and Goodman Point are in Colorado and Square Tower and Cajon are in Utah. Ancestral Puebloans lived in the Hovenweep area from 1150 to 1350.'
  },
  {
    name: 'Ironwood Forest',
    location: 'Arizona',
    latitude: 32.46,
    longitude: -111.57,
    agency: 'BLM',
    date_established: 'June 9, 2000',
    area: 129055.0,
    description: 'Located within the Sonoran Desert, significant concentrations of ironwood (Olneya tesota) trees and two endangered animal and plant species are found within the monument. More than 200 Hohokam and Paleoindian archeological sites have been identified from between 600 and 1450 AD'
  },
  {
    name: 'Jewel Cave',
    location: 'South Dakota',
    latitude: 43.73,
    longitude: -103.83,
    agency: 'NPS',
    date_established: 'February 7, 1908',
    area: 1273.51,
    description: 'Jewel Cave is the third longest cave in the world, with more than 215 miles (346 km) of mapped passageways beneath the Black Hills of South Dakota. The entrance was discovered by miners in 1900 and was named for its calcite crystals.'
  },
  {
    name: 'John Day Fossil Beds',
    location: 'Oregon',
    latitude: 44.67,
    longitude: -120.05,
    agency: 'NPS',
    date_established: 'October 26, 1974',
    area: 14062.02,
    description: 'Located within the John Day River Basin, the Fossil Beds have a well-preserved, complete record of fossil plants and animals from more than 40 of the 65 million years of the Cenozoic Era. The monument is divided into three units: Painted Hills, named for its delicately colored stratifications; Sheep Rock; and Clarno. Blue Basin near Sheep Rock is a volcanic ash bowl transformed into claystone by eons of erosion, colored pastel blue by minerals.'
  },
  {
    name: 'Jurassic',
    location: 'Utah',
    latitude: 39.32,
    longitude: -110.69,
    agency: 'BLM',
    date_established: 'March 12, 2019',
    area: 850.0,
    description: 'More than 12,000 bones from at least 74 dinosaurs have been found at the Cleveland-Lloyd Dinosaur Quarry so far, making it the paleontological site with the greatest concentration of bones from the Jurassic period. The bones come from a variety of mostly carnivorous species (more than half Allosaurus) and it is unknown why they are mixed together.'
  },
  {
    name: 'Kasha-Katuwe Tent Rocks',
    location: 'New Mexico',
    latitude: 35.67,
    longitude: -106.42,
    agency: 'BLM',
    date_established: 'January 17, 2001',
    area: 4647.0,
    description: 'Kasha-Katuwe is known for its geology of layers of volcanic rock and ash deposited by a volcanic explosion. Over time, weathering and erosion of these layers has created canyons and tent rocks. The tent rocks themselves are cones of soft pumice and tuff beneath harder caprocks.'
  },
  {
    name: 'Katahdin Woods and Waters',
    location: 'Maine',
    latitude: 45.97,
    longitude: -68.62,
    agency: 'NPS',
    date_established: 'August 24, 2016',
    area: 87564.27,
    description: 'Katahdin Woods and Waters National Monument protects mountains and wilderness in the North Maine Woods, including a section of the East Branch Penobscot River. It borders the eastern side of Baxter State Park.'
  },
  {
    name: 'Lava Beds',
    location: 'California',
    latitude: 41.71,
    longitude: -121.51,
    agency: 'NPS',
    date_established: 'November 21, 1925',
    area: 46692.42,
    description: 'This is the site of the largest concentration of lava tube caves in North America. It also includes Petroglyph Point, one of the largest panels of Native American rock art. The monument lies on the northeast flank of the Medicine Lake Volcano, the largest volcano in the Cascade Range.'
  },
  {
    name: 'Little Bighorn Battlefield',
    location: 'Montana',
    latitude: 45.57,
    longitude: -107.43,
    agency: 'NPS',
    date_established: 'July 1, 1940',
    area: 765.34,
    description: 'The 1876 Battle of the Little Bighorn between George Armstrong Custer\'s 7th Cavalry and a combined Lakota Sioux, Northern Cheyenne and Arapaho force led by Sitting Bull and Crazy Horse took place here.'
  },
  {
    name: 'Marianas Trench Marine',
    location: 'Northern Mariana Islands',
    latitude: 20.0,
    longitude: 145.0,
    agency: 'FWS, NOAA',
    date_established: 'January 6, 2009',
    area: 61077668.0,
    description: 'This marine monument includes the waters and submerged lands of the three northernmost islands of the Mariana Archipelago, the submerged lands of 21 designated volcanic features, and the Mariana Trench, the deepest place on Earth.'
  },
  {
    name: 'Medgar and Myrlie Evers Home',
    location: 'Mississippi',
    latitude: 32.341,
    longitude: -90.213,
    agency: 'NPS',
    date_established: 'December 10, 2020',
    area: 0.74,
    description: 'Medgar Evers was a civil rights activist who served as a field secretary for the NAACP to end segregation and promote voting rights in Mississippi. He was assassinated outside his home in Jackson by a white supremacist in 1963. His wife Myrlie moved away but owned the home until 1993 and later served as chairwoman of the NAACP.'
  },
  {
    name: 'Military Working Dog Teams',
    location: 'Texas',
    latitude: 29.39,
    longitude: -98.617,
    agency: 'DOD',
    date_established: 'October 28, 2013',
    area: 0.069,
    description: 'The memorial at Lackland Air Force Base, the home of the U.S. Department of Defense Military Working Dog Program, honors the efforts and sacrifices of military working dogs in the service of the United States.'
  },
  {
    name: 'Mill Springs Battlefield',
    location: 'Kentucky',
    latitude: 37.07,
    longitude: -84.74,
    agency: 'NPS',
    date_established: 'September 22, 2020',
    area: 1459.0,
    description: 'The Battle of Mill Springs was fought at this site in January 1862 and was the first major victory for the Union Army. The one-day battle saw Union forces led by George Henry Thomas defeat Confederate regiments led by Felix Zollicoffer, who died in action. The site is now largely an open field with a visitor center adjacent to Mill Springs National Cemetery.'
  },
  {
    name: 'Misty Fjords',
    location: 'Alaska',
    latitude: 55.62,
    longitude: -130.61,
    agency: 'USFS',
    date_established: 'December 1, 1978',
    area: 2294072.0,
    description: 'Called The Yosemite of the North for its similar geology, the monument has widespread light-colored granite, about 50 to 70 million years old (Eocene Epoch to Cretaceous Period), that has been sculpted by glaciers that gouged deep U-shaped troughs. Mountain goats live in the higher elevations, while brown and black bear are also common. Part of Tongass National Forest.'
  },
  {
    name: 'Mojave Trails',
    location: 'California',
    latitude: 34.6,
    longitude: -116.0,
    agency: 'BLM',
    date_established: 'February 12, 2016',
    area: 1600000.0,
    description: 'The Mojave Trails National Monument includes several rugged mountain ranges, ancient lava flows at the Amboy Crater, and the Cadiz Dunes. Human features are Native American trading routes, World War II-era training camps, and an undeveloped segment of Route 66.'
  },
  {
    name: 'Montezuma Castle',
    location: 'Arizona',
    latitude: 34.61,
    longitude: -111.84,
    agency: 'NPS',
    date_established: 'December 8, 1906',
    area: 1015.52,
    description: 'Montezuma Castle features cliff dwellings built by the Pre-Columbian Sinagua people between 1100 and 1400 AD. The site\'s name is a misnomer as is it has no connection to Montezuma. However, some modern day native tribes that do have connections to the site include the Yavapai, Hopi, and Zuni. The monument also includes Montezuma Well, which has been used for irrigation since the 8th century.'
  },
  {
    name: 'Mount St. Helens Volcanic',
    location: 'Washington',
    latitude: 46.23,
    longitude: -122.18,
    agency: 'USFS',
    date_established: 'August 27, 1982',
    area: 113205.0,
    description: 'Following the 1980 eruption of the now-8,363-foot-tall (2,549 m) Mount St. Helens, the environment was left to respond naturally to the disturbance. The volcanic crater is surrounded by a pumice plain with deposits from the landslide, preserved wind-blown trees, and the Ape Cave lava tube. Part of Gifford Pinchot National Forest.'
  },
  {
    name: 'Muir Woods',
    location: 'California',
    latitude: 37.89,
    longitude: -122.58,
    agency: 'NPS',
    date_established: 'January 9, 1908',
    area: 553.55,
    description: 'Part of the Golden Gate National Recreation Area, it protects one of the last old growth Coast redwood (Sequoia sempervirens) groves in the San Francisco Bay Area as well as one of the most easily accessed.'
  },
  {
    name: 'Natural Bridges',
    location: 'Utah',
    latitude: 37.58,
    longitude: -110.0,
    agency: 'NPS',
    date_established: 'April 16, 1908',
    area: 7636.49,
    description: 'Located at the junction of White Canyon and Armstrong Canyon, it is part of the Colorado River drainage. It features the second- and third-largest natural bridges in the western hemisphere, carved from the white Triassic sandstone of the Cedar Mesa Formation that gives White Canyon its name.'
  },
  {
    name: 'Navajo',
    location: 'Arizona',
    latitude: 36.68,
    longitude: -110.53,
    agency: 'NPS',
    date_established: 'March 20, 1909',
    area: 360.0,
    description: 'This monument preserves three of the most intact cliff dwellings of the Ancestral Puebloan people. The monument is high on the Shonto plateau, overlooking the Tsegi Canyon system on the Navajo Nation in Northern Arizona.'
  },
  {
    name: 'Newberry Volcanic',
    location: 'Oregon',
    latitude: 43.69,
    longitude: -121.25,
    agency: 'USFS',
    date_established: 'November 5, 1990',
    area: 57323.0,
    description: 'This monument protects the area around the Newberry Volcano and its geologic features including Lava Butte and the Lava River Cave. The volcanic site in the Cascades is still geothermally active and includes lakes and ancient lava flow fields. Part of Deschutes National Forest.'
  },
  {
    name: 'Northeast Canyons and Seamounts Marine',
    location: 'Atlantic Ocean',
    latitude: 40.4,
    longitude: -68.0,
    agency: 'FWS, NOAA',
    date_established: 'September 15, 2016',
    area: 3144320.0,
    description: 'The monument protects four underwater seamounts and three very deep canyons in the continental shelf 100 miles (160 km) off the coast of Massachusetts, home to deep-water corals, endangered whales, and migratory fish and birds.'
  },
  {
    name: 'Oregon Caves',
    location: 'Oregon',
    latitude: 42.1,
    longitude: -123.41,
    agency: 'NPS',
    date_established: 'July 12, 1909',
    area: 4554.03,
    description: 'The monument is known for its marble caves, as well as for the Pleistocene jaguar and grizzly bear fossils found in the deeper caves. There are four primary buildings: The Oregon Caves Chateau, The Ranger Residence, The Chalet, and the old Dormitory.'
  },
  {
    name: 'Organ Mountains\u2013Desert Peaks',
    location: 'New Mexico',
    latitude: 32.3,
    longitude: -106.55,
    agency: 'BLM',
    date_established: 'May 21, 2014',
    area: 419532.0,
    description: 'The protected area includes five mountain ranges that rise above the Chihuahua Desert: Robledo Mountains, Sierra de las Uvas, Do\u00f1a Ana Mountains, Organ Mountains and Potrillo Mountains. There are approximately 870 vascular plant species, and the area is popular for hiking and climbing.'
  },
  {
    name: 'Organ Pipe Cactus',
    location: 'Arizona',
    latitude: 32.04,
    longitude: -112.86,
    agency: 'NPS',
    date_established: 'April 13, 1937',
    area: 330688.86,
    description: 'This monument is the only place in the United States where the organ pipe cactus grows wild. There are many other types of cacti and desert flora native to the Sonoran Desert. The Bates Well Ranch and Dos Lomitas Ranch are also within the monument.'
  },
  {
    name: 'Pacific Remote Islands Marine',
    location: 'US Minor Outlying Islands',
    latitude: 16.75,
    longitude: -169.52,
    agency: 'FWS, NOAA',
    date_established: 'January 6, 2009',
    area: 313941851.0,
    description: 'The marine monument consists of Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Palmyra Atoll, and Wake Island, which are scattered across the Pacific Ocean southwest of Hawaii. It was expanded in 2014 to include the oceans 200 nmi (370 km) offshore, approximately a 16-fold increase in size, to conserve vast populations of unique corals, fish, marine mammals, birds, and plants.'
  },
  {
    name: 'Papah\u0101naumoku\u0101kea Marine',
    location: 'Hawaii',
    latitude: 25.7,
    longitude: -171.73,
    agency: 'FWS, NOAA',
    date_established: 'June 15, 2006',
    area: 372848597.0,
    description: 'The marine monument consists of ocean waters and 10 islands and atolls of the Northwestern Hawaiian Islands including Midway Atoll. The monument was created in 2006 with 139,797 square miles (362,070 km2), and its boundaries were expanded on August 26, 2016, more than quadrupling in size to be the largest protected area on Earth, almost as large as the Gulf of Mexico. The Northwestern Hawaiian Islands archipelago "is the planet\'s largest seabird gathering site, with more than 14 million birds from 22 species, and is home to nearly all Laysan albatrosses and the remaining endangered Hawaiian monk seals." It was declared a World Heritage Site in 2010.'
  },
  {
    name: 'Petroglyph',
    location: 'New Mexico',
    latitude: 35.16,
    longitude: -106.76,
    agency: 'NPS',
    date_established: 'June 27, 1990',
    area: 7209.3,
    description: 'This monument protects a variety of cultural and natural resources, including five volcanic cones, hundreds of archeological sites and an estimated 25,000 images carved by native peoples and early Spanish settlers. It lies on West Mesa, a volcanic basalt escarpment.'
  },
  {
    name: 'Pipe Spring',
    location: 'Arizona',
    latitude: 36.86,
    longitude: -112.73,
    agency: 'NPS',
    date_established: 'May 31, 1923',
    area: 40.0,
    description: 'Rich with Native American, early explorer, and Mormon pioneer history, this site shows Ancestral Puebloans and Kaibab Paiute Indian and pioneer life in the Old West, including the cabin where explorer John Wesley Powell\'s survey crew stayed in 1871. The water of Pipe Spring, discovered in 1858, made it possible for plants, animals, and people to live in this dry desert region.'
  },
  {
    name: 'Pipestone',
    location: 'Minnesota',
    latitude: 44.01,
    longitude: -96.33,
    agency: 'NPS',
    date_established: 'August 25, 1937',
    area: 281.78,
    description: 'This monument preserves traditional catlinite quarries used to make ceremonial pipes, vitally important to traditional Plains Indian culture. The quarries are sacred to the Sioux and Lakota people and are historically neutral territory where enrolled citizens of all tribes can quarry the stone.'
  },
  {
    name: 'Pompeys Pillar',
    location: 'Montana',
    latitude: 45.99,
    longitude: -108.001,
    agency: 'BLM',
    date_established: 'January 17, 2001',
    area: 51.0,
    description: 'Pompeys Pillar is a 150-foot (46 m) sandstone pillar from the late Cretaceous Hell Creek Formation next to the Yellowstone River. It has an abundance of Native American petroglyphs, as well as the signature of William Clark, who named the formation after Sacagawea\'s infant son.'
  },
  {
    name: 'Poverty Point',
    location: 'Louisiana',
    latitude: 32.63,
    longitude: -91.41,
    agency: 'NPS',
    date_established: 'October 31, 1988',
    area: 910.85,
    description: 'Poverty Point is a prehistoric archeological site that dates from between 1650 and 700 BC and consisting of six earthen rings and seven mounds. The diameter of the outside ridge is 0.75 miles (1.21 km), and the largest mound rises 51 feet (16 m). It was declared a World Heritage Site in 2014.'
  },
  {
    name: 'Prehistoric Trackways',
    location: 'New Mexico',
    latitude: 32.35,
    longitude: -106.9,
    agency: 'BLM',
    date_established: 'March 30, 2009',
    area: 5280.0,
    description: 'Prehistoric Trackways contains fossilized footprints of numerous Paleozoic amphibians, reptiles, and insects, as well as fossilized plants and petrified wood dating back approximately 280 million years.'
  },
  {
    name: 'President Lincoln and Soldiers\' Home',
    location: 'District of Columbia',
    latitude: 38.9416,
    longitude: -77.0117,
    agency: 'AFRH',
    date_established: 'July 7, 2000',
    area: 2.3,
    description: 'President Abraham Lincoln and his family resided seasonally on the grounds of the Armed Forces Retirement Home, which was founded in 1851 for homeless and disabled war veterans. The national monument and visitor center are preserved and operated by President Lincoln\'s Cottage at the Soldiers\' Home on behalf of the Armed Forces Retirement Home.'
  },
  {
    name: 'Rainbow Bridge',
    location: 'Utah',
    latitude: 37.08,
    longitude: -110.96,
    agency: 'NPS',
    date_established: 'May 30, 1910',
    area: 160.0,
    description: 'Rainbow Bridge is one of the world\'s largest natural bridges. It stands 290 feet (88 m) tall and spans 275 feet (84 m) wide; the top of the bridge is 42 feet (13 m) thick and 33 feet (10 m) wide. It was made from sandstone formed during the Triassic and the Jurassic periods.'
  },
  {
    name: 'R\u00edo Grande del Norte',
    location: 'New Mexico',
    latitude: 36.66667,
    longitude: -105.7,
    agency: 'BLM',
    date_established: 'March 25, 2013',
    area: 242710.0,
    description: 'This site includes part of the Rio Grande Gorge and extinct volcanoes of the Taos Plateau volcanic field. There are a variety of archaeological and historical artifacts including petroglyphs and Hispanic settlement sites. It is home to an assortment of wildlife and recreation opportunities.'
  },
  {
    name: 'Rose Atoll Marine',
    location: 'American Samoa',
    latitude: -14.55,
    longitude: -168.54,
    agency: 'FWS, NOAA',
    date_established: 'January 6, 2009',
    area: 8609045.0,
    description: 'This marine monument consists of the two small islands of Rose Atoll, its lagoon, and waters surrounding it. The atoll\'s coral reef is colored by distinct pink coralline algae and provides habitat to nesting hawksbill and green turtles, large predators including whitetip reef shark, and endangered fish like the humphead wrasse. Seventeen species of protected seabirds nest on the island. It is east of American Samoa and the southernmost point in the U.S.'
  },
  {
    name: 'Russell Cave',
    location: 'Alabama',
    latitude: 34.97,
    longitude: -85.8,
    agency: 'NPS',
    date_established: 'May 11, 1961',
    area: 310.45,
    description: 'Donated by the National Geographic Society, the cave\'s exceptionally large main entrance was used as a shelter by prehistoric Indians from the earliest known human settlement in the southeastern United States. The rock from which Russell Cave was formed originated in sediments deposited over 300 million years ago at the bottom of an inland sea that covered the region.'
  },
  {
    name: 'Saint Francis Dam Disaster',
    location: 'California',
    latitude: 34.55,
    longitude: -118.51,
    agency: 'USFS',
    date_established: 'March 12, 2019',
    area: 353.0,
    description: 'The St. Francis Dam was a 700 ft (210 m)-wide dam that supported a reservoir for Los Angeles\'s water supply. It catastrophically failed in 1928 and the flood killed at least 431 people. The site now has ruins of the dam\'s concrete base in a forested valley. Part of Angeles National Forest.'
  },
  {
    name: 'Salinas Pueblo Missions',
    location: 'New Mexico',
    latitude: 34.26,
    longitude: -106.06,
    agency: 'NPS',
    date_established: 'November 1, 1909',
    area: 1071.42,
    description: 'Formerly known as Gran Quivira National Monument, it is where Native American trade communities of Tiwa- and Tompiro-speaking Puebloans lived when Spanish Franciscan missionaries made contact in the 17th century. What remains are the ruins of four mission churches, at Quarai, Ab\u00f3, and Gran Quivira, and the partially excavated pueblo of Las Humanas.'
  },
  {
    name: 'San Gabriel Mountains',
    location: 'California',
    latitude: 34.22,
    longitude: -118.06,
    agency: 'USFS',
    date_established: 'October 10, 2014',
    area: 345222.0,
    description: 'The San Gabriel mountains in northern Los Angeles County and western San Bernardino County, California have peaks as high as 10,068 ft (3,069 m), providing a habitat for the endangered  California condor and Nelson\'s bighorn sheep. It is an important watershed and recreation site for the Los Angeles area and contains more than 600 archaeological sites. Part of Angeles and San Bernardino National Forests.'
  },
  {
    name: 'San Juan Islands',
    location: 'Washington',
    latitude: 48.53,
    longitude: -123.03,
    agency: 'BLM',
    date_established: 'March 25, 2013',
    area: 970.0,
    description: 'The rugged landscapes of the San Juan Islands, an archipelago in the Pacific Northwest, are a habitat for orcas, eagles, and seals and provide opportunities for kayaking, birdwatching, and other activities. The monument protects numerous small rocks, islands, and points, including the Cattle Point Light.'
  },
  {
    name: 'Sand to Snow',
    location: 'California',
    latitude: 34.08,
    longitude: -116.68,
    agency: 'BLM, USFS',
    date_established: 'February 12, 2016',
    area: 154000.0,
    description: 'This monument extends from the Mojave and Sonoran Desert floors up to over 10,000 feet in the San Bernardino Mountains, including the San Gorgonio Wilderness. The site protects 1,700 Native American petroglyphs and other archaeological sites. Part is in San Bernardino National Forest.'
  },
  {
    name: 'Santa Rosa and San Jacinto Mountains',
    location: 'California',
    latitude: 33.8,
    longitude: -116.7,
    agency: 'BLM, USFS',
    date_established: 'October 24, 2000',
    area: 280009.0,
    description: 'This monument preserves large portions of the Santa Rosa and San Jacinto ranges, the northernmost of the Peninsular Ranges. Parts are within San Bernardino National Forest and the California Desert Conservation Area.'
  },
  {
    name: 'Scotts Bluff',
    location: 'Nebraska',
    latitude: 41.83,
    longitude: -103.7,
    agency: 'NPS',
    date_established: 'December 12, 1919',
    area: 3004.73,
    description: 'Scotts Bluff is an important 19th century geologic formation and landmark on the Oregon Trail and Mormon Trail. It contains multiple bluffs on the south side of the North Platte River, but it is named after a prominent bluff called Scotts Bluff which rises more than 830 feet (250 m) above the plains at its highest point. The monument is composed of five rock formations named Crown Rock, Dome Rock, Eagle Rock, Saddle Rock, and Sentinel Rock.'
  },
  {
    name: 'Sonoran Desert',
    location: 'Arizona',
    latitude: 33.0,
    longitude: -112.46,
    agency: 'BLM',
    date_established: 'January 17, 2001',
    area: 486400.0,
    description: 'This monument protects a small portion of the Sonoran Desert. It is home to several federally listed endangered species and also has three wilderness areas, many significant archeological and historic sites, and remnants of several important historic trails.'
  },
  {
    name: 'Statue of Liberty',
    location: 'New York',
    latitude: 40.69,
    longitude: -74.04,
    agency: 'NPS',
    date_established: 'October 15, 1924',
    area: 58.38,
    description: 'This iconic statue, built in 1886 on Liberty Island and 151 feet (46 m) tall, commemorates the centennial of the signing of the United States Declaration of Independence and is a gesture of friendship from France to the U.S. Liberty Enlightening the World is a symbol of welcoming immigrants to the U.S. and is listed as a World Heritage Site. Ellis Island, where 12 million immigrants entering the U.S. passed through, is included in the monument.'
  },
  {
    name: 'Stonewall',
    location: 'New York',
    latitude: 40.73364,
    longitude: -74.00212,
    agency: 'NPS',
    date_established: 'June 24, 2016',
    area: 7.7,
    description: 'The Stonewall Inn is a gay bar in New York City and the site of the Stonewall riots of 1969, which are widely considered to be the single most important event leading to the gay liberation movement and the modern fight for LGBT rights in the United States. Also included is Christopher Park across the street.'
  },
  {
    name: 'Sunset Crater Volcano',
    location: 'Arizona',
    latitude: 35.36,
    longitude: -111.5,
    agency: 'NPS',
    date_established: 'May 30, 1930',
    area: 3040.0,
    description: 'Sunset Crater is the youngest in a string of volcanoes in the San Francisco volcanic field that is related to the nearby San Francisco Peaks. Final volcanic activity in the 13th century painted the upper portion of the cone with bright red and orange rocks, giving the volcano its name. Hikers can walk through a black lava flow and on a second cinder crater.'
  },
  {
    name: 'Timpanogos Cave',
    location: 'Utah',
    latitude: 40.44,
    longitude: -111.71,
    agency: 'NPS',
    date_established: 'October 14, 1922',
    area: 250.0,
    description: 'The Timpanogos cave system is in the Wasatch Range in the American Fork Canyon. Three main chambers are accessible: Hansen Cave, Middle Cave, and Timpanogos Cave. Many colorful cave features or speleothems can be seen, including helictites, cave bacon, cave columns, flowstone, cave popcorn, and cave drapery.'
  },
  {
    name: 'Tonto',
    location: 'Arizona',
    latitude: 33.65,
    longitude: -111.09,
    agency: 'NPS',
    date_established: 'October 21, 1907',
    area: 1120.0,
    description: 'Lying on the northeastern edge of the Sonoran Desert along the Salt River, Tonto preserves two cliff dwellings that were occupied by the Salado culture during the 13th to 15th centuries. The monument is surrounded by Tonto National Forest.'
  },
  {
    name: 'Tule Lake',
    location: 'California',
    latitude: 41.89,
    longitude: -121.37,
    agency: 'NPS, FWS',
    date_established: 'December 5, 2008',
    area: 1391.0,
    description: 'Tule Lake Segregation Center was the largest of ten concentration camps used for the internment of Japanese Americans during World War II. 29,800 US citizens and immigrants were held there, including those segregated from other camps for political reasons. The site includes the main segregation camp; Camp Tulelake, which was originally a Civilian Conservation Corps work site and later a prisoner-of-war camp and extension of the segregation center; and the Peninsula/Castle Rock bluff in Tule Lake National Wildlife Refuge. Originally designated as part of World War II Valor in the Pacific National Monument, which was divided and renamed March 12, 2019.'
  },
  {
    name: 'Tule Springs Fossil Beds',
    location: 'Nevada',
    latitude: 36.32,
    longitude: -115.27,
    agency: 'NPS',
    date_established: 'December 19, 2014',
    area: 22650.0,
    description: 'A major archaeological site north of Las Vegas where thousands of prehistoric fossils, including mammoth, lion, and camel, have been found in an area that was once a wetland.'
  },
  {
    name: 'Tuzigoot',
    location: 'Arizona',
    latitude: 34.79,
    longitude: -112.04,
    agency: 'NPS',
    date_established: 'July 25, 1939',
    area: 811.89,
    description: 'Tuzigoot preserves a two- to three-story pueblo ruin on the summit of a limestone and sandstone ridge in the Verde Valley. It was built by the Sinagua people between 1125 and 1400.'
  },
  {
    name: 'Upper Missouri River Breaks',
    location: 'Montana',
    latitude: 47.78,
    longitude: -109.02,
    agency: 'BLM',
    date_established: 'January 17, 2001',
    area: 377346.0,
    description: 'A series of badland areas characterized by rock outcroppings, steep bluffs and grassy plains along the 149-mile (240 km) Upper Missouri National Wild and Scenic River in central Montana, The Breaks is home to at least 60 mammal species and hundreds of bird species. Charles Marion Russell often painted here, and Lewis and Clark traveled on this pathway.'
  },
  {
    name: 'Vermilion Cliffs',
    location: 'Arizona',
    latitude: 36.81,
    longitude: -111.74,
    agency: 'BLM',
    date_established: 'November 9, 2000',
    area: 279566.0,
    description: 'Steep eroded escarpments consisting primarily of sandstone, siltstone, limestone and shale rise as much as 3,000 feet (910 m) above their base. These sedimentary rocks have been deeply eroded for millions of years, exposing hundreds of layers of richly colored rock strata along Paria Canyon. The Coyote Buttes, across the Paria Plateau from the Canyon and Vermilion Cliffs, include undulating slopes like The Wave.'
  },
  {
    name: 'Virgin Islands Coral Reef',
    location: 'US Virgin Islands',
    latitude: 18.31,
    longitude: -64.72,
    agency: 'NPS',
    date_established: 'January 17, 2001',
    area: 12708.07,
    description: 'These coral reefs, sandy sea bottoms, seagrass beds, and mangrove forests are in a 3-mile (4.8 km) marine belt that surrounds St John and Virgin Islands National Park.'
  },
  {
    name: 'Waco Mammoth',
    location: 'Texas',
    latitude: 31.606,
    longitude: -97.174,
    agency: 'NPS',
    date_established: 'July 10, 2015',
    area: 107.23,
    description: 'The Waco Mammoth National Monument is a paleontological site and museum in Waco, Texas, where fossils of twenty-four Columbian mammoths (Mammuthus columbi) and other mammals from the Pleistocene Epoch have been uncovered. The site is the largest known concentration of a single herd of mammoths dying from the same event, which is believed to have been a flash flood.'
  },
  {
    name: 'Walnut Canyon',
    location: 'Arizona',
    latitude: 35.17,
    longitude: -111.51,
    agency: 'NPS',
    date_established: 'November 30, 1915',
    area: 3529.26,
    description: 'Walnut Canyon protects dozens of cliff dwelling rooms constructed around the 12th century by the Sinagua people, who navigated the challenging cliffs to access sparse water. It lies on the Colorado Plateau and cuts through the Permian Kaibab Limestone, which exposes the Toroweap Formation and Coconino Sandstone.'
  },
  {
    name: 'Wupatki',
    location: 'Arizona',
    latitude: 35.52,
    longitude: -111.37,
    agency: 'NPS',
    date_established: 'December 9, 1924',
    area: 35422.13,
    description: 'Several settlement sites built by the Sinagua, Cohonina, and Ancestral Puebloans are scattered throughout the monument, showing evidence of trade and agriculture from the 6th to 13th centuries. About 2,000 Ancient Pueblo People moved here to farm after an 11th century eruption of Sunset Crater spread ash forming fertile soil.'
  },
  {
    name: 'Yucca House',
    location: 'Colorado',
    latitude: 37.25,
    longitude: -108.69,
    agency: 'NPS',
    date_established: 'December 19, 1919',
    area: 33.87,
    description: 'Designated a research national monument, it is a large unexcavated Ancestral Puebloan archeological site. The site is one of many Ancestral Puebloan village sites in the Montezuma Valley occupied between 900 and 1300 CE.'
  }
]

export default MONUMENTS;
