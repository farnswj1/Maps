import { Park } from 'types';

const PARKS: Park[] = [
  {
    title: 'Acadia National Park',
    lat: 44.338974,
    lng: -68.27343
  },
  {
    title: 'Anahuac National Wildlife Refuge',
    lat: 29.6103,
    lng: -94.449081
  },
  {
    title: 'Arches National Park',
    lat: 38.733082,
    lng: -109.592514
  },
  {
    title: 'Bandelier National Monument',
    lat: 35.767288,
    lng: -106.311607
  },
  {
    title: 'Bear Butte State Park',
    lat: 44.475296,
    lng: -103.424309
  },
  {
    title: 'Bridge Creek Wildlife Area',
    lat: 45.043449,
    lng: -118.949318
  },
  {
    title: 'Bryce Canyon National Park',
    lat: 37.593048,
    lng: -112.187332
  },
  {
    title: 'Buffalo National River',
    lat: 35.985512,
    lng: -92.757652
  },
  {
    title: 'Capitol Reef National Park',
    lat: 38.0896,
    lng: -111.14991
  },
  {
    title: 'Channel Islands National Park',
    lat: 33.998028,
    lng: -119.772949
  },
  {
    title: 'Chattahoochee National Forest',
    lat: 34.765972,
    lng: -84.143517
  },
  {
    title: 'Cherry Creek State Park',
    lat: 39.639973,
    lng: -104.831863
  },
  {
    title: 'Crater Lake National Park',
    lat: 42.944611,
    lng: -122.109245
  },
  {
    title: 'Danville Conservation Area',
    lat: 38.865097,
    lng: -91.504852
  },
  {
    title: 'Denali National Park and Preserve',
    lat: 63.129887,
    lng: -151.197418
  },
  {
    title: 'Egypt Valley Wildlife Area',
    lat: 40.115486,
    lng: -81.11409
  },
  {
    title: 'Everglades National Park',
    lat: 25.286615,
    lng: -80.898651
  },
  {
    title: 'Fort Berthold Indian Reservation',
    lat: 47.68388,
    lng: -102.354126
  },
  {
    title: 'Garden of Gods',
    lat: 38.87384,
    lng: -104.886665
  },
  {
    title: 'Gates of the Arctic National Park and Preserve',
    lat: 67.915199,
    lng: -153.46373
  },
  {
    title: 'Glacier Bay National Park and Preserve',
    lat: 58.665806,
    lng: -136.900208
  },
  {
    title: 'Golden Gate Canyon State Park',
    lat: 39.814339,
    lng: -105.395622
  },
  {
    title: 'Grand Canyon National Park',
    lat: 36.266033,
    lng: -112.363808
  },
  {
    title: 'Grand Teton National Park',
    lat: 43.790802,
    lng: -110.684944
  },
  {
    title: 'Grant Park',
    lat: 41.876465,
    lng: -87.621887
  },
  {
    title: 'Great Smoky Mountains National Park',
    lat: 35.611763,
    lng: -83.489548
  },
  {
    title: 'Gulf State Park',
    lat: 30.262793,
    lng: -87.636337
  },
  {
    title: 'Haleakal\u0101 National Park',
    lat: 20.701283,
    lng: -156.173325
  },
  {
    title: 'Honolulu Watershed Forest Preserve',
    lat: 21.363251,
    lng: -157.781265
  },
  {
    title: 'Hot Springs National Park',
    lat: 34.52153,
    lng: -93.042267
  },
  {
    title: 'Jackson Hole',
    lat: 43.582767,
    lng: -110.821999
  },
  {
    title: 'Joshua Tree National Park',
    lat: 33.881866,
    lng: -115.90065
  },
  {
    title: 'Kaloko-Honok\u014dhau National Historical Park',
    lat: 19.678328,
    lng: -156.020477
  },
  {
    title: 'Kartchner Caverns State Park',
    lat: 31.837551,
    lng: -110.347382
  },
  {
    title: 'Katmai National Park and Preserve',
    lat: 58.597813,
    lng: -154.693756
  },
  {
    title: 'Kenai Fjords National Park',
    lat: 60.043777,
    lng: -149.81636
  },
  {
    title: 'Kings Canyon National Park',
    lat: 36.887856,
    lng: -118.555145
  },
  {
    title: 'Kings Mountain State Park',
    lat: 35.130459,
    lng: -81.345444
  },
  {
    title: 'Kissimmee Prairie Preserve State Park',
    lat: 27.612417,
    lng: -81.053383
  },
  {
    title: 'Lake Clark National Park and Preserve',
    lat: 60.412697,
    lng: -154.323502
  },
  {
    title: 'Lake Eola Park',
    lat: 28.545021,
    lng: -81.372856
  },
  {
    title: 'Lantz Farm and Nature Preserve',
    lat: 39.516754,
    lng: -80.649948
  },
  {
    title: 'Little Sandy National Wildlife Refuge',
    lat: 32.590797,
    lng: -95.273666
  },
  {
    title: 'Malibu Creek State Park',
    lat: 34.105156,
    lng: -118.731316
  },
  {
    title: 'Mammoth Cave National Park',
    lat: 37.18364,
    lng: -86.159943
  },
  {
    title: 'Manti-La Sal National Forest',
    lat: 39.18705,
    lng: -111.37989
  },
  {
    title: 'Maplewood State Park',
    lat: 46.520966,
    lng: -95.951576
  },
  {
    title: 'Mesa Verde National Park',
    lat: 37.230873,
    lng: -108.461838
  },
  {
    title: 'Mojave National Preserve',
    lat: 35.141689,
    lng: -115.510399
  },
  {
    title: 'Mount Rainier National Park',
    lat: 46.879967,
    lng: -121.726906
  },
  {
    title: 'Mt Hood National Forest',
    lat: 45.227173,
    lng: -121.839455
  },
  {
    title: 'Myakka State Forest',
    lat: 26.988386,
    lng: -82.286552
  },
  {
    title: 'Navajo Nation Reservation',
    lat: 36.075321,
    lng: -109.19693
  },
  {
    title: 'Odiorne Point State Park',
    lat: 43.049023,
    lng: -70.720192
  },
  {
    title: 'Offshore Trap/Pot Waters Area',
    lat: 38.0,
    lng: -82.0
  },
  {
    title: 'Okefenokee National Wildlife Refuge',
    lat: 30.77323,
    lng: -82.292732
  },
  {
    title: 'Oleta River State Park',
    lat: 25.921614,
    lng: -80.144402
  },
  {
    title: 'Pacific Remote Islands Marine National Monument',
    lat: 16.736944,
    lng: -169.523895
  },
  {
    title: 'Pedernales Falls State Park',
    lat: 30.308069,
    lng: -98.257729
  },
  {
    title: 'Petrified Forest National Park',
    lat: 34.909988,
    lng: -109.806793
  },
  {
    title: 'Pinnacles National Park',
    lat: 36.491508,
    lng: -121.197243
  },
  {
    title: 'Redwood National and State Parks',
    lat: 41.213181,
    lng: -124.004631
  },
  {
    title: 'Rocky Mountain National Park',
    lat: 40.343182,
    lng: -105.688103
  },
  {
    title: 'Rothrock State Forest',
    lat: 40.720585,
    lng: -77.826965
  },
  {
    title: 'Ruffner Mountain Nature Center',
    lat: 33.55899,
    lng: -86.707016
  },
  {
    title: 'Sand Harbor State Park',
    lat: 39.198364,
    lng: -119.930984
  },
  {
    title: 'Shenandoah National Park',
    lat: 38.700516,
    lng: -78.292694
  },
  {
    title: 'Sipsey Wilderness',
    lat: 34.332035,
    lng: -87.434799
  },
  {
    title: 'Siuslaw National Forest',
    lat: 44.358715,
    lng: -123.829994
  },
  {
    title: 'Steller Sea Lion Protection Area',
    lat: 57.466667,
    lng: -153.433334
  },
  {
    title: 'Summit Bechtel Reserve',
    lat: 37.916035,
    lng: -81.123047
  },
  {
    title: 'Topanga State Park',
    lat: 34.093182,
    lng: -118.587318
  },
  {
    title: 'Turtle Mountain',
    lat: 48.852882,
    lng: -99.803535
  },
  {
    title: 'Whiskeytown National Recreation Area',
    lat: 40.633495,
    lng: -122.564247
  },
  {
    title: 'White Sands National Park',
    lat: 32.77972,
    lng: -106.171669
  },
  {
    title: 'Willamette National Forest',
    lat: 44.060471,
    lng: -122.091736
  },
  {
    title: 'William F Hayden Green Mountain Park',
    lat: 39.702827,
    lng: -105.175636
  },
  {
    title: 'Wisconsin Interstate State Park',
    lat: 45.398449,
    lng: -92.645126
  },
  {
    title: 'Wrangell-St. Elias National Park & Preserve',
    lat: 61.710445,
    lng: -142.985687
  },
  {
    title: 'Yellowstone National Park',
    lat: 44.429764,
    lng: -110.584663
  },
  {
    title: 'Yosemite National Park',
    lat: 37.865101,
    lng: -119.53833
  },
  {
    title: 'Zion National Park',
    lat: 37.297817,
    lng: -113.02877
  }
]

export default PARKS;
