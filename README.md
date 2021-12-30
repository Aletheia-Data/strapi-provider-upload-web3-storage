# strapi-provider-upload-nft-storage

## Pre-requisite

You'll need to sign up on https://web3.storage and register an API KEY to get started

https://docs.web3.storage/#quickstart

## Configurations

Your configuration is passed down to the provider.

See the [using a provider](https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#using-a-provider) documentation for information on installing and using a provider. And see the [environment variables](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#environment-variables) for setting and using environment variables in your configs.

**Example**

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'web3-storage',
    providerOptions: {
        apiKey: env('WEB3_STORAGE_API_KEY')
    }
  },
  // ...
});
```


| :warning: WARNING          |
|:---------------------------|
| Module has to be tested      |


| :boom: DANGER              |
|:---------------------------|
| Please use with caution! |


## Contributing

Pull requests are welcome. For fixes, first open an (issue) [https://github.com/Aletheia-Data/strapi-provider-upload-web3-storage/issues/new] to discuss what you would like to change.

Please be sure to do the appropriate tests.

## Resources

- [License](LICENSE)

## Autor

- [Aletheia website](https://aletheiadata.org/)
- [Aletheia on Github](https://github.com/Aletheia-Data)

## Strapi Links

- [Strapi website](https://strapi.io/)
- [Strapi community on Slack](https://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)
