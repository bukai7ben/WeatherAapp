import * as React from 'react';
import {TextInput} from 'react-native-paper';
import { Text, View } from "react-native";
import {Controller, Control, FieldErrors} from "react-hook-form";
import {styles} from "./style";
import {HomeScreenFormType} from "../../screens/HomeScreen/HomeScreen";
import {FC} from "react";

interface Props {
    control: Control<HomeScreenFormType>,
    errors: FieldErrors<HomeScreenFormType>,
    placeHolder:string
}


const CommonInput: FC<Props> = ({ placeHolder,control, errors}) => {

    return (
        <View>
            <Controller
                name="cityName"
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        underlineColor="transparent"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeHolder}
                        theme={{
                            colors: {
                                primary: "transparent"
                            }
                        }}
                    />
                )}
                defaultValue=""
            />
            {errors.data && <Text>This is required.</Text>}
        </View>
    );
};

export default CommonInput;
