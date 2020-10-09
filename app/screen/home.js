import React, {useState} from 'react'
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modal'

import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/action'

import styles from './styles/homeStyle'
import { apply } from '../themes/OsmiProvider'

const Home = (props) => {
  const {navigation} = props
  const [modal, setModal] = useState(false)
  const [data, setData] = useState({})
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()

  const deleteList = (index) => {
    dispatch(remove(index))
  }

  const onClick = (item) => {
    setData(item)
    setModal(true)
  }

  const List = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => onClick(item)} style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date + '     ' + item.time}</Text>
        </View>
        <TouchableOpacity style={styles.delete} onPress={() => deleteList(index)}>
          <Icon name='trash-2' size={25} color='#000' style={apply('self-end')} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        onBackButtonPress={() => setModal(false)}
        style={styles.modal}
        backdropTransitionOutTiming={100}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={['down']}
      >
        <TouchableOpacity onPress={() => setModal(false)} style={styles.close} activeOpacity={0.8}>
          <Icon name='x-circle' size={30} color={apply('white')} />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={apply('row')}>
            <View style={apply('flex')}>
              <Text style={styles.titleModal}>{data.title}</Text>
              <Text style={styles.date}>{data.date + '     ' + data.time}</Text>
            </View>
            <TouchableOpacity style={styles.delete} onPress={() => deleteList(index)}>
              <Icon name='trash-2' size={25} color={apply('black')} style={apply('self-end')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.desc}>{data.desc}</Text>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.headerBackground}></View>
        <Text style={styles.headerTitle}>My Schedule</Text>
      </View>
      <FlatList 
        contentContainerStyle={{paddingVertical: 10}}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={{textAlign: 'center'}}>No schedule.{'\n'}Your schedule will be appear here.</Text>}
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