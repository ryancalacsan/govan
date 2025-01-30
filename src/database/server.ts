// MirageJS Server Data
import { createServer, Model, Response } from "miragejs"

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "The Nomad's Haven",
      price: 145,
      description:
        "The Nomad's Haven is built for those who crave the freedom of the open road and the comfort of home. With a solar-powered system, cozy interiors, and a queen-size bed, this van is ready to take you on unforgettable adventures. Whether you're heading to the mountains or the beach, this van has everything you need to travel with ease and style. The spacious kitchen area, complete with a mini fridge and a portable stove, allows you to cook up delicious meals wherever you go.",
      imageUrl: "/Van-Photo-01.jpg",
      type: "simple",
      new: true,
      hostId: "356",
    })

    server.create("van", {
      id: "2",
      name: "Coastline Cruiser",
      price: 98,
      description:
        "For those who love the ocean breeze and the sound of waves crashing, the Coastline Cruiser is the ultimate road trip companion. This van has been designed with beach lovers in mind, featuring a spacious interior, large windows for ocean views, and an outdoor shower to rinse off after a long day at the beach. With an eco-friendly solar system and plenty of storage for surfboards, bikes, or camping gear, you’ll be ready for any adventure along the coast. Whether you’re watching the sunset or chasing the next wave, this van has it all.",
      imageUrl: "/Van-Photo-02.jpg",
      type: "luxury",
      new: false,
      hostId: "456",
    })

    server.create("van", {
      id: "3",
      name: "Mountain Maverick",
      price: 178,
      description:
        "The Mountain Maverick is built for those who want to push their limits and explore the wildest terrain. With off-road suspension, heavy-duty tires, and a high-clearance design, this van can handle rugged mountain trails and rough dirt roads. Inside, you’ll find a comfy bed, a compact kitchen with everything you need to cook on the go, and ample storage space for all your gear. Whether you’re climbing peaks or exploring hidden valleys, the Mountain Maverick will be your trusty companion on every adventure.",
      imageUrl: "/Van-Photo-03.jpg",
      type: "rugged",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "4",
      name: "Sunset Voyager",
      price: 125,
      description:
        "The Sunset Voyager is perfect for those who dream of chasing sunsets from the comfort of their own camper. With a convertible roof that opens up to reveal the sky, you can relax and take in the beauty of the world around you. The interior is designed with comfort and relaxation in mind, featuring plush seating, soft lighting, and a cozy bed that promises restful nights under the stars. This van is ideal for spontaneous getaways, whether you’re camping in a national park or parked along the beach with a cold drink in hand.",
      imageUrl: "/Van-Photo-04.jpg",
      type: "luxury",
      new: true,
      hostId: "758",
    })

    server.create("van", {
      id: "16",
      name: "Desert Dreamer",
      price: 160,
      description:
        "The Desert Dreamer was made for long drives through endless sand dunes and golden deserts. With a built-in air conditioning system, tinted windows, and a roof rack to carry your gear, this van will keep you cool and comfortable no matter how hot it gets outside. The interior features warm, earthy tones and practical storage solutions, making it the perfect base camp for desert adventures. Whether you're exploring ancient ruins, stargazing under the desert sky, or driving to the next oasis, the Desert Dreamer is ready to take you on a journey of a lifetime.",
      imageUrl: "/Van-Photo-16.jpg",
      type: "rugged",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "6",
      name: "Forest Retreat",
      price: 135,
      description:
        "For those who love the serenity of the forest, the Forest Retreat is your ideal escape. This van blends rustic charm with modern comforts, featuring wood paneling, a cozy bed, and a fully equipped kitchen for cooking up hearty meals by the campfire. With large windows to let in the natural light and a roof vent to keep things cool, this van will make you feel at home in nature. Take it to your favorite secluded spots, whether you’re deep in the woods or parked beside a babbling brook—this van offers a peaceful retreat from the hustle and bustle of everyday life.",
      imageUrl: "/Van-Photo-06.jpg",
      type: "simple",
      new: false,
      hostId: "583",
    })

    server.create("van", {
      id: "7",
      name: "Starry Nomad",
      price: 92,
      description:
        "The Starry Nomad is perfect for night owls and stargazers. With a panoramic skylight, you can lie in bed and watch the stars without even leaving your van. The interior is minimalist and cozy, with enough space for two to comfortably sleep, eat, and relax. The van also comes with a compact kitchen and storage for all your outdoor gear, whether you’re hiking or just enjoying a night by the campfire. If you’re someone who finds peace in the quiet of the night sky, the Starry Nomad will be your perfect companion for every adventure.",
      imageUrl: "/Van-Photo-07.jpg",
      type: "luxury",
      new: true,
      hostId: "654",
    })

    server.create("van", {
      id: "32",
      name: "Alpine Adventurer",
      price: 110,
      description:
        "The Alpine Adventurer is designed for the fearless mountain explorers who love to ski, snowboard, or hike in the snow-capped peaks. With all-wheel drive, ski racks, and a heater to keep you warm after a day on the slopes, this van is built to handle the toughest mountain conditions. The interior features heated floors, a cozy bed, and a kitchen stocked with all the essentials to prepare a hot meal after your adventure. Whether you’re chasing powder or just soaking in the mountain views, the Alpine Adventurer has everything you need for your alpine adventures.",
      imageUrl: "/Van-Photo-32.jpg",
      type: "rugged",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "9",
      name: "Sunbeam Explorer",
      price: 145,
      description:
        "The Sunbeam Explorer is the van for the eco-conscious traveler. With solar panels, energy-efficient appliances, and an interior made from sustainable materials, you can hit the road knowing you're leaving a minimal environmental footprint. The van features a spacious living area, a cozy bed, and a compact kitchen, along with plenty of storage for your gear. Ideal for long road trips or weekend getaways, the Sunbeam Explorer will take you on an adventure while helping you stay connected to nature.",
      imageUrl: "/Van-Photo-09.jpg",
      type: "simple",
      new: false,
      hostId: "509",
    })

    server.create("van", {
      id: "10",
      name: "Wilderness Wanderer",
      price: 130,
      description:
        "The Wilderness Wanderer is for those who seek adventure deep in the wild. With rugged tires, a high-clearance suspension, and a four-wheel-drive system, this van is built to tackle tough terrain. Inside, it’s a cozy oasis with a compact kitchen, foldable furniture, and ample storage space for your outdoor gear. Whether you're heading into the forest for a weekend retreat or embarking on a cross-country journey, the Wilderness Wanderer will get you where you need to go, while providing the comfort you need to rest and recharge.",
      imageUrl: "/Van-Photo-10.jpg",
      type: "rugged",
      new: false,
      hostId: "712",
    })

    server.create("van", {
      id: "11",
      name: "Desert Nomad",
      price: 150,
      description:
        "The Desert Nomad is the ultimate companion for those who crave the vast, open desert landscapes. With a sleek and aerodynamic design, this van can handle the harsh desert heat and rough terrain. Inside, you'll find a spacious living area, with a full kitchen and comfy sleeping arrangements. With a built-in air conditioning system and ample water storage, you can easily explore the arid beauty of the desert without sacrificing comfort. Whether you’re chasing sunsets or seeking peace in the vastness, the Desert Nomad is the perfect choice.",
      imageUrl: "/Van-Photo-11.jpg",
      type: "rugged",
      new: false,
      hostId: "315",
    })

    server.create("van", {
      id: "12",
      name: "Wildflower Wanderer",
      price: 118,
      description:
        "The Wildflower Wanderer is for those who seek adventure in the blooming meadows and peaceful forests. The van's eco-friendly features blend seamlessly with nature, featuring a sustainable interior made of recycled materials and a water filtration system. Equipped with a comfortable bed, kitchenette, and plenty of storage for your gear, this van ensures your connection with nature remains strong. Whether you’re hiking in the wilderness or resting under the stars, the Wildflower Wanderer is your ultimate base camp.",
      imageUrl: "/Van-Photo-12.jpg",
      type: "simple",
      new: false,
      hostId: "624",
    })

    server.create("van", {
      id: "13",
      name: "Riverside Retreat",
      price: 140,
      description:
        "The Riverside Retreat is your perfect escape from the noise of city life. With the sound of rushing water nearby, this van offers a calming, rustic interior with wooden accents and a spacious bed. Whether you want to kayak down a river, hike in the nearby woods, or simply relax by the water, the Riverside Retreat is your home on wheels. It features a full kitchenette, plenty of storage for your outdoor gear, and windows that open up to stunning river views.",
      imageUrl: "/Van-Photo-13.jpg",
      type: "luxury",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "14",
      name: "Summit Seeker",
      price: 170,
      description:
        "The Summit Seeker is made for those who aim high and never stop climbing. With high-clearance suspension, off-road tires, and a durable exterior, it will get you to the peak of any mountain. The interior is as rugged as it is comfortable, with a wood-finish kitchenette and a spacious bed that’s perfect after a day of outdoor adventure. Whether you're scaling rocky peaks or exploring untouched valleys, the Summit Seeker will make sure you’re ready for whatever the mountains throw at you.",
      imageUrl: "/Van-Photo-14.jpg",
      type: "rugged",
      new: true,
      hostId: "123",
    })

    server.create("van", {
      id: "15",
      name: "Prairie Pathfinder",
      price: 155,
      description:
        "The Prairie Pathfinder is built for those who love the open road and endless skies. This van combines comfort and durability, offering a spacious interior with a fully-equipped kitchen and a comfortable bed for restful nights on long journeys. The van's exterior features sturdy tires and a roof rack for added versatility, perfect for hauling gear across miles of open plains. Whether you’re traversing prairie landscapes or stopping at a quiet rest area, the Prairie Pathfinder is ready to explore.",
      imageUrl: "/Van-Photo-15.jpg",
      type: "simple",
      new: true,
      hostId: "333",
    })

    server.create("van", {
      id: "5",
      name: "Canyon Cruiser",
      price: 165,
      description:
        "The Canyon Cruiser is perfect for exploring rugged canyons and winding roads. With off-road capabilities and a design that offers both rugged durability and cozy comfort, you can take on any challenge the landscape throws at you. Inside, the Canyon Cruiser is equipped with a compact kitchen, foldable furniture, and a cozy bed. Perfect for those looking for adventure while keeping close to nature, this van is ready to cruise through the world's most spectacular canyons.",
      imageUrl: "/Van-Photo-05.jpg",
      type: "rugged",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "17",
      name: "Ocean Breeze",
      price: 120,
      description:
        "The Ocean Breeze is your ultimate beach getaway on wheels. Designed with surfboards, towels, and sunscreen in mind, this van offers a laid-back yet functional space with a full kitchenette, comfortable bed, and plenty of storage for your beach essentials. With an outdoor shower for rinsing off the sand and a convertible roof for watching sunsets, this van is perfect for spontaneous beach trips and weekend getaways along the coast.",
      imageUrl: "/Van-Photo-17.jpg",
      type: "simple",
      new: false,
      hostId: "212",
    })

    server.create("van", {
      id: "18",
      name: "Horizon Hiker",
      price: 180,
      description:
        "The Horizon Hiker is perfect for long-distance explorers who want to wake up to breathtaking views each morning. With solar panels to keep things running and a spacious interior that includes a full kitchen, cozy bed, and plenty of storage, you’ll have everything you need to tackle the open road. Whether you’re hiking to a remote peak or enjoying a peaceful sunset, the Horizon Hiker is ready for your next great adventure.",
      imageUrl: "/Van-Photo-18.jpg",
      type: "luxury",
      new: false,
      hostId: "409",
    })

    server.create("van", {
      id: "19",
      name: "Thunder Roadster",
      price: 125,
      description:
        "The Thunder Roadster is designed for those who love the thrill of the open road. With a powerful engine, smooth suspension, and a sleek design, this van will make you feel the wind in your hair as you race down the highway. Inside, you’ll find everything you need for a comfortable road trip, including a fully-stocked kitchen and a comfortable bed. Whether you're driving along coastal highways or through expansive plains, the Thunder Roadster is your perfect road trip companion.",
      imageUrl: "/Van-Photo-19.jpg",
      type: "simple",
      new: false,
      hostId: "924",
    })

    server.create("van", {
      id: "20",
      name: "Echo Explorer",
      price: 160,
      description:
        "The Echo Explorer is perfect for those who love the outdoors but also appreciate modern comforts. With a spacious interior and a minimalist design, it’s both stylish and practical. The van includes a fully-equipped kitchen, a foldable bed, and a variety of storage solutions for your camping gear. Whether you're exploring forests, mountains, or lakesides, the Echo Explorer will let you travel in comfort while staying connected to nature.",
      imageUrl: "/Van-Photo-20.jpg",
      type: "luxury",
      new: false,
      hostId: "903",
    })

    server.create("van", {
      id: "21",
      name: "Venture Voyager",
      price: 170,
      description:
        "The Venture Voyager is built for travelers who love to explore off-the-beaten-path destinations. With its rugged off-road suspension and heavy-duty tires, this van can easily navigate difficult terrain. The interior is just as versatile, featuring a modular layout that can be adjusted to fit your needs, whether you’re camping in the wilderness or enjoying a quiet weekend getaway. Perfect for those who like to venture into unknown territories and discover hidden gems.",
      imageUrl: "/Van-Photo-21.jpg",
      type: "rugged",
      new: true,
      hostId: "112",
    })

    server.create("van", {
      id: "22",
      name: "Violet Voyager",
      price: 140,
      description:
        "The Violet Voyager offers a unique blend of modern luxury and classic charm. With a plush interior, a kitchenette, and an overhead skylight, you’ll be able to soak in the beauty of nature while enjoying the comforts of home. Whether you’re hiking, biking, or just relaxing by a lake, this van makes it easy to experience the best of both worlds: adventure and luxury.",
      imageUrl: "/Van-Photo-22.jpg",
      type: "luxury",
      new: true,
      hostId: "612",
    })

    server.create("van", {
      id: "23",
      name: "Pinecrest Pathway",
      price: 110,
      description:
        "The Pinecrest Pathway is a cozy, homey van designed for nature lovers who want to explore the world at their own pace. With pinewood finishes, a warm bed, and a functional kitchenette, you can enjoy your time in the great outdoors without sacrificing comfort. Whether you’re camping by a river or exploring mountain trails, this van is your perfect home away from home.",
      imageUrl: "/Van-Photo-23.jpg",
      type: "simple",
      new: false,
      hostId: "877",
    })

    server.create("van", {
      id: "24",
      name: "Cedar Canyon",
      price: 120,
      description:
        "The Cedar Canyon offers a comfortable retreat from the chaos of daily life. Built with off-road capabilities, this van allows you to venture deep into the wilderness, while providing a cozy living space with a full kitchen and a comfortable bed. Ideal for long-term road trips, the Cedar Canyon makes it easy to relax and recharge while immersing yourself in nature.",
      imageUrl: "/Van-Photo-24.jpg",
      type: "simple",
      new: true,
      hostId: "678",
    })

    server.create("van", {
      id: "25",
      name: "Boulder Basecamp",
      price: 150,
      description:
        "The Boulder Basecamp is designed for climbers and adventurers who want a sturdy base of operations after a long day of hiking or bouldering. The van is equipped with a full kitchen, a comfortable bed, and plenty of storage for climbing gear, while also featuring an outdoor fold-down deck perfect for taking in the views.",
      imageUrl: "/Van-Photo-25.jpg",
      type: "rugged",
      new: false,
      hostId: "609",
    })

    server.create("van", {
      id: "26",
      name: "Pioneer Prowler",
      price: 140,
      description:
        "The Pioneer Prowler is a rugged adventure van designed for those who want to explore the wilderness in style. With durable tires, an off-road suspension system, and an extended roof, this van can take on whatever the road throws at it. Inside, you’ll find a spacious living area with a full kitchenette, foldable bed, and plenty of storage for your adventure gear.",
      imageUrl: "/Van-Photo-26.jpg",
      type: "rugged",
      new: false,
      hostId: "807",
    })

    server.create("van", {
      id: "27",
      name: "Wildwood Wanderer",
      price: 175,
      description:
        "The Wildwood Wanderer is the perfect van for those who want to get lost in nature. Designed with a rustic yet comfortable interior, this van includes a spacious kitchen, plenty of storage for outdoor gear, and a cozy bed. Whether you’re hiking in the woods or camping beside a lake, the Wildwood Wanderer will be your home on wheels as you embrace the great outdoors.",
      imageUrl: "/Van-Photo-27.jpg",
      type: "rugged",
      new: false,
      hostId: "126",
    })

    server.create("van", {
      id: "28",
      name: "Northern Explorer",
      price: 160,
      description:
        "The Northern Explorer is built for cold-weather adventurers who love the chill of the wild north. This van comes equipped with a powerful heating system, snow chains, and an insulated interior to keep you warm no matter how low the temperatures drop. Inside, you'll find a cozy bed, full kitchen, and plenty of storage for winter gear like snowshoes, ice picks, and warm clothes. Perfect for exploring snowy trails or relaxing in a frozen wonderland.",
      imageUrl: "/Van-Photo-28.jpg",
      type: "luxury",
      new: false,
      hostId: "601",
    })

    server.create("van", {
      id: "29",
      name: "Moonlight Mover",
      price: 135,
      description:
        "The Moonlight Mover is made for night-time explorers. Whether you’re driving under the stars or camping at remote locations, this van comes equipped with a roof hatch for stargazing, a cozy bed, and soft lighting to help you wind down after a long day. With a full kitchen and plenty of storage, you can enjoy an easy, relaxing trip anywhere you want to go.",
      imageUrl: "/Van-Photo-29.jpg",
      type: "simple",
      new: false,
      hostId: "902",
    })

    server.create("van", {
      id: "30",
      name: "Crimson Caravan",
      price: 150,
      description:
        "The Crimson Caravan is a bold, beautiful van built for the adventurer who wants to stand out. With red accents, large windows for panoramic views, and a built-in solar panel, this van lets you take your adventures in style. Whether you're road-tripping through deserts, beaches, or forests, the Crimson Caravan will provide you with the comfort, energy, and space to live on the go.",
      imageUrl: "/Van-Photo-30.jpg",
      type: "luxury",
      new: true,
      hostId: "213",
    })

    server.create("van", {
      id: "31",
      name: "Coastline Cruiser",
      price: 135,
      description:
        "The Coastline Cruiser is designed for those who live for coastal drives and sandy shores. With a fully equipped kitchenette, cozy bed, and outdoor storage for surfboards or kayaks, this van is ideal for beach lovers and coastal explorers. Whether you’re traveling from city to city or just relaxing by the sea, the Coastline Cruiser is your perfect ride.",
      imageUrl: "/Van-Photo-31.jpg",
      type: "simple",
      new: false,
      hostId: "789",
    })

    server.create("van", {
      id: "8",
      name: "Rolling Rover",
      price: 100,
      description:
        "The Rolling Rover is designed for those who want to roam the countryside with all the comforts of home. Equipped with a small kitchenette, foldable bed, and a cozy seating area, this van is perfect for spontaneous getaways and weekend adventures. Whether you’re on a road trip through the hills or exploring quiet back roads, the Rolling Rover will take you to your next adventure with ease.",
      imageUrl: "/Van-Photo-08.jpg",
      type: "simple",
      new: false,
      hostId: "123",
    })

    server.create("van", {
      id: "33",
      name: "Wandering Woodsman",
      price: 145,
      description:
        "The Wandering Woodsman is perfect for those who want to immerse themselves in nature. With a rugged exterior and eco-friendly interior, this van offers a comfortable space for long stays in the wild. Equipped with a full kitchen, a spacious bed, and plenty of storage for gear, this van is perfect for those looking for remote campsites and adventures in the forest.",
      imageUrl: "/Van-Photo-33.jpg",
      type: "rugged",
      new: true,
      hostId: "517",
    })

    server.create("van", {
      id: "34",
      name: "Echo Escape",
      price: 115,
      description:
        "The Echo Escape is a cozy, charming van that’s built for those who love the quiet beauty of nature. With soft lighting, wood accents, and a fully equipped kitchen, this van offers the perfect space to unwind after a day spent hiking or exploring. Whether you're looking to escape the hustle and bustle or simply enjoy a peaceful retreat, the Echo Escape will provide you with the peace and comfort you need.",
      imageUrl: "/Van-Photo-34.jpg",
      type: "simple",
      new: false,
      hostId: "905",
    })

    // User
    server.create("user", {
      id: "123",
      email: "guest@host.com",
      password: "p123",
      name: "Guest",
      income: [1500, 1000, 1250, 2000, 2260],
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false
    // this.timing = 2000  // => mock a 2 second delay in server response
    this.passthrough("https://firestore.googleapis.com/**")

    this.get("/vans", (schema: any) => {
      return schema.vans.all()
    })

    this.get("/vans/:id", (schema: any, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get("/host/vans", (schema: any) => {
      return schema.vans.where({ hostId: "123" })
    })

    this.get("/host/vans/:id", (schema: any, request) => {
      const id = request.params.id
      return schema.vans.findBy({ id, hostId: "123" })
    })

    this.get("/host/income", (schema: any) => {
      return schema.users.findBy({ id: "123" })
    })

    this.post("/login", (schema: any, request) => {
      const { email, password } = JSON.parse(request.requestBody)
      const foundUser = schema.users.findBy({ email, password })

      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        )
      }

      foundUser.password = undefined
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      }
    })
  },
})
