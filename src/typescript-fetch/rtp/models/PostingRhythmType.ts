/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for posting Rhythm types.
 * @export
 */
export const PostingRhythmType = {
    EveryNight: 'EveryNight',
    ArrivalNight: 'ArrivalNight',
    EveryXNightsStartingNightY: 'EveryXNightsStartingNightY',
    CertainNightsOfTheWeek: 'CertainNightsOfTheWeek',
    LastNight: 'LastNight',
    EveryNightExceptArrivalNight: 'EveryNightExceptArrivalNight',
    EveryNightExceptLast: 'EveryNightExceptLast',
    EveryNightExceptFirstAndLast: 'EveryNightExceptFirstAndLast',
    CustomStaySchedule: 'CustomStaySchedule',
    CustomNightSchedule: 'CustomNightSchedule',
    FloatingAllowancePerStay: 'FloatingAllowancePerStay',
    TicketPosting: 'TicketPosting'
} as const;
export type PostingRhythmType = typeof PostingRhythmType[keyof typeof PostingRhythmType];


export function PostingRhythmTypeFromJSON(json: any): PostingRhythmType {
    return PostingRhythmTypeFromJSONTyped(json, false);
}

export function PostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingRhythmType {
    return json as PostingRhythmType;
}

export function PostingRhythmTypeToJSON(value?: PostingRhythmType | null): any {
    return value as any;
}
