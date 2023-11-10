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
/**
 * Represents the way a membership type has to be processed.
 * @export
 * @interface MembershipHandlingType
 */
export interface MembershipHandlingType {
    /**
     * Indicates whether to perform profile merge or not.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    allowCardNumberOverride?: boolean;
    /**
     * Prevent profile alternate name change.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    alternateNameProtected?: boolean;
    /**
     * Automatically generate the reference number for the primary membership.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    autoGenerateReferenceNo?: boolean;
    /**
     * Automatically populate number from name.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    autoPopulateNumberFromName?: boolean;
    /**
     * Represents Membership status.This status will be assigned to Guest's profile with membership type.
     * @type {string}
     * @memberof MembershipHandlingType
     */
    defaultMembershipStatus?: string;
    /**
     * Indicates whether Enrollment Code required of not.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    enrollmentCodeRequired?: boolean;
    /**
     * Indicates database for external system (if applicable).
     * @type {string}
     * @memberof MembershipHandlingType
     */
    externalDatabase?: string;
    /**
     * True if you wish to be able to select this membership type when creating an export file for fulfillment.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    fulfillment?: boolean;
    /**
     * Indicates whether to include membership level for validation or not , when profile membership information is send from External System to ORS/OCIS.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    levelRequired?: boolean;
    /**
     * Move the membership promotions to the active membership.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    moveMemPromotions?: boolean;
    /**
     * Membership card name using the alternate name.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    nameOnCardFromAltName?: boolean;
    /**
     * Prevent profile name change.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    nameProtected?: boolean;
    /**
     * Indicates whether to store discard membership number or not.Membership Number will be discarded during profile merge.
     * @type {boolean}
     * @memberof MembershipHandlingType
     */
    saveCardNumberHistory?: boolean;
    /**
     * Represents Membership Statement UDF Set. Selected Statement UDF template will be attached to Membership.
     * @type {string}
     * @memberof MembershipHandlingType
     */
    statementUDFSet?: string;
}
/**
 * Check if a given object implements the MembershipHandlingType interface.
 */
export declare function instanceOfMembershipHandlingType(value: object): boolean;
export declare function MembershipHandlingTypeFromJSON(json: any): MembershipHandlingType;
export declare function MembershipHandlingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipHandlingType;
export declare function MembershipHandlingTypeToJSON(value?: MembershipHandlingType | null): any;
