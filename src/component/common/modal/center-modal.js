import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';

const CenterModal = ({showModal}) => {
  return (
    <Modal
      isVisible={showModal}
      backdropOpacity={0.5}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Система тестування знаходиться на стадії наповнення новими тестами та їх поясненням.
          Заглядайте час від часу та ввімкніть сповіщення аби бути в курсі останніх оновлень!</Text>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  wrapper: {
      backgroundColor: '#fff'
  },
  text: {
    color: '#000'
  }
});

export default CenterModal;
