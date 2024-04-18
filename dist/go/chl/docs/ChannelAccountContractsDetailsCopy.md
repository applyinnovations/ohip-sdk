# ChannelAccountContractsDetailsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelAccountContractsCopyResponse** | Pointer to [**[]ChannelAccountContractCopyResponseType**](ChannelAccountContractCopyResponseType.md) | List of channel account contracts information to create a copy of. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelAccountContractsDetailsCopy

`func NewChannelAccountContractsDetailsCopy() *ChannelAccountContractsDetailsCopy`

NewChannelAccountContractsDetailsCopy instantiates a new ChannelAccountContractsDetailsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractsDetailsCopyWithDefaults

`func NewChannelAccountContractsDetailsCopyWithDefaults() *ChannelAccountContractsDetailsCopy`

NewChannelAccountContractsDetailsCopyWithDefaults instantiates a new ChannelAccountContractsDetailsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelAccountContractsCopyResponse

`func (o *ChannelAccountContractsDetailsCopy) GetChannelAccountContractsCopyResponse() []ChannelAccountContractCopyResponseType`

GetChannelAccountContractsCopyResponse returns the ChannelAccountContractsCopyResponse field if non-nil, zero value otherwise.

### GetChannelAccountContractsCopyResponseOk

`func (o *ChannelAccountContractsDetailsCopy) GetChannelAccountContractsCopyResponseOk() (*[]ChannelAccountContractCopyResponseType, bool)`

GetChannelAccountContractsCopyResponseOk returns a tuple with the ChannelAccountContractsCopyResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountContractsCopyResponse

`func (o *ChannelAccountContractsDetailsCopy) SetChannelAccountContractsCopyResponse(v []ChannelAccountContractCopyResponseType)`

SetChannelAccountContractsCopyResponse sets ChannelAccountContractsCopyResponse field to given value.

### HasChannelAccountContractsCopyResponse

`func (o *ChannelAccountContractsDetailsCopy) HasChannelAccountContractsCopyResponse() bool`

HasChannelAccountContractsCopyResponse returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAccountContractsDetailsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAccountContractsDetailsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAccountContractsDetailsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAccountContractsDetailsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAccountContractsDetailsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAccountContractsDetailsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAccountContractsDetailsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAccountContractsDetailsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


