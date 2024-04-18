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
import type { InterfaceExportDataDetailType } from './InterfaceExportDataDetailType';
import {
    InterfaceExportDataDetailTypeFromJSON,
    InterfaceExportDataDetailTypeFromJSONTyped,
    InterfaceExportDataDetailTypeToJSON,
} from './InterfaceExportDataDetailType';

/**
 * This type holds the export data of a hotel interface.
 * @export
 * @interface InterfaceExportDataInfoType
 */
export interface InterfaceExportDataInfoType {
    /**
     * Collection of export data details of a hotel interface.
     * @type {Array<InterfaceExportDataDetailType>}
     * @memberof InterfaceExportDataInfoType
     */
    interfaceExportDataDetails?: Array<InterfaceExportDataDetailType>;
    /**
     * Collection of export data details of a hotel interface.
     * @type {Array<InterfaceExportDataDetailType>}
     * @memberof InterfaceExportDataInfoType
     */
    interfaceExportDataMandatoryDetails?: Array<InterfaceExportDataDetailType>;
}

/**
 * Check if a given object implements the InterfaceExportDataInfoType interface.
 */
export function instanceOfInterfaceExportDataInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterfaceExportDataInfoTypeFromJSON(json: any): InterfaceExportDataInfoType {
    return InterfaceExportDataInfoTypeFromJSONTyped(json, false);
}

export function InterfaceExportDataInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceExportDataInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'interfaceExportDataDetails': !exists(json, 'interfaceExportDataDetails') ? undefined : ((json['interfaceExportDataDetails'] as Array<any>).map(InterfaceExportDataDetailTypeFromJSON)),
        'interfaceExportDataMandatoryDetails': !exists(json, 'interfaceExportDataMandatoryDetails') ? undefined : ((json['interfaceExportDataMandatoryDetails'] as Array<any>).map(InterfaceExportDataDetailTypeFromJSON)),
    };
}

export function InterfaceExportDataInfoTypeToJSON(value?: InterfaceExportDataInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'interfaceExportDataDetails': value.interfaceExportDataDetails === undefined ? undefined : ((value.interfaceExportDataDetails as Array<any>).map(InterfaceExportDataDetailTypeToJSON)),
        'interfaceExportDataMandatoryDetails': value.interfaceExportDataMandatoryDetails === undefined ? undefined : ((value.interfaceExportDataMandatoryDetails as Array<any>).map(InterfaceExportDataDetailTypeToJSON)),
    };
}
