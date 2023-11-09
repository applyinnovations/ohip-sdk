# TransactionGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TransactionGroup** | Pointer to [**HotelTransactionGroupType**](HotelTransactionGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTransactionGroup

`func NewTransactionGroup() *TransactionGroup`

NewTransactionGroup instantiates a new TransactionGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionGroupWithDefaults

`func NewTransactionGroupWithDefaults() *TransactionGroup`

NewTransactionGroupWithDefaults instantiates a new TransactionGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionGroup) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionGroup) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionGroup) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionGroup) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *TransactionGroup) GetTransactionGroup() HotelTransactionGroupType`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *TransactionGroup) GetTransactionGroupOk() (*HotelTransactionGroupType, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *TransactionGroup) SetTransactionGroup(v HotelTransactionGroupType)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *TransactionGroup) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionGroup) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionGroup) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionGroup) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionGroup) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


