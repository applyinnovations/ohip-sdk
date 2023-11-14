/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelMarketingInfoType } from './ChannelMarketingInfoType';
import {
    ChannelMarketingInfoTypeFromJSON,
    ChannelMarketingInfoTypeFromJSONTyped,
    ChannelMarketingInfoTypeToJSON,
} from './ChannelMarketingInfoType';
import type { ChannelResvStatusType } from './ChannelResvStatusType';
import {
    ChannelResvStatusTypeFromJSON,
    ChannelResvStatusTypeFromJSONTyped,
    ChannelResvStatusTypeToJSON,
} from './ChannelResvStatusType';
import type { ChannelSummaryInfoType } from './ChannelSummaryInfoType';
import {
    ChannelSummaryInfoTypeFromJSON,
    ChannelSummaryInfoTypeFromJSONTyped,
    ChannelSummaryInfoTypeToJSON,
} from './ChannelSummaryInfoType';

/**
 * Holds all the channel reservation specific information.
 * @export
 * @interface ChannelResvRSInfoType
 */
export interface ChannelResvRSInfoType {
    /**
     * 
     * @type {ChannelMarketingInfoType}
     * @memberof ChannelResvRSInfoType
     */
    channelMarketingInfo?: ChannelMarketingInfoType;
    /**
     * 
     * @type {ChannelResvStatusType}
     * @memberof ChannelResvRSInfoType
     */
    channelResvStatus?: ChannelResvStatusType;
    /**
     * 
     * @type {ChannelSummaryInfoType}
     * @memberof ChannelResvRSInfoType
     */
    channelSummaryInfo?: ChannelSummaryInfoType;
}

/**
 * Check if a given object implements the ChannelResvRSInfoType interface.
 */
export function instanceOfChannelResvRSInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelResvRSInfoTypeFromJSON(json: any): ChannelResvRSInfoType {
    return ChannelResvRSInfoTypeFromJSONTyped(json, false);
}

export function ChannelResvRSInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelResvRSInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelMarketingInfo': !exists(json, 'channelMarketingInfo') ? undefined : ChannelMarketingInfoTypeFromJSON(json['channelMarketingInfo']),
        'channelResvStatus': !exists(json, 'channelResvStatus') ? undefined : ChannelResvStatusTypeFromJSON(json['channelResvStatus']),
        'channelSummaryInfo': !exists(json, 'channelSummaryInfo') ? undefined : ChannelSummaryInfoTypeFromJSON(json['channelSummaryInfo']),
    };
}

export function ChannelResvRSInfoTypeToJSON(value?: ChannelResvRSInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelMarketingInfo': ChannelMarketingInfoTypeToJSON(value.channelMarketingInfo),
        'channelResvStatus': ChannelResvStatusTypeToJSON(value.channelResvStatus),
        'channelSummaryInfo': ChannelSummaryInfoTypeToJSON(value.channelSummaryInfo),
    };
}
