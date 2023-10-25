/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the StatisticType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatisticType{}

// StatisticType Defines all details needed to create a statistical report.
type StatisticType struct {
	// The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
	ChainCode *string `json:"chainCode,omitempty"`
	// The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
	ChainName *string `json:"chainName,omitempty"`
	// This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue.
	Description *string `json:"description,omitempty"`
	// Hotel fiscal date for statistics.
	FiscalDate *string `json:"fiscalDate,omitempty"`
	// The IATA city code; for example DCA, ORD.
	HotelCityCode *string `json:"hotelCityCode,omitempty"`
	// A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
	HotelCodeContext *string `json:"hotelCodeContext,omitempty"`
	// The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
	HotelId *string `json:"hotelId,omitempty"`
	// A text field used to communicate the proper name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	// Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement.
	ReportCode *string `json:"reportCode,omitempty"`
	// Statistic Codes.
	StatisticCodesType []StatisticCodeType `json:"statisticCodesType,omitempty"`
}

// NewStatisticType instantiates a new StatisticType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatisticType() *StatisticType {
	this := StatisticType{}
	return &this
}

// NewStatisticTypeWithDefaults instantiates a new StatisticType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatisticTypeWithDefaults() *StatisticType {
	this := StatisticType{}
	return &this
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *StatisticType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *StatisticType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *StatisticType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetChainName returns the ChainName field value if set, zero value otherwise.
func (o *StatisticType) GetChainName() string {
	if o == nil || IsNil(o.ChainName) {
		var ret string
		return ret
	}
	return *o.ChainName
}

// GetChainNameOk returns a tuple with the ChainName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetChainNameOk() (*string, bool) {
	if o == nil || IsNil(o.ChainName) {
		return nil, false
	}
	return o.ChainName, true
}

// HasChainName returns a boolean if a field has been set.
func (o *StatisticType) HasChainName() bool {
	if o != nil && !IsNil(o.ChainName) {
		return true
	}

	return false
}

// SetChainName gets a reference to the given string and assigns it to the ChainName field.
func (o *StatisticType) SetChainName(v string) {
	o.ChainName = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *StatisticType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *StatisticType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *StatisticType) SetDescription(v string) {
	o.Description = &v
}

// GetFiscalDate returns the FiscalDate field value if set, zero value otherwise.
func (o *StatisticType) GetFiscalDate() string {
	if o == nil || IsNil(o.FiscalDate) {
		var ret string
		return ret
	}
	return *o.FiscalDate
}

// GetFiscalDateOk returns a tuple with the FiscalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetFiscalDateOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalDate) {
		return nil, false
	}
	return o.FiscalDate, true
}

// HasFiscalDate returns a boolean if a field has been set.
func (o *StatisticType) HasFiscalDate() bool {
	if o != nil && !IsNil(o.FiscalDate) {
		return true
	}

	return false
}

// SetFiscalDate gets a reference to the given string and assigns it to the FiscalDate field.
func (o *StatisticType) SetFiscalDate(v string) {
	o.FiscalDate = &v
}

// GetHotelCityCode returns the HotelCityCode field value if set, zero value otherwise.
func (o *StatisticType) GetHotelCityCode() string {
	if o == nil || IsNil(o.HotelCityCode) {
		var ret string
		return ret
	}
	return *o.HotelCityCode
}

// GetHotelCityCodeOk returns a tuple with the HotelCityCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetHotelCityCodeOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCityCode) {
		return nil, false
	}
	return o.HotelCityCode, true
}

// HasHotelCityCode returns a boolean if a field has been set.
func (o *StatisticType) HasHotelCityCode() bool {
	if o != nil && !IsNil(o.HotelCityCode) {
		return true
	}

	return false
}

// SetHotelCityCode gets a reference to the given string and assigns it to the HotelCityCode field.
func (o *StatisticType) SetHotelCityCode(v string) {
	o.HotelCityCode = &v
}

