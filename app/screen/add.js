import React, { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Text
} from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { addItem } from '../redux/action'
import DateTimePicker from 'react-native-modal-datetime-picker'

const Add = (props) => {
  const [form, setForm] = useState({})
  const [datePicker, setDatePicker] = useState(false)
  const [timePicker, setTimePicker] = useState(false)
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addItem(form))
    props.navigation.goBack()
  }

  const confirmDate = (dt) => {
    const d = dt.getDate()
    const m = dt.getMonth() + 1
    const y = dt.getFullYear()
    setForm({ ...form, date: ('0' + d).slice(-2) + '/' + ('0' + m).slice(-2) + '/' + y })
    setDatePicker(false)
  }
  
  const confirmTime = (tm) => {
    const h = tm.getHours()
    const m = tm.getMinutes()
    setForm({ ...form, time: ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) })
    setTimePicker(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <DateTimePicker 
        isVisible={datePicker}
        mode="date"
        onConfirm={confirmDate}
        onCancel={() => setDatePicker(false)}
        minimumDate={new Date()}
      />
      <DateTimePicker 
        isVisible={timePicker}
        mode="time"
        onConfirm={confirmTime}
        onCancel={() => setTimePicker(false)}
      />
      <View style={styles.body}>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.input}
            placeholder='Title'
            value={form?.title}
            onChangeText={(value) => setForm({ ...form, title: value })}
          />
          <TextInput
            style={[styles.input, {textAlignVertical: 'top'}]}
            placeholder='Description'
            multiline={true}
            numberOfLines={8}
            value={form?.desc}
            onChangeText={(value) => setForm({ ...form, desc: value })}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.input, { flex: 1, marginRight: 5 }]} activeOpacity={0.8} onPress={() => setDatePicker(true)}>
              <Text style={form.date != null ? {color: '#000'} : {color: '#C7C7CD'}}>{form.date != null ? form.date : 'Date'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.input, { flex: 1, marginLeft: 5 }]} activeOpacity={0.8} onPress={() => setTimePicker(true)}>
              <Text style={form.time != null ? {color: '#000'} : {color: '#C7C7CD'}}>{form.time != null ? form.time : 'Time'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnAdd} activeOpacity={0.9} onPress={() => add()}>
            <Text style={styles.btnAddLabel}>ADD</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default Add