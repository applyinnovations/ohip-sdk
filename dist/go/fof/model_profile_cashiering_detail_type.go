/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ProfileCashieringDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileCashieringDetailType{}

// ProfileCashieringDetailType The type contains routing instructions for the profile.
type ProfileCashieringDetailType struct {
	ECommerceId *UniqueIDType `json:"eCommerceId,omitempty"`
	// Guest type code.
	FiscalGuestType *string `json:"fiscalGuestType,omitempty"`
	// Hotel Code for which the routing instructions are provided for a profile.
	HotelId *string `json:"hotelId,omitempty"`
	PaymentMethod *CodeDescriptionType `json:"paymentMethod,omitempty"`
	RoutingInstructions *ProfileRoutingInstructionsType `json:"routingInstructions,omitempty"`
	// Tax type code.
	TaxType *string `json:"taxType,omitempty"`
}

// NewProfileCashieringDetailType instantiates a new ProfileCashieringDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileCashieringDetailType() *ProfileCashieringDetailType {
	this := ProfileCashieringDetailType{}
	return &this
}

// NewProfileCashieringDetailTypeWithDefaults instantiates a new ProfileCashieringDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileCashieringDetailTypeWithDefaults() *ProfileCashieringDetailType {
	this := ProfileCashieringDetailType{}
	return &this
}

// GetECommerceId returns the ECommerceId field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetECommerceId() UniqueIDType {
	if o == nil || IsNil(o.ECommerceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ECommerceId
}

// GetECommerceIdOk returns a tuple with the ECommerceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetECommerceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ECommerceId) {
		return nil, false
	}
	return o.ECommerceId, true
}

// HasECommerceId returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasECommerceId() bool {
	if o != nil && !IsNil(o.ECommerceId) {
		return true
	}

	return false
}

// SetECommerceId gets a reference to the given UniqueIDType and assigns it to the ECommerceId field.
func (o *ProfileCashieringDetailType) SetECommerceId(v UniqueIDType) {
	o.ECommerceId = &v
}

// GetFiscalGuestType returns the FiscalGuestType field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetFiscalGuestType() string {
	if o == nil || IsNil(o.FiscalGuestType) {
		var ret string
		return ret
	}
	return *o.FiscalGuestType
}

// GetFiscalGuestTypeOk returns a tuple with the FiscalGuestType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetFiscalGuestTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalGuestType) {
		return nil, false
	}
	return o.FiscalGuestType, true
}

// HasFiscalGuestType returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasFiscalGuestType() bool {
	if o != nil && !IsNil(o.FiscalGuestType) {
		return true
	}

	return false
}

// SetFiscalGuestType gets a reference to the given string and assigns it to the FiscalGuestType field.
func (o *ProfileCashieringDetailType) SetFiscalGuestType(v string) {
	o.FiscalGuestType = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ProfileCashieringDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetPaymentMethod() CodeDescriptionType {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetPaymentMethodOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given CodeDescriptionType and assigns it to the PaymentMethod field.
func (o *ProfileCashieringDetailType) SetPaymentMethod(v CodeDescriptionType) {
	o.PaymentMethod = &v
}

// GetRoutingInstructions returns the RoutingInstructions field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetRoutingInstructions() ProfileRoutingInstructionsType {
	if o == nil || IsNil(o.RoutingInstructions) {
		var ret ProfileRoutingInstructionsType
		return ret
	}
	return *o.RoutingInstructions
}

// GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetRoutingInstructionsOk() (*ProfileRoutingInstructionsType, bool) {
	if o == nil || IsNil(o.RoutingInstructions) {
		return nil, false
	}
	return o.RoutingInstructions, true
}

// HasRoutingInstructions returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasRoutingInstructions() bool {
	if o != nil && !IsNil(o.RoutingInstructions) {
		return true
	}

	return false
}

// SetRoutingInstructions gets a reference to the given ProfileRoutingInstructionsType and assigns it to the RoutingInstructions field.
func (o *ProfileCashieringDetailType) SetRoutingInstructions(v ProfileRoutingInstructionsType) {
	o.RoutingInstructions = &v
}

// GetTaxType returns the TaxType field value if set, zero value otherwise.
func (o *ProfileCashieringDetailType) GetTaxType() string {
	if o == nil || IsNil(o.TaxType) {
		var ret string
		return ret
	}
	return *o.TaxType
}

// GetTaxTypeOk returns a tuple with the TaxType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileCashieringDetailType) GetTaxTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TaxType) {
		return nil, false
	}
	return o.TaxType, true
}

// HasTaxType returns a boolean if a field has been set.
func (o *ProfileCashieringDetailType) HasTaxType() bool {
	if o != nil && !IsNil(o.TaxType) {
		return true
	}

	return false
}

// SetTaxType gets a reference to the given string and assigns it to the TaxType field.
func (o *ProfileCashieringDetailType) SetTaxType(v string) {
	o.TaxType = &v
}

func (o ProfileCashieringDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileCashieringDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ECommerceId) {
		toSerialize["eCommerceId"] = o.ECommerceId
	}
	if !IsNil(o.FiscalGuestType) {
		toSerialize["fiscalGuestType"] = o.FiscalGuestType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	if !IsNil(o.RoutingInstructions) {
		toSerialize["routingInstructions"] = o.RoutingInstructions
	}
	if !IsNil(o.TaxType) {
		toSerialize["taxType"] = o.TaxType
	}
	return toSerialize, nil
}

type NullableProfileCashieringDetailType struct {
	value *ProfileCashieringDetailType
	isSet bool
}

func (v NullableProfileCashieringDetailType) Get() *ProfileCashieringDetailType {
	return v.value
}

func (v *NullableProfileCashieringDetailType) Set(val *ProfileCashieringDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileCashieringDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileCashieringDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileCashieringDetailType(val *ProfileCashieringDetailType) *NullableProfileCashieringDetailType {
	return &NullableProfileCashieringDetailType{value: val, isSet: true}
}

func (v NullableProfileCashieringDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileCashieringDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


