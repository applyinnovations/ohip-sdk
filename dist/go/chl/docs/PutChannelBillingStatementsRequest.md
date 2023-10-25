# PutChannelBillingStatementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelBillingStatements** | Pointer to [**[]ChannelBillingStatementType**](ChannelBillingStatementType.md) | Provides detailed information regarding channel billing statement. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelBillingStatementsRequest

`func NewPutChannelBillingStatementsRequest() *PutChannelBillingStatementsRequest`

NewPutChannelBillingStatementsRequest instantiates a new PutChannelBillingStatementsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelBillingStatementsRequestWithDefaults

`func NewPutChannelBillingStatementsRequestWithDefaults() *PutChannelBillingStatementsRequest`

NewPutChannelBillingStatementsRequestWithDefaults instantiates a new PutChannelBillingStatementsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelBillingStatements

`func (o *PutChannelBillingStatementsRequest) GetChannelBillingStatements() []ChannelBillingStatementType`

GetChannelBillingStatements returns the ChannelBillingStatements field if non-nil, zero value otherwise.

### GetChannelBillingStatementsOk

`func (o *PutChannelBillingStatementsRequest) GetChannelBillingStatementsOk() (*[]ChannelBillingStatementType, bool)`

GetChannelBillingStatementsOk returns a tuple with the ChannelBillingStatements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelBillingStatements

`func (o *PutChannelBillingStatementsRequest) SetChannelBillingStatements(v []ChannelBillingStatementType)`

SetChannelBillingStatements sets ChannelBillingStatements field to given value.

### HasChannelBillingStatements

`func (o *PutChannelBillingStatementsRequest) HasChannelBillingStatements() bool`

HasChannelBillingStatements returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelBillingStatementsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelBillingStatementsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelBillingStatementsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelBillingStatementsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelBillingStatementsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelBillingStatementsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelBillingStatementsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelBillingStatementsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


