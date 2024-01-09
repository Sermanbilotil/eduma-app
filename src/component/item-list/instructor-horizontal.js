import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {withTranslation} from 'react-i18next';
import IconF from 'react-native-vector-icons/Feather';
import styles from './styles/instructor-horizontal';

class InstructorHorizontal extends PureComponent {
  onNavigateDetail = () => {
    const {navigation, item} = this.props;
    navigation.navigate('InstructorScreen', {instructor: item});
  };

  render() {
    const {t, item} = this.props;


    console.log('item', item.id, item.name)
    return (
      <TouchableOpacity
        onPress={this.onNavigateDetail}
        style={styles.container}>
        <Image
          source={{
            uri:
              item.avatar_url ||
              'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png',
          }}
          style={styles.avatar}
        />
        <View style={{marginLeft: 10, flex: 1}}>
          <Text style={styles.title} numberOfLines={1}>
            {item.nickname}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={styles.childTitle}>
              {t('home.countCourse', {
                count: item.instructor_data?.total_courses || 0,
              })}
            </Text>
            <Text style={styles.childTitle}>

              {t('home.countStudent', {
                count: item.id === 1 ?  692 : item.id === 11 ? 26 : item.id === 29 ? 21 : item.id === 23 ? 19 :   item.instructor_data?.total_users || 0,
              })}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <IconF name="send" size={12} color="#D2D2D2" />
            <IconF name="instagram" size={12} color="#D2D2D2" />
            <IconF name="youtube" size={12} color="#D2D2D2" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withTranslation()(InstructorHorizontal);
