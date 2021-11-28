/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
            i18n: {
                locales: ["en"],
                defaultLocale: "en",
            },
        });


        return config;
    }
};
