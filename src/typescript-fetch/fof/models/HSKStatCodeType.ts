/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Supported housekeeping statistical codes.
 * @export
 */
export const HSKStatCodeType = {
    ApprovedCompPostings: 'ApprovedCompPostings',
    StagedCompPostings: 'StagedCompPostings',
    DeclinedCompPostings: 'DeclinedCompPostings',
    CompRoutingInstructionsRequests: 'CompRoutingInstructionsRequests',
    TotalPhysicalRooms: 'TotalPhysicalRooms',
    TotalRoomsToSell: 'TotalRoomsToSell',
    TotalOutOfOrder: 'TotalOutOfOrder',
    TotalOutOfService: 'TotalOutOfService',
    TotalRevenue: 'TotalRevenue',
    PercentRoomsOccupied: 'PercentRoomsOccupied',
    StayoverRooms: 'StayoverRooms',
    StayoverPersons: 'StayoverPersons',
    StayoverVip: 'StayoverVIP',
    DeparturesExpectedRooms: 'DeparturesExpectedRooms',
    DeparturesExpectedPersons: 'DeparturesExpectedPersons',
    DeparturesExpectedVip: 'DeparturesExpectedVIP',
    DeparturesActualRooms: 'DeparturesActualRooms',
    DeparturesActualPersons: 'DeparturesActualPersons',
    DeparturesActualVip: 'DeparturesActualVIP',
    DeparturesInLastHour: 'DeparturesInLastHour',
    ArrivalsInLastHour: 'ArrivalsInLastHour',
    ArrivalsTotal: 'ArrivalsTotal',
    ArrivalsExpectedRooms: 'ArrivalsExpectedRooms',
    ArrivalsExpectedPersons: 'ArrivalsExpectedPersons',
    ArrivalsExpectedVip: 'ArrivalsExpectedVIP',
    ArrivalsExpectedRoomsMadeToday: 'ArrivalsExpectedRoomsMadeToday',
    ArrivalsExpectedPersonsMadeToday: 'ArrivalsExpectedPersonsMadeToday',
    ArrivalsExpectedVipMadeToday: 'ArrivalsExpectedVIPMadeToday',
    ArrivalsActualRooms: 'ArrivalsActualRooms',
    ArrivalsActualPersons: 'ArrivalsActualPersons',
    ArrivalsActualVip: 'ArrivalsActualVIP',
    ExtendedStaysRooms: 'ExtendedStaysRooms',
    ExtendedStaysPersons: 'ExtendedStaysPersons',
    ExtendedStaysVip: 'ExtendedStaysVIP',
    DeparturesTotal: 'DeparturesTotal',
    EarlyDeparturesRooms: 'EarlyDeparturesRooms',
    EarlyDeparturesPersons: 'EarlyDeparturesPersons',
    EarlyDeparturesVip: 'EarlyDeparturesVIP',
    DayUseRooms: 'DayUseRooms',
    DayUsePersons: 'DayUsePersons',
    DayUseVip: 'DayUseVIP',
    WalkInRooms: 'WalkInRooms',
    WalkInPersons: 'WalkInPersons',
    WalkInVip: 'WalkInVIP',
    CanceledOnArrivalRooms: 'CanceledOnArrivalRooms',
    CanceledOnArrivalPersons: 'CanceledOnArrivalPersons',
    CanceledOnArrivalVip: 'CanceledOnArrivalVIP',
    ComplimentaryArrivalRooms: 'ComplimentaryArrivalRooms',
    ComplimentaryArrivalPersons: 'ComplimentaryArrivalPersons',
    ComplimentaryArrivalVip: 'ComplimentaryArrivalVIP',
    ComplimentaryStayoverRooms: 'ComplimentaryStayoverRooms',
    ComplimentaryStayoverPersons: 'ComplimentaryStayoverPersons',
    ComplimentaryStayoverVip: 'ComplimentaryStayoverVIP',
    ComplimentaryDepartureRooms: 'ComplimentaryDepartureRooms',
    ComplimentaryDeparturePersons: 'ComplimentaryDeparturePersons',
    ComplimentaryDepartureVip: 'ComplimentaryDepartureVIP',
    HouseUseArrivalVip: 'HouseUseArrivalVIP',
    HouseUseStayoverRooms: 'HouseUseStayoverRooms',
    HouseUseStayoverPersons: 'HouseUseStayoverPersons',
    HouseUseStayoverVip: 'HouseUseStayoverVIP',
    HouseUseDepartureRooms: 'HouseUseDepartureRooms',
    HouseUseDeparturePersons: 'HouseUseDeparturePersons',
    HouseUseDepartureVip: 'HouseUseDepartureVIP',
    MinAvailableTonightRooms: 'MinAvailableTonightRooms',
    MaxOccupiedTonightRooms: 'MaxOccupiedTonightRooms',
    MaxOccupiedTonightPersons: 'MaxOccupiedTonightPersons',
    MaxOccupiedTonightVip: 'MaxOccupiedTonightVIP',
    MaxPercentageOccupiedTonightRooms: 'MaxPercentageOccupiedTonightRooms',
    BlocksNotPickedUp: 'BlocksNotPickedUp',
    IndividualRooms: 'IndividualRooms',
    IndividualPersons: 'IndividualPersons',
    IndividualVip: 'IndividualVIP',
    GroupAndBlockRooms: 'GroupAndBlockRooms',
    GroupAndBlockPersons: 'GroupAndBlockPersons',
    GroupAndBlockVip: 'GroupAndBlockVIP',
    RoomRevenue: 'RoomRevenue',
    AverageRoomRevenue: 'AverageRoomRevenue',
    InspectedRooms: 'InspectedRooms',
    InspectedVacant: 'InspectedVacant',
    InspectedAssigned: 'InspectedAssigned',
    InspectedOccupied: 'InspectedOccupied',
    CleanedRooms: 'CleanedRooms',
    CleanVacant: 'CleanVacant',
    CleanAssigned: 'CleanAssigned',
    CleanOccupied: 'CleanOccupied',
    DirtyVacant: 'DirtyVacant',
    DirtyAssigned: 'DirtyAssigned',
    DirtyOccupied: 'DirtyOccupied',
    PickupVacant: 'PickupVacant',
    PickupAssigned: 'PickupAssigned',
    PickupOccupied: 'PickupOccupied',
    OutOfOrderVacant: 'OutOfOrderVacant',
    OutOfOrderAssigned: 'OutOfOrderAssigned',
    OutOfOrderOccupied: 'OutOfOrderOccupied',
    OutOfServiceVacant: 'OutOfServiceVacant',
    OutOfServiceAssigned: 'OutOfServiceAssigned',
    OutOfServiceOccupied: 'OutOfServiceOccupied',
    QueueRooms: 'QueueRooms',
    TurndownRequired: 'TurndownRequired',
    TurndownNotRequired: 'TurndownNotRequired',
    TurndownCompletedRequired: 'TurndownCompletedRequired',
    AdultsInHouse: 'AdultsInHouse',
    ChildrenInHouse: 'ChildrenInHouse',
    AdultsExpectedCheckedOut: 'AdultsExpectedCheckedOut',
    ChildrenExpectedCheckedOut: 'ChildrenExpectedCheckedOut',
    AdultsDeparted: 'AdultsDeparted',
    ChildrenDeparted: 'ChildrenDeparted',
    InHouseRooms: 'InHouseRooms',
    InHouse: 'InHouse',
    MaxOccupancyPercentage: 'MaxOccupancyPercentage',
    Stayover: 'Stayover',
    TotalRoomsReserved: 'TotalRoomsReserved',
    RevPar: 'RevPar',
    SkipRooms: 'SkipRooms',
    SleepRooms: 'SleepRooms',
    HouseUseArrivalRooms: 'HouseUseArrivalRooms',
    HouseUseArrivalPersons: 'HouseUseArrivalPersons',
    AverageCheckInTime: 'AverageCheckInTime',
    CurrentAveWaitTime: 'CurrentAveWaitTime',
    CheckedInsTotal: 'CheckedInsTotal',
    ExpectedCheckInsTotal: 'ExpectedCheckInsTotal',
    CheckedOutsTotal: 'CheckedOutsTotal',
    ExpectedCheckOutsTotal: 'ExpectedCheckOutsTotal',
    ScheduledCheckOutsTotal: 'ScheduledCheckOutsTotal',
    RoomMaintenanceResolvedTotal: 'RoomMaintenanceResolvedTotal',
    RoomMaintenanceUnResolvedTotal: 'RoomMaintenanceUnResolvedTotal',
    PreRegisteredTotal: 'PreRegisteredTotal',
    VipPreRegisteredTotal: 'VIPPreRegisteredTotal',
    OpenFolioTotal: 'OpenFolioTotal',
    TurndownTotal: 'TurndownTotal',
    VipTurndownTotal: 'VIPTurndownTotal',
    VipGuestsArriving: 'VIPGuestsArriving',
    VipGuestsDeparting: 'VIPGuestsDeparting',
    VipGuestsTotal: 'VIPGuestsTotal',
    IndividualAdvanceCheckedInCurrent: 'IndividualAdvanceCheckedInCurrent',
    BlockAdvanceCheckedInCurrent: 'BlockAdvanceCheckedInCurrent',
    IndividualAdvanceCheckedInInhouse: 'IndividualAdvanceCheckedInInhouse',
    BlockAdvanceCheckedInInhouse: 'BlockAdvanceCheckedInInhouse',
    IndividualAdvanceCheckedInTotal: 'IndividualAdvanceCheckedInTotal',
    BlockAdvanceCheckedInTotal: 'BlockAdvanceCheckedInTotal',
    InHouseBlocksTotal: 'InHouseBlocksTotal',
    CancellationsTotal: 'CancellationsTotal',
    NewReservationsTotal: 'NewReservationsTotal',
    ArrivalResvs: 'ArrivalResvs',
    ArrivalVipResvs: 'ArrivalVIPResvs',
    ArrivalMemberResvs: 'ArrivalMemberResvs',
    ArrivalUnallocResvs: 'ArrivalUnallocResvs',
    ArrivalManualAssgnResvs: 'ArrivalManualAssgnResvs',
    ArrivalAiAssgnResvs: 'ArrivalAIAssgnResvs',
    ArrivalAiUpgResvs: 'ArrivalAIUpgResvs',
    ArrivalAiAssgnVipResvs: 'ArrivalAIAssgnVIPResvs',
    ArrivalAiAssgnMemberResvs: 'ArrivalAIAssgnMemberResvs',
    ArrivalAiAssgnOverridden: 'ArrivalAIAssgnOverridden'
} as const;
export type HSKStatCodeType = typeof HSKStatCodeType[keyof typeof HSKStatCodeType];


export function HSKStatCodeTypeFromJSON(json: any): HSKStatCodeType {
    return HSKStatCodeTypeFromJSONTyped(json, false);
}

export function HSKStatCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatCodeType {
    return json as HSKStatCodeType;
}

export function HSKStatCodeTypeToJSON(value?: HSKStatCodeType | null): any {
    return value as any;
}
