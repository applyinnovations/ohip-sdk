/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomTaxTypeType } from './CustomTaxTypeType';
import {
    CustomTaxTypeTypeFromJSON,
    CustomTaxTypeTypeFromJSONTyped,
    CustomTaxTypeTypeToJSON,
} from './CustomTaxTypeType';
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
 * Request object for creating Custom Tax Types.
 * @export
 * @interface CustomTaxTypesCriteria
 */
export interface CustomTaxTypesCriteria {
    /**
     * List of Custom Tax Types.
     * @type {Array<CustomTaxTypeType>}
     * @memberof CustomTaxTypesCriteria
     */
    customTaxTypes?: Array<CustomTaxTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CustomTaxTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CustomTaxTypesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CustomTaxTypesCriteria interface.
 */
export function instanceOfCustomTaxTypesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomTaxTypesCriteriaFromJSON(json: any): CustomTaxTypesCriteria {
    return CustomTaxTypesCriteriaFromJSONTyped(json, false);
}

export function CustomTaxTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomTaxTypesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customTaxTypes': !exists(json, 'customTaxTypes') ? undefined : ((json['customTaxTypes'] as Array<any>).map(CustomTaxTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CustomTaxTypesCriteriaToJSON(value?: CustomTaxTypesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customTaxTypes': value.customTaxTypes === undefined ? undefined : ((value.customTaxTypes as Array<any>).map(CustomTaxTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

