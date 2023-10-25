/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringCodeType } from './CateringCodeType';
import {
    CateringCodeTypeFromJSON,
    CateringCodeTypeFromJSONTyped,
    CateringCodeTypeToJSON,
} from './CateringCodeType';
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
 * 
 * @export
 * @interface PostCateringItemRatesRequest
 */
export interface PostCateringItemRatesRequest {
    /**
     * Catering Code details.
     * @type {Array<CateringCodeType>}
     * @memberof PostCateringItemRatesRequest
     */
    itemRates?: Array<CateringCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostCateringItemRatesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostCateringItemRatesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostCateringItemRatesRequest interface.
 */
export function instanceOfPostCateringItemRatesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostCateringItemRatesRequestFromJSON(json: any): PostCateringItemRatesRequest {
    return PostCateringItemRatesRequestFromJSONTyped(json, false);
}

export function PostCateringItemRatesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCateringItemRatesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemRates': !exists(json, 'itemRates') ? undefined : ((json['itemRates'] as Array<any>).map(CateringCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostCateringItemRatesRequestToJSON(value?: PostCateringItemRatesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemRates': value.itemRates === undefined ? undefined : ((value.itemRates as Array<any>).map(CateringCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

