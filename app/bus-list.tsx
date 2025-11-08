
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

const BusListScreen = () => {
  const buses = [
    {
      id: '1',
      name: 'IntrCity SmartBus',
      type: 'AC Sleeper',
      departure: '22:00',
      arrival: '05:00',
      duration: '7h',
      rating: '4.5',
      price: '1,200',
    },
    {
      id: '2',
      name: 'Zingbus',
      type: 'AC Seater',
      departure: '21:00',
      arrival: '04:00',
      duration: '7h',
      rating: '4.2',
      price: '900',
    },
    {
        id: '3',
        name: 'Safar Exp',
        type: 'AC Sleeper',
        departure: '23:00',
        arrival: '06:00',
        duration: '7h',
        rating: '4.8',
        price: '1,500',
      },
  ];

  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <View>
                <Text style={styles.routeText}>New Delhi to Hamirpur</Text>
                <Text style={styles.dateText}>17 March, 2024</Text>
            </View>
            <IconSymbol name="calendar" size={24} color="black" />
      </View>
      {buses.map((bus) => (
        <View key={bus.id} style={styles.card}>
          <View style={styles.busInfo}>
            <Text style={styles.busName}>{bus.name}</Text>
            <Text style={styles.busType}>{bus.type}</Text>
            <View style={styles.timeInfo}>
              <Text style={styles.time}>{bus.departure}</Text>
              <Text style={styles.duration}>({bus.duration})</Text>
              <Text style={styles.time}>{bus.arrival}</Text>
            </View>
          </View>
          <View style={styles.priceInfo}>
            <Text style={styles.price}>₹{bus.price}</Text>
            <View style={styles.rating}>
              <IconSymbol name="star" size={16} color="#FFC107" />
              <Text style={styles.ratingText}>{bus.rating}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    routeText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    dateText:{
        color: 'gray'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    busInfo: {
        flex: 1,
    },
    busName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    busType: {
        color: 'gray',
        marginBottom: 8,
    },
    timeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    duration: {
        color: 'gray',
        marginHorizontal: 8,
    },
    priceInfo: {
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d32f2f',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        marginLeft: 4,
    },
});

export default BusListScreen;
