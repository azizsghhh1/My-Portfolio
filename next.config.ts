import type { NextConfig } from "next";

const repoName = "My-Portfolio";

const nextConfig: NextConfig = {
	output: "export",
	basePath: `/${repoName}`,
	assetPrefix: `/${repoName}/`,
	env: {
		NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
