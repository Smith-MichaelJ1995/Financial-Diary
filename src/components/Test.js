import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

class Test extends React.Component {

  fetchFromAPI() {
    axios.get('/test')
      .then(function (response) {
            // handle success
          return (<div>{response}</div>);
      }
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text> 
          {/* {this.fetchFromAPI()} */}
        </Text>
      </View>
    );
  }
  
}

export default Test;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
