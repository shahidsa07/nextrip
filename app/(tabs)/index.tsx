
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <Link href="/bus" asChild>
          <TouchableOpacity style={styles.card}>
            <IconSymbol name="bus" size={40} color="black" />
            <Text style={styles.cardText}>BUS</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="hotel" size={40} color="black" />
          <Text style={styles.cardText}>RESORTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="card-travel" size={40} color="black" />
          <Text style={styles.cardText}>TRAVEL PACKAGES</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    paddingTop: 50,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    marginTop: 24,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;
