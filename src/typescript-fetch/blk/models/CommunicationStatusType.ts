/* tslint:disable */
/* eslint-disable */
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
 * Enum to denote the Status of Readiness messages sent to Guest Devices.
 * @export
 */
export const CommunicationStatusType = {
    Pending: 'Pending',
    Completed: 'Completed',
    Failed: 'Failed',
    Sent: 'Sent',
    Received: 'Received',
    Cancelled: 'Cancelled',
    PendingAvailability: 'PendingAvailability'
} as const;
export type CommunicationStatusType = typeof CommunicationStatusType[keyof typeof CommunicationStatusType];


export function CommunicationStatusTypeFromJSON(json: any): CommunicationStatusType {
    return CommunicationStatusTypeFromJSONTyped(json, false);
}

export function CommunicationStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationStatusType {
    return json as CommunicationStatusType;
}

export function CommunicationStatusTypeToJSON(value?: CommunicationStatusType | null): any {
    return value as any;
}

