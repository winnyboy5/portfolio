import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaGit from "@/components/MediaGit";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

export default function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <Hero />
                <Approach />
                <Work />
                <MediaGit />
                <Experience />
                <Stack />
                <Contact />
            </main>
        </>
    );
}
