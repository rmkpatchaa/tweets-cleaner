module.exports = {
  consumer_key: '##',
  consumer_secret: '##',
  access_token_key: '##',
  access_token_secret: '##',
  path: './tweets.csv', // path to the archive .csv file
  maxDate: false, // delete older than this eg: '2011-12-31 00:00:00 +0000'
  saveRegexp: [], // save tweets matching this regexp: eg ['#newavatar', '@\w+']
  callsInterval: 500, // ms
  analyze: false // Set to true to just analyze tweets to delete. After running it will create to files : hashTags.txt and users.txt
}
