/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing existing Yield Market Types.
 * @export
 * @interface YieldMarketTypesToBeChanged
 */
export interface YieldMarketTypesToBeChanged {
    /**
     * Yield Market Code.
     * @type {string}
     * @memberof YieldMarketTypesToBeChanged
     */
    code?: string;
    /**
     * Hotel code for which the yield market type belong to.
     * @type {string}
     * @memberof YieldMarketTypesToBeChanged
     */
    hotelId?: string;
    /**
     * Description for the yield market code.
     * @type {string}
     * @memberof YieldMarketTypesToBeChanged
     */
    description?: string;
    /**
     * If the yield market code does not return a result, this alternative yield market code is used instead.
     * @type {string}
     * @memberof YieldMarketTypesToBeChanged
     */
    alternativeCode?: string;
    /**
     * Indicates the default yield market type.
     * @type {boolean}
     * @memberof YieldMarketTypesToBeChanged
     */
    _default?: boolean;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof YieldMarketTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof YieldMarketTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the YieldMarketTypesToBeChanged interface.
 */
export declare function instanceOfYieldMarketTypesToBeChanged(value: object): boolean;
export declare function YieldMarketTypesToBeChangedFromJSON(json: any): YieldMarketTypesToBeChanged;
export declare function YieldMarketTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldMarketTypesToBeChanged;
export declare function YieldMarketTypesToBeChangedToJSON(value?: YieldMarketTypesToBeChanged | null): any;
