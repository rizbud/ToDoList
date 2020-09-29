import React from 'react'
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/action'

import { styles } from './styles'

const Home = (props) => {
  const {navigation} = props
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()

  const deleteList = (index) => {
    dispatch(remove(index))
  }

  const List = ({item, index}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.delete} onPress={() => deleteList(index)}>
          <Icon name='trash-2' size={20} color='#000' style={{alignSelf: 'flex-end'}} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBackground}></View>
        <Text style={styles.headerTitle}>My Schedule</Text>
      </View>
      <FlatList 
        style={{marginBottom: 10}}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={{alignSelf: 'center'}}>Tidak ada data.</Text>}
        renderItem={List}
      />
      <TouchableOpacity style={styles.addBtn} activeOpacity={0.8} onPress={() => navigation.navigate('Add')}>
        {/* <Icon name='plus' size={40} color='#fff' /> */}
        <Text style={{color: '#fff', fontSize: 55}}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home