import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 64,
                    fontWeight: 700,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center',

                }}
            >
                <div>Infitech Innovation</div>
                <div
                    style={{
                        marginTop: 20,
                        fontSize: 32,
                        fontWeight: 400,
                    }}
                >
                    Modern Digital Systems & AI Solutions
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}