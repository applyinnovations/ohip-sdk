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
/**
 * Simple type for posting Rhythm types.
 * @export
 */
export declare const PostingRhythmType: {
    readonly EveryNight: "EveryNight";
    readonly ArrivalNight: "ArrivalNight";
    readonly EveryXNightsStartingNightY: "EveryXNightsStartingNightY";
    readonly CertainNightsOfTheWeek: "CertainNightsOfTheWeek";
    readonly LastNight: "LastNight";
    readonly EveryNightExceptArrivalNight: "EveryNightExceptArrivalNight";
    readonly EveryNightExceptLast: "EveryNightExceptLast";
    readonly EveryNightExceptFirstAndLast: "EveryNightExceptFirstAndLast";
    readonly CustomStaySchedule: "CustomStaySchedule";
    readonly CustomNightSchedule: "CustomNightSchedule";
    readonly FloatingAllowancePerStay: "FloatingAllowancePerStay";
    readonly TicketPosting: "TicketPosting";
};
export type PostingRhythmType = typeof PostingRhythmType[keyof typeof PostingRhythmType];
export declare function PostingRhythmTypeFromJSON(json: any): PostingRhythmType;
export declare function PostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingRhythmType;
export declare function PostingRhythmTypeToJSON(value?: PostingRhythmType | null): any;
