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
import * as runtime from '../runtime';
import type { Award, Enrollment, MemberInformation, PostEnrollmentRequest, RedeemAwardRequest } from '../models';
export interface GetMembershipDetailsRequest {
    extSystemCode?: string;
    externalProfileId?: string;
    authorization?: string;
    xAppKey?: string;
    operaProfileId?: Array<string>;
    membershipType?: string;
    membershipId?: string;
    hotelId?: string;
    startDate?: Date;
    endDate?: Date;
    mode?: GetMembershipDetailsModeEnum;
    xTransactionId?: string;
    acceptLanguage?: string;
}
export interface PostEnrollmentOperationRequest {
    extSystemCode?: string;
    chainCode?: string;
    authorization?: string;
    xAppKey?: string;
    enrollment?: PostEnrollmentRequest;
    xTransactionId?: string;
    acceptLanguage?: string;
}
export interface RedeemAwardOperationRequest {
    extSystemCode?: string;
    externalProfileId?: string;
    authorization?: string;
    xAppKey?: string;
    award?: RedeemAwardRequest;
    xTransactionId?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ProfileMembershipApi extends runtime.BaseAPI {
    /**
     * Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
     * Get membership information on a profile
     */
    getMembershipDetailsRaw(requestParameters: GetMembershipDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberInformation>>;
    /**
     * Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
     * Get membership information on a profile
     */
    getMembershipDetails(requestParameters: GetMembershipDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberInformation>;
    /**
     * Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
     * Create an Enrollment
     */
    postEnrollmentRaw(requestParameters: PostEnrollmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Enrollment>>;
    /**
     * Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
     * Create an Enrollment
     */
    postEnrollment(requestParameters: PostEnrollmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Enrollment>;
    /**
     * Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
     * Redeem an award
     */
    redeemAwardRaw(requestParameters: RedeemAwardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Award>>;
    /**
     * Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
     * Redeem an award
     */
    redeemAward(requestParameters: RedeemAwardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Award>;
}
/**
 * @export
 */
export declare const GetMembershipDetailsModeEnum: {
    readonly TransactionDate: "TransactionDate";
    readonly StayBeginDate: "StayBeginDate";
    readonly StayEndDate: "StayEndDate";
    readonly PointsCreditDate: "PointsCreditDate";
};
export type GetMembershipDetailsModeEnum = typeof GetMembershipDetailsModeEnum[keyof typeof GetMembershipDetailsModeEnum];
