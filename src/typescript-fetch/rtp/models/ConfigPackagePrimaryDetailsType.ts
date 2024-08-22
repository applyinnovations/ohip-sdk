/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A Config Package Info type.
 * @export
 * @interface ConfigPackagePrimaryDetailsType
 */
export interface ConfigPackagePrimaryDetailsType {
    /**
     * Arrangement Code.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    arrangementCode?: string;
    /**
     * Indicates the begin sell date of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    beginSellDate?: string;
    /**
     * The description of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    description?: string;
    /**
     * Indicates the end sell date of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    endSellDate?: string;
    /**
     * The Forecast group package belongs to.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    forecastGroup?: string;
    /**
     * The short description of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    shortDescription?: string;
}

/**
 * Check if a given object implements the ConfigPackagePrimaryDetailsType interface.
 */
export function instanceOfConfigPackagePrimaryDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigPackagePrimaryDetailsTypeFromJSON(json: any): ConfigPackagePrimaryDetailsType {
    return ConfigPackagePrimaryDetailsTypeFromJSONTyped(json, false);
}

export function ConfigPackagePrimaryDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPackagePrimaryDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrangementCode': !exists(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'beginSellDate': !exists(json, 'beginSellDate') ? undefined : json['beginSellDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'endSellDate': !exists(json, 'endSellDate') ? undefined : json['endSellDate'],
        'forecastGroup': !exists(json, 'forecastGroup') ? undefined : json['forecastGroup'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}

export function ConfigPackagePrimaryDetailsTypeToJSON(value?: ConfigPackagePrimaryDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrangementCode': value.arrangementCode,
        'beginSellDate': value.beginSellDate,
        'description': value.description,
        'endSellDate': value.endSellDate,
        'forecastGroup': value.forecastGroup,
        'shortDescription': value.shortDescription,
    };
}

