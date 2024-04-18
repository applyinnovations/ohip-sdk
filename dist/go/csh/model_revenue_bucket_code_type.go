/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the RevenueBucketCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueBucketCodeType{}

// RevenueBucketCodeType This gives detailed information about a trx code arrangement.
type RevenueBucketCodeType struct {
	BucketType *BucketTypeType `json:"bucketType,omitempty"`
	// Stores the default value for the arrangement code for revenue buckets in order to group transaction codes.
	BucketValue *string `json:"bucketValue,omitempty"`
	// Code is used to identify a trx code arrangement.
	Code *string `json:"code,omitempty"`
	// Description of the trx code arrangement code.
	Description *string `json:"description,omitempty"`
	// Identifies the hotel code for which the trx code arrangement is specified.
	HotelId *string `json:"hotelId,omitempty"`
	// Bucket is eligible for membership points
	PointsEligible *bool `json:"pointsEligible,omitempty"`
	// This holds Revenue Bucket Type
	RevenueBucketType *string `json:"revenueBucketType,omitempty"`
	// List of Transaction codes info.
	TransactionCodes []TrxInfoType `json:"transactionCodes,omitempty"`
}

// NewRevenueBucketCodeType instantiates a new RevenueBucketCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueBucketCodeType() *RevenueBucketCodeType {
	this := RevenueBucketCodeType{}
	return &this
}

// NewRevenueBucketCodeTypeWithDefaults instantiates a new RevenueBucketCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueBucketCodeTypeWithDefaults() *RevenueBucketCodeType {
	this := RevenueBucketCodeType{}
	return &this
}

// GetBucketType returns the BucketType field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetBucketType() BucketTypeType {
	if o == nil || IsNil(o.BucketType) {
		var ret BucketTypeType
		return ret
	}
	return *o.BucketType
}

// GetBucketTypeOk returns a tuple with the BucketType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetBucketTypeOk() (*BucketTypeType, bool) {
	if o == nil || IsNil(o.BucketType) {
		return nil, false
	}
	return o.BucketType, true
}

// HasBucketType returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasBucketType() bool {
	if o != nil && !IsNil(o.BucketType) {
		return true
	}

	return false
}

// SetBucketType gets a reference to the given BucketTypeType and assigns it to the BucketType field.
func (o *RevenueBucketCodeType) SetBucketType(v BucketTypeType) {
	o.BucketType = &v
}

// GetBucketValue returns the BucketValue field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetBucketValue() string {
	if o == nil || IsNil(o.BucketValue) {
		var ret string
		return ret
	}
	return *o.BucketValue
}

// GetBucketValueOk returns a tuple with the BucketValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetBucketValueOk() (*string, bool) {
	if o == nil || IsNil(o.BucketValue) {
		return nil, false
	}
	return o.BucketValue, true
}

// HasBucketValue returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasBucketValue() bool {
	if o != nil && !IsNil(o.BucketValue) {
		return true
	}

	return false
}

// SetBucketValue gets a reference to the given string and assigns it to the BucketValue field.
func (o *RevenueBucketCodeType) SetBucketValue(v string) {
	o.BucketValue = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *RevenueBucketCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RevenueBucketCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RevenueBucketCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPointsEligible returns the PointsEligible field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetPointsEligible() bool {
	if o == nil || IsNil(o.PointsEligible) {
		var ret bool
		return ret
	}
	return *o.PointsEligible
}

// GetPointsEligibleOk returns a tuple with the PointsEligible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetPointsEligibleOk() (*bool, bool) {
	if o == nil || IsNil(o.PointsEligible) {
		return nil, false
	}
	return o.PointsEligible, true
}

// HasPointsEligible returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasPointsEligible() bool {
	if o != nil && !IsNil(o.PointsEligible) {
		return true
	}

	return false
}

// SetPointsEligible gets a reference to the given bool and assigns it to the PointsEligible field.
func (o *RevenueBucketCodeType) SetPointsEligible(v bool) {
	o.PointsEligible = &v
}

// GetRevenueBucketType returns the RevenueBucketType field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetRevenueBucketType() string {
	if o == nil || IsNil(o.RevenueBucketType) {
		var ret string
		return ret
	}
	return *o.RevenueBucketType
}

// GetRevenueBucketTypeOk returns a tuple with the RevenueBucketType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetRevenueBucketTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueBucketType) {
		return nil, false
	}
	return o.RevenueBucketType, true
}

// HasRevenueBucketType returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasRevenueBucketType() bool {
	if o != nil && !IsNil(o.RevenueBucketType) {
		return true
	}

	return false
}

// SetRevenueBucketType gets a reference to the given string and assigns it to the RevenueBucketType field.
func (o *RevenueBucketCodeType) SetRevenueBucketType(v string) {
	o.RevenueBucketType = &v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *RevenueBucketCodeType) GetTransactionCodes() []TrxInfoType {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []TrxInfoType
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodeType) GetTransactionCodesOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *RevenueBucketCodeType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []TrxInfoType and assigns it to the TransactionCodes field.
func (o *RevenueBucketCodeType) SetTransactionCodes(v []TrxInfoType) {
	o.TransactionCodes = v
}

func (o RevenueBucketCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueBucketCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BucketType) {
		toSerialize["bucketType"] = o.BucketType
	}
	if !IsNil(o.BucketValue) {
		toSerialize["bucketValue"] = o.BucketValue
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PointsEligible) {
		toSerialize["pointsEligible"] = o.PointsEligible
	}
	if !IsNil(o.RevenueBucketType) {
		toSerialize["revenueBucketType"] = o.RevenueBucketType
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	return toSerialize, nil
}

type NullableRevenueBucketCodeType struct {
	value *RevenueBucketCodeType
	isSet bool
}

func (v NullableRevenueBucketCodeType) Get() *RevenueBucketCodeType {
	return v.value
}

func (v *NullableRevenueBucketCodeType) Set(val *RevenueBucketCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueBucketCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueBucketCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueBucketCodeType(val *RevenueBucketCodeType) *NullableRevenueBucketCodeType {
	return &NullableRevenueBucketCodeType{value: val, isSet: true}
}

func (v NullableRevenueBucketCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueBucketCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

