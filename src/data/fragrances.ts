export interface Fragrance {
  id: string;
  name: string;
  image: string;
  family: string;
  description: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
}

export const fragrances: Fragrance[] = [
  {
    id: "adhara",
    name: "Adhara",
    image: "/ADHARA (Large).png",
    family: "Gourmand Oriental",
    description: "Luminous and enigmatic. Adhara is inspired by a guiding star in the desert night—radiant yet restrained. It balances clarity with depth, unfolding with a serene brilliance that feels both elevated and intimate, leaving a refined, enduring presence.",
    topNotes: ["Caramel"],
    middleNotes: ["Coumarin", "Honey"],
    baseNotes: ["Vanilla", "White Musk"],
  },
  {
    id: "aura",
    name: "Aura",
    image: "/AURA.png",
    family: "Oriental Spicy",
    description: "Soft, enveloping, and expressive. Aura blends warmth with delicacy, creating a smooth and comforting presence around the wearer. Subtle yet distinctive, it feels personal and enduring.",
    topNotes: ["Tangerine Orange", "Bergamot"],
    middleNotes: ["Nutmeg", "Cloves", "Black Currant", "Jasmine"],
    baseNotes: ["Cashmere", "Ambergris", "Patchouli", "Moss"],
  },
  {
    id: "celeste",
    name: "Celeste",
    image: "/CELESTE.png",
    family: "Aromatic Woody",
    description: "Bright and uplifting with an airy elegance. Celeste evokes openness and clarity, balancing freshness with refinement. A fragrance that feels light, expansive, and effortlessly modern.",
    topNotes: ["Lavender", "Bergamot"],
    middleNotes: ["Cedar", "Vetiver", "Patchouli"],
    baseNotes: ["Sandalwood", "Musk", "Guaiac Wood"],
  },
  {
    id: "kaif",
    name: "Kaif",
    image: "/KAIF.png",
    family: "Fruity Floral",
    description: "Sensual and immersive. Kaif is designed to linger, unfolding slowly on the skin and creating a feeling of indulgence and depth. A fragrance of pleasure, presence, and lasting impact.",
    topNotes: ["Cherry", "Strawberry", "Peach", "Apple", "Almond"],
    middleNotes: ["Jasmine Sambac", "Mimosa", "Heliotrope", "Iris Root", "Rose"],
    baseNotes: ["Musk", "Tonka Bean", "Vanilla", "Sandalwood", "Amber", "Vetiver", "Patchouli"],
  },
  {
    id: "lunar",
    name: "Lunar",
    image: "/LUNAR.png",
    family: "Fresh Citrus",
    description: "Mysterious and introspective. Lunar is shaped by night, silence, and shadow, revealing depth through subtle contrasts. A fragrance that feels intimate, magnetic, and quietly powerful.",
    topNotes: ["Citrus"],
    middleNotes: ["Apple Blossom", "Lime"],
    baseNotes: ["Musk"],
  },
  {
    id: "mirza",
    name: "Mirza",
    image: "/MIRZA.png",
    family: "Floral Oriental",
    description: "Rich, bold, and charismatic. Mirza expresses authority and refinement, blending warmth with intensity. It leaves a strong, memorable trail—confident, sophisticated, and unmistakably present.",
    topNotes: ["Bergamot", "Passion Fruit"],
    middleNotes: ["Jasmine", "Lily-of-the-Valley", "Iris"],
    baseNotes: ["Sandalwood", "Amber", "Musk", "Vanilla"],
  },
  {
    id: "nasim",
    name: "Nasim",
    image: "/NASIM.png",
    family: "Spicy Floral",
    description: "A vibrant and expressive fragrance carried by the wind. Fresh spices open the composition before unfolding into a refined floral heart, grounded by warmth and depth. Nasim is energetic, confident, and full of movement.",
    topNotes: ["Bergamot", "Cardamom", "Cinnamon"],
    middleNotes: ["Tuberose", "Jasmine", "Magnolia", "Patchouli"],
    baseNotes: ["Sandalwood", "Amber", "Tonka Bean"],
  },
  {
    id: "noor",
    name: "Noor",
    image: "/NOOR.png",
    family: "Fruity Floral",
    description: "Inspired by light emerging from darkness. Noor is soft, luminous, and intimate, wrapping the skin in warmth and serenity. A fragrance that glows rather than shines, refined and deeply calming.",
    topNotes: ["Lemon", "Orange", "Bergamot", "Coconut", "Strawberry", "Passion Fruit"],
    middleNotes: ["Rose", "Jasmine", "Ylang Ylang", "Lily-of-the-Valley", "Sandalwood", "Vetiver"],
    baseNotes: ["Vanilla", "Caramel", "Amber", "Chocolate", "Musk"],
  },
  {
    id: "oryx",
    name: "Oryx",
    image: "/ORYX.png",
    family: "Fruity Floral",
    description: "Structured, noble, and resilient. Oryx reflects strength shaped by extreme environments, combining elegance with restraint. Its presence is steady and composed, leaving a lasting impression without excess.",
    topNotes: ["Calabrian Mandarin", "Green Apple", "Coconut", "Red Fruits"],
    middleNotes: ["Magnolia", "Jasmine", "Lily-of-the-Valley"],
    baseNotes: ["Sandalwood", "Amber", "Musk", "Vanilla", "Caramel"],
  },
  {
    id: "sabah",
    name: "Sabah",
    image: "/SABAH.png",
    family: "Woody Oriental",
    description: "A fragrance of transition and renewal. Sabah evokes the first light of dawn over the desert—fresh, warm, and awakening. It feels optimistic and radiant, like the quiet promise of a new beginning.",
    topNotes: ["Bergamot", "Rose", "Violet Leaves"],
    middleNotes: ["Saffron", "Brown Sugar", "Oud", "Cashmere Wood"],
    baseNotes: ["Amber", "Vanilla", "Musk", "Sandalwood"],
  },
  {
    id: "sahara",
    name: "Sahara",
    image: "/SAHARA.png",
    family: "Amber Oriental",
    description: "Warm, dry, and enveloping. Sahara captures the immensity of sun-heated sand and the stillness of endless horizons. A powerful fragrance with a grounded presence and a deep, atmospheric character.",
    topNotes: ["Bergamot", "Cognac", "Red Apple"],
    middleNotes: ["Lily-of-the-Valley", "Tuberose", "Cinnamon"],
    baseNotes: ["Amber", "Benzoin", "Myrrh", "Vanilla", "Tonka Bean"],
  },
  {
    id: "zenith",
    name: "Zenith",
    image: "/ZENITH.png",
    family: "Fruity Floral",
    description: "Radiant and expansive, Zenith represents the peak moment when light is at its strongest. Bright yet controlled, it balances intensity with clarity, projecting strength, elevation, and quiet confidence.",
    topNotes: ["Lemon", "Orange", "Bergamot", "Passion Fruit"],
    middleNotes: ["Coconut", "Strawberry", "Rose", "Jasmine", "Vanilla"],
    baseNotes: ["Amber", "Musk"],
  },
];

export const getFragranceById = (id: string): Fragrance | undefined => {
  return fragrances.find(f => f.id === id);
};
