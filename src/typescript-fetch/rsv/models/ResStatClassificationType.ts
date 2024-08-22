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
/**
 * Statistical Classification information for the reservation.
 * @export
 * @interface ResStatClassificationType
 */
export interface ResStatClassificationType {
    /**
     * Rate Tier used calculate statistics for export(DRS).
     * @type {number}
     * @memberof ResStatClassificationType
     */
    rateTier?: number;
    /**
     * Room Type used to calculate statistics for export(DRS).
     * @type {string}
     * @memberof ResStatClassificationType
     */
    roomType?: string;
}

/**
 * Check if a given object implements the ResStatClassificationType interface.
 */
export function instanceOfResStatClassificationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResStatClassificationTypeFromJSON(json: any): ResStatClassificationType {
    return ResStatClassificationTypeFromJSONTyped(json, false);
}

export function ResStatClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResStatClassificationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rateTier': !exists(json, 'rateTier') ? undefined : json['rateTier'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
    };
}

export function ResStatClassificationTypeToJSON(value?: ResStatClassificationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rateTier': value.rateTier,
        'roomType': value.roomType,
    };
}

