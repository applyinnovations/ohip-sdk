# GroupArrangementCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrangementId** | Pointer to **float32** | Primay key of arrangement codes | [optional] 
**Code** | Pointer to **string** | Configuration code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel where the code is configured. | [optional] 
**Revenue** | Pointer to **bool** | specify whether the arrangement postings are classed as revenue. | [optional] 
**TaxTypeCode** | Pointer to **string** | information about the tax type code linked to the folio arrangment Code. | [optional] 
**TransactionCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewGroupArrangementCodeType

`func NewGroupArrangementCodeType() *GroupArrangementCodeType`

NewGroupArrangementCodeType instantiates a new GroupArrangementCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGroupArrangementCodeTypeWithDefaults

`func NewGroupArrangementCodeTypeWithDefaults() *GroupArrangementCodeType`

NewGroupArrangementCodeTypeWithDefaults instantiates a new GroupArrangementCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrangementId

`func (o *GroupArrangementCodeType) GetArrangementId() float32`

GetArrangementId returns the ArrangementId field if non-nil, zero value otherwise.

### GetArrangementIdOk

`func (o *GroupArrangementCodeType) GetArrangementIdOk() (*float32, bool)`

GetArrangementIdOk returns a tuple with the ArrangementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementId

`func (o *GroupArrangementCodeType) SetArrangementId(v float32)`

SetArrangementId sets ArrangementId field to given value.

### HasArrangementId

`func (o *GroupArrangementCodeType) HasArrangementId() bool`

HasArrangementId returns a boolean if a field has been set.

### GetCode

`func (o *GroupArrangementCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *GroupArrangementCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *GroupArrangementCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *GroupArrangementCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *GroupArrangementCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GroupArrangementCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GroupArrangementCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GroupArrangementCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *GroupArrangementCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GroupArrangementCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GroupArrangementCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GroupArrangementCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRevenue

`func (o *GroupArrangementCodeType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *GroupArrangementCodeType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *GroupArrangementCodeType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *GroupArrangementCodeType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetTaxTypeCode

`func (o *GroupArrangementCodeType) GetTaxTypeCode() string`

GetTaxTypeCode returns the TaxTypeCode field if non-nil, zero value otherwise.

### GetTaxTypeCodeOk

`func (o *GroupArrangementCodeType) GetTaxTypeCodeOk() (*string, bool)`

GetTaxTypeCodeOk returns a tuple with the TaxTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypeCode

`func (o *GroupArrangementCodeType) SetTaxTypeCode(v string)`

SetTaxTypeCode sets TaxTypeCode field to given value.

### HasTaxTypeCode

`func (o *GroupArrangementCodeType) HasTaxTypeCode() bool`

HasTaxTypeCode returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *GroupArrangementCodeType) GetTransactionCodes() CodeListType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *GroupArrangementCodeType) GetTransactionCodesOk() (*CodeListType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *GroupArrangementCodeType) SetTransactionCodes(v CodeListType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *GroupArrangementCodeType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


