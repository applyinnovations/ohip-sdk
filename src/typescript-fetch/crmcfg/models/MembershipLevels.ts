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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MembershipLevelType } from './MembershipLevelType';
import {
    MembershipLevelTypeFromJSON,
    MembershipLevelTypeFromJSONTyped,
    MembershipLevelTypeToJSON,
} from './MembershipLevelType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying membership levels.
 * @export
 * @interface MembershipLevels
 */
export interface MembershipLevels {
    /**
     * Collection of membership levels
     * @type {Array<MembershipLevelType>}
     * @memberof MembershipLevels
     */
    membershipLevels?: Array<MembershipLevelType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipLevels
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipLevels
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipLevels interface.
 */
export function instanceOfMembershipLevels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipLevelsFromJSON(json: any): MembershipLevels {
    return MembershipLevelsFromJSONTyped(json, false);
}

export function MembershipLevelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipLevels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membershipLevels': !exists(json, 'membershipLevels') ? undefined : ((json['membershipLevels'] as Array<any>).map(MembershipLevelTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipLevelsToJSON(value?: MembershipLevels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membershipLevels': value.membershipLevels === undefined ? undefined : ((value.membershipLevels as Array<any>).map(MembershipLevelTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
