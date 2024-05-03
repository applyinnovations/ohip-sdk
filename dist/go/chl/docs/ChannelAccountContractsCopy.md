# ChannelAccountContractsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelAccountContractsCopy** | Pointer to [**[]ChannelAccountContractCopyType**](ChannelAccountContractCopyType.md) | List of channel account contracts information to create a copy of. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelAccountContractsCopy

`func NewChannelAccountContractsCopy() *ChannelAccountContractsCopy`

NewChannelAccountContractsCopy instantiates a new ChannelAccountContractsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractsCopyWithDefaults

`func NewChannelAccountContractsCopyWithDefaults() *ChannelAccountContractsCopy`

NewChannelAccountContractsCopyWithDefaults instantiates a new ChannelAccountContractsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelAccountContractsCopy

`func (o *ChannelAccountContractsCopy) GetChannelAccountContractsCopy() []ChannelAccountContractCopyType`

GetChannelAccountContractsCopy returns the ChannelAccountContractsCopy field if non-nil, zero value otherwise.

### GetChannelAccountContractsCopyOk

`func (o *ChannelAccountContractsCopy) GetChannelAccountContractsCopyOk() (*[]ChannelAccountContractCopyType, bool)`

GetChannelAccountContractsCopyOk returns a tuple with the ChannelAccountContractsCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountContractsCopy

`func (o *ChannelAccountContractsCopy) SetChannelAccountContractsCopy(v []ChannelAccountContractCopyType)`

SetChannelAccountContractsCopy sets ChannelAccountContractsCopy field to given value.

### HasChannelAccountContractsCopy

`func (o *ChannelAccountContractsCopy) HasChannelAccountContractsCopy() bool`

HasChannelAccountContractsCopy returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAccountContractsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAccountContractsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAccountContractsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAccountContractsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAccountContractsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAccountContractsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAccountContractsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAccountContractsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


