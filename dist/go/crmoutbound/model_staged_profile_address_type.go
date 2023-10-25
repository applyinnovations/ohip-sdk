/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the StagedProfileAddressType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StagedProfileAddressType{}

// StagedProfileAddressType Provides address information.
type StagedProfileAddressType struct {
	Address *AddressType `json:"address,omitempty"`
	// The error in address information in a staged profile with an invalid status
	ErrorDescription *string `json:"errorDescription,omitempty"`
	// Inactivation date of the record.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// Postal code extension.
	PostalCodeExtension *string `json:"postalCodeExtension,omitempty"`
	// The postal barcode for the address.
	BarCode *string `json:"barCode,omitempty"`
	CleansStatus *StagedAddressCleansStatus `json:"cleansStatus,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
}

// NewStagedProfileAddressType instantiates a new StagedProfileAddressType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStagedProfileAddressType() *StagedProfileAddressType {
	this := StagedProfileAddressType{}
	return &this
}

// NewStagedProfileAddressTypeWithDefaults instantiates a new StagedProfileAddressType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStagedProfileAddressTypeWithDefaults() *StagedProfileAddressType {
	this := StagedProfileAddressType{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetAddress() AddressType {
	if o == nil || IsNil(o.Address) {
		var ret AddressType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressType and assigns it to the Address field.
func (o *StagedProfileAddressType) SetAddress(v AddressType) {
	o.Address = &v
}

// GetErrorDescription returns the ErrorDescription field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetErrorDescription() string {
	if o == nil || IsNil(o.ErrorDescription) {
		var ret string
		return ret
	}
	return *o.ErrorDescription
}

// GetErrorDescriptionOk returns a tuple with the ErrorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetErrorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorDescription) {
		return nil, false
	}
	return o.ErrorDescription, true
}

// HasErrorDescription returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasErrorDescription() bool {
	if o != nil && !IsNil(o.ErrorDescription) {
		return true
	}

	return false
}

// SetErrorDescription gets a reference to the given string and assigns it to the ErrorDescription field.
func (o *StagedProfileAddressType) SetErrorDescription(v string) {
	o.ErrorDescription = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *StagedProfileAddressType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetPostalCodeExtension returns the PostalCodeExtension field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetPostalCodeExtension() string {
	if o == nil || IsNil(o.PostalCodeExtension) {
		var ret string
		return ret
	}
	return *o.PostalCodeExtension
}

// GetPostalCodeExtensionOk returns a tuple with the PostalCodeExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetPostalCodeExtensionOk() (*string, bool) {
	if o == nil || IsNil(o.PostalCodeExtension) {
		return nil, false
	}
	return o.PostalCodeExtension, true
}

// HasPostalCodeExtension returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasPostalCodeExtension() bool {
	if o != nil && !IsNil(o.PostalCodeExtension) {
		return true
	}

	return false
}

// SetPostalCodeExtension gets a reference to the given string and assigns it to the PostalCodeExtension field.
func (o *StagedProfileAddressType) SetPostalCodeExtension(v string) {
	o.PostalCodeExtension = &v
}

// GetBarCode returns the BarCode field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetBarCode() string {
	if o == nil || IsNil(o.BarCode) {
		var ret string
		return ret
	}
	return *o.BarCode
}

// GetBarCodeOk returns a tuple with the BarCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetBarCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BarCode) {
		return nil, false
	}
	return o.BarCode, true
}

// HasBarCode returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasBarCode() bool {
	if o != nil && !IsNil(o.BarCode) {
		return true
	}

	return false
}

// SetBarCode gets a reference to the given string and assigns it to the BarCode field.
func (o *StagedProfileAddressType) SetBarCode(v string) {
	o.BarCode = &v
}

// GetCleansStatus returns the CleansStatus field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetCleansStatus() StagedAddressCleansStatus {
	if o == nil || IsNil(o.CleansStatus) {
		var ret StagedAddressCleansStatus
		return ret
	}
	return *o.CleansStatus
}

// GetCleansStatusOk returns a tuple with the CleansStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetCleansStatusOk() (*StagedAddressCleansStatus, bool) {
	if o == nil || IsNil(o.CleansStatus) {
		return nil, false
	}
	return o.CleansStatus, true
}

// HasCleansStatus returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasCleansStatus() bool {
	if o != nil && !IsNil(o.CleansStatus) {
		return true
	}

	return false
}

// SetCleansStatus gets a reference to the given StagedAddressCleansStatus and assigns it to the CleansStatus field.
func (o *StagedProfileAddressType) SetCleansStatus(v StagedAddressCleansStatus) {
	o.CleansStatus = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *StagedProfileAddressType) SetId(v string) {
	o.Id = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *StagedProfileAddressType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileAddressType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *StagedProfileAddressType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *StagedProfileAddressType) SetType(v string) {
	o.Type = &v
}

func (o StagedProfileAddressType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StagedProfileAddressType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.ErrorDescription) {
		toSerialize["errorDescription"] = o.ErrorDescription
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.PostalCodeExtension) {
		toSerialize["postalCodeExtension"] = o.PostalCodeExtension
	}
	if !IsNil(o.BarCode) {
		toSerialize["barCode"] = o.BarCode
	}
	if !IsNil(o.CleansStatus) {
		toSerialize["cleansStatus"] = o.CleansStatus
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableStagedProfileAddressType struct {
	value *StagedProfileAddressType
	isSet bool
}

func (v NullableStagedProfileAddressType) Get() *StagedProfileAddressType {
	return v.value
}

func (v *NullableStagedProfileAddressType) Set(val *StagedProfileAddressType) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileAddressType) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileAddressType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileAddressType(val *StagedProfileAddressType) *NullableStagedProfileAddressType {
	return &NullableStagedProfileAddressType{value: val, isSet: true}
}

func (v NullableStagedProfileAddressType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileAddressType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


