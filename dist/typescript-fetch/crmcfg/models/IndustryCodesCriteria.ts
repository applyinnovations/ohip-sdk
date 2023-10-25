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
import type { IndustryCodeType } from './IndustryCodeType';
import {
    IndustryCodeTypeFromJSON,
    IndustryCodeTypeFromJSONTyped,
    IndustryCodeTypeToJSON,
} from './IndustryCodeType';
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
 * Request object for creating Industry Codes.
 * @export
 * @interface IndustryCodesCriteria
 */
export interface IndustryCodesCriteria {
    /**
     * List of Industry Codes.
     * @type {Array<IndustryCodeType>}
     * @memberof IndustryCodesCriteria
     */
    industryCodes?: Array<IndustryCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof IndustryCodesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof IndustryCodesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the IndustryCodesCriteria interface.
 */
export function instanceOfIndustryCodesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndustryCodesCriteriaFromJSON(json: any): IndustryCodesCriteria {
    return IndustryCodesCriteriaFromJSONTyped(json, false);
}

export function IndustryCodesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndustryCodesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'industryCodes': !exists(json, 'industryCodes') ? undefined : ((json['industryCodes'] as Array<any>).map(IndustryCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function IndustryCodesCriteriaToJSON(value?: IndustryCodesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'industryCodes': value.industryCodes === undefined ? undefined : ((value.industryCodes as Array<any>).map(IndustryCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

