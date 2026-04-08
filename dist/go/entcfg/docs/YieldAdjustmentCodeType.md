# YieldAdjustmentCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Code** | Pointer to **string** | Code of the Adjustment Codes. | [optional] 
**Description** | Pointer to **string** | Description of the Adjustment Codes. | [optional] 
**Type** | Pointer to [**YieldAdjustmentTypeType**](YieldAdjustmentTypeType.md) |  | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 

## Methods

### NewYieldAdjustmentCodeType

`func NewYieldAdjustmentCodeType() *YieldAdjustmentCodeType`

NewYieldAdjustmentCodeType instantiates a new YieldAdjustmentCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldAdjustmentCodeTypeWithDefaults

`func NewYieldAdjustmentCodeTypeWithDefaults() *YieldAdjustmentCodeType`

NewYieldAdjustmentCodeTypeWithDefaults instantiates a new YieldAdjustmentCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *YieldAdjustmentCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldAdjustmentCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldAdjustmentCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldAdjustmentCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *YieldAdjustmentCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *YieldAdjustmentCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *YieldAdjustmentCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *YieldAdjustmentCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *YieldAdjustmentCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldAdjustmentCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldAdjustmentCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldAdjustmentCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *YieldAdjustmentCodeType) GetType() YieldAdjustmentTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *YieldAdjustmentCodeType) GetTypeOk() (*YieldAdjustmentTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *YieldAdjustmentCodeType) SetType(v YieldAdjustmentTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *YieldAdjustmentCodeType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAmount

`func (o *YieldAdjustmentCodeType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *YieldAdjustmentCodeType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *YieldAdjustmentCodeType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *YieldAdjustmentCodeType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *YieldAdjustmentCodeType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *YieldAdjustmentCodeType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *YieldAdjustmentCodeType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *YieldAdjustmentCodeType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


