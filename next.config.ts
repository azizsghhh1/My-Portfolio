import type { NextConfig } from "next";

const repoName = "My-Portfolio";

const nextConfig: NextConfig = {
	output: "export",
	basePath: `/${repoName}`,
	assetPrefix: `/${repoName}/`,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
