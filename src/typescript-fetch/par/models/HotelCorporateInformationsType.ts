/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrimaryCodeType } from './PrimaryCodeType';
import {
    PrimaryCodeTypeFromJSON,
    PrimaryCodeTypeFromJSONTyped,
    PrimaryCodeTypeToJSON,
} from './PrimaryCodeType';

/**
 * Corporate information details of the property
 * @export
 * @interface HotelCorporateInformationsType
 */
export interface HotelCorporateInformationsType {
    /**
     * 
     * @type {string}
     * @memberof HotelCorporateInformationsType
     */
    brandCode?: string;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    businessUnit?: Array<PrimaryCodeType>;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    departmentCode?: Array<PrimaryCodeType>;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    division?: Array<PrimaryCodeType>;
    /**
     * 
     * @type {string}
     * @memberof HotelCorporateInformationsType
     */
    hotelCategory?: string;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    opertingUnit?: Array<PrimaryCodeType>;
}

/**
 * Check if a given object implements the HotelCorporateInformationsType interface.
 */
export function instanceOfHotelCorporateInformationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelCorporateInformationsTypeFromJSON(json: any): HotelCorporateInformationsType {
    return HotelCorporateInformationsTypeFromJSONTyped(json, false);
}

export function HotelCorporateInformationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelCorporateInformationsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brandCode': !exists(json, 'brandCode') ? undefined : json['brandCode'],
        'businessUnit': !exists(json, 'businessUnit') ? undefined : ((json['businessUnit'] as Array<any>).map(PrimaryCodeTypeFromJSON)),
        'departmentCode': !exists(json, 'departmentCode') ? undefined : ((json['departmentCode'] as Array<any>).map(PrimaryCodeTypeFromJSON)),
        'division': !exists(json, 'division') ? undefined : ((json['division'] as Array<any>).map(PrimaryCodeTypeFromJSON)),
        'hotelCategory': !exists(json, 'hotelCategory') ? undefined : json['hotelCategory'],
        'opertingUnit': !exists(json, 'opertingUnit') ? undefined : ((json['opertingUnit'] as Array<any>).map(PrimaryCodeTypeFromJSON)),
    };
}

export function HotelCorporateInformationsTypeToJSON(value?: HotelCorporateInformationsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'brandCode': value.brandCode,
        'businessUnit': value.businessUnit === undefined ? undefined : ((value.businessUnit as Array<any>).map(PrimaryCodeTypeToJSON)),
        'departmentCode': value.departmentCode === undefined ? undefined : ((value.departmentCode as Array<any>).map(PrimaryCodeTypeToJSON)),
        'division': value.division === undefined ? undefined : ((value.division as Array<any>).map(PrimaryCodeTypeToJSON)),
        'hotelCategory': value.hotelCategory,
        'opertingUnit': value.opertingUnit === undefined ? undefined : ((value.opertingUnit as Array<any>).map(PrimaryCodeTypeToJSON)),
    };
}

