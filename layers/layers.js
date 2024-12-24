var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gatosmaislindosdomundo_1 = new ol.format.GeoJSON();
var features_Gatosmaislindosdomundo_1 = format_Gatosmaislindosdomundo_1.readFeatures(json_Gatosmaislindosdomundo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gatosmaislindosdomundo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gatosmaislindosdomundo_1.addFeatures(features_Gatosmaislindosdomundo_1);
var lyr_Gatosmaislindosdomundo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gatosmaislindosdomundo_1, 
                style: style_Gatosmaislindosdomundo_1,
                popuplayertitle: "Gatos mais lindos do mundo ",
                interactive: true,
                title: '<img src="styles/legend/Gatosmaislindosdomundo_1.png" /> Gatos mais lindos do mundo '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Gatosmaislindosdomundo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gatosmaislindosdomundo_1];
lyr_Gatosmaislindosdomundo_1.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'nome': 'nome', 'informaç�': 'informaç�', });
lyr_Gatosmaislindosdomundo_1.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'informaç�': 'TextEdit', });
lyr_Gatosmaislindosdomundo_1.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'informaç�': 'no label', });
lyr_Gatosmaislindosdomundo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});