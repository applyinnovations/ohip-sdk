/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MultipleRoomsType } from './MultipleRoomsType';
/**
 * Criteria for detecting exceptions in points calculation
 * @export
 * @interface AwardsExceptionCriteriaType
 */
export interface AwardsExceptionCriteriaType {
    /**
     * Cross Membership Back to Back Stays
     * @type {boolean}
     * @memberof AwardsExceptionCriteriaType
     */
    bBCrossMembership?: boolean;
    /**
     * Back to back stay at a Single Group
     * @type {boolean}
     * @memberof AwardsExceptionCriteriaType
     */
    bBSingleGroup?: boolean;
    /**
     * Back to Back stay at a Single Property
     * @type {boolean}
     * @memberof AwardsExceptionCriteriaType
     */
    bBSingleProperty?: boolean;
    /**
     * Number of days while awaiting an external accept/reject response file.
     * @type {number}
     * @memberof AwardsExceptionCriteriaType
     */
    externalProcessingException?: number;
    /**
     *
     * @type {MultipleRoomsType}
     * @memberof AwardsExceptionCriteriaType
     */
    multipleRooms?: MultipleRoomsType;
}
/**
 * Check if a given object implements the AwardsExceptionCriteriaType interface.
 */
export declare function instanceOfAwardsExceptionCriteriaType(value: object): boolean;
export declare function AwardsExceptionCriteriaTypeFromJSON(json: any): AwardsExceptionCriteriaType;
export declare function AwardsExceptionCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardsExceptionCriteriaType;
export declare function AwardsExceptionCriteriaTypeToJSON(value?: AwardsExceptionCriteriaType | null): any;
