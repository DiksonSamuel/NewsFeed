import * as React from 'react';
import { View, Text, Button } from 'react-native';
import routes from '../../utils/routes';
import strings from '../../utils/strings';

const login = (props) => {

  let {navigation} = props;

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button 
        title={strings.login}
        onPress={() => navigation.replace(routes.home, {})}
      />
    </View>
  )
}

export default login;