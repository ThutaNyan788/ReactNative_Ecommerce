import { StyleSheet, Platform, Text, View, ScrollView, SafeAreaView, Switch } from 'react-native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Feather, FontAwesome6 } from '@expo/vector-icons';


export default function profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View >
          <View style={styles.imgContainer}>
            <View style={[styles.imgContainer, { position: 'relative' }]}>
              <Image style={styles.img} source={require("@/data/shop/man.png")} />
              <Text style={styles.imgText}>TTN</Text>
            </View>
            <Text style={{ color: "black", alignSelf: "center", fontWeight: "600", fontSize: 20 }}>
              Thu Ta Nyan
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>

            <View style={[styles.sameContainer, styles.orderContainer]}>
              <View style={styles.flex}>
                <Ionicons name="clipboard-outline" size={24} color="black" />
                <Text style={styles.orderText}>My orders</Text>
              </View>
              <View>
                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={{ opacity: 0.5 }} />
              </View>
            </View>

            <View>
              <Text style={styles.settingText}>
                Settings
              </Text>

              <View style={[styles.sameContainer, { marginBottom: 25 }]}>
                <View style={[styles.flex,{marginLeft:5}]}>
                  <FontAwesome5 name="user" size={18} color="black" />
                  <Text style={styles.orderText}>User Profile</Text>
                </View>
                <View>
                  <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={{ opacity: 0.5 }} />
                </View>
              </View>
            </View>


            <View style={[styles.sameContainer, { marginBottom: 25 }]}>

              <View >
                <View style={styles.flex}>
                  <MaterialIcons name="notifications-none" size={24} color="black" />
                  <Text style={styles.orderText}>
                    Allow push notifications
                  </Text>
                </View>
                <View style={{ width: 250, paddingLeft: 30 }}>
                  <Text>Get update on your sales,purchases,and key activities</Text>
                </View>
              </View>



              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <View style={[styles.sameContainer, { marginBottom: 25 }]}>
              <View style={styles.flex}>
                <Ionicons name="card-outline" size={24} color="black" />
                <Text style={styles.orderText}>Payment Methods</Text>
              </View>
              <View>
                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={{ opacity: 0.5 }} />
              </View>
            </View>


            <View style={[styles.sameContainer, styles.orderContainer, { marginBottom: 5 }]}>
              <View style={styles.flex}>
                <EvilIcons name="location" size={24} color="black" />
                <Text style={styles.orderText}>Delivery Address</Text>
              </View>
              <View>
                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={{ opacity: 0.5 }} />
              </View>
            </View>

            <View>
              <Text style={styles.settingText}>
                Help
              </Text>

              <View style={[styles.sameContainer, { marginBottom: 25 }]}>
                <View style={styles.flex}>
                  <Ionicons name="help-circle-outline" size={24} color="black" />
                  <Text style={styles.orderText}>FAQ</Text>
                </View>

              </View>

              <View style={[styles.flex, { marginLeft: 5, marginBottom: 25 }]}>
                <FontAwesome6 name="envelope" size={18} color="black" />
                <Text style={styles.orderText}>Support</Text>
              </View>


            </View>



            <View style={{ marginLeft: 5, gap: 8, paddingVertical: 8 }}>
              <View>
                <Text style={styles.privacyText}>
                  Logout
                </Text>
              </View>

              <View style={[{ flexDirection: "row", alignItems: "center" }]}>
                <Text style={styles.privacyText}>Privacy Policy |</Text>
                <Text style={styles.privacyText}>Term & Conditions</Text>
              </View>
              <Text style={styles.privacyText}>1.0.0</Text>

            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 30,
    justifyContent: 'center',

  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'center'
  },
  imgText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    color: "white"
  },
  sameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderContainer: {
    borderBottomWidth: 0.3,
    borderBottomColor: "#00000060",
    paddingBottom: 20
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  orderText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black"
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 20,
    textTransform: "uppercase"
  },
  privacyText: { 
    color: "#04592b", 
    fontSize: 15, 
    fontWeight: "bold" }
});
