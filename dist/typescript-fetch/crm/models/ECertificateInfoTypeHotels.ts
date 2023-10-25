/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ECertificateScopeType } from './ECertificateScopeType';
import {
    ECertificateScopeTypeFromJSON,
    ECertificateScopeTypeFromJSONTyped,
    ECertificateScopeTypeToJSON,
} from './ECertificateScopeType';

/**
 * Hotel to which certificate is attached to.
 * @export
 * @interface ECertificateInfoTypeHotels
 */
export interface ECertificateInfoTypeHotels {
    /**
     * 
     * @type {Array<string>}
     * @memberof ECertificateInfoTypeHotels
     */
    code?: Array<string>;
    /**
     * 
     * @type {ECertificateScopeType}
     * @memberof ECertificateInfoTypeHotels
     */
    scope?: ECertificateScopeType;
}

/**
 * Check if a given object implements the ECertificateInfoTypeHotels interface.
 */
export function instanceOfECertificateInfoTypeHotels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateInfoTypeHotelsFromJSON(json: any): ECertificateInfoTypeHotels {
    return ECertificateInfoTypeHotelsFromJSONTyped(json, false);
}

export function ECertificateInfoTypeHotelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateInfoTypeHotels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'scope': !exists(json, 'scope') ? undefined : ECertificateScopeTypeFromJSON(json['scope']),
    };
}

export function ECertificateInfoTypeHotelsToJSON(value?: ECertificateInfoTypeHotels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'scope': ECertificateScopeTypeToJSON(value.scope),
    };
}

