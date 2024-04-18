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
import type { DailyRateType } from './DailyRateType';
import {
    DailyRateTypeFromJSON,
    DailyRateTypeFromJSONTyped,
    DailyRateTypeToJSON,
} from './DailyRateType';
import type { EffectiveRateType } from './EffectiveRateType';
import {
    EffectiveRateTypeFromJSON,
    EffectiveRateTypeFromJSONTyped,
    EffectiveRateTypeToJSON,
} from './EffectiveRateType';
import type { HotelReservationsType } from './HotelReservationsType';
import {
    HotelReservationsTypeFromJSON,
    HotelReservationsTypeFromJSONTyped,
    HotelReservationsTypeToJSON,
} from './HotelReservationsType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for the combine share reservation request. Based on the request, this will return all sharer reservations including the request reservation.
 * @export
 * @interface CombineShareReservationsDetails
 */
export interface CombineShareReservationsDetails {
    /**
     * Collection of effective rate amount per guest on specific dates.
     * @type {Array<EffectiveRateType>}
     * @memberof CombineShareReservationsDetails
     */
    effectiveRates?: Array<EffectiveRateType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CombineShareReservationsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Defines room rate information on a daily basis.
     * @type {Array<DailyRateType>}
     * @memberof CombineShareReservationsDetails
     */
    newRates?: Array<DailyRateType>;
    /**
     * Defines room rate information on a daily basis.
     * @type {Array<DailyRateType>}
     * @memberof CombineShareReservationsDetails
     */
    oldRates?: Array<DailyRateType>;
    /**
     * 
     * @type {HotelReservationsType}
     * @memberof CombineShareReservationsDetails
     */
    shareReservations?: HotelReservationsType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CombineShareReservationsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CombineShareReservationsDetails interface.
 */
export function instanceOfCombineShareReservationsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CombineShareReservationsDetailsFromJSON(json: any): CombineShareReservationsDetails {
    return CombineShareReservationsDetailsFromJSONTyped(json, false);
}

export function CombineShareReservationsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CombineShareReservationsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effectiveRates': !exists(json, 'effectiveRates') ? undefined : ((json['effectiveRates'] as Array<any>).map(EffectiveRateTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'newRates': !exists(json, 'newRates') ? undefined : ((json['newRates'] as Array<any>).map(DailyRateTypeFromJSON)),
        'oldRates': !exists(json, 'oldRates') ? undefined : ((json['oldRates'] as Array<any>).map(DailyRateTypeFromJSON)),
        'shareReservations': !exists(json, 'shareReservations') ? undefined : HotelReservationsTypeFromJSON(json['shareReservations']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CombineShareReservationsDetailsToJSON(value?: CombineShareReservationsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effectiveRates': value.effectiveRates === undefined ? undefined : ((value.effectiveRates as Array<any>).map(EffectiveRateTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'newRates': value.newRates === undefined ? undefined : ((value.newRates as Array<any>).map(DailyRateTypeToJSON)),
        'oldRates': value.oldRates === undefined ? undefined : ((value.oldRates as Array<any>).map(DailyRateTypeToJSON)),
        'shareReservations': HotelReservationsTypeToJSON(value.shareReservations),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
