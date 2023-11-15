/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used to hold user defined field of Date Type.
 * @export
 * @interface StagedProfileDateUDFType
 */
export interface StagedProfileDateUDFType {
    /**
     * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    value?: string;
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    altname?: string;
    /**
     * The error in a user defined field in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    errorDescription?: string;
    /**
     * PMS table name.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    tableName?: string;
    /**
     * Indicates whether the UDF information is valid.
     * @type {boolean}
     * @memberof StagedProfileDateUDFType
     */
    valid?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    type?: string;
}

/**
 * Check if a given object implements the StagedProfileDateUDFType interface.
 */
export function instanceOfStagedProfileDateUDFType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileDateUDFTypeFromJSON(json: any): StagedProfileDateUDFType {
    return StagedProfileDateUDFTypeFromJSONTyped(json, false);
}

export function StagedProfileDateUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileDateUDFType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'altname': !exists(json, 'altname') ? undefined : json['altname'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'tableName': !exists(json, 'tableName') ? undefined : json['tableName'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StagedProfileDateUDFTypeToJSON(value?: StagedProfileDateUDFType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'altname': value.altname,
        'errorDescription': value.errorDescription,
        'tableName': value.tableName,
        'valid': value.valid,
        'id': value.id,
        'type': value.type,
    };
}

