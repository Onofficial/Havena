const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "A peaceful cottage right by the beach, perfect for a relaxing getaway.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
        price: 2500,
        location: "Goa",
        country: "India",
    },

    {
        title: "Modern Apartment in Mumbai",
        description:
            "A stylish apartment in the heart of Mumbai, close to restaurants, shopping, and nightlife.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
        price: 4500,
        location: "Mumbai",
        country: "India",
    },

    {
        title: "Mountain Cabin",
        description:
            "A beautiful wooden cabin surrounded by mountains and nature. Ideal for a peaceful escape.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
        price: 3200,
        location: "Manali",
        country: "India",
    },

    {
        title: "Luxury Villa with Pool",
        description:
            "A spacious luxury villa featuring a private pool and stunning views.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60",
        price: 8500,
        location: "Udaipur",
        country: "India",
    },

    {
        title: "Forest Retreat",
        description:
            "A cozy stay surrounded by dense forests, perfect for nature lovers.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
        price: 2800,
        location: "Coorg",
        country: "India",
    },

    {
        title: "Ocean View House",
        description:
            "Wake up to beautiful ocean views from this comfortable seaside home.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
        price: 6000,
        location: "Pondicherry",
        country: "India",
    },

    {
        title: "Snowy Mountain Lodge",
        description:
            "A warm and comfortable lodge surrounded by snowy mountains.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=60",
        price: 5000,
        location: "Shimla",
        country: "India",
    },

    {
        title: "Desert Camp",
        description:
            "Experience the beauty of the desert with a unique and comfortable stay.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=800&q=60",
        price: 3500,
        location: "Jaisalmer",
        country: "India",
    },

    {
        title: "Luxury Apartment in Delhi",
        description:
            "A premium apartment located close to Delhi's major attractions, restaurants, and shopping areas.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
        price: 4200,
        location: "New Delhi",
        country: "India",
    },

    {
        title: "Lakeview Cottage",
        description:
            "Enjoy peaceful mornings beside the lake in this charming cottage surrounded by nature.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
        price: 3000,
        location: "Nainital",
        country: "India",
    },

    {
        title: "Heritage Haveli",
        description:
            "Experience traditional Indian architecture with modern comforts in this beautiful heritage haveli.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
        price: 5500,
        location: "Jaipur",
        country: "India",
    },

    {
        title: "Beach House Escape",
        description:
            "A bright and relaxing beach house just a short walk from the ocean.",
        image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=60",
        price: 4800,
        location: "Alibaug",
        country: "India",
    },

    {
        title: "Hillside Wooden Villa",
        description:
            "Stay among the hills in this beautiful wooden villa with breathtaking valley views.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
        price: 4000,
        location: "Mussoorie",
        country: "India",
    },

    {
        title: "Peaceful Farmhouse",
        description:
            "A spacious farmhouse surrounded by fields, trees, and fresh countryside air.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
        price: 3500,
        location: "Pune",
        country: "India",
    },

    {
        title: "Luxury Stay in Bangalore",
        description:
            "A modern luxury home in a quiet neighborhood with excellent access to the city.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
        price: 5000,
        location: "Bangalore",
        country: "India",
    },

    {
        title: "Riverside Retreat",
        description:
            "Relax beside the river in this peaceful retreat surrounded by lush greenery.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
        price: 2700,
        location: "Rishikesh",
        country: "India",
    },

    {
        title: "Tropical Villa",
        description:
            "A tropical villa surrounded by palm trees with a private outdoor pool and garden.",
        image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=60",
        price: 7000,
        location: "Kerala",
        country: "India",
    },

    {
        title: "Modern Studio in Hyderabad",
        description:
            "A comfortable modern studio perfect for solo travelers and couples visiting the city.",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
        price: 2200,
        location: "Hyderabad",
        country: "India",
    },

    {
        title: "Royal Palace Stay",
        description:
            "Enjoy a royal experience in a beautifully restored property inspired by India's rich history.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
        price: 9000,
        location: "Jodhpur",
        country: "India",
    },

    {
        title: "Tea Garden Cottage",
        description:
            "A peaceful cottage surrounded by beautiful tea gardens and misty mountain views.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
        price: 2600,
        location: "Munnar",
        country: "India",
    },

    {
        title: "Seaside Villa",
        description:
            "A luxurious seaside villa offering stunning sunsets and direct access to the beach.",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=60",
        price: 7500,
        location: "Gokarna",
        country: "India",
    },

    {
        title: "Countryside Retreat",
        description:
            "Escape the busy city and enjoy a quiet stay surrounded by beautiful countryside.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
        price: 2900,
        location: "Lonavala",
        country: "India",
    },

    {
        title: "Luxury Penthouse",
        description:
            "A spacious penthouse with panoramic city views, modern interiors, and premium amenities.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=60",
        price: 10000,
        location: "Gurugram",
        country: "India",
    },

    {
        title: "Snow Valley Cottage",
        description:
            "A cozy winter cottage surrounded by snow-covered mountains and beautiful pine forests.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=60",
        price: 4500,
        location: "Auli",
        country: "India",
    },

    {
        title: "Backwater Villa",
        description:
            "Stay beside Kerala's peaceful backwaters in this traditional yet modern private villa.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
        price: 6500,
        location: "Alappuzha",
        country: "India",
    },

    {
        title: "Urban Loft",
        description:
            "A stylish loft with modern interiors located in the center of the city's entertainment district.",
        image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
        price: 3800,
        location: "Kolkata",
        country: "India",
    },

    {
        title: "Jungle Treehouse",
        description:
            "Experience something different in this unique treehouse surrounded by dense tropical forest.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
        price: 4200,
        location: "Wayanad",
        country: "India",
    },

    {
        title: "Rooftop Villa",
        description:
            "A beautiful villa with a spacious rooftop terrace offering stunning views of the surrounding area.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=60",
        price: 5800,
        location: "Ahmedabad",
        country: "India",
    },

    {
        title: "Island Getaway",
        description:
            "A peaceful island retreat with crystal-clear waters, white sandy beaches, and complete privacy.",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=60",
        price: 8000,
        location: "Andaman Islands",
        country: "India",
    },

    {
        title: "Mountain View Homestay",
        description:
            "A welcoming homestay offering spectacular mountain views and a quiet atmosphere.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
        price: 2400,
        location: "Kasol",
        country: "India",
    },
];

module.exports = { data: sampleListings };