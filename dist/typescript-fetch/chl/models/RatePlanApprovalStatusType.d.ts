/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates that the Rate Plan is approved for selling.
 * @export
 */
export declare const RatePlanApprovalStatusType: {
    readonly NewUnapproved: "NewUnapproved";
    readonly ChangedUnapproved: "ChangedUnapproved";
    readonly Rejected: "Rejected";
    readonly Approved: "Approved";
};
export type RatePlanApprovalStatusType = typeof RatePlanApprovalStatusType[keyof typeof RatePlanApprovalStatusType];
export declare function RatePlanApprovalStatusTypeFromJSON(json: any): RatePlanApprovalStatusType;
export declare function RatePlanApprovalStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanApprovalStatusType;
export declare function RatePlanApprovalStatusTypeToJSON(value?: RatePlanApprovalStatusType | null): any;
