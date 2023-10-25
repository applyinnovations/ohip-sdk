/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GuestTitleType } from './GuestTitleType';
import {
    GuestTitleTypeFromJSON,
    GuestTitleTypeFromJSONTyped,
    GuestTitleTypeToJSON,
} from './GuestTitleType';
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
 * Request object for creating Guest Titles.
 * @export
 * @interface GuestTitlesCriteria
 */
export interface GuestTitlesCriteria {
    /**
     * List of Guest Titles.
     * @type {Array<GuestTitleType>}
     * @memberof GuestTitlesCriteria
     */
    guestTitles?: Array<GuestTitleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GuestTitlesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuestTitlesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GuestTitlesCriteria interface.
 */
export function instanceOfGuestTitlesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestTitlesCriteriaFromJSON(json: any): GuestTitlesCriteria {
    return GuestTitlesCriteriaFromJSONTyped(json, false);
}

export function GuestTitlesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestTitlesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestTitles': !exists(json, 'guestTitles') ? undefined : ((json['guestTitles'] as Array<any>).map(GuestTitleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GuestTitlesCriteriaToJSON(value?: GuestTitlesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestTitles': value.guestTitles === undefined ? undefined : ((value.guestTitles as Array<any>).map(GuestTitleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

