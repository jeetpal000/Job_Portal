import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
 images: { 
  remotePatterns: [ 
    { protocol: "https", 
      hostname: "cnxdj71pmw.ufs.sh", 
    }, 
     {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
  ], 
},
};

export default nextConfig;
 