/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RateInfoDetail } from './RateInfoDetail';
import {
    RateInfoDetailFromJSON,
    RateInfoDetailFromJSONTyped,
    RateInfoDetailToJSON,
} from './RateInfoDetail';
import type { ReservationRateSummaryType } from './ReservationRateSummaryType';
import {
    ReservationRateSummaryTypeFromJSON,
    ReservationRateSummaryTypeFromJSONTyped,
    ReservationRateSummaryTypeToJSON,
} from './ReservationRateSummaryType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response will either be Summary or Detail type, but not both. See the request for the summary attribute flag.
 * @export
 * @interface RateInfo
 */
export interface RateInfo {
    /**
     * 
     * @type {RateInfoDetail}
     * @memberof RateInfo
     */
    detail?: RateInfoDetail;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RateInfo
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationRateSummaryType}
     * @memberof RateInfo
     */
    summary?: ReservationRateSummaryType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RateInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RateInfo interface.
 */
export function instanceOfRateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateInfoFromJSON(json: any): RateInfo {
    return RateInfoFromJSONTyped(json, false);
}

export function RateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : RateInfoDetailFromJSON(json['detail']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'summary': !exists(json, 'summary') ? undefined : ReservationRateSummaryTypeFromJSON(json['summary']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RateInfoToJSON(value?: RateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': RateInfoDetailToJSON(value.detail),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'summary': ReservationRateSummaryTypeToJSON(value.summary),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

