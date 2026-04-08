# AuthorizerGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Authorizer Group. | [optional] 
**RateCode** | Pointer to **string** | Rate Code of the Authorizer Group. | [optional] 
**TransactionLimits** | Pointer to [**[]AuthorizerTrxLimitType**](AuthorizerTrxLimitType.md) | Set of Transaction Limit configured for the Authorizer Group. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the Authorizer Group belongs to. | [optional] 
**Code** | Pointer to **string** | Authorizer Group code. | [optional] 

## Methods

### NewAuthorizerGroupType

`func NewAuthorizerGroupType() *AuthorizerGroupType`

NewAuthorizerGroupType instantiates a new AuthorizerGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerGroupTypeWithDefaults

`func NewAuthorizerGroupTypeWithDefaults() *AuthorizerGroupType`

NewAuthorizerGroupTypeWithDefaults instantiates a new AuthorizerGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *AuthorizerGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AuthorizerGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AuthorizerGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AuthorizerGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRateCode

`func (o *AuthorizerGroupType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *AuthorizerGroupType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *AuthorizerGroupType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *AuthorizerGroupType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetTransactionLimits

`func (o *AuthorizerGroupType) GetTransactionLimits() []AuthorizerTrxLimitType`

GetTransactionLimits returns the TransactionLimits field if non-nil, zero value otherwise.

### GetTransactionLimitsOk

`func (o *AuthorizerGroupType) GetTransactionLimitsOk() (*[]AuthorizerTrxLimitType, bool)`

GetTransactionLimitsOk returns a tuple with the TransactionLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionLimits

`func (o *AuthorizerGroupType) SetTransactionLimits(v []AuthorizerTrxLimitType)`

SetTransactionLimits sets TransactionLimits field to given value.

### HasTransactionLimits

`func (o *AuthorizerGroupType) HasTransactionLimits() bool`

HasTransactionLimits returns a boolean if a field has been set.

### GetHotelId

`func (o *AuthorizerGroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AuthorizerGroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AuthorizerGroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AuthorizerGroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *AuthorizerGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AuthorizerGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AuthorizerGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AuthorizerGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


