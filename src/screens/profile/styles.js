import {StyleSheet, Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'app-common';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    zIndex: 1,
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight() : 0,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    marginTop: 20,
    // paddingHorizontal: 16,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewInput: {
    borderRadius: 12,
    width: deviceWidth - 32,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  inputSearch: {
    flex: 1,
    marginRight: 8,
    fontFamily: 'GolosText-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
  txtPhone: {
    marginLeft: 10,
    fontFamily: 'GolosText-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
  iconBack: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  imgBanner: {
    width: (276 / 375) * deviceWidth,
    height: (209 / 375) * deviceWidth,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
  title: {
    fontFamily: 'GolosText-Medium',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    flex: 1,
  },
  fullName: {
    fontFamily: 'GolosText-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  txt1: {
    fontFamily: 'GolosText-Medium',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 20,
  },
  txtContent: {
    fontFamily: 'GolosText-Regular',
    fontSize: 14,
    color: '#8D8D8D',
    marginTop: 6,
    marginBottom: 6,
  },
  viewSearch: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },

  iconSearch: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  viewFilter: {
    backgroundColor: '#fff',
    width: 64,
    height: 24,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  txtFilter: {
    fontFamily: 'GolosText-Regular',
    fontSize: 10,
    lineHeight: 15,
    marginRight: 4,
  },
  viewUpdateRole: {
    zIndex: 1000,
    flex: 1,
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    width: deviceWidth,
    height: deviceHeight,
  },
  viewModalFilter: {
    width: 107,
    height: 131,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  txtFilterItem: {
    marginBottom: 10,
    fontFamily: 'GolosText-Regular',
    fontSize: 10,
    lineHeight: 15,
    color: '#A9A9A9',
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 46,
    paddingBottom: 300,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  border: {
    width: deviceWidth * 0.7,
    height: 1,
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 40,
  },
});
