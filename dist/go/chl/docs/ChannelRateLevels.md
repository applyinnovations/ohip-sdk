# ChannelRateLevels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateLevels** | Pointer to [**ChannelRateLevelsRateLevels**](ChannelRateLevelsRateLevels.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRateLevels

`func NewChannelRateLevels() *ChannelRateLevels`

NewChannelRateLevels instantiates a new ChannelRateLevels object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateLevelsWithDefaults

`func NewChannelRateLevelsWithDefaults() *ChannelRateLevels`

NewChannelRateLevelsWithDefaults instantiates a new ChannelRateLevels object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateLevels

`func (o *ChannelRateLevels) GetRateLevels() ChannelRateLevelsRateLevels`

GetRateLevels returns the RateLevels field if non-nil, zero value otherwise.

### GetRateLevelsOk

`func (o *ChannelRateLevels) GetRateLevelsOk() (*ChannelRateLevelsRateLevels, bool)`

GetRateLevelsOk returns a tuple with the RateLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevels

`func (o *ChannelRateLevels) SetRateLevels(v ChannelRateLevelsRateLevels)`

SetRateLevels sets RateLevels field to given value.

### HasRateLevels

`func (o *ChannelRateLevels) HasRateLevels() bool`

HasRateLevels returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRateLevels) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRateLevels) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRateLevels) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRateLevels) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRateLevels) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRateLevels) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRateLevels) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRateLevels) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


