
export const Wave = () => {
    return (
        <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
        >
            <defs>
                {/* Gradient for the upper background */}
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#E25845" />
                </linearGradient>
            </defs>

            {/* Background gradient applied to the upper part */}
            <rect width="1440" height="320" fill="url(#bgGradient)" />

            {/* Wave shape */}
            <polygon fill="#9333ea" points="0,0 100,0 50,100" />
            {/* <path
                fill="#9333ea"
                d="M0,245 C180,300 360,260 540,225 C670,200 900,142 1080,145 C1260,140 1440,200 1445,232 L1440,320 L0,340 Z"
            /> */}
        </svg>
    );
};

