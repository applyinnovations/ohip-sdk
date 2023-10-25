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
import type { AwardType } from './AwardType';
import {
    AwardTypeFromJSON,
    AwardTypeFromJSONTyped,
    AwardTypeToJSON,
} from './AwardType';
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
 * Request to attach certificate to the Reservation.
 * @export
 * @interface AttachCertificate
 */
export interface AttachCertificate {
    /**
     * List of awards.
     * @type {Array<AwardType>}
     * @memberof AttachCertificate
     */
    awards?: Array<AwardType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AttachCertificate
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AttachCertificate
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AttachCertificate interface.
 */
export function instanceOfAttachCertificate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttachCertificateFromJSON(json: any): AttachCertificate {
    return AttachCertificateFromJSONTyped(json, false);
}

export function AttachCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awards': !exists(json, 'awards') ? undefined : ((json['awards'] as Array<any>).map(AwardTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AttachCertificateToJSON(value?: AttachCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awards': value.awards === undefined ? undefined : ((value.awards as Array<any>).map(AwardTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

