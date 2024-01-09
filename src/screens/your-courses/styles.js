import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'app-common';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    zIndex: 1,
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
    // width: deviceWidth - 32,
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    marginRight: 8,
  },
  inputSearch: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 15,
    color: '#000',
  },
  txtPhone: {
    marginLeft: 14,
    fontFamily: 'Poppins',
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
  },
  btn: {
    width: 112,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FBC815',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontFamily: 'GolosText-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  txt1: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  txtContent: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    color: '#8D8D8D',
    marginTop: 6,
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
  childTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    marginBottom: 14,
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
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 15,
    color: '#A9A9A9',
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 46,
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
  colId: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colDate: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colStatus: {
    flex: 0.8,
    borderRightWidth: 1,
    borderColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCol: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 10,
    lineHeight: 15,
    color: '#000',
    fontWeight: '300',
    padding: 5,
  },
  txtTitleCol: {
    fontFamily: 'GolosText-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
    fontWeight: '500',
  },
});
