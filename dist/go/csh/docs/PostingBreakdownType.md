# PostingBreakdownType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrossAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**NetAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Taxes** | Pointer to [**[]GeneratePostingType**](GeneratePostingType.md) | Taxes breakout associated to postings | [optional] 

## Methods

### NewPostingBreakdownType

`func NewPostingBreakdownType() *PostingBreakdownType`

NewPostingBreakdownType instantiates a new PostingBreakdownType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingBreakdownTypeWithDefaults

`func NewPostingBreakdownTypeWithDefaults() *PostingBreakdownType`

NewPostingBreakdownTypeWithDefaults instantiates a new PostingBreakdownType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGrossAmount

`func (o *PostingBreakdownType) GetGrossAmount() CurrencyAmountType`

GetGrossAmount returns the GrossAmount field if non-nil, zero value otherwise.

### GetGrossAmountOk

`func (o *PostingBreakdownType) GetGrossAmountOk() (*CurrencyAmountType, bool)`

GetGrossAmountOk returns a tuple with the GrossAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrossAmount

`func (o *PostingBreakdownType) SetGrossAmount(v CurrencyAmountType)`

SetGrossAmount sets GrossAmount field to given value.

### HasGrossAmount

`func (o *PostingBreakdownType) HasGrossAmount() bool`

HasGrossAmount returns a boolean if a field has been set.

### GetNetAmount

`func (o *PostingBreakdownType) GetNetAmount() CurrencyAmountType`

GetNetAmount returns the NetAmount field if non-nil, zero value otherwise.

### GetNetAmountOk

`func (o *PostingBreakdownType) GetNetAmountOk() (*CurrencyAmountType, bool)`

GetNetAmountOk returns a tuple with the NetAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetAmount

`func (o *PostingBreakdownType) SetNetAmount(v CurrencyAmountType)`

SetNetAmount sets NetAmount field to given value.

### HasNetAmount

`func (o *PostingBreakdownType) HasNetAmount() bool`

HasNetAmount returns a boolean if a field has been set.

### GetTaxes

`func (o *PostingBreakdownType) GetTaxes() []GeneratePostingType`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *PostingBreakdownType) GetTaxesOk() (*[]GeneratePostingType, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *PostingBreakdownType) SetTaxes(v []GeneratePostingType)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *PostingBreakdownType) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


