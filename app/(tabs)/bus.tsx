
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BusScreen = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('Select Date');
  const [showCalendar, setShowCalendar] = useState(false);
  const [buses, setBuses] = useState([]);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate.dateString);
    setShowCalendar(false);
  };

  const handleSearch = () => {
    // In a real app, you would fetch bus data from an API
    setBuses([
      { id: '1', name: 'Luxury Travels', route: 'New York to Boston', price: '$50', rating: '4.5', image: 'https://via.placeholder.com/150' },
      { id: '2', name: 'Speedy Bus', route: 'New York to Boston', price: '$45', rating: '4.2', image: 'https://via.placeholder.com/150' },
      { id: '3', name: 'Comfort Liners', route: 'New York to Boston', price: '$55', rating: '4.8', image: 'https://via.placeholder.com/150' },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="From"
          value={from}
          onChangeText={setFrom}
        />
        <TextInput
          style={styles.input}
          placeholder="To"
          value={to}
          onChangeText={setTo}
        />
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowCalendar(true)}>
          <Text style={styles.dateButtonText}>{date}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search Buses</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showCalendar} animationType="slide">
        <Calendar onDayPress={handleDateSelect} />
      </Modal>

      <FlatList
        data={buses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.busCard}>
            <Image source={{ uri: item.image }} style={styles.busImage} />
            <View style={styles.busDetails}>
              <Text style={styles.busName}>{item.name}</Text>
              <Text>{item.route}</Text>
              <Text>{item.price}</Text>
              <Text>Rating: {item.rating}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  dateButton: {
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  searchButton: {
    height: 40,
    backgroundColor: '#28A745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  busCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  busImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  busDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BusScreen;
