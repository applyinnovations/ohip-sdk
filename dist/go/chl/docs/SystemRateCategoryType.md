# SystemRateCategoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inactive** | Pointer to **bool** | Indicates whether external system rate category is active or not. | [optional] 
**Negotiated** | Pointer to **bool** | Indicates whether external system rate category is negotiated or not. | [optional] 
**RateCategoryCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ShoppingCategory** | Pointer to **string** | Shopping category of rate category external system. | [optional] 

## Methods

### NewSystemRateCategoryType

`func NewSystemRateCategoryType() *SystemRateCategoryType`

NewSystemRateCategoryType instantiates a new SystemRateCategoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemRateCategoryTypeWithDefaults

`func NewSystemRateCategoryTypeWithDefaults() *SystemRateCategoryType`

NewSystemRateCategoryTypeWithDefaults instantiates a new SystemRateCategoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInactive

`func (o *SystemRateCategoryType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *SystemRateCategoryType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *SystemRateCategoryType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *SystemRateCategoryType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetNegotiated

`func (o *SystemRateCategoryType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *SystemRateCategoryType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *SystemRateCategoryType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *SystemRateCategoryType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetRateCategoryCode

`func (o *SystemRateCategoryType) GetRateCategoryCode() CodeDescriptionType`

GetRateCategoryCode returns the RateCategoryCode field if non-nil, zero value otherwise.

### GetRateCategoryCodeOk

`func (o *SystemRateCategoryType) GetRateCategoryCodeOk() (*CodeDescriptionType, bool)`

GetRateCategoryCodeOk returns a tuple with the RateCategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategoryCode

`func (o *SystemRateCategoryType) SetRateCategoryCode(v CodeDescriptionType)`

SetRateCategoryCode sets RateCategoryCode field to given value.

### HasRateCategoryCode

`func (o *SystemRateCategoryType) HasRateCategoryCode() bool`

HasRateCategoryCode returns a boolean if a field has been set.

### GetShoppingCategory

`func (o *SystemRateCategoryType) GetShoppingCategory() string`

GetShoppingCategory returns the ShoppingCategory field if non-nil, zero value otherwise.

### GetShoppingCategoryOk

`func (o *SystemRateCategoryType) GetShoppingCategoryOk() (*string, bool)`

GetShoppingCategoryOk returns a tuple with the ShoppingCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoppingCategory

`func (o *SystemRateCategoryType) SetShoppingCategory(v string)`

SetShoppingCategory sets ShoppingCategory field to given value.

### HasShoppingCategory

`func (o *SystemRateCategoryType) HasShoppingCategory() bool`

HasShoppingCategory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


