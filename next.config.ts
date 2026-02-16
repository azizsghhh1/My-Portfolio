import type { NextConfig } from "next";

const repoName = "My-Portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
	output: isGithubPages ? "export" : undefined,
	basePath: isGithubPages ? `/${repoName}` : "",
	assetPrefix: isGithubPages ? `/${repoName}/` : "",
	env: {
		NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
