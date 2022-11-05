exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },

          {
            test: /\.(png|svg|jpg|gif|pdf)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                },
              },
            ],
          },
        ],
      },
    })
  }
}
