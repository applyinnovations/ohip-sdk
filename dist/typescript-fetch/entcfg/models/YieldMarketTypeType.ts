/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Details for Yield Market Type.
 * @export
 * @interface YieldMarketTypeType
 */
export interface YieldMarketTypeType {
    /**
     * If the yield market code does not return a result, this alternative yield market code is used instead.
     * @type {string}
     * @memberof YieldMarketTypeType
     */
    alternativeCode?: string;
    /**
     * Yield Market Code.
     * @type {string}
     * @memberof YieldMarketTypeType
     */
    code?: string;
    /**
     * Indicates the default yield market type.
     * @type {boolean}
     * @memberof YieldMarketTypeType
     */
    _default?: boolean;
    /**
     * Description for the yield market code.
     * @type {string}
     * @memberof YieldMarketTypeType
     */
    description?: string;
    /**
     * Hotel code for which the yield market type belong to.
     * @type {string}
     * @memberof YieldMarketTypeType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the YieldMarketTypeType interface.
 */
export function instanceOfYieldMarketTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldMarketTypeTypeFromJSON(json: any): YieldMarketTypeType {
    return YieldMarketTypeTypeFromJSONTyped(json, false);
}

export function YieldMarketTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldMarketTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternativeCode': !exists(json, 'alternativeCode') ? undefined : json['alternativeCode'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function YieldMarketTypeTypeToJSON(value?: YieldMarketTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternativeCode': value.alternativeCode,
        'code': value.code,
        'default': value._default,
        'description': value.description,
        'hotelId': value.hotelId,
    };
}

