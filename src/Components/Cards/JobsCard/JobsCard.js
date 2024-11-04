import React from "react";
import { TouchableWithoutFeedback, View, Text, TouchableOpacity } from "react-native";
import styles from "./JobsCard.styles";
import { useDispatch } from 'react-redux';

function JobsCard({ job, onPress, onFavorite, isFavorite, onDelete }) {

    const dispatch=useDispatch()
    const handleAdd = () => {
        dispatch({type: 'Add_Favorite', payload: {
            id:job.id, name: job.name, locations: job.locations, levels: job.levels, company: job.company, publication_date: job.publication_date}});
        Alert.alert("Add Favorite!", "Successfuly...");    
    };
    const removeJobItems = item => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
      };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.left_innerContainer}>
          <Text style={styles.jobName}>{job.name || "Job Name"}</Text>
          <Text style={styles.companyName}>{job.company.name || "Company Name"}</Text>
          <View style={styles.location_container}>
            <Text style={styles.location}>{job.locations[0].name || "Location Name"}</Text>
          </View>
        </View>
        <View style={styles.right_innerContainer}>
          <Text style={styles.date}>{job.publication_date || "Date"}</Text>
          <Text style={styles.level}>{job.levels[0].name || "Level"}</Text>
        </View>
        <View style={styles.footerContainer}>
          {isFavorite ? (
            <TouchableOpacity onPress={onDelete}>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Remove Favorite</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onFavorite}>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Add Favorite</Text>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onPress}>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Go Detail!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobsCard;
