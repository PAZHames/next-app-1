import { notFound } from "next/navigation";

export default function NotFound() {
    notFound()
    // when invoked will serve nearest not-found component
}
