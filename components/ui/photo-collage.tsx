import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PhotoCollageProps {
    children: ReactNode,
    className?: string
}
export default function PhotoCollage({ children, className }:PhotoCollageProps) {
    const count = React.Children.count(children);
    switch (count) {
        case 1:
            return (
                <div className={cn("grid overflow-hidden rounded-xl ",className)}>{children}</div>
            )
        case 2:
            return (
                <div className={cn("grid grid-cols-2 overflow-hidden rounded-xl ",className)}>{children}</div>
            )
        case 3:
            return (
                <div className={cn("grid grid-cols-2 rounded-xl overflow-hidden ",className)}>
                    {Array.isArray(children) && children.find((child, index) => index === 0)}
                    <div className="grid">
                        {Array.isArray(children) && children.find((child, index) => index === 1)}
                        {Array.isArray(children) && children.find((child, index) => index === 2)}
                    </div>
                </div>
            )
        default:
            return (
                <div className={cn("grid grid-cols-2 rounded-xl overflow-hidden ",className)}>
                    {Array.isArray(children) && children.find((child, index) => index === 0)}
                    <div className="grid">
                        {Array.isArray(children) && children.find((child, index) => index === 1)}
                        {Array.isArray(children) && children.find((child, index) => index === 2)}
                        <div className="bg-zinc-700 flex items-center justify-center dark:text-white text-2xl">{Array.isArray(children) && (children.length-2)+"+"}</div>
                    </div>
                </div>
            )
    }
}