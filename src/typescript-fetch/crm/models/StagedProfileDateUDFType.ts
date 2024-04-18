/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Used to hold user defined field of Date Type.
 * @export
 * @interface StagedProfileDateUDFType
 */
export interface StagedProfileDateUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    alternateName?: string;
    /**
     * The error in a user defined field in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    errorDescription?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    id?: string;
    /**
     * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    name?: string;
    /**
     * PMS table name.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    tableName?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    type?: string;
    /**
     * Indicates whether the UDF information is valid.
     * @type {boolean}
     * @memberof StagedProfileDateUDFType
     */
    valid?: boolean;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof StagedProfileDateUDFType
     */
    value?: string;
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
        
        'alternateName': !exists(json, 'alternateName') ? undefined : json['alternateName'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tableName': !exists(json, 'tableName') ? undefined : json['tableName'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
        'value': !exists(json, 'value') ? undefined : json['value'],
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
        
        'alternateName': value.alternateName,
        'errorDescription': value.errorDescription,
        'id': value.id,
        'name': value.name,
        'tableName': value.tableName,
        'type': value.type,
        'valid': value.valid,
        'value': value.value,
    };
}
