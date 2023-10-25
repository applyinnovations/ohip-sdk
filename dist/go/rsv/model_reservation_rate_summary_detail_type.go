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

// checks if the ReservationRateSummaryDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationRateSummaryDetailType{}

// ReservationRateSummaryDetailType struct for ReservationRateSummaryDetailType
type ReservationRateSummaryDetailType struct {
	// Currency revenue calculation is based on.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Amount of revenue and package excluding tax.
	Gross *float32 `json:"gross,omitempty"`
	// Amount of revenue and package including tax.
	Net *float32 `json:"net,omitempty"`
	// Amount of an additional product or service that is sold as part of the rate or in addition to the rate.
	Package *float32 `json:"package,omitempty"`
	// Rate code calculation is based on.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Indicates if the rate is to be hidden.
	RateSuppressed *bool `json:"rateSuppressed,omitempty"`
	// Base Amount of rate.
	Revenue *float32 `json:"revenue,omitempty"`
	// Date revenue calculation is based on.
	RevenueSimulationDate *string `json:"revenueSimulationDate,omitempty"`
	// Stay date for which revenue calculation is done.
	SummaryDate *string `json:"summaryDate,omitempty"`
	// Amount of tax generated separately on the revenue and package.
	Tax *float32 `json:"tax,omitempty"`
}

// NewReservationRateSummaryDetailType instantiates a new ReservationRateSummaryDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationRateSummaryDetailType() *ReservationRateSummaryDetailType {
	this := ReservationRateSummaryDetailType{}
	return &this
}

// NewReservationRateSummaryDetailTypeWithDefaults instantiates a new ReservationRateSummaryDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationRateSummaryDetailTypeWithDefaults() *ReservationRateSummaryDetailType {
	this := ReservationRateSummaryDetailType{}
	return &this
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *ReservationRateSummaryDetailType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetGross returns the Gross field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetGross() float32 {
	if o == nil || IsNil(o.Gross) {
		var ret float32
		return ret
	}
	return *o.Gross
}

// GetGrossOk returns a tuple with the Gross field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetGrossOk() (*float32, bool) {
	if o == nil || IsNil(o.Gross) {
		return nil, false
	}
	return o.Gross, true
}

// HasGross returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasGross() bool {
	if o != nil && !IsNil(o.Gross) {
		return true
	}

	return false
}

// SetGross gets a reference to the given float32 and assigns it to the Gross field.
func (o *ReservationRateSummaryDetailType) SetGross(v float32) {
	o.Gross = &v
}

// GetNet returns the Net field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetNet() float32 {
	if o == nil || IsNil(o.Net) {
		var ret float32
		return ret
	}
	return *o.Net
}

// GetNetOk returns a tuple with the Net field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetNetOk() (*float32, bool) {
	if o == nil || IsNil(o.Net) {
		return nil, false
	}
	return o.Net, true
}

// HasNet returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasNet() bool {
	if o != nil && !IsNil(o.Net) {
		return true
	}

	return false
}

// SetNet gets a reference to the given float32 and assigns it to the Net field.
func (o *ReservationRateSummaryDetailType) SetNet(v float32) {
	o.Net = &v
}

// GetPackage returns the Package field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetPackage() float32 {
	if o == nil || IsNil(o.Package) {
		var ret float32
		return ret
	}
	return *o.Package
}

// GetPackageOk returns a tuple with the Package field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetPackageOk() (*float32, bool) {
	if o == nil || IsNil(o.Package) {
		return nil, false
	}
	return o.Package, true
}

// HasPackage returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasPackage() bool {
	if o != nil && !IsNil(o.Package) {
		return true
	}

	return false
}

// SetPackage gets a reference to the given float32 and assigns it to the Package field.
func (o *ReservationRateSummaryDetailType) SetPackage(v float32) {
	o.Package = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ReservationRateSummaryDetailType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRateSuppressed returns the RateSuppressed field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetRateSuppressed() bool {
	if o == nil || IsNil(o.RateSuppressed) {
		var ret bool
		return ret
	}
	return *o.RateSuppressed
}

// GetRateSuppressedOk returns a tuple with the RateSuppressed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetRateSuppressedOk() (*bool, bool) {
	if o == nil || IsNil(o.RateSuppressed) {
		return nil, false
	}
	return o.RateSuppressed, true
}

// HasRateSuppressed returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasRateSuppressed() bool {
	if o != nil && !IsNil(o.RateSuppressed) {
		return true
	}

	return false
}

