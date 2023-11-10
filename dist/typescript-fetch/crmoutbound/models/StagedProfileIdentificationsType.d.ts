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
import type { IdentificationType } from './IdentificationType';
/**
 * Information on the identification of the customer.
 * @export
 * @interface StagedProfileIdentificationsType
 */
export interface StagedProfileIdentificationsType {
    /**
     *
     * @type {IdentificationType}
     * @memberof StagedProfileIdentificationsType
     */
    identification?: IdentificationType;
    /**
     * The error in negotiated rate information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileIdentificationsType
     */
    errorDescription?: string;
    /**
     * Hotel code to which the document belongs.
     * @type {string}
     * @memberof StagedProfileIdentificationsType
     */
    documentResort?: string;
    /**
     * The date when the record was inactivated.
     * @type {Date}
     * @memberof StagedProfileIdentificationsType
     */
    inactiveDate?: Date;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileIdentificationsType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileIdentificationsType
     */
    type?: string;
}
/**
 * Check if a given object implements the StagedProfileIdentificationsType interface.
 */
export declare function instanceOfStagedProfileIdentificationsType(value: object): boolean;
export declare function StagedProfileIdentificationsTypeFromJSON(json: any): StagedProfileIdentificationsType;
export declare function StagedProfileIdentificationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileIdentificationsType;
export declare function StagedProfileIdentificationsTypeToJSON(value?: StagedProfileIdentificationsType | null): any;
