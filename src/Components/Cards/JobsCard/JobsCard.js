import React from "react";
import { TouchableOpacity , View , Text } from "react-native";
import Config from 'react-native-config';

import styles from "./JobsCard.styles"

function JobsCard(){
    useEffect(() => {
        fetchJobs();
      }, []);
    
      const fetchJobs = async () => {
        try {
          const response = await fetch(Config.API_JOBS_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Data:', data); // Gelen veriyi console'da göster
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
    
    return(
        <View>
        <Text>API Check</Text>
      </View>
    )
}

export default JobsCard;
