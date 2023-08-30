module.exports = {
    webpack: (config, { isServer }) => {
      // Add the file loader rule for PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files', // Adjust this path if needed
              outputPath: 'static/files', // Adjust this path if needed
              name: '[name].[ext]',
            },
          },
        ],
      });
  
      // Important: Return the modified config
      return config;
    },
  };
  