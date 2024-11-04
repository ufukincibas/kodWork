import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import JobsCard from "../../Components/Cards/JobsCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den veriyi çek
    fetch("https://www.themuse.com/api/public/jobs?page=1")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const renderJob = ({ item }) => (
    <JobsCard
      job={item}
      onPress={() => {/* detay sayfasına yönlendirme işlemi */}}
      onFavorite={() => {/* favorilere ekleme işlemi */}}
      onDelete={() => {/* favorilerden silme işlemi */}}
      isFavorite={false}
    />
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJob}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

export default Jobs;
