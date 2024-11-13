
import { StaticImageData } from 'next/image';
import image1 from '../public/placeholder_Car.jpg'


export type BookType = {
    id: number;
    title?: string;
    author?: string;
    coverImage: string | StaticImageData;
    description?: string;
    reviews?: Array<{ user: string; content: string }>;
};

export const BooksData: BookType[] = [
    {
        id: 1,
        title: "The Power of Discipline",
        author: "Brian Tracy",
        coverImage: image1,
        description: "21 ways to achieve lasting happiness and success through self-discipline.",
        reviews: [{ user: 'Emeka', content: 'Inspiring and practical advice!' }],
    },
    {
        id: 2,
        title: "The Art of War",
        author: "Sun Tzu",
        coverImage: image1,
        description: "An ancient guide to military strategy and tactics with applications in modern life.",
        reviews: [{ user: 'Joy', content: 'Timeless strategies for life and business.' }],
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImage: image1,
        description: "A profound and compelling novel addressing racial injustice in the American South.",
        reviews: [{ user: 'Happiness', content: 'A powerful story of empathy and justice.' }],
    },
    {
        id: 4,
        title: "Understanding Life's Challenges",
        author: "Jane Smith",
        coverImage: image1,
        description: "Insights on overcoming personal obstacles and growing from hardship.",
        reviews: [{ user: 'Johnson', content: 'Very insightful and comforting.' }],
    },
    {
        id: 5,
        title: "Mindset: The New Psychology of Success",
        author: "Carol Dweck",
        coverImage: image1,
        description: "Explores how a growth mindset can transform your life and career.",
        reviews: [{ user: 'Lara', content: 'Life-changing perspective on growth and achievement!' }],
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        coverImage: image1,
        description: "A guide to building good habits and breaking bad ones through small, manageable changes.",
        reviews: [{ user: 'Kola', content: 'Extremely practical and motivational.' }],
    },
    {
        id: 7,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        coverImage: image1,
        description: "An exploration of human history, from ancient times to modern society.",
        reviews: [{ user: 'Amina', content: 'Fascinating take on human evolution.' }],
    },
    {
        id: 8,
        title: "The Lean Startup",
        author: "Eric Ries",
        coverImage: image1,
        description: "A framework for building successful startups through innovation and continuous learning.",
        reviews: [{ user: 'Victor', content: 'Great insights for entrepreneurs and innovators.' }],
    },
];
