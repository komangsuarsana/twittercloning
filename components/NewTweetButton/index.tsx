import React from "react";
import { TouchableOpacity } from "react-native"; 
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const NewTweetButton = () => {

    const onPress =() => {
        console.warn('Open New Tweet');
    }
    return (
    <TouchableOpacity 
    activeOpacity={0.8}
    style={styles.button} 
    onPress={onPress}>
        <MaterialCommunityIcons name="plus" size={30} color="white" />
    </TouchableOpacity>
    )
}



export default NewTweetButton;