import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter';
import { useCallback } from 'react';
import * as THREE from 'three';

export const handleExportUSDZ = (groupRef) => {
    console.log("Exporting model usdz...");
    console.log(groupRef);

    // console.log("Exporting model usdz...");
    return new Promise((resolve, reject) => {
        try {
            THREE.Cache.clear();
            const exporter = new USDZExporter();
            console.log(groupRef.current);
            exporter.parseAsync(groupRef.current).then((usdz) => {
                try {
                    const blob = new Blob([usdz], { type: "application/octet-stream" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    document.body.appendChild(a);
                    a.href = url;
                    a.download = "model.usdz";
                    a.click();
                    resolve();
                } catch (error) {
                    // console.error("Error in USDZ export processing:", error);
                    reject(error);
                }
            });
        } catch (error) {
            // console.error("Error in USDZ export:", error);
            reject(error);
        }
    });
};