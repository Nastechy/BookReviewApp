'use client'

import React, { useState } from "react";
import { BellIcon, BookOpen, Headset, SearchIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <nav className="bg-purple-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Button type="submit" variant="ghost" className="text-white hover:text-purple-400">
                    <Headset className="inline-block w-6 h-6 mr-2" />
                </Button>
                <form onSubmit={handleSearch} className="flex items-center">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-purple-300 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 w-72"
                    />
                    <Button type="submit" variant="ghost" className="text-white hover:text-purple-400">
                        <SearchIcon className="w-5 h-5" />
                    </Button>
                </form>

                <div className="flex space-x-4 items-center">
                    <Button variant="ghost" className="text-white hover:text-purple-400">
                        <BellIcon className="w-6 h-6" />
                    </Button>

                    <Button variant="ghost" className="text-white hover:text-purple-400">
                        <UserIcon className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;