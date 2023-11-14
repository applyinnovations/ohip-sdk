/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { ChangeDeliveryMethods, ChangeInterfaceRight, ChangeUDFMapping, ChangedDeliveryMethods, ChangedInterfaceRight, ChangedUDFMapping, CreateDeliveryMethods, CreatePublishers, FetchedDeliveryMethods, FetchedExternalDatabaseAvailableProperties, FetchedHotelInterfaceControllerRegistry, FetchedHotelInterfaceErrors, FetchedHotelInterfaceFailedMessages, FetchedHotelInterfaceSchemas, FetchedHotelInterfaces, FetchedInterfaceRights, FetchedPublishers, FetchedUDFMappings, Status } from '../models/index';
export interface DeleteDeliveryMethodsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    type?: DeleteDeliveryMethodsTypeEnum;
    options?: Set<DeleteDeliveryMethodsOptionsEnum>;
    configurationId?: Array<number>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteHotelInterfaceRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    logo?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteInterfaceRightRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    id?: string;
    idExtension?: number;
    idContext?: string;
    type?: string;
    right?: number;
    code?: string;
    description?: string;
    interfaceRightDescription?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeletePublisherRequest {
    hotelId?: string;
    externalSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    subscriberHotelId?: string;
    code?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetDeliveryMethodsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    croCode?: string;
    usages?: Set<GetDeliveryMethodsUsagesEnum>;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetExternalDatabaseAvailablePropertiesRequest {
    databaseId?: string;
    interfaceId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    includeInactive?: boolean;
    interfaceCodes?: Array<string>;
    hotelIds?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetHotelInterfaceControllerRegistryRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    machine?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetHotelInterfaceErrorsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    limit?: number;
    offset?: number;
    hotelIds?: Array<string>;
    interfaceTypes?: Set<GetHotelInterfaceErrorsInterfaceTypesEnum>;
    logoCodes?: Array<string>;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetHotelInterfaceFailedMessagesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    limit?: number;
    offset?: number;
    hotelIds?: Array<string>;
    interfaceTypes?: Set<GetHotelInterfaceFailedMessagesInterfaceTypesEnum>;
    logoCodes?: Array<string>;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetHotelInterfaceSchemasRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    limit?: number;
    offset?: number;
    hotelIds?: Array<string>;
    interfaceTypes?: Set<GetHotelInterfaceSchemasInterfaceTypesEnum>;
    logoCodes?: Array<string>;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetHotelInterfacesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelIds?: Array<string>;
    interfaceTypes?: Set<GetHotelInterfacesInterfaceTypesEnum>;
    logosCodes?: Array<string>;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetInterfaceRightsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    id?: string;
    idExtension?: number;
    idContext?: string;
    type?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetPublishersRequest {
    externalSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetUDFMappingsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    type?: string;
    uDFName?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostDeliveryMethodsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    createDeliveryMethods?: CreateDeliveryMethods;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostPublishersRequest {
    hotelId?: string;
    externalSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    createPublishers?: CreatePublishers;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutDeliveryMethodsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    changeDeliveryMethods?: ChangeDeliveryMethods;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutInterfaceRightRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    changeInterfaceRight?: ChangeInterfaceRight;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutUDFMappingRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    changeUDFMapping?: ChangeUDFMapping;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ExternalSystemsConfigApi extends runtime.BaseAPI {
    /**
     *  <p><strong>OperationId:</strong>deleteDeliveryMethods</p>
     * Operation to remove delivery methods.
     */
    deleteDeliveryMethodsRaw(requestParameters: DeleteDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>deleteDeliveryMethods</p>
     * Operation to remove delivery methods.
     */
    deleteDeliveryMethods(requestParameters: DeleteDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>deleteHotelInterface</p>
     * Operation to remove hotel interface.
     */
    deleteHotelInterfaceRaw(requestParameters: DeleteHotelInterfaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>deleteHotelInterface</p>
     * Operation to remove hotel interface.
     */
    deleteHotelInterface(requestParameters: DeleteHotelInterfaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>deleteInterfaceRight</p>
     * Operation to remove interface right.
     */
    deleteInterfaceRightRaw(requestParameters: DeleteInterfaceRightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>deleteInterfaceRight</p>
     * Operation to remove interface right.
     */
    deleteInterfaceRight(requestParameters: DeleteInterfaceRightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>deletePublisher</p>
     * Operation to remove publisher.
     */
    deletePublisherRaw(requestParameters: DeletePublisherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>deletePublisher</p>
     * Operation to remove publisher.
     */
    deletePublisher(requestParameters: DeletePublisherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>getDeliveryMethods</p>
     * Operation to fetch delivery methods.
     */
    getDeliveryMethodsRaw(requestParameters: GetDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedDeliveryMethods>>;
    /**
     *  <p><strong>OperationId:</strong>getDeliveryMethods</p>
     * Operation to fetch delivery methods.
     */
    getDeliveryMethods(requestParameters: GetDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedDeliveryMethods>;
    /**
     *  <p><strong>OperationId:</strong>getExternalDatabaseAvailableProperties</p>
     * Operation to fetch external database available properties.
     */
    getExternalDatabaseAvailablePropertiesRaw(requestParameters: GetExternalDatabaseAvailablePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedExternalDatabaseAvailableProperties>>;
    /**
     *  <p><strong>OperationId:</strong>getExternalDatabaseAvailableProperties</p>
     * Operation to fetch external database available properties.
     */
    getExternalDatabaseAvailableProperties(requestParameters: GetExternalDatabaseAvailablePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedExternalDatabaseAvailableProperties>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceControllerRegistry</p>
     * Operation to fetch hotel interface controller registry.
     */
    getHotelInterfaceControllerRegistryRaw(requestParameters: GetHotelInterfaceControllerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedHotelInterfaceControllerRegistry>>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceControllerRegistry</p>
     * Operation to fetch hotel interface controller registry.
     */
    getHotelInterfaceControllerRegistry(requestParameters: GetHotelInterfaceControllerRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedHotelInterfaceControllerRegistry>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceErrors</p>
     * Operation to fetch hotel interface errors.
     */
    getHotelInterfaceErrorsRaw(requestParameters: GetHotelInterfaceErrorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedHotelInterfaceErrors>>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceErrors</p>
     * Operation to fetch hotel interface errors.
     */
    getHotelInterfaceErrors(requestParameters: GetHotelInterfaceErrorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedHotelInterfaceErrors>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceFailedMessages</p>
     * Operation to fetch hotel interface failed messages.
     */
    getHotelInterfaceFailedMessagesRaw(requestParameters: GetHotelInterfaceFailedMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedHotelInterfaceFailedMessages>>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceFailedMessages</p>
     * Operation to fetch hotel interface failed messages.
     */
    getHotelInterfaceFailedMessages(requestParameters: GetHotelInterfaceFailedMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedHotelInterfaceFailedMessages>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceSchemas</p>
     * Operation to fetch hotel interface schemas.
     */
    getHotelInterfaceSchemasRaw(requestParameters: GetHotelInterfaceSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedHotelInterfaceSchemas>>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaceSchemas</p>
     * Operation to fetch hotel interface schemas.
     */
    getHotelInterfaceSchemas(requestParameters: GetHotelInterfaceSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedHotelInterfaceSchemas>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaces</p>
     * Operation to fetch hotel interfaces.
     */
    getHotelInterfacesRaw(requestParameters: GetHotelInterfacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedHotelInterfaces>>;
    /**
     *  <p><strong>OperationId:</strong>getHotelInterfaces</p>
     * Operation to fetch hotel interfaces.
     */
    getHotelInterfaces(requestParameters: GetHotelInterfacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedHotelInterfaces>;
    /**
     *  <p><strong>OperationId:</strong>getInterfaceRights</p>
     * Operation to fetch interface rights.
     */
    getInterfaceRightsRaw(requestParameters: GetInterfaceRightsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedInterfaceRights>>;
    /**
     *  <p><strong>OperationId:</strong>getInterfaceRights</p>
     * Operation to fetch interface rights.
     */
    getInterfaceRights(requestParameters: GetInterfaceRightsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedInterfaceRights>;
    /**
     *  <p><strong>OperationId:</strong>getPublishers</p>
     * Operation to fetch publishers.
     */
    getPublishersRaw(requestParameters: GetPublishersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedPublishers>>;
    /**
     *  <p><strong>OperationId:</strong>getPublishers</p>
     * Operation to fetch publishers.
     */
    getPublishers(requestParameters: GetPublishersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedPublishers>;
    /**
     * Operation to send a response to the Look-up of UDFs. <p><strong>OperationId:</strong>getUDFMappings</p>
     * Operation to send a response to the Look up of UDFs.
     */
    getUDFMappingsRaw(requestParameters: GetUDFMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchedUDFMappings>>;
    /**
     * Operation to send a response to the Look-up of UDFs. <p><strong>OperationId:</strong>getUDFMappings</p>
     * Operation to send a response to the Look up of UDFs.
     */
    getUDFMappings(requestParameters: GetUDFMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchedUDFMappings>;
    /**
     *  <p><strong>OperationId:</strong>postDeliveryMethods</p>
     * Operation to create delivery methods.
     */
    postDeliveryMethodsRaw(requestParameters: PostDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>postDeliveryMethods</p>
     * Operation to create delivery methods.
     */
    postDeliveryMethods(requestParameters: PostDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>postPublishers</p>
     * Operation to create publishers.
     */
    postPublishersRaw(requestParameters: PostPublishersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     *  <p><strong>OperationId:</strong>postPublishers</p>
     * Operation to create publishers.
     */
    postPublishers(requestParameters: PostPublishersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     *  <p><strong>OperationId:</strong>putDeliveryMethods</p>
     * Operation to change delivery methods.
     */
    putDeliveryMethodsRaw(requestParameters: PutDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangedDeliveryMethods>>;
    /**
     *  <p><strong>OperationId:</strong>putDeliveryMethods</p>
     * Operation to change delivery methods.
     */
    putDeliveryMethods(requestParameters: PutDeliveryMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangedDeliveryMethods>;
    /**
     *  <p><strong>OperationId:</strong>putInterfaceRight</p>
     * Operation to change interface right.
     */
    putInterfaceRightRaw(requestParameters: PutInterfaceRightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangedInterfaceRight>>;
    /**
     *  <p><strong>OperationId:</strong>putInterfaceRight</p>
     * Operation to change interface right.
     */
    putInterfaceRight(requestParameters: PutInterfaceRightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangedInterfaceRight>;
    /**
     * Operation to send a response to the Change in UDF. <p><strong>OperationId:</strong>putUDFMapping</p>
     * Operation to send a response to the Change in UDF.
     */
    putUDFMappingRaw(requestParameters: PutUDFMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangedUDFMapping>>;
    /**
     * Operation to send a response to the Change in UDF. <p><strong>OperationId:</strong>putUDFMapping</p>
     * Operation to send a response to the Change in UDF.
     */
    putUDFMapping(requestParameters: PutUDFMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangedUDFMapping>;
}
/**
 * @export
 */
export declare const DeleteDeliveryMethodsTypeEnum: {
    readonly General: "General";
    readonly QueueReservation: "QueueReservation";
    readonly Confirmation: "Confirmation";
    readonly GuestMessage: "GuestMessage";
    readonly BillingFolio: "BillingFolio";
    readonly QueueRush: "QueueRush";
    readonly Ar: "AR";
    readonly OtherFolio: "OtherFolio";
};
export type DeleteDeliveryMethodsTypeEnum = typeof DeleteDeliveryMethodsTypeEnum[keyof typeof DeleteDeliveryMethodsTypeEnum];
/**
 * @export
 */
export declare const DeleteDeliveryMethodsOptionsEnum: {
    readonly Email: "Email";
    readonly Fax: "Fax";
    readonly TextMessage: "TextMessage";
    readonly Sftp: "Sftp";
};
export type DeleteDeliveryMethodsOptionsEnum = typeof DeleteDeliveryMethodsOptionsEnum[keyof typeof DeleteDeliveryMethodsOptionsEnum];
/**
 * @export
 */
export declare const GetDeliveryMethodsUsagesEnum: {
    readonly General: "General";
    readonly QueueReservation: "QueueReservation";
    readonly Confirmation: "Confirmation";
    readonly GuestMessage: "GuestMessage";
    readonly BillingFolio: "BillingFolio";
    readonly QueueRush: "QueueRush";
    readonly Ar: "AR";
    readonly OtherFolio: "OtherFolio";
};
export type GetDeliveryMethodsUsagesEnum = typeof GetDeliveryMethodsUsagesEnum[keyof typeof GetDeliveryMethodsUsagesEnum];
/**
 * @export
 */
export declare const GetHotelInterfaceErrorsInterfaceTypesEnum: {
    readonly Bms: "Bms";
    readonly Cas: "Cas";
    readonly Ccw: "Ccw";
    readonly Dls: "Dls";
    readonly Eft: "Eft";
    readonly Exp: "Exp";
    readonly Mak: "Mak";
    readonly Mbs: "Mbs";
    readonly Msc: "Msc";
    readonly Pbx: "Pbx";
    readonly Pos: "Pos";
    readonly Svs: "Svs";
    readonly Tik: "Tik";
    readonly Vid: "Vid";
    readonly Vms: "Vms";
    readonly Www: "Www";
    readonly Xml: "Xml";
};
export type GetHotelInterfaceErrorsInterfaceTypesEnum = typeof GetHotelInterfaceErrorsInterfaceTypesEnum[keyof typeof GetHotelInterfaceErrorsInterfaceTypesEnum];
/**
 * @export
 */
export declare const GetHotelInterfaceFailedMessagesInterfaceTypesEnum: {
    readonly Bms: "Bms";
    readonly Cas: "Cas";
    readonly Ccw: "Ccw";
    readonly Dls: "Dls";
    readonly Eft: "Eft";
    readonly Exp: "Exp";
    readonly Mak: "Mak";
    readonly Mbs: "Mbs";
    readonly Msc: "Msc";
    readonly Pbx: "Pbx";
    readonly Pos: "Pos";
    readonly Svs: "Svs";
    readonly Tik: "Tik";
    readonly Vid: "Vid";
    readonly Vms: "Vms";
    readonly Www: "Www";
    readonly Xml: "Xml";
};
export type GetHotelInterfaceFailedMessagesInterfaceTypesEnum = typeof GetHotelInterfaceFailedMessagesInterfaceTypesEnum[keyof typeof GetHotelInterfaceFailedMessagesInterfaceTypesEnum];
/**
 * @export
 */
export declare const GetHotelInterfaceSchemasInterfaceTypesEnum: {
    readonly Bms: "Bms";
    readonly Cas: "Cas";
    readonly Ccw: "Ccw";
    readonly Dls: "Dls";
    readonly Eft: "Eft";
    readonly Exp: "Exp";
    readonly Mak: "Mak";
    readonly Mbs: "Mbs";
    readonly Msc: "Msc";
    readonly Pbx: "Pbx";
    readonly Pos: "Pos";
    readonly Svs: "Svs";
    readonly Tik: "Tik";
    readonly Vid: "Vid";
    readonly Vms: "Vms";
    readonly Www: "Www";
    readonly Xml: "Xml";
};
export type GetHotelInterfaceSchemasInterfaceTypesEnum = typeof GetHotelInterfaceSchemasInterfaceTypesEnum[keyof typeof GetHotelInterfaceSchemasInterfaceTypesEnum];
/**
 * @export
 */
export declare const GetHotelInterfacesInterfaceTypesEnum: {
    readonly Bms: "Bms";
    readonly Cas: "Cas";
    readonly Ccw: "Ccw";
    readonly Dls: "Dls";
    readonly Eft: "Eft";
    readonly Exp: "Exp";
    readonly Mak: "Mak";
    readonly Mbs: "Mbs";
    readonly Msc: "Msc";
    readonly Pbx: "Pbx";
    readonly Pos: "Pos";
    readonly Svs: "Svs";
    readonly Tik: "Tik";
    readonly Vid: "Vid";
    readonly Vms: "Vms";
    readonly Www: "Www";
    readonly Xml: "Xml";
};
export type GetHotelInterfacesInterfaceTypesEnum = typeof GetHotelInterfacesInterfaceTypesEnum[keyof typeof GetHotelInterfacesInterfaceTypesEnum];
