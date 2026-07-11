import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
            lastModified: new Date(),
            //   changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/digital-transform`,
            lastModified: new Date(),
            //   changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/erp-saas`,
            lastModified: new Date(),
            //   changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/custom-develop`,
            lastModified: new Date(),
            //   changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/ai-automation-booking`,
            lastModified: new Date(),
            //   changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/marketing`,
            lastModified: new Date(),
            //   changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/innovation`,
            lastModified: new Date(),
            //   changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}