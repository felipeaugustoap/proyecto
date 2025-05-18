import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import marker from './icons/icone-gps.png';

const Mapa = () => {
    const position = [43.3709482, -8.4237369]
    
    const customIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor:  [-0, -0],
        iconSize: [32,45],
    });


    return (
        <>
            <MapContainer
                center={position}
                zoom={21}
                scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                    icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Mapa