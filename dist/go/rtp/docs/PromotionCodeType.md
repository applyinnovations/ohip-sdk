# PromotionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromotionCode** | Pointer to **string** | An alphanumeric code for the promotion. This code may not be changed once the promotion code is saved. | [optional] 
**PromotionCodeDetails** | Pointer to [**PromotionCodeDetailsType**](PromotionCodeDetailsType.md) |  | [optional] 

## Methods

### NewPromotionCodeType

`func NewPromotionCodeType() *PromotionCodeType`

NewPromotionCodeType instantiates a new PromotionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionCodeTypeWithDefaults

`func NewPromotionCodeTypeWithDefaults() *PromotionCodeType`

NewPromotionCodeTypeWithDefaults instantiates a new PromotionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPromotionCode

`func (o *PromotionCodeType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *PromotionCodeType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *PromotionCodeType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *PromotionCodeType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetPromotionCodeDetails

`func (o *PromotionCodeType) GetPromotionCodeDetails() PromotionCodeDetailsType`

GetPromotionCodeDetails returns the PromotionCodeDetails field if non-nil, zero value otherwise.

### GetPromotionCodeDetailsOk

`func (o *PromotionCodeType) GetPromotionCodeDetailsOk() (*PromotionCodeDetailsType, bool)`

GetPromotionCodeDetailsOk returns a tuple with the PromotionCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCodeDetails

`func (o *PromotionCodeType) SetPromotionCodeDetails(v PromotionCodeDetailsType)`

SetPromotionCodeDetails sets PromotionCodeDetails field to given value.

### HasPromotionCodeDetails

`func (o *PromotionCodeType) HasPromotionCodeDetails() bool`

HasPromotionCodeDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


