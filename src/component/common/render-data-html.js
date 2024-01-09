import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  NativeEventEmitter,
  Alert,
  Platform,
} from "react-native";
import IframeRenderer, { iframeModel } from "@native-html/iframe-plugin";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";

// import VideoPlayer from "react-native-video-controls";
import Video from "react-native-video";

import VideoPlayer from "react-native-media-console";
import { useAnimations } from "@react-native-media-console/reanimated";

import RNScreenRecordPrevent from "react-native-screen-record-prevent";


import { useNavigation } from "@react-navigation/native";


RNScreenRecordPrevent.enabled(true);

import Modal from "react-native-modal";
import { Images } from "../../assets";
import { navigate } from "../../navigations/navigations";

const renderers = {
  iframe: props => (
    <View renderToHardwareTextureAndroid={true}>
      <IframeRenderer {...props} />
    </View>
  ),
};

const customHTMLElementModels = {
  iframe: iframeModel,
};


const RenderDataHTML = React.memo(function RenderDataHTML({ html, style = {} }) {

  const iosNativeEvent = new NativeEventEmitter(RNScreenRecordPrevent);

  iosNativeEvent.addListener("ScreenRecordingEvent", data => {

    if (data.status) {
      console.log("started record", data);
      setRecording(true);
      setShowModal(false);

    } else {
      setRecording(false);
    }
    console.log("dta1", data);
  });

  const navigation = useNavigation();


  const [showModal, setShowModal] = useState(false);
  const [paused, setPaused] = useState(true);
  const [uri, setUri] = useState(false);
  const [recording, setRecording] = useState(false);
  const [rate, setRate] = useState(1);
  const [showControls, setShowControls] = useState(false);


  useEffect(() => {
    if (!recording) {

    }
  }, []);

  useEffect(() => {
    if (!showModal && recording) {
      Alert.alert("Помилка", "Ви не можете переглядати відео, якщо запис екрану увімкнено", [
        {
          text: "OK",
          onPress: () => {
          },
          style: "cancel",
        },

      ]);
    }
  }, [showModal]);


  const onFullScreen = () => {

    if (recording) {
      Alert.alert("Помилка", "Ви не можете переглядати відео, якщо запис екрану увімкнено", [
        {
          text: "OK",
          onPress: () => {
          },
          style: "cancel",
        },

      ]);
    } else {

      if (!showModal && Platform.OS === 'ios') {

        RNScreenRecordPrevent.checkRecordingStatus().then(value => {
          console.log("vl", value);
          setRecording(value.status);

          if (!value.status) {
            setShowModal(true);
          }
        });

      } else {
        setShowModal(true);
      }

    }

  };
  // if(html.includes("<video")){
  //   const link =
  //   console.log('html1',link)
  // }

  const onFullScreenModal = () => {

    setShowModal(false);
  };

  const videoUri = html.match(/<a[^>]*>([^<]+)<\/a>/) !== null && html.match(/<a[^>]*>([^<]+)<\/a>/)[1];

  return (
    <>
      {html.includes("<video") ?
        <View style={{ flex: 0.5, top: 0, marginBottom: 20, height: 220 }}>

          {!showModal && <TouchableOpacity onPress={() => onFullScreen()} activeOpacity={0.8}>
            <View style={styles.shadowBtn}>
              <Image source={Images.iconPlay} />
            </View>
          </TouchableOpacity>}

          <View style={{ height: 220, zIndex: -1 }}>
            <VideoPlayer
              useAnimations={useAnimations}
              source={{ uri: videoUri }}
              navigator={navigation}
              showOnStart={true}
              paused={true}
              isFullscreen={false}
              onEnterFullscreen={() => onFullScreen()}
              disablePlayPause={true}
            />
          </View>


          <Modal
            animationType={"slide"}
            transparent={false}
            visible={showModal}
            style={{ margin: 0, padding: 0 }}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            {showControls && <View style={styles.rateBLock}>
              <TouchableOpacity style={[styles.rateBtn, { backgroundColor: rate === 1 ? "#4d4d4d" : "transparent" }]}
                                onPress={() => setRate(1.0)}>
                <Text style={styles.rateText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.rateBtn, { backgroundColor: rate === 1.25 ? "#4d4d4d" : "transparent" }]}
                                onPress={() => setRate(1.25)}>
                <Text style={styles.rateText}>1.25</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.rateBtn, { backgroundColor: rate === 1.5 ? "#4d4d4d" : "transparent" }]}
                                onPress={() => setRate(1.5)}>
                <Text style={styles.rateText}>1.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.rateBtn, { backgroundColor: rate === 2 ? "#4d4d4d" : "transparent" }]}
                                onPress={() => setRate(2.0)}>
                <Text style={styles.rateText}>2</Text>
              </TouchableOpacity>
            </View>
            }
            <VideoPlayer
              useAnimations={useAnimations}
              source={{ uri: videoUri }}
              navigator={navigation}
              onBack={() => setShowModal(false)}
              isFullscreen={true}
              onExitFullscreen={() => setShowModal(false)}
              rate={rate}
              showDuration={true}
              onShowControls={() => setShowControls(true)}
              onHideControls={() => setShowControls(false)}
              onProgress={(p) => console.log('t', p.currentTime)}

            />

          </Modal>
        </View>
        :
        <RenderHTML
          systemFonts={[
            "GolosText-Regular",
            "Poppins-ExtraLight",
            "Poppins-Light",
            "GolosText-Medium",
            "GolosText-SemiBold",
            "Poppins-Bold",
            "GolosText-ExtraBold",
          ]}
          source={{
            html: html || "",
          }}
          tagsStyles={{
            body: {
              fontFamily: "Poppins-ExtraLight",
              fontSize: 13,
              color: "#000",
              fontWeight: "300",
              ...style,
            },
          }}
          enableExperimentalMarginCollapsing
          renderers={renderers}
          WebView={WebView}
          contentWidth={Dimensions.get("window").width - 32}
          customHTMLElementModels={customHTMLElementModels}
          renderersProps={{
            img: {
              enableExperimentalPercentWidth: true,
            },
          }}
        />
      }


    </>
  );
});

export default RenderDataHTML;

const styles = StyleSheet.create({

  backgroundVideo: {

    left: 0,
    bottom: 0,
    right: 0,

  },
  shadowBtn: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    height: 220,
    width: Dimensions.get("window").width - 30,
    opacity: 1,

  },
  modal: {

    flex: 1,
    alignItems: "center",
  },
  rateBLock: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 110,
    zIndex: 100,
    flexDirection: "row",
  },
  rateBtn: {
    padding: 5,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    marginLeft: 10,
  },
  rateText: {
    color: "#fff",


  },
});
