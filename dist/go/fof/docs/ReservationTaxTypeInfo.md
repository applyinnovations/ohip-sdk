# ReservationTaxTypeInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the Tax Type. | [optional] 
**CollectingAgentTax** | Pointer to **bool** | A boolean flag for Collecting Agent Tax | [optional] 
**Description** | Pointer to **string** | Description of the Tax Type. | [optional] 
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**MinimumLengthOfStay** | Pointer to **int32** | Minimun Length of Stay. | [optional] 
**PrintAutoAdjust** | Pointer to **bool** | Print auto adjust information for this tax type on the tax exempt report. | [optional] 
**ReportExemptDays** | Pointer to **int32** | Number of days after which the guest will be tax exempt. Only used for tax exempt report. | [optional] 
**ReportTaxPercentage** | Pointer to **float32** | Tax percentage. Only used for tax exempt report. | [optional] 
**TaxExemptNo** | Pointer to **string** | Tax exempt number on the profile. | [optional] 

## Methods

### NewReservationTaxTypeInfo

`func NewReservationTaxTypeInfo() *ReservationTaxTypeInfo`

NewReservationTaxTypeInfo instantiates a new ReservationTaxTypeInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationTaxTypeInfoWithDefaults

`func NewReservationTaxTypeInfoWithDefaults() *ReservationTaxTypeInfo`

NewReservationTaxTypeInfoWithDefaults instantiates a new ReservationTaxTypeInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ReservationTaxTypeInfo) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ReservationTaxTypeInfo) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ReservationTaxTypeInfo) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ReservationTaxTypeInfo) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCollectingAgentTax

`func (o *ReservationTaxTypeInfo) GetCollectingAgentTax() bool`

GetCollectingAgentTax returns the CollectingAgentTax field if non-nil, zero value otherwise.

### GetCollectingAgentTaxOk

`func (o *ReservationTaxTypeInfo) GetCollectingAgentTaxOk() (*bool, bool)`

GetCollectingAgentTaxOk returns a tuple with the CollectingAgentTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectingAgentTax

`func (o *ReservationTaxTypeInfo) SetCollectingAgentTax(v bool)`

SetCollectingAgentTax sets CollectingAgentTax field to given value.

### HasCollectingAgentTax

`func (o *ReservationTaxTypeInfo) HasCollectingAgentTax() bool`

HasCollectingAgentTax returns a boolean if a field has been set.

### GetDescription

`func (o *ReservationTaxTypeInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReservationTaxTypeInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReservationTaxTypeInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReservationTaxTypeInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationTaxTypeInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationTaxTypeInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationTaxTypeInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationTaxTypeInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMinimumLengthOfStay

`func (o *ReservationTaxTypeInfo) GetMinimumLengthOfStay() int32`

GetMinimumLengthOfStay returns the MinimumLengthOfStay field if non-nil, zero value otherwise.

### GetMinimumLengthOfStayOk

`func (o *ReservationTaxTypeInfo) GetMinimumLengthOfStayOk() (*int32, bool)`

GetMinimumLengthOfStayOk returns a tuple with the MinimumLengthOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumLengthOfStay

`func (o *ReservationTaxTypeInfo) SetMinimumLengthOfStay(v int32)`

SetMinimumLengthOfStay sets MinimumLengthOfStay field to given value.

### HasMinimumLengthOfStay

`func (o *ReservationTaxTypeInfo) HasMinimumLengthOfStay() bool`

HasMinimumLengthOfStay returns a boolean if a field has been set.

### GetPrintAutoAdjust

`func (o *ReservationTaxTypeInfo) GetPrintAutoAdjust() bool`

GetPrintAutoAdjust returns the PrintAutoAdjust field if non-nil, zero value otherwise.

### GetPrintAutoAdjustOk

`func (o *ReservationTaxTypeInfo) GetPrintAutoAdjustOk() (*bool, bool)`

GetPrintAutoAdjustOk returns a tuple with the PrintAutoAdjust field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintAutoAdjust

`func (o *ReservationTaxTypeInfo) SetPrintAutoAdjust(v bool)`

SetPrintAutoAdjust sets PrintAutoAdjust field to given value.

### HasPrintAutoAdjust

`func (o *ReservationTaxTypeInfo) HasPrintAutoAdjust() bool`

HasPrintAutoAdjust returns a boolean if a field has been set.

### GetReportExemptDays

`func (o *ReservationTaxTypeInfo) GetReportExemptDays() int32`

GetReportExemptDays returns the ReportExemptDays field if non-nil, zero value otherwise.

### GetReportExemptDaysOk

`func (o *ReservationTaxTypeInfo) GetReportExemptDaysOk() (*int32, bool)`

GetReportExemptDaysOk returns a tuple with the ReportExemptDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportExemptDays

`func (o *ReservationTaxTypeInfo) SetReportExemptDays(v int32)`

SetReportExemptDays sets ReportExemptDays field to given value.

### HasReportExemptDays

`func (o *ReservationTaxTypeInfo) HasReportExemptDays() bool`

HasReportExemptDays returns a boolean if a field has been set.

### GetReportTaxPercentage

`func (o *ReservationTaxTypeInfo) GetReportTaxPercentage() float32`

GetReportTaxPercentage returns the ReportTaxPercentage field if non-nil, zero value otherwise.

### GetReportTaxPercentageOk

`func (o *ReservationTaxTypeInfo) GetReportTaxPercentageOk() (*float32, bool)`

GetReportTaxPercentageOk returns a tuple with the ReportTaxPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportTaxPercentage

`func (o *ReservationTaxTypeInfo) SetReportTaxPercentage(v float32)`

SetReportTaxPercentage sets ReportTaxPercentage field to given value.

### HasReportTaxPercentage

`func (o *ReservationTaxTypeInfo) HasReportTaxPercentage() bool`

HasReportTaxPercentage returns a boolean if a field has been set.

### GetTaxExemptNo

`func (o *ReservationTaxTypeInfo) GetTaxExemptNo() string`

GetTaxExemptNo returns the TaxExemptNo field if non-nil, zero value otherwise.

### GetTaxExemptNoOk

`func (o *ReservationTaxTypeInfo) GetTaxExemptNoOk() (*string, bool)`

GetTaxExemptNoOk returns a tuple with the TaxExemptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxExemptNo

`func (o *ReservationTaxTypeInfo) SetTaxExemptNo(v string)`

SetTaxExemptNo sets TaxExemptNo field to given value.

### HasTaxExemptNo

`func (o *ReservationTaxTypeInfo) HasTaxExemptNo() bool`

HasTaxExemptNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


