# ChannelNegotiatedRateDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelNegRates** | Pointer to [**ChannelNegotiatedRateDetailsChannelNegRates**](ChannelNegotiatedRateDetailsChannelNegRates.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelNegotiatedRateDetails

`func NewChannelNegotiatedRateDetails() *ChannelNegotiatedRateDetails`

NewChannelNegotiatedRateDetails instantiates a new ChannelNegotiatedRateDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelNegotiatedRateDetailsWithDefaults

`func NewChannelNegotiatedRateDetailsWithDefaults() *ChannelNegotiatedRateDetails`

NewChannelNegotiatedRateDetailsWithDefaults instantiates a new ChannelNegotiatedRateDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelNegRates

`func (o *ChannelNegotiatedRateDetails) GetChannelNegRates() ChannelNegotiatedRateDetailsChannelNegRates`

GetChannelNegRates returns the ChannelNegRates field if non-nil, zero value otherwise.

### GetChannelNegRatesOk

`func (o *ChannelNegotiatedRateDetails) GetChannelNegRatesOk() (*ChannelNegotiatedRateDetailsChannelNegRates, bool)`

GetChannelNegRatesOk returns a tuple with the ChannelNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelNegRates

`func (o *ChannelNegotiatedRateDetails) SetChannelNegRates(v ChannelNegotiatedRateDetailsChannelNegRates)`

SetChannelNegRates sets ChannelNegRates field to given value.

### HasChannelNegRates

`func (o *ChannelNegotiatedRateDetails) HasChannelNegRates() bool`

HasChannelNegRates returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelNegotiatedRateDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelNegotiatedRateDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelNegotiatedRateDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelNegotiatedRateDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelNegotiatedRateDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelNegotiatedRateDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelNegotiatedRateDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelNegotiatedRateDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


