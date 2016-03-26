export default {
  ui: {
    currentTab: 'RouteList',
    currentAgency: '1',
    currentRoute: '1_801',
    userLocation: { lat: 33.7820307, lon: -84.39685250000001 },
    userLocationError: 'chump',
    globalError: 'wow m8',
    stopList: {
      currentStopGroup: '0',
    },
    loading: {
      routesForAgencyLoading: true,
      nearbyTripsLoading: true,
      stopsForRouteLoading: true,
      vehiclesLoading: true,
    },
    map: {
      lat: 69,
      lon: 96,
      latSpan: 0.39840300000000184,
      lonSpan: 0.4220969999999937,
    },
    recent: [
      { type: 'route', id: '1_801' },
      { type: 'stop', id: '1_2606' },
    ],
  },
  oba: {
    stopsForLocation: {},
    vehicles: {
      '1_5008': {
        lastLocationUpdateTime: 0,
        lastUpdateTime: 1458920411000,
        location: {
          lat: 30.16289520263672,
          lon: -97.79043579101562,
        },
        phase: '',
        status: '',
        tripId: '1_1538496',
        tripStatus: {
          activeTripId: '1_1538496',
          blockTripSequence: 3,
          closestStop: '1_5938',
          closestStopTimeOffset: 3,
          distanceAlongTrip: 21154.64587459281,
          frequency: null,
          lastKnownDistanceAlongTrip: 0,
          lastKnownLocation: {
            lat: 30.16289520263672,
            lon: -97.79043579101562,
          },
          lastKnownOrientation: 0,
          lastLocationUpdateTime: 0,
          lastUpdateTime: 1458920411000,
          nextStop: '1_5938',
          nextStopTimeOffset: 3,
          orientation: 58.43481814849745,
          phase: '',
          position: {
            lat: 30.32622723526024,
            lon: -97.72617144714636,
          },
          predicted: true,
          scheduleDeviation: -3600,
          scheduledDistanceAlongTrip: 21154.64587459281,
          serviceDate: 1458882000000,
          situationIds: [],
          status: 'default',
          totalDistanceAlongTrip: 35925.61456688476,
          vehicleId: '1_5008',
        },
        vehicleId: '1_5008',
      },
    },
    arrivalsAndDepartures: {
      '1_2606': {
        arrivalsAndDepartures: [{
          arrivalEnabled: true,
          blockTripSequence: 9,
          departureEnabled: true,
          distanceFromStop: -15889.13553387046,
          frequency: null,
          lastUpdateTime: 1458523690000,
          numberOfStopsAway: -15,
          predicted: true,
          predictedArrivalInterval: null,
          predictedArrivalTime: 1458521400000,
          predictedDepartureInterval: null,
          predictedDepartureTime: 1458521400000,
          routeId: '1_803',
          routeLongName: 'Burnet/S Lamar',
          routeShortName: '803',
          scheduledArrivalInterval: null,
          scheduledArrivalTime: 1458525000000,
          scheduledDepartureInterval: null,
          scheduledDepartureTime: 1458525000000,
          serviceDate: 1458450000000,
          situationIds: [],
          status: 'default',
          stopId: '1_2606',
          stopSequence: 8,
          tripHeadsign: '803 DOMAIN-NB',
          tripId: '1_1564640',
          tripStatus: {
            activeTripId: '1_1564640',
            blockTripSequence: 9,
            closestStop: '1_5724',
            closestStopTimeOffset: -156,
            distanceAlongTrip: 24324.41115803877,
            frequency: null,
            lastKnownDistanceAlongTrip: 0,
            lastKnownLocation: {
              lat: 30.229114532470703,
              lon: -97.80003356933594,
            },
            lastKnownOrientation: 0,
            lastLocationUpdateTime: 0,
            lastUpdateTime: 1458523690000,
            nextStop: '1_5919',
            nextStopTimeOffset: 204,
            orientation: 70.45817983654665,
            phase: '',
            position: {
              lat: 30.393579437037054,
              lon: -97.72098482851548,
            },
            predicted: true,
            scheduleDeviation: -3600,
            scheduledDistanceAlongTrip: 24324.41115803877,
            serviceDate: 1458450000000,
            situationIds: [],
            status: 'default',
            totalDistanceAlongTrip: 25968.232785249747,
            vehicleId: '1_5059',
          },
          vehicleId: '1_5059',
        }],
        nearbyStopIds: [
          '1_5938',
          '1_5965',
        ],
        situationIds: [],
        stopId: '1_2606',
      },
    },
    nearbyTrips: [
      {
        frequency: null,
        schedule: null,
        serviceDate: 1458450000000,
        situationIds: [],
        status: {
          activeTripId: '1_1538496',
          blockTripSequence: 10,
          closestStop: '1_2606',
          closestStopTimeOffset: 13,
          distanceAlongTrip: 11486.18365503769,
          frequency: null,
          lastKnownDistanceAlongTrip: 0,
          lastKnownLocation: {
            lat: 30.28026580810547,
            lon: -97.73486328125,
          },
          lastKnownOrientation: 0,
          lastLocationUpdateTime: 0,
          lastUpdateTime: 1458522665000,
          nextStop: '1_2606',
          nextStopTimeOffset: 13,
          orientation: 164.73151421272067,
          phase: '',
          position: {
            lat: 30.271960291732046,
            lon: -97.73827642223726,
          },
          predicted: true,
          scheduleDeviation: 60,
          scheduledDistanceAlongTrip: 11486.18365503769,
          serviceDate: 1458450000000,
          situationIds: [],
          status: 'default',
          totalDistanceAlongTrip: 22529.47702655043,
          vehicleId: '1_8942',
        },
        tripId: '1_1538496',
      },
    ],
    stopGroups: {
      '1_801': {
        0: {
          id: '0',
          name: { name: '801 TECH RIDGE-NB', names: ['801 TECH RIDGE-NB'], type: 'destination' },
          polylines: [
            { length: 50, levels: '', points: 'qrmwDfuusQLL|DzBjLnGpCtAnMdHpY|OnBlAhHtDxBhAdD|AtF|BxBr@~Bt@pErA|B^xC^nT~Dp@LbCd@lAXnCn@`X~InJdCjGnAzCr@bIdBfXzFdN|CxGxAtN|CXFfPlDpFfAhLfCfGdJjAhAvAv@PDz@PjFFJUFsGK[`GrB~Bx@xMlEtBr@qAvD{@xB' },
          ],
          stopIds: ['1_2606'],
          subGroups: [],
        },
        1: {
          id: '1',
          name: { name: '801 SOUTH PARK-SB', names: ['801 SOUTH PARK-SB'], type: 'destination' },
          polylines: [
            { length: 50, levels: '', points: 'qrmwDfuusQLL|DzBjLnGpCtAnMdHpY|OnBlAhHtDxBhAdD|AtF|BxBr@~Bt@pErA|B^xC^nT~Dp@LbCd@lAXnCn@`X~InJdCjGnAzCr@bIdBfXzFdN|CxGxAtN|CXFfPlDpFfAhLfCfGdJjAhAvAv@PDz@PjFFJUFsGK[`GrB~Bx@xMlEtBr@qAvD{@xB' },
          ],
          stopIds: ['1_2606'],
          subGroups: [],
        },
      },
    },
    references: {
      agencies: {
        1: {
          disclaimer: '',
          id: '1',
          lang: 'en',
          name: 'Capital Metro',
          phone: '512-474-1200',
          privateService: false,
          timezone: 'America/Chicago',
          url: 'http://www.capmetro.org/',
        },
      },
      routes: {
        '1_801': {
          agencyId: '1',
          color: 'E11F8F',
          description: '',
          id: '1_801',
          longName: 'N Lamar S Congress',
          shortName: '801',
          textColor: '000000',
          type: 3,
          url: '',
        },
      },
      stops: {
        '1_2606': {
          code: '2606',
          direction: 'N',
          id: '1_2606',
          lat: 30.27042,
          locationType: 0,
          lon: -97.74444,
          name: 'AUSTIN HISTORY CENTER STATION (NB)',
          routeIds: [
            '1_801',
            '1_803',
          ],
          wheelchairBoarding: 'UNKNOWN',
        },
        '1_5938': {
          code: '5938',
          direction: 'W',
          id: '1_5938',
          lat: 30.270613,
          locationType: 0,
          lon: -97.744215,
          name: '216 8TH/LAVACA',
          routeIds: ['1_801'],
          wheelchairBoarding: 'UNKNOWN',
        },
      },
      trips: {
        '1_1538496': {
          blockId: '1_556090',
          directionId: '1',
          id: '1_1538496',
          routeId: '1_20',
          routeShortName: '',
          serviceId: '1_105-5',
          shapeId: '1_34643',
          timeZone: '',
          tripHeadsign: '20-Manor Rd/Riverside-SB',
          tripShortName: '',
        },
      },
      situations: {
        '1_111': {
          activeWindows: [{ from: 1457667000, to: 0 }],
          allAffects: [{
            agencyId: '',
            applicationId: '',
            directionId: '',
            routeId: '1_801',
            stopId: '1_2606',
            tripId: '',
          }],
          consequences: [{
            condition: 'detour',
            conditionDetails: null,
          }],
          creationTime: 1458581004910,
          description: null,
          id: '1_111',
          publicationWindows: [],
          reason: 'OTHER_CAUSE',
          severity: '',
          summary: {
            lang: 'en',
            value: 'SXSW - 2016',
          },
          url: {
            lang: 'en',
            value: 'http://www.capmetro.org/planner',
          },
        },
      },
    },
  },
};
