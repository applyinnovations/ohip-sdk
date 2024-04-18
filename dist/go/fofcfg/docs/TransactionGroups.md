# TransactionGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionGroups** | Pointer to [**[]HotelTransactionGroupType**](HotelTransactionGroupType.md) | Hotel&#39;s Transaction Group configuration. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionGroups

`func NewTransactionGroups() *TransactionGroups`

NewTransactionGroups instantiates a new TransactionGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionGroupsWithDefaults

`func NewTransactionGroupsWithDefaults() *TransactionGroups`

NewTransactionGroupsWithDefaults instantiates a new TransactionGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGroups

`func (o *TransactionGroups) GetTransactionGroups() []HotelTransactionGroupType`

GetTransactionGroups returns the TransactionGroups field if non-nil, zero value otherwise.

### GetTransactionGroupsOk

`func (o *TransactionGroups) GetTransactionGroupsOk() (*[]HotelTransactionGroupType, bool)`

GetTransactionGroupsOk returns a tuple with the TransactionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroups

`func (o *TransactionGroups) SetTransactionGroups(v []HotelTransactionGroupType)`

SetTransactionGroups sets TransactionGroups field to given value.

### HasTransactionGroups

`func (o *TransactionGroups) HasTransactionGroups() bool`

HasTransactionGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

