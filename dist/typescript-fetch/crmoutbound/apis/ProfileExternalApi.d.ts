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
import type { ExternalProfiles, FetchPlayerStatisticsRS, GamingOffers, IataNumberDetails, Profile, ValidateMembershipNumber, ValidatedAddress, ValidatedAddresses } from '../models';
export interface CheckIataNumberRequest {
    iataNumber?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xTransactionId?: string;
    acceptLanguage?: string;
}
export interface DownloadExternalProfileRequest {
    extSystemCode?: string;
    chainCode?: string;
    profileExternalId?: string;
    authorization?: string;
    xAppKey?: string;
    externalDatabaseId?: string;
    hotelId?: string;
    xTransactionId?: string;
    acceptLanguage?: string;
}
export interface GetExternalProfilesRequest {
    extSystemCode?: string;
    chainCode?: string;
    authorization?: string;
    xAppKey?: string;
    externalDatabaseId?: string;
    hotelId?: string;
    profileType?: GetExternalProfilesProfileTypeEnum;
    profileId?: Array<string>;
    profileIdType?: Array<string>;
    name?: string;
    givenName?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    countryCode?: string;
    keyword?: string;
    communication?: string;
    membershipNumber?: string;
    membershipType?: string;
    arNumber?: string;
    birthDate?: Date;
    acceptLanguage?: string;
}
export interface GetGamingOffersRequest {
    membershipNo?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    hotelId?: string;
    startDate?: Date;
    endDate?: Date;
    acceptLanguage?: string;
}
export interface GetPlayerStatisticsRequest {
    profileId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    playerId?: string;
    hotelId?: string;
    reservationId?: string;
    reservationIdContext?: string;
    reservationIdType?: string;
    acceptLanguage?: string;
}
export interface GetValidatedAddressRequest {
    externalAddressId?: string;
    authorization?: string;
    xAppKey?: string;
    timeoutSeconds?: number;
    acceptLanguage?: string;
}
export interface GetValidatedAddressesRequest {
    addressText?: string;
    country?: string;
    authorization?: string;
    xAppKey?: string;
    language?: string;
    timeoutSeconds?: number;
    acceptLanguage?: string;
}
export interface ValidateMembershipNumberRequest {
    chainCode?: string;
    extSystemCode?: string;
    membershipNo?: string;
    membershipType?: string;
    authorization?: string;
    xAppKey?: string;
    hotelId?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ProfileExternalApi extends runtime.BaseAPI {
    /**
     * This API will validate and check an IATA number. <p><strong>OperationId:</strong>checkIataNumber</p>
     * Validate IATA number.
     */
    checkIataNumberRaw(requestParameters: CheckIataNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IataNumberDetails>>;
    /**
     * This API will validate and check an IATA number. <p><strong>OperationId:</strong>checkIataNumber</p>
     * Validate IATA number.
     */
    checkIataNumber(requestParameters: CheckIataNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IataNumberDetails>;
    /**
     * After searching for profiles in an external system using getExternalProfiles, proceed to use this API knowing the external profile ID in the path.  The result will be a new profile created in OPERA. <p><strong>OperationId:</strong>downloadExternalProfile</p>
     * Download a Profile from external system
     */
    downloadExternalProfileRaw(requestParameters: DownloadExternalProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>>;
    /**
     * After searching for profiles in an external system using getExternalProfiles, proceed to use this API knowing the external profile ID in the path.  The result will be a new profile created in OPERA. <p><strong>OperationId:</strong>downloadExternalProfile</p>
     * Download a Profile from external system
     */
    downloadExternalProfile(requestParameters: DownloadExternalProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile>;
    /**
     * Use this API when you want to search for profiles in an external system. The response will include a list of profiles that exist in the external system, based on your search criteria.  For example, you want to see if the external system has a profile for Mr David Smith.  The GET API will send a request to external system, and the response will include a list of any profiles that exist for Mr Davis Smith in that system.  If a profile does exist, and the user would like to \'download\' that profile into OPERA, you would then proceed to use the downlodExternalProfiles API.
     * Retrieve profiles from external system
     */
    getExternalProfilesRaw(requestParameters: GetExternalProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalProfiles>>;
    /**
     * Use this API when you want to search for profiles in an external system. The response will include a list of profiles that exist in the external system, based on your search criteria.  For example, you want to see if the external system has a profile for Mr David Smith.  The GET API will send a request to external system, and the response will include a list of any profiles that exist for Mr Davis Smith in that system.  If a profile does exist, and the user would like to \'download\' that profile into OPERA, you would then proceed to use the downlodExternalProfiles API.
     * Retrieve profiles from external system
     */
    getExternalProfiles(requestParameters: GetExternalProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalProfiles>;
    /**
     * Use this API when you have a guest profile and you want to get the offers available from an external system. <p><strong>OperationId:</strong>getGamingOffers</p>
     * Get offers that can be attached for a profile
     */
    getGamingOffersRaw(requestParameters: GetGamingOffersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GamingOffers>>;
    /**
     * Use this API when you have a guest profile and you want to get the offers available from an external system. <p><strong>OperationId:</strong>getGamingOffers</p>
     * Get offers that can be attached for a profile
     */
    getGamingOffers(requestParameters: GetGamingOffersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GamingOffers>;
    /**
     * Request for the fetch player statistics WS operation <p><strong>OperationId:</strong>getPlayerStatistics</p>
     * Retrieve player statistics
     */
    getPlayerStatisticsRaw(requestParameters: GetPlayerStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchPlayerStatisticsRS>>;
    /**
     * Request for the fetch player statistics WS operation <p><strong>OperationId:</strong>getPlayerStatistics</p>
     * Retrieve player statistics
     */
    getPlayerStatistics(requestParameters: GetPlayerStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchPlayerStatisticsRS>;
    /**
     * Use this API when you want to fetch full address information for a given address Id. <p><strong>OperationId:</strong>getValidatedAddress</p>
     * Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.
     */
    getValidatedAddressRaw(requestParameters: GetValidatedAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ValidatedAddress>>;
    /**
     * Use this API when you want to fetch full address information for a given address Id. <p><strong>OperationId:</strong>getValidatedAddress</p>
     * Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.
     */
    getValidatedAddress(requestParameters: GetValidatedAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ValidatedAddress>;
    /**
     * Use this API when you want to validate address from a third party vendor. The response will be a list of addresses with its address ID based on the search criteria. <p><strong>OperationId:</strong>getValidatedAddresses</p>
     * Retrive valid addresses from a third party vendor.
     */
    getValidatedAddressesRaw(requestParameters: GetValidatedAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ValidatedAddresses>>;
    /**
     * Use this API when you want to validate address from a third party vendor. The response will be a list of addresses with its address ID based on the search criteria. <p><strong>OperationId:</strong>getValidatedAddresses</p>
     * Retrive valid addresses from a third party vendor.
     */
    getValidatedAddresses(requestParameters: GetValidatedAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ValidatedAddresses>;
    /**
     * Use this API when you want to validate membership numbers from external system. <p><strong>OperationId:</strong>validateMembershipNumber</p>
     * Validate Membership Number attached to a membership
     */
    validateMembershipNumberRaw(requestParameters: ValidateMembershipNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ValidateMembershipNumber>>;
    /**
     * Use this API when you want to validate membership numbers from external system. <p><strong>OperationId:</strong>validateMembershipNumber</p>
     * Validate Membership Number attached to a membership
     */
    validateMembershipNumber(requestParameters: ValidateMembershipNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ValidateMembershipNumber>;
}
/**
 * @export
 */
export declare const GetExternalProfilesProfileTypeEnum: {
    readonly Guest: "Guest";
    readonly Agent: "Agent";
    readonly Company: "Company";
    readonly Group: "Group";
    readonly Source: "Source";
    readonly Employee: "Employee";
    readonly Hotel: "Hotel";
    readonly Vendor: "Vendor";
    readonly Contact: "Contact";
    readonly Purge: "Purge";
    readonly BusinessHeader: "BusinessHeader";
    readonly BillingAccount: "BillingAccount";
    readonly Activity: "Activity";
    readonly Potential: "Potential";
    readonly Account: "Account";
};
export type GetExternalProfilesProfileTypeEnum = typeof GetExternalProfilesProfileTypeEnum[keyof typeof GetExternalProfilesProfileTypeEnum];
