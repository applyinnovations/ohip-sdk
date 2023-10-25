/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
 * Request object for changing Custom Tax Types.
 * @export
 * @interface CustomTaxTypesToBeChanged
 */
export interface CustomTaxTypesToBeChanged {
    /**
     * List of Custom Tax Types.
     * @type {Array<CustomTaxTypeType>}
     * @memberof CustomTaxTypesToBeChanged
     */
    customTaxTypes?: Array<CustomTaxTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CustomTaxTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CustomTaxTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CustomTaxTypesToBeChanged interface.
 */
export function instanceOfCustomTaxTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomTaxTypesToBeChangedFromJSON(json: any): CustomTaxTypesToBeChanged {
    return CustomTaxTypesToBeChangedFromJSONTyped(json, false);
}

export function CustomTaxTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomTaxTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customTaxTypes': !exists(json, 'customTaxTypes') ? undefined : ((json['customTaxTypes'] as Array<any>).map(CustomTaxTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CustomTaxTypesToBeChangedToJSON(value?: CustomTaxTypesToBeChanged | null): any {
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

