# TaxTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Code** | Pointer to **string** | Code of the Tax Type. | [optional] 
**Description** | Pointer to **string** | Description of the Tax Type. | [optional] 
**CollectingAgentTax** | Pointer to **bool** | A boolean flag for Collecting Agent Tax | [optional] 
**PrintAutoAdjust** | Pointer to **bool** | Print auto adjust information for this tax type on the tax exempt report. | [optional] 
**ReportExemptDays** | Pointer to **int32** | Number of days after which the guest will be tax exempt. Only used for tax exempt report. | [optional] 
**ReportTaxPerc** | Pointer to **float32** | Tax percentage. Only used for tax exempt report. | [optional] 
**MinimumLengthOfStay** | Pointer to **int32** | Minimun Length of Stay. | [optional] 

## Methods

### NewTaxTypeType

`func NewTaxTypeType() *TaxTypeType`

NewTaxTypeType instantiates a new TaxTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypeTypeWithDefaults

`func NewTaxTypeTypeWithDefaults() *TaxTypeType`

NewTaxTypeTypeWithDefaults instantiates a new TaxTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TaxTypeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TaxTypeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TaxTypeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TaxTypeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *TaxTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TaxTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TaxTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TaxTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TaxTypeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaxTypeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaxTypeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaxTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCollectingAgentTax

`func (o *TaxTypeType) GetCollectingAgentTax() bool`

GetCollectingAgentTax returns the CollectingAgentTax field if non-nil, zero value otherwise.

### GetCollectingAgentTaxOk

`func (o *TaxTypeType) GetCollectingAgentTaxOk() (*bool, bool)`

GetCollectingAgentTaxOk returns a tuple with the CollectingAgentTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectingAgentTax

`func (o *TaxTypeType) SetCollectingAgentTax(v bool)`

SetCollectingAgentTax sets CollectingAgentTax field to given value.

### HasCollectingAgentTax

`func (o *TaxTypeType) HasCollectingAgentTax() bool`

HasCollectingAgentTax returns a boolean if a field has been set.

### GetPrintAutoAdjust

`func (o *TaxTypeType) GetPrintAutoAdjust() bool`

GetPrintAutoAdjust returns the PrintAutoAdjust field if non-nil, zero value otherwise.

### GetPrintAutoAdjustOk

`func (o *TaxTypeType) GetPrintAutoAdjustOk() (*bool, bool)`

GetPrintAutoAdjustOk returns a tuple with the PrintAutoAdjust field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintAutoAdjust

`func (o *TaxTypeType) SetPrintAutoAdjust(v bool)`

SetPrintAutoAdjust sets PrintAutoAdjust field to given value.

### HasPrintAutoAdjust

`func (o *TaxTypeType) HasPrintAutoAdjust() bool`

HasPrintAutoAdjust returns a boolean if a field has been set.

### GetReportExemptDays

`func (o *TaxTypeType) GetReportExemptDays() int32`

GetReportExemptDays returns the ReportExemptDays field if non-nil, zero value otherwise.

### GetReportExemptDaysOk

`func (o *TaxTypeType) GetReportExemptDaysOk() (*int32, bool)`

GetReportExemptDaysOk returns a tuple with the ReportExemptDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportExemptDays

`func (o *TaxTypeType) SetReportExemptDays(v int32)`

SetReportExemptDays sets ReportExemptDays field to given value.

### HasReportExemptDays

`func (o *TaxTypeType) HasReportExemptDays() bool`

HasReportExemptDays returns a boolean if a field has been set.

### GetReportTaxPerc

`func (o *TaxTypeType) GetReportTaxPerc() float32`

GetReportTaxPerc returns the ReportTaxPerc field if non-nil, zero value otherwise.

### GetReportTaxPercOk

`func (o *TaxTypeType) GetReportTaxPercOk() (*float32, bool)`

GetReportTaxPercOk returns a tuple with the ReportTaxPerc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportTaxPerc

`func (o *TaxTypeType) SetReportTaxPerc(v float32)`

SetReportTaxPerc sets ReportTaxPerc field to given value.

### HasReportTaxPerc

`func (o *TaxTypeType) HasReportTaxPerc() bool`

HasReportTaxPerc returns a boolean if a field has been set.

### GetMinimumLengthOfStay

`func (o *TaxTypeType) GetMinimumLengthOfStay() int32`

GetMinimumLengthOfStay returns the MinimumLengthOfStay field if non-nil, zero value otherwise.

### GetMinimumLengthOfStayOk

`func (o *TaxTypeType) GetMinimumLengthOfStayOk() (*int32, bool)`

GetMinimumLengthOfStayOk returns a tuple with the MinimumLengthOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumLengthOfStay

`func (o *TaxTypeType) SetMinimumLengthOfStay(v int32)`

SetMinimumLengthOfStay sets MinimumLengthOfStay field to given value.

### HasMinimumLengthOfStay

`func (o *TaxTypeType) HasMinimumLengthOfStay() bool`

HasMinimumLengthOfStay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


