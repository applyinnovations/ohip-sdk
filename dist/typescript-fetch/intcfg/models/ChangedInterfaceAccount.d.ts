/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface ChangedInterfaceAccount
 */
export interface ChangedInterfaceAccount {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChangedInterfaceAccount
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangedInterfaceAccount
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChangedInterfaceAccount interface.
 */
export declare function instanceOfChangedInterfaceAccount(value: object): boolean;
export declare function ChangedInterfaceAccountFromJSON(json: any): ChangedInterfaceAccount;
export declare function ChangedInterfaceAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangedInterfaceAccount;
export declare function ChangedInterfaceAccountToJSON(value?: ChangedInterfaceAccount | null): any;
