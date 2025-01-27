import { createServer, Model, Response } from "miragejs"

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://images.unsplash.com/photo-1656480729328-72f36d0d243e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "simple",
      hostId: "123",
    })
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://images.unsplash.com/photo-1639156814151-334b5327665b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "rugged",
      hostId: "123",
    })
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://images.unsplash.com/photo-1583797227225-4233106c5a2a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "luxury",
      hostId: "456",
    })
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://images.unsplash.com/photo-1656426630273-ca84171a2010?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "simple",
      hostId: "789",
    })
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://images.unsplash.com/photo-1626680114529-3f6ffa002b80?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "luxury",
      hostId: "789",
    })
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://images.unsplash.com/photo-1621854029362-5d66c3e0c306?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "rugged",
      hostId: "123",
    })

    server.create("user", {
      id: "123",
      email: "b@b.com",
      password: "p123",
      name: "Bob",
      income: [1500, 1000, 1250, 2000, 2260],
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false
    // this.timing = 2000  // => mock a 2 second delay in server response

    this.get("/vans", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.vans.all()
    })

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get("/host/vans", (schema, request) => {
      // Hard-code the hostId for now
      return schema.vans.where({ hostId: "123" })
    })

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.vans.findBy({ id, hostId: "123" })
    })

    this.get("/host/income", (schema, request) => {
      // Hard-code the hostId for now
      return schema.users.findBy({ id: "123" })
    })

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody)
      //   pretend authentication
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
