# ChannelSellLimits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SellLimits** | Pointer to [**[]ChannelSellLimitScheduleType**](ChannelSellLimitScheduleType.md) | Details about a sell limit schedule for a channel or channel room type. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelSellLimits

`func NewChannelSellLimits() *ChannelSellLimits`

NewChannelSellLimits instantiates a new ChannelSellLimits object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitsWithDefaults

`func NewChannelSellLimitsWithDefaults() *ChannelSellLimits`

NewChannelSellLimitsWithDefaults instantiates a new ChannelSellLimits object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChannelSellLimits) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelSellLimits) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelSellLimits) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelSellLimits) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSellLimits

`func (o *ChannelSellLimits) GetSellLimits() []ChannelSellLimitScheduleType`

GetSellLimits returns the SellLimits field if non-nil, zero value otherwise.

### GetSellLimitsOk

`func (o *ChannelSellLimits) GetSellLimitsOk() (*[]ChannelSellLimitScheduleType, bool)`

GetSellLimitsOk returns a tuple with the SellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimits

`func (o *ChannelSellLimits) SetSellLimits(v []ChannelSellLimitScheduleType)`

SetSellLimits sets SellLimits field to given value.

### HasSellLimits

`func (o *ChannelSellLimits) HasSellLimits() bool`

HasSellLimits returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelSellLimits) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelSellLimits) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelSellLimits) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelSellLimits) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


