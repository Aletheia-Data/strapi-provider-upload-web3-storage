'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const Web3Storage = require('web3.storage');

/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'web3-storage',
  name: 'Strapi Web3 Storage',
  init: (config) => {

    const token = config.apiKey;

    if (!token) {
      return console.error('A token is needed. You can create one on https://web3.storage')
    }

    const client = new Web3Storage({ token });

    return {
      upload: async (file) => {

        const cid = await client.put(new Web3Storage.Blob([file.buffer]));
        const status = await client.status(cid);
        
        file.cid = cid;
        file.url = `https://${cid}.ipfs.dweb.link/`
        
        return Promise.resolve();

      },
      delete: async (file) => {

        if (file.formats){
          const thumbnail = file.formats.thumbnail ? file.formats.thumbnail.cid : null;
          const large = file.formats.large ? file.formats.large.cid : null;
          const medium = file.formats.medium ? file.formats.medium.cid : null;
          const small = file.formats.small ? file.formats.small.cid : null;
          
          // remove
          thumbnail ? await client.delete(thumbnail) : null
          large ? await client.delete(large) : null
          medium ? await client.delete(medium) : null
          small ? await client.delete(small) : null
        }

        return Promise.resolve()
      }
    };
  }
};