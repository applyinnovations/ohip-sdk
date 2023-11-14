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
import * as runtime from '../runtime';
import type { ReservationQueueStatistics, ReservationStatusStatisticsResponseType, RoomStatusStatisticsListType, Statistics, TaskSheetStatistics } from '../models/index';
export interface GetFrontOfficeStatisticsRequest {
    statisticsCode?: GetFrontOfficeStatisticsStatisticsCodeEnum;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    date?: Date;
    metric?: Set<GetFrontOfficeStatisticsMetricEnum>;
    parameterNames?: Array<string>;
    parameterValues?: Array<string>;
    roomClasses?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetFrontOfficeStatisticsWithDateRangeRequest {
    statisticsCode?: GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    endDate?: Date;
    date?: Date;
    metric?: Set<GetFrontOfficeStatisticsWithDateRangeMetricEnum>;
    parameterNames?: Array<string>;
    parameterValues?: Array<string>;
    roomClasses?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetReservationQueueStatisticsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetReservationStatusStatisticsRequest {
    hotelId?: string;
    reservationStatus?: Array<GetReservationStatusStatisticsReservationStatusEnum>;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRoomsByRoomStatusRequest {
    hotelId?: string;
    frontOfficeStatus?: GetRoomsByRoomStatusFrontOfficeStatusEnum;
}
export interface GetTaskSheetStatisticsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    includeAllAssignedTasks?: boolean;
    includeTaskSheetsDetails?: boolean;
    taskCode?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class FOFStatsApi extends runtime.BaseAPI {
    /**
     * Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
     * Get front office statistics
     */
    getFrontOfficeStatisticsRaw(requestParameters: GetFrontOfficeStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Statistics>>;
    /**
     * Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
     * Get front office statistics
     */
    getFrontOfficeStatistics(requestParameters: GetFrontOfficeStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Statistics>;
    /**
     * This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
     * Get front office Statistics
     */
    getFrontOfficeStatisticsWithDateRangeRaw(requestParameters: GetFrontOfficeStatisticsWithDateRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Statistics>>;
    /**
     * This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
     * Get front office Statistics
     */
    getFrontOfficeStatisticsWithDateRange(requestParameters: GetFrontOfficeStatisticsWithDateRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Statistics>;
    /**
     * Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
     * Get hotel reservation queue statistics
     */
    getReservationQueueStatisticsRaw(requestParameters: GetReservationQueueStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationQueueStatistics>>;
    /**
     * Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
     * Get hotel reservation queue statistics
     */
    getReservationQueueStatistics(requestParameters: GetReservationQueueStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationQueueStatistics>;
    /**
     * This API will fetch reservation statistics for the given status per room type. <p><strong>OperationId:</strong>getReservationStatusStatistics</p>
     * Get Reservation Status Statistics
     */
    getReservationStatusStatisticsRaw(requestParameters: GetReservationStatusStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStatusStatisticsResponseType>>;
    /**
     * This API will fetch reservation statistics for the given status per room type. <p><strong>OperationId:</strong>getReservationStatusStatistics</p>
     * Get Reservation Status Statistics
     */
    getReservationStatusStatistics(requestParameters: GetReservationStatusStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStatusStatisticsResponseType>;
    /**
     * For current business date, rooms are grouped by the roomClass and roomType to display their housekeeping roomStatus.
     * Get counts of rooms by housekeeping status and front office status.
     */
    getRoomsByRoomStatusRaw(requestParameters: GetRoomsByRoomStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoomStatusStatisticsListType>>;
    /**
     * For current business date, rooms are grouped by the roomClass and roomType to display their housekeeping roomStatus.
     * Get counts of rooms by housekeeping status and front office status.
     */
    getRoomsByRoomStatus(requestParameters: GetRoomsByRoomStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoomStatusStatisticsListType>;
    /**
     * This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
     * Get housekeeping statistics
     */
    getTaskSheetStatisticsRaw(requestParameters: GetTaskSheetStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskSheetStatistics>>;
    /**
     * This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
     * Get housekeeping statistics
     */
    getTaskSheetStatistics(requestParameters: GetTaskSheetStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskSheetStatistics>;
}
/**
 * @export
 */
export declare const GetFrontOfficeStatisticsStatisticsCodeEnum: {
    readonly AdvanceCheckIn: "AdvanceCheckIn";
    readonly AiRoomAssignment: "AIRoomAssignment";
    readonly AvailableRooms: "AvailableRooms";
    readonly CheckIns: "CheckIns";
    readonly CheckOuts: "CheckOuts";
    readonly ComplimentaryOrHouseUse: "ComplimentaryOrHouseUse";
    readonly DailyProjection: "DailyProjection";
    readonly HouseSummary: "HouseSummary";
    readonly HouseSummaryMonthToDate: "HouseSummaryMonthToDate";
    readonly HouseSummaryYearToDate: "HouseSummaryYearToDate";
    readonly InHouse: "InHouse";
    readonly LastHourStatus: "LastHourStatus";
    readonly ReservationActivity: "ReservationActivity";
    readonly ReservationActivityDaily: "ReservationActivityDaily";
    readonly ReservationActivityMonthToDate: "ReservationActivityMonthToDate";
    readonly ReservationActivityYearToDate: "ReservationActivityYearToDate";
    readonly ReservationsCancellationsToday: "ReservationsCancellationsToday";
    readonly ReservationStatistics: "ReservationStatistics";
    readonly RoomMaintenance: "RoomMaintenance";
    readonly RoomStatus: "RoomStatus";
    readonly Turndown: "Turndown";
    readonly VipGuests: "VIPGuests";
    readonly CompRouting: "CompRouting";
};
export type GetFrontOfficeStatisticsStatisticsCodeEnum = typeof GetFrontOfficeStatisticsStatisticsCodeEnum[keyof typeof GetFrontOfficeStatisticsStatisticsCodeEnum];
/**
 * @export
 */
export declare const GetFrontOfficeStatisticsMetricEnum: {
    readonly AdultsDeparted: "AdultsDeparted";
    readonly AdultsExpectedCheckedOut: "AdultsExpectedCheckedOut";
    readonly AdultsInHouse: "AdultsInHouse";
    readonly ArrivalAiAssgnMemberResvs: "ArrivalAIAssgnMemberResvs";
    readonly ArrivalAiAssgnOverridden: "ArrivalAIAssgnOverridden";
    readonly ArrivalAiAssgnResvs: "ArrivalAIAssgnResvs";
    readonly ArrivalAiAssgnVipResvs: "ArrivalAIAssgnVIPResvs";
    readonly ArrivalAiUpgResvs: "ArrivalAIUpgResvs";
    readonly ArrivalManualAssgnResvs: "ArrivalManualAssgnResvs";
    readonly ArrivalMemberResvs: "ArrivalMemberResvs";
    readonly ArrivalResvs: "ArrivalResvs";
    readonly ArrivalsActualPersons: "ArrivalsActualPersons";
    readonly ArrivalsActualRooms: "ArrivalsActualRooms";
    readonly ArrivalsActualVip: "ArrivalsActualVIP";
    readonly ArrivalsExpectedPersons: "ArrivalsExpectedPersons";
    readonly ArrivalsExpectedPersonsMadeToday: "ArrivalsExpectedPersonsMadeToday";
    readonly ArrivalsExpectedRooms: "ArrivalsExpectedRooms";
    readonly ArrivalsExpectedRoomsMadeToday: "ArrivalsExpectedRoomsMadeToday";
    readonly ArrivalsExpectedVip: "ArrivalsExpectedVIP";
    readonly ArrivalsExpectedVipMadeToday: "ArrivalsExpectedVIPMadeToday";
    readonly ArrivalsInLastHour: "ArrivalsInLastHour";
    readonly ArrivalsTotal: "ArrivalsTotal";
    readonly ArrivalUnallocResvs: "ArrivalUnallocResvs";
    readonly ArrivalVipResvs: "ArrivalVIPResvs";
    readonly AverageCheckInTime: "AverageCheckInTime";
    readonly AverageRoomRevenue: "AverageRoomRevenue";
    readonly BlockAdvanceCheckedInCurrent: "BlockAdvanceCheckedInCurrent";
    readonly BlockAdvanceCheckedInInhouse: "BlockAdvanceCheckedInInhouse";
    readonly BlockAdvanceCheckedInTotal: "BlockAdvanceCheckedInTotal";
    readonly BlocksNotPickedUp: "BlocksNotPickedUp";
    readonly CanceledOnArrivalPersons: "CanceledOnArrivalPersons";
    readonly CanceledOnArrivalRooms: "CanceledOnArrivalRooms";
    readonly CanceledOnArrivalVip: "CanceledOnArrivalVIP";
    readonly CancellationsTotal: "CancellationsTotal";
    readonly CheckedInsTotal: "CheckedInsTotal";
    readonly CheckedOutsTotal: "CheckedOutsTotal";
    readonly ChildrenDeparted: "ChildrenDeparted";
    readonly ChildrenExpectedCheckedOut: "ChildrenExpectedCheckedOut";
    readonly ChildrenInHouse: "ChildrenInHouse";
    readonly CleanAssigned: "CleanAssigned";
    readonly CleanedRooms: "CleanedRooms";
    readonly CleanOccupied: "CleanOccupied";
    readonly CleanVacant: "CleanVacant";
    readonly ComplimentaryArrivalPersons: "ComplimentaryArrivalPersons";
    readonly ComplimentaryArrivalRooms: "ComplimentaryArrivalRooms";
    readonly ComplimentaryArrivalVip: "ComplimentaryArrivalVIP";
    readonly ComplimentaryDeparturePersons: "ComplimentaryDeparturePersons";
    readonly ComplimentaryDepartureRooms: "ComplimentaryDepartureRooms";
    readonly ComplimentaryDepartureVip: "ComplimentaryDepartureVIP";
    readonly ComplimentaryStayoverPersons: "ComplimentaryStayoverPersons";
    readonly ComplimentaryStayoverRooms: "ComplimentaryStayoverRooms";
    readonly ComplimentaryStayoverVip: "ComplimentaryStayoverVIP";
    readonly CurrentAveWaitTime: "CurrentAveWaitTime";
    readonly DayUsePersons: "DayUsePersons";
    readonly DayUseRooms: "DayUseRooms";
    readonly DayUseVip: "DayUseVIP";
    readonly DeparturesActualPersons: "DeparturesActualPersons";
    readonly DeparturesActualRooms: "DeparturesActualRooms";
    readonly DeparturesActualVip: "DeparturesActualVIP";
    readonly DeparturesExpectedPersons: "DeparturesExpectedPersons";
    readonly DeparturesExpectedRooms: "DeparturesExpectedRooms";
    readonly DeparturesExpectedVip: "DeparturesExpectedVIP";
    readonly DeparturesInLastHour: "DeparturesInLastHour";
    readonly DeparturesTotal: "DeparturesTotal";
    readonly DirtyAssigned: "DirtyAssigned";
    readonly DirtyOccupied: "DirtyOccupied";
    readonly DirtyVacant: "DirtyVacant";
    readonly EarlyDeparturesPersons: "EarlyDeparturesPersons";
    readonly EarlyDeparturesRooms: "EarlyDeparturesRooms";
    readonly EarlyDeparturesVip: "EarlyDeparturesVIP";
    readonly ExpectedCheckInsTotal: "ExpectedCheckInsTotal";
    readonly ExpectedCheckOutsTotal: "ExpectedCheckOutsTotal";
    readonly ExtendedStaysPersons: "ExtendedStaysPersons";
    readonly ExtendedStaysRooms: "ExtendedStaysRooms";
    readonly ExtendedStaysVip: "ExtendedStaysVIP";
    readonly GroupAndBlockPersons: "GroupAndBlockPersons";
    readonly GroupAndBlockRooms: "GroupAndBlockRooms";
    readonly GroupAndBlockVip: "GroupAndBlockVIP";
    readonly HouseUseArrivalPersons: "HouseUseArrivalPersons";
    readonly HouseUseArrivalRooms: "HouseUseArrivalRooms";
    readonly HouseUseArrivalVip: "HouseUseArrivalVIP";
    readonly HouseUseDeparturePersons: "HouseUseDeparturePersons";
    readonly HouseUseDepartureRooms: "HouseUseDepartureRooms";
    readonly HouseUseDepartureVip: "HouseUseDepartureVIP";
    readonly HouseUseStayoverPersons: "HouseUseStayoverPersons";
    readonly HouseUseStayoverRooms: "HouseUseStayoverRooms";
    readonly HouseUseStayoverVip: "HouseUseStayoverVIP";
    readonly IndividualAdvanceCheckedInCurrent: "IndividualAdvanceCheckedInCurrent";
    readonly IndividualAdvanceCheckedInInhouse: "IndividualAdvanceCheckedInInhouse";
    readonly IndividualAdvanceCheckedInTotal: "IndividualAdvanceCheckedInTotal";
    readonly IndividualPersons: "IndividualPersons";
    readonly IndividualRooms: "IndividualRooms";
    readonly IndividualVip: "IndividualVIP";
    readonly InHouse: "InHouse";
    readonly InHouseBlocksTotal: "InHouseBlocksTotal";
    readonly InHouseRooms: "InHouseRooms";
    readonly InspectedAssigned: "InspectedAssigned";
    readonly InspectedOccupied: "InspectedOccupied";
    readonly InspectedRooms: "InspectedRooms";
    readonly InspectedVacant: "InspectedVacant";
    readonly MaxOccupancyPercentage: "MaxOccupancyPercentage";
    readonly MaxOccupiedTonightPersons: "MaxOccupiedTonightPersons";
    readonly MaxOccupiedTonightRooms: "MaxOccupiedTonightRooms";
    readonly MaxOccupiedTonightVip: "MaxOccupiedTonightVIP";
    readonly MaxPercentageOccupiedTonightRooms: "MaxPercentageOccupiedTonightRooms";
    readonly MinAvailableTonightRooms: "MinAvailableTonightRooms";
    readonly NewReservationsTotal: "NewReservationsTotal";
    readonly OpenFolioTotal: "OpenFolioTotal";
    readonly OutOfOrderAssigned: "OutOfOrderAssigned";
    readonly OutOfOrderOccupied: "OutOfOrderOccupied";
    readonly OutOfOrderVacant: "OutOfOrderVacant";
    readonly OutOfServiceAssigned: "OutOfServiceAssigned";
    readonly OutOfServiceOccupied: "OutOfServiceOccupied";
    readonly OutOfServiceVacant: "OutOfServiceVacant";
    readonly PercentRoomsOccupied: "PercentRoomsOccupied";
    readonly PickupAssigned: "PickupAssigned";
    readonly PickupOccupied: "PickupOccupied";
    readonly PickupVacant: "PickupVacant";
    readonly PreRegisteredTotal: "PreRegisteredTotal";
    readonly QueueRooms: "QueueRooms";
    readonly RevPar: "RevPar";
    readonly RoomMaintenanceResolvedTotal: "RoomMaintenanceResolvedTotal";
    readonly RoomMaintenanceUnResolvedTotal: "RoomMaintenanceUnResolvedTotal";
    readonly RoomRevenue: "RoomRevenue";
    readonly ScheduledCheckOutsTotal: "ScheduledCheckOutsTotal";
    readonly SkipRooms: "SkipRooms";
    readonly SleepRooms: "SleepRooms";
    readonly Stayover: "Stayover";
    readonly StayoverPersons: "StayoverPersons";
    readonly StayoverRooms: "StayoverRooms";
    readonly StayoverVip: "StayoverVIP";
    readonly TotalOutOfOrder: "TotalOutOfOrder";
    readonly TotalOutOfService: "TotalOutOfService";
    readonly TotalPhysicalRooms: "TotalPhysicalRooms";
    readonly TotalRevenue: "TotalRevenue";
    readonly TotalRoomsReserved: "TotalRoomsReserved";
    readonly TotalRoomsToSell: "TotalRoomsToSell";
    readonly TurndownCompletedRequired: "TurndownCompletedRequired";
    readonly TurndownNotRequired: "TurndownNotRequired";
    readonly TurndownRequired: "TurndownRequired";
    readonly TurndownTotal: "TurndownTotal";
    readonly VipGuestsArriving: "VIPGuestsArriving";
    readonly VipGuestsDeparting: "VIPGuestsDeparting";
    readonly VipGuestsTotal: "VIPGuestsTotal";
    readonly VipPreRegisteredTotal: "VIPPreRegisteredTotal";
    readonly VipTurndownTotal: "VIPTurndownTotal";
    readonly WalkInPersons: "WalkInPersons";
    readonly WalkInRooms: "WalkInRooms";
    readonly ApprovedCompPostings: "ApprovedCompPostings";
    readonly StagedCompPostings: "StagedCompPostings";
    readonly DeclinedCompPostings: "DeclinedCompPostings";
    readonly CompRoutingInstructionsRequests: "CompRoutingInstructionsRequests";
    readonly WalkInVip: "WalkInVIP";
};
export type GetFrontOfficeStatisticsMetricEnum = typeof GetFrontOfficeStatisticsMetricEnum[keyof typeof GetFrontOfficeStatisticsMetricEnum];
/**
 * @export
 */
export declare const GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum: {
    readonly ReservationActivityDaily: "ReservationActivityDaily";
};
export type GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum = typeof GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum[keyof typeof GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum];
/**
 * @export
 */
export declare const GetFrontOfficeStatisticsWithDateRangeMetricEnum: {
    readonly AdultsDeparted: "AdultsDeparted";
    readonly AdultsExpectedCheckedOut: "AdultsExpectedCheckedOut";
    readonly AdultsInHouse: "AdultsInHouse";
    readonly ArrivalAiAssgnMemberResvs: "ArrivalAIAssgnMemberResvs";
    readonly ArrivalAiAssgnOverridden: "ArrivalAIAssgnOverridden";
    readonly ArrivalAiAssgnResvs: "ArrivalAIAssgnResvs";
    readonly ArrivalAiAssgnVipResvs: "ArrivalAIAssgnVIPResvs";
    readonly ArrivalAiUpgResvs: "ArrivalAIUpgResvs";
    readonly ArrivalManualAssgnResvs: "ArrivalManualAssgnResvs";
    readonly ArrivalMemberResvs: "ArrivalMemberResvs";
    readonly ArrivalResvs: "ArrivalResvs";
    readonly ArrivalsActualPersons: "ArrivalsActualPersons";
    readonly ArrivalsActualRooms: "ArrivalsActualRooms";
    readonly ArrivalsActualVip: "ArrivalsActualVIP";
    readonly ArrivalsExpectedPersons: "ArrivalsExpectedPersons";
    readonly ArrivalsExpectedPersonsMadeToday: "ArrivalsExpectedPersonsMadeToday";
    readonly ArrivalsExpectedRooms: "ArrivalsExpectedRooms";
    readonly ArrivalsExpectedRoomsMadeToday: "ArrivalsExpectedRoomsMadeToday";
    readonly ArrivalsExpectedVip: "ArrivalsExpectedVIP";
    readonly ArrivalsExpectedVipMadeToday: "ArrivalsExpectedVIPMadeToday";
    readonly ArrivalsInLastHour: "ArrivalsInLastHour";
    readonly ArrivalsTotal: "ArrivalsTotal";
    readonly ArrivalUnallocResvs: "ArrivalUnallocResvs";
    readonly ArrivalVipResvs: "ArrivalVIPResvs";
    readonly AverageCheckInTime: "AverageCheckInTime";
    readonly AverageRoomRevenue: "AverageRoomRevenue";
    readonly BlockAdvanceCheckedInCurrent: "BlockAdvanceCheckedInCurrent";
    readonly BlockAdvanceCheckedInInhouse: "BlockAdvanceCheckedInInhouse";
    readonly BlockAdvanceCheckedInTotal: "BlockAdvanceCheckedInTotal";
    readonly BlocksNotPickedUp: "BlocksNotPickedUp";
    readonly CanceledOnArrivalPersons: "CanceledOnArrivalPersons";
    readonly CanceledOnArrivalRooms: "CanceledOnArrivalRooms";
    readonly CanceledOnArrivalVip: "CanceledOnArrivalVIP";
    readonly CancellationsTotal: "CancellationsTotal";
    readonly CheckedInsTotal: "CheckedInsTotal";
    readonly CheckedOutsTotal: "CheckedOutsTotal";
    readonly ChildrenDeparted: "ChildrenDeparted";
    readonly ChildrenExpectedCheckedOut: "ChildrenExpectedCheckedOut";
    readonly ChildrenInHouse: "ChildrenInHouse";
    readonly CleanAssigned: "CleanAssigned";
    readonly CleanedRooms: "CleanedRooms";
    readonly CleanOccupied: "CleanOccupied";
    readonly CleanVacant: "CleanVacant";
    readonly ComplimentaryArrivalPersons: "ComplimentaryArrivalPersons";
    readonly ComplimentaryArrivalRooms: "ComplimentaryArrivalRooms";
    readonly ComplimentaryArrivalVip: "ComplimentaryArrivalVIP";
    readonly ComplimentaryDeparturePersons: "ComplimentaryDeparturePersons";
    readonly ComplimentaryDepartureRooms: "ComplimentaryDepartureRooms";
    readonly ComplimentaryDepartureVip: "ComplimentaryDepartureVIP";
    readonly ComplimentaryStayoverPersons: "ComplimentaryStayoverPersons";
    readonly ComplimentaryStayoverRooms: "ComplimentaryStayoverRooms";
    readonly ComplimentaryStayoverVip: "ComplimentaryStayoverVIP";
    readonly CurrentAveWaitTime: "CurrentAveWaitTime";
    readonly DayUsePersons: "DayUsePersons";
    readonly DayUseRooms: "DayUseRooms";
    readonly DayUseVip: "DayUseVIP";
    readonly DeparturesActualPersons: "DeparturesActualPersons";
    readonly DeparturesActualRooms: "DeparturesActualRooms";
    readonly DeparturesActualVip: "DeparturesActualVIP";
    readonly DeparturesExpectedPersons: "DeparturesExpectedPersons";
    readonly DeparturesExpectedRooms: "DeparturesExpectedRooms";
    readonly DeparturesExpectedVip: "DeparturesExpectedVIP";
    readonly DeparturesInLastHour: "DeparturesInLastHour";
    readonly DeparturesTotal: "DeparturesTotal";
    readonly DirtyAssigned: "DirtyAssigned";
    readonly DirtyOccupied: "DirtyOccupied";
    readonly DirtyVacant: "DirtyVacant";
    readonly EarlyDeparturesPersons: "EarlyDeparturesPersons";
    readonly EarlyDeparturesRooms: "EarlyDeparturesRooms";
    readonly EarlyDeparturesVip: "EarlyDeparturesVIP";
    readonly ExpectedCheckInsTotal: "ExpectedCheckInsTotal";
    readonly ExpectedCheckOutsTotal: "ExpectedCheckOutsTotal";
    readonly ExtendedStaysPersons: "ExtendedStaysPersons";
    readonly ExtendedStaysRooms: "ExtendedStaysRooms";
    readonly ExtendedStaysVip: "ExtendedStaysVIP";
    readonly GroupAndBlockPersons: "GroupAndBlockPersons";
    readonly GroupAndBlockRooms: "GroupAndBlockRooms";
    readonly GroupAndBlockVip: "GroupAndBlockVIP";
    readonly HouseUseArrivalPersons: "HouseUseArrivalPersons";
    readonly HouseUseArrivalRooms: "HouseUseArrivalRooms";
    readonly HouseUseArrivalVip: "HouseUseArrivalVIP";
    readonly HouseUseDeparturePersons: "HouseUseDeparturePersons";
    readonly HouseUseDepartureRooms: "HouseUseDepartureRooms";
    readonly HouseUseDepartureVip: "HouseUseDepartureVIP";
    readonly HouseUseStayoverPersons: "HouseUseStayoverPersons";
    readonly HouseUseStayoverRooms: "HouseUseStayoverRooms";
    readonly HouseUseStayoverVip: "HouseUseStayoverVIP";
    readonly IndividualAdvanceCheckedInCurrent: "IndividualAdvanceCheckedInCurrent";
    readonly IndividualAdvanceCheckedInInhouse: "IndividualAdvanceCheckedInInhouse";
    readonly IndividualAdvanceCheckedInTotal: "IndividualAdvanceCheckedInTotal";
    readonly IndividualPersons: "IndividualPersons";
    readonly IndividualRooms: "IndividualRooms";
    readonly IndividualVip: "IndividualVIP";
    readonly InHouse: "InHouse";
    readonly InHouseBlocksTotal: "InHouseBlocksTotal";
    readonly InHouseRooms: "InHouseRooms";
    readonly InspectedAssigned: "InspectedAssigned";
    readonly InspectedOccupied: "InspectedOccupied";
    readonly InspectedRooms: "InspectedRooms";
    readonly InspectedVacant: "InspectedVacant";
    readonly MaxOccupancyPercentage: "MaxOccupancyPercentage";
    readonly MaxOccupiedTonightPersons: "MaxOccupiedTonightPersons";
    readonly MaxOccupiedTonightRooms: "MaxOccupiedTonightRooms";
    readonly MaxOccupiedTonightVip: "MaxOccupiedTonightVIP";
    readonly MaxPercentageOccupiedTonightRooms: "MaxPercentageOccupiedTonightRooms";
    readonly MinAvailableTonightRooms: "MinAvailableTonightRooms";
    readonly NewReservationsTotal: "NewReservationsTotal";
    readonly OpenFolioTotal: "OpenFolioTotal";
    readonly OutOfOrderAssigned: "OutOfOrderAssigned";
    readonly OutOfOrderOccupied: "OutOfOrderOccupied";
    readonly OutOfOrderVacant: "OutOfOrderVacant";
    readonly OutOfServiceAssigned: "OutOfServiceAssigned";
    readonly OutOfServiceOccupied: "OutOfServiceOccupied";
    readonly OutOfServiceVacant: "OutOfServiceVacant";
    readonly PercentRoomsOccupied: "PercentRoomsOccupied";
    readonly PickupAssigned: "PickupAssigned";
    readonly PickupOccupied: "PickupOccupied";
    readonly PickupVacant: "PickupVacant";
    readonly PreRegisteredTotal: "PreRegisteredTotal";
    readonly QueueRooms: "QueueRooms";
    readonly RevPar: "RevPar";
    readonly RoomMaintenanceResolvedTotal: "RoomMaintenanceResolvedTotal";
    readonly RoomMaintenanceUnResolvedTotal: "RoomMaintenanceUnResolvedTotal";
    readonly RoomRevenue: "RoomRevenue";
    readonly ScheduledCheckOutsTotal: "ScheduledCheckOutsTotal";
    readonly SkipRooms: "SkipRooms";
    readonly SleepRooms: "SleepRooms";
    readonly Stayover: "Stayover";
    readonly StayoverPersons: "StayoverPersons";
    readonly StayoverRooms: "StayoverRooms";
    readonly StayoverVip: "StayoverVIP";
    readonly TotalOutOfOrder: "TotalOutOfOrder";
    readonly TotalOutOfService: "TotalOutOfService";
    readonly TotalPhysicalRooms: "TotalPhysicalRooms";
    readonly TotalRevenue: "TotalRevenue";
    readonly TotalRoomsReserved: "TotalRoomsReserved";
    readonly TotalRoomsToSell: "TotalRoomsToSell";
    readonly TurndownCompletedRequired: "TurndownCompletedRequired";
    readonly TurndownNotRequired: "TurndownNotRequired";
    readonly TurndownRequired: "TurndownRequired";
    readonly TurndownTotal: "TurndownTotal";
    readonly VipGuestsArriving: "VIPGuestsArriving";
    readonly VipGuestsDeparting: "VIPGuestsDeparting";
    readonly VipGuestsTotal: "VIPGuestsTotal";
    readonly VipPreRegisteredTotal: "VIPPreRegisteredTotal";
    readonly VipTurndownTotal: "VIPTurndownTotal";
    readonly WalkInPersons: "WalkInPersons";
    readonly WalkInRooms: "WalkInRooms";
    readonly ApprovedCompPostings: "ApprovedCompPostings";
    readonly StagedCompPostings: "StagedCompPostings";
    readonly DeclinedCompPostings: "DeclinedCompPostings";
    readonly CompRoutingInstructionsRequests: "CompRoutingInstructionsRequests";
    readonly WalkInVip: "WalkInVIP";
};
export type GetFrontOfficeStatisticsWithDateRangeMetricEnum = typeof GetFrontOfficeStatisticsWithDateRangeMetricEnum[keyof typeof GetFrontOfficeStatisticsWithDateRangeMetricEnum];
/**
 * @export
 */
export declare const GetReservationStatusStatisticsReservationStatusEnum: {
    readonly DueIn: "DueIn";
    readonly DueOut: "DueOut";
    readonly CheckedIn: "CheckedIn";
    readonly CheckedOut: "CheckedOut";
};
export type GetReservationStatusStatisticsReservationStatusEnum = typeof GetReservationStatusStatisticsReservationStatusEnum[keyof typeof GetReservationStatusStatisticsReservationStatusEnum];
/**
 * @export
 */
export declare const GetRoomsByRoomStatusFrontOfficeStatusEnum: {
    readonly Vacant: "Vacant";
    readonly Occupied: "Occupied";
};
export type GetRoomsByRoomStatusFrontOfficeStatusEnum = typeof GetRoomsByRoomStatusFrontOfficeStatusEnum[keyof typeof GetRoomsByRoomStatusFrontOfficeStatusEnum];
