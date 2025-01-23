import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter';
import * as THREE from 'three';

export const handleExportUSDZ = (groupRef) => {
    return new Promise((resolve, reject) => {
        try {
            THREE.Cache.clear();
            const exporter = new USDZExporter();
            exporter.parseAsync(groupRef.current).then((usdz) => {
                const blob = new Blob([usdz], { type: "application/octet-stream" });
                const url = URL.createObjectURL(blob);
                resolve(url); // Return the blob URL
            }).catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};
