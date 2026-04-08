# ChannelAccountContractCopyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TargetAccountCode** | Pointer to **string** | Target Account code to which contract to be copied. This is utilised to find account when TargetProfileID is not provided. | [optional] 
**ChannelAccountContractCopyDetails** | Pointer to [**[]ChannelAccountContractCopyDetailsType**](ChannelAccountContractCopyDetailsType.md) | Contract details to copy. | [optional] 

## Methods

### NewChannelAccountContractCopyType

`func NewChannelAccountContractCopyType() *ChannelAccountContractCopyType`

NewChannelAccountContractCopyType instantiates a new ChannelAccountContractCopyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractCopyTypeWithDefaults

`func NewChannelAccountContractCopyTypeWithDefaults() *ChannelAccountContractCopyType`

NewChannelAccountContractCopyTypeWithDefaults instantiates a new ChannelAccountContractCopyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetProfileId

`func (o *ChannelAccountContractCopyType) GetTargetProfileId() UniqueIDType`

GetTargetProfileId returns the TargetProfileId field if non-nil, zero value otherwise.

### GetTargetProfileIdOk

`func (o *ChannelAccountContractCopyType) GetTargetProfileIdOk() (*UniqueIDType, bool)`

GetTargetProfileIdOk returns a tuple with the TargetProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetProfileId

`func (o *ChannelAccountContractCopyType) SetTargetProfileId(v UniqueIDType)`

SetTargetProfileId sets TargetProfileId field to given value.

### HasTargetProfileId

`func (o *ChannelAccountContractCopyType) HasTargetProfileId() bool`

HasTargetProfileId returns a boolean if a field has been set.

### GetTargetAccountCode

`func (o *ChannelAccountContractCopyType) GetTargetAccountCode() string`

GetTargetAccountCode returns the TargetAccountCode field if non-nil, zero value otherwise.

### GetTargetAccountCodeOk

`func (o *ChannelAccountContractCopyType) GetTargetAccountCodeOk() (*string, bool)`

GetTargetAccountCodeOk returns a tuple with the TargetAccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetAccountCode

`func (o *ChannelAccountContractCopyType) SetTargetAccountCode(v string)`

SetTargetAccountCode sets TargetAccountCode field to given value.

### HasTargetAccountCode

`func (o *ChannelAccountContractCopyType) HasTargetAccountCode() bool`

HasTargetAccountCode returns a boolean if a field has been set.

### GetChannelAccountContractCopyDetails

`func (o *ChannelAccountContractCopyType) GetChannelAccountContractCopyDetails() []ChannelAccountContractCopyDetailsType`

GetChannelAccountContractCopyDetails returns the ChannelAccountContractCopyDetails field if non-nil, zero value otherwise.

### GetChannelAccountContractCopyDetailsOk

`func (o *ChannelAccountContractCopyType) GetChannelAccountContractCopyDetailsOk() (*[]ChannelAccountContractCopyDetailsType, bool)`

GetChannelAccountContractCopyDetailsOk returns a tuple with the ChannelAccountContractCopyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountContractCopyDetails

`func (o *ChannelAccountContractCopyType) SetChannelAccountContractCopyDetails(v []ChannelAccountContractCopyDetailsType)`

SetChannelAccountContractCopyDetails sets ChannelAccountContractCopyDetails field to given value.

### HasChannelAccountContractCopyDetails

`func (o *ChannelAccountContractCopyType) HasChannelAccountContractCopyDetails() bool`

HasChannelAccountContractCopyDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


