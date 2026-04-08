# ChannelAccounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelAccounts** | Pointer to [**[]ChannelAccountInformationType**](ChannelAccountInformationType.md) | Channel account information object to hold details of channel account. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelAccounts

`func NewChannelAccounts() *ChannelAccounts`

NewChannelAccounts instantiates a new ChannelAccounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountsWithDefaults

`func NewChannelAccountsWithDefaults() *ChannelAccounts`

NewChannelAccountsWithDefaults instantiates a new ChannelAccounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelAccounts

`func (o *ChannelAccounts) GetChannelAccounts() []ChannelAccountInformationType`

GetChannelAccounts returns the ChannelAccounts field if non-nil, zero value otherwise.

### GetChannelAccountsOk

`func (o *ChannelAccounts) GetChannelAccountsOk() (*[]ChannelAccountInformationType, bool)`

GetChannelAccountsOk returns a tuple with the ChannelAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccounts

`func (o *ChannelAccounts) SetChannelAccounts(v []ChannelAccountInformationType)`

SetChannelAccounts sets ChannelAccounts field to given value.

### HasChannelAccounts

`func (o *ChannelAccounts) HasChannelAccounts() bool`

HasChannelAccounts returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAccounts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAccounts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAccounts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAccounts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAccounts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAccounts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAccounts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAccounts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


