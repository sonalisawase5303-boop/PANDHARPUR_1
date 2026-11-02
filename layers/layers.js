var wms_layers = [];

var format_BUIDING_0 = new ol.format.GeoJSON();
var features_BUIDING_0 = format_BUIDING_0.readFeatures(json_BUIDING_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUIDING_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUIDING_0.addFeatures(features_BUIDING_0);
var lyr_BUIDING_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUIDING_0, 
                style: style_BUIDING_0,
                popuplayertitle: 'BUIDING',
                interactive: true,
                title: '<img src="styles/legend/BUIDING_0.png" /> BUIDING'
            });
var format_LANDUSE_1 = new ol.format.GeoJSON();
var features_LANDUSE_1 = format_LANDUSE_1.readFeatures(json_LANDUSE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANDUSE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDUSE_1.addFeatures(features_LANDUSE_1);
var lyr_LANDUSE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANDUSE_1, 
                style: style_LANDUSE_1,
                popuplayertitle: 'LAND USE',
                interactive: true,
                title: '<img src="styles/legend/LANDUSE_1.png" /> LAND USE'
            });
var format_RAILWAYS_2_2 = new ol.format.GeoJSON();
var features_RAILWAYS_2_2 = format_RAILWAYS_2_2.readFeatures(json_RAILWAYS_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAYS_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAYS_2_2.addFeatures(features_RAILWAYS_2_2);
var lyr_RAILWAYS_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAYS_2_2, 
                style: style_RAILWAYS_2_2,
                popuplayertitle: 'RAILWAYS_2',
                interactive: true,
                title: '<img src="styles/legend/RAILWAYS_2_2.png" /> RAILWAYS_2'
            });
var format_ROAD_3 = new ol.format.GeoJSON();
var features_ROAD_3 = format_ROAD_3.readFeatures(json_ROAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_3.addFeatures(features_ROAD_3);
var lyr_ROAD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_3, 
                style: style_ROAD_3,
                popuplayertitle: 'ROAD',
                interactive: true,
                title: '<img src="styles/legend/ROAD_3.png" /> ROAD'
            });
var format_WATER_4 = new ol.format.GeoJSON();
var features_WATER_4 = format_WATER_4.readFeatures(json_WATER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATER_4.addFeatures(features_WATER_4);
var lyr_WATER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATER_4, 
                style: style_WATER_4,
                popuplayertitle: 'WATER',
                interactive: true,
                title: '<img src="styles/legend/WATER_4.png" /> WATER'
            });
var format_WATER1_1_5 = new ol.format.GeoJSON();
var features_WATER1_1_5 = format_WATER1_1_5.readFeatures(json_WATER1_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATER1_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATER1_1_5.addFeatures(features_WATER1_1_5);
var lyr_WATER1_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATER1_1_5, 
                style: style_WATER1_1_5,
                popuplayertitle: 'WATER1_1',
                interactive: true,
                title: '<img src="styles/legend/WATER1_1_5.png" /> WATER1_1'
            });
var format_Pandharpur1_6 = new ol.format.GeoJSON();
var features_Pandharpur1_6 = format_Pandharpur1_6.readFeatures(json_Pandharpur1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pandharpur1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pandharpur1_6.addFeatures(features_Pandharpur1_6);
var lyr_Pandharpur1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pandharpur1_6, 
                style: style_Pandharpur1_6,
                popuplayertitle: 'Pandharpur1',
                interactive: true,
                title: '<img src="styles/legend/Pandharpur1_6.png" /> Pandharpur1'
            });

lyr_BUIDING_0.setVisible(true);lyr_LANDUSE_1.setVisible(true);lyr_RAILWAYS_2_2.setVisible(true);lyr_ROAD_3.setVisible(true);lyr_WATER_4.setVisible(true);lyr_WATER1_1_5.setVisible(true);lyr_Pandharpur1_6.setVisible(true);
var layersList = [lyr_BUIDING_0,lyr_LANDUSE_1,lyr_RAILWAYS_2_2,lyr_ROAD_3,lyr_WATER_4,lyr_WATER1_1_5,lyr_Pandharpur1_6];
lyr_BUIDING_0.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_LANDUSE_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_RAILWAYS_2_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_ROAD_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_WATER_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_WATER1_1_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Pandharpur1_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_BUIDING_0.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_LANDUSE_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_RAILWAYS_2_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ROAD_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_WATER_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_WATER1_1_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Pandharpur1_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_BUIDING_0.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_LANDUSE_1.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_RAILWAYS_2_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_ROAD_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'ref': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_WATER_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'width': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_WATER1_1_5.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'header label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Pandharpur1_6.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Pandharpur1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});