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
/**
 * Unique identifiers for both internal and external systems Eg: ReservationId, ConfirmationNumber, CancellationNumber, ExternalReferenceNumber etc
 * @export
 * @interface DistinctIDType
 */
export interface DistinctIDType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof DistinctIDType
     */
    id?: string;
    /**
     * Additional identifying value assigned by the creating system. Eg: ConfirmationLegNumber, ExternalLegNumber
     * @type {number}
     * @memberof DistinctIDType
     */
    idExtension?: number;
    /**
     * A reference to the type of object defined by the UniqueID element. Eg: Reservation, Confirmation, Cancellation, ExternalReference etc
     * @type {string}
     * @memberof DistinctIDType
     */
    type?: string;
}

/**
 * Check if a given object implements the DistinctIDType interface.
 */
export function instanceOfDistinctIDType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DistinctIDTypeFromJSON(json: any): DistinctIDType {
    return DistinctIDTypeFromJSONTyped(json, false);
}

export function DistinctIDTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistinctIDType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function DistinctIDTypeToJSON(value?: DistinctIDType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'idExtension': value.idExtension,
        'type': value.type,
    };
}

