
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Link } from 'expo-router';

const BusScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>redBus</Text>
          <IconSymbol name="bell" size={24} color="white" />
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabTextActive}>Bus Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>rPool <Text style={styles.newBadge}>New</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>Bus Hire</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>From</Text>
            <TextInput style={styles.input} defaultValue="New Delhi" />
          </View>
          <View style={styles.swapIconContainer}>
             <IconSymbol name="arrow.up.arrow.down" size={24} color="black" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>To</Text>
            <TextInput style={styles.input} defaultValue="Hamirpur, Himachal Pradesh" />
          </View>
        </View>

        <View style={styles.dateCard}>
            <IconSymbol name="calendar" size={24} color="black" />
            <Text style={styles.dateText}>Wed, 17 March</Text>
            <TouchableOpacity>
                <Text style={styles.dayText}>TODAY</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.dayText}>TOMORROW</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search Buses</Text>
        </TouchableOpacity>

        <View style={styles.recentSearchContainer}>
            <Text style={styles.recentSearchTitle}>Recent Searches</Text>
            <View style={styles.recentSearchCard}>
                <View>
                    <Text style={styles.recentSearchText}>DELHI - HAMIRPUR (HIMACHAL PRADESH)</Text>
                    <Text style={styles.recentSearchDate}>Wed, 31 March</Text>
                </View>
                <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <IconSymbol name="house.fill" size={24} color="#d32f2f" />
            <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <IconSymbol name="bus" size={24} color="gray" />
            <Text style={styles.navText}>My Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <IconSymbol name="card-travel" size={24} color="gray" />
            <Text style={styles.navText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <IconSymbol name="bell" size={24} color="gray" />
            <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d32f2f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d32f2f',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#c62828'
  },
  tabItem: {
    padding: 8,
    
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
  tabTextActive:{
    color: 'white',
    fontSize: 14,
    borderBottomColor: 'white',
    borderBottomWidth: 2, 
    paddingBottom: 4,
  },
  newBadge: {
    color: '#4caf50',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    color: 'gray',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 4,
  },
  swapIconContainer: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    borderColor: '#eee',
    borderWidth: 1
  },
  dateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 16,
    marginTop: -8
  },
  dateText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dayText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 12
  },
  searchButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    margin: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentSearchContainer:{
      marginHorizontal:16, 
      marginBottom: 16
  },
  recentSearchTitle:{
      color: '#ffcdd2',
      marginBottom: 8
  },
  recentSearchCard: {
    backgroundColor: '#c62828',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentSearchText:{
      color: 'white',
      fontWeight: 'bold'
  },
  recentSearchDate:{
      color: '#ffcdd2'
  },
  bookNowButton:{
      backgroundColor: 'white',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 4
  },
  bookNowText:{
      color: '#d32f2f',
      fontWeight: 'bold'
  },
  bottomNav:{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      paddingTop: 8,
      paddingBottom: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee'
  },
  navItem:{
      alignItems: 'center'
  },
  navText:{
      color: 'gray',
      fontSize: 12
  },
  navTextActive:{
      color: '#d32f2f',
      fontSize: 12,
      fontWeight: 'bold'
  }
});

export default BusScreen;
