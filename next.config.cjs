const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase, { defaultConfig }) => 
{
  if(phase == PHASE_DEVELOPMENT_SERVER)
  {

  }
  
  return {
    output: 'export',
    trailingSlash: true,
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {

      return config
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      
    },
    //experimental: {
    //  instrumentationHook: true,
    //}
  }
}