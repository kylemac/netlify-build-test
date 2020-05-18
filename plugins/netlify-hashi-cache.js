module.exports = {
  onPreBuild: async ({ utils }) => {
    const success = await utils.cache.restore(".next/cache");

    if (success) {
      console.log("successfully restored from cache");
    } else {
      console.log("there was an error restoring from cache");
    }
  },
  onPostBuild: async ({ utils }) => {
    const response = await utils.cache.save(".next/cache");

    if (response) {
      console.log("successfully saved cache");
    } else {
      console.log("error saving cache");
    }
  },
};
