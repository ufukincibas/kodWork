import React from 'react'
import { FlatList,View,Text,TouchableHighlight,Alert} from 'react-native'
import {useSelector,useDispatch} from "react-redux"
import JobCard from '../../Components/Cards/JobsCard'
import styles from "./FavoritedJobs.styles"

function FavoritedJobs ({navigation}){
    
    const list = useSelector(s => s.jobs);
    const dispatch = useDispatch();
    const goDetail = id => {
        navigation.navigate('DetailJobs', {id});
    }
    const removeJobItems = item => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
        Alert.alert("Remove Favorite!", "Successfuly...");
      };
    const renderItem = ({item}) =>(
        <View>
            <JobCard job={item} onDelete={() => removeJobItems(item)} onPress={() => {goDetail(item.id)}} isFavorite={true}/>
            
            
        </View>
    
    );
    return(
        <View style={styles.container}>
            <FlatList data={list} renderItem={renderItem} />
        </View>     
    );
};

export default FavoritedJobs;