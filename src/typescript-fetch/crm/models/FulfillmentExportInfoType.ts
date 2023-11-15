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
import type { ExportLogsDeliveryStatusType } from './ExportLogsDeliveryStatusType';
import {
    ExportLogsDeliveryStatusTypeFromJSON,
    ExportLogsDeliveryStatusTypeFromJSONTyped,
    ExportLogsDeliveryStatusTypeToJSON,
} from './ExportLogsDeliveryStatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * This type holds the export log information for the membership fulfillment record.
 * @export
 * @interface FulfillmentExportInfoType
 */
export interface FulfillmentExportInfoType {
    /**
     * 
     * @type {ExportLogsDeliveryStatusType}
     * @memberof FulfillmentExportInfoType
     */
    deliveryStatus?: ExportLogsDeliveryStatusType;
    /**
     * To exclude the extract record from membership exports. Once the membership export has run, this check box will be grayed out and the extract batch Id will be populated in the Extract Batch Id read-only field.
     * @type {boolean}
     * @memberof FulfillmentExportInfoType
     */
    excludeExtract?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof FulfillmentExportInfoType
     */
    extractBatchId?: UniqueIDType;
    /**
     * ExtractCode of the membership fulfillment export logs.
     * @type {string}
     * @memberof FulfillmentExportInfoType
     */
    extractCode?: string;
    /**
     * ExtractDate of the membership fulfillment export logs.
     * @type {string}
     * @memberof FulfillmentExportInfoType
     */
    extractDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof FulfillmentExportInfoType
     */
    extractId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof FulfillmentExportInfoType
     */
    extractLogId?: UniqueIDType;
    /**
     * The card number for the guest membership.
     * @type {string}
     * @memberof FulfillmentExportInfoType
     */
    membershipCard?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof FulfillmentExportInfoType
     */
    membershipId?: UniqueIDType;
}

/**
 * Check if a given object implements the FulfillmentExportInfoType interface.
 */
export function instanceOfFulfillmentExportInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentExportInfoTypeFromJSON(json: any): FulfillmentExportInfoType {
    return FulfillmentExportInfoTypeFromJSONTyped(json, false);
}

export function FulfillmentExportInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentExportInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryStatus': !exists(json, 'deliveryStatus') ? undefined : ExportLogsDeliveryStatusTypeFromJSON(json['deliveryStatus']),
        'excludeExtract': !exists(json, 'excludeExtract') ? undefined : json['excludeExtract'],
        'extractBatchId': !exists(json, 'extractBatchId') ? undefined : UniqueIDTypeFromJSON(json['extractBatchId']),
        'extractCode': !exists(json, 'extractCode') ? undefined : json['extractCode'],
        'extractDate': !exists(json, 'extractDate') ? undefined : json['extractDate'],
        'extractId': !exists(json, 'extractId') ? undefined : UniqueIDTypeFromJSON(json['extractId']),
        'extractLogId': !exists(json, 'extractLogId') ? undefined : UniqueIDTypeFromJSON(json['extractLogId']),
        'membershipCard': !exists(json, 'membershipCard') ? undefined : json['membershipCard'],
        'membershipId': !exists(json, 'membershipId') ? undefined : UniqueIDTypeFromJSON(json['membershipId']),
    };
}

export function FulfillmentExportInfoTypeToJSON(value?: FulfillmentExportInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveryStatus': ExportLogsDeliveryStatusTypeToJSON(value.deliveryStatus),
        'excludeExtract': value.excludeExtract,
        'extractBatchId': UniqueIDTypeToJSON(value.extractBatchId),
        'extractCode': value.extractCode,
        'extractDate': value.extractDate,
        'extractId': UniqueIDTypeToJSON(value.extractId),
        'extractLogId': UniqueIDTypeToJSON(value.extractLogId),
        'membershipCard': value.membershipCard,
        'membershipId': UniqueIDTypeToJSON(value.membershipId),
    };
}

