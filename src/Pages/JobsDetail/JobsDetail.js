import React from 'react'
import { Alert, FlatList,Dimensions } from 'react-native'
import { View,Text,ScrollView,TouchableHighlight } from 'react-native'
import useFetch from '../../Components/hooks/useFetch'
import{useDispatch,useSelector} from "react-redux"
import RenderHTML from 'react-native-render-html';
import styles from './JobsDetails.styles';
import Button from '../../Components/Button'
import Lottie from 'lottie-react-native';


function JobsDetail({route}) {
    

    const{id}=route.params
    const{data,error,loading}=useFetch('https://www.themuse.com/api/public/jobs/'+id)
    
    const dispatch=useDispatch()
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height/2;
    const list = useSelector(s=>s.jobs)
    const handleAdd = () => {
        dispatch({type: 'Add_Favorite', payload: {
            id:data.id, name: data.name, locations: data.locations, levels: data.levels, company: data.company, publication_date: data.publication_date}});
        Alert.alert("Add Favorite!", "Successfuly...");    
    };
    
    if (loading) {
        return <Lottie source={require('../../assets/loading.json')} autoPlay />;
    }
    
    if (error) {
        return <Lottie source={require('../../assets/error.json')} autoPlay />;
    }
    
    if (!data || Object.keys(data).length === 0) {
        return <Text>Data not found</Text>;  // Veri gelmediyse bu mesajı göster
    }
    
    
  return(
    <ScrollView style={styles.main_container}>
        <View style={styles.header_container}>         
            <Text style={styles.job_header}>{data.name}</Text>
            <View style={styles.shortDetailContainer}>                
                <Text style={styles.shortDetailHeader}>Locations: </Text>
                <Text style={styles.shortDetailText}>{data.locations && data.locations.length > 0 ? data.locations[0].name
                : 'Unknown Location'} </Text>
            </View>
            <View style={styles.shortDetailContainer}>
                <Text style={styles.shortDetailHeader}>Job Level:</Text>
                <Text style={styles.shortDetailText}>
                    {data.levels && data.levels.length > 0 ? data.levels[0].name
                    : 'Unknown Level'}</Text>
            </View>
            <Text style={styles.bodyHeader}>Job Detail</Text>
        </View>   
            <View style={styles.detailBody}>
                <RenderHTML source={{html:`${data.contents}`}} contentWidth={width}></RenderHTML>
            </View>
            <Button onPress={()=>Alert.alert("Success","You're in! We're Text You...")} onFavorite={handleAdd} /> 
            {/* onPressFavorites={()=>handleFavorites(data)} */}
        </ScrollView>     
    )
}

export default JobsDetail