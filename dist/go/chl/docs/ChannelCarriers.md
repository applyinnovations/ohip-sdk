# ChannelCarriers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Carriers** | Pointer to [**ChannelCarriersCarriers**](ChannelCarriersCarriers.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelCarriers

`func NewChannelCarriers() *ChannelCarriers`

NewChannelCarriers instantiates a new ChannelCarriers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelCarriersWithDefaults

`func NewChannelCarriersWithDefaults() *ChannelCarriers`

NewChannelCarriersWithDefaults instantiates a new ChannelCarriers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCarriers

`func (o *ChannelCarriers) GetCarriers() ChannelCarriersCarriers`

GetCarriers returns the Carriers field if non-nil, zero value otherwise.

### GetCarriersOk

`func (o *ChannelCarriers) GetCarriersOk() (*ChannelCarriersCarriers, bool)`

GetCarriersOk returns a tuple with the Carriers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarriers

`func (o *ChannelCarriers) SetCarriers(v ChannelCarriersCarriers)`

SetCarriers sets Carriers field to given value.

### HasCarriers

`func (o *ChannelCarriers) HasCarriers() bool`

HasCarriers returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelCarriers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelCarriers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelCarriers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelCarriers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelCarriers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelCarriers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelCarriers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelCarriers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


