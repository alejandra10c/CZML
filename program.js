async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzI1ZjBlNS1hNmY4LTQ0OGEtYjE5OS1hMGJiYjYzMmNhOGIiLCJpZCI6MzMxMzc2LCJpYXQiOjE3NTUwNDI2Mjd9.vMkh7Pvq2F9MhZE4H7wqPFFQs1gPKdc-Ax4q0tncRs8';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('escena.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();