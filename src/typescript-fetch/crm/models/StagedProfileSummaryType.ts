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
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';
import type { StagedProfileStatus } from './StagedProfileStatus';
import {
    StagedProfileStatusFromJSON,
    StagedProfileStatusFromJSONTyped,
    StagedProfileStatusToJSON,
} from './StagedProfileStatus';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Basic information about staged profile.
 * @export
 * @interface StagedProfileSummaryType
 */
export interface StagedProfileSummaryType {
    /**
     * 
     * @type {CountryNameType}
     * @memberof StagedProfileSummaryType
     */
    country?: CountryNameType;
    /**
     * Hotel code associated with the staged profile.
     * @type {string}
     * @memberof StagedProfileSummaryType
     */
    hotelId?: string;
    /**
     * The date on which the staged profile has been received.
     * @type {string}
     * @memberof StagedProfileSummaryType
     */
    importDate?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof StagedProfileSummaryType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {ProfileNameType}
     * @memberof StagedProfileSummaryType
     */
    profileName?: ProfileNameType;
    /**
     * Type of the staged profile.
     * @type {string}
     * @memberof StagedProfileSummaryType
     */
    profileType?: string;
    /**
     * The region of the staged profile.
     * @type {string}
     * @memberof StagedProfileSummaryType
     */
    region?: string;
    /**
     * 
     * @type {StagedProfileStatus}
     * @memberof StagedProfileSummaryType
     */
    stageStatus?: StagedProfileStatus;
}

/**
 * Check if a given object implements the StagedProfileSummaryType interface.
 */
export function instanceOfStagedProfileSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileSummaryTypeFromJSON(json: any): StagedProfileSummaryType {
    return StagedProfileSummaryTypeFromJSONTyped(json, false);
}

export function StagedProfileSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': !exists(json, 'country') ? undefined : CountryNameTypeFromJSON(json['country']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'importDate': !exists(json, 'importDate') ? undefined : json['importDate'],
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'profileName': !exists(json, 'profileName') ? undefined : ProfileNameTypeFromJSON(json['profileName']),
        'profileType': !exists(json, 'profileType') ? undefined : json['profileType'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'stageStatus': !exists(json, 'stageStatus') ? undefined : StagedProfileStatusFromJSON(json['stageStatus']),
    };
}

export function StagedProfileSummaryTypeToJSON(value?: StagedProfileSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': CountryNameTypeToJSON(value.country),
        'hotelId': value.hotelId,
        'importDate': value.importDate,
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'profileName': ProfileNameTypeToJSON(value.profileName),
        'profileType': value.profileType,
        'region': value.region,
        'stageStatus': StagedProfileStatusToJSON(value.stageStatus),
    };
}

