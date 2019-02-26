/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={styles.all}>
          {/* ////////////////////////////////Logo*/}
          <View style={styles.logobox}>
            <Image
              style={styles.logo}
              source={require("./components/img/IMDB.png")}
            />
          </View>
          <View style={styles.containers}>
            <Text style={styles.title}>Sharknado</Text>

            <View style={styles.movieId}>
              <Image
                style={styles.moviePoster}
                source={require("./components/img/sharknado.jpg")}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.instructions}>
                  When a freak hurricane swamps Los Angeles, nature's deadliest
                  killer rules sea, land, and air as thousands of sharks
                  terrorize the waterlogged populace.
                </Text>
                <TouchableOpacity style={styles.Button} underlayColor="#fff">
                  <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View flexDirection="row">
              <View style={styles.starNotes}>
                <Image
                  style={styles.star}
                  source={require("./components/img/Star.png")}
                />

                <Text style={styles.textWhite}>8,6/10</Text>
                <Text style={styles.textGrey}>1.1M</Text>
              </View>
              <View style={styles.starNotes}>
                <Image
                  style={styles.star}
                  source={require("./components/img/Starblank.png")}
                />
                <Text style={styles.textWhite}>RATE THIS</Text>
              </View>
              <View style={styles.starNotes}>
                <Text style={styles.meta}>24</Text>
                <Text style={styles.textWhite}>Metascore</Text>
                <Text style={styles.textGrey}>46 critic reviews</Text>
              </View>
            </View>
          </View>

          {/* Second Bloc */}
          <View backgroundColor={"#212121"}>
            <View style={styles.containersTwo}>
              <Text style={styles.top}>Top Billed Cast</Text>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require("./components/img/Ian.jpg")}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Ian Ziering</Text>
                    <Text style={styles.textGrey}>Fin Shepard</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require("./components/img/Tara.jpg")}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Tara Reid</Text>
                    <Text style={styles.textGrey}>April Wexler</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require("./components/img/John.jpg")}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>John Heard</Text>
                    <Text style={styles.textGrey}>George</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require("./components/img/Cassandra.jpg")}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Cassandra Scerbo</Text>
                    <Text style={styles.textGrey}>Nova Clarke </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <Text>Director</Text>
            <Text>Anthony C. Ferrante</Text>
            <Text>Writer</Text>
            <Text>Thunder Levin</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  starNotes: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center"
  },
  meta: {
    backgroundColor: "#b30000",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    height: 27,
    width: 30
  },

  textWhite: {
    color: "#ffffff",
    fontSize: 13,
    marginBottom: 3
  },
  textGrey: {
    color: "#bfbfbf",
    fontSize: 12,
    marginBottom: 3
  },

  containers: {
    backgroundColor: "#1a1a1a",
    width: "100%",
    marginBottom: 10,
    paddingBottom: 20
  },
  all: {
    justifyContent: "flex-start",
    backgroundColor: "#333333",
    paddingTop: 35,
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 30,
    textAlign: "left",
    margin: 10,
    color: "#ffffff"
  },
  instructions: {
    textAlign: "left",
    color: "#ffffff",
    marginBottom: 5
  },

  logo: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  logobox: {
    width: "100%",
    height: 50,
    backgroundColor: "#4d4d4d"
  },
  moviePoster: {
    width: 100,
    height: 150,
    marginLeft: 10
  },
  movieId: {
    flexDirection: "row",
    width: 200
  },
  movieInfo: {
    flexDirection: "column",
    marginLeft: 10
  },
  star: {
    height: 25,
    width: 25
  },

  //BUTTON ADD LIST
  Button: {
    width: "100%",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "#0099ff",
    borderRadius: 3,

    borderColor: "#fff"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },

  //SECOND BOX
  containersTwo: {
    backgroundColor: "#212121",
    marginTop: 10,
    marginBottom: 12,
    flexDirection: "row"
  },
  top: {
    flex: 1,
    fontSize: 20,
    textAlign: "left",

    color: "#ffffff"
  },
  seeAll: {
    color: "#0099ff",
    textAlign: "right",
    marginRight: 10,
    marginTop: 5
  },
  actorImage: {
    width: 150,
    height: 180,
    marginBottom: 10
  },
  actorList: {
    flexDirection: "row"
  },

  actorInfo: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: "#2A2A2A"
  },
  actorName: {
    textAlign: "center",
    paddingLeft: 10,
    marginBottom: 10
  }
});
