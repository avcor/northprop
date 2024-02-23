import { Image, StyleSheet, Text, View } from "react-native"
import { airplaneImg } from "../utils/imageExporter"

const ImageAnim = ({}) => {
    console.log('render')
    return(
        <View style={styles.parent}>
            <Image style={styles.imageView} source={airplaneImg} resizeMode="contain" />
        </View>
    )
}

export default ImageAnim

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        backgroundColor: 'blue',
        overflow:'hidden',
        justifyContent: 'center',
        alignItems:'center'
    },
    imageView:{
        flex:1,
        backgroundColor:'red'
    }
})