interface PlaceholderPageProps {
    title: string
}

export function PlaceholderPage({
                                    title,
                                }: PlaceholderPageProps) {
    return (
        <div>
            <h1 className="text-2xl font-bold">
                {title}
            </h1>

            <p className="mt-2 text-slate-500">
                This page is under development.
            </p>
        </div>
    )
}
