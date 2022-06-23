import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { StyleFooter, Image, ImageFooter } from './styles/StyleFooter'

export default function Footer() {
    return (

        <StyleFooter>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaPinterest />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <ImageFooter>
                <Image src='' alt=''/>
            </ImageFooter>
        </StyleFooter>
    )
}
