/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the AirlineTransactionStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AirlineTransactionStatusType{}

// AirlineTransactionStatusType Contains details of the membership transaction processing status, provided by the airline.
type AirlineTransactionStatusType struct {
	// Error Description returned by the airline
	Description *string `json:"description,omitempty"`
	// Error Code returned by the airline
	ErrorCode *string `json:"errorCode,omitempty"`
}

// NewAirlineTransactionStatusType instantiates a new AirlineTransactionStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAirlineTransactionStatusType() *AirlineTransactionStatusType {
	this := AirlineTransactionStatusType{}
	return &this
}

// NewAirlineTransactionStatusTypeWithDefaults instantiates a new AirlineTransactionStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAirlineTransactionStatusTypeWithDefaults() *AirlineTransactionStatusType {
	this := AirlineTransactionStatusType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AirlineTransactionStatusType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionStatusType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AirlineTransactionStatusType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AirlineTransactionStatusType) SetDescription(v string) {
	o.Description = &v
}

// GetErrorCode returns the ErrorCode field value if set, zero value otherwise.
func (o *AirlineTransactionStatusType) GetErrorCode() string {
	if o == nil || IsNil(o.ErrorCode) {
		var ret string
		return ret
	}
	return *o.ErrorCode
}

// GetErrorCodeOk returns a tuple with the ErrorCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionStatusType) GetErrorCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorCode) {
		return nil, false
	}
	return o.ErrorCode, true
}

// HasErrorCode returns a boolean if a field has been set.
func (o *AirlineTransactionStatusType) HasErrorCode() bool {
	if o != nil && !IsNil(o.ErrorCode) {
		return true
	}

	return false
}

// SetErrorCode gets a reference to the given string and assigns it to the ErrorCode field.
func (o *AirlineTransactionStatusType) SetErrorCode(v string) {
	o.ErrorCode = &v
}

func (o AirlineTransactionStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AirlineTransactionStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ErrorCode) {
		toSerialize["errorCode"] = o.ErrorCode
	}
	return toSerialize, nil
}

type NullableAirlineTransactionStatusType struct {
	value *AirlineTransactionStatusType
	isSet bool
}

func (v NullableAirlineTransactionStatusType) Get() *AirlineTransactionStatusType {
	return v.value
}

func (v *NullableAirlineTransactionStatusType) Set(val *AirlineTransactionStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableAirlineTransactionStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableAirlineTransactionStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAirlineTransactionStatusType(val *AirlineTransactionStatusType) *NullableAirlineTransactionStatusType {
	return &NullableAirlineTransactionStatusType{value: val, isSet: true}
}

func (v NullableAirlineTransactionStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAirlineTransactionStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

