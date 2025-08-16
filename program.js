async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYzZjNjkwNy1hNmJjLTQ3Y2EtOWQ5NS0yYzM4Mzk0YzkzNjciLCJpZCI6MzE4NTIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTYwNjUyNzB9.RvMzC5gf0JKfZzhl3nX0g60_MqWICPLGfshdhNhscH4';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('colombia_formas.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();