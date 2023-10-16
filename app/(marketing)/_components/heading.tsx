"use Client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
return (
<div className="max-w-3xl space-y-4">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, documents, and progress. Welcome to <span className="underline">Notion</span>
    </h1>
    <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the all-in-one workspace <br/> for your notes, tasks, wikis, and databases.
    </h3>
    <Button>
        Enter Notion
        <ArrowRight className="ml-2" size={16} />
    </Button>
    </div>
);
}