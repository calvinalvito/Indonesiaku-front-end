import React from 'react'
import { useParams } from 'react-router-dom'
import HeroDestinasi from '../components/HeroDestinasi'
import KontenDestinasi from '../components/KontenDestinasi';
import Header from '../components/Header';

const Destinasi = () => {
    const {id} = useParams();
    return (
        <>
			<Header/>
            <HeroDestinasi destinasiID= {id}/>
            <section>
                <KontenDestinasi destinasiID= {id}/>
            </section>
        </>
    )
}

export default Destinasi
