# Links

#### React Native Base: 
https://github.com/GeekyAnts/NativeBase

#### React Native Elemements
https://github.com/react-native-elements/react-native-elements

#### Udemy course
https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/15420196#overview

# Handling different screen sizes:
```javascript
{
   width: Dimensions.get('window').width / 4,
   marginTop:  Dimensions.get('window').height > 600 ? 40 : 20
}
```
    
or 

```javascript
let containerStyle = styles.listContainer;
if (Dimensions.get('window').height > 600) {
  containerStyle = styles.listContainerBig;    
}
...
<View style={containerStyle}> ... </View>
```    

Because Dimensions is ONLY set at startup, to change width/height based on landscape/portrait mode:
```javascript
const [ buttonWidth, setButtonWidth ] = useState(Dimensions.get('window').width / 4);
const updateLayout = () => {
    setButtonWidth(Dimensions.get('window').width / 4)
}
```
##### Keyboard overriding content (esp. in landscape mode)
```
<KeyboardAviodingView behavior="position" keyboardVerticalOffset={30}
```

##### Use useEffect() and useState() to add an event listener for layout changes and change dimensions
useEffect() runs whenever the component re-renders

# Handling OS differences

Different styling...
```javascript
backgroundColor: Platform.OS === 'android' ? 'gray' : 'black'
```
or
```javascript
<View style={{
    ...styles.headerBase, 
    ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
</View>
...
headerBase: {...}
headerIOS: {...}
headerAndroid: {...}
```

Different components...
```javascript
let MyComponent = TouchableOpacity;  // MUST start w/ upper case
if (Platform.OS === 'android' && Platform.Version >= 21) {
    MyComponent = TouchableNativeFeedback;
}

<MyComponent> ... </MyComponent>
```

