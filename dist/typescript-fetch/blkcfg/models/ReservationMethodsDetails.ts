/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { ReservationMethodType } from './ReservationMethodType';
import {
    ReservationMethodTypeFromJSON,
    ReservationMethodTypeFromJSONTyped,
    ReservationMethodTypeToJSON,
} from './ReservationMethodType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Reservation Methods.
 * @export
 * @interface ReservationMethodsDetails
 */
export interface ReservationMethodsDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReservationMethodsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Reservation Methods.
     * @type {Array<ReservationMethodType>}
     * @memberof ReservationMethodsDetails
     */
    reservationMethods?: Array<ReservationMethodType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReservationMethodsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReservationMethodsDetails interface.
 */
export function instanceOfReservationMethodsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationMethodsDetailsFromJSON(json: any): ReservationMethodsDetails {
    return ReservationMethodsDetailsFromJSONTyped(json, false);
}

export function ReservationMethodsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationMethodsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationMethods': !exists(json, 'reservationMethods') ? undefined : ((json['reservationMethods'] as Array<any>).map(ReservationMethodTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReservationMethodsDetailsToJSON(value?: ReservationMethodsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationMethods': value.reservationMethods === undefined ? undefined : ((value.reservationMethods as Array<any>).map(ReservationMethodTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

