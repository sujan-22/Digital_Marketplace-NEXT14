import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        name: "Quick Delivery",
        Icon: ArrowDownToLine,
        desc: "Receive your assets in no time, straight to your inbox, ready for immediate download.",
    },
    {
        name: "Reliable Delivery",
        Icon: CheckCircle,
        desc: "We ensure every purchase reaches you without fail, backed by our trusted delivery guarantee.",
    },
    {
        name: "Eco-Friendly",
        Icon: Leaf,
        desc: "We commit 1% of our sales to environmental conservation and restoration efforts.",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className=" text-4xl font-bold tracking-tight  sm:text-6xl">
                        Your go-to marketplace for premium{" "}
                        <span className=" text-red-600">digital assets</span>.
                    </h1>
                    <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
                        Welcome to DIGI, where every item on our platform
                        undergoes strict quality checks by our team to ensure
                        top-notch standards.
                    </p>
                    <div className=" flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="/product" className={buttonVariants()}>
                            Explore Popular Items
                        </Link>
                        <Button variant="ghost">
                            Our quality commitment &rarr;
                        </Button>
                    </div>
                </div>
                {/* TODO: LIST PRODUCT */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-300 bg-gray-100">
                <MaxWidthWrapper className="py-20">
                    <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk) => (
                            <div
                                key={perk.name}
                                className=" text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className=" md:flex-shrink-0 flex justify-center">
                                    <div className=" h-16 w-16 items-center flex justify-center rounded-full bg-red-100 text-red-900">
                                        {<perk.Icon className=" w-1/3 h-1/3" />}
                                    </div>
                                </div>
                                <div className=" mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className=" text-base font-medium text-inherit">
                                        {perk.name}
                                    </h3>
                                    <p className=" mt-3 text-sm text-muted-foreground">
                                        {perk.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
