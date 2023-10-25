/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BlockCateringPackageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockCateringPackageType{}

// BlockCateringPackageType Details of Catering Package Type.
type BlockCateringPackageType struct {
	Attendees *CateringEventsAttendeesType `json:"attendees,omitempty"`
	// Begin Date for package/template events
	BeginDate *string `json:"beginDate,omitempty"`
	BlockId *UniqueIDType `json:"blockId,omitempty"`
	// Notifies whether this catering package can be deleted or not.
	CateringPackageRemovable *bool `json:"cateringPackageRemovable,omitempty"`
	// Catering Package duration.
	Duration *int32 `json:"duration,omitempty"`
	// Defines if Flat Rate is applicable for the package.
	FlatRate *bool `json:"flatRate,omitempty"`
	// Hotel Code of the Block.
	HotelId *string `json:"hotelId,omitempty"`
	// Flat to determine if the events the events associated with this package has non packaged resources
	NonPackagedResourcesExist *bool `json:"nonPackagedResourcesExist,omitempty"`
	// Indicates whether all event from the package is in Actual Status.
	PackageActual *bool `json:"packageActual,omitempty"`
	// Package Code which will be added to the block.
	PackageCode *string `json:"packageCode,omitempty"`
	// Hotel Code of the associated package.
	PackageHotelCode *string `json:"packageHotelCode,omitempty"`
	PackageId *UniqueIDType `json:"packageId,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
	// Price Code of the package.
	PriceCode *string `json:"priceCode,omitempty"`
	// Price Code description of the associated package.
	PriceDescription *string `json:"priceDescription,omitempty"`
	// Rate code of the associated package
	RentalCode *string `json:"rentalCode,omitempty"`
	// Status of the catering block
	Status *string `json:"status,omitempty"`
	TranslatableDescription *TranslationTextType200 `json:"translatableDescription,omitempty"`
}

// NewBlockCateringPackageType instantiates a new BlockCateringPackageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockCateringPackageType() *BlockCateringPackageType {
	this := BlockCateringPackageType{}
	return &this
}

// NewBlockCateringPackageTypeWithDefaults instantiates a new BlockCateringPackageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockCateringPackageTypeWithDefaults() *BlockCateringPackageType {
	this := BlockCateringPackageType{}
	return &this
}

// GetAttendees returns the Attendees field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetAttendees() CateringEventsAttendeesType {
	if o == nil || IsNil(o.Attendees) {
		var ret CateringEventsAttendeesType
		return ret
	}
	return *o.Attendees
}

// GetAttendeesOk returns a tuple with the Attendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetAttendeesOk() (*CateringEventsAttendeesType, bool) {
	if o == nil || IsNil(o.Attendees) {
		return nil, false
	}
	return o.Attendees, true
}

// HasAttendees returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasAttendees() bool {
	if o != nil && !IsNil(o.Attendees) {
		return true
	}

	return false
}

// SetAttendees gets a reference to the given CateringEventsAttendeesType and assigns it to the Attendees field.
func (o *BlockCateringPackageType) SetAttendees(v CateringEventsAttendeesType) {
	o.Attendees = &v
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *BlockCateringPackageType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetBlockId() UniqueIDType {
	if o == nil || IsNil(o.BlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given UniqueIDType and assigns it to the BlockId field.
func (o *BlockCateringPackageType) SetBlockId(v UniqueIDType) {
	o.BlockId = &v
}

// GetCateringPackageRemovable returns the CateringPackageRemovable field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetCateringPackageRemovable() bool {
	if o == nil || IsNil(o.CateringPackageRemovable) {
		var ret bool
		return ret
	}
	return *o.CateringPackageRemovable
}

// GetCateringPackageRemovableOk returns a tuple with the CateringPackageRemovable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetCateringPackageRemovableOk() (*bool, bool) {
	if o == nil || IsNil(o.CateringPackageRemovable) {
		return nil, false
	}
	return o.CateringPackageRemovable, true
}

// HasCateringPackageRemovable returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasCateringPackageRemovable() bool {
	if o != nil && !IsNil(o.CateringPackageRemovable) {
		return true
	}

	return false
}

// SetCateringPackageRemovable gets a reference to the given bool and assigns it to the CateringPackageRemovable field.
func (o *BlockCateringPackageType) SetCateringPackageRemovable(v bool) {
	o.CateringPackageRemovable = &v
}

// GetDuration returns the Duration field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetDuration() int32 {
	if o == nil || IsNil(o.Duration) {
		var ret int32
		return ret
	}
	return *o.Duration
}

// GetDurationOk returns a tuple with the Duration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetDurationOk() (*int32, bool) {
	if o == nil || IsNil(o.Duration) {
		return nil, false
	}
	return o.Duration, true
}

// HasDuration returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasDuration() bool {
	if o != nil && !IsNil(o.Duration) {
		return true
	}

	return false
}

// SetDuration gets a reference to the given int32 and assigns it to the Duration field.
func (o *BlockCateringPackageType) SetDuration(v int32) {
	o.Duration = &v
}

// GetFlatRate returns the FlatRate field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetFlatRate() bool {
	if o == nil || IsNil(o.FlatRate) {
		var ret bool
		return ret
	}
	return *o.FlatRate
}

// GetFlatRateOk returns a tuple with the FlatRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetFlatRateOk() (*bool, bool) {
	if o == nil || IsNil(o.FlatRate) {
		return nil, false
	}
	return o.FlatRate, true
}

// HasFlatRate returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasFlatRate() bool {
	if o != nil && !IsNil(o.FlatRate) {
		return true
	}

	return false
}

// SetFlatRate gets a reference to the given bool and assigns it to the FlatRate field.
func (o *BlockCateringPackageType) SetFlatRate(v bool) {
	o.FlatRate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BlockCateringPackageType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNonPackagedResourcesExist returns the NonPackagedResourcesExist field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetNonPackagedResourcesExist() bool {
	if o == nil || IsNil(o.NonPackagedResourcesExist) {
		var ret bool
		return ret
	}
	return *o.NonPackagedResourcesExist
}

// GetNonPackagedResourcesExistOk returns a tuple with the NonPackagedResourcesExist field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetNonPackagedResourcesExistOk() (*bool, bool) {
	if o == nil || IsNil(o.NonPackagedResourcesExist) {
		return nil, false
	}
	return o.NonPackagedResourcesExist, true
}

// HasNonPackagedResourcesExist returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasNonPackagedResourcesExist() bool {
	if o != nil && !IsNil(o.NonPackagedResourcesExist) {
		return true
	}

	return false
}

// SetNonPackagedResourcesExist gets a reference to the given bool and assigns it to the NonPackagedResourcesExist field.
func (o *BlockCateringPackageType) SetNonPackagedResourcesExist(v bool) {
	o.NonPackagedResourcesExist = &v
}

// GetPackageActual returns the PackageActual field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPackageActual() bool {
	if o == nil || IsNil(o.PackageActual) {
		var ret bool
		return ret
	}
	return *o.PackageActual
}

// GetPackageActualOk returns a tuple with the PackageActual field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPackageActualOk() (*bool, bool) {
	if o == nil || IsNil(o.PackageActual) {
		return nil, false
	}
	return o.PackageActual, true
}

// HasPackageActual returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPackageActual() bool {
	if o != nil && !IsNil(o.PackageActual) {
		return true
	}

	return false
}

// SetPackageActual gets a reference to the given bool and assigns it to the PackageActual field.
func (o *BlockCateringPackageType) SetPackageActual(v bool) {
	o.PackageActual = &v
}

// GetPackageCode returns the PackageCode field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPackageCode() string {
	if o == nil || IsNil(o.PackageCode) {
		var ret string
		return ret
	}
	return *o.PackageCode
}

// GetPackageCodeOk returns a tuple with the PackageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPackageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageCode) {
		return nil, false
	}
	return o.PackageCode, true
}

// HasPackageCode returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPackageCode() bool {
	if o != nil && !IsNil(o.PackageCode) {
		return true
	}

	return false
}

// SetPackageCode gets a reference to the given string and assigns it to the PackageCode field.
func (o *BlockCateringPackageType) SetPackageCode(v string) {
	o.PackageCode = &v
}

// GetPackageHotelCode returns the PackageHotelCode field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPackageHotelCode() string {
	if o == nil || IsNil(o.PackageHotelCode) {
		var ret string
		return ret
	}
	return *o.PackageHotelCode
}

// GetPackageHotelCodeOk returns a tuple with the PackageHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPackageHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageHotelCode) {
		return nil, false
	}
	return o.PackageHotelCode, true
}

// HasPackageHotelCode returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPackageHotelCode() bool {
	if o != nil && !IsNil(o.PackageHotelCode) {
		return true
	}

	return false
}

// SetPackageHotelCode gets a reference to the given string and assigns it to the PackageHotelCode field.
func (o *BlockCateringPackageType) SetPackageHotelCode(v string) {
	o.PackageHotelCode = &v
}

// GetPackageId returns the PackageId field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPackageId() UniqueIDType {
	if o == nil || IsNil(o.PackageId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PackageId
}

// GetPackageIdOk returns a tuple with the PackageId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPackageIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PackageId) {
		return nil, false
	}
	return o.PackageId, true
}

// HasPackageId returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPackageId() bool {
	if o != nil && !IsNil(o.PackageId) {
		return true
	}

	return false
}

// SetPackageId gets a reference to the given UniqueIDType and assigns it to the PackageId field.
func (o *BlockCateringPackageType) SetPackageId(v UniqueIDType) {
	o.PackageId = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *BlockCateringPackageType) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

// GetPriceCode returns the PriceCode field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPriceCode() string {
	if o == nil || IsNil(o.PriceCode) {
		var ret string
		return ret
	}
	return *o.PriceCode
}

// GetPriceCodeOk returns a tuple with the PriceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPriceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PriceCode) {
		return nil, false
	}
	return o.PriceCode, true
}

// HasPriceCode returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPriceCode() bool {
	if o != nil && !IsNil(o.PriceCode) {
		return true
	}

	return false
}

// SetPriceCode gets a reference to the given string and assigns it to the PriceCode field.
func (o *BlockCateringPackageType) SetPriceCode(v string) {
	o.PriceCode = &v
}

// GetPriceDescription returns the PriceDescription field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetPriceDescription() string {
	if o == nil || IsNil(o.PriceDescription) {
		var ret string
		return ret
	}
	return *o.PriceDescription
}

// GetPriceDescriptionOk returns a tuple with the PriceDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetPriceDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PriceDescription) {
		return nil, false
	}
	return o.PriceDescription, true
}

// HasPriceDescription returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasPriceDescription() bool {
	if o != nil && !IsNil(o.PriceDescription) {
		return true
	}

	return false
}

// SetPriceDescription gets a reference to the given string and assigns it to the PriceDescription field.
func (o *BlockCateringPackageType) SetPriceDescription(v string) {
	o.PriceDescription = &v
}

// GetRentalCode returns the RentalCode field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetRentalCode() string {
	if o == nil || IsNil(o.RentalCode) {
		var ret string
		return ret
	}
	return *o.RentalCode
}

// GetRentalCodeOk returns a tuple with the RentalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetRentalCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RentalCode) {
		return nil, false
	}
	return o.RentalCode, true
}

// HasRentalCode returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasRentalCode() bool {
	if o != nil && !IsNil(o.RentalCode) {
		return true
	}

	return false
}

// SetRentalCode gets a reference to the given string and assigns it to the RentalCode field.
func (o *BlockCateringPackageType) SetRentalCode(v string) {
	o.RentalCode = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *BlockCateringPackageType) SetStatus(v string) {
	o.Status = &v
}

// GetTranslatableDescription returns the TranslatableDescription field value if set, zero value otherwise.
func (o *BlockCateringPackageType) GetTranslatableDescription() TranslationTextType200 {
	if o == nil || IsNil(o.TranslatableDescription) {
		var ret TranslationTextType200
		return ret
	}
	return *o.TranslatableDescription
}

// GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool) {
	if o == nil || IsNil(o.TranslatableDescription) {
		return nil, false
	}
	return o.TranslatableDescription, true
}

// HasTranslatableDescription returns a boolean if a field has been set.
func (o *BlockCateringPackageType) HasTranslatableDescription() bool {
	if o != nil && !IsNil(o.TranslatableDescription) {
		return true
	}

	return false
}

// SetTranslatableDescription gets a reference to the given TranslationTextType200 and assigns it to the TranslatableDescription field.
func (o *BlockCateringPackageType) SetTranslatableDescription(v TranslationTextType200) {
	o.TranslatableDescription = &v
}

func (o BlockCateringPackageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockCateringPackageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attendees) {
		toSerialize["attendees"] = o.Attendees
	}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.CateringPackageRemovable) {
		toSerialize["cateringPackageRemovable"] = o.CateringPackageRemovable
	}
	if !IsNil(o.Duration) {
		toSerialize["duration"] = o.Duration
	}
	if !IsNil(o.FlatRate) {
		toSerialize["flatRate"] = o.FlatRate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.NonPackagedResourcesExist) {
		toSerialize["nonPackagedResourcesExist"] = o.NonPackagedResourcesExist
	}
	if !IsNil(o.PackageActual) {
		toSerialize["packageActual"] = o.PackageActual
	}
	if !IsNil(o.PackageCode) {
		toSerialize["packageCode"] = o.PackageCode
	}
	if !IsNil(o.PackageHotelCode) {
		toSerialize["packageHotelCode"] = o.PackageHotelCode
	}
	if !IsNil(o.PackageId) {
		toSerialize["packageId"] = o.PackageId
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.PriceCode) {
		toSerialize["priceCode"] = o.PriceCode
	}
	if !IsNil(o.PriceDescription) {
		toSerialize["priceDescription"] = o.PriceDescription
	}
	if !IsNil(o.RentalCode) {
		toSerialize["rentalCode"] = o.RentalCode
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.TranslatableDescription) {
		toSerialize["translatableDescription"] = o.TranslatableDescription
	}
	return toSerialize, nil
}

type NullableBlockCateringPackageType struct {
	value *BlockCateringPackageType
	isSet bool
}

func (v NullableBlockCateringPackageType) Get() *BlockCateringPackageType {
	return v.value
}

func (v *NullableBlockCateringPackageType) Set(val *BlockCateringPackageType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockCateringPackageType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockCateringPackageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockCateringPackageType(val *BlockCateringPackageType) *NullableBlockCateringPackageType {
	return &NullableBlockCateringPackageType{value: val, isSet: true}
}

func (v NullableBlockCateringPackageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockCateringPackageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


