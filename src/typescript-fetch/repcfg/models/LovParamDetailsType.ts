/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ParamLOVType } from './ParamLOVType';
import {
    ParamLOVTypeFromJSON,
    ParamLOVTypeFromJSONTyped,
    ParamLOVTypeToJSON,
} from './ParamLOVType';

/**
 * Identifies a destination record for the report.
 * @export
 * @interface LovParamDetailsType
 */
export interface LovParamDetailsType {
    /**
     * Query statement for LOV based report parameters.
     * @type {string}
     * @memberof LovParamDetailsType
     */
    lovSql?: string;
    /**
     * List of values for report parameter.
     * @type {Array<ParamLOVType>}
     * @memberof LovParamDetailsType
     */
    lOVs?: Array<ParamLOVType>;
    /**
     * Flag to indicate that input should be validated against LOV.
     * @type {boolean}
     * @memberof LovParamDetailsType
     */
    lovValidate?: boolean;
    /**
     * This attribute is used to indicate if an LOV defined is multi-select. This is particularly useful for simple reports.
     * @type {boolean}
     * @memberof LovParamDetailsType
     */
    lovMultiSelect?: boolean;
}

/**
 * Check if a given object implements the LovParamDetailsType interface.
 */
export function instanceOfLovParamDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LovParamDetailsTypeFromJSON(json: any): LovParamDetailsType {
    return LovParamDetailsTypeFromJSONTyped(json, false);
}

export function LovParamDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LovParamDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lovSql': !exists(json, 'lovSql') ? undefined : json['lovSql'],
        'lOVs': !exists(json, 'lOVs') ? undefined : ((json['lOVs'] as Array<any>).map(ParamLOVTypeFromJSON)),
        'lovValidate': !exists(json, 'lovValidate') ? undefined : json['lovValidate'],
        'lovMultiSelect': !exists(json, 'lovMultiSelect') ? undefined : json['lovMultiSelect'],
    };
}

export function LovParamDetailsTypeToJSON(value?: LovParamDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lovSql': value.lovSql,
        'lOVs': value.lOVs === undefined ? undefined : ((value.lOVs as Array<any>).map(ParamLOVTypeToJSON)),
        'lovValidate': value.lovValidate,
        'lovMultiSelect': value.lovMultiSelect,
    };
}
