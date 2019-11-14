/*
 * @Author: liwei@esrichina.com.cn 
 * @Date: 2019-06-15 01:29:54 
 * @Last Modified by: mikey
 * @Last Modified time: 2019-07-26 08:59:44
 */

window.mapConfig = {
  jsapiUrl: "http://localhost/jsapi/init.js",
  // jsapiUrl: "http://js.arcgis.com/4.12/",
  cssUrl: "http://localhost/jsapi/esri/themes/light/main.css",
  proxyUrl: "",
  center: {
    x: 105,
    y: 35,
    spatialReference: 4326
  },
  zoom: 3,

  camera: {
    position: {
      longitude: -74.0338,
      latitude: 40.6913,
      z: 707,
      spatialReference: {
        wkid: 4326
      }
    },
    tilt: 80,
    heading: 50
  },
  TileLayer: {
    baseMap: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",

    baseEelevation: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
    baseImagery: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    baseImageryAnno: "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer"
  },
  MapImageLayer: {

  },
  FeatureLayer: {
    extent: { //图层范围
      xmin: -3094834,
      ymin: -44986,
      xmax: 2752687,
      ymax: 3271654,
      spatialReference: {
        wkid: 5070
      }
    },
    spatialReference: { //空间参考
      wkid: 5070
    },
    statesLayer: { //面状底图图层-州
      url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [1, 1, 1, 0.7],
          outline: {
            color: [50, 50, 50, 0.7],
            width: 0.3
          }
        }
      }
    },
    uniqueValueLayer: { //唯一值图层-干道
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_Freeway_System/FeatureServer/2",
      title: "干道",
      minScale: 0,
      maxScale: 0,
      //渲染器
      renderer: {
        type: "unique-value", //唯一值渲染
        legendOptions: {
          title: "道路"
        },
        defaultSymbol: { //默认符号
          type: "simple-line", // 简单线符号
          color: "#ef37ac",
          width: "0.5px",
          style: "solid"
        },
        defaultLabel: "州际高速",
        field: "CLASS",
        uniqueValueInfos: [{
          value: "U", // 高速路编码
          symbol: { //高速路符号
            type: "simple-line", // 简单线符号
            color: "#ff6207",
            width: "2px",
            style: "solid"
          },
          label: "高速路"
        },
        {
          value: "I", // 免费干道编码
          symbol: { //免费干道符号
            type: "simple-line", // 简单线符号
            color: "#30ffea",
            width: "1px",
            style: "solid"
          },
          label: "主干道"
        }
        ]
      },
    },
    //classBreak-颜色 分段颜色
    classBreakColorLayer: {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Puget_Sound_BG_demographics/FeatureServer/0",
      title: "Seattle block groups",
      renderer: {
        type: "class-breaks", // 创建ClassBreaksRenderer
        field: "COL_DEG",
        normalizationField: "EDUCBASECY",
        legendOptions: {
          title: "% of adults (25+) with a college degree"
        },
        defaultSymbol: {
          type: "simple-fill", // 简单填充符号
          color: "black",
          style: "backward-diagonal",
          outline: {
            width: 0.5,
            color: [50, 50, 50, 0.6]
          }
        },
        defaultLabel: "no data",
        classBreakInfos: [
          {
            minValue: 0,
            maxValue: 0.3499,
            symbol: {
              type: "simple-fill", // 简单填充符号
              color: "#fffcd4",
              style: "solid",
              outline: {
                width: 0.2,
                color: [255, 255, 255, 0.5]
              }
            },
            label: "< 35%"
          },
          {
            minValue: 0.35,
            maxValue: 0.4999,
            symbol: {
              type: "simple-fill", // 简单填充符号
              color: "#b1cdc2",
              style: "solid",
              outline: {
                width: 0.2,
                color: [255, 255, 255, 0.5]
              }
            },
            label: "35 - 50%"
          },
          {
            minValue: 0.5,
            maxValue: 0.7499,
            symbol: {
              type: "simple-fill", // 简单填充符号
              color: "#38627a",
              style: "solid",
              outline: {
                width: 0.2,
                color: [255, 255, 255, 0.5]
              }
            },
            label: "50 - 75%"
          },
          {
            minValue: 0.75,
            maxValue: 1.0,
            symbol: {
              type: "simple-fill", // 简单填充符号
              color: "#0d2644",
              style: "solid",
              outline: {
                width: 0.2,
                color: [255, 255, 255, 0.5]
              }
            },
            label: "> 75%"
          }
        ]
      },
      popupTemplate: {
        // 创建属性弹出框内容模板
        title: "Block Group {FID_Block_Group}",
        content:
          "{COL_DEG} adults 25 years old and older in this block group have a college degree. " +
          "{NO_COL_DEG} adults do not have a college degree."
      },
      definitionExpression: "City = 'Seattle' AND EDUCBASECY > 0",
      opacity: 0.9
    },
    //classBreak-符号大小 分段符号大小
    classBreakSizeLayer: {
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/WorldCities/FeatureServer/0",
      title: "主要城市",
      renderer: {
        type: "simple", // 创建ClassBreaksRenderer
        field: "rank",
        title: "等级",
        symbol: {
          type: "simple-marker", // 简单填充符号
          color: [0, 255, 255],
          style: "backward-diagonal",
          outline: {
            width: 0.5,
            color: [50, 50, 50, 0.6]
          }
        },
        visualVariables: [{
          type: "size", //渲染类型大小
          field: "rank", //属性字段
          stops: [
            {
              value: 10,
              size: 12
            },
            {
              value: 50,
              size: 10
            },
            {
              value: 100,
              size: 8
            },
            {
              value: 150,
              size: 6
            }, {
              value: 200,
              size: 4
            }
          ]
        }]
      },
      opacity: 0.9
    },
    //热力图
    heatMapLayer: {
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/WorldCities/FeatureServer/0",
      renderer: {
        type: "heatmap", // 热力图渲染
        field: "rank", // 属性字段
        colorStops: [{
          ratio: 0,
          color: "rgba(255, 255, 255, 0)"
        },
        {
          ratio: 0.2,
          color: "rgba(255, 255, 255, 1)"
        },
        {
          ratio: 0.5,
          color: "rgba(255, 140, 0, 1)"
        },
        {
          ratio: 0.8,
          color: "rgba(255, 140, 0, 1)"
        },
        {
          ratio: 1,
          color: "rgba(255, 0, 0, 1)"
        }
        ],
        minPixelIntensity: 0,
        maxPixelIntensity: 5000
      },
      title: "城市",
      definitionExpression: "adm = 'United States of America'"
    },
    //点密度
    dotDensityLayer: {
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Population_by_Race_and_Hispanic_Origin_Boundaries/FeatureServer/2",
      minScale: 20000000,
      maxScale: 35000,
      title: "Current Population Estimates (ACS)",
      popupTemplate: {
        title: "{County}, {State}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "B03002_003E",
            label: "White (non-Hispanic)",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_012E",
            label: "Hispanic",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_004E",
            label: "Black or African American",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_006E",
            label: "Asian",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_005E",
            label: "American Indian/Alaskan Native",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_007E",
            label: "Pacific Islander/Hawaiian Native",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_008E",
            label: "Other race",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B03002_009E",
            label: "Two or more races",
            format: {
              digitSeparator: true,
              places: 0
            }
          }
          ]
        }]
      },
      renderer: {
        referenceDotValue: 100,
        outline: null,
        referenceScale: 577790, // 1:577,790 view scale
        legendOptions: {
          unit: "people"
        },
        attributes: [{
          field: "B03002_003E",
          color: "#f23c3f",
          label: "White (non-Hispanic)"
        },
        {
          field: "B03002_012E",
          color: "#e8ca0d",
          label: "Hispanic"
        },
        {
          field: "B03002_004E",
          color: "#00b6f1",
          label: "Black or African American"
        },
        {
          field: "B03002_006E",
          color: "#32ef94",
          label: "Asian"
        },
        {
          field: "B03002_005E",
          color: "#ff7fe9",
          label: "American Indian/Alaskan Native"
        },
        {
          field: "B03002_007E",
          color: "#e2c4a5",
          label: "Pacific Islander/Hawaiian Native"
        },
        {
          field: "B03002_008E",
          color: "#ff6a00",
          label: "Other race"
        },
        {
          field: "B03002_009E",
          color: "#96f7ef",
          label: "Two or more races"
        }
        ]
      },
      portalItem: {
        id: "56b5bd522c52409c90d902285732e9f1"
      }
    },
    //可视化变量渲染-颜色
    visualizeColorLayer: {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",
      renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [128, 128, 128, 0.2],
            width: "0.5px"
          }
        },
        label: "U.S. County",
        visualVariables: [
          {
            type: "color",
            field: "POP_POVERTY",
            normalizationField: "TOTPOP_CY",
            legendOptions: {
              title: "% population in poverty by county"
            },
            stops: [
              {
                value: 0.1,
                color: "#FFFCD4",
                label: "<10%"
              },
              {
                value: 0.3,
                color: "#350242",
                label: ">30%"
              }
            ]
          }
        ]
      },
      title: "Poverty in the southeast U.S.",
    },
    //可视化变量渲染-符号大小
    visualizeSizeLayer: {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",
      renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [0, 0, 0, 0],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: "#71de6e",
            width: 1
          }
        },
        visualVariables: [
          {
            type: "size",
            field: "POP_POVERTY",
            normalizationField: "TOTPOP_CY",
            legendOptions: {
              title: "% population in poverty by county"
            },
            stops: [
              {
                value: 0.15,
                size: 4,
                label: "<15%"
              },
              {
                value: 0.25,
                size: 12,
                label: "25%"
              },
              {
                value: 0.35,
                size: 20,
                label: ">35%"
              }
            ]
          }
        ]
      },
      title: "Poverty in the southeast U.S."
    },
    //智能制图
    smartMappingLayer: {
      layer: {
        url:
          "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",
        outFields: ["POP_POVERTY", "TOTPOP_CY", "COUNTY", "STATE"],
        popupTemplate: {
          // autocasts as new PopupTemplate()
          title: "{COUNTY}, {STATE}",
          content:
            "{POP_POVERTY} of {TOTPOP_CY} people live below the poverty line.",
          fieldInfos: [
            {
              fieldName: "POP_POVERTY",
              format: {
                digitSeparator: true,
                places: 0
              }
            },
            {
              fieldName: "TOTPOP_CY",
              format: {
                digitSeparator: true,
                places: 0
              }
            }
          ]
        }
      },
      colorParams: {
        field: "POP_POVERTY",
        normalizationField: "TOTPOP_CY",
        theme: "above-and-below"
      },
      sliderParams: {
        numHandles: 3,
        syncedHandles: true,
        container: "slider"
      }
    },
    WaterLayer: {
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Water_bodies/FeatureServer"
    }
  },
  VectorTileLayer: {

  },
  SceneLayer: {
    portalItem: {
      id: "2e0761b9a4274b8db52c4bf34356911e",
      description: "SceneLayer服务portal Item"
    }
  },
  SceneFeature: {
    symbolLayer: {
      url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer/0",
      render: {
        type: "simple",
        symbol: {
          type: "point-3d",
          symbolLayers: [
            {
              type: "object",
              resource: {
                primitive: "cone"
              },
              width: 50000
            }
          ]
        },
        label: "hurricane location",
        visualVariables: [
          {
            type: "color",
            field: "PRESSURE",
            stops: [
              {
                value: 950,
                color: "red"
              },
              {
                value: 1020,
                color: "blue"
              }
            ]
          },
          {
            type: "size",
            field: "WINDSPEED",
            stops: [
              {
                value: 20,
                size: 60000
              },
              {
                value: 150,
                size: 500000
              }
            ],
            axis: "height"
          },
          {
            type: "size",
            axis: "width-and-depth",
            useSymbolValue: true
          }
        ]
      },
      initCam: {
        position: {
          x: -7094839,
          y: -113987,
          z: 8032780,
          spatialReference: {
            wkid: 3857
          }
        },
        heading: 358.8,
        tilt: 13.7
      }
    }
  },
  WebMap: {
    portalItem: {
      id: "e691172598f04ea8881cd2a4adaa45ba",
      description: "WebMap服务portal Item"
    }
  },
  WebScene: {
    portalItem: {
      id: "3a9976baef9240ab8645ee25c7e9c096",
      description: "WebScene服务portal Item"
    }
  },
  GeometryService: {

  },
  GeoprocessingService: {
    hotSpotUrl: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/911CallsHotspot/GPServer/911%20Calls%20Hotspot",
    routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World",
    viewshedUrl: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Elevation/ESRI_Elevation_World/GPServer/Viewshed",
    elevationUrl: "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World",
    beforeLandslideUrl: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/OsoLandslide/OsoLandslide_Before_3DTerrain/ImageServer",
    afterLandslideUrl: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/OsoLandslide/OsoLandslide_After_3DTerrain/ImageServer"
  },
  OprService: {
    getUser: "http://localhost/"
  }
}