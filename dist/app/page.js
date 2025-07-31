"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const image_1 = __importDefault(require("next/image"));
function Home() {
    return (React.createElement("div", { className: "font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" },
        React.createElement("main", { className: "flex flex-col gap-[32px] row-start-2 items-center sm:items-start" },
            React.createElement(image_1.default, { className: "dark:invert", src: "/next.svg", alt: "Next.js logo", width: 180, height: 38, priority: true }),
            React.createElement("ol", { className: "font-mono list-inside list-decimal text-sm/6 text-center sm:text-left" },
                React.createElement("li", { className: "mb-2 tracking-[-.01em]" },
                    "Get started by editing",
                    " ",
                    React.createElement("code", { className: "bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded" }, "src/app/page.tsx"),
                    "."),
                React.createElement("li", { className: "tracking-[-.01em]" }, "Save and see your changes instantly.")),
            React.createElement("div", { className: "flex gap-4 items-center flex-col sm:flex-row" },
                React.createElement("a", { className: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                    React.createElement(image_1.default, { className: "dark:invert", src: "/vercel.svg", alt: "Vercel logomark", width: 20, height: 20 }),
                    "Deploy now"),
                React.createElement("a", { className: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]", href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" }, "Read our docs"))),
        React.createElement("footer", { className: "row-start-3 flex gap-[24px] flex-wrap items-center justify-center" },
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1.default, { "aria-hidden": true, src: "/file.svg", alt: "File icon", width: 16, height: 16 }),
                "Learn"),
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1.default, { "aria-hidden": true, src: "/window.svg", alt: "Window icon", width: 16, height: 16 }),
                "Examples"),
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1.default, { "aria-hidden": true, src: "/globe.svg", alt: "Globe icon", width: 16, height: 16 }),
                "Go to nextjs.org \u2192"))));
}
//# sourceMappingURL=page.js.map