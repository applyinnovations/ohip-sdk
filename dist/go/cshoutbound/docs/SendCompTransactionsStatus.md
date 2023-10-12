# SendCompTransactionsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompPostings** | Pointer to [**[]CompTransactionInfoType**](CompTransactionInfoType.md) | List of comp transactions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSendCompTransactionsStatus

`func NewSendCompTransactionsStatus() *SendCompTransactionsStatus`

NewSendCompTransactionsStatus instantiates a new SendCompTransactionsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendCompTransactionsStatusWithDefaults

`func NewSendCompTransactionsStatusWithDefaults() *SendCompTransactionsStatus`

NewSendCompTransactionsStatusWithDefaults instantiates a new SendCompTransactionsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompPostings

`func (o *SendCompTransactionsStatus) GetCompPostings() []CompTransactionInfoType`

GetCompPostings returns the CompPostings field if non-nil, zero value otherwise.

### GetCompPostingsOk

`func (o *SendCompTransactionsStatus) GetCompPostingsOk() (*[]CompTransactionInfoType, bool)`

GetCompPostingsOk returns a tuple with the CompPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPostings

`func (o *SendCompTransactionsStatus) SetCompPostings(v []CompTransactionInfoType)`

SetCompPostings sets CompPostings field to given value.

### HasCompPostings

`func (o *SendCompTransactionsStatus) HasCompPostings() bool`

HasCompPostings returns a boolean if a field has been set.

### GetLinks

`func (o *SendCompTransactionsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SendCompTransactionsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SendCompTransactionsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SendCompTransactionsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SendCompTransactionsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SendCompTransactionsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SendCompTransactionsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SendCompTransactionsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


