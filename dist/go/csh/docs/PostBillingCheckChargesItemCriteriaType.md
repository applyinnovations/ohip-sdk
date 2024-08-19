# PostBillingCheckChargesItemCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostingRemark** | Pointer to **string** | Text describing any applicable detail of the posting. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code to use for the posting. | [optional] 

## Methods

### NewPostBillingCheckChargesItemCriteriaType

`func NewPostBillingCheckChargesItemCriteriaType() *PostBillingCheckChargesItemCriteriaType`

NewPostBillingCheckChargesItemCriteriaType instantiates a new PostBillingCheckChargesItemCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBillingCheckChargesItemCriteriaTypeWithDefaults

`func NewPostBillingCheckChargesItemCriteriaTypeWithDefaults() *PostBillingCheckChargesItemCriteriaType`

NewPostBillingCheckChargesItemCriteriaTypeWithDefaults instantiates a new PostBillingCheckChargesItemCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostingRemark

`func (o *PostBillingCheckChargesItemCriteriaType) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *PostBillingCheckChargesItemCriteriaType) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *PostBillingCheckChargesItemCriteriaType) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *PostBillingCheckChargesItemCriteriaType) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetPrice

`func (o *PostBillingCheckChargesItemCriteriaType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PostBillingCheckChargesItemCriteriaType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PostBillingCheckChargesItemCriteriaType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *PostBillingCheckChargesItemCriteriaType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetTransactionCode

`func (o *PostBillingCheckChargesItemCriteriaType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *PostBillingCheckChargesItemCriteriaType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *PostBillingCheckChargesItemCriteriaType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *PostBillingCheckChargesItemCriteriaType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


