'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _web3Storage = require('web3.storage');

/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'web3-storage',
  name: 'Strapi Web3 Storage',
  init: (config) => {

    const token = config.apiKey;

    if (!token) {
      return console.error('A token is needed. You can create one on https://web3.storage')
    }
    
    const client = new _web3Storage.Web3Storage({ token });

    return {
      upload: async (file) => {

        console.log('saving file on web3 storage: ', file);

        const blobFile = [new _web3Storage.File([file.buffer], file.name)];
        const cid = await client.put(blobFile, {
          wrapWithDirectory: false
        });
        
        // console.log('cid: ', cid);
        
        file.cid = cid;
        file.url = `https://${cid}.ipfs.dweb.link/`;

        console.log('saved file on web3 storage: ', file.url);
        
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