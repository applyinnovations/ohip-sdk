/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ResvRoutingInfoType } from './ResvRoutingInfoType';
/**
 * A comp routing info object
 * @export
 * @interface ResvRoutingInfoListType
 */
export interface ResvRoutingInfoListType extends Array<ResvRoutingInfoType> {
}
/**
 * Check if a given object implements the ResvRoutingInfoListType interface.
 */
export declare function instanceOfResvRoutingInfoListType(value: object): boolean;
export declare function ResvRoutingInfoListTypeFromJSON(json: any): ResvRoutingInfoListType;
export declare function ResvRoutingInfoListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingInfoListType;
export declare function ResvRoutingInfoListTypeToJSON(value?: ResvRoutingInfoListType | null): any;