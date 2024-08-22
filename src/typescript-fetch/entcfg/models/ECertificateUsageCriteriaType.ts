/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * E-Certificates details.
 * @export
 * @interface ECertificateUsageCriteriaType
 */
export interface ECertificateUsageCriteriaType {
    /**
     * Indicates if certificate is to be used against reservation or not.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    reservation?: boolean;
    /**
     * Indicates if web certificate can be consumed in OWS.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    web?: boolean;
    /**
     * Indicates if certificate consumption allowable on the web.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    webAllowed?: boolean;
    /**
     * Indicates to attach a rate code to the e-certificate as a benefit.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    benefit?: boolean;
    /**
     * Indicates if web certificate can be consumed in hotel.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    hotel?: boolean;
    /**
     * Specify if the certificate number verification is required at time of consumption or not.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    verifyCertificateNo?: boolean;
    /**
     * Identify if cancel is allowed or not.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    cancelAllowed?: boolean;
    /**
     * Identify if in lieu of certificate can be generated or not.
     * @type {boolean}
     * @memberof ECertificateUsageCriteriaType
     */
    generateInLieuCertificate?: boolean;
}

/**
 * Check if a given object implements the ECertificateUsageCriteriaType interface.
 */
export function instanceOfECertificateUsageCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateUsageCriteriaTypeFromJSON(json: any): ECertificateUsageCriteriaType {
    return ECertificateUsageCriteriaTypeFromJSONTyped(json, false);
}

export function ECertificateUsageCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateUsageCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservation': !exists(json, 'reservation') ? undefined : json['reservation'],
        'web': !exists(json, 'web') ? undefined : json['web'],
        'webAllowed': !exists(json, 'webAllowed') ? undefined : json['webAllowed'],
        'benefit': !exists(json, 'benefit') ? undefined : json['benefit'],
        'hotel': !exists(json, 'hotel') ? undefined : json['hotel'],
        'verifyCertificateNo': !exists(json, 'verifyCertificateNo') ? undefined : json['verifyCertificateNo'],
        'cancelAllowed': !exists(json, 'cancelAllowed') ? undefined : json['cancelAllowed'],
        'generateInLieuCertificate': !exists(json, 'generateInLieuCertificate') ? undefined : json['generateInLieuCertificate'],
    };
}

export function ECertificateUsageCriteriaTypeToJSON(value?: ECertificateUsageCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservation': value.reservation,
        'web': value.web,
        'webAllowed': value.webAllowed,
        'benefit': value.benefit,
        'hotel': value.hotel,
        'verifyCertificateNo': value.verifyCertificateNo,
        'cancelAllowed': value.cancelAllowed,
        'generateInLieuCertificate': value.generateInLieuCertificate,
    };
}

