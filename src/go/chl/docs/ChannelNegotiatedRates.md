# ChannelNegotiatedRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelNegRates** | Pointer to [**[]ChannelNegRateType**](ChannelNegRateType.md) | Negotiated channel rate details to be modified. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChannelNegotiatedRates

`func NewChannelNegotiatedRates() *ChannelNegotiatedRates`

NewChannelNegotiatedRates instantiates a new ChannelNegotiatedRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelNegotiatedRatesWithDefaults

`func NewChannelNegotiatedRatesWithDefaults() *ChannelNegotiatedRates`

NewChannelNegotiatedRatesWithDefaults instantiates a new ChannelNegotiatedRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelNegRates

`func (o *ChannelNegotiatedRates) GetChannelNegRates() []ChannelNegRateType`

GetChannelNegRates returns the ChannelNegRates field if non-nil, zero value otherwise.

### GetChannelNegRatesOk

`func (o *ChannelNegotiatedRates) GetChannelNegRatesOk() (*[]ChannelNegRateType, bool)`

GetChannelNegRatesOk returns a tuple with the ChannelNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelNegRates

`func (o *ChannelNegotiatedRates) SetChannelNegRates(v []ChannelNegRateType)`

SetChannelNegRates sets ChannelNegRates field to given value.

### HasChannelNegRates

`func (o *ChannelNegotiatedRates) HasChannelNegRates() bool`

HasChannelNegRates returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelNegotiatedRates) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelNegotiatedRates) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelNegotiatedRates) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelNegotiatedRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelNegotiatedRates) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelNegotiatedRates) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelNegotiatedRates) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelNegotiatedRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


