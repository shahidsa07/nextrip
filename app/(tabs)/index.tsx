
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Continue your search to <Text style={styles.boldText}>Bangalore</Text>
        </Text>
        <IconSymbol name="arrow.right" size={24} color="black" />
      </View>
      
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

      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Text style={styles.tabText}>All Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Resorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Packages</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promoContainer}>
        <View style={styles.promoCardBlue}>
          <View style={styles.promoHeader}>
            <Text style={styles.promoHeaderText}>RESORTS</Text>
            <Text style={styles.promoHeaderText}>22H:30M</Text>
          </View>
          <View style={styles.promoBody}>
            <View style={styles.promoImage} />
            <Text style={styles.promoText}>GET 10%OFF</Text>
            <Text style={styles.promoSubText}>
              On all Domestic resorts - On all Credit & Debit cards
            </Text>
          </View>
        </View>
        <View style={styles.promoCardRed}>
          <View style={styles.promoHeader}>
            <Text style={styles.promoHeaderText}>PACKAGES</Text>
          </View>
          <View style={styles.promoBody}>
            <Text style={styles.promoText}>GET 10%OFF</Text>
            <Text style={styles.promoSubText}>On travel packages credit cards</Text>
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 24,
  },
  headerText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'red'
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    marginBottom: 16
  },
  tabItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: '#E0E0E0'
  },
  tabText: {
    fontSize: 14,
    color: 'gray'
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoCardBlue: {
    width: '58%',
    backgroundColor: '#4A90E2',
    borderRadius: 16,
    padding: 16,
  },
  promoCardRed: {
    width: '38%',
    backgroundColor: '#FF6347',
    borderRadius: 16,
    padding: 16,
  },
  promoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  promoHeaderText: {
    color: 'white',
    fontSize: 12,
  },
  promoBody: {
    alignItems: 'center',
  },
  promoImage: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    marginBottom: 16,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  promoSubText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default HomeScreen;
