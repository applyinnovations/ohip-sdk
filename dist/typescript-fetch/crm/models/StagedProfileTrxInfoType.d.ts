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
import type { ArticleInfoType } from './ArticleInfoType';
/**
 * Transaction codes info.
 * @export
 * @interface StagedProfileTrxInfoType
 */
export interface StagedProfileTrxInfoType {
    /**
     * The List of Articles defined for this transaction code, when using the Articles functionality.
     * @type {Array<ArticleInfoType>}
     * @memberof StagedProfileTrxInfoType
     */
    articles?: Array<ArticleInfoType>;
    /**
     * Transaction codes info.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    description?: string;
    /**
     * The error in transaction code information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    errorDescription?: string;
    /**
     * Hotel context of the Transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    id?: string;
    /**
     * Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code.
     * @type {boolean}
     * @memberof StagedProfileTrxInfoType
     */
    printTrxReceipt?: boolean;
    /**
     * This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer.
     * @type {number}
     * @memberof StagedProfileTrxInfoType
     */
    routingInstructionsId?: number;
    /**
     * Unique identifier for the Transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    transactionCode?: string;
    /**
     * Category of the transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    transactionGroup?: string;
    /**
     * Sub category of the transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    transactionSubGroup?: string;
    /**
     * Contains service type for transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    trxServiceType?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    type?: string;
    /**
     * Unique Universal product code of the transaction code.
     * @type {string}
     * @memberof StagedProfileTrxInfoType
     */
    universalProductCode?: string;
}
/**
 * Check if a given object implements the StagedProfileTrxInfoType interface.
 */
export declare function instanceOfStagedProfileTrxInfoType(value: object): boolean;
export declare function StagedProfileTrxInfoTypeFromJSON(json: any): StagedProfileTrxInfoType;
export declare function StagedProfileTrxInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileTrxInfoType;
export declare function StagedProfileTrxInfoTypeToJSON(value?: StagedProfileTrxInfoType | null): any;
