# TransactionDiscounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionDiscounts** | Pointer to [**[]HotelTransactionDiscountType**](HotelTransactionDiscountType.md) | Collection of Transaction Discount Configurations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionDiscounts

`func NewTransactionDiscounts() *TransactionDiscounts`

NewTransactionDiscounts instantiates a new TransactionDiscounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiscountsWithDefaults

`func NewTransactionDiscountsWithDefaults() *TransactionDiscounts`

NewTransactionDiscountsWithDefaults instantiates a new TransactionDiscounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionDiscounts

`func (o *TransactionDiscounts) GetTransactionDiscounts() []HotelTransactionDiscountType`

GetTransactionDiscounts returns the TransactionDiscounts field if non-nil, zero value otherwise.

### GetTransactionDiscountsOk

`func (o *TransactionDiscounts) GetTransactionDiscountsOk() (*[]HotelTransactionDiscountType, bool)`

GetTransactionDiscountsOk returns a tuple with the TransactionDiscounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiscounts

`func (o *TransactionDiscounts) SetTransactionDiscounts(v []HotelTransactionDiscountType)`

SetTransactionDiscounts sets TransactionDiscounts field to given value.

### HasTransactionDiscounts

`func (o *TransactionDiscounts) HasTransactionDiscounts() bool`

HasTransactionDiscounts returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionDiscounts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionDiscounts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionDiscounts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionDiscounts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionDiscounts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionDiscounts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionDiscounts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionDiscounts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


