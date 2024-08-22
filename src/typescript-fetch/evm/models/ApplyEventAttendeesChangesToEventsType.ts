/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Non-Pkg Events on the same date.
 * @export
 */
export const ApplyEventAttendeesChangesToEventsType = {
    All: 'All',
    None: 'None',
    Same: 'Same',
    NonPackage: 'NonPackage',
    MatchingNonPackage: 'MatchingNonPackage',
    Package: 'Package',
    Date: 'Date'
} as const;
export type ApplyEventAttendeesChangesToEventsType = typeof ApplyEventAttendeesChangesToEventsType[keyof typeof ApplyEventAttendeesChangesToEventsType];


export function ApplyEventAttendeesChangesToEventsTypeFromJSON(json: any): ApplyEventAttendeesChangesToEventsType {
    return ApplyEventAttendeesChangesToEventsTypeFromJSONTyped(json, false);
}

export function ApplyEventAttendeesChangesToEventsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyEventAttendeesChangesToEventsType {
    return json as ApplyEventAttendeesChangesToEventsType;
}

export function ApplyEventAttendeesChangesToEventsTypeToJSON(value?: ApplyEventAttendeesChangesToEventsType | null): any {
    return value as any;
}

