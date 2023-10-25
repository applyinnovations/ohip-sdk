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
import type { ECertificateIssueSourceType } from './ECertificateIssueSourceType';
import {
    ECertificateIssueSourceTypeFromJSON,
    ECertificateIssueSourceTypeFromJSONTyped,
    ECertificateIssueSourceTypeToJSON,
} from './ECertificateIssueSourceType';
import type { ECertificateIssueType } from './ECertificateIssueType';
import {
    ECertificateIssueTypeFromJSON,
    ECertificateIssueTypeFromJSONTyped,
    ECertificateIssueTypeToJSON,
} from './ECertificateIssueType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * E-Certificates issue API call details.
 * @export
 * @interface ECertificateGenerationDetailsType
 */
export interface ECertificateGenerationDetailsType {
    /**
     * User defined certificate code.
     * @type {string}
     * @memberof ECertificateGenerationDetailsType
     */
    certificateType?: string;
    /**
     * Hotel to which certificate is attached to.
     * @type {Array<string>}
     * @memberof ECertificateGenerationDetailsType
     */
    hotels?: Array<string>;
    /**
     * 
     * @type {ECertificateIssueType}
     * @memberof ECertificateGenerationDetailsType
     */
    issueType?: ECertificateIssueType;
    /**
     * 
     * @type {ProfileId}
     * @memberof ECertificateGenerationDetailsType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ECertificateIssueSourceType}
     * @memberof ECertificateGenerationDetailsType
     */
    source?: ECertificateIssueSourceType;
}

/**
 * Check if a given object implements the ECertificateGenerationDetailsType interface.
 */
export function instanceOfECertificateGenerationDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateGenerationDetailsTypeFromJSON(json: any): ECertificateGenerationDetailsType {
    return ECertificateGenerationDetailsTypeFromJSONTyped(json, false);
}

export function ECertificateGenerationDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateGenerationDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certificateType': !exists(json, 'certificateType') ? undefined : json['certificateType'],
        'hotels': !exists(json, 'hotels') ? undefined : json['hotels'],
        'issueType': !exists(json, 'issueType') ? undefined : ECertificateIssueTypeFromJSON(json['issueType']),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'source': !exists(json, 'source') ? undefined : ECertificateIssueSourceTypeFromJSON(json['source']),
    };
}

export function ECertificateGenerationDetailsTypeToJSON(value?: ECertificateGenerationDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certificateType': value.certificateType,
        'hotels': value.hotels,
        'issueType': ECertificateIssueTypeToJSON(value.issueType),
        'profileId': ProfileIdToJSON(value.profileId),
        'source': ECertificateIssueSourceTypeToJSON(value.source),
    };
}

