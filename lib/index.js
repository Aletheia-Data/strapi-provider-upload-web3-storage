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
          const thumbnail = file.formats.thumbnail.cid;
          const large = file.formats.large.cid;
          const medium = file.formats.medium.cid;
          const small = file.formats.small.cid;
          
          // remove
          await client.delete(thumbnail)
          await client.delete(large)
          await client.delete(medium)
          await client.delete(small)
        }

        return Promise.resolve()
      }
    };
  }
};