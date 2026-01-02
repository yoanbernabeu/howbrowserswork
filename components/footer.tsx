import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <hr className="w-full border-slate-200" />
            <p className="text-sm text-slate-500">
                If you have any feedback or suggestions,{" "}
                <Link
                    href="https://github.com/krasun/howbrowserswork"
                    className="text-blue-500 font-semibold underline hover:text-blue-600"
                >
                    the guide is open source
                </Link>
                . Feel free to{" "}
                <Link
                    href="https://github.com/krasun/howbrowserswork/issues"
                    className="text-blue-500 font-semibold underline hover:text-blue-600"
                >
                    create an issue
                </Link>{" "}
                or open a pull request.
            </p>
        </footer>
    );
}