// GetHotelCodeContext returns the HotelCodeContext field value if set, zero value otherwise.
func (o *StatisticType) GetHotelCodeContext() string {
	if o == nil || IsNil(o.HotelCodeContext) {
		var ret string
		return ret
	}
	return *o.HotelCodeContext
}

// GetHotelCodeContextOk returns a tuple with the HotelCodeContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetHotelCodeContextOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCodeContext) {
		return nil, false
	}
	return o.HotelCodeContext, true
}

// HasHotelCodeContext returns a boolean if a field has been set.
func (o *StatisticType) HasHotelCodeContext() bool {
	if o != nil && !IsNil(o.HotelCodeContext) {
		return true
	}

	return false
}

// SetHotelCodeContext gets a reference to the given string and assigns it to the HotelCodeContext field.
func (o *StatisticType) SetHotelCodeContext(v string) {
	o.HotelCodeContext = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *StatisticType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *StatisticType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *StatisticType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *StatisticType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *StatisticType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *StatisticType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetReportCode returns the ReportCode field value if set, zero value otherwise.
func (o *StatisticType) GetReportCode() string {
	if o == nil || IsNil(o.ReportCode) {
		var ret string
		return ret
	}
	return *o.ReportCode
}

// GetReportCodeOk returns a tuple with the ReportCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetReportCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ReportCode) {
		return nil, false
	}
	return o.ReportCode, true
}

// HasReportCode returns a boolean if a field has been set.
func (o *StatisticType) HasReportCode() bool {
	if o != nil && !IsNil(o.ReportCode) {
		return true
	}

	return false
}

// SetReportCode gets a reference to the given string and assigns it to the ReportCode field.
func (o *StatisticType) SetReportCode(v string) {
	o.ReportCode = &v
}

// GetStatisticCodesType returns the StatisticCodesType field value if set, zero value otherwise.
func (o *StatisticType) GetStatisticCodesType() []StatisticCodeType {
	if o == nil || IsNil(o.StatisticCodesType) {
		var ret []StatisticCodeType
		return ret
	}
	return o.StatisticCodesType
}

// GetStatisticCodesTypeOk returns a tuple with the StatisticCodesType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetStatisticCodesTypeOk() ([]StatisticCodeType, bool) {
	if o == nil || IsNil(o.StatisticCodesType) {
		return nil, false
	}
	return o.StatisticCodesType, true
}

// HasStatisticCodesType returns a boolean if a field has been set.
func (o *StatisticType) HasStatisticCodesType() bool {
	if o != nil && !IsNil(o.StatisticCodesType) {
		return true
	}

	return false
}

// SetStatisticCodesType gets a reference to the given []StatisticCodeType and assigns it to the StatisticCodesType field.
func (o *StatisticType) SetStatisticCodesType(v []StatisticCodeType) {
	o.StatisticCodesType = v
}

func (o StatisticType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatisticType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.ChainName) {
		toSerialize["chainName"] = o.ChainName
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FiscalDate) {
		toSerialize["fiscalDate"] = o.FiscalDate
	}
	if !IsNil(o.HotelCityCode) {
		toSerialize["hotelCityCode"] = o.HotelCityCode
	}
	if !IsNil(o.HotelCodeContext) {
		toSerialize["hotelCodeContext"] = o.HotelCodeContext
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.ReportCode) {
		toSerialize["reportCode"] = o.ReportCode
	}
	if !IsNil(o.StatisticCodesType) {
		toSerialize["statisticCodesType"] = o.StatisticCodesType
	}
	return toSerialize, nil
}

type NullableStatisticType struct {
	value *StatisticType
	isSet bool
}

func (v NullableStatisticType) Get() *StatisticType {
	return v.value
}

func (v *NullableStatisticType) Set(val *StatisticType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatisticType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatisticType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatisticType(val *StatisticType) *NullableStatisticType {
	return &NullableStatisticType{value: val, isSet: true}
}

func (v NullableStatisticType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatisticType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


