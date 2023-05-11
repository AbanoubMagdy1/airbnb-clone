import { memo } from "react";
import { useMap } from "react-leaflet";

interface Props {
    center?: [number, number];
}

function Recenter({ center }: Props) {
    const map = useMap();
    console.log(center)
    map.setView(center || [51, -0.09], map.getZoom());
    return null;
}

export default memo(Recenter);