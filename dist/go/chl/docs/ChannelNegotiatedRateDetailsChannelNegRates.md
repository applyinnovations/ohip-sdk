# ChannelNegotiatedRateDetailsChannelNegRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelNegRate** | Pointer to [**[]ChannelNegRateType**](ChannelNegRateType.md) | List of negotiated channel rates based on search criteria. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewChannelNegotiatedRateDetailsChannelNegRates

`func NewChannelNegotiatedRateDetailsChannelNegRates() *ChannelNegotiatedRateDetailsChannelNegRates`

NewChannelNegotiatedRateDetailsChannelNegRates instantiates a new ChannelNegotiatedRateDetailsChannelNegRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelNegotiatedRateDetailsChannelNegRatesWithDefaults

`func NewChannelNegotiatedRateDetailsChannelNegRatesWithDefaults() *ChannelNegotiatedRateDetailsChannelNegRates`

NewChannelNegotiatedRateDetailsChannelNegRatesWithDefaults instantiates a new ChannelNegotiatedRateDetailsChannelNegRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelNegRate

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetChannelNegRate() []ChannelNegRateType`

GetChannelNegRate returns the ChannelNegRate field if non-nil, zero value otherwise.

### GetChannelNegRateOk

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetChannelNegRateOk() (*[]ChannelNegRateType, bool)`

GetChannelNegRateOk returns a tuple with the ChannelNegRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelNegRate

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) SetChannelNegRate(v []ChannelNegRateType)`

SetChannelNegRate sets ChannelNegRate field to given value.

### HasChannelNegRate

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) HasChannelNegRate() bool`

HasChannelNegRate returns a boolean if a field has been set.

### GetCount

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ChannelNegotiatedRateDetailsChannelNegRates) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


