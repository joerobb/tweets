const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

// Set up your search parameters
const params = {
  q: '#javascript',
  count: 5,
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].text }

      console.log(id)
      // Try to Favorite the selected Tweet
  }
} else {
    console.log(err);
  }
});