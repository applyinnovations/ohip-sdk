# ChannelAccountContracts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelAccountContracts** | Pointer to [**ChannelAccountContractsType**](ChannelAccountContractsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelAccountContracts

`func NewChannelAccountContracts() *ChannelAccountContracts`

NewChannelAccountContracts instantiates a new ChannelAccountContracts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractsWithDefaults

`func NewChannelAccountContractsWithDefaults() *ChannelAccountContracts`

NewChannelAccountContractsWithDefaults instantiates a new ChannelAccountContracts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelAccountContracts

`func (o *ChannelAccountContracts) GetChannelAccountContracts() ChannelAccountContractsType`

GetChannelAccountContracts returns the ChannelAccountContracts field if non-nil, zero value otherwise.

### GetChannelAccountContractsOk

`func (o *ChannelAccountContracts) GetChannelAccountContractsOk() (*ChannelAccountContractsType, bool)`

GetChannelAccountContractsOk returns a tuple with the ChannelAccountContracts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountContracts

`func (o *ChannelAccountContracts) SetChannelAccountContracts(v ChannelAccountContractsType)`

SetChannelAccountContracts sets ChannelAccountContracts field to given value.

### HasChannelAccountContracts

`func (o *ChannelAccountContracts) HasChannelAccountContracts() bool`

HasChannelAccountContracts returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAccountContracts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAccountContracts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAccountContracts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAccountContracts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAccountContracts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAccountContracts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAccountContracts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAccountContracts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


