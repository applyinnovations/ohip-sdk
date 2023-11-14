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
import type { ExportColumnInfoType } from './ExportColumnInfoType';
import {
    ExportColumnInfoTypeFromJSON,
    ExportColumnInfoTypeFromJSONTyped,
    ExportColumnInfoTypeToJSON,
} from './ExportColumnInfoType';
import type { ExportColumnXMLType } from './ExportColumnXMLType';
import {
    ExportColumnXMLTypeFromJSON,
    ExportColumnXMLTypeFromJSONTyped,
    ExportColumnXMLTypeToJSON,
} from './ExportColumnXMLType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface ExportColumnDetailType
 */
export interface ExportColumnDetailType {
    /**
     * Column Alignment.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    columnAlignment?: string;
    /**
     * 
     * @type {ExportColumnInfoType}
     * @memberof ExportColumnDetailType
     */
    columnDataType?: ExportColumnInfoType;
    /**
     * Column format.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    columnFormat?: string;
    /**
     * Length of the column.
     * @type {number}
     * @memberof ExportColumnDetailType
     */
    columnLength?: number;
    /**
     * Name of the column to Export.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    columnName?: string;
    /**
     * Order by column.
     * @type {number}
     * @memberof ExportColumnDetailType
     */
    columnOrderBy?: number;
    /**
     * Type of the column.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    columnType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExportColumnDetailType
     */
    databaseColumn?: boolean;
    /**
     * Default value of the column.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    defaultValue?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportColumnDetailType
     */
    exportDataId?: UniqueIDType;
    /**
     * Filter on the Additional Source View for XML Complex Elements.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    filter?: string;
    /**
     * Formula for the Formula Column.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    formula?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExportColumnDetailType
     */
    ignoreLength?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportColumnDetailType
     */
    parentColumnId?: UniqueIDType;
    /**
     * Name of an additional database view that the column, and its descendants, may be derived from. This column, and its descendants, may also be derived from the export header's source view, as well as any ancestor's source view.
     * @type {string}
     * @memberof ExportColumnDetailType
     */
    sourceViewName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExportColumnDetailType
     */
    tagRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExportColumnDetailType
     */
    xMLAttribute?: boolean;
    /**
     * 
     * @type {ExportColumnXMLType}
     * @memberof ExportColumnDetailType
     */
    xMLColumnType?: ExportColumnXMLType;
}

/**
 * Check if a given object implements the ExportColumnDetailType interface.
 */
export function instanceOfExportColumnDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportColumnDetailTypeFromJSON(json: any): ExportColumnDetailType {
    return ExportColumnDetailTypeFromJSONTyped(json, false);
}

export function ExportColumnDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportColumnDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'columnAlignment': !exists(json, 'columnAlignment') ? undefined : json['columnAlignment'],
        'columnDataType': !exists(json, 'columnDataType') ? undefined : ExportColumnInfoTypeFromJSON(json['columnDataType']),
        'columnFormat': !exists(json, 'columnFormat') ? undefined : json['columnFormat'],
        'columnLength': !exists(json, 'columnLength') ? undefined : json['columnLength'],
        'columnName': !exists(json, 'columnName') ? undefined : json['columnName'],
        'columnOrderBy': !exists(json, 'columnOrderBy') ? undefined : json['columnOrderBy'],
        'columnType': !exists(json, 'columnType') ? undefined : json['columnType'],
        'databaseColumn': !exists(json, 'databaseColumn') ? undefined : json['databaseColumn'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'exportDataId': !exists(json, 'exportDataId') ? undefined : UniqueIDTypeFromJSON(json['exportDataId']),
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
        'formula': !exists(json, 'formula') ? undefined : json['formula'],
        'ignoreLength': !exists(json, 'ignoreLength') ? undefined : json['ignoreLength'],
        'parentColumnId': !exists(json, 'parentColumnId') ? undefined : UniqueIDTypeFromJSON(json['parentColumnId']),
        'sourceViewName': !exists(json, 'sourceViewName') ? undefined : json['sourceViewName'],
        'tagRequired': !exists(json, 'tagRequired') ? undefined : json['tagRequired'],
        'xMLAttribute': !exists(json, 'xMLAttribute') ? undefined : json['xMLAttribute'],
        'xMLColumnType': !exists(json, 'xMLColumnType') ? undefined : ExportColumnXMLTypeFromJSON(json['xMLColumnType']),
    };
}

export function ExportColumnDetailTypeToJSON(value?: ExportColumnDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'columnAlignment': value.columnAlignment,
        'columnDataType': ExportColumnInfoTypeToJSON(value.columnDataType),
        'columnFormat': value.columnFormat,
        'columnLength': value.columnLength,
        'columnName': value.columnName,
        'columnOrderBy': value.columnOrderBy,
        'columnType': value.columnType,
        'databaseColumn': value.databaseColumn,
        'defaultValue': value.defaultValue,
        'exportDataId': UniqueIDTypeToJSON(value.exportDataId),
        'filter': value.filter,
        'formula': value.formula,
        'ignoreLength': value.ignoreLength,
        'parentColumnId': UniqueIDTypeToJSON(value.parentColumnId),
        'sourceViewName': value.sourceViewName,
        'tagRequired': value.tagRequired,
        'xMLAttribute': value.xMLAttribute,
        'xMLColumnType': ExportColumnXMLTypeToJSON(value.xMLColumnType),
    };
}
