# PostingAmountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinimumAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**MaximumAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewPostingAmountType

`func NewPostingAmountType() *PostingAmountType`

NewPostingAmountType instantiates a new PostingAmountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingAmountTypeWithDefaults

`func NewPostingAmountTypeWithDefaults() *PostingAmountType`

NewPostingAmountTypeWithDefaults instantiates a new PostingAmountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinimumAmount

`func (o *PostingAmountType) GetMinimumAmount() CurrencyAmountType`

GetMinimumAmount returns the MinimumAmount field if non-nil, zero value otherwise.

### GetMinimumAmountOk

`func (o *PostingAmountType) GetMinimumAmountOk() (*CurrencyAmountType, bool)`

GetMinimumAmountOk returns a tuple with the MinimumAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumAmount

`func (o *PostingAmountType) SetMinimumAmount(v CurrencyAmountType)`

SetMinimumAmount sets MinimumAmount field to given value.

### HasMinimumAmount

`func (o *PostingAmountType) HasMinimumAmount() bool`

HasMinimumAmount returns a boolean if a field has been set.

### GetMaximumAmount

`func (o *PostingAmountType) GetMaximumAmount() CurrencyAmountType`

GetMaximumAmount returns the MaximumAmount field if non-nil, zero value otherwise.

### GetMaximumAmountOk

`func (o *PostingAmountType) GetMaximumAmountOk() (*CurrencyAmountType, bool)`

GetMaximumAmountOk returns a tuple with the MaximumAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumAmount

`func (o *PostingAmountType) SetMaximumAmount(v CurrencyAmountType)`

SetMaximumAmount sets MaximumAmount field to given value.

### HasMaximumAmount

`func (o *PostingAmountType) HasMaximumAmount() bool`

HasMaximumAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


