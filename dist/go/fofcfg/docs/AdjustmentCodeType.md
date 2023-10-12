# AdjustmentCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Code** | Pointer to **string** | Adjustment Reason Code | [optional] 
**CodeType** | Pointer to [**AdjustmentReasonCodeType**](AdjustmentReasonCodeType.md) |  | [optional] 
**Description** | Pointer to **string** | Adjustment Reason Description | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**BIRGuest** | Pointer to **string** | BIR Guest Type in Adjustment Codes. | [optional] 
**AmountOrPercentageFlag** | Pointer to [**AmountOrPercentage**](AmountOrPercentage.md) |  | [optional] 

## Methods

### NewAdjustmentCodeType

`func NewAdjustmentCodeType() *AdjustmentCodeType`

NewAdjustmentCodeType instantiates a new AdjustmentCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustmentCodeTypeWithDefaults

`func NewAdjustmentCodeTypeWithDefaults() *AdjustmentCodeType`

NewAdjustmentCodeTypeWithDefaults instantiates a new AdjustmentCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *AdjustmentCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AdjustmentCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AdjustmentCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AdjustmentCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *AdjustmentCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AdjustmentCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AdjustmentCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AdjustmentCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCodeType

`func (o *AdjustmentCodeType) GetCodeType() AdjustmentReasonCodeType`

GetCodeType returns the CodeType field if non-nil, zero value otherwise.

### GetCodeTypeOk

`func (o *AdjustmentCodeType) GetCodeTypeOk() (*AdjustmentReasonCodeType, bool)`

GetCodeTypeOk returns a tuple with the CodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeType

`func (o *AdjustmentCodeType) SetCodeType(v AdjustmentReasonCodeType)`

SetCodeType sets CodeType field to given value.

### HasCodeType

`func (o *AdjustmentCodeType) HasCodeType() bool`

HasCodeType returns a boolean if a field has been set.

### GetDescription

`func (o *AdjustmentCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AdjustmentCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AdjustmentCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AdjustmentCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAmount

`func (o *AdjustmentCodeType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AdjustmentCodeType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AdjustmentCodeType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AdjustmentCodeType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetBIRGuest

`func (o *AdjustmentCodeType) GetBIRGuest() string`

GetBIRGuest returns the BIRGuest field if non-nil, zero value otherwise.

### GetBIRGuestOk

`func (o *AdjustmentCodeType) GetBIRGuestOk() (*string, bool)`

GetBIRGuestOk returns a tuple with the BIRGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBIRGuest

`func (o *AdjustmentCodeType) SetBIRGuest(v string)`

SetBIRGuest sets BIRGuest field to given value.

### HasBIRGuest

`func (o *AdjustmentCodeType) HasBIRGuest() bool`

HasBIRGuest returns a boolean if a field has been set.

### GetAmountOrPercentageFlag

`func (o *AdjustmentCodeType) GetAmountOrPercentageFlag() AmountOrPercentage`

GetAmountOrPercentageFlag returns the AmountOrPercentageFlag field if non-nil, zero value otherwise.

### GetAmountOrPercentageFlagOk

`func (o *AdjustmentCodeType) GetAmountOrPercentageFlagOk() (*AmountOrPercentage, bool)`

GetAmountOrPercentageFlagOk returns a tuple with the AmountOrPercentageFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountOrPercentageFlag

`func (o *AdjustmentCodeType) SetAmountOrPercentageFlag(v AmountOrPercentage)`

SetAmountOrPercentageFlag sets AmountOrPercentageFlag field to given value.

### HasAmountOrPercentageFlag

`func (o *AdjustmentCodeType) HasAmountOrPercentageFlag() bool`

HasAmountOrPercentageFlag returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


