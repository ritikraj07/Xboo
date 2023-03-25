import {useState, useEffect, useRef} from 'react';
import { View } from 'react-native'
import Slideshow from 'react-native-image-slider-show';

function SlliderBanner(props) {
    const [position, setposition] = useState(0)
    const id = useRef()
    useEffect(() => {
        handelSlid()
        return () => clearInterval(id.current)
    }, [])
    useEffect(() => {
       
    },[position])
    
    let data = [
        {
            url: 'https://img.freepik.com/premium-vector/modern-style-square-colorful-web-banner-design-premium-vector_656447-13.jpg',
        }, {
            url: 'https://img.freepik.com/free-psd/banner-shopping-sale-template_23-2148797677.jpg',
        },
        {
            url: 'https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg',
        }, {
            url: 'https://img.freepik.com/premium-psd/horizontal-website-banne_451189-114.jpg',
        },
        {
            url: 'https://img.freepik.com/free-vector/gradient-medical-super-sale-banner_23-2149117306.jpg?t=st=1678618204~exp=1678618804~hmac=a761f6a7739bda6db8d515336729805815d45ed1bbf3e5ee937538140ba70d03',
        }, {
            url: 'https://img.freepik.com/free-vector/gradient-sale-background_23-2148833705.jpg?w=2000',
        },
        {
            url: 'https://img.freepik.com/premium-vector/brands-sale-advertising-banner-with-typography_87771-8678.jpg',
        }, {
            url: 'https://img.freepik.com/premium-psd/horizontal-website-banne_451189-114.jpg',
        },
    ]
    if (position == data.length) {
        setposition(0)
    }
    function handelSlid() {
        id.current = setInterval(() => {
            setposition(pre=>(pre+1))
        }, 3000)
    }
    

    return (
        <View style={{ marginTop: 10 }}>
            <Slideshow dataSource={data}
                position={position}  
                onPositionChanged={pros => setposition(pros)}
            />
        </View>
    );
}

export default SlliderBanner;

