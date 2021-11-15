import React from 'react'
import { TextInput, View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

type Variant = 'password' | 'text'

interface IInput {
    placeHolder: string;
    type: Variant;
    label: string;
    onChangeHandler: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

const Input = ({
    placeHolder,
    type,
    label,
    onChangeHandler
}: IInput) => (
    <View>
        <Text>{label}</Text>
        <TextInput
            autoCapitalize="none"
            placeholder={placeHolder}
            onChange={(text) => onChangeHandler(text)}
            secureTextEntry={type === "password"}
        />
    </View>
)

export default Input