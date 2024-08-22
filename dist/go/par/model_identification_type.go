/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the IdentificationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &IdentificationType{}

// IdentificationType Identification information of the customer.
type IdentificationType struct {
	// Expiration date of Identification.
	ExpirationDate *string `json:"expirationDate,omitempty"`
	// Identification Number.
	IdNumber *string `json:"idNumber,omitempty"`
	// Masked Identification Number.
	IdNumberMasked *string `json:"idNumberMasked,omitempty"`
	// Identification Type. Eg Passport, Driving License etc.
	IdType *string `json:"idType,omitempty"`
	// The country where Identification was issued.
	IssuedCountry *string `json:"issuedCountry,omitempty"`
	// Issued date of Identification.
	IssuedDate *string `json:"issuedDate,omitempty"`
	// The place where Identification was issued.
	IssuedPlace *string `json:"issuedPlace,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// When true, indicates a primary information.
	PrimaryInd *bool `json:"primaryInd,omitempty"`
	// Property where the identification belongs to.
	RegisteredProperty *string `json:"registeredProperty,omitempty"`
}

// NewIdentificationType instantiates a new IdentificationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIdentificationType() *IdentificationType {
	this := IdentificationType{}
	return &this
}

// NewIdentificationTypeWithDefaults instantiates a new IdentificationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIdentificationTypeWithDefaults() *IdentificationType {
	this := IdentificationType{}
	return &this
}

// GetExpirationDate returns the ExpirationDate field value if set, zero value otherwise.
func (o *IdentificationType) GetExpirationDate() string {
	if o == nil || IsNil(o.ExpirationDate) {
		var ret string
		return ret
	}
	return *o.ExpirationDate
}

// GetExpirationDateOk returns a tuple with the ExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetExpirationDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDate) {
		return nil, false
	}
	return o.ExpirationDate, true
}

// HasExpirationDate returns a boolean if a field has been set.
func (o *IdentificationType) HasExpirationDate() bool {
	if o != nil && !IsNil(o.ExpirationDate) {
		return true
	}

	return false
}

// SetExpirationDate gets a reference to the given string and assigns it to the ExpirationDate field.
func (o *IdentificationType) SetExpirationDate(v string) {
	o.ExpirationDate = &v
}

// GetIdNumber returns the IdNumber field value if set, zero value otherwise.
func (o *IdentificationType) GetIdNumber() string {
	if o == nil || IsNil(o.IdNumber) {
		var ret string
		return ret
	}
	return *o.IdNumber
}

// GetIdNumberOk returns a tuple with the IdNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIdNumberOk() (*string, bool) {
	if o == nil || IsNil(o.IdNumber) {
		return nil, false
	}
	return o.IdNumber, true
}

// HasIdNumber returns a boolean if a field has been set.
func (o *IdentificationType) HasIdNumber() bool {
	if o != nil && !IsNil(o.IdNumber) {
		return true
	}

	return false
}

// SetIdNumber gets a reference to the given string and assigns it to the IdNumber field.
func (o *IdentificationType) SetIdNumber(v string) {
	o.IdNumber = &v
}

// GetIdNumberMasked returns the IdNumberMasked field value if set, zero value otherwise.
func (o *IdentificationType) GetIdNumberMasked() string {
	if o == nil || IsNil(o.IdNumberMasked) {
		var ret string
		return ret
	}
	return *o.IdNumberMasked
}

// GetIdNumberMaskedOk returns a tuple with the IdNumberMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIdNumberMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.IdNumberMasked) {
		return nil, false
	}
	return o.IdNumberMasked, true
}

// HasIdNumberMasked returns a boolean if a field has been set.
func (o *IdentificationType) HasIdNumberMasked() bool {
	if o != nil && !IsNil(o.IdNumberMasked) {
		return true
	}

	return false
}

// SetIdNumberMasked gets a reference to the given string and assigns it to the IdNumberMasked field.
func (o *IdentificationType) SetIdNumberMasked(v string) {
	o.IdNumberMasked = &v
}

// GetIdType returns the IdType field value if set, zero value otherwise.
func (o *IdentificationType) GetIdType() string {
	if o == nil || IsNil(o.IdType) {
		var ret string
		return ret
	}
	return *o.IdType
}

// GetIdTypeOk returns a tuple with the IdType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIdTypeOk() (*string, bool) {
	if o == nil || IsNil(o.IdType) {
		return nil, false
	}
	return o.IdType, true
}

// HasIdType returns a boolean if a field has been set.
func (o *IdentificationType) HasIdType() bool {
	if o != nil && !IsNil(o.IdType) {
		return true
	}

	return false
}

// SetIdType gets a reference to the given string and assigns it to the IdType field.
func (o *IdentificationType) SetIdType(v string) {
	o.IdType = &v
}

// GetIssuedCountry returns the IssuedCountry field value if set, zero value otherwise.
func (o *IdentificationType) GetIssuedCountry() string {
	if o == nil || IsNil(o.IssuedCountry) {
		var ret string
		return ret
	}
	return *o.IssuedCountry
}

// GetIssuedCountryOk returns a tuple with the IssuedCountry field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIssuedCountryOk() (*string, bool) {
	if o == nil || IsNil(o.IssuedCountry) {
		return nil, false
	}
	return o.IssuedCountry, true
}

// HasIssuedCountry returns a boolean if a field has been set.
func (o *IdentificationType) HasIssuedCountry() bool {
	if o != nil && !IsNil(o.IssuedCountry) {
		return true
	}

	return false
}

// SetIssuedCountry gets a reference to the given string and assigns it to the IssuedCountry field.
func (o *IdentificationType) SetIssuedCountry(v string) {
	o.IssuedCountry = &v
}

// GetIssuedDate returns the IssuedDate field value if set, zero value otherwise.
func (o *IdentificationType) GetIssuedDate() string {
	if o == nil || IsNil(o.IssuedDate) {
		var ret string
		return ret
	}
	return *o.IssuedDate
}

// GetIssuedDateOk returns a tuple with the IssuedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIssuedDateOk() (*string, bool) {
	if o == nil || IsNil(o.IssuedDate) {
		return nil, false
	}
	return o.IssuedDate, true
}

// HasIssuedDate returns a boolean if a field has been set.
func (o *IdentificationType) HasIssuedDate() bool {
	if o != nil && !IsNil(o.IssuedDate) {
		return true
	}

	return false
}

// SetIssuedDate gets a reference to the given string and assigns it to the IssuedDate field.
func (o *IdentificationType) SetIssuedDate(v string) {
	o.IssuedDate = &v
}

// GetIssuedPlace returns the IssuedPlace field value if set, zero value otherwise.
func (o *IdentificationType) GetIssuedPlace() string {
	if o == nil || IsNil(o.IssuedPlace) {
		var ret string
		return ret
	}
	return *o.IssuedPlace
}

// GetIssuedPlaceOk returns a tuple with the IssuedPlace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetIssuedPlaceOk() (*string, bool) {
	if o == nil || IsNil(o.IssuedPlace) {
		return nil, false
	}
	return o.IssuedPlace, true
}

// HasIssuedPlace returns a boolean if a field has been set.
func (o *IdentificationType) HasIssuedPlace() bool {
	if o != nil && !IsNil(o.IssuedPlace) {
		return true
	}

	return false
}

// SetIssuedPlace gets a reference to the given string and assigns it to the IssuedPlace field.
func (o *IdentificationType) SetIssuedPlace(v string) {
	o.IssuedPlace = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *IdentificationType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *IdentificationType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *IdentificationType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPrimaryInd returns the PrimaryInd field value if set, zero value otherwise.
func (o *IdentificationType) GetPrimaryInd() bool {
	if o == nil || IsNil(o.PrimaryInd) {
		var ret bool
		return ret
	}
	return *o.PrimaryInd
}

// GetPrimaryIndOk returns a tuple with the PrimaryInd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetPrimaryIndOk() (*bool, bool) {
	if o == nil || IsNil(o.PrimaryInd) {
		return nil, false
	}
	return o.PrimaryInd, true
}

// HasPrimaryInd returns a boolean if a field has been set.
func (o *IdentificationType) HasPrimaryInd() bool {
	if o != nil && !IsNil(o.PrimaryInd) {
		return true
	}

	return false
}

// SetPrimaryInd gets a reference to the given bool and assigns it to the PrimaryInd field.
func (o *IdentificationType) SetPrimaryInd(v bool) {
	o.PrimaryInd = &v
}

// GetRegisteredProperty returns the RegisteredProperty field value if set, zero value otherwise.
func (o *IdentificationType) GetRegisteredProperty() string {
	if o == nil || IsNil(o.RegisteredProperty) {
		var ret string
		return ret
	}
	return *o.RegisteredProperty
}

// GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationType) GetRegisteredPropertyOk() (*string, bool) {
	if o == nil || IsNil(o.RegisteredProperty) {
		return nil, false
	}
	return o.RegisteredProperty, true
}

// HasRegisteredProperty returns a boolean if a field has been set.
func (o *IdentificationType) HasRegisteredProperty() bool {
	if o != nil && !IsNil(o.RegisteredProperty) {
		return true
	}

	return false
}

// SetRegisteredProperty gets a reference to the given string and assigns it to the RegisteredProperty field.
func (o *IdentificationType) SetRegisteredProperty(v string) {
	o.RegisteredProperty = &v
}

func (o IdentificationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o IdentificationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExpirationDate) {
		toSerialize["expirationDate"] = o.ExpirationDate
	}
	if !IsNil(o.IdNumber) {
		toSerialize["idNumber"] = o.IdNumber
	}
	if !IsNil(o.IdNumberMasked) {
		toSerialize["idNumberMasked"] = o.IdNumberMasked
	}
	if !IsNil(o.IdType) {
		toSerialize["idType"] = o.IdType
	}
	if !IsNil(o.IssuedCountry) {
		toSerialize["issuedCountry"] = o.IssuedCountry
	}
	if !IsNil(o.IssuedDate) {
		toSerialize["issuedDate"] = o.IssuedDate
	}
	if !IsNil(o.IssuedPlace) {
		toSerialize["issuedPlace"] = o.IssuedPlace
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PrimaryInd) {
		toSerialize["primaryInd"] = o.PrimaryInd
	}
	if !IsNil(o.RegisteredProperty) {
		toSerialize["registeredProperty"] = o.RegisteredProperty
	}
	return toSerialize, nil
}

type NullableIdentificationType struct {
	value *IdentificationType
	isSet bool
}

func (v NullableIdentificationType) Get() *IdentificationType {
	return v.value
}

func (v *NullableIdentificationType) Set(val *IdentificationType) {
	v.value = val
	v.isSet = true
}

func (v NullableIdentificationType) IsSet() bool {
	return v.isSet
}

func (v *NullableIdentificationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIdentificationType(val *IdentificationType) *NullableIdentificationType {
	return &NullableIdentificationType{value: val, isSet: true}
}

func (v NullableIdentificationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIdentificationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


