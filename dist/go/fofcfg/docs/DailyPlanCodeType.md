# DailyPlanCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel where the code is configured. | [optional] 
**Code** | Pointer to **string** | Configuration code. | [optional] 
**ArrangementId** | Pointer to **float32** | Primay key of arrangement codes | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**TaxTypeCode** | Pointer to **string** | information about the tax type code linked to the folio arrangment Code. | [optional] 
**Revenue** | Pointer to **bool** | specify whether the arrangement postings are classed as revenue. | [optional] 
**TransactionCodes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewDailyPlanCodeType

`func NewDailyPlanCodeType() *DailyPlanCodeType`

NewDailyPlanCodeType instantiates a new DailyPlanCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyPlanCodeTypeWithDefaults

`func NewDailyPlanCodeTypeWithDefaults() *DailyPlanCodeType`

NewDailyPlanCodeTypeWithDefaults instantiates a new DailyPlanCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DailyPlanCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DailyPlanCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DailyPlanCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DailyPlanCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *DailyPlanCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *DailyPlanCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *DailyPlanCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *DailyPlanCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetArrangementId

`func (o *DailyPlanCodeType) GetArrangementId() float32`

GetArrangementId returns the ArrangementId field if non-nil, zero value otherwise.

### GetArrangementIdOk

`func (o *DailyPlanCodeType) GetArrangementIdOk() (*float32, bool)`

GetArrangementIdOk returns a tuple with the ArrangementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementId

`func (o *DailyPlanCodeType) SetArrangementId(v float32)`

SetArrangementId sets ArrangementId field to given value.

### HasArrangementId

`func (o *DailyPlanCodeType) HasArrangementId() bool`

HasArrangementId returns a boolean if a field has been set.

### GetDescription

`func (o *DailyPlanCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DailyPlanCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DailyPlanCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DailyPlanCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTaxTypeCode

`func (o *DailyPlanCodeType) GetTaxTypeCode() string`

GetTaxTypeCode returns the TaxTypeCode field if non-nil, zero value otherwise.

### GetTaxTypeCodeOk

`func (o *DailyPlanCodeType) GetTaxTypeCodeOk() (*string, bool)`

GetTaxTypeCodeOk returns a tuple with the TaxTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypeCode

`func (o *DailyPlanCodeType) SetTaxTypeCode(v string)`

SetTaxTypeCode sets TaxTypeCode field to given value.

### HasTaxTypeCode

`func (o *DailyPlanCodeType) HasTaxTypeCode() bool`

HasTaxTypeCode returns a boolean if a field has been set.

### GetRevenue

`func (o *DailyPlanCodeType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *DailyPlanCodeType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *DailyPlanCodeType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *DailyPlanCodeType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *DailyPlanCodeType) GetTransactionCodes() []string`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *DailyPlanCodeType) GetTransactionCodesOk() (*[]string, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *DailyPlanCodeType) SetTransactionCodes(v []string)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *DailyPlanCodeType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


