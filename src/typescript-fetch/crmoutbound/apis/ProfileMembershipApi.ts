/* tslint:disable */
/* eslint-disable */
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
import type {
  Award,
  Enrollment,
  ExceptionDetailType,
  MemberInformation,
} from '../models/index';
import {
    AwardFromJSON,
    AwardToJSON,
    EnrollmentFromJSON,
    EnrollmentToJSON,
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    MemberInformationFromJSON,
    MemberInformationToJSON,
} from '../models/index';

export interface GetMembershipDetailsRequest {
    extSystemCode: string;
    externalProfileId: string;
    authorization: string;
    xAppKey: string;
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

export interface PostEnrollmentRequest {
    extSystemCode: string;
    chainCode: string;
    authorization: string;
    xAppKey: string;
    enrollment: Enrollment;
    xTransactionId?: string;
    acceptLanguage?: string;
}

export interface RedeemAwardRequest {
    extSystemCode: string;
    externalProfileId: string;
    authorization: string;
    xAppKey: string;
    award: Award;
    xTransactionId?: string;
    acceptLanguage?: string;
}

/**
 * 
 */
export class ProfileMembershipApi extends runtime.BaseAPI {

    /**
     * Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
     * Get membership information on a profile
     */
    async getMembershipDetailsRaw(requestParameters: GetMembershipDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberInformation>> {
        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling getMembershipDetails.');
        }

        if (requestParameters.externalProfileId === null || requestParameters.externalProfileId === undefined) {
            throw new runtime.RequiredError('externalProfileId','Required parameter requestParameters.externalProfileId was null or undefined when calling getMembershipDetails.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling getMembershipDetails.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling getMembershipDetails.');
        }

        const queryParameters: any = {};

        if (requestParameters.operaProfileId) {
            queryParameters['operaProfileId'] = requestParameters.operaProfileId;
        }

        if (requestParameters.membershipType !== undefined) {
            queryParameters['membershipType'] = requestParameters.membershipType;
        }

        if (requestParameters.membershipId !== undefined) {
            queryParameters['membershipId'] = requestParameters.membershipId;
        }

        if (requestParameters.hotelId !== undefined) {
            queryParameters['hotelId'] = requestParameters.hotelId;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = (requestParameters.startDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = (requestParameters.endDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xTransactionId !== undefined && requestParameters.xTransactionId !== null) {
            headerParameters['x-transactionId'] = String(requestParameters.xTransactionId);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/profiles/{externalProfileId}/memberships`.replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"externalProfileId"}}`, encodeURIComponent(String(requestParameters.externalProfileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberInformationFromJSON(jsonValue));
    }

    /**
     * Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
     * Get membership information on a profile
     */
    async getMembershipDetails(requestParameters: GetMembershipDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberInformation> {
        const response = await this.getMembershipDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
     * Create an Enrollment
     */
    async postEnrollmentRaw(requestParameters: PostEnrollmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Enrollment>> {
        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling postEnrollment.');
        }

        if (requestParameters.chainCode === null || requestParameters.chainCode === undefined) {
            throw new runtime.RequiredError('chainCode','Required parameter requestParameters.chainCode was null or undefined when calling postEnrollment.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling postEnrollment.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling postEnrollment.');
        }

        if (requestParameters.enrollment === null || requestParameters.enrollment === undefined) {
            throw new runtime.RequiredError('enrollment','Required parameter requestParameters.enrollment was null or undefined when calling postEnrollment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xTransactionId !== undefined && requestParameters.xTransactionId !== null) {
            headerParameters['x-transactionId'] = String(requestParameters.xTransactionId);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/chains/{chainCode}/enrollments`.replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"chainCode"}}`, encodeURIComponent(String(requestParameters.chainCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnrollmentToJSON(requestParameters.enrollment),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnrollmentFromJSON(jsonValue));
    }

    /**
     * Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
     * Create an Enrollment
     */
    async postEnrollment(requestParameters: PostEnrollmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Enrollment> {
        const response = await this.postEnrollmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
     * Redeem an award
     */
    async redeemAwardRaw(requestParameters: RedeemAwardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Award>> {
        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling redeemAward.');
        }

        if (requestParameters.externalProfileId === null || requestParameters.externalProfileId === undefined) {
            throw new runtime.RequiredError('externalProfileId','Required parameter requestParameters.externalProfileId was null or undefined when calling redeemAward.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling redeemAward.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling redeemAward.');
        }

        if (requestParameters.award === null || requestParameters.award === undefined) {
            throw new runtime.RequiredError('award','Required parameter requestParameters.award was null or undefined when calling redeemAward.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xTransactionId !== undefined && requestParameters.xTransactionId !== null) {
            headerParameters['x-transactionId'] = String(requestParameters.xTransactionId);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/profiles/{externalProfileId}/profileAwards`.replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"externalProfileId"}}`, encodeURIComponent(String(requestParameters.externalProfileId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AwardToJSON(requestParameters.award),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AwardFromJSON(jsonValue));
    }

    /**
     * Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
     * Redeem an award
     */
    async redeemAward(requestParameters: RedeemAwardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Award> {
        const response = await this.redeemAwardRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetMembershipDetailsModeEnum = {
    TransactionDate: 'TransactionDate',
    StayBeginDate: 'StayBeginDate',
    StayEndDate: 'StayEndDate',
    PointsCreditDate: 'PointsCreditDate'
} as const;
export type GetMembershipDetailsModeEnum = typeof GetMembershipDetailsModeEnum[keyof typeof GetMembershipDetailsModeEnum];