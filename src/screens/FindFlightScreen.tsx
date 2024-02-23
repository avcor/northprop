import { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { airplaneImg } from "../utils/imageExporter"
import ImageAnim from "../components/ImageAnim"

const FindFlightScreen: FC = (()=>{
    return(
        <View style={style.parent}>
            <View style={style.imageParent}>
                <ImageAnim/>
            </View>
            <View>

            </View>
            <Text>jhj</Text>
        </View>
    )
})

export default FindFlightScreen

const style = StyleSheet.create({
    parent:{
        flex:1
    },
    imageParent: {
        flex: 0.25
    },
    inputView:{
        flex:0.65
    }
})