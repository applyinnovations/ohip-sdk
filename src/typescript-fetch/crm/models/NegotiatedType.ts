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
import type { NegotiatedInfoType } from './NegotiatedInfoType';
import {
    NegotiatedInfoTypeFromJSON,
    NegotiatedInfoTypeFromJSONTyped,
    NegotiatedInfoTypeToJSON,
} from './NegotiatedInfoType';

/**
 * This holds a list of NegotiatedInfoType.
 * @export
 * @interface NegotiatedType
 */
export interface NegotiatedType {
    /**
     * Hotel code for the negotiated rate.
     * @type {string}
     * @memberof NegotiatedType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<NegotiatedInfoType>}
     * @memberof NegotiatedType
     */
    negotiatedInfoList?: Array<NegotiatedInfoType>;
    /**
     * Rate plan code for the negotiated rate.
     * @type {string}
     * @memberof NegotiatedType
     */
    rateCode?: string;
}

/**
 * Check if a given object implements the NegotiatedType interface.
 */
export function instanceOfNegotiatedType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NegotiatedTypeFromJSON(json: any): NegotiatedType {
    return NegotiatedTypeFromJSONTyped(json, false);
}

export function NegotiatedTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegotiatedType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'negotiatedInfoList': !exists(json, 'negotiatedInfoList') ? undefined : ((json['negotiatedInfoList'] as Array<any>).map(NegotiatedInfoTypeFromJSON)),
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
    };
}

export function NegotiatedTypeToJSON(value?: NegotiatedType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'negotiatedInfoList': value.negotiatedInfoList === undefined ? undefined : ((value.negotiatedInfoList as Array<any>).map(NegotiatedInfoTypeToJSON)),
        'rateCode': value.rateCode,
    };
}

