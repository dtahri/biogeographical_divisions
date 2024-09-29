var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain background',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://stamen-tiles-{a-c}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})]
    })
})
]
});
var lyr_Elevationlayer_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevation layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevationlayer_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var format_Administrativeboundaries_1 = new ol.format.GeoJSON();
var features_Administrativeboundaries_1 = format_Administrativeboundaries_1.readFeatures(json_Administrativeboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrativeboundaries_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Administrativeboundaries_1.addFeatures(features_Administrativeboundaries_1);var lyr_Administrativeboundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrativeboundaries_1, 
                style: style_Administrativeboundaries_1,
                title: '<img src="styles/legend/Administrativeboundaries_1.png" /> Administrative boundaries'
            });var format_Presentdistricts_2 = new ol.format.GeoJSON();
var features_Presentdistricts_2 = format_Presentdistricts_2.readFeatures(json_Presentdistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presentdistricts_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Presentdistricts_2.addFeatures(features_Presentdistricts_2);var lyr_Presentdistricts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Presentdistricts_2, 
                style: style_Presentdistricts_2,
                title: '<img src="styles/legend/Presentdistricts_2.png" /> Present districts'
            });var format_QSdistricts_3 = new ol.format.GeoJSON();
var features_QSdistricts_3 = format_QSdistricts_3.readFeatures(json_QSdistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QSdistricts_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_QSdistricts_3.addFeatures(features_QSdistricts_3);var lyr_QSdistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QSdistricts_3, 
                style: style_QSdistricts_3,
                title: '<img src="styles/legend/QSdistricts_3.png" /> Q&S districts'
            });var format_Labels_Present_4 = new ol.format.GeoJSON();
var features_Labels_Present_4 = format_Labels_Present_4.readFeatures(json_Labels_Present_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labels_Present_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Labels_Present_4.addFeatures(features_Labels_Present_4);cluster_Labels_Present_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Labels_Present_4
});var lyr_Labels_Present_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Labels_Present_4, 
                style: style_Labels_Present_4,
                title: '<img src="styles/legend/Labels_Present_4.png" /> Labels_Present'
            });var format_Labels_QS_5 = new ol.format.GeoJSON();
var features_Labels_QS_5 = format_Labels_QS_5.readFeatures(json_Labels_QS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labels_QS_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Labels_QS_5.addFeatures(features_Labels_QS_5);cluster_Labels_QS_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Labels_QS_5
});var lyr_Labels_QS_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Labels_QS_5, 
                style: style_Labels_QS_5,
                title: '<img src="styles/legend/Labels_QS_5.png" /> Labels_Q&S'
            });

lyr_Elevationlayer_0.setVisible(true);lyr_Administrativeboundaries_1.setVisible(true);lyr_Presentdistricts_2.setVisible(true);lyr_QSdistricts_3.setVisible(true);lyr_Labels_Present_4.setVisible(true);lyr_Labels_QS_5.setVisible(true);
var layersList = [baseLayer,lyr_Elevationlayer_0,lyr_Administrativeboundaries_1,lyr_Presentdistricts_2,lyr_QSdistricts_3,lyr_Labels_Present_4,lyr_Labels_QS_5];
lyr_Administrativeboundaries_1.set('fieldAliases', {'ID_0': 'ID_0', });
lyr_Presentdistricts_2.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_QSdistricts_3.set('fieldAliases', {'Id': 'Id', });
lyr_Labels_Present_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Labels_QS_5.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Administrativeboundaries_1.set('fieldImages', {'ID_0': 'TextEdit', });
lyr_Presentdistricts_2.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_QSdistricts_3.set('fieldImages', {'Id': 'TextEdit', });
lyr_Labels_Present_4.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Labels_QS_5.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Administrativeboundaries_1.set('fieldLabels', {'ID_0': 'no label', });
lyr_Presentdistricts_2.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_QSdistricts_3.set('fieldLabels', {'Id': 'no label', });
lyr_Labels_Present_4.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Labels_QS_5.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Labels_QS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});