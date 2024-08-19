/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { BlockStats } from '../models/index';
export interface GetBlockStatsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    reportCode?: Set<GetBlockStatsReportCodeEnum>;
    reportEndDate?: Array<string>;
    reportStartDate?: Array<string>;
    statisticalCode?: Set<GetBlockStatsStatisticalCodeEnum>;
    reportParametersParameterName?: Array<string>;
    reportParametersParameterValue?: Array<string>;
    blockOwnersCode?: Set<GetBlockStatsBlockOwnersCodeEnum>;
    blockStatusCode?: Set<GetBlockStatsBlockStatusCodeEnum>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class BlockStatsApi extends runtime.BaseAPI {
    /**
     * This API retrieves block statistics. <p><strong>OperationId:</strong>getBlockStats</p>
     * Get Block statistics
     */
    getBlockStatsRaw(requestParameters: GetBlockStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockStats>>;
    /**
     * This API retrieves block statistics. <p><strong>OperationId:</strong>getBlockStats</p>
     * Get Block statistics
     */
    getBlockStats(requestParameters: GetBlockStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockStats>;
}
/**
 * @export
 */
export declare const GetBlockStatsReportCodeEnum: {
    readonly HouseSummary: "HouseSummary";
    readonly HouseSummaryMonthToDate: "HouseSummaryMonthToDate";
    readonly HouseSummaryYearToDate: "HouseSummaryYearToDate";
    readonly ReservationActivity: "ReservationActivity";
    readonly ReservationActivityDaily: "ReservationActivityDaily";
    readonly ReservationActivityMonthToDate: "ReservationActivityMonthToDate";
    readonly ReservationActivityYearToDate: "ReservationActivityYearToDate";
    readonly ComplimentaryOrHouseUse: "ComplimentaryOrHouseUse";
    readonly DailyProjection: "DailyProjection";
    readonly RoomStatus: "RoomStatus";
    readonly LastHourStatus: "LastHourStatus";
    readonly Turndown: "Turndown";
    readonly InHouse: "InHouse";
    readonly CheckIns: "CheckIns";
    readonly CheckOuts: "CheckOuts";
    readonly AvailableRooms: "AvailableRooms";
    readonly RoomMaintenance: "RoomMaintenance";
    readonly ReservationStatistics: "ReservationStatistics";
    readonly VipGuests: "VIPGuests";
    readonly AdvanceCheckIn: "AdvanceCheckIn";
    readonly BlockArrivals: "BlockArrivals";
    readonly ReservationsCancellationsToday: "ReservationsCancellationsToday";
    readonly AiRoomAssignment: "AIRoomAssignment";
    readonly CompRouting: "CompRouting";
};
export type GetBlockStatsReportCodeEnum = typeof GetBlockStatsReportCodeEnum[keyof typeof GetBlockStatsReportCodeEnum];
/**
 * @export
 */
export declare const GetBlockStatsStatisticalCodeEnum: {
    readonly ApprovedCompPostings: "ApprovedCompPostings";
    readonly StagedCompPostings: "StagedCompPostings";
    readonly DeclinedCompPostings: "DeclinedCompPostings";
    readonly CompRoutingInstructionsRequests: "CompRoutingInstructionsRequests";
    readonly TotalPhysicalRooms: "TotalPhysicalRooms";
    readonly TotalRoomsToSell: "TotalRoomsToSell";
    readonly TotalOutOfOrder: "TotalOutOfOrder";
    readonly TotalOutOfService: "TotalOutOfService";
    readonly TotalRevenue: "TotalRevenue";
    readonly PercentRoomsOccupied: "PercentRoomsOccupied";
    readonly StayoverRooms: "StayoverRooms";
    readonly StayoverPersons: "StayoverPersons";
    readonly StayoverVip: "StayoverVIP";
    readonly DeparturesExpectedRooms: "DeparturesExpectedRooms";
    readonly DeparturesExpectedPersons: "DeparturesExpectedPersons";
    readonly DeparturesExpectedVip: "DeparturesExpectedVIP";
    readonly DeparturesActualRooms: "DeparturesActualRooms";
    readonly DeparturesActualPersons: "DeparturesActualPersons";
    readonly DeparturesActualVip: "DeparturesActualVIP";
    readonly DeparturesInLastHour: "DeparturesInLastHour";
    readonly ArrivalsInLastHour: "ArrivalsInLastHour";
    readonly ArrivalsTotal: "ArrivalsTotal";
    readonly ArrivalsExpectedRooms: "ArrivalsExpectedRooms";
    readonly ArrivalsExpectedPersons: "ArrivalsExpectedPersons";
    readonly ArrivalsExpectedVip: "ArrivalsExpectedVIP";
    readonly ArrivalsExpectedRoomsMadeToday: "ArrivalsExpectedRoomsMadeToday";
    readonly ArrivalsExpectedPersonsMadeToday: "ArrivalsExpectedPersonsMadeToday";
    readonly ArrivalsExpectedVipMadeToday: "ArrivalsExpectedVIPMadeToday";
    readonly ArrivalsActualRooms: "ArrivalsActualRooms";
    readonly ArrivalsActualPersons: "ArrivalsActualPersons";
    readonly ArrivalsActualVip: "ArrivalsActualVIP";
    readonly ExtendedStaysRooms: "ExtendedStaysRooms";
    readonly ExtendedStaysPersons: "ExtendedStaysPersons";
    readonly ExtendedStaysVip: "ExtendedStaysVIP";
    readonly DeparturesTotal: "DeparturesTotal";
    readonly EarlyDeparturesRooms: "EarlyDeparturesRooms";
    readonly EarlyDeparturesPersons: "EarlyDeparturesPersons";
    readonly EarlyDeparturesVip: "EarlyDeparturesVIP";
    readonly DayUseRooms: "DayUseRooms";
    readonly DayUsePersons: "DayUsePersons";
    readonly DayUseVip: "DayUseVIP";
    readonly WalkInRooms: "WalkInRooms";
    readonly WalkInPersons: "WalkInPersons";
    readonly WalkInVip: "WalkInVIP";
    readonly CanceledOnArrivalRooms: "CanceledOnArrivalRooms";
    readonly CanceledOnArrivalPersons: "CanceledOnArrivalPersons";
    readonly CanceledOnArrivalVip: "CanceledOnArrivalVIP";
    readonly ComplimentaryArrivalRooms: "ComplimentaryArrivalRooms";
    readonly ComplimentaryArrivalPersons: "ComplimentaryArrivalPersons";
    readonly ComplimentaryArrivalVip: "ComplimentaryArrivalVIP";
    readonly ComplimentaryStayoverRooms: "ComplimentaryStayoverRooms";
    readonly ComplimentaryStayoverPersons: "ComplimentaryStayoverPersons";
    readonly ComplimentaryStayoverVip: "ComplimentaryStayoverVIP";
    readonly ComplimentaryDepartureRooms: "ComplimentaryDepartureRooms";
    readonly ComplimentaryDeparturePersons: "ComplimentaryDeparturePersons";
    readonly ComplimentaryDepartureVip: "ComplimentaryDepartureVIP";
    readonly HouseUseArrivalVip: "HouseUseArrivalVIP";
    readonly HouseUseStayoverRooms: "HouseUseStayoverRooms";
    readonly HouseUseStayoverPersons: "HouseUseStayoverPersons";
    readonly HouseUseStayoverVip: "HouseUseStayoverVIP";
    readonly HouseUseDepartureRooms: "HouseUseDepartureRooms";
    readonly HouseUseDeparturePersons: "HouseUseDeparturePersons";
    readonly HouseUseDepartureVip: "HouseUseDepartureVIP";
    readonly MinAvailableTonightRooms: "MinAvailableTonightRooms";
    readonly MaxOccupiedTonightRooms: "MaxOccupiedTonightRooms";
    readonly MaxOccupiedTonightPersons: "MaxOccupiedTonightPersons";
    readonly MaxOccupiedTonightVip: "MaxOccupiedTonightVIP";
    readonly MaxPercentageOccupiedTonightRooms: "MaxPercentageOccupiedTonightRooms";
    readonly BlocksNotPickedUp: "BlocksNotPickedUp";
    readonly IndividualRooms: "IndividualRooms";
    readonly IndividualPersons: "IndividualPersons";
    readonly IndividualVip: "IndividualVIP";
    readonly GroupAndBlockRooms: "GroupAndBlockRooms";
    readonly GroupAndBlockPersons: "GroupAndBlockPersons";
    readonly GroupAndBlockVip: "GroupAndBlockVIP";
    readonly RoomRevenue: "RoomRevenue";
    readonly AverageRoomRevenue: "AverageRoomRevenue";
    readonly InspectedRooms: "InspectedRooms";
    readonly InspectedVacant: "InspectedVacant";
    readonly InspectedAssigned: "InspectedAssigned";
    readonly InspectedOccupied: "InspectedOccupied";
    readonly CleanedRooms: "CleanedRooms";
    readonly CleanVacant: "CleanVacant";
    readonly CleanAssigned: "CleanAssigned";
    readonly CleanOccupied: "CleanOccupied";
    readonly DirtyVacant: "DirtyVacant";
    readonly DirtyAssigned: "DirtyAssigned";
    readonly DirtyOccupied: "DirtyOccupied";
    readonly PickupVacant: "PickupVacant";
    readonly PickupAssigned: "PickupAssigned";
    readonly PickupOccupied: "PickupOccupied";
    readonly OutOfOrderVacant: "OutOfOrderVacant";
    readonly OutOfOrderAssigned: "OutOfOrderAssigned";
    readonly OutOfOrderOccupied: "OutOfOrderOccupied";
    readonly OutOfServiceVacant: "OutOfServiceVacant";
    readonly OutOfServiceAssigned: "OutOfServiceAssigned";
    readonly OutOfServiceOccupied: "OutOfServiceOccupied";
    readonly QueueRooms: "QueueRooms";
    readonly TurndownRequired: "TurndownRequired";
    readonly TurndownNotRequired: "TurndownNotRequired";
    readonly TurndownCompletedRequired: "TurndownCompletedRequired";
    readonly AdultsInHouse: "AdultsInHouse";
    readonly ChildrenInHouse: "ChildrenInHouse";
    readonly AdultsExpectedCheckedOut: "AdultsExpectedCheckedOut";
    readonly ChildrenExpectedCheckedOut: "ChildrenExpectedCheckedOut";
    readonly AdultsDeparted: "AdultsDeparted";
    readonly ChildrenDeparted: "ChildrenDeparted";
    readonly InHouseRooms: "InHouseRooms";
    readonly InHouse: "InHouse";
    readonly MaxOccupancyPercentage: "MaxOccupancyPercentage";
    readonly Stayover: "Stayover";
    readonly TotalRoomsReserved: "TotalRoomsReserved";
    readonly RevPar: "RevPar";
    readonly SkipRooms: "SkipRooms";
    readonly SleepRooms: "SleepRooms";
    readonly HouseUseArrivalRooms: "HouseUseArrivalRooms";
    readonly HouseUseArrivalPersons: "HouseUseArrivalPersons";
    readonly AverageCheckInTime: "AverageCheckInTime";
    readonly CurrentAveWaitTime: "CurrentAveWaitTime";
    readonly CheckedInsTotal: "CheckedInsTotal";
    readonly ExpectedCheckInsTotal: "ExpectedCheckInsTotal";
    readonly CheckedOutsTotal: "CheckedOutsTotal";
    readonly ExpectedCheckOutsTotal: "ExpectedCheckOutsTotal";
    readonly ScheduledCheckOutsTotal: "ScheduledCheckOutsTotal";
    readonly RoomMaintenanceResolvedTotal: "RoomMaintenanceResolvedTotal";
    readonly RoomMaintenanceUnResolvedTotal: "RoomMaintenanceUnResolvedTotal";
    readonly PreRegisteredTotal: "PreRegisteredTotal";
    readonly VipPreRegisteredTotal: "VIPPreRegisteredTotal";
    readonly OpenFolioTotal: "OpenFolioTotal";
    readonly TurndownTotal: "TurndownTotal";
    readonly VipTurndownTotal: "VIPTurndownTotal";
    readonly VipGuestsArriving: "VIPGuestsArriving";
    readonly VipGuestsDeparting: "VIPGuestsDeparting";
    readonly VipGuestsTotal: "VIPGuestsTotal";
    readonly IndividualAdvanceCheckedInCurrent: "IndividualAdvanceCheckedInCurrent";
    readonly BlockAdvanceCheckedInCurrent: "BlockAdvanceCheckedInCurrent";
    readonly IndividualAdvanceCheckedInInhouse: "IndividualAdvanceCheckedInInhouse";
    readonly BlockAdvanceCheckedInInhouse: "BlockAdvanceCheckedInInhouse";
    readonly IndividualAdvanceCheckedInTotal: "IndividualAdvanceCheckedInTotal";
    readonly BlockAdvanceCheckedInTotal: "BlockAdvanceCheckedInTotal";
    readonly InHouseBlocksTotal: "InHouseBlocksTotal";
    readonly CancellationsTotal: "CancellationsTotal";
    readonly NewReservationsTotal: "NewReservationsTotal";
    readonly ArrivalResvs: "ArrivalResvs";
    readonly ArrivalVipResvs: "ArrivalVIPResvs";
    readonly ArrivalMemberResvs: "ArrivalMemberResvs";
    readonly ArrivalUnallocResvs: "ArrivalUnallocResvs";
    readonly ArrivalManualAssgnResvs: "ArrivalManualAssgnResvs";
    readonly ArrivalAiAssgnResvs: "ArrivalAIAssgnResvs";
    readonly ArrivalAiUpgResvs: "ArrivalAIUpgResvs";
    readonly ArrivalAiAssgnVipResvs: "ArrivalAIAssgnVIPResvs";
    readonly ArrivalAiAssgnMemberResvs: "ArrivalAIAssgnMemberResvs";
    readonly ArrivalAiAssgnOverridden: "ArrivalAIAssgnOverridden";
};
export type GetBlockStatsStatisticalCodeEnum = typeof GetBlockStatsStatisticalCodeEnum[keyof typeof GetBlockStatsStatisticalCodeEnum];
/**
 * @export
 */
export declare const GetBlockStatsBlockOwnersCodeEnum: {
    readonly HouseSummary: "HouseSummary";
    readonly HouseSummaryMonthToDate: "HouseSummaryMonthToDate";
    readonly HouseSummaryYearToDate: "HouseSummaryYearToDate";
    readonly ReservationActivity: "ReservationActivity";
    readonly ReservationActivityDaily: "ReservationActivityDaily";
    readonly ReservationActivityMonthToDate: "ReservationActivityMonthToDate";
    readonly ReservationActivityYearToDate: "ReservationActivityYearToDate";
    readonly ComplimentaryOrHouseUse: "ComplimentaryOrHouseUse";
    readonly DailyProjection: "DailyProjection";
    readonly RoomStatus: "RoomStatus";
    readonly LastHourStatus: "LastHourStatus";
    readonly Turndown: "Turndown";
    readonly InHouse: "InHouse";
    readonly CheckIns: "CheckIns";
    readonly CheckOuts: "CheckOuts";
    readonly AvailableRooms: "AvailableRooms";
    readonly RoomMaintenance: "RoomMaintenance";
    readonly ReservationStatistics: "ReservationStatistics";
    readonly VipGuests: "VIPGuests";
    readonly AdvanceCheckIn: "AdvanceCheckIn";
    readonly BlockArrivals: "BlockArrivals";
    readonly ReservationsCancellationsToday: "ReservationsCancellationsToday";
    readonly AiRoomAssignment: "AIRoomAssignment";
    readonly CompRouting: "CompRouting";
};
export type GetBlockStatsBlockOwnersCodeEnum = typeof GetBlockStatsBlockOwnersCodeEnum[keyof typeof GetBlockStatsBlockOwnersCodeEnum];
/**
 * @export
 */
export declare const GetBlockStatsBlockStatusCodeEnum: {
    readonly HouseSummary: "HouseSummary";
    readonly HouseSummaryMonthToDate: "HouseSummaryMonthToDate";
    readonly HouseSummaryYearToDate: "HouseSummaryYearToDate";
    readonly ReservationActivity: "ReservationActivity";
    readonly ReservationActivityDaily: "ReservationActivityDaily";
    readonly ReservationActivityMonthToDate: "ReservationActivityMonthToDate";
    readonly ReservationActivityYearToDate: "ReservationActivityYearToDate";
    readonly ComplimentaryOrHouseUse: "ComplimentaryOrHouseUse";
    readonly DailyProjection: "DailyProjection";
    readonly RoomStatus: "RoomStatus";
    readonly LastHourStatus: "LastHourStatus";
    readonly Turndown: "Turndown";
    readonly InHouse: "InHouse";
    readonly CheckIns: "CheckIns";
    readonly CheckOuts: "CheckOuts";
    readonly AvailableRooms: "AvailableRooms";
    readonly RoomMaintenance: "RoomMaintenance";
    readonly ReservationStatistics: "ReservationStatistics";
    readonly VipGuests: "VIPGuests";
    readonly AdvanceCheckIn: "AdvanceCheckIn";
    readonly BlockArrivals: "BlockArrivals";
    readonly ReservationsCancellationsToday: "ReservationsCancellationsToday";
    readonly AiRoomAssignment: "AIRoomAssignment";
    readonly CompRouting: "CompRouting";
};
export type GetBlockStatsBlockStatusCodeEnum = typeof GetBlockStatsBlockStatusCodeEnum[keyof typeof GetBlockStatsBlockStatusCodeEnum];
