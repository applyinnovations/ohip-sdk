/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GuestStatusType } from './GuestStatusType';
import {
    GuestStatusTypeFromJSON,
    GuestStatusTypeFromJSONTyped,
    GuestStatusTypeToJSON,
} from './GuestStatusType';
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
 * Request object for creating Guest Statuses.
 * @export
 * @interface GuestStatusesCriteria
 */
export interface GuestStatusesCriteria {
    /**
     * List of Guest Statuses.
     * @type {Array<GuestStatusType>}
     * @memberof GuestStatusesCriteria
     */
    guestStatuses?: Array<GuestStatusType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GuestStatusesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuestStatusesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GuestStatusesCriteria interface.
 */
export function instanceOfGuestStatusesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestStatusesCriteriaFromJSON(json: any): GuestStatusesCriteria {
    return GuestStatusesCriteriaFromJSONTyped(json, false);
}

export function GuestStatusesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestStatusesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestStatuses': !exists(json, 'guestStatuses') ? undefined : ((json['guestStatuses'] as Array<any>).map(GuestStatusTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GuestStatusesCriteriaToJSON(value?: GuestStatusesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestStatuses': value.guestStatuses === undefined ? undefined : ((value.guestStatuses as Array<any>).map(GuestStatusTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
