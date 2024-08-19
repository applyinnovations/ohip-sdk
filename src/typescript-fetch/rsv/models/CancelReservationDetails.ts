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
import type { CancelReservationType } from './CancelReservationType';
import {
    CancelReservationTypeFromJSON,
    CancelReservationTypeFromJSONTyped,
    CancelReservationTypeToJSON,
} from './CancelReservationType';
import type { CancellationActivityType } from './CancellationActivityType';
import {
    CancellationActivityTypeFromJSON,
    CancellationActivityTypeFromJSONTyped,
    CancellationActivityTypeToJSON,
} from './CancellationActivityType';
import type { ChannelResvRSInfoType } from './ChannelResvRSInfoType';
import {
    ChannelResvRSInfoTypeFromJSON,
    ChannelResvRSInfoTypeFromJSONTyped,
    ChannelResvRSInfoTypeToJSON,
} from './ChannelResvRSInfoType';
import type { DailyRateType } from './DailyRateType';
import {
    DailyRateTypeFromJSON,
    DailyRateTypeFromJSONTyped,
    DailyRateTypeToJSON,
} from './DailyRateType';
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
 * Response object for the request to cancel reservations. Response contains the reservations which were successfully canceled.
 * @export
 * @interface CancelReservationDetails
 */
export interface CancelReservationDetails {
    /**
     * 
     * @type {ChannelResvRSInfoType}
     * @memberof CancelReservationDetails
     */
    channelInformation?: ChannelResvRSInfoType;
    /**
     * Cancellation information includes information regarding Reason, Date of Cancellation etc..
     * @type {Array<CancellationActivityType>}
     * @memberof CancelReservationDetails
     */
    cxlActivityLog?: Array<CancellationActivityType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CancelReservationDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Defines room rate information on a daily basis.
     * @type {Array<DailyRateType>}
     * @memberof CancelReservationDetails
     */
    newRates?: Array<DailyRateType>;
    /**
     * Defines room rate information on a daily basis.
     * @type {Array<DailyRateType>}
     * @memberof CancelReservationDetails
     */
    oldRates?: Array<DailyRateType>;
    /**
     * Information regarding the reservation which was canceled.
     * @type {Array<CancelReservationType>}
     * @memberof CancelReservationDetails
     */
    reservations?: Array<CancelReservationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CancelReservationDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CancelReservationDetails interface.
 */
export function instanceOfCancelReservationDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CancelReservationDetailsFromJSON(json: any): CancelReservationDetails {
    return CancelReservationDetailsFromJSONTyped(json, false);
}

export function CancelReservationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelReservationDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelInformation': !exists(json, 'channelInformation') ? undefined : ChannelResvRSInfoTypeFromJSON(json['channelInformation']),
        'cxlActivityLog': !exists(json, 'cxlActivityLog') ? undefined : ((json['cxlActivityLog'] as Array<any>).map(CancellationActivityTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'newRates': !exists(json, 'newRates') ? undefined : ((json['newRates'] as Array<any>).map(DailyRateTypeFromJSON)),
        'oldRates': !exists(json, 'oldRates') ? undefined : ((json['oldRates'] as Array<any>).map(DailyRateTypeFromJSON)),
        'reservations': !exists(json, 'reservations') ? undefined : ((json['reservations'] as Array<any>).map(CancelReservationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CancelReservationDetailsToJSON(value?: CancelReservationDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelInformation': ChannelResvRSInfoTypeToJSON(value.channelInformation),
        'cxlActivityLog': value.cxlActivityLog === undefined ? undefined : ((value.cxlActivityLog as Array<any>).map(CancellationActivityTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'newRates': value.newRates === undefined ? undefined : ((value.newRates as Array<any>).map(DailyRateTypeToJSON)),
        'oldRates': value.oldRates === undefined ? undefined : ((value.oldRates as Array<any>).map(DailyRateTypeToJSON)),
        'reservations': value.reservations === undefined ? undefined : ((value.reservations as Array<any>).map(CancelReservationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

