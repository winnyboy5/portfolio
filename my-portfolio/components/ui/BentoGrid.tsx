import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <>
        { icon ? 
            (
                <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-slate-950 dark:border-white/[0.3] bg-white border border-transparent hover:border-yellow-300 hover:border-dashed justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="flex flex-row font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 gap-3 items-center justify-center">
                <div>{icon} </div>
                <div>{title}</div>
            </div>
            
            {header}

            <div className="group-hover/bento:translate-x-2 transition duration-200 hidden xl:block">
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
            ):
            (
                <div className="flex justify-center items-center">
                    <h3 className="lg:text-8xl text-5xl text-yellow-500">{title}</h3>
                </div>
            )
         }
         </>
        
    );
};
