/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import RNFS from 'react-native-fs'; // 引入 react-native-fs

export default function App() {
  const [form, setForm] = useState({
    phoneNumber: '',
    phoneType: '',
    countryCode: '',
    contactTime: '',
    contactMethod: '',
    daytime: '',
    eveningLocation: '',
    interestedInOnlineMeeting: '',
    referralSource: '',
    involvementReason: '',
    additionalComments: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // 将数据转换为 CSV 格式
    const csvData = [
      ['Phone Number', form.phoneNumber],
      ['Phone Type', form.phoneType],
      ['Country Code', form.countryCode],
      ['Preferred Contact Time', form.contactTime],
      ['Preferred Contact Method', form.contactMethod],
      ['Daytime', form.daytime],
      ['Evening Location', form.eveningLocation],
      ['Interested in Online Meeting', form.interestedInOnlineMeeting],
      ['How Did You Hear About Rotary', form.referralSource],
      ['Why Do You Want to Get Involved', form.involvementReason],
      ['Additional Comments', form.additionalComments]
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');

    // 定义文件路径（保存为 document 目录下的 form_data.csv）
    const path = RNFS.DocumentDirectoryPath + '/form_data.csv';

    // 写入文件
    RNFS.writeFile(path, csvContent, 'utf8')
      .then(() => {
        Alert.alert('Success', 'Form data saved to CSV file at: ' + path);
      })
      .catch((err) => {
        Alert.alert('Error', 'Failed to save form data: ' + err.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Join a Club
      </Text>

      <Text>Phone Number</Text>
      <TextInput
        placeholder="+61"
        value={form.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Phone Type</Text>
      <TextInput
        placeholder="Apple"
        value={form.phoneType}
        onChangeText={(text) => handleInputChange('phoneType', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Country Code</Text>
      <TextInput
        placeholder="AU"
        value={form.countryCode}
        onChangeText={(text) => handleInputChange('countryCode', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Preferred Contact Time</Text>
      <TextInput
        placeholder="..."
        value={form.contactTime}
        onChangeText={(text) => handleInputChange('contactTime', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Preferred Contact Method</Text>
      <TextInput
        placeholder="Email/Call"
        value={form.contactMethod}
        onChangeText={(text) => handleInputChange('contactMethod', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Daytime</Text>
      <TextInput
        placeholder="..."
        value={form.daytime}
        onChangeText={(text) => handleInputChange('daytime', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Evening Location</Text>
      <TextInput
        placeholder="..."
        value={form.eveningLocation}
        onChangeText={(text) => handleInputChange('eveningLocation', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Interested in Online Meeting (true/false)</Text>
      <TextInput
        placeholder="true"
        value={form.interestedInOnlineMeeting}
        onChangeText={(text) => handleInputChange('interestedInOnlineMeeting', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>How Did You Hear About Rotary</Text>
      <TextInput
        placeholder="YT"
        value={form.referralSource}
        onChangeText={(text) => handleInputChange('referral Source', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Why Do You Want to Get Involved</Text>
      <TextInput
        placeholder="......"
        value={form.involvementReason}
        onChangeText={(text) => handleInputChange('involvement Reason', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Additional Comments</Text>
      <TextInput
        placeholder="......"
        value={form.additionalComments}
        onChangeText={(text) => handleInputChange('additionalComments', text)}
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}
export default App;
