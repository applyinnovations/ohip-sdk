/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface ExpressionFieldType
 */
export interface ExpressionFieldType {
    /**
     * 
     * @type {string}
     * @memberof ExpressionFieldType
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpressionFieldType
     */
    fieldDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpressionFieldType
     */
    fieldName?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpressionFieldType
     */
    lovSelected?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpressionFieldType
     */
    tableName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExpressionFieldType
     */
    virtual?: boolean;
}

/**
 * Check if a given object implements the ExpressionFieldType interface.
 */
export function instanceOfExpressionFieldType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExpressionFieldTypeFromJSON(json: any): ExpressionFieldType {
    return ExpressionFieldTypeFromJSONTyped(json, false);
}

export function ExpressionFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressionFieldType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'fieldDescription': !exists(json, 'fieldDescription') ? undefined : json['fieldDescription'],
        'fieldName': !exists(json, 'fieldName') ? undefined : json['fieldName'],
        'lovSelected': !exists(json, 'lovSelected') ? undefined : json['lovSelected'],
        'tableName': !exists(json, 'tableName') ? undefined : json['tableName'],
        'virtual': !exists(json, 'virtual') ? undefined : json['virtual'],
    };
}

export function ExpressionFieldTypeToJSON(value?: ExpressionFieldType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': value.dataType,
        'fieldDescription': value.fieldDescription,
        'fieldName': value.fieldName,
        'lovSelected': value.lovSelected,
        'tableName': value.tableName,
        'virtual': value.virtual,
    };
}
