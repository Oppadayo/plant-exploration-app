import { useNavigationBuilder } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ceil } from 'react-native-reanimated'

import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const RequirementBar = ({ icon, barPercentage }) => {
    return(
        <View style={{height: 60, alignItems: 'center'}}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: COLORS.gray
                }}
            >
                <Image 
                    source={icon}
                    resizeMode='cover'
                    style={{
                        tintColor: COLORS.secondy,
                        width: 30,
                        height: 30
                    }}
                />
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.gray
                }}
            >
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.primary
                }}
            >
            </View>

        </View>
    )
}

const RequirementDetail = ({ icon, label, detail }) =>{
    return(
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={icon}
                    resizeMode='cover'
                    style={{
                        tintColor: COLORS.secondy,
                        width: 30,
                        height: 30
                    }}
                />

                <Text style={{ marginLeft: SIZES.base, color: COLORS.secondy, ...FONTS.h3}}>{label}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}>{detail}</Text>
            </View>
        </View>
    )
}

const PlantDetail = ({navigation}) => {

    const renderRequirementsBar = () =>{
        return(
            <View 
            style={{ 
                flexDirection: 'row', 
                marginTop: SIZES.padding, 
                paddingHorizontal: SIZES.padding, 
                justifyContent: 'space-between' 
            }}
            >
                <RequirementBar
                    icon={icons.sun}
                    barPercentage='50%'
                />
                <RequirementBar
                    icon={icons.drop}
                    barPercentage='25%'
                />
                <RequirementBar
                    icon={icons.thermometer}
                    barPercentage='80%'
                />
                <RequirementBar
                    icon={icons.shovel}
                    barPercentage='30%'
                />
                <RequirementBar
                    icon={icons.fertilizer}
                    barPercentage='50%'
                />
            </View>
        )
    }

    const renderRequirements = () =>{
        return(
            <View 
                style={{ 
                    flex: 2.5, 
                    marginTop: SIZES.padding, 
                    paddingHorizontal: SIZES.padding, 
                    justifyContent: 'space-around'
                    }}
            >
                <RequirementDetail
                    icon={icons.sun}
                    label="Sunlight"
                    detail='15°C'
                />
                <RequirementDetail
                    icon={icons.drop}
                    label="Water"
                    detail='250 ml Daily'
                />
                <RequirementDetail
                    icon={icons.thermometer}
                    label="Room Temperature"
                    detail='25°C'
                />
                <RequirementDetail
                    icon={icons.shovel}
                    label="Soil"
                    detail='3 Kg'
                />
                <RequirementDetail
                    icon={icons.fertilizer}
                    label="Fertilizer"
                    detail='150 Mg'
                />

                
            </View>
        )
    }

    const renderFooter = () =>{
        return(
            <View
                style={{ 
                    flex: 1,
                    flexDirection: 'row',
                    paddingVertical: SIZES.padding,

                }}
            >
                <TouchableOpacity
                    style={{
                        //flex: 1,
                        width: '50%',
                        paddingHorizontal: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() =>{console.log('take actions')}}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
                    <Image 
                        source={icons.next}
                        resizeMode= 'contain'
                        style={{
                            marginLeft: SIZES.padding,
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{ 
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding,
                        backgroundColor: COLORS.lightGray,

                    }}
                >
                    <Text style={{ flex: 1, color: COLORS.secondy, ...FONTS.h3}}>Almost 2 weeks of growing time</Text>
                    <Image
                        source={icons.downArrow}
                        resizeMode='contain'
                        style={{
                            tintColor: COLORS.secondy,
                            marginLeft: SIZES.base,
                            width: 20,
                            height: 20
                        }}
                    />

                </View>
            </View>
        )
    }

    const renderHeader = () => {
        return(
            <View
                style={{
                    position:'absolute',
                    top: 35,
                    left: SIZES.padding,
                    right: SIZES.padding 
                }}
            >  
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: 'rgba(255, 255, 255,0.5)'
                        }}
                        onPress={() => {navigation.navigate('Home')}}
                    >
                        <Image 
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}
                    onPress={() => {console.log('focus on pressed')}}    
                >
                    <Image 
                        source={icons.focus}
                        resizeMode='contain'
                        style={{ 
                            height: 25, 
                            width: 25
                        }}
                    />
                </TouchableOpacity>
            </View>
                <View 
                    style={{
                        flexDirection: 'row',
                        marginTop: '5%'

                    }}
                >
                    <View style={{ flex:2}}>
                        <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>Glory Mantas</Text>
                    </View>
                    <View style={{ flex: 1}}></View>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={{ height: '35%'}}>
                <Image 
                    source={images.banner}
                    resizeMode='cover'
                    style={{    
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>


            <View
                style={{
                    flex: 1,
                    marginTop: -40,
                    backgroundColor: COLORS.lightGray,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding
                }}
            >
                <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.secondy, ...FONTS.h1}}>Requirements</Text>

                {renderRequirementsBar()}
                {renderRequirements()}
                {renderFooter()}
            </View>

            {renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlantDetail