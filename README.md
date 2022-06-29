# strapi-provider-upload-web3-storage

Aletheia is an Open Source project that seeks to encourage both public and private entities to facilitate
access to public information, so that it can have a more relevant social impact. 

As developers we have seen the need to make use of public information (information in the public
 domain that should be available and accessible by law), but in the search we quickly realized that
  although the information is (in part) available, it is not organized in a way that is easy to use (uses that
   can range from the simple consultation of the data, to statistical use or to create computer smart
    products oriented to citizens. 

Another problem that we frequently find is the lack of a standard in the format of these files. As well as
 the use of formats that DO NOT allow the extraction of the information. We know that, like us, there are
  other Citizens who need to access this data and this is why we decided to develop an Open API to
   facilitate access and distribution of resourceful public information. 


The objective is to create an ecosystem where these files are ALWAYS available, accessible 24 hours a
 day and accompanied by APIs to facilitate the consumption and exchange of this information while
  providing an immutable and reliable "single source of truth".


**Table of Contents**

- [📚 Pre-requisites](#-pre-requisite)
- [🦑 Configurations](#-configurations)
- [📖 Examples](#-example)
- [💖 Contributing](#-contributing)

## 📚 Pre-requisite

You'll need to sign up on https://web3.storage and register an API KEY to get started

https://docs.web3.storage/#quickstart

## 🦑 Configurations

Your configuration is passed down to the provider.

See the [using a provider](https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#using-a-provider) documentation for information on installing and using a provider. And see the [environment variables](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#environment-variables) for setting and using environment variables in your configs.

## 📖 Example

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

## 💖 Contributing

We welcome contributions in form of bug reports, feature requests, code changes, or documentation improvements.

Please make sure to follow our guidelines:
- [Code of Conduct →](#)

For important changes please create first an (issue)[https://github.com/Aletheia-Data/strapi-provider-upload-web3-storage/issues/new] to discuss what you would like to change.

Plase make sure that for each PR the necessary test are done.

## Resources

- [License](LICENSE)

## Autor

- [Aletheia website](https://aletheiadata.org/)
- [Aletheia on Github](https://github.com/Aletheia-Data)

## Strapi Links

- [Strapi website](https://strapi.io/)
- [Strapi community on Slack](https://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)
