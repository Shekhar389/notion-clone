"use client";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const {user} = useUser();
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image src="/empty.png" width="300" height="300" alt="Empty" className="dark:hidden"/>
        <Image src="/empty.png" width="300" height="300" alt="Empty" className="hidden dark:block"/>
        <h2 className="text-lg font-medium"
        >Welcome to {user?.firstName}&apos;s Notion
        </h2>
        <Button>
            <PlusCircle className="h-4 w-4 mr-2"/>
            New Document
        </Button>
        </div>
    );
    };
export default DocumentsPage;