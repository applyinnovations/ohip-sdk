# RevenueTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Catering Revenue Type/Code. | [optional] 
**DisplaySequence** | Pointer to **float32** | Revenue Types display sequence Number | [optional] 
**FoodAndBeverage** | Pointer to **bool** | Flag for Food and Beverages. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Revenue type Code is inactive. | [optional] 
**RevenueDetails** | Pointer to [**RevenueTypeDetailsType**](RevenueTypeDetailsType.md) |  | [optional] 
**RevenueGroup** | Pointer to **string** | Revenue Group | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 

## Methods

### NewRevenueTypeType

`func NewRevenueTypeType() *RevenueTypeType`

NewRevenueTypeType instantiates a new RevenueTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueTypeTypeWithDefaults

`func NewRevenueTypeTypeWithDefaults() *RevenueTypeType`

NewRevenueTypeTypeWithDefaults instantiates a new RevenueTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RevenueTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RevenueTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RevenueTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RevenueTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *RevenueTypeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *RevenueTypeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *RevenueTypeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *RevenueTypeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetFoodAndBeverage

`func (o *RevenueTypeType) GetFoodAndBeverage() bool`

GetFoodAndBeverage returns the FoodAndBeverage field if non-nil, zero value otherwise.

### GetFoodAndBeverageOk

`func (o *RevenueTypeType) GetFoodAndBeverageOk() (*bool, bool)`

GetFoodAndBeverageOk returns a tuple with the FoodAndBeverage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFoodAndBeverage

`func (o *RevenueTypeType) SetFoodAndBeverage(v bool)`

SetFoodAndBeverage sets FoodAndBeverage field to given value.

### HasFoodAndBeverage

`func (o *RevenueTypeType) HasFoodAndBeverage() bool`

HasFoodAndBeverage returns a boolean if a field has been set.

### GetInactive

`func (o *RevenueTypeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RevenueTypeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RevenueTypeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RevenueTypeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetRevenueDetails

`func (o *RevenueTypeType) GetRevenueDetails() RevenueTypeDetailsType`

GetRevenueDetails returns the RevenueDetails field if non-nil, zero value otherwise.

### GetRevenueDetailsOk

`func (o *RevenueTypeType) GetRevenueDetailsOk() (*RevenueTypeDetailsType, bool)`

GetRevenueDetailsOk returns a tuple with the RevenueDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDetails

`func (o *RevenueTypeType) SetRevenueDetails(v RevenueTypeDetailsType)`

SetRevenueDetails sets RevenueDetails field to given value.

### HasRevenueDetails

`func (o *RevenueTypeType) HasRevenueDetails() bool`

HasRevenueDetails returns a boolean if a field has been set.

### GetRevenueGroup

`func (o *RevenueTypeType) GetRevenueGroup() string`

GetRevenueGroup returns the RevenueGroup field if non-nil, zero value otherwise.

### GetRevenueGroupOk

`func (o *RevenueTypeType) GetRevenueGroupOk() (*string, bool)`

GetRevenueGroupOk returns a tuple with the RevenueGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueGroup

`func (o *RevenueTypeType) SetRevenueGroup(v string)`

SetRevenueGroup sets RevenueGroup field to given value.

### HasRevenueGroup

`func (o *RevenueTypeType) HasRevenueGroup() bool`

HasRevenueGroup returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *RevenueTypeType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *RevenueTypeType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *RevenueTypeType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *RevenueTypeType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


