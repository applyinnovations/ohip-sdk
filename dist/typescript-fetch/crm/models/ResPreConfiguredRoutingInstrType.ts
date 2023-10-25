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
import type { ResProfileTypeType } from './ResProfileTypeType';
import {
    ResProfileTypeTypeFromJSON,
    ResProfileTypeTypeFromJSONTyped,
    ResProfileTypeTypeToJSON,
} from './ResProfileTypeType';

/**
 * Instruction to attach Pre-Configured Routing Instructions to a Reservation.
 * @export
 * @interface ResPreConfiguredRoutingInstrType
 */
export interface ResPreConfiguredRoutingInstrType {
    /**
     * 
     * @type {ResProfileTypeType}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    profileType?: ResProfileTypeType;
    /**
     * Promotion Code with attached Complimentary Routing.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    promotionCode?: string;
    /**
     * Rate Code with attached Routing Instruction.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    ratePlanCode?: string;
}

/**
 * Check if a given object implements the ResPreConfiguredRoutingInstrType interface.
 */
export function instanceOfResPreConfiguredRoutingInstrType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResPreConfiguredRoutingInstrTypeFromJSON(json: any): ResPreConfiguredRoutingInstrType {
    return ResPreConfiguredRoutingInstrTypeFromJSONTyped(json, false);
}

export function ResPreConfiguredRoutingInstrTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPreConfiguredRoutingInstrType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileType': !exists(json, 'profileType') ? undefined : ResProfileTypeTypeFromJSON(json['profileType']),
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}

export function ResPreConfiguredRoutingInstrTypeToJSON(value?: ResPreConfiguredRoutingInstrType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileType': ResProfileTypeTypeToJSON(value.profileType),
        'promotionCode': value.promotionCode,
        'ratePlanCode': value.ratePlanCode,
    };
}

