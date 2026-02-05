import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    devIndicators: false,
    images: {
        remotePatterns: [new URL('https://logospng.org/**')]
    }
};

export default nextConfig;
