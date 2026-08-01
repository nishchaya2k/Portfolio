import React from 'react'

const ShimmerBlock = ({ className = '' }) => (
    <div className={`shimmer rounded-xl ${className}`} />
)

const SectionShimmer = ({ tone = 'muted' }) => {
    const sectionBg = tone === 'plain' ? 'bg-white' : 'bg-neutral-50'

    return (
        <section className={`py-16 lg:py-24 ${sectionBg}`} aria-busy="true" aria-live="polite">
            <div className="container-padding">
                <div className="flex flex-col items-center mb-16 gap-4">
                    <ShimmerBlock className="h-10 w-48 md:w-56" />
                    <ShimmerBlock className="h-1 w-24 rounded-full" />
                    <ShimmerBlock className="h-4 w-72 max-w-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <ShimmerBlock className="h-6 w-1/3" />
                        <ShimmerBlock className="h-40 w-full" />
                        <ShimmerBlock className="h-4 w-5/6" />
                        <ShimmerBlock className="h-4 w-2/3" />
                    </div>
                    <div className="space-y-4">
                        <ShimmerBlock className="h-6 w-1/3" />
                        <ShimmerBlock className="h-40 w-full" />
                        <ShimmerBlock className="h-4 w-5/6" />
                        <ShimmerBlock className="h-4 w-2/3" />
                    </div>
                </div>
            </div>
            <span className="sr-only">Loading section…</span>
        </section>
    )
}

export default SectionShimmer
