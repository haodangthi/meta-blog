/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@styles': path.resolve(__dirname, 'src/types'),
            '@ui': path.resolve(__dirname, 'src/components/ui'),
            '@icons': path.resolve(__dirname, 'src/components/icons'),
        };
        return config;
    },
};

export default nextConfig;
