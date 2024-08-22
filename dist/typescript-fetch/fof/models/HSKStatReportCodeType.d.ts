/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Supported Housekeeping report codes.
 * @export
 */
export declare const HSKStatReportCodeType: {
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
export type HSKStatReportCodeType = typeof HSKStatReportCodeType[keyof typeof HSKStatReportCodeType];
export declare function HSKStatReportCodeTypeFromJSON(json: any): HSKStatReportCodeType;
export declare function HSKStatReportCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatReportCodeType;
export declare function HSKStatReportCodeTypeToJSON(value?: HSKStatReportCodeType | null): any;
