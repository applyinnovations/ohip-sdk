# TransactionDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionDiscount** | Pointer to [**HotelTransactionDiscountType**](HotelTransactionDiscountType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionDiscount

`func NewTransactionDiscount() *TransactionDiscount`

NewTransactionDiscount instantiates a new TransactionDiscount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiscountWithDefaults

`func NewTransactionDiscountWithDefaults() *TransactionDiscount`

NewTransactionDiscountWithDefaults instantiates a new TransactionDiscount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionDiscount) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionDiscount) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionDiscount) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionDiscount) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionDiscount

`func (o *TransactionDiscount) GetTransactionDiscount() HotelTransactionDiscountType`

GetTransactionDiscount returns the TransactionDiscount field if non-nil, zero value otherwise.

### GetTransactionDiscountOk

`func (o *TransactionDiscount) GetTransactionDiscountOk() (*HotelTransactionDiscountType, bool)`

GetTransactionDiscountOk returns a tuple with the TransactionDiscount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiscount

`func (o *TransactionDiscount) SetTransactionDiscount(v HotelTransactionDiscountType)`

SetTransactionDiscount sets TransactionDiscount field to given value.

### HasTransactionDiscount

`func (o *TransactionDiscount) HasTransactionDiscount() bool`

HasTransactionDiscount returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionDiscount) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionDiscount) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionDiscount) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionDiscount) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


