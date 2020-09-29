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

const Add = (props) => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addItem(form))
    props.navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
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
          <TouchableOpacity style={styles.btnAdd} activeOpacity={0.9} onPress={() => add()}>
            <Text style={styles.btnAddLabel}>ADD</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default Add