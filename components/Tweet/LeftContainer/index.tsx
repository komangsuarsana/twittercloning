import React from "react";
import { View } from "react-native";
import ProfilePicture from "../../ProfilePicture";
import { UserType } from "../../../types";


export type LeftContainerProps = {
    user: UserType,
}
const LeftContainer = ({user}: LeftContainerProps) => (
<View>
<ProfilePicture image={user.image} size= {50}/>
</View>
)

export default LeftContainer;