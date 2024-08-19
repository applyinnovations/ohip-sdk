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
import type { CommunicationTypeType } from './CommunicationTypeType';
import {
    CommunicationTypeTypeFromJSON,
    CommunicationTypeTypeFromJSONTyped,
    CommunicationTypeTypeToJSON,
} from './CommunicationTypeType';
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
 * Request object for creating a new Communication Type.
 * @export
 * @interface CommunicationTypeCriteria
 */
export interface CommunicationTypeCriteria {
    /**
     * 
     * @type {CommunicationTypeType}
     * @memberof CommunicationTypeCriteria
     */
    communicationType?: CommunicationTypeType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CommunicationTypeCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CommunicationTypeCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CommunicationTypeCriteria interface.
 */
export function instanceOfCommunicationTypeCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommunicationTypeCriteriaFromJSON(json: any): CommunicationTypeCriteria {
    return CommunicationTypeCriteriaFromJSONTyped(json, false);
}

export function CommunicationTypeCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTypeCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'communicationType': !exists(json, 'communicationType') ? undefined : CommunicationTypeTypeFromJSON(json['communicationType']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CommunicationTypeCriteriaToJSON(value?: CommunicationTypeCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'communicationType': CommunicationTypeTypeToJSON(value.communicationType),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

