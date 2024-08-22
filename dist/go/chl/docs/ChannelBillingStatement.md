# ChannelBillingStatement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelBillingStatement** | Pointer to [**ChannelBillingStatementType**](ChannelBillingStatementType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelBillingStatement

`func NewChannelBillingStatement() *ChannelBillingStatement`

NewChannelBillingStatement instantiates a new ChannelBillingStatement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelBillingStatementWithDefaults

`func NewChannelBillingStatementWithDefaults() *ChannelBillingStatement`

NewChannelBillingStatementWithDefaults instantiates a new ChannelBillingStatement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelBillingStatement

`func (o *ChannelBillingStatement) GetChannelBillingStatement() ChannelBillingStatementType`

GetChannelBillingStatement returns the ChannelBillingStatement field if non-nil, zero value otherwise.

### GetChannelBillingStatementOk

`func (o *ChannelBillingStatement) GetChannelBillingStatementOk() (*ChannelBillingStatementType, bool)`

GetChannelBillingStatementOk returns a tuple with the ChannelBillingStatement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelBillingStatement

`func (o *ChannelBillingStatement) SetChannelBillingStatement(v ChannelBillingStatementType)`

SetChannelBillingStatement sets ChannelBillingStatement field to given value.

### HasChannelBillingStatement

`func (o *ChannelBillingStatement) HasChannelBillingStatement() bool`

HasChannelBillingStatement returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelBillingStatement) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelBillingStatement) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelBillingStatement) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelBillingStatement) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelBillingStatement) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelBillingStatement) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelBillingStatement) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelBillingStatement) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


