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
import type { CustomTaxTypesType } from './CustomTaxTypesType';
import {
    CustomTaxTypesTypeFromJSON,
    CustomTaxTypesTypeFromJSONTyped,
    CustomTaxTypesTypeToJSON,
} from './CustomTaxTypesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching Custom Tax Types.
 * @export
 * @interface CustomTaxTypesDetails
 */
export interface CustomTaxTypesDetails {
    /**
     * 
     * @type {CustomTaxTypesType}
     * @memberof CustomTaxTypesDetails
     */
    customTaxTypes?: CustomTaxTypesType;
    /**
     * 
     * @type {Links}
     * @memberof CustomTaxTypesDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CustomTaxTypesDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CustomTaxTypesDetails interface.
 */
export function instanceOfCustomTaxTypesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomTaxTypesDetailsFromJSON(json: any): CustomTaxTypesDetails {
    return CustomTaxTypesDetailsFromJSONTyped(json, false);
}

export function CustomTaxTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomTaxTypesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customTaxTypes': !exists(json, 'customTaxTypes') ? undefined : CustomTaxTypesTypeFromJSON(json['customTaxTypes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CustomTaxTypesDetailsToJSON(value?: CustomTaxTypesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customTaxTypes': CustomTaxTypesTypeToJSON(value.customTaxTypes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