// SetRateSuppressed gets a reference to the given bool and assigns it to the RateSuppressed field.
func (o *ReservationRateSummaryDetailType) SetRateSuppressed(v bool) {
	o.RateSuppressed = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetRevenue() float32 {
	if o == nil || IsNil(o.Revenue) {
		var ret float32
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given float32 and assigns it to the Revenue field.
func (o *ReservationRateSummaryDetailType) SetRevenue(v float32) {
	o.Revenue = &v
}

// GetRevenueSimulationDate returns the RevenueSimulationDate field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetRevenueSimulationDate() string {
	if o == nil || IsNil(o.RevenueSimulationDate) {
		var ret string
		return ret
	}
	return *o.RevenueSimulationDate
}

// GetRevenueSimulationDateOk returns a tuple with the RevenueSimulationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetRevenueSimulationDateOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueSimulationDate) {
		return nil, false
	}
	return o.RevenueSimulationDate, true
}

// HasRevenueSimulationDate returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasRevenueSimulationDate() bool {
	if o != nil && !IsNil(o.RevenueSimulationDate) {
		return true
	}

	return false
}

// SetRevenueSimulationDate gets a reference to the given string and assigns it to the RevenueSimulationDate field.
func (o *ReservationRateSummaryDetailType) SetRevenueSimulationDate(v string) {
	o.RevenueSimulationDate = &v
}

// GetSummaryDate returns the SummaryDate field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetSummaryDate() string {
	if o == nil || IsNil(o.SummaryDate) {
		var ret string
		return ret
	}
	return *o.SummaryDate
}

// GetSummaryDateOk returns a tuple with the SummaryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetSummaryDateOk() (*string, bool) {
	if o == nil || IsNil(o.SummaryDate) {
		return nil, false
	}
	return o.SummaryDate, true
}

// HasSummaryDate returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasSummaryDate() bool {
	if o != nil && !IsNil(o.SummaryDate) {
		return true
	}

	return false
}

// SetSummaryDate gets a reference to the given string and assigns it to the SummaryDate field.
func (o *ReservationRateSummaryDetailType) SetSummaryDate(v string) {
	o.SummaryDate = &v
}

// GetTax returns the Tax field value if set, zero value otherwise.
func (o *ReservationRateSummaryDetailType) GetTax() float32 {
	if o == nil || IsNil(o.Tax) {
		var ret float32
		return ret
	}
	return *o.Tax
}

// GetTaxOk returns a tuple with the Tax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRateSummaryDetailType) GetTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.Tax) {
		return nil, false
	}
	return o.Tax, true
}

// HasTax returns a boolean if a field has been set.
func (o *ReservationRateSummaryDetailType) HasTax() bool {
	if o != nil && !IsNil(o.Tax) {
		return true
	}

	return false
}

// SetTax gets a reference to the given float32 and assigns it to the Tax field.
func (o *ReservationRateSummaryDetailType) SetTax(v float32) {
	o.Tax = &v
}

func (o ReservationRateSummaryDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationRateSummaryDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Gross) {
		toSerialize["gross"] = o.Gross
	}
	if !IsNil(o.Net) {
		toSerialize["net"] = o.Net
	}
	if !IsNil(o.Package) {
		toSerialize["package"] = o.Package
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RateSuppressed) {
		toSerialize["rateSuppressed"] = o.RateSuppressed
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	if !IsNil(o.RevenueSimulationDate) {
		toSerialize["revenueSimulationDate"] = o.RevenueSimulationDate
	}
	if !IsNil(o.SummaryDate) {
		toSerialize["summaryDate"] = o.SummaryDate
	}
	if !IsNil(o.Tax) {
		toSerialize["tax"] = o.Tax
	}
	return toSerialize, nil
}

type NullableReservationRateSummaryDetailType struct {
	value *ReservationRateSummaryDetailType
	isSet bool
}

func (v NullableReservationRateSummaryDetailType) Get() *ReservationRateSummaryDetailType {
	return v.value
}

func (v *NullableReservationRateSummaryDetailType) Set(val *ReservationRateSummaryDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationRateSummaryDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationRateSummaryDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationRateSummaryDetailType(val *ReservationRateSummaryDetailType) *NullableReservationRateSummaryDetailType {
	return &NullableReservationRateSummaryDetailType{value: val, isSet: true}
}

func (v NullableReservationRateSummaryDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationRateSummaryDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


