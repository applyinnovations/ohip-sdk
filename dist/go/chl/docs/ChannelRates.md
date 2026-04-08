# ChannelRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributeChannelRates** | Pointer to [**DistributeChannelRatesType**](DistributeChannelRatesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRates

`func NewChannelRates() *ChannelRates`

NewChannelRates instantiates a new ChannelRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRatesWithDefaults

`func NewChannelRatesWithDefaults() *ChannelRates`

NewChannelRatesWithDefaults instantiates a new ChannelRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributeChannelRates

`func (o *ChannelRates) GetDistributeChannelRates() DistributeChannelRatesType`

GetDistributeChannelRates returns the DistributeChannelRates field if non-nil, zero value otherwise.

### GetDistributeChannelRatesOk

`func (o *ChannelRates) GetDistributeChannelRatesOk() (*DistributeChannelRatesType, bool)`

GetDistributeChannelRatesOk returns a tuple with the DistributeChannelRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributeChannelRates

`func (o *ChannelRates) SetDistributeChannelRates(v DistributeChannelRatesType)`

SetDistributeChannelRates sets DistributeChannelRates field to given value.

### HasDistributeChannelRates

`func (o *ChannelRates) HasDistributeChannelRates() bool`

HasDistributeChannelRates returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


