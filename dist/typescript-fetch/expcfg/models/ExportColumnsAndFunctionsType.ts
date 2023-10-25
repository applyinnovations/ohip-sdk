/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExpDataSourceColumnType } from './ExpDataSourceColumnType';
import {
    ExpDataSourceColumnTypeFromJSON,
    ExpDataSourceColumnTypeFromJSONTyped,
    ExpDataSourceColumnTypeToJSON,
} from './ExpDataSourceColumnType';
import type { ExpFunctionType } from './ExpFunctionType';
import {
    ExpFunctionTypeFromJSON,
    ExpFunctionTypeFromJSONTyped,
    ExpFunctionTypeToJSON,
} from './ExpFunctionType';

/**
 * Contains columns, pre post functions and export functions
 * @export
 * @interface ExportColumnsAndFunctionsType
 */
export interface ExportColumnsAndFunctionsType {
    /**
     * Function parameters
     * @type {Array<ExpDataSourceColumnType>}
     * @memberof ExportColumnsAndFunctionsType
     */
    dbColumns?: Array<ExpDataSourceColumnType>;
    /**
     * Function parameters
     * @type {Array<ExpFunctionType>}
     * @memberof ExportColumnsAndFunctionsType
     */
    functions?: Array<ExpFunctionType>;
    /**
     * Function parameters
     * @type {Array<ExpFunctionType>}
     * @memberof ExportColumnsAndFunctionsType
     */
    prePostFunctions?: Array<ExpFunctionType>;
}

/**
 * Check if a given object implements the ExportColumnsAndFunctionsType interface.
 */
export function instanceOfExportColumnsAndFunctionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportColumnsAndFunctionsTypeFromJSON(json: any): ExportColumnsAndFunctionsType {
    return ExportColumnsAndFunctionsTypeFromJSONTyped(json, false);
}

export function ExportColumnsAndFunctionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportColumnsAndFunctionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dbColumns': !exists(json, 'dbColumns') ? undefined : ((json['dbColumns'] as Array<any>).map(ExpDataSourceColumnTypeFromJSON)),
        'functions': !exists(json, 'functions') ? undefined : ((json['functions'] as Array<any>).map(ExpFunctionTypeFromJSON)),
        'prePostFunctions': !exists(json, 'prePostFunctions') ? undefined : ((json['prePostFunctions'] as Array<any>).map(ExpFunctionTypeFromJSON)),
    };
}

export function ExportColumnsAndFunctionsTypeToJSON(value?: ExportColumnsAndFunctionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dbColumns': value.dbColumns === undefined ? undefined : ((value.dbColumns as Array<any>).map(ExpDataSourceColumnTypeToJSON)),
        'functions': value.functions === undefined ? undefined : ((value.functions as Array<any>).map(ExpFunctionTypeToJSON)),
        'prePostFunctions': value.prePostFunctions === undefined ? undefined : ((value.prePostFunctions as Array<any>).map(ExpFunctionTypeToJSON)),
    };
}

